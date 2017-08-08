/**
 * 路由配置
 */

angular.module("tms")
.run(
    ['$rootScope', '$state', '$stateParams', 
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
)
.config(["$stateProvider","$urlRouterProvider",($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise("/app/blank");
    $stateProvider
    .state("app", {
        abstract: true,
        url:"/app",
        templateUrl:"../src/tpl/blank.html",
       
    })
    .state("app.blank",{
        url:"/blank",
        templateUrl:"../src/tpl/main.html",
        resolve: {
            load: ['$ocLazyLoad',function ($ocLazyLoad) {
                return  $ocLazyLoad.load("../src/main.js");
            }]
        }
    })
   .state("login", {
        url:"/login",
        template:'<div ui-view class="fade-in-right-big smooth"></div>'
       
    })
    .state("login.in", {
        url:"/in",
        templateUrl:"./src/tpl/tms_login.html",
         resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/login.js");
        }]
        }
    })

    // system
    .state('app.system', {
        url: '/system',
         template: '<div ui-view></div>'
    })
    /******************************
     * 设置//splite
     ******************************/
    .state("app.system.authorizationManagent", {//权限管理
        url:"/authorizationManagent",
        templateUrl:"./src/tpl/table_authorizationManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/authorizationManagentController.js");
        }]
      }
    })
    .state("app.system.authorizationTypeManagent", {//权限分类管理
        url:"/authorizationTypeManagent",
        templateUrl:"./src/tpl/table_authorizationTypeManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/authorizationTypeManagentController.js");
        }]
      }
    })
    .state("app.system.departmentManagent", {//部门管理
        url:"/departmentManagent",
        templateUrl:"./src/tpl/table_departmentManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/departmentManagentController.js");
        }]
      }
    })
    .state("app.system.employeeManagent", {//员工管理
        url:"/employeeManagent",
        templateUrl:"./src/tpl/table_employeeManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/employeeManagentController.js");
        }]
      }
    })
    .state("app.system.userManagent", {//用户管理
        url:"/userManagent",
        templateUrl:"./src/tpl/table_userManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/userManagentController.js");
        }]
      }
    })


    .state("app.system.userGroupManagent", {//用户组管理
        url:"/userGroupManagent",
        templateUrl:"./src/tpl/table_userGroupManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/userGroupManagentController.js");
        }]
      }
    })
    .state("app.system.logisticsManagent", {//物流方
        url:"/logisticsManagent",
        templateUrl:"./src/tpl/table_logisticsManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/logisticsManagentController.js");
        }]
      }
    })
    .state("app.system.userinfo_edit", {//个人信息管理
        url:"/userInfoManage",
        templateUrl:"./src/tpl/table_userinfoManage.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/userInfoManageController.js");
        }]
      }
    })

     // mes
    .state('app.mes', {
        url: '/mes',
         template: '<div ui-view class="fade-in-up"></div>'
    })
    .state("app.mes.messageList", {//消息
        url:"/messageList",
        templateUrl:"./src/tpl/messageList.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/system/messageController.js");
        }]
      }
    })

    //没有权限
     .state("app.noauthority", {//没有权限
        url:"/noauthority",
        templateUrl:"./src/tpl/noauthority.html",
      
    })

    /**********************************************
     * 客户模块
     **********************************************/
    // client
    .state('app.client', {
        url: '/client',
         template: '<div ui-view class="fade-in-up"></div>'
    })

    .state("app.client.client_Managent", {//客户管理
        url:"/clientController",
        templateUrl:"./src/tpl/table_clientManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/clientManagentController.js");
        }]
      }
    })
    .state("app.client.client_edit", {//编辑客户
        url:"/client_edit/?id",
        templateUrl:"./src/tpl/page_clientManagent_edit.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/clientManagentController.edit.js");
        }]
      }
    })
    .state("app.client.client_add", {//添加客户
        url:"/client_add",
        templateUrl:"./src/tpl/page_clientManagent_add.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/clientManagentController.add.js");
        }]
      }
    })
    .state("app.client.customerrepresentative_manage", {//客户代表
        url:"/customerRepresentativeManagent",
        templateUrl:"./src/tpl/page_customerRepresentativeManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/customerRepresentativeManagentController.js");
        }]
      }
    })
    .state("app.client.goodstype_manage", {//货物分类管理
        url:"/goodsTypeManagent",
        templateUrl:"./src/tpl/page_goodsTypeManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/goodsTypeManagentController.js");
        }]
      }
    })
    .state("app.client.goods_manage", {//货物管理
        url:"/goodsManagent",
        templateUrl:"./src/tpl/page_goodsManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/goodsManagentController.js");
        }]
      }
    })
    .state("app.client.settleManagent", {  //结算方管理
        url: "/settleManagent",
        templateUrl: "./src/tpl/page_settleManagent.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../src/controllers/system/settleManagentController.js");
            }]
        }
    })
    .state("app.client.lineprice_manage", {//线路报价
        url:"/lineprice_manage",
        templateUrl:"./src/tpl/page_linePriceManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/linePriceManagentController.js");
        }]
      }
    })
    .state("app.client.projectManagent", { //工程管理
        url: "/projectManagent",
        templateUrl: "./src/tpl/page_projectManagent.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../src/controllers/tms/projectManagentController.js");
            }]
        }
    })
    .state("app.client.clientinfo_manage", {//客户资料
        url:"/clientinfo_manage",
        templateUrl:"./src/tpl/page_clientInfoManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/tms/clientInfoManagentController.js");
        }]
      }
    })

    /*************************************
     * 车厂模块
     *************************************/
     // car
    .state('app.car', {
        url: '/car',
         template: '<div ui-view class="fade-in-up"></div>'
    })
    .state("app.car.carManagent", {//车辆管理
        url:"/carManagent",
        templateUrl:"./src/tpl/table_carManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/car/carManagentController.js");
        }]
      }
    })
    .state("app.car.carManagent_edit", {//车辆管理-编辑
        url:"/carEditManagent/?id",
        templateUrl:"./src/tpl/page_carManagent_edit.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/car/carManagentController.edit.js");
        }]
      }
    })

    
    .state('app.car.carManagent_Add', {//车辆管理-添加
        url: '/carAddManagent',
        templateUrl: './src/tpl/page_carManagent_add.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/car/carManagentController.add.js');
                }
            ]
        }
    })


    //车辆附件管理
    .state('app.car.carAttachmentEdit', {
        url: '/carAttachmentEdit',
        templateUrl: './src/tpl/page_carAttachmentManagent_edit.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/car/carAttachmentManagentController.js');
                }
            ]
        }
    })

    //车辆银行卡管理
    .state('app.car.carBankCardManagent', {
        url: '/carBankCardManagent',
        templateUrl: './src/tpl/page_carBankManagent.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/car/carBankCardManagentController.js');
                }
            ]
        }
    })

    //车辆主营线路管理
    .state('app.car.carRouteManagent', {
        url: '/carRouteManagent',
        templateUrl: './src/tpl/page_carRouteManagent.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/car/carRouteManagentController.js');
                }
            ]
        }
    })

    //车辆交易记录
    .state('app.car.carTradingRecord', {
        url: '/carTradingRecord',
        templateUrl: './src/tpl/page_carTradingRecord.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/car/carTradingRecordController.js');
                }
            ]
        }
    })


    .state("app.car.carEvaluateManagent", {//车辆评价(诚信记录)
        url:"/carEvaluateManagent",
        templateUrl:"./src/tpl/page_carEvaluate.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/car/carEvaluateController.js");
        }]
      }
    })

    .state("app.car.carLocation", {//车辆定位
        url:"/carLocation?id?carcode?phone?shipAddress?deliverAddress",
        templateUrl:"./src/tpl/page_carLocation.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/car/carLocationController.js");
        }]
      }
    })


    .state('app.car.BDNPLocation', { //车辆---北斗定位
        url: '/cars_BDNPLocation?name',
        templateUrl: './src/tpl/page_cars_BDNPLocation.html',
        params: { 'id': null, 'shipTime': null, 'carcode': null,'phone': null, 'realArrivalTime': null, 'shipAddress': null, 'deliverAddress': null },
        resolve: {
            load: ['$ocLazyLoad', ($ocLazyLoad)=> {
            (<any>window).BMap_loadScriptTime = (new Date).getTime();
            return  $ocLazyLoad.load('../vendor/getLocation.js').then(function(){
               return $ocLazyLoad.load("../src/controllers/carPark/car/BDNPLocationController.js")
            })
            
        }]
        }
    })

    //车辆定位--定位轨迹点
    .state("app.car.carStrackController", {//车辆定位
        url:"/carStrackController?carcode?phone?shipTime?shipAddress?deliverAddress",
        templateUrl:"./src/tpl/page_carStrack.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/car/carStrackController.js");
        }]
      }
    })
    
     // eva
    .state('app.eva', {
        url: '/eva',
         template: '<div ui-view class="fade-in-up"></div>'
    })
    //车辆评价
    .state('app.eva.evaluate_manage', {
        url: '/evaluate_manage',
        templateUrl: './src/tpl/page_carComment.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/car/carCommentController.js');
                }
            ]
        }
    })


    /********************************************
     * 承运商模块
     ********************************************/
     // carrier
    .state('app.carrier', {
        url: '/carrier',
         template: '<div ui-view class="fade-in-up"></div>'
    })
    //承运商附件
    .state("app.carrier.carrierAttachment", {
        url:"/carrierAttachment",
        templateUrl:"./src/tpl/page_carrierAttachmentManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/carrier/carrierAttachmentManagentController.js");
        }]
      }
    })
    .state('app.carrier.carrierManagent', {//承运商管理
        url: '/carrierManagent',
        templateUrl: './src/tpl/page_carrierManagent.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/carrier/carrierManagentController.js');
                }
            ]
        }
    })
    .state('app.carrier.carrierManagentAdd', {//添加承运商
    url: '/carrierManagentAdd',
    templateUrl: './src/tpl/page_carrierManagent_add.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/carPark/carrier/carrierManagentController.add.js');
            }
        ]
    }
   })
    .state('app.carrier.carrierManagentEdit', {//编辑承运商
        url: '/carrierManagentEdit?id',
        templateUrl: './src/tpl/page_carrierManagent_edit.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/carrier/carrierManagentController.edit.js');
                }
            ]
        }
    })
    .state('app.carrier.carrierBankEdit', {//承运商账户信息
        url: '/carrierBankEdit',
        templateUrl: './src/tpl/page_carrierBankCardManagent.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/carrier/carrierBankCardManagentController.js');
                }
            ]
        }
    })

    // 承运商下--主营线路管理
    .state('app.carrier.carrierRouteManagent', {
        url: '/carrierRouteManagent',
        templateUrl: './src/tpl/page_carrierRouteManagent.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/carrier/carrierRouteManagentController.js');
                }
            ]
        }
    })

    .state('app.carrier.carrieCarEdit', {//承运商所属车辆
        url: '/carrierCarEdit',
        templateUrl: './src/tpl/page_carrierCarManagent.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/carPark/carrier/carrierCarManagentController.js');
                }
            ]
        }
    })




    /**************************************
     * 询价模块
     **************************************/
    //inquiry
    .state('app.inquiry',{
       url:'/inquiry',
       template:'<div ui-view class="fade-in-up"></div>'
   })
    .state("app.inquiry.inquiryList", {//询价单新增列表
        url:"/inquiryList?name",
        templateUrl:"./src/tpl/table_inquiry.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryController.js");
        }]
      }
    })
    .state("app.inquiry.inquiryAdd", {//询价单新增(详情)复用页面---编辑重下
        url:"/inquiryAdd?id?name",
        templateUrl:"./src/tpl/page_inquiry_add.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryController.add.js");
        }]
      }
    })
    .state("app.inquiry.InquiryAccept", {//询价单受理
        url:"/InquiryAccept?name",
        templateUrl:"./src/tpl/table_inquiryAccepted.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryAcceptedController.js");
        }]
      }
    })
    .state("app.inquiry.inquiryAudit", {//询价单审核
        url:"/inquiryAuditController?name",
        templateUrl:"./src/tpl/table_inquiryAudit.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryAuditController.js");
        }]
      }
    })
    .state("app.inquiry.Inquiry_pay", {//询价单详情/应付报价/应收报价/审核详情1/审核详情2
        url:"/Inquiry_pay/?id?name",
        templateUrl:"./src/tpl/page_inquiry_pay.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryRatifyController.js");
        }]
      }
    })
    .state("app.inquiry.Inquiry_receivable", {//询价应收报价
        url:"/inquiryReceive?name",
        templateUrl:"./src/tpl/table_inquiryReceive.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryReceiveController.js");
        }]
      }
    })
    .state("app.inquiry.inquiryManagent", {//询价单管理列表
        url:"/inquiryManagent?name",
        templateUrl:"./src/tpl/table_inquiryManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/inquiry/inquiryManagentController.js");
        }]
      }
    })


    /******************************************
     * 订单模块
     ******************************************/
     //order
    .state('app.order',{
       url:'/order',
       template:'<div ui-view class="fade-in-up"></div>'
   })
    .state("app.order.orderAddList", {//发货单新增列表
        url:"/orderAddList?name",
        templateUrl:"./src/tpl/table_order.html",
        resolve: {
            load: ['$ocLazyLoad',function ($ocLazyLoad) {
                return  $ocLazyLoad.load("../src/controllers/order/orderController.js");
            }]
        }
    })
    .state("app.order.orderAdd", {//发货单新增详情-复制-编辑重下-询价新增订单
        url:"/orderAdd?id?name",
        templateUrl:"./src/tpl/page_order_add.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderController.add.js");
        }]
      }
    })
    .state("app.order.orderAcceptList", {//发货单受理列表
        url:"/orderAccept?name",
        templateUrl:"./src/tpl/table_orderAccept.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderAcceptController.js");
        }]
      }
    })
    .state("app.order.orderAcceptDetail", {//发货单受理整车
        url:"/orderAcceptDetail?id?carrierId?name?type",
        templateUrl:"./src/tpl/page_orderAccept_detail.html",
        resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad)=> {
            (<any>window).BMap_loadScriptTime = (new Date).getTime();
            return   $ocLazyLoad.load('../vendor/getLocation.js').then(function(){
               return $ocLazyLoad.load("../src/controllers/order/orderAcceptController.detail.js");
            })
            
        }]
      }
    })
    .state("app.order.orderAcceptBulk", {//发货单受理零担
        url:"/orderAcceptBulk?id?carrierId?name?type",
        templateUrl:"./src/tpl/page_orderAccept_breakBulk.html",
        resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad)=> {
            (<any>window).BMap_loadScriptTime = (new Date).getTime();
            return  $ocLazyLoad.load('../vendor/getLocation.js').then(function(){
               return $ocLazyLoad.load("../src/controllers/order/orderAcceptController.breakBulk.js");
            })
        }]
      }
    })
    //发货单审核（整车）
    .state("app.order.orderAuditDetailController", {
        url:"/orderAuditDetailController?id?name?type",
        templateUrl:"./src/tpl/page_orderAudit_detail.html",
        resolve: {
        load: ['$ocLazyLoad',($ocLazyLoad)=> {
            (<any>window).BMap_loadScriptTime = (new Date).getTime();
            return $ocLazyLoad.load('../vendor/getLocation.js').then(function(){
                return  $ocLazyLoad.load("../src/controllers/order/orderAuditController.detail.js");
            })
        }]
        
      }
    })
    //发货单审核（零担）
    .state("app.order.orderAuditBreakBulkDetailController", {
        url:"/orderAuditBreakBulkDetailController?id?name?type",
        templateUrl:"./src/tpl/page_orderAudit_breakBulk.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderAuditController.breakBulk.js");
        }]
      }
    })
    .state("app.order.orderRegisterList", {//发货单登记列表
        url:"/orderRegisterList?name",
        templateUrl:"./src/tpl/table_orderRegister.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderRegisterController.js");
        }]
      }
    })
    .state("app.order.orderRegisterDetail", {//发货单登记详情（整车）
        url:"/orderRegisterDetail?id?contractStatus?name?type?carId",
        templateUrl:"./src/tpl/page_orderRegister_detail.html",
        resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad)=> {
            (<any>window).BMap_loadScriptTime = (new Date).getTime();
            return  $ocLazyLoad.load('../vendor/getLocation.js').then(function(){
               return $ocLazyLoad.load("../src/controllers/order/orderRegisterController_detail.js")
            })
            
        }]
      }
    })
    .state("app.order.orderRegisterBulk", {//发货单登记详情（零担）
        url:"/orderRegisterBulk?id?contractStatus?name?type?carId",
        templateUrl:"./src/tpl/page_orderRegister_breakBulk.html",
        resolve: {
        load: ['$ocLazyLoad',($ocLazyLoad)=> {
            (<any>window).BMap_loadScriptTime = (new Date).getTime();
            return  $ocLazyLoad.load('../vendor/getLocation.js').then(function(){
              return  $ocLazyLoad.load("../src/controllers/order/orderRegisterController_breakBulk.js");
            })
        }]
      }
    })
    .state("app.order.orderCostApplication", {//费用申领
        url:"/orderCostApplication?id",
        templateUrl:"./src/tpl/page_orderRegister_costApplication.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderRegisterController_costApplication.js");
        }]
      }
    })
    .state("app.order.orderRegisterReceivable", {//应收登记（整单）
        url:"/orderRegisterReceivable?id",
        templateUrl:"./src/tpl/page_orderRegister_receivable.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderRegisterController_receivable.js");
        }]
      }
    })
    .state("app.order.orderRegisterReceivableBulk", {//应收登记（零担）
        url:"/orderRegisterReceivableBulk?id",
        templateUrl:"./src/tpl/page_orderRegister_receivable_breakBulk.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderRegisterController_receivable_breakBulk.js");
        }]
      }
    })
    //发货单管理
    .state("app.order.orderDeliverManage", {
        url:"/orderDeliverManage?name",
        templateUrl:"./src/tpl/table_orderDeliverManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderDeliverManagentController.js");
        }]
      }
    })
    //发货单管理（零担）
    .state("app.order.LTL_detail", {
        url:"/LTL_detail?id?name?type?skip",
        templateUrl:"./src/tpl/page_orderDeliverManagent_breakBulk.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderDeliverManagentController_breakBulk.js");
        }]
      }
    })
    //发货单管理（整担）
    .state("app.order.invoice_detail", {
        url:"/orderDeliverManage_detail?id?name?type?skip",
        templateUrl:"./src/tpl/page_orderDeliverManagent_detail.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderDeliverManagentController_detail.js");
        }]
      }
    })
    //发货单审核列表
    .state("app.order.orderAuditController", {
        url:"/orderAuditController?name",
        templateUrl:"./src/tpl/page_order_Audit.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderAuditController.js");
        }]
      }
    })
    //订单管理
    .state("app.order.orderManagentController", {
        url:"/orderManagentController?name",
        templateUrl:"./src/tpl/table_orderManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderManagentController.js");
        }]
      }
    })    

   //订单管理详情
    .state("app.order.orderManagentDetailController", {
        url:"/orderManagentDetailController?id?name",
        templateUrl:"./src/tpl/page_indent_detail.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/orderManagentController.detail.js");
        }]
      }
    })   

    /**************************************
     * 应收模块
     **************************************/
     //receivable
    .state('app.receivable',{
       url:'/receivable',
       template:'<div ui-view class="fade-in-up"></div>'
   })
    //应收结算
    .state("app.receivable.receivableClose", {  
        url:"/receivableClose?name",
        templateUrl:"./src/tpl/table_receivableClose.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableCloseController.js");
        }]
      }
    })

    //应收账单管理
    .state("app.receivable.receivableBill", {
        url:"/receivableBillManage?settle",
        templateUrl:"./src/tpl/table_receivableBillManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableBillManagentController.js");
        }]
      }
    })
    //应收账单管理----收入明细
    .state("app.receivable.income_detail", {
        url:"/receivableBillManage_income?id?name",
        templateUrl:"./src/tpl/page_receivableBillManagent_income.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableBillManagentController_income.js");
        }]
      }
    })

    //应收账单管理----账单管理
    .state("app.receivable.bill_admin", {
        url:"/receivableBillManage_admin?id?",
        templateUrl:"./src/tpl/page_receivableBillManagent_managent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableBillManagentController_managent.js");
        }]
      }
    })

    //应收账单管理----账单管理-详情（应收结算/应收对账 共用）
    .state("app.receivable.receivable_reconcile", {
        url:"/receivable_reconcile/?carrierOrderId?orderId?orderChildId?Id?settleStatus?totalPrice?price?unit?receivableCode?name",
        templateUrl:"./src/tpl/page_receivableClose_reconciliation.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableCloseController_reconciliation.js");
        }]
      }
    })

    //应收账单管理----账单管理---新增应收订单（应收结算/新增应收单）
    .state("app.receivable.receivable_order_add", {
        url:"/receivable_order_add/?id",
        templateUrl:"./src/tpl/page_receivable_add.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableController.add.js");
        }]
      }
    })
    
    //应收统计
    .state("app.receivable.receivable_census", {
        url:"/receivable_census?settle",
        templateUrl:"./src/tpl/table_receivableStatistics.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableStatisticsController.js");
        }]
      }
    })
    //应收统计---财务明细
    .state("app.receivable.finance_excel", {
        url:"/finance_excel?settle?startTime?endTime",
        templateUrl:"./src/tpl/page_receivableStatistics_finance_excel.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableStatisticsController_export.js");
        }]
      }
    })
    //应收统计---收入明细单
    .state("app.receivable.income_excel", {
        url:"/income_excel?settle?startTime?endTime",
        templateUrl:"./src/tpl/page_receivableStatics_income_excel.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableStatisticsController_export.js");
        }]
      }
    })

    //应收统计---未结账明细单
    .state("app.receivable.arrearage_excel", {
        url:"/arrearage_excel?settle?startTime?endTime",
        templateUrl:"./src/tpl/page_receivableStatistics_arrearage_excel.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableStatisticsController_export.js");
        }]
      }
    })

   .state("app.receivable.receivableManagentList", {//应收管理列表
        url:"/receivableManagentList?name",
        templateUrl:"./src/tpl/table_receivableManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableManagentController.js");
        }]
      }
    })
 
    .state("app.receivable.receivableCloseAdd", {//应收结算/新增应收单
        url:"/receivableCloseAdd?id?code",
        templateUrl:"./src/tpl/page_receivableClose_add.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableCloseController_add.js");
        }]
      }
    })  
    .state("app.receivable.receivableCloseBill", {//应收结算/应收账单生成
        url:"/receivableCloseBill?id?name",
        templateUrl:"./src/tpl/page_receivableClose_bill.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/receivable/receivableCloseController_bill.js");
        }]
      }
    })  

    /******************************************
     * 应付模块
     ******************************************/
     //fee
    .state('app.fee',{
       url:'/fee',
       template:'<div ui-view class="fade-in-up"></div>'
   })
    .state("app.fee.feeAuditList", {//应付审核列表
            url:"/feeAuditList",
            templateUrl:"./src/tpl/table_feeAudit.html",
            resolve: {
            load: ['$ocLazyLoad',function ($ocLazyLoad) {
                return  $ocLazyLoad.load("../src/controllers/finance/payable/feeAuditController.js");
            }]
        }
    })
    //结算单管理
    .state('app.fee.feeSettle_admin', {
        url: '/feeSettle_admin?name',
        templateUrl: './src/tpl/table_feeSettleManagent.html',
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/feeSettleManagentController.js");
        }]
      }
    })
    //结算单审核详情
    .state('app.fee.fee_settle_audit', {
        url: '/feeSettle_audit?settleId?name',
        templateUrl: './src/tpl/table_feeSettleAuditDetail.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/finance/payable/feeSettleAuditDetailController.js');
                }
            ]
        }
    })

    //结算单详情
    .state("app.fee.fee_settle_detail", {
        url: '/feeSettle_detail?settleId?name',
        templateUrl: './src/tpl/table_feeSettleDetail.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../src/controllers/finance/payable/feeSettleDetailController.js');
                }
            ]
        }
    })
    .state("app.fee.receiptManagentList", {//回单管理
        url:"/receiptManagentList",
        templateUrl:"./src/tpl/table_receiptManagent.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/receiptManagentController.js");
        }]
      }
    })
    .state("app.fee.receiptManagentBulk", {//回单管理详情（零担）
        url:"/receiptManagentBulk/?id?name",
        templateUrl:"./src/tpl/page_receiptManagent_breakBulk.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/receiptManagentController.breakbulk.js");
        }]
      }
    })
    .state("app.fee.receiptManagentOrder", {//回单管理详情(整车)
        url:"/receiptManagentOrder/?id?carrierOrderId?name",
        templateUrl:"./src/tpl/page_receiptManagent_order.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/receiptManagentController.order.js");
        }]
      }
    })
    .state("app.fee.feeCheckList", {//费用对账
        url:"/feeCheckList",
        templateUrl:"./src/tpl/app_fee_cost_recoverable.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/feeCheckController.js");
        }]
      }
    })
    .state("app.fee.feeBreakbulkDetail", {//应付【审核/对账/结算单管理/结算单审核/付款管理/应付管理】详情（零担）
        url:"/feeBreakbulkDetail/?feeId?carrierOrderId?pageName?feeStatus",
        templateUrl:"./src/tpl/app_fee_payaudit_LTL.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/feeBreakbulkDetailController.js");
        }]
      }
    })
    .state('app.fee.feeSettlePayManage', {//付款列表
    url: '/feeSettlePayManage',
    templateUrl: './src/tpl/app_fee_payment_admin.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/finance/payable/feeSettlePayManagentController.js');
            }
        ]
    }
   })
    .state('app.fee.feeManagent', {//应付管理
    url: '/feeManagent',
    templateUrl: './src/tpl/table_feeManagent.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/finance/payable/feeManagentController.js');
            }
        ]
    }
   })
    .state("app.fee.feeAddToParent", {//新增费用单
        url:"/feeAddToParent?id?code",
        templateUrl:"./src/tpl/app_fee_expense_add.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/feeAddToParentController.js");
        }]
      }
    })
    .state("app.fee.feeAddSettle", {//结算单生成
        url:"/feeAddSettle?feeIdList?codeList",
        templateUrl:"./src/tpl/app_fee_settle_create.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/finance/payable/feeAddSettleController.js");
        }]
      }
    })
    .state('app.fee.feeOrderDetailController', {//应付【审核/对账/结算单对账/管理】详情（发货单）
    url: '/feeOrderDetailController?feeId?orderId?name?carrierOrderId',
    templateUrl: './src/tpl/table_feePayAuditDetail.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/finance/payable/feeOrderDetailController.js');
            }
        ]
    }
   })

 //BDNP
    .state('app.BDNP',{
       url:'/BDNP',
       template:'<div ui-view class="fade-in-up"></div>'
   })
    .state("app.BDNP.BDNPExport", {//北斗报表
        url:"/BDNPExport",
        templateUrl:"./src/tpl/table_BDNPexcel_export.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/carPark/car/BDNPExportController.js");
        }]
      }
    })

    //opera
    .state('app.opera',{
       url:'/opera',
       template:'<div ui-view class="fade-in-up"></div>'
   })
   //运维
   .state('app.opera.operation_manage', { //运维
    url: '/operation_manage',
    templateUrl: './src/tpl/table_operationManage.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/operationManagentController.js');
            }
        ]
    }
   })
   .state('app.opera.operation_EContractList', { //运维--电子合同列表
    url: '/operation_EContractList',
    templateUrl: './src/tpl/table_operationEContractList.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/operationEContractList.js');
            }
        ]
    }
   })

    .state('app.opera.operation_EContractDownload', { //运维--电子合同下载记录
    url: '/operation_EContractDownload',
    templateUrl: './src/tpl/table_operationEContractDownload.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/operationEContractDownload.js');
            }
        ]
    }
   })
   

    //报表导出
    .state('app.excel',{
       url:'/excel',
       template:'<div ui-view class="fade-in-up"></div>'
   })
   //报表导出
   .state('app.excel.excel_export', { //报表导出
    url: '/excel_export',
    templateUrl: './src/tpl/excel_export.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/finance/export/exportController.js');
            }
        ]
    }
   })

   .state('app.opera.operationManage_breakBulk', { //运维（零担）
    url: '/operationManage_breakBulk?id',
    templateUrl: './src/tpl/page_operation_LTL_detail.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/operationManagentController.breakBulk.js');
            }
        ]
    }
   })

   .state("app.opera.operation_detail", {//运维整单详情
        url:"/operation_detail?id?carrierId?name?type?contractStatus",
        templateUrl:"./src/tpl/page_operation_detail.html",
        resolve: {
        load: ['$ocLazyLoad',function ($ocLazyLoad) {
            return  $ocLazyLoad.load("../src/controllers/order/operationManagentController_detail.js");
        }]
      }
    })

//      //外接订单
//     .state('app.external',{
//        url:'/external',
//        template:'<div ui-view class="fade-in-up"></div>'
//    })
    //外接询价单 CspInquiry
   .state('app.inquiry.external_inquiry', { //外接询价单
    url: '/external_inquiry?id?name',
    templateUrl: './src/tpl/external_inquiry.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/inquiry/cspinquiryController.js');
            }
        ]
    }
   })
     //外接询价单详情 CspInquiry
   .state('app.inquiry.external_inquiry_edit', { //外接询价单详情-编辑-共用
    url: '/external_inquiry_edit?id?name',
    templateUrl: './src/tpl/external_inquiry_edit.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/inquiry/cspinquiryController.edit.js');
            }
        ]
    }
   })
   //外接发货单 CspOrder
   .state('app.order.external_order', { //外接发货单
    url: '/external_order',
    templateUrl: './src/tpl/external_order.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/cspOrderListController.js');
            }
        ]
    }
   })
    //外接发货单详情 CspOrder
   .state('app.order.external_order_edit', { //外接发货单详情-编辑-共用
    url: '/external_order_edit?id?name',
    templateUrl: './src/tpl/external_order_edit.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/cspOrderDetailController.js');
            }
        ]
    }
   })

    //外接发货单详情 CspOrder
   .state('app.order.external_orderEdit_Disabel', { //外接发货单详情-编辑-共用
    url: '/external_orderEdit_Disabel?id',
    templateUrl: './src/tpl/page_csporderDetail.html',
    resolve: {
        deps: ['$ocLazyLoad',
            function ($ocLazyLoad) {
                return $ocLazyLoad.load('../src/controllers/order/cspOrderDetailDisableController.js');
            }
        ]
    }
   })


   
}]);
