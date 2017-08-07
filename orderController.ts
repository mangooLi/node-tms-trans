//发货单新增列表

interface IOrderViewModel extends IBaseViewModel<IOrderQueryTerms> {
    /**
     * ui-grid控制
     */
    gridOptions: uiGrid.IGridOptionsOf<orderList>;
    /**
     * 调度专员下拉
     */
    dispatchOfficerDropDown: EmployeeListItemResponse[];
    /**
     * 订单状态下拉
     */
    orderStatusDropDown: ValueListItemResponse[];
    /**
     * 删除订单
     */
    deleteOrder: (id: string) => void;
    /**
     * 终结订单
     */
    endOrder: (id: string) => void;
    /**
     * 添加/复制订单
     */
    addOrCopyOrder: () => void;
    /**
     * 编辑订单
     */
    editOrder: (id: string) => void;
    /**
     * 动态列表高度
     */
    heightA:number;
}

interface IOrderQueryTerms {
    /**
     * 订单编号
     */
    orderId: string;
    /**
     * 客户单位
     */
    clientName: string;
    /**
     * 线路地址
     */
    route: string;
    /**
     * 订单状态
     */
    orderStatus: string;
    /**
     * 发货起始时间
     */
    shipStartTime: string;
    /**
     * 发货结束时间
     */
    shipEndTime: string;
    /**
     * 发货地址
     */
    shipAddress: string;
    /**
     * 送货地址
     */
    deliverAddress: string;
    /**
     * 调度专员
     */
    dispatchOfficerId: string;
}

class OrderController extends ListController<IOrderViewModel, IOrderQueryTerms> {
    gridApi: uiGrid.IGridApiOf<orderList>;
    orderBy: number = 0;
    asc: boolean = true;
    selectedId: string;

    constructor($scope: IOrderViewModel,private orderService: IorderService, private employeeService: IEmployeeService,
    private $state: angular.ui.IStateService, private $ngBootbox: BootboxService, private valueService: IValueService,private $location:ng.ILocationService) {
        super($scope);
        this.init();
    }

    init(): void {
        super.init();
        this.$scope.deleteOrder = this.deleteOrder;
        this.$scope.endOrder = this.endOrder;
        this.$scope.addOrCopyOrder = this.addOrCopyOrder;
        this.$scope.editOrder = this.editOrder;
        this.$scope.$on("WildDog:Order12", this.onWilddogOrderEvent);

        $('#opendataTime').click(function () {
            $('#dataTime').datetimepicker('show');
        });
        $('#opendataTimeEnd').click(function () {
            $('#dataTimeEnd').datetimepicker('show');
        });

        this.$scope.queryTerms = {
            orderId: "",
            clientName: "",
            route: "",
            orderStatus: "",
            shipStartTime: "",
            shipEndTime: "",
            shipAddress: "",
            deliverAddress: "",
            dispatchOfficerId: ""
        };

        this.$scope.gridOptions = {
            enableSelectAll: false,
            paginationPageSizes: [10, 20, 30],
            useExternalPagination: true,
            useExternalSorting: true,
            enableFullRowSelection: true,
            enableColumnResizing: true,
            columnDefs: [
                { displayName: "订单编号", field: 'orderId', enableColumnMenu: false, cellTooltip: true, headerTooltip: true, width: '9%' },
                { displayName: "客户单位", field: 'clientName', enableColumnMenu: false, cellTooltip: true, headerTooltip: true, width: '10%' },
                { displayName: "发货地址", field: 'startAddress', enableColumnMenu: false, cellTooltip: true, headerTooltip: true, width: '10%' },
                { displayName: '送货地址', field: 'endAddress', enableColumnMenu: false, cellTooltip: true, headerTooltip: true, width: '10%' },
                { displayName: '货物名称', field: 'goodsName', enableColumnMenu: false, cellTooltip: true, headerTooltip: true },
                { displayName: '货物数量', field: 'goodsNum', enableColumnMenu: false, cellTooltip: true, headerTooltip: true },
                { displayName: '所需车长', field: 'carLength', enableColumnMenu: false, cellTooltip: true, headerTooltip: true },
                { displayName: '发货时间', field: 'shipTime', enableColumnMenu: false, cellTooltip: true, headerTooltip: true, width: '9%' },
                { displayName: '调度专员', field: 'dispatcher', enableColumnMenu: false, cellTooltip: true, headerTooltip: true },
                { displayName: '紧急程度', field: 'urgency', enableColumnMenu: false, cellTooltip: true, headerTooltip: true },
                { displayName: '订单状态', field: 'orderStatus', enableColumnMenu: false, cellTooltip: true, headerTooltip: true },
                {
                    displayName: "操作",
                    field: 'orderStatus',
                    cellTemplate: '<div ng-if="row.entity.orderStatus == \'退回下单\'">'
                    + '<a class="fa fa-minus-circle primary text-primary m-l-xs" ng-click="grid.appScope.endOrder(row.entity.id)" title="终结订单"></a>'
                    + '<a class="fa fa-edit m-l-xs  primary text-info" title="编辑重下" ng-click="grid.appScope.editOrder(row.entity.id)" ></a>'
                    + '</div>'
                    + '<div ng-if="row.entity.orderStatus == \'派车中\'">'
                    + '<a class="fa fa-minus-circle primary text-primary m-l-xs" ng-click="grid.appScope.endOrder(row.entity.id)" title="终结订单"></a>'
                    + '<a class="primary fa fa-trash-o text-danger m-l-xs" title="删除" ng-click="grid.appScope.deleteOrder(row.entity.id)"></a>'
                    + '</div>', enableColumnMenu: false, enableSorting: false, width: '4%'
                }
            ],
            onRegisterApi: (gridApi) => {
                this.gridApi = gridApi;
                gridApi.pagination.on.paginationChanged(this.$scope, this.paginationChanged);
                gridApi.core.notifyDataChange("options");
                gridApi.core.on.sortChanged(this.$scope, this.sortChange);
                gridApi.selection.on.rowSelectionChanged(this.$scope, this.selectChange);
            }
        };
        this.$scope.gridOptions.multiSelect = false;
        this.query();
        this.loadDispatchOfficerDropDown();
        this.loadOrderStatusDropDown();
    }

    localHistory():void{
        super.localHistory(this.$state)
    }
    getHistory():void{
        super.getHistory(this.$state,this.$location)
    }

    loadDispatchOfficerDropDown(): void {
        this.employeeService.getList("2", "", "", "", "", true,0, -1).then(result => {
            this.$scope.dispatchOfficerDropDown = result.data.list;
        });
    }

    loadOrderStatusDropDown(): void {
        this.$scope.orderStatusDropDown = this.valueService.getOrderStatusList().list;
    }

    loadData(queryTerms: IOrderQueryTerms, skip: number, count: number): void {
        this.orderService.list(this.orderBy.toString(), this.asc, queryTerms.orderId, queryTerms.clientName, queryTerms.route,
            queryTerms.shipStartTime, queryTerms.shipEndTime, queryTerms.orderStatus, "", "", queryTerms.dispatchOfficerId,
            queryTerms.shipAddress, queryTerms.deliverAddress, "", skip, count).then(result => {
                this.$scope.gridOptions.totalItems = result.data.total;
                this.$scope.gridOptions.data = result.data.list;
                this.$scope.heightA = ((result.data.list.length * 39) + 95);
                if (skip == 0) {
                    this.$scope.gridOptions.paginationCurrentPage = 1;
                }
                this.$scope.querying = false;
            }, error => {
                this.$scope.querying = false;
            });
    }

    sortChange=(grid: uiGrid.IGridInstanceOf<orderList>, sortColumns: Array<uiGrid.IGridColumnOf<orderList>>)=>{
        if (sortColumns.length == 0) {
            this.reload();
        } else {
            let sortItem = sortColumns[0];
            switch (sortItem.name) {
                case "orderId": {
                    this.orderBy = 1;
                } break;
                case "clientName": {
                    this.orderBy = 2;
                } break;
                case "startAddress": {
                    this.orderBy = 3;
                } break;
                case "viaAddress": {
                    this.orderBy = 4;
                } break;
                case "endAddress": {
                    this.orderBy = 5;
                } break;
                case "goodsName": {
                    this.orderBy = 6;
                } break;
                case "goodsNum": {
                    this.orderBy = 7;
                } break;
                case "carLength": {
                    this.orderBy = 8;
                } break;
                case "shipTime": {
                    this.orderBy = 9;
                } break;
                case "urgency": {
                    this.orderBy = 10;
                } break;
                case "orderStatus": {
                    this.orderBy = 11;
                } break;
                case "placeOrderTime": {
                    this.orderBy = 12;
                } break;
            }
            this.asc = sortItem.sort.direction == "asc";
            this.reload();
        }
    }

    selectChange = (row: uiGrid.IGridRowOf<orderList>) => {
        row.isSelected?this.selectedId = row.entity.id:this.selectedId="";
    }

    /**
     * 监听野狗事件
     */
    onWilddogOrderEvent = (event: ng.IAngularEvent, data: any) => {
        this.query();
    }

    /**
     * 删除订单
     */
    deleteOrder = (id: string) => {
        this.$ngBootbox.confirm("是否删除订单").then(e => {
            this.orderService.delete(id).then(result => {
                this.query();
            });
        });
    }

    /**
     * 终结订单
     */
    endOrder = (id: string) => {
        this.$ngBootbox.confirm("是否终结订单").then(e => {
            this.orderService.editOrderStatus(id, "", "8", "", "").then(result => {
                this.query();
            });
        });
    }

    /**
     * 复制或新增订单  
     */
    addOrCopyOrder = () => {
        if (this.selectedId == undefined || this.selectedId == "") {
            this.$state.go("app.order.orderAdd", { name: "add" });
        } else {
            this.$state.go("app.order.orderAdd", { id: this.selectedId, name: "copy" });
        }
    }

    /**
     * 编辑重下订单
     */
    editOrder = (id: string) => {
        this.$state.go("app.order.orderAdd", { id: id, name: "edit" });
    }
}

angular.module("tms").controller("orderController", ["$scope","orderService", "employeeService", "$state", "$ngBootbox", "valueService","$location", OrderController]);