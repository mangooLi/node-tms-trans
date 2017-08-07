//发货单新增/编辑/复制/询价复制

interface IAddOrderViewModel extends ng.IScope {
    /**
     * 附件上传组件
     */
    attachmentUploader: any;
    /**
     * 商务专员下拉
     */
    businessOfficerDropDown: EmployeeListItemResponse[];
    /**
     * 客服专员下拉
     */
    customerServiceOfficerDropDown: EmployeeListItemResponse[];
    /**
     * 调度专员下拉
     */
    dispatchOfficerDropDown: EmployeeListItemResponse[];
    /**
     * 货物类别下拉
     */
    goodsTypeDropDown: GoodsTypeListItemResponse[];
    /**
     * 货物下拉
     */
    goodsDropDown: GoodsListItemResponse[];
    /**
     * 结算单位下拉
     */
    settleDropDown: SettleListItemResponse[];
    /**
     * 紧急程度单位下拉
     */
    urgencyUnitDropDown: ValueListItemResponse[];
    /**
     * 货物数量单位下拉
     */
    goodsNumUnitDropDown: ValueListItemResponse[];
    /**
     * 吨位范围下拉
     */
    tonRangeDropDown: LinePriceListItemResponse[];
    /**
     * 应收单价单位下拉
     */
    priceUnitDropDown: ValueListItemResponse[];
    /**
     * 结算方式下拉
     */
    settleTypeDropDown: ValueListItemResponse[];
    /**
     * 是否含税下拉
     */
    includeTaxDropDown: ValueListItemResponse[];
    /**
     * 工程总量单位下拉
     */
    projectTotalUnitDropDown: ValueListItemResponse[];
    /**
     * 车型下拉
     */
    carTypeDropDown: ValueListItemResponse[];
    /**
     * 车长下拉
     */
    carLengthDropDown: ValueListItemResponse[];
    /**
     * 承运方式下拉
     */
    carriageWayDropDown: ValueListItemResponse[];
    /**
     * 订单编号
     */
    orderId: string;
    /**
     * 紧急程度
     */
    urgency: number;
    /**
     * 紧急程度单位
     */
    urgencyUnit: string;
    /**
     * 计划专员
     */
    planOfficer: string;
    /**
     * 商务专员
     */
    businessOfficer: EmployeeListItemResponse;
    /**
     * 商务专员id
     */
    businessOfficerId: string;
    /**
     * 客服专员
     */
    customerServiceOfficer: EmployeeListItemResponse;
    /**
     * 客服专员id
     */
    customerServiceOfficerId: string;
    /**
     * 调度专员
     */
    dispatchOfficer: EmployeeListItemResponse;
    /**
     * 调度专员id
     */
    dispatchOfficerId: string;
    /**
     * 客户编号
     */
    clientId: string;
    /**
     * 客户单位名称
     */
    clientName: string;
    /**
     * 发货计划人编号
     */
    consignorId: string;
    /**
     * 发货计划人名称
     */
    consignorName: string;
    /**
     * 发货计划人号码
     */
    consignorPhone: string;
    /**
     * 发货内容
     */
    shipPriceContent: string;
    /**
     * 中转地
     */
    viaList: viaAddressList[];
    /**
     * 车型
     */
    carType: string;
    /**
     * 车长
     */
    carLength: string;
    /**
     * 承运方式
     */
    carriageWay: string;
    /**
     * 装车效果
     */
    loadingResult: string;
    /**
     * 发货地省编号
     */
    shipProvinceCode: string;
    /**
     * 发货地市编号
     */
    shipCityCode: string;
    /**
     * 发货地区编号
     */
    shipAreaCode: string;
    /**
     * 发货地详细地址
     */
    shipAddress: string;
    /**
     * 送货地省编号
     */
    deliverProvinceCode: string;
    /**
     * 送货地市编号
     */
    deliverCityCode: string;
    /**
     * 发货地区编号
     */
    deliverAreaCode: string;
    /**
     * 发货地详细地址
     */
    deliverAddress: string;
    /**
     * 中转地省名称
     */
    viaProvince: string;
    /**
     * 中转地市名称
     */
    viaCity: string;
    /**
     * 中转地区名称
     */
    viaArea: string;
    /**
     * 发货时间
     */
    shipTime: string;
    /**
     * 到货时间
     */
    arriveTime: string;
    /**
     * 里程数
     */
    mileage: number;
    /**
     * 货物类型编号
     */
    goodsTypeId: string;
    /**
     * 货物类别
     */
    goodsTypeName: string;
    /**
     * 货物编号
     */
    goodsId: string;
    /**
     * 货物名称
     */
    goodsName: string;
    /**
    * 货物名称自动补全事件
    */
    onGoodsNameAutoComplate: (value: string) => any;
    /**
     * 货物名称选中事件
     */
    onGoodsNameSelected: (selected: angucomplete<GoodsListItemResponse>) => void;
    /**
     * 货物数量
     */
    goodsNum: number;
    /**
     * 货物数量单位
     */
    goodsNumUnit: string;
    /**
     * 货物数量2
     */
    goodsNumTwo: string;
    /**
     * 货物数量2单位
     */
    goodsNumTwoUnit: string;
    /**
     * 吨位范围
     */
    tonRange: string;
    /**
     * 应收单价
     */
    receivablePrice: number;
    /**
     * 应收单价单位
     */
    receivablePriceUnit: string;
    /**
     * 应收总价
     */
    receivableTotal: number;
    /**
     * 结算方式
     */
    settleType: string;
    /**
     * 是否含税
     */
    includeTax: string;
    /**
     * 应收说明
     */
    receivableRemarks: string;
    /**
     * 结算单位编号
     */
    settleId: string;
    /**
     * 结算单位
     */
    settleName: string;
    /**
     * 工程编号
     */
    projectId: string;
    /**
     * 工程代号
     */
    projectCode: string;
    /**
     * 工程名称
     */
    projectName: string;
    /**
     * 发货单号
     */
    shipOrderId: string;
    /**
     * 收货单位编号
     */
    takeGoodsCompanyId: string;
    /**
     * 收货单位
     */
    takeGoodsCompanyName: string;
    /**
     * 收货人
     */
    consignee: string;
    /**
     * 收货人号码
     */
    consigneePhone: string;
    /**
     * 工程总量
     */
    projectTotal: string;
    /**
     * 工程总量单位
     */
    projectTotalUnit: string;
    /**
     * 总线路信息
     */
    orderLine: IOrderLineViewModel[];
    /**
     * 子线路信息
     */
    childOrderLine: IChildOrderLineViewModel[];
    /**
     * 新增总线路事件
     */
    addOrderLine: (type: boolean) => void;
    /**
     * 新增子线路事件
     */
    addChildOrderLine: () => void;
    /**
     * 保存总线路事件
     */
    saveOrderLine: (type: boolean) => void;
    /**
     * 保存子线路事件
     */
    saveChildOrderLine: () => void;
    /**
     * 编辑总线路事件
     */
    editOrderLine: () => void;
    /**
     * 编辑子线路事件
     */
    editChildOrderLine: (index: number) => void;
    /**
     * 删除总线路
     */
    deleteOrderLine: () => void;
    /**
     * 删除子线路
     */
    deleteChildOrderLine: (index: number) => void;
    /**
     * 添加中转地
     */
    addVia: () => void;
    /**
     * 显示添加总线路按钮
     */
    showAddOrderBtn: boolean;
    /**
     * 显示添加子线路按钮
     */
    showAddChildOrderBtn: boolean;
    /**
     * 保存按钮
     */
    orderSave: () => void;
    /**
     * 客户单位自动补全事件
     */
    onClientAutoComplate: (value: string) => any;
    /**
     * 选择客户单位事件
     */
    onClientSelected: (selected: angucomplete<ClientListItemResponse>) => void;
    /**
     * 客户单位是否可编辑
     */
    isClientCanEdit: boolean;
    /**
     * 是否禁用保存按钮
     */
    enabledSaveBtn: boolean;
    /**
     * 订单附件
     */
    attachment: attachmentList[];
    /**
     * 订单备注
     */
    orderRemarks: string;
    /**
     * 发货计划人自动补全事件
     */
    onConsignorAutoComplate: (value: string) => any;
    /**
     * 发货计划人选中事件
     */
    onConsignorSelected: (selected: angucomplete<CustomerRepresentativeListItemResponse>) => void;
    /**
     * 改变货物类别获取货物
     */
    changeGoodsTypeEvent: () => void;

    /**
     * 工程自动补全事件
     */
    onProjectAutoComplate: (value: string) => any;
    /**
     * 结算单位自动补全
     */
    onSettleAutoComplate: (value: string) => any;
    /**
     * 结算单位选中事件
     */
    onsettleSelected: (select: angucomplete<SettleListItemResponse>) => void;

    /**
     * 选中工程事件
     */
    onProjectSelected: (select: angucomplete<ProjectListItemResponse>) => void;

    /**
     * 改变货物获取吨位范围事件
     */
    // changeGoodsGetTonRangeList(): void;
    /**
     * 改变吨位范围获取应收信息
     */
    changeTonRangeGetReceivableEvent(): void;
    /**
     * 删除中转地
     */
    deleteVia(index: number): void;

    viaListData: viaAddressList[];

    /**
     * 是否选中省市区
     */
    ischecked: boolean;
    /**
     * 是否验证省市区
     */
    isRequired: boolean;
    /**
     * 返回
     */
    shipBack(): void
    /**
     * 发货单详情名称
     */
    orderName: string;
    /**
     * 起始地市list
     */
    shipCityList: lineAddress[];
    /**
     * 起始地区
     */
    shipAreaList: lineAddress[]
    /**
     * 目的地市list
     */
    deliverCityList: lineAddress[];
    /**
     * 目的地区
     */
    deliverAreaList: lineAddress[];
    reckoner: string;

}

/**
 * 总线路视图
 */
interface IOrderLineViewModel {
    /**
     * 中转地数据
     */
    viaListData: viaAddressList[];
    /**
     * 发货地省
     */
    shipProvinceCode: string;
    /**
     * 发货地市
     */
    shipCityCode: string;
    /**
     * 发货地区
     */
    shipAreaCode: string;
    /**
     * 发货地详细
     */
    shipAddress: string;
    /**
     * 送货地省
     */
    deliverProvinceCode: string;
    /**
     * 送货地市
     */
    deliverCityCode: string;
    /**
     * 送货地区
     */
    deliverAreaCode: string;
    /**
     * 送货地详细
     */
    deliverAddress: string;
    /**
     * 发货时间
     */
    shipTime: string;
    /**
     * 到货时间
     */
    arriveTime: string;
    /**
     * 里程数
     */
    mileage: number;
    /**
     * 货物类别编号
     */
    goodsTypeId: string;
    /**
     * 货物类别名称
     */
    goodsTypeName?: string;
    /**
     * 货物编号
     */
    goodsId: string;
    /**
     * 货物名称
     */
    goodsName?: string;
    /**
     * 货物数量
     */
    goodsNum: number;
    /**
     * 货物数量单位
     */
    goodsNumUnit: string;
    /**
     * 货物数量2
     */
    goodsNumTwo: string;
    /**
     * 货物数量单位2
     */
    goodsNumTwoUnit: string;
    /**
     * 吨位范围
     */
    tonRange: string;
    /**
     * 货物数量1单位（Str）
     */
    goodsNumUnitStr?: string;
    /**
     * 起始地详细地址(省市区str)
     */
    shipDetail: string;
    /**
     * 送货地址详细地址(省市区str)
     */
    deliverDetail: string;
}
/**
 * 子线路视图
 */
interface IChildOrderLineViewModel {
    /**
     * 自线路编号
     */
    orderId?: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 发货地省
     */
    shipProvinceCode: string;
    /**
     * 发货地市
     */
    shipCityCode: string;
    /**
     * 发货地区
     */
    shipAreaCode: string;
    /**
     * 发货地详细
     */
    shipAddress: string;
    /**
     * 中转地数据
     */
    viaListData: { province: string, city: string, county: string, index?: number }[];
    /**
     * 收货地省
     */
    deliverProvinceCode: string;
    /**
     * 收货地市
     */
    deliverCityCode: string;
    /**
     * 收货地区
     */
    deliverAreaCode: string;
    /**
     * 收货地详细
     */
    deliverAddress: string;
    /**
     * 发货时间
     */
    shipTime: string;
    /**
     * 到货时间
     */
    arriveTime: string;
    /**
     * 里程数
     */
    mileage: number;
    /**
     * 货物类别编号
     */
    goodsTypeId: string;
    /**
     * 货物类别名称
     */
    goodsTypeName: string;
    /**
     * 货物编号
     */
    goodsId: string;
    /**
     * 货物名称
     */
    goodsName: string;
    /**
     * 货物数量
     */
    goodsNum: number;
    /**
     * 货物数量单位
     */
    goodsNumUnit: string;
    /**
     * 货物数量2
     */
    goodsNumTwo: string;
    /**
     * 货物数量单位2
     */
    goodsNumTwoUnit: string;
    /**
     * 吨数范围
     */
    tonRange: string;
    /**
     * 应收单价
     */
    receivablePrice: number;
    /**
     * 应收单价单位Str
     */
    receivablePriceUnitStr: string;
    /**
     * 应收单价单位
     */
    receivablePriceUnit: string;
    /**
     * 应收总价
     */
    receivableTotal: number;
    /**
     * 结算类型
     */
    settleType: string;
    /**
     * 是否含税
     */
    includeTax: string;
    /**
     * 应收说明
     */
    receivableRemarks: string;
    /**
     * 结算单位编号
     */
    settleId: string;
    /**
     * 结算单位名称
     */
    reckoner: string;
    /**
     * 工程编号
     */
    projectid: string;
    /**
     * 工程代号
     */
    projectCode: string;
    /**
     * 工程名称
     */
    projectName: string;
    /**
     * 发货单号
     */
    shipOrderId: string;
    /**
     * 收货单位编号
     */
    takeGoodsCompanyId: string;
    /**
     * 收货单位名称
     */
    takeGoodsCompanyName: string;
    /**
     * 收货人
     */
    consignee: string;
    /**
     * 收货人联系电话
     */
    consigneePhone: string;
    /**
     * 工程总量
     */
    projectTotal: string;
    /**
     * 工程总量单位
     */
    projectTotalUnit: string;

    /**
     * 货物数量1(str)
     */
    goodsNumUnitStr?: string;
    /**
     * 结算方式str
     */
    settleTypeStr?: string;

    /**
     * 起始地详细地址(省市区str)
     */
    shipDetail: string;
    /**
     * 送货地址详细地址(省市区str)
     */
    deliverDetail: string;
}

/**
 * 页面操作方式
 */
enum AddOrderOperationType {
    Add = 0,
    Copy = 1,
    Edit = 2,
    Inquiry = 3
}

class AddOrderController {

    /**
     * 订单编号-询价单编号
     */
    id: string;
    /**
     * 客户编号
     */
    clientId: string;
    /**
     * 页面操作类型（默认为添加行为）
     */
    operationType: AddOrderOperationType = AddOrderOperationType.Add;
    /**
     * 存储完整的中转地信息
     */
    // viaListData: { province: string, city: string, county: string, index: number }[] = [];
    /**
     * 正在编辑的子线路序号
     */
    childOrderIndex: number = -1;
    //附件
    uploaderList: Array<attachmentList>;
    baseImageUrl: string;

    constructor(private $scope: IAddOrderViewModel, private areaService: IAreaService, private projectService: IProjectService, private customerRepresentativeService: ICustomerRepresentativeService, private clientService: IClientService, private linePriceService: ILinePriceService, private employeeService: IEmployeeService, private goodsTypeService: IGoodsTypeService, private fileUploader: any, private routeService: routeService, private $http: ng.IHttpService, private inquiryService: IInquiryService,
        private goodsService: IGoodsService, private settleService: ISettleService, private valueService: IValueService, private $ngBootbox: BootboxService,
        private orderService: IorderService, private $state: angular.ui.IStateService, private $location: ng.ILocationService, private commonService: ICommonService, private $q: ng.IQService) {

        //附件配置
        this.baseImageUrl = this.routeService.getBaseUrl() + "attachment/";
        this.uploaderList = [];

        if (this.$location.search().name == "copy") {
            this.operationType = AddOrderOperationType.Copy;
            this.$scope.orderName = "发货单复制新增";
            this.id = this.$location.search().id;
        } else if (this.$location.search().name == "edit") {
            this.operationType = AddOrderOperationType.Edit;
            this.$scope.orderName = "发货单编辑重下";
            this.id = this.$location.search().id;
        } else if (this.$location.search().name == "inquiry") {
            this.operationType = AddOrderOperationType.Inquiry;
            this.$scope.orderName = "发货单复制新增";
            this.id = this.$location.search().id;
        }
        this.init();
    }

    init(): void {
        this.$scope.planOfficer = JSON.parse(window.localStorage.getItem("loginData")).realName;
        this.$scope.attachmentUploader = new this.fileUploader({ url: this.baseImageUrl });
        this.$scope.attachmentUploader.filters.push({ name: 'imageFilter', fn: this.commonService.ownFilter });
        this.$scope.attachmentUploader.onSuccessItem = (fileItem: any, response: any) => { this.onSuccessItem(fileItem.file.name, response.filePath, 1, fileItem.file); }
        this.$scope.attachmentUploader.onDelete = (item) => {
            this.commonService.onDelete(item, this.uploaderList);
        };
        this.$scope.businessOfficerDropDown = [];
        this.$scope.customerServiceOfficerDropDown = [];
        this.$scope.dispatchOfficerDropDown = [];
        this.$scope.goodsTypeDropDown = [];
        this.$scope.goodsDropDown = [];
        this.$scope.settleDropDown = [];
        this.$scope.urgencyUnitDropDown = [];
        this.$scope.goodsNumUnitDropDown = [];
        this.$scope.settleTypeDropDown = [];
        this.$scope.includeTaxDropDown = [];
        this.$scope.projectTotalUnitDropDown = [];
        this.$scope.carTypeDropDown = [];
        this.$scope.carLengthDropDown = [];
        this.$scope.carriageWayDropDown = [];
        this.$scope.orderId = "";
        this.$scope.urgency = null;
        this.$scope.urgencyUnit = "1";
        this.$scope.businessOfficer = null;
        this.$scope.customerServiceOfficer = null;
        this.$scope.dispatchOfficer = null;
        this.$scope.clientId = "";
        this.$scope.consignorId = "";
        this.$scope.consignorName = "";
        this.$scope.shipPriceContent = "";
        this.$scope.carType = "";
        this.$scope.carLength = "";
        this.$scope.carriageWay = "";
        this.$scope.loadingResult = "";
        this.$scope.shipProvinceCode = "";
        this.$scope.shipCityCode = "";
        this.$scope.shipAreaCode = "";
        this.$scope.shipAddress = "";
        this.$scope.deliverProvinceCode = "";
        this.$scope.deliverCityCode = "";
        this.$scope.deliverAreaCode = "";
        this.$scope.viaCity = "-1"
        this.$scope.viaProvince = "-1";
        this.$scope.viaArea = "-1";
        this.$scope.deliverAddress = "";
        this.$scope.shipTime = "";
        this.$scope.arriveTime = "";
        this.$scope.mileage = null;
        this.$scope.goodsTypeId = "";
        this.$scope.goodsTypeName = "";
        this.$scope.goodsId = "";
        this.$scope.goodsName = "";
        this.$scope.goodsNum = null;
        this.$scope.goodsNumUnit = "";
        this.$scope.goodsNumTwo = null;
        this.$scope.goodsNumTwoUnit = "";
        this.$scope.tonRange = "";
        this.$scope.receivablePrice = null;
        this.$scope.receivablePriceUnit = "";
        this.$scope.receivableTotal = null;
        this.$scope.settleType = "";
        this.$scope.includeTax = "";
        this.$scope.receivableRemarks = "";
        this.$scope.settleId = "";
        this.$scope.settleName = "";
        this.$scope.projectId = "";
        this.$scope.projectCode = "";
        this.$scope.projectName = "";
        this.$scope.shipOrderId = "";
        this.$scope.takeGoodsCompanyId = "";
        this.$scope.takeGoodsCompanyName = "";
        this.$scope.consignee = "";
        this.$scope.consigneePhone = "";
        this.$scope.projectTotal = null;
        this.$scope.projectTotalUnit = "";
        this.$scope.childOrderLine = [];


        //按钮
        this.$scope.showAddChildOrderBtn = true;
        this.$scope.showAddOrderBtn = true;
        this.$scope.orderSave = this.orderSave;

        //数组
        this.$scope.viaListData = [];
        this.$scope.orderLine = [];

        this.$scope.ischecked = false;
        this.$scope.isRequired = true;

        this.initDateTimePicker();
        this.loadData();


        //共有事件
        this.loadDropDown();//加载枚举

        this.$scope.addVia = this.addVia;
        this.$scope.deleteVia = this.deleteVia;

        this.$scope.onClientSelected = this.onClientSelected;

        this.$scope.addOrderLine = this.addOrderLine;
        this.$scope.addChildOrderLine = this.addChildOrderLine;
        this.$scope.saveOrderLine = this.saveOrderLine;
        this.$scope.saveChildOrderLine = this.saveChildOrderLine;
        this.$scope.editOrderLine = this.editOrderLine;
        this.$scope.editChildOrderLine = this.editChildOrderLine;
        this.$scope.deleteOrderLine = this.deleteOrderLine;
        this.$scope.deleteChildOrderLine = this.deleteChildOrderLine;

        this.$scope.shipBack = this.shipBack;

        //change事件
        this.$scope.changeGoodsTypeEvent = this.changeGoodsTypeEvent;
        // this.$scope.changeGoodsGetTonRangeList = this.changeGoodsGetTonRangeList;
        this.$scope.changeTonRangeGetReceivableEvent = this.changeTonRangeGetReceivableEvent;
        //自动补全事件
        this.$scope.onClientAutoComplate = this.onClientAutoComplate;
        this.$scope.onConsignorAutoComplate = this.onConsignorAutoComplate;
        this.$scope.onConsignorSelected = this.onConsignorSelected;
        this.$scope.onGoodsNameAutoComplate = this.onGoodsNameAutoComplate;
        this.$scope.onGoodsNameSelected = this.onGoodsNameSelected;
        this.$scope.onProjectAutoComplate = this.onProjectAutoComplate;

        this.$scope.onProjectSelected = this.onProjectSelected;

        this.$scope.onsettleSelected = this.onsettleSelected;
        this.$scope.onSettleAutoComplate = this.onSettleAutoComplate;


    }

    loadData(): void {
        if (this.operationType == AddOrderOperationType.Add) {
            this.setShipAndArriveTime();
        } else if (this.operationType == AddOrderOperationType.Copy) {
            this.getOrderInfo();
            this.getChildInfo();
            this.setShipAndArriveTime();
            this.$scope.ischecked = true;
        } else if (this.operationType == AddOrderOperationType.Edit) {
            this.getOrderInfo();
            this.$scope.isRequired = true;
            this.getChlderInfoEdit();
            this.$scope.ischecked = true;
        } else if (this.operationType == AddOrderOperationType.Inquiry) {
            this.getInquiryInfo();
            this.setShipAndArriveTime();
            this.$scope.ischecked = true;
        }
    }

    /**
     * 添加中转地
     */
    addVia = () => {
        if (this.$scope.viaProvince == "-1" || this.$scope.viaCity == "-1" || this.$scope.viaArea == "-1") {
            this.$ngBootbox.alert("请填写完整的中转地");
            return;
        }
        let index = this.$scope.viaListData.length + 1;
        //data
        this.$scope.viaListData.push({
            index: index++,
            // province: this.$scope.viaProvince,
            // city: this.$scope.viaCity,
            // county: this.$scope.viaArea
            province: $(".province option:selected")[2].innerHTML,
            city: $(".city option:selected")[2].innerHTML,
            county: $(".area option:selected")[2].innerHTML
        });
    }

    /**
     * 删除中转地
     */
    deleteVia = (index: number) => {
        this.$scope.viaListData.splice(index - 1, 1);
        //重置index

        this.$scope.viaListData.forEach((item, index) => {
            this.$scope.viaListData[index].index = index + 1;
        });
    }

    /**
     * 添加总线路
     */
    addOrderLine = (type: boolean) => {
        if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
        if (!type) {
            if (this.$scope.orderLine.length > 0) {
                this.$ngBootbox.alert("只能添加一条总线路信息");
                return;
            }
        }
        if (this.$scope.goodsId == "") {
            this.$ngBootbox.alert("请选择货物");
            return;
        }
        if ($("#goodsId_value").val() == "") {
            this.$ngBootbox.alert("请填写货物名称"); return;
        };
        // if (this.$scope.shipProvinceCode == "-1" || this.$scope.shipCityCode == "-1" || this.$scope.shipAreaCode == "-1"
        //     || this.$scope.deliverProvinceCode == "-1" || this.$scope.deliverCityCode == "-1" || this.$scope.deliverAreaCode == "-1") {
        //     this.$ngBootbox.alert("请填写完成地址");
        //     return;
        // }

        this.$scope.isClientCanEdit = false;
        // let ol = this.$scope.orderLine;
        let sc = this.$scope;
        this.$scope.orderLine = [{


            shipDetail: $(".province option:selected")[0].innerHTML + $(".city option:selected")[0].innerHTML + $(".area option:selected")[0].innerHTML + sc.shipAddress,
            deliverDetail: $(".province option:selected")[1].innerHTML + $(".city option:selected")[1].innerHTML + $(".area option:selected")[1].innerHTML + sc.deliverAddress,

            viaListData: this.$scope.viaListData.map((value) => value),
            shipProvinceCode: sc.shipProvinceCode,
            shipCityCode: sc.shipCityCode,
            shipAreaCode: sc.shipAreaCode,
            shipAddress: sc.shipAddress,
            deliverProvinceCode: sc.deliverProvinceCode,
            deliverCityCode: sc.deliverCityCode,
            deliverAreaCode: sc.deliverAreaCode,
            deliverAddress: sc.deliverAddress,
            shipTime: $("#dataTime").val(),
            arriveTime: $("#dataTimeEnd").val(),
            mileage: sc.mileage,
            goodsTypeId: sc.goodsTypeId,
            goodsTypeName: $("#goodsType option:selected").text(),
            goodsId: sc.goodsId,
            goodsName: $("#goodsId_value").val(),
            // goodsName: sc.goodsName,
            goodsNum: sc.goodsNum,
            goodsNumUnit: sc.goodsNumUnit,
            goodsNumUnitStr: $("#goodsNumUnit option:selected").text(),
            goodsNumTwo: sc.goodsNumTwo,
            goodsNumTwoUnit: sc.goodsNumTwoUnit,
            tonRange: $("#tonRange option:selected").text(),
        }]

    }

    /**
     * 删除总线路
     */
    deleteOrderLine = () => {
        if (this.$scope.childOrderLine.length == 0) {
            this.$scope.isClientCanEdit = true;
        }
        this.$scope.orderLine.length = 0;
        this.$scope.showAddOrderBtn = true;
    }

    /**
     * 编辑总线路
     */
    editOrderLine = () => {

        //赋值参数
        this.$scope.showAddOrderBtn = false;
        let ol = this.$scope.orderLine[0];
        let sc = this.$scope;
        // this.loadSettleDropDown();
        this.loadGoodsTypeDropDown();
        // this.loadGoodsDropDown(ol.goodsTypeId);
        this.$scope.viaListData = ol.viaListData.map((value) => value);

        sc.shipProvinceCode = ol.shipProvinceCode;
        sc.shipCityCode = ol.shipCityCode;
        sc.shipAreaCode = ol.shipAreaCode;
        sc.shipAddress = ol.shipAddress;
        sc.deliverProvinceCode = ol.deliverProvinceCode;
        sc.deliverCityCode = ol.deliverCityCode;
        sc.deliverAreaCode = ol.deliverAreaCode;
        sc.deliverAddress = ol.deliverAddress;
        this.getProvinceList();
        sc.shipTime = ol.shipTime;
        sc.arriveTime = ol.arriveTime;
        $("#dataTime").val(ol.shipTime);
        $("#dataTimeEnd").val(ol.arriveTime);
        sc.mileage = ol.mileage;
        sc.goodsTypeId = ol.goodsTypeId;
        sc.goodsTypeName = ol.goodsTypeName;
        $("#goodsId_value").val(ol.goodsName);
        sc.goodsId = ol.goodsId;
        sc.goodsName = ol.goodsName;
        sc.goodsNum = ol.goodsNum;
        sc.goodsNumUnit = ol.goodsNumUnit;
        sc.goodsNumTwo = ol.goodsNumTwo;
        sc.goodsNumTwoUnit = ol.goodsNumTwoUnit;
        this.getTonRangeList();
        sc.tonRange = ol.tonRange;
    }
    /**
     * 获取市区下拉
     */
    getProvinceList = () => {
        this.areaService.getCity(this.$scope.shipProvinceCode).then(res => {
            this.$scope.shipCityList = res.data.list;
        });
        this.areaService.getCounty(this.$scope.shipCityCode).then(res => {
            this.$scope.shipAreaList = res.data.list;
        });
        this.areaService.getCity(this.$scope.deliverProvinceCode).then(res => {
            this.$scope.deliverCityList = res.data.list;
        });
        this.areaService.getCounty(this.$scope.deliverCityCode).then(res => {
            this.$scope.deliverAreaList = res.data.list;
        });
    }

    /**
     * 保存总线路
     */
    saveOrderLine = (type: boolean) => {
        this.addOrderLine(type);
        this.$scope.showAddOrderBtn = true;
    }

    /**
     * 添加子线路
     */
    addChildOrderLine = () => {
        if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
        var settle = $("#reckoner_value").val();
        if (this.$scope.settleId == "" || settle == "") {
            this.$ngBootbox.alert("请选择结算单位");
            return;
        }
        if ($("#goodsId_value").val() == "") {
            this.$ngBootbox.alert("请填写货物名称"); return;
        };
        // if (this.$scope.shipProvinceCode == "-1" || this.$scope.shipCityCode == "-1" || this.$scope.shipAreaCode == "-1"
        //     || this.$scope.deliverProvinceCode == "-1" || this.$scope.deliverCityCode == "-1" || this.$scope.deliverAreaCode == "-1") {
        //     this.$ngBootbox.alert("请填写完整地址");
        //     return;
        // }
        //缺表单验证

        var sc = this.$scope;
        this.$scope.childOrderLine.push({
            index: this.$scope.childOrderLine.length + 1,
            shipProvinceCode: sc.shipProvinceCode,
            shipCityCode: sc.shipCityCode,
            shipAreaCode: sc.shipAreaCode,
            shipAddress: sc.shipAddress,
            viaListData: this.$scope.viaListData.map((value) => value),
            deliverProvinceCode: sc.deliverProvinceCode,
            deliverCityCode: sc.deliverCityCode,
            deliverAreaCode: sc.deliverAreaCode,
            deliverAddress: sc.deliverAddress,
            shipTime: $("#dataTime").val(),
            arriveTime: $("#dataTimeEnd").val(),
            mileage: sc.mileage,
            goodsTypeId: sc.goodsTypeId,
            goodsTypeName: $("#goodsType option:selected").text(),
            goodsId: sc.goodsId,
            goodsName: $("#goodsId_value").val(),
            goodsNum: sc.goodsNum,
            goodsNumUnit: sc.goodsNumUnit,
            goodsNumTwo: sc.goodsNumTwo,
            goodsNumTwoUnit: sc.goodsNumTwoUnit,
            tonRange: $("#tonRange option:selected").text(),
            receivablePrice: sc.receivablePrice,
            receivablePriceUnitStr: $("#receivablePriceUnit option:selected").text(),
            receivablePriceUnit: sc.receivablePriceUnit,
            receivableTotal: sc.receivableTotal,
            settleType: sc.settleType,
            settleTypeStr: $("#settleType option:selected").text(),
            includeTax: sc.includeTax,
            receivableRemarks: sc.receivableRemarks,
            settleId: sc.settleId,
            reckoner: $("#reckoner_value").val(),
            projectid: sc.projectId,
            projectCode: sc.projectCode,
            // projectName: sc.projectName,
            projectName: $("#project_value").val(),
            shipOrderId: sc.shipOrderId,
            takeGoodsCompanyId: sc.takeGoodsCompanyId,
            takeGoodsCompanyName: sc.takeGoodsCompanyName,
            consignee: sc.consignee,
            consigneePhone: sc.consigneePhone,
            projectTotal: sc.projectTotal,
            projectTotalUnit: sc.projectTotalUnit,


            goodsNumUnitStr: $("#goodsNumUnit option:selected").text(),

            shipDetail: $(".province option:selected")[0].innerHTML + $(".city option:selected")[0].innerHTML + $(".area option:selected")[0].innerHTML + sc.shipAddress,
            deliverDetail: $(".province option:selected")[1].innerHTML + $(".city option:selected")[1].innerHTML + $(".area option:selected")[1].innerHTML + sc.deliverAddress,


        });
    }

    /**
     * 删除子线路
     */
    deleteChildOrderLine = (index: number) => {
        this.$scope.childOrderLine.splice(index - 1, 1);
        this.$scope.childOrderLine.forEach((item, index) => {
            this.$scope.childOrderLine[index].index = index + 1;
        });
        this.$scope.showAddChildOrderBtn = true;
    }

    /**
     * 编辑子线路
     */
    editChildOrderLine = (index: number) => {
        this.$scope.showAddChildOrderBtn = false;
        if (index > this.$scope.childOrderLine.length) {
            return;
        }
        var sc = this.$scope;
        var ol;
        this.$scope.childOrderLine.forEach((item, indexS) => {
            if (item.index === index) {
                ol = item;
                return false;
            }
        });

        //下拉
        // this.loadSettleDropDown();
        this.loadGoodsTypeDropDown();
        // this.loadGoodsDropDown(ol.goodsTypeId);

        this.childOrderIndex = index;
        var newViaList = [];
        ol.viaListData.forEach((item, index) => {
            newViaList.push(item)
        })
        this.$scope.viaListData = newViaList;
        sc.shipProvinceCode = ol.shipProvinceCode;
        sc.shipCityCode = ol.shipCityCode;
        sc.shipAreaCode = ol.shipAreaCode;
        sc.shipAddress = ol.shipAddress;
        sc.deliverProvinceCode = ol.deliverProvinceCode;
        sc.deliverCityCode = ol.deliverCityCode;
        sc.deliverAreaCode = ol.deliverAreaCode;
        sc.deliverAddress = ol.deliverAddress;
        this.getProvinceList();
        sc.shipTime = ol.shipTime;
        sc.arriveTime = ol.arriveTime;
        $("#dataTime").val(ol.shipTime)
        $("#dataTimeEnd").val(ol.arriveTime)
        sc.mileage = ol.mileage;
        sc.goodsTypeId = ol.goodsTypeId;
        sc.goodsTypeName = ol.goodsTypeName;
        $("#goodsId_value").val(ol.goodsName);
        sc.goodsId = ol.goodsId;
        sc.goodsName = ol.goodsName;
        sc.goodsNum = ol.goodsNum;
        sc.goodsNumUnit = ol.goodsNumUnit;
        this.getTonRangeList();
        sc.tonRange = ol.tonRange;
        sc.goodsNumTwo = ol.goodsNumTwo;
        sc.goodsNumTwoUnit = ol.goodsNumTwoUnit;
        sc.receivablePrice = ol.receivablePrice;
        sc.receivablePriceUnit = ol.receivablePriceUnit;
        sc.receivableTotal = ol.receivableTotal;
        sc.settleType = ol.settleType;
        sc.includeTax = ol.includeTax;
        sc.receivableRemarks = ol.receivableRemarks;
        sc.settleId = ol.settleId;
        $("#reckoner_value").val(ol.reckoner);
        sc.reckoner = ol.reckoner;
        sc.settleName = ol.reckoner;
        sc.projectId = ol.projectid;
        sc.projectCode = ol.projectCode;
        // sc.projectName = ol.projectName;
        $("#project_value").val(ol.projectName);

        sc.shipOrderId = ol.shipOrderId;
        sc.takeGoodsCompanyId = ol.takeGoodsCompanyId;
        sc.takeGoodsCompanyName = ol.takeGoodsCompanyName;
        sc.consignee = ol.consignee;
        sc.consigneePhone = ol.consigneePhone;
        sc.projectTotal = ol.projectTotal;
        sc.projectTotalUnit = ol.projectTotalUnit;

    }

    /**
     * 保存子线路
     */
    saveChildOrderLine = () => {
        if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
        if (this.childOrderIndex > this.$scope.childOrderLine.length || this.childOrderIndex < 0) {
            return;
        }
        var settleName = $("#reckoner_value").val();
        if (this.$scope.settleId == "" || settleName == "") {
            this.$ngBootbox.alert("请选择结算单位");
            return;
        }
        // if (this.$scope.shipProvinceCode == "-1" || this.$scope.shipCityCode == "-1" || this.$scope.shipAreaCode == "-1"
        //     || this.$scope.deliverProvinceCode == "-1" || this.$scope.deliverCityCode == "-1" || this.$scope.deliverAreaCode == "-1") {
        //     this.$ngBootbox.alert("请填写完整地址");
        //     return;
        // }
        //缺表单验证

        let sc = this.$scope;
        // let ol = this.$scope.childOrderLine[this.childOrderIndex - 1];

        var ol;
        this.$scope.childOrderLine.forEach((item, indexS) => {
            if (item.index === this.childOrderIndex) {
                ol = item;
                return false;
            }
        });

        var newViaList = [];
        this.$scope.viaListData.forEach((item, index) => {
            newViaList.push(item)
        })
        ol.viaListData = newViaList;
        ol.shipProvinceCode = sc.shipProvinceCode;
        ol.shipCityCode = sc.shipCityCode;
        ol.shipAreaCode = sc.shipAreaCode;
        ol.shipAddress = sc.shipAddress;
        ol.deliverProvinceCode = sc.deliverProvinceCode;
        ol.deliverCityCode = sc.deliverCityCode;
        ol.deliverAreaCode = sc.deliverAreaCode;
        ol.deliverAddress = sc.deliverAddress;


        ol.shipDetail = $(".province option:selected")[0].innerHTML + $(".city option:selected")[0].innerHTML + $(".area option:selected")[0].innerHTML + sc.shipAddress;
        ol.deliverDetail = $(".province option:selected")[1].innerHTML + $(".city option:selected")[1].innerHTML + $(".area option:selected")[1].innerHTML + sc.deliverAddress;

        ol.goodsNumUnitStr = $("#goodsNumUnit option:selected").text();

        ol.tonRange = $("#tonRange option:selected").text();
        ol.settleTypeStr = $("#settleType option:selected").text();
        ol.reckoner = $("#reckoner_value").val();

        ol.goodsTypeName = $("#goodsType option:selected").text();
        ol.goodsName = $("#goodsId_value").val();

        ol.shipTime = $("#dataTime").val();
        ol.arriveTime = $("#dataTimeEnd").val();

        ol.mileage = sc.mileage;
        ol.goodsTypeId = sc.goodsTypeId;

        ol.goodsId = sc.goodsId;

        ol.goodsNum = sc.goodsNum;
        ol.goodsNumUnit = sc.goodsNumUnit;
        ol.goodsNumTwo = sc.goodsNumTwo;
        ol.goodsNumTwoUnit = sc.goodsNumTwoUnit;
        ol.tonRange = sc.tonRange;
        ol.receivablePrice = sc.receivablePrice;
        ol.receivablePriceUnit = sc.receivablePriceUnit;
        ol.receivablePriceUnitStr = $("#receivablePriceUnit option:selected").text();
        ol.receivableTotal = sc.receivableTotal;
        ol.settleType = sc.settleType;
        ol.includeTax = sc.includeTax;
        ol.receivableRemarks = sc.receivableRemarks;
        ol.settleId = sc.settleId;

        ol.projectid = sc.projectId;
        ol.projectCode = sc.projectCode;
        ol.projectName = $("#project_value").val();
        ol.shipOrderId = sc.shipOrderId;
        ol.takeGoodsCompanyId = sc.takeGoodsCompanyId;
        ol.takeGoodsCompanyName = sc.takeGoodsCompanyName;
        ol.consignee = sc.consignee;
        ol.consigneePhone = sc.consigneePhone;
        ol.projectTotal = sc.projectTotal;
        ol.projectTotalUnit = sc.projectTotalUnit;

        this.$scope.showAddChildOrderBtn = true;
    }

    /**
     * 保存/发布订单
     */
    orderSave = () => {
        if (this.operationType == AddOrderOperationType.Add || this.operationType == AddOrderOperationType.Copy || this.operationType == AddOrderOperationType.Inquiry) {
            if (!$("#orderForm").valid()) { return };
            if (this.$scope.orderLine.length == 0) {
                this.$ngBootbox.alert("必须存在一条总线路");
                return;
            }
            if (this.$scope.childOrderLine.length == 0) {
                this.$ngBootbox.alert("必须存在一条子线路");
                return;
            }
            // if (this.$scope.enabledSaveBtn == false) {
            //     return;
            // }

            if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
            this.$scope.enabledSaveBtn = true;
            let orderChild: orderChildVM[] = [];
            this.$scope.childOrderLine.forEach((item) => {
                orderChild.push({
                    // orderId: item.orderId,
                    shipProvince: item.shipProvinceCode,
                    shipCity: item.shipCityCode,
                    shipArea: item.shipAreaCode,
                    shipAddress: item.shipAddress,
                    viaAddressList: item.viaListData,
                    deliverProvince: item.deliverProvinceCode,
                    deliverCity: item.deliverCityCode,
                    deliverArea: item.deliverAreaCode,
                    deliverAddress: item.deliverAddress,
                    shipTime: item.shipTime,
                    arriveTime: item.arriveTime,
                    mileage: item.mileage,
                    goodsTypeId: item.goodsTypeId,
                    goodsType: item.goodsTypeName,
                    goodsId: item.goodsId,
                    goodsName: item.goodsName,
                    goodsNum: item.goodsNum,
                    goodsNumUnit: item.goodsNumUnit ? item.goodsNumUnit : "",
                    goodsNumTwo: item.goodsNumTwo,
                    goodsNumUnitTwo: item.goodsNumTwoUnit ? item.goodsNumTwoUnit : "",
                    tonRange: item.tonRange,
                    receivablePrice: item.receivablePrice,
                    receivablePriceUnit: item.receivablePriceUnit,
                    receivableTotal: item.receivableTotal,
                    settleType: item.settleType,
                    includeTax: item.includeTax,
                    receivableRemarks: item.receivableRemarks,
                    settleId: item.settleId,
                    reckoner: item.reckoner,
                    projectId: item.projectid,
                    projectCode: item.projectCode,
                    projectName: item.projectName,
                    shipOrderId: item.shipOrderId,
                    takeGoodsCompanyId: item.takeGoodsCompanyId,
                    takeGoodsCompany: item.takeGoodsCompanyName,
                    consignee: item.consignee,
                    consigneePhone: item.consigneePhone,
                    projectTotal: item.projectTotal,
                    projectTotalUnit: item.projectTotalUnit
                });
            });

            this.$ngBootbox.confirm("确定发布此单？").then(e => {

                var dispatchOfficerPhone = "";
                this.$scope.dispatchOfficerDropDown.forEach((item, index) => {
                    if (item.id === this.$scope.dispatchOfficerId) {
                        dispatchOfficerPhone = item.phoneNumber;
                    }
                });

                ///附件类型改换。带后台更改后删除
                var uploaderList = []
                this.uploaderList.forEach((item, index) => {
                    uploaderList.push([item.attachmentName, item.attachmentPath]);
                })



                var ol = this.$scope.orderLine[0];
                this.clientService.getDetail(this.$scope.clientId).then((res) => {
                    var clientCornet = res.data.cornet;
                    let contractNumber = res.data.contractNumber;
                    this.orderService.add(
                        "",
                        this.$scope.urgency,
                        this.$scope.urgencyUnit,
                        this.$scope.businessOfficerId,
                        this.$scope.customerServiceOfficerId,
                        this.$scope.dispatchOfficerId,
                        this.clientId,
                        clientCornet,
                        this.$scope.consignorId,
                        this.$scope.shipPriceContent,
                        this.$scope.carType,
                        this.$scope.carLength,
                        this.$scope.carriageWay,
                        this.$scope.loadingResult,
                        // this.uploaderList,附件类型改换。带后台更改后删除
                        uploaderList,
                        this.$scope.orderRemarks,
                        orderChild,
                        ol.viaListData.map(value => { return { province: value.province, city: value.city, county: value.county, details: "" } }),
                        ol.shipProvinceCode,
                        ol.shipCityCode,
                        ol.shipAreaCode,
                        ol.shipAddress,
                        ol.deliverProvinceCode,
                        ol.deliverCityCode,
                        ol.deliverAreaCode,
                        ol.deliverAddress,
                        ol.shipTime,
                        ol.arriveTime,
                        ol.mileage,
                        ol.goodsTypeId,
                        ol.goodsTypeName,
                        ol.goodsId,
                        ol.goodsName,
                        ol.goodsNum,
                        ol.goodsNumUnit,
                        ol.goodsNumTwo,
                        ol.goodsNumTwoUnit,
                        ol.tonRange,
                        $("#dispatchOfficerId option:selected").text(),
                        dispatchOfficerPhone,
                        $("#businessOfficerId option:selected").text(),
                        $("#customerServiceOfficerId option:selected").text(),
                        this.$scope.planOfficer,
                        $("#client_value").val(),
                        null,
                        contractNumber
                    ).then(result => {
                        this.$scope.enabledSaveBtn = false;
                        this.$state.go("app.order.orderAddList", { name: "orderAddList" });
                    }, error => { this.$scope.enabledSaveBtn = false; });
                }, () => { this.$scope.enabledSaveBtn = false; });

            }, () => { this.$scope.enabledSaveBtn = false; });
        } else if (this.operationType == AddOrderOperationType.Edit) {
            //缺少验证
            if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return };
            this.$scope.enabledSaveBtn = true;
            let ol = this.$scope.orderLine[0];
            let sc = this.$scope;
            let orderChild: orderChildVM[] = [];
            this.$scope.childOrderLine.forEach((item) => {
                orderChild.push({
                    orderId: item.orderId,
                    shipProvince: item.shipProvinceCode,
                    shipCity: item.shipCityCode,
                    shipArea: item.shipAreaCode,
                    shipAddress: item.shipAddress,
                    viaAddressList: item.viaListData,
                    deliverProvince: item.deliverProvinceCode,
                    deliverCity: item.deliverCityCode,
                    deliverArea: item.deliverAreaCode,
                    deliverAddress: item.deliverAddress,
                    shipTime: item.shipTime,
                    arriveTime: item.arriveTime,
                    mileage: item.mileage,
                    goodsTypeId: item.goodsTypeId,
                    goodsType: item.goodsTypeName,
                    goodsId: item.goodsId,
                    goodsName: item.goodsName,
                    goodsNum: item.goodsNum,
                    goodsNumUnit: item.goodsNumUnit ? item.goodsNumUnit : "",
                    goodsNumTwo: item.goodsNumTwo,
                    goodsNumUnitTwo: item.goodsNumTwoUnit ? item.goodsNumTwoUnit : "",
                    tonRange: item.tonRange,
                    receivablePrice: item.receivablePrice,
                    receivablePriceUnit: item.receivablePriceUnit,
                    receivableTotal: item.receivableTotal,
                    settleType: item.settleType,
                    includeTax: item.includeTax,
                    receivableRemarks: item.receivableRemarks,
                    settleId: item.settleId,
                    reckoner: item.reckoner,
                    projectId: item.projectid,
                    projectCode: item.projectCode,
                    projectName: item.projectName,
                    shipOrderId: item.shipOrderId,
                    takeGoodsCompanyId: item.takeGoodsCompanyId,
                    takeGoodsCompany: item.takeGoodsCompanyName,
                    consignee: item.consignee,
                    consigneePhone: item.consigneePhone,
                    projectTotal: item.projectTotal,
                    projectTotalUnit: item.projectTotalUnit
                });
            });
            this.$ngBootbox.confirm("确定发布此单？").then(() => {
                ///附件类型改换。带后台更改后删除
                var uploaderList = []
                this.uploaderList.forEach((item, index) => {
                    uploaderList.push([item.attachmentName, item.attachmentPath]);
                })

                this.orderService.edit(
                    this.id,
                    this.$scope.orderId,
                    this.$scope.urgency,
                    this.$scope.urgencyUnit,
                    this.$scope.businessOfficerId,
                    this.$scope.customerServiceOfficerId,
                    this.$scope.dispatchOfficerId,
                    this.$scope.clientId,
                    this.$scope.consignorId,
                    this.$scope.shipPriceContent,
                    this.$scope.carType,
                    this.$scope.carLength,
                    this.$scope.carriageWay,
                    this.$scope.loadingResult,
                    // this.uploaderList,
                    uploaderList,
                    this.$scope.orderRemarks,
                    orderChild,
                    ol.viaListData,
                    ol.shipProvinceCode,
                    ol.shipCityCode,
                    ol.shipAreaCode,
                    ol.shipAddress,
                    ol.deliverProvinceCode,
                    ol.deliverCityCode,
                    ol.deliverAreaCode,
                    ol.deliverAddress,
                    ol.shipTime,
                    ol.arriveTime,
                    ol.mileage,
                    ol.goodsTypeId,
                    ol.goodsTypeName,
                    ol.goodsId,
                    ol.goodsName,
                    ol.goodsNum,
                    ol.goodsNumUnit,
                    ol.goodsNumTwo,
                    ol.goodsNumTwoUnit,
                    ol.tonRange,
                    $("#dispatchOfficerId option:selected").text(),
                    this.getDispatcherPhone(),
                    $("#businessOfficerId option:selected").text(),
                    $("#customerServiceOfficerId option:selected").text(),
                    this.$scope.planOfficer,
                    $("#client_value").val()
                ).then(result => {
                    this.$scope.enabledSaveBtn = false;
                    this.$state.go("app.order.orderAddList", { name: "orderAddList" });
                }, () => { this.$scope.enabledSaveBtn = false; });
            }, () => { this.$scope.enabledSaveBtn = false; })
        }
    }

    /**
     * 只有在add和copy下才会调整发货和到货时间为当前和次日的下午5点
     */
    setShipAndArriveTime(): void {
        let time = new Date();
        let defaultTime = new Date(time.getFullYear(), time.getMonth(), time.getDate() + 1, 17, 0);
        this.$scope.shipTime = String(this.commonService.transformTime(new Date(time.setHours(16, 0, 0)), "yyyy.MM.dd HH:mm"));
        this.$scope.arriveTime = String(this.commonService.transformTime(defaultTime, "yyyy.MM.dd HH:mm"));
    }

    /**
     * 获取调度专员号码
     */
    getDispatcherPhone(): string {
        var dispatchOfficerPhone = "";
        this.$scope.dispatchOfficerDropDown.forEach((item, index) => {
            if (item.id === this.$scope.dispatchOfficerId) {
                dispatchOfficerPhone = item.phoneNumber;
            }
        });
        return dispatchOfficerPhone
    }
    /**
     * 时间控件添加显示
     */
    initDateTimePicker(): void {
        $('#opendataTime').click(function () {
            $('#dataTime').datetimepicker('show');
        });
        $('#opendataTimeEnd').click(function () {
            $('#dataTimeEnd').datetimepicker('show');
        });
    }
    /**
     * 下拉加载
     */
    loadDropDown(): void {
        //枚举
        this.$scope.urgencyUnitDropDown = this.valueService.getUrgencyUnitList().list;
        this.$scope.goodsNumUnitDropDown = this.valueService.getGoodQuantityUnitList().list;
        this.$scope.priceUnitDropDown = this.valueService.getPriceUnitList().list;
        this.$scope.settleTypeDropDown = this.valueService.getSettlementTypeList().list;
        this.$scope.includeTaxDropDown = this.valueService.getLinePriceTypeList().list;
        this.$scope.projectTotalUnitDropDown = this.valueService.getGoodQuantityUnitList().list;
        this.$scope.carTypeDropDown = this.valueService.getCarTypeList().list;
        this.$scope.carLengthDropDown = this.valueService.getCarLengthList().list;
        this.$scope.carriageWayDropDown = this.valueService.getCarriageTypeList().list;
        // this.$scope.goodsNumUnitDropDown = this.valueService.getGoodQuantityUnitList().list;

        //专员加载
        this.loadBusinessOfficeerDropDown();
        this.loadCustomerServiceOfficerDropDown();
        this.loadDispatchOfficerDropDown();
    }

    /**
     * 加载商务专员下拉
     */
    loadBusinessOfficeerDropDown(): void {
        this.employeeService.getList(CommissionerType.BusinessAffairs.toString(), "", "", "", "", true, 0, -1).then(result => {
            this.$scope.businessOfficerDropDown = result.data.list;
        });
    }

    /**
     * 加载客服专员下拉
     */
    loadCustomerServiceOfficerDropDown(): void {
        this.employeeService.getList(CommissionerType.CustomerService.toString(), "", "", "", "", true, 0, -1).then(result => {
            this.$scope.customerServiceOfficerDropDown = result.data.list;
        });
    }

    /**
     * 加载调度专员下拉
     */
    loadDispatchOfficerDropDown(): void {
        this.employeeService.getList(CommissionerType.Dispatch.toString(), "", "", "", "", true, 0, -1).then(result => {
            this.$scope.dispatchOfficerDropDown = result.data.list;
        });
    }

    /**
     * 加载货物类别下拉
     */
    loadGoodsTypeDropDown(): void {
        this.goodsTypeService.getList(this.clientId, "", 0, -1).then(result => {
            this.$scope.goodsTypeDropDown = result.data.list;
            if (!this.$scope.clientId || this.$scope.clientId === "") { this.$scope.goodsDropDown.length = 0; this.$scope.goodsTypeId = ""; this.$scope.tonRangeDropDown.length = 0; };
        });

    }

    /**
     * 加载货物下拉
     */
    // loadGoodsDropDown = (goodsTypeId: string) => {
    //     // this.goodsService.getList(this.clientId, "", goodsTypeId, 0, -1).then(result => {
    //     //     this.$scope.goodsDropDown = result.data.list;
    //     //     if (!this.$scope.goodsTypeId || this.$scope.goodsTypeId === "") { this.$scope.goodsDropDown.length = 0; this.$scope.goodsId = ""; this.$scope.tonRangeDropDown.length = 0; };
    //     // });
    //     // this.goodsService.getList(this.clientId, "", goodsTypeId, 0, -1).then(result => {
    //     //     if (this.$location.search().name != "add") {
    //     //         $("#goodsId_value").val(result.data.list[0].name)
    //     //     }
    //     //     if (!this.$scope.goodsTypeId || this.$scope.goodsTypeId === "") { this.$scope.goodsDropDown.length = 0; this.$scope.goodsId = ""; this.$scope.tonRangeDropDown.length = 0; };
    //     // })
    // }

    /**
     * 加载结算方下拉
     */
    // loadSettleDropDown(): void {
    //     this.settleService.getList(this.clientId, "", "", true, 0, 1).then(result => {
    //         // this.$scope.settleDropDown = result.data.list;
    //         if (this.$location.search().name == "add") {
    //             this.$scope.settleId = result.data.list[0].id;
    //             $("#reckoner_value").val(result.data.list[0].name)
    //             this.$scope.reckoner = result.data.list[0].name;
    //         }
    //     });
    // }

    /**
     * 选择客户单位事件
     */
    onClientSelected = (data: angucomplete<ClientListItemResponse>) => {
        if (data) {
            this.$scope.consignorId = "";
            this.$scope.goodsTypeId = "";
            this.$scope.goodsDropDown.length = 0;
            this.$scope.projectId = "";
            this.$scope.clientId = data.description.id;
            this.clientId = data.description.id;
            // $("#consignor_value").val("");
            // $("#reckoner_value").val("");
            this.$scope.$broadcast('angucomplete-alt:clearInput', 'consignor');
            this.$scope.$broadcast('angucomplete-alt:clearInput', 'goodsId');
            this.$scope.$broadcast('angucomplete-alt:clearInput', 'reckoner');
            this.$scope.reckoner = "";
            this.$scope.settleId = "";

            this.loadGoodsTypeDropDown();
            // this.loadSettleDropDown();
        } else { return };
    }
    /**
     * 客户单位自动补全事件
     */
    onClientAutoComplate = (value: string) => {
        return this.clientService.getList(value, "", "", "", "", 0, 5).then(res => {
            return res.data.list;
        });
    }
    /**
     * 发货计划人自动补全
     */
    onConsignorAutoComplate = (value: string) => {
        if (!this.clientId) { return; };
        return this.customerRepresentativeService.getList(this.clientId, value, "", 0, 5).then(res => {
            return res.data.list;
        })
    }
    /**
     * 发货计划人选中事件
     */
    onConsignorSelected = (selected: angucomplete<CustomerRepresentativeListItemResponse>) => {
        if (selected) {
            this.$scope.consignorPhone = selected.description.phoneNumber;
            this.$scope.consignorId = selected.description.id;
        } else {
            this.$scope.consignorPhone = "";
            this.$scope.consignorId = "";
        }

    }
    /**
     * 结算单位选中事件
     */
    onsettleSelected = (selected: angucomplete<SettleListItemResponse>) => {
        if (selected) {
            this.$scope.settleId = selected.description.id;
            this.$scope.reckoner = selected.description.name;
            $("#reckoner_value").val(selected.description.name)

        } else {
            // $("#reckoner_value").val("");
            // this.$scope.reckoner = "";
            this.$scope.settleId = "";
        }
    }
    /**
     * 结算单位
     */
    onSettleAutoComplate = (value: string) => {
        if (!this.clientId) { return; };
        return this.settleService.getList(this.clientId, value, "", true, 0, 5).then(result => {
            return result.data.list;
        });
    }

    /**
     * 工程自动补全时间
     */
    onProjectAutoComplate = (value: string) => {
        if (!this.clientId) { return; };
        return this.projectService.getList(this.clientId, "", "", 0, 5).then(res => {
            return res.data.list;
        })
    }
    /**
     * 改变货物类别获取货物
     */
    changeGoodsTypeEvent = () => {
        // this.loadGoodsDropDown(this.$scope.goodsTypeId);
        // this.$scope.changeGoodsGetTonRangeList = this.changeGoodsGetTonRangeList;
        this.$scope.$broadcast('angucomplete-alt:clearInput', 'goodsId');
        // $("#goodsId_value").val("");
        // this.$scope.goodsName = "";
        // this.$scope.goodsId = "";
    };

    /**
     * 货物名称自动补全事件
     */
    onGoodsNameAutoComplate = (value: string) => {
        // console.log($("#goodsId_value").val());
        var deferred = this.$q.defer();
        if (!this.clientId || !this.$scope.goodsTypeId) {
            // deferred.resolve("well done!");
        } else {
            return this.goodsService.getList(this.clientId, value, this.$scope.goodsTypeId, 0, 30).then(res => {
                return res.data.list;
            })
        }
        return deferred.promise;
        //console.log(this.$q.reject)
    }

    /**
     * 货物名称选中事件
     */
    onGoodsNameSelected = (selected: angucomplete<GoodsListItemResponse>) => {
        if (selected) {
            this.$scope.goodsName = selected.description.name;
            this.$scope.goodsId = selected.description.id;
            $("#goodsId_value").val(selected.description.name);
            //获取吨位范围判断未加
            this.getTonRangeList();
        } else {
            this.$scope.goodsName = "";
            this.$scope.goodsId = "";
        }

    }

    /**
     * 改变货物获取吨位范围事件
     */
    // changeGoodsGetTonRangeList = () => {
    //     //获取吨位范围判断未加
    //     this.getTonRangeList();
    // }

    /**
     * 吨位范围获取数据
     */
    getTonRangeList = () => {
        this.linePriceService.getList(this.clientId, this.$scope.goodsTypeId, "1", this.$scope.shipProvinceCode, this.$scope.shipCityCode, this.$scope.shipAreaCode, this.$scope.deliverProvinceCode, this.$scope.deliverCityCode, this.$scope.deliverAreaCode, "", this.$scope.goodsId, "", "", 0, -1).then(res => {
            this.$scope.tonRangeDropDown = res.data.list;
            if (!this.$scope.clientId || this.$scope.clientId === "" || this.$scope.goodsId === "" || !this.$scope.goodsId || this.$scope.goodsTypeId === "" || !this.$scope.goodsTypeId) {
                this.$scope.tonRangeDropDown.length = 0;
            }
        });
    }

    /**
     * 改变吨位范围获取应收信息
     */
    changeTonRangeGetReceivableEvent = () => {
        this.linePriceService.getList(this.clientId, this.$scope.goodsTypeId, "1", this.$scope.shipProvinceCode, this.$scope.shipCityCode, this.$scope.shipAreaCode, this.$scope.deliverProvinceCode, this.$scope.deliverCityCode, this.$scope.deliverAreaCode, this.$scope.tonRange, this.$scope.goodsId, "", "", 0, -1).then(res => {
            if (res.data.list.length > 0) {
                this.linePriceService.getDetail(res.data.list[0].id).then(res => {
                    this.$scope.receivablePrice = res.data.price;
                    this.$scope.receivablePriceUnit = res.data.priceUnit;
                    this.$scope.settleType = res.data.setleWay;
                    this.$scope.includeTax = res.data.priceType;
                })
            }
        });
    }

    /**
     * 选中工程事件
     */
    onProjectSelected = (select: angucomplete<ProjectListItemResponse>) => {
        if (select) {
            this.getProjectData(select.description.id)
        }
    }

    /**
     * 获取工程数据
     */
    getProjectData(id: string): void {
        this.projectService.getDetail(id).then(res => {
            this.$scope.projectTotal = String(res.data.maxValue);
            this.$scope.projectTotalUnit = res.data.maxUnit;
            this.$scope.projectCode = res.data.projectCode;
            this.$scope.takeGoodsCompanyName = res.data.settleName;
            this.$scope.consignee = res.data.settleContact;
            this.$scope.consigneePhone = res.data.settlePhone;
            //获取结算单id
            this.settleService.getList(this.clientId, res.data.settleName, "", true, 0, -1).then(res => {
                this.$scope.takeGoodsCompanyId = res.data.list[0].id;
            });
        });
    }

    /**
     * 选择上传文件后
     */
    onSuccessItem = (fileName: string, filePath: string, tag: number, file?: any) => {
        file.fileId = filePath;
        let attachment = {
            attachmentId: "",
            attachmentName: fileName,
            attachmentPath: filePath,
            attachmentTag: ""
        };
        this.uploaderList.push(attachment);
    }


    /**
     * 获取订单详情
     */
    getOrderInfo(): void {
        this.orderService.detail(this.id).then(res => {
            //公共信息
            let sc = this.$scope;
            let data = res.data;

            //基本信息
            sc.urgency = data.urgency;
            sc.urgencyUnit = data.urgencyUnit;

            sc.businessOfficerId = data.businessOfficerId;
            sc.customerServiceOfficerId = data.customerServiceOfficerId;
            sc.dispatchOfficerId = data.dispatchOfficerId;
            sc.clientId = data.clientId;
            this.clientId = data.clientId;
            sc.clientName = data.clientName;
            sc.consignorId = data.consignorId;
            sc.consignorName = data.consignorName;
            sc.consignorPhone = data.consignorPhone;
            sc.shipPriceContent = data.shipPriceContent;




            //所需车辆信息
            sc.carType = data.carType;
            sc.carLength = data.carLength;
            sc.carriageWay = data.carriageWay;
            sc.loadingResult = data.loadingResult;
            //下拉
            // this.loadSettleDropDown();
            this.loadGoodsTypeDropDown();

            //订单备注
            sc.orderRemarks = data.remarks;

            //只有edit下才能获取附件
            if (this.operationType == AddOrderOperationType.Edit) {
                sc.planOfficer = JSON.parse(window.localStorage.getItem("loginData")).realName;

                //订单编号
                this.$scope.orderId = res.data.orderId;
                //附件

                res.data.attachment.forEach((item, index) => {
                    this.commonService.showFileItem(item, this.$scope.attachmentUploader);
                    // this.showFileItem(item, this.$scope.attachmentUploader);
                });
                // this.uploaderList = res.data.attachment;

                res.data.attachment.forEach((item, index) => {
                    this.uploaderList.push({
                        attachmentId: item[0],
                        attachmentName: item[1],
                        attachmentPath: item[2],
                        attachmentTag: item[3]
                    })
                });


                //总单视图
                let ol = this.$scope.orderLine[0];
                var newviaListData = [];
                data.viaList.forEach((item, index) => {
                    newviaListData.push({
                        province: item.province,
                        city: item.city,
                        county: item.county,
                        index: index + 1
                    });
                });
                //
                var quantityOfGoods = "";
                this.$scope.goodsNumUnitDropDown.forEach((itme, index) => {
                    if (data.goodsNumUnit == itme.value) {
                        quantityOfGoods = itme.text;
                    }
                })
                this.$scope.orderLine = [{
                    shipProvinceCode: data.shipProvince,
                    shipCityCode: data.shipCity,
                    shipAreaCode: data.shipArea,
                    shipAddress: data.shipDetail,
                    deliverProvinceCode: data.deliverProvince,
                    deliverCityCode: data.deliverCity,
                    deliverAreaCode: data.deliverArea,
                    deliverAddress: data.deliverDetail,
                    //问题
                    viaListData: newviaListData,
                    shipTime: data.shipTime,
                    arriveTime: data.arriveTime,
                    mileage: data.mileage,
                    //货物信息
                    goodsTypeId: data.goodsTypeId,
                    goodsId: data.goodsId,
                    tonRange: data.tonRange,
                    goodsNum: data.goodsNum,
                    goodsNumUnit: data.goodsNumUnit,
                    goodsNumTwo: data.goodsNumTwo,
                    goodsNumTwoUnit: data.goodsNumUnitTwo,
                    goodsTypeName: data.goodsType,
                    goodsName: data.goodsName,
                    goodsNumUnitStr: quantityOfGoods,

                    shipDetail: data.shipAddress,
                    deliverDetail: data.deliverAddress

                }]


            } else
            //copy
            {
                //线路信息
                sc.shipProvinceCode = data.shipProvince;
                sc.shipCityCode = data.shipCity;
                sc.shipAreaCode = data.shipArea;
                sc.shipAddress = data.shipDetail;
                sc.deliverProvinceCode = data.deliverProvince;
                sc.deliverCityCode = data.deliverCity;
                sc.deliverAreaCode = data.deliverArea;
                sc.deliverAddress = data.deliverDetail;
                //中转地
                data.viaList.forEach((item, index) => {
                    this.$scope.viaListData.push({
                        province: item.province,
                        city: item.city,
                        county: item.county,
                        index: index + 1
                    });
                });
                // sc.shipTime = data.shipTime;
                // sc.arriveTime = data.arriveTime;
                sc.mileage = data.mileage;
                //货物信息
                $("#goodsId_value").val(data.goodsName);
                sc.goodsName = data.goodsName;
                sc.goodsTypeId = data.goodsTypeId;
                sc.goodsId = data.goodsId;
                sc.tonRange = data.tonRange;
                sc.goodsNum = data.goodsNum;
                sc.goodsNumUnit = data.goodsNumUnit;
                sc.goodsNumTwo = data.goodsNumTwo;
                sc.goodsNumTwoUnit = data.goodsNumUnitTwo;
                //获取下拉数据
                // this.loadGoodsDropDown(data.goodsTypeId);
                this.getTonRangeList();
            }

        });
    }

    /**
     * 获取子线路信息
     */
    getChildInfo(): void {
        //可优化：获取子单详情需拿订单id拿子单列表，在拿子单id获取详情(后台可直接传入子单id)
        this.orderService.orderChildList(this.id).then(res => {
            this.orderService.orderChild(res.data.list[0].id).then(result => {
                //子单数据
                let sc = this.$scope;
                let data = result.data;
                //应收价格信息
                sc.receivablePrice = data.receivablePrice;
                sc.receivablePriceUnit = data.receivablePriceUnit;
                sc.receivableTotal = data.receivableTotal;
                sc.settleType = data.settleType;
                sc.includeTax = data.includeTax;
                sc.receivableRemarks = data.receivableRemarks;
                sc.settleId = data.settleId;
                $("#reckoner_value").val(data.reckoner);
                sc.reckoner = data.reckoner;
                //工程信息
                sc.projectName = data.projectName;
                sc.projectId = data.projectId;
                sc.projectCode = data.projectCode;
                sc.projectTotal = data.projectTotal;
                sc.projectTotalUnit = data.projectTotalUnit;
                sc.takeGoodsCompanyName = data.takeGoodsCompany;
                sc.takeGoodsCompanyId = data.takeGoodsCompanyId;
                sc.consignee = data.consignee;
                sc.consigneePhone = data.consigneePhone;
                sc.shipOrderId = data.shipOrderId;
            });
        });
    }

    /**
     * 获取询价单信息
     */
    getInquiryInfo(): void {
        this.inquiryService.getDetail(this.id).then(res => {
            let sc = this.$scope;
            let data = res.data;

            //基本信息
            sc.urgency = data.urgency;
            sc.urgencyUnit = data.urgencyUnit;
            sc.planOfficer = JSON.parse(window.localStorage.getItem("loginData")).realName;
            sc.businessOfficerId = data.businessOfficerId;
            sc.customerServiceOfficerId = data.customerServiceOfficerId;
            sc.dispatchOfficerId = data.dispatchOfficerId;
            sc.clientId = data.clientId;
            this.clientId = data.clientId;
            sc.clientName = data.clientName;
            sc.consignorId = data.consignorId;
            sc.consignorName = data.consignorName;
            sc.consignorPhone = data.consignorPhone;
            sc.shipPriceContent = data.content;

            let childData = res.data.inquiryChildList[0];
            //线路信息
            sc.shipProvinceCode = childData.startProvince;
            sc.shipCityCode = childData.startCity;
            sc.shipAreaCode = childData.startArea;
            sc.shipAddress = childData.startAddress;
            sc.deliverProvinceCode = childData.endProvince;
            sc.deliverCityCode = childData.endCity;
            sc.deliverAreaCode = childData.endArea;
            sc.deliverAddress = childData.endAddress;
            // sc.shipTime = childData.plannedArrivalTime;
            // sc.arriveTime = childData.plannedDeliveryTime;
            sc.mileage = childData.mileage;
            //货物信息
            sc.goodsTypeId = childData.goodsTypeId;
            sc.goodsId = childData.goodsId;
            sc.goodsName = childData.goodsName;
            sc.goodsNum = childData.goodsQuantity;
            sc.goodsNumUnit = childData.goodsQuantityUnit;

            //所需车辆信息
            sc.carType = childData.carType;
            sc.carLength = childData.carLength;
            sc.carriageWay = childData.carrierCategory;
            sc.loadingResult = childData.loadingEffect;
            //订单备注
            // sc.orderRemarks = childData.remarks;

            //获取下拉数据
            this.loadGoodsTypeDropDown();
            // this.loadGoodsDropDown(childData.goodsTypeId);
            this.getTonRangeList();
            // this.loadSettleDropDown();
        });
    }

    /**
     * 获取子单列表
     */
    getChlderInfoEdit = () => {
        this.orderService.orderChildList(this.id).then(res => {
            //获取详情
            res.data.list.forEach((item, index) => {
                var childData = item;
                this.orderService.orderChild(item.id).then((result => {
                    let data = result.data;
                    var newViaData = [];
                    //中转地
                    data.viaAddressList.forEach((item, index) => {
                        newViaData.push({
                            province: item.province,
                            city: item.city,
                            county: item.county,
                            index: index
                        });
                    });
                    var quantityOfGoods = "";
                    this.$scope.goodsNumUnitDropDown.forEach((itme, index) => {
                        if (data.goodsNumUnit == itme.value) {
                            quantityOfGoods = itme.text;
                        }
                    });
                    var receivablePriceUnitStr = "";
                    this.$scope.priceUnitDropDown.forEach((itme, index) => {
                        if (data.receivablePriceUnit == itme.value) {
                            receivablePriceUnitStr = itme.text;
                        }
                    })
                    //子线路
                    this.$scope.childOrderLine.push({
                        index: index + 1,
                        shipProvinceCode: data.shipProvince,
                        shipCityCode: data.shipCity,
                        shipAreaCode: data.shipArea,
                        shipAddress: data.shipAddress,
                        viaListData: newViaData,
                        deliverProvinceCode: data.deliverProvince,
                        deliverCityCode: data.deliverCity,
                        deliverAreaCode: data.deliverArea,
                        deliverAddress: data.deliverAddress,
                        shipTime: data.shipTime,
                        arriveTime: data.arriveTime,
                        mileage: data.mileage,
                        goodsTypeId: data.goodsTypeId,
                        goodsTypeName: data.goodsType,
                        goodsId: data.goodsId,
                        goodsName: data.goodsName,
                        goodsNum: data.goodsNum,
                        goodsNumUnit: data.goodsNumUnit,
                        goodsNumTwo: data.goodsNumTwo,
                        goodsNumUnitStr: quantityOfGoods,
                        goodsNumTwoUnit: data.goodsNumUnitTwo,
                        tonRange: data.tonRange,
                        receivablePrice: data.receivablePrice,
                        receivablePriceUnit: data.receivablePriceUnit,
                        receivablePriceUnitStr: receivablePriceUnitStr,
                        receivableTotal: data.receivableTotal,
                        settleType: data.settleType,
                        includeTax: data.includeTax,
                        receivableRemarks: data.receivableRemarks,
                        settleId: data.settleId,
                        reckoner: item.settleName,
                        projectid: data.projectId,
                        projectCode: data.projectCode,
                        projectName: data.projectName,
                        shipOrderId: data.shipOrderId,
                        takeGoodsCompanyId: data.takeGoodsCompanyId,
                        takeGoodsCompanyName: data.takeGoodsCompany,
                        consignee: data.consignee,
                        consigneePhone: data.consigneePhone,
                        projectTotal: data.projectTotal,
                        projectTotalUnit: data.projectTotalUnit,
                        settleTypeStr: childData.settlementType,
                        shipDetail: childData.shipGoodsAddress,
                        deliverDetail: childData.deliveryAddress
                    });

                }));
            });
        })
    }

    shipBack(): void {
        //   window.history.back();
        this.$state.go("app.order.orderAddList", { name: "orderAddList" });
    }

}

angular.module("tms").controller("addOrderController", ["$scope", "areaService", "projectService", "customerRepresentativeService", "clientService", "linePriceService", "employeeService", "goodsTypeService", "FileUploader", "routeService", "$http", "inquiryService", "goodsService", "settleService", "valueService", "$ngBootbox", "orderService", "$state", "$location", "commonService", "$q", AddOrderController]);