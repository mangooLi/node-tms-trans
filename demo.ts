{
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
        this.deleteOrder = this.deleteOrder;
        this.endOrder = this.endOrder;
        this.addOrCopyOrder = this.addOrCopyOrder;
        this.editOrder = this.editOrder;
        this.$on("WildDog:Order12", this.onWilddogOrderEvent);

        $('#opendataTime').click(function () {
            $('#dataTime').datetimepicker('show');
        });
        $('#opendataTimeEnd').click(function () {
            $('#dataTimeEnd').datetimepicker('show');
        });

        this.queryTerms = {
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

        this.gridOptions = {
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
        this.gridOptions.multiSelect = false;
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
            this.dispatchOfficerDropDown = result.data.list;
        });
    }

    loadOrderStatusDropDown(): void {
        this.orderStatusDropDown = this.valueService.getOrderStatusList().list;
    }

    loadData(queryTerms: IOrderQueryTerms, skip: number, count: number): void {
        this.orderService.list(this.orderBy.toString(), this.asc, queryTerms.orderId, queryTerms.clientName, queryTerms.route,
            queryTerms.shipStartTime, queryTerms.shipEndTime, queryTerms.orderStatus, "", "", queryTerms.dispatchOfficerId,
            queryTerms.shipAddress, queryTerms.deliverAddress, "", skip, count).then(result => {
                this.gridOptions.totalItems = result.data.total;
                this.gridOptions.data = result.data.list;
                this.heightA = ((result.data.list.length * 39) + 95);
                if (skip == 0) {
                    this.gridOptions.paginationCurrentPage = 1;
                }
                this.querying = false;
            }, error => {
                this.querying = false;
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

    
    onWilddogOrderEvent = (event: ng.IAngularEvent, data: any) => {
        this.query();
    }

    
    deleteOrder = (id: string) => {
        this.$ngBootbox.confirm("是否删除订单").then(e => {
            this.orderService.delete(id).then(result => {
                this.query();
            });
        });
    }

    
    endOrder = (id: string) => {
        this.$ngBootbox.confirm("是否终结订单").then(e => {
            this.orderService.editOrderStatus(id, "", "8", "", "").then(result => {
                this.query();
            });
        });
    }

    
    addOrCopyOrder = () => {
        if (this.selectedId == undefined || this.selectedId == "") {
            this.$state.go("app.order.orderAdd", { name: "add" });
        } else {
            this.$state.go("app.order.orderAdd", { id: this.selectedId, name: "copy" });
        }
    }

    
    editOrder = (id: string) => {
        this.$state.go("app.order.orderAdd", { id: id, name: "edit" });
    }
}