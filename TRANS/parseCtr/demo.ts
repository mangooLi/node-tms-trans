{

    
    id: string;
    
    clientId: string;
    
    operationType: AddOrderOperationType = AddOrderOperationType.Add;
    
    // viaListData: { province: string, city: string, county: string, index: number }[] = [];
    
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
            this.orderName = "发货单复制新增";
            this.id = this.$location.search().id;
        } else if (this.$location.search().name == "edit") {
            this.operationType = AddOrderOperationType.Edit;
            this.orderName = "发货单编辑重下";
            this.id = this.$location.search().id;
        } else if (this.$location.search().name == "inquiry") {
            this.operationType = AddOrderOperationType.Inquiry;
            this.orderName = "发货单复制新增";
            this.id = this.$location.search().id;
        }
        this.init();
    }

    init(): void {
        this.planOfficer = JSON.parse(window.localStorage.getItem("loginData")).realName;
        this.attachmentUploader = new this.fileUploader({ url: this.baseImageUrl });
        this.attachmentUploader.filters.push({ name: 'imageFilter', fn: this.commonService.ownFilter });
        this.attachmentUploader.onSuccessItem = (fileItem: any, response: any) => { this.onSuccessItem(fileItem.file.name, response.filePath, 1, fileItem.file); }
        this.attachmentUploader.onDelete = (item) => {
            this.commonService.onDelete(item, this.uploaderList);
        };
        this.businessOfficerDropDown = [];
        this.customerServiceOfficerDropDown = [];
        this.dispatchOfficerDropDown = [];
        this.goodsTypeDropDown = [];
        this.goodsDropDown = [];
        this.settleDropDown = [];
        this.urgencyUnitDropDown = [];
        this.goodsNumUnitDropDown = [];
        this.settleTypeDropDown = [];
        this.includeTaxDropDown = [];
        this.projectTotalUnitDropDown = [];
        this.carTypeDropDown = [];
        this.carLengthDropDown = [];
        this.carriageWayDropDown = [];
        this.orderId = "";
        this.urgency = null;
        this.urgencyUnit = "1";
        this.businessOfficer = null;
        this.customerServiceOfficer = null;
        this.dispatchOfficer = null;
        this.clientId = "";
        this.consignorId = "";
        this.consignorName = "";
        this.shipPriceContent = "";
        this.carType = "";
        this.carLength = "";
        this.carriageWay = "";
        this.loadingResult = "";
        this.shipProvinceCode = "";
        this.shipCityCode = "";
        this.shipAreaCode = "";
        this.shipAddress = "";
        this.deliverProvinceCode = "";
        this.deliverCityCode = "";
        this.deliverAreaCode = "";
        this.viaCity = "-1"
        this.viaProvince = "-1";
        this.viaArea = "-1";
        this.deliverAddress = "";
        this.shipTime = "";
        this.arriveTime = "";
        this.mileage = null;
        this.goodsTypeId = "";
        this.goodsTypeName = "";
        this.goodsId = "";
        this.goodsName = "";
        this.goodsNum = null;
        this.goodsNumUnit = "";
        this.goodsNumTwo = null;
        this.goodsNumTwoUnit = "";
        this.tonRange = "";
        this.receivablePrice = null;
        this.receivablePriceUnit = "";
        this.receivableTotal = null;
        this.settleType = "";
        this.includeTax = "";
        this.receivableRemarks = "";
        this.settleId = "";
        this.settleName = "";
        this.projectId = "";
        this.projectCode = "";
        this.projectName = "";
        this.shipOrderId = "";
        this.takeGoodsCompanyId = "";
        this.takeGoodsCompanyName = "";
        this.consignee = "";
        this.consigneePhone = "";
        this.projectTotal = null;
        this.projectTotalUnit = "";
        this.childOrderLine = [];


        //按钮
        this.showAddChildOrderBtn = true;
        this.showAddOrderBtn = true;
        this.orderSave = this.orderSave;

        //数组
        this.viaListData = [];
        this.orderLine = [];

        this.ischecked = false;
        this.isRequired = true;

        this.initDateTimePicker();
        this.loadData();


        //共有事件
        this.loadDropDown();//加载枚举

        this.addVia = this.addVia;
        this.deleteVia = this.deleteVia;

        this.onClientSelected = this.onClientSelected;

        this.addOrderLine = this.addOrderLine;
        this.addChildOrderLine = this.addChildOrderLine;
        this.saveOrderLine = this.saveOrderLine;
        this.saveChildOrderLine = this.saveChildOrderLine;
        this.editOrderLine = this.editOrderLine;
        this.editChildOrderLine = this.editChildOrderLine;
        this.deleteOrderLine = this.deleteOrderLine;
        this.deleteChildOrderLine = this.deleteChildOrderLine;

        this.shipBack = this.shipBack;

        //change事件
        this.changeGoodsTypeEvent = this.changeGoodsTypeEvent;
        // this.changeGoodsGetTonRangeList = this.changeGoodsGetTonRangeList;
        this.changeTonRangeGetReceivableEvent = this.changeTonRangeGetReceivableEvent;
        //自动补全事件
        this.onClientAutoComplate = this.onClientAutoComplate;
        this.onConsignorAutoComplate = this.onConsignorAutoComplate;
        this.onConsignorSelected = this.onConsignorSelected;
        this.onGoodsNameAutoComplate = this.onGoodsNameAutoComplate;
        this.onGoodsNameSelected = this.onGoodsNameSelected;
        this.onProjectAutoComplate = this.onProjectAutoComplate;

        this.onProjectSelected = this.onProjectSelected;

        this.onsettleSelected = this.onsettleSelected;
        this.onSettleAutoComplate = this.onSettleAutoComplate;


    }

    loadData(): void {
        if (this.operationType == AddOrderOperationType.Add) {
            this.setShipAndArriveTime();
        } else if (this.operationType == AddOrderOperationType.Copy) {
            this.getOrderInfo();
            this.getChildInfo();
            this.setShipAndArriveTime();
            this.ischecked = true;
        } else if (this.operationType == AddOrderOperationType.Edit) {
            this.getOrderInfo();
            this.isRequired = true;
            this.getChlderInfoEdit();
            this.ischecked = true;
        } else if (this.operationType == AddOrderOperationType.Inquiry) {
            this.getInquiryInfo();
            this.setShipAndArriveTime();
            this.ischecked = true;
        }
    }

    
    addVia = () => {
        if (this.viaProvince == "-1" || this.viaCity == "-1" || this.viaArea == "-1") {
            this.$ngBootbox.alert("请填写完整的中转地");
            return;
        }
        let index = this.viaListData.length + 1;
        //data
        this.viaListData.push({
            index: index++,
            // province: this.viaProvince,
            // city: this.viaCity,
            // county: this.viaArea
            province: $(".province option:selected")[2].innerHTML,
            city: $(".city option:selected")[2].innerHTML,
            county: $(".area option:selected")[2].innerHTML
        });
    }

    
    deleteVia = (index: number) => {
        this.viaListData.splice(index - 1, 1);
        //重置index

        this.viaListData.forEach((item, index) => {
            this.viaListData[index].index = index + 1;
        });
    }

    
    addOrderLine = (type: boolean) => {
        if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
        if (!type) {
            if (this.orderLine.length > 0) {
                this.$ngBootbox.alert("只能添加一条总线路信息");
                return;
            }
        }
        if (this.goodsId == "") {
            this.$ngBootbox.alert("请选择货物");
            return;
        }
        if ($("#goodsId_value").val() == "") {
            this.$ngBootbox.alert("请填写货物名称"); return;
        };
        // if (this.shipProvinceCode == "-1" || this.shipCityCode == "-1" || this.shipAreaCode == "-1"
        //     || this.deliverProvinceCode == "-1" || this.deliverCityCode == "-1" || this.deliverAreaCode == "-1") {
        //     this.$ngBootbox.alert("请填写完成地址");
        //     return;
        // }

        this.isClientCanEdit = false;
        // let ol = this.orderLine;
        let sc = this.$scope;
        this.orderLine = [{


            shipDetail: $(".province option:selected")[0].innerHTML + $(".city option:selected")[0].innerHTML + $(".area option:selected")[0].innerHTML + sc.shipAddress,
            deliverDetail: $(".province option:selected")[1].innerHTML + $(".city option:selected")[1].innerHTML + $(".area option:selected")[1].innerHTML + sc.deliverAddress,

            viaListData: this.viaListData.map((value) => value),
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

    
    deleteOrderLine = () => {
        if (this.childOrderLine.length == 0) {
            this.isClientCanEdit = true;
        }
        this.orderLine.length = 0;
        this.showAddOrderBtn = true;
    }

    
    editOrderLine = () => {

        //赋值参数
        this.showAddOrderBtn = false;
        let ol = this.orderLine[0];
        let sc = this.$scope;
        // this.loadSettleDropDown();
        this.loadGoodsTypeDropDown();
        // this.loadGoodsDropDown(ol.goodsTypeId);
        this.viaListData = ol.viaListData.map((value) => value);

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
    
    getProvinceList = () => {
        this.areaService.getCity(this.shipProvinceCode).then(res => {
            this.shipCityList = res.data.list;
        });
        this.areaService.getCounty(this.shipCityCode).then(res => {
            this.shipAreaList = res.data.list;
        });
        this.areaService.getCity(this.deliverProvinceCode).then(res => {
            this.deliverCityList = res.data.list;
        });
        this.areaService.getCounty(this.deliverCityCode).then(res => {
            this.deliverAreaList = res.data.list;
        });
    }

    
    saveOrderLine = (type: boolean) => {
        this.addOrderLine(type);
        this.showAddOrderBtn = true;
    }

    
    addChildOrderLine = () => {
        if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
        var settle = $("#reckoner_value").val();
        if (this.settleId == "" || settle == "") {
            this.$ngBootbox.alert("请选择结算单位");
            return;
        }
        if ($("#goodsId_value").val() == "") {
            this.$ngBootbox.alert("请填写货物名称"); return;
        };
        // if (this.shipProvinceCode == "-1" || this.shipCityCode == "-1" || this.shipAreaCode == "-1"
        //     || this.deliverProvinceCode == "-1" || this.deliverCityCode == "-1" || this.deliverAreaCode == "-1") {
        //     this.$ngBootbox.alert("请填写完整地址");
        //     return;
        // }
        //缺表单验证

        var sc = this.$scope;
        this.childOrderLine.push({
            index: this.childOrderLine.length + 1,
            shipProvinceCode: sc.shipProvinceCode,
            shipCityCode: sc.shipCityCode,
            shipAreaCode: sc.shipAreaCode,
            shipAddress: sc.shipAddress,
            viaListData: this.viaListData.map((value) => value),
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

    
    deleteChildOrderLine = (index: number) => {
        this.childOrderLine.splice(index - 1, 1);
        this.childOrderLine.forEach((item, index) => {
            this.childOrderLine[index].index = index + 1;
        });
        this.showAddChildOrderBtn = true;
    }

    
    editChildOrderLine = (index: number) => {
        this.showAddChildOrderBtn = false;
        if (index > this.childOrderLine.length) {
            return;
        }
        var sc = this.$scope;
        var ol;
        this.childOrderLine.forEach((item, indexS) => {
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
        this.viaListData = newViaList;
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

    
    saveChildOrderLine = () => {
        if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
        if (this.childOrderIndex > this.childOrderLine.length || this.childOrderIndex < 0) {
            return;
        }
        var settleName = $("#reckoner_value").val();
        if (this.settleId == "" || settleName == "") {
            this.$ngBootbox.alert("请选择结算单位");
            return;
        }
        // if (this.shipProvinceCode == "-1" || this.shipCityCode == "-1" || this.shipAreaCode == "-1"
        //     || this.deliverProvinceCode == "-1" || this.deliverCityCode == "-1" || this.deliverAreaCode == "-1") {
        //     this.$ngBootbox.alert("请填写完整地址");
        //     return;
        // }
        //缺表单验证

        let sc = this.$scope;
        // let ol = this.childOrderLine[this.childOrderIndex - 1];

        var ol;
        this.childOrderLine.forEach((item, indexS) => {
            if (item.index === this.childOrderIndex) {
                ol = item;
                return false;
            }
        });

        var newViaList = [];
        this.viaListData.forEach((item, index) => {
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

        this.showAddChildOrderBtn = true;
    }

    
    orderSave = () => {
        if (this.operationType == AddOrderOperationType.Add || this.operationType == AddOrderOperationType.Copy || this.operationType == AddOrderOperationType.Inquiry) {
            if (!$("#orderForm").valid()) { return };
            if (this.orderLine.length == 0) {
                this.$ngBootbox.alert("必须存在一条总线路");
                return;
            }
            if (this.childOrderLine.length == 0) {
                this.$ngBootbox.alert("必须存在一条子线路");
                return;
            }
            // if (this.enabledSaveBtn == false) {
            //     return;
            // }

            if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return; };
            this.enabledSaveBtn = true;
            let orderChild: orderChildVM[] = [];
            this.childOrderLine.forEach((item) => {
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
                this.dispatchOfficerDropDown.forEach((item, index) => {
                    if (item.id === this.dispatchOfficerId) {
                        dispatchOfficerPhone = item.phoneNumber;
                    }
                });

                ///附件类型改换。带后台更改后删除
                var uploaderList = []
                this.uploaderList.forEach((item, index) => {
                    uploaderList.push([item.attachmentName, item.attachmentPath]);
                })



                var ol = this.orderLine[0];
                this.clientService.getDetail(this.clientId).then((res) => {
                    var clientCornet = res.data.cornet;
                    let contractNumber = res.data.contractNumber;
                    this.orderService.add(
                        "",
                        this.urgency,
                        this.urgencyUnit,
                        this.businessOfficerId,
                        this.customerServiceOfficerId,
                        this.dispatchOfficerId,
                        this.clientId,
                        clientCornet,
                        this.consignorId,
                        this.shipPriceContent,
                        this.carType,
                        this.carLength,
                        this.carriageWay,
                        this.loadingResult,
                        // this.uploaderList,附件类型改换。带后台更改后删除
                        uploaderList,
                        this.orderRemarks,
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
                        this.planOfficer,
                        $("#client_value").val(),
                        null,
                        contractNumber
                    ).then(result => {
                        this.enabledSaveBtn = false;
                        this.$state.go("app.order.orderAddList", { name: "orderAddList" });
                    }, error => { this.enabledSaveBtn = false; });
                }, () => { this.enabledSaveBtn = false; });

            }, () => { this.enabledSaveBtn = false; });
        } else if (this.operationType == AddOrderOperationType.Edit) {
            //缺少验证
            if (!this.commonService.timeJudge($("#dataTime").val(), $("#dataTimeEnd").val())) { return };
            this.enabledSaveBtn = true;
            let ol = this.orderLine[0];
            let sc = this.$scope;
            let orderChild: orderChildVM[] = [];
            this.childOrderLine.forEach((item) => {
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
                    this.orderId,
                    this.urgency,
                    this.urgencyUnit,
                    this.businessOfficerId,
                    this.customerServiceOfficerId,
                    this.dispatchOfficerId,
                    this.clientId,
                    this.consignorId,
                    this.shipPriceContent,
                    this.carType,
                    this.carLength,
                    this.carriageWay,
                    this.loadingResult,
                    // this.uploaderList,
                    uploaderList,
                    this.orderRemarks,
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
                    this.planOfficer,
                    $("#client_value").val()
                ).then(result => {
                    this.enabledSaveBtn = false;
                    this.$state.go("app.order.orderAddList", { name: "orderAddList" });
                }, () => { this.enabledSaveBtn = false; });
            }, () => { this.enabledSaveBtn = false; })
        }
    }

    
    setShipAndArriveTime(): void {
        let time = new Date();
        let defaultTime = new Date(time.getFullYear(), time.getMonth(), time.getDate() + 1, 17, 0);
        this.shipTime = String(this.commonService.transformTime(new Date(time.setHours(16, 0, 0)), "yyyy.MM.dd HH:mm"));
        this.arriveTime = String(this.commonService.transformTime(defaultTime, "yyyy.MM.dd HH:mm"));
    }

    
    getDispatcherPhone(): string {
        var dispatchOfficerPhone = "";
        this.dispatchOfficerDropDown.forEach((item, index) => {
            if (item.id === this.dispatchOfficerId) {
                dispatchOfficerPhone = item.phoneNumber;
            }
        });
        return dispatchOfficerPhone
    }
    
    initDateTimePicker(): void {
        $('#opendataTime').click(function () {
            $('#dataTime').datetimepicker('show');
        });
        $('#opendataTimeEnd').click(function () {
            $('#dataTimeEnd').datetimepicker('show');
        });
    }
    
    loadDropDown(): void {
        //枚举
        this.urgencyUnitDropDown = this.valueService.getUrgencyUnitList().list;
        this.goodsNumUnitDropDown = this.valueService.getGoodQuantityUnitList().list;
        this.priceUnitDropDown = this.valueService.getPriceUnitList().list;
        this.settleTypeDropDown = this.valueService.getSettlementTypeList().list;
        this.includeTaxDropDown = this.valueService.getLinePriceTypeList().list;
        this.projectTotalUnitDropDown = this.valueService.getGoodQuantityUnitList().list;
        this.carTypeDropDown = this.valueService.getCarTypeList().list;
        this.carLengthDropDown = this.valueService.getCarLengthList().list;
        this.carriageWayDropDown = this.valueService.getCarriageTypeList().list;
        // this.goodsNumUnitDropDown = this.valueService.getGoodQuantityUnitList().list;

        //专员加载
        this.loadBusinessOfficeerDropDown();
        this.loadCustomerServiceOfficerDropDown();
        this.loadDispatchOfficerDropDown();
    }

    
    loadBusinessOfficeerDropDown(): void {
        this.employeeService.getList(CommissionerType.BusinessAffairs.toString(), "", "", "", "", true, 0, -1).then(result => {
            this.businessOfficerDropDown = result.data.list;
        });
    }

    
    loadCustomerServiceOfficerDropDown(): void {
        this.employeeService.getList(CommissionerType.CustomerService.toString(), "", "", "", "", true, 0, -1).then(result => {
            this.customerServiceOfficerDropDown = result.data.list;
        });
    }

    
    loadDispatchOfficerDropDown(): void {
        this.employeeService.getList(CommissionerType.Dispatch.toString(), "", "", "", "", true, 0, -1).then(result => {
            this.dispatchOfficerDropDown = result.data.list;
        });
    }

    
    loadGoodsTypeDropDown(): void {
        this.goodsTypeService.getList(this.clientId, "", 0, -1).then(result => {
            this.goodsTypeDropDown = result.data.list;
            if (!this.clientId || this.clientId === "") { this.goodsDropDown.length = 0; this.goodsTypeId = ""; this.tonRangeDropDown.length = 0; };
        });

    }

    
    // loadGoodsDropDown = (goodsTypeId: string) => {
    //     // this.goodsService.getList(this.clientId, "", goodsTypeId, 0, -1).then(result => {
    //     //     this.goodsDropDown = result.data.list;
    //     //     if (!this.goodsTypeId || this.goodsTypeId === "") { this.goodsDropDown.length = 0; this.goodsId = ""; this.tonRangeDropDown.length = 0; };
    //     // });
    //     // this.goodsService.getList(this.clientId, "", goodsTypeId, 0, -1).then(result => {
    //     //     if (this.$location.search().name != "add") {
    //     //         $("#goodsId_value").val(result.data.list[0].name)
    //     //     }
    //     //     if (!this.goodsTypeId || this.goodsTypeId === "") { this.goodsDropDown.length = 0; this.goodsId = ""; this.tonRangeDropDown.length = 0; };
    //     // })
    // }

    
    // loadSettleDropDown(): void {
    //     this.settleService.getList(this.clientId, "", "", true, 0, 1).then(result => {
    //         // this.settleDropDown = result.data.list;
    //         if (this.$location.search().name == "add") {
    //             this.settleId = result.data.list[0].id;
    //             $("#reckoner_value").val(result.data.list[0].name)
    //             this.reckoner = result.data.list[0].name;
    //         }
    //     });
    // }

    
    onClientSelected = (data: angucomplete<ClientListItemResponse>) => {
        if (data) {
            this.consignorId = "";
            this.goodsTypeId = "";
            this.goodsDropDown.length = 0;
            this.projectId = "";
            this.clientId = data.description.id;
            this.clientId = data.description.id;
            // $("#consignor_value").val("");
            // $("#reckoner_value").val("");
            this.$broadcast('angucomplete-alt:clearInput', 'consignor');
            this.$broadcast('angucomplete-alt:clearInput', 'goodsId');
            this.$broadcast('angucomplete-alt:clearInput', 'reckoner');
            this.reckoner = "";
            this.settleId = "";

            this.loadGoodsTypeDropDown();
            // this.loadSettleDropDown();
        } else { return };
    }
    
    onClientAutoComplate = (value: string) => {
        return this.clientService.getList(value, "", "", "", "", 0, 5).then(res => {
            return res.data.list;
        });
    }
    
    onConsignorAutoComplate = (value: string) => {
        if (!this.clientId) { return; };
        return this.customerRepresentativeService.getList(this.clientId, value, "", 0, 5).then(res => {
            return res.data.list;
        })
    }
    
    onConsignorSelected = (selected: angucomplete<CustomerRepresentativeListItemResponse>) => {
        if (selected) {
            this.consignorPhone = selected.description.phoneNumber;
            this.consignorId = selected.description.id;
        } else {
            this.consignorPhone = "";
            this.consignorId = "";
        }

    }
    
    onsettleSelected = (selected: angucomplete<SettleListItemResponse>) => {
        if (selected) {
            this.settleId = selected.description.id;
            this.reckoner = selected.description.name;
            $("#reckoner_value").val(selected.description.name)

        } else {
            // $("#reckoner_value").val("");
            // this.reckoner = "";
            this.settleId = "";
        }
    }
    
    onSettleAutoComplate = (value: string) => {
        if (!this.clientId) { return; };
        return this.settleService.getList(this.clientId, value, "", true, 0, 5).then(result => {
            return result.data.list;
        });
    }

    
    onProjectAutoComplate = (value: string) => {
        if (!this.clientId) { return; };
        return this.projectService.getList(this.clientId, "", "", 0, 5).then(res => {
            return res.data.list;
        })
    }
    
    changeGoodsTypeEvent = () => {
        // this.loadGoodsDropDown(this.goodsTypeId);
        // this.changeGoodsGetTonRangeList = this.changeGoodsGetTonRangeList;
        this.$broadcast('angucomplete-alt:clearInput', 'goodsId');
        // $("#goodsId_value").val("");
        // this.goodsName = "";
        // this.goodsId = "";
    };

    
    onGoodsNameAutoComplate = (value: string) => {
        // console.log($("#goodsId_value").val());
        var deferred = this.$q.defer();
        if (!this.clientId || !this.goodsTypeId) {
            // deferred.resolve("well done!");
        } else {
            return this.goodsService.getList(this.clientId, value, this.goodsTypeId, 0, 30).then(res => {
                return res.data.list;
            })
        }
        return deferred.promise;
        //console.log(this.$q.reject)
    }

    
    onGoodsNameSelected = (selected: angucomplete<GoodsListItemResponse>) => {
        if (selected) {
            this.goodsName = selected.description.name;
            this.goodsId = selected.description.id;
            $("#goodsId_value").val(selected.description.name);
            //获取吨位范围判断未加
            this.getTonRangeList();
        } else {
            this.goodsName = "";
            this.goodsId = "";
        }

    }

    
    // changeGoodsGetTonRangeList = () => {
    //     //获取吨位范围判断未加
    //     this.getTonRangeList();
    // }

    
    getTonRangeList = () => {
        this.linePriceService.getList(this.clientId, this.goodsTypeId, "1", this.shipProvinceCode, this.shipCityCode, this.shipAreaCode, this.deliverProvinceCode, this.deliverCityCode, this.deliverAreaCode, "", this.goodsId, "", "", 0, -1).then(res => {
            this.tonRangeDropDown = res.data.list;
            if (!this.clientId || this.clientId === "" || this.goodsId === "" || !this.goodsId || this.goodsTypeId === "" || !this.goodsTypeId) {
                this.tonRangeDropDown.length = 0;
            }
        });
    }

    
    changeTonRangeGetReceivableEvent = () => {
        this.linePriceService.getList(this.clientId, this.goodsTypeId, "1", this.shipProvinceCode, this.shipCityCode, this.shipAreaCode, this.deliverProvinceCode, this.deliverCityCode, this.deliverAreaCode, this.tonRange, this.goodsId, "", "", 0, -1).then(res => {
            if (res.data.list.length > 0) {
                this.linePriceService.getDetail(res.data.list[0].id).then(res => {
                    this.receivablePrice = res.data.price;
                    this.receivablePriceUnit = res.data.priceUnit;
                    this.settleType = res.data.setleWay;
                    this.includeTax = res.data.priceType;
                })
            }
        });
    }

    
    onProjectSelected = (select: angucomplete<ProjectListItemResponse>) => {
        if (select) {
            this.getProjectData(select.description.id)
        }
    }

    
    getProjectData(id: string): void {
        this.projectService.getDetail(id).then(res => {
            this.projectTotal = String(res.data.maxValue);
            this.projectTotalUnit = res.data.maxUnit;
            this.projectCode = res.data.projectCode;
            this.takeGoodsCompanyName = res.data.settleName;
            this.consignee = res.data.settleContact;
            this.consigneePhone = res.data.settlePhone;
            //获取结算单id
            this.settleService.getList(this.clientId, res.data.settleName, "", true, 0, -1).then(res => {
                this.takeGoodsCompanyId = res.data.list[0].id;
            });
        });
    }

    
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
                this.orderId = res.data.orderId;
                //附件

                res.data.attachment.forEach((item, index) => {
                    this.commonService.showFileItem(item, this.attachmentUploader);
                    // this.showFileItem(item, this.attachmentUploader);
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
                let ol = this.orderLine[0];
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
                this.goodsNumUnitDropDown.forEach((itme, index) => {
                    if (data.goodsNumUnit == itme.value) {
                        quantityOfGoods = itme.text;
                    }
                })
                this.orderLine = [{
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
                    this.viaListData.push({
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
                    this.goodsNumUnitDropDown.forEach((itme, index) => {
                        if (data.goodsNumUnit == itme.value) {
                            quantityOfGoods = itme.text;
                        }
                    });
                    var receivablePriceUnitStr = "";
                    this.priceUnitDropDown.forEach((itme, index) => {
                        if (data.receivablePriceUnit == itme.value) {
                            receivablePriceUnitStr = itme.text;
                        }
                    })
                    //子线路
                    this.childOrderLine.push({
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