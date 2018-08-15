import { Injectable } from '@angular/core';


export class Menu {
  constructor(public id: number,
              public title: string,
              public isOpen: boolean,
              public menuFirstChild: Array<MenuChild>,
              public menuClass: string) {
  }

}

/**
 * @description menu-item model (1级)
 * @export
 * @class MenuFirstChild
 */
export class MenuChild {

  id: number; // 路由的序号
  path: string; // 路由的路径
  title: string; // 路由的名称
  items: MenuChild[]; // 他的子项目
  isOpen = false; // 确定是否展开它的菜单
  isSelect = false; // 是否被选中
  params: any = null; // 参数
  constructor(id: number, path: string, title: string, items?: Array<MenuChild>, params?) {
    this.id = id;
    this.path = path;
    this.title = title;
    if (items) {
      this.items = items;
    } else {
      this.items = [];
    }
    if (params) {
      this.params = params;
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menus: Menu[] = [
    new Menu(4, '门店购物', false, [
        new MenuChild(2, '/mclon/supermarket/orderFormList', '购物车'),
        new MenuChild(6, '/mclon/supermarket/pastShoppingList', '历史购物'),
        new MenuChild(3, '/mclon/supermarket/orderSummary', '购物汇总'),
        new MenuChild(7, '/mclon/supermarket/pastShoppingHzList', '历史购物汇总'),
        new MenuChild(3, '/mclon/supermarket/RDNAQuery', '建议量查询'),
        new MenuChild(1, '/mclon/supermarket/shoppingCalendarList', '购物日历查询'),
        new MenuChild(4, '/mclon/supermarket/safetyStock', '可下单指标查询'),
        new MenuChild(5, '/mclon/supermarket/shoppingFundsList', '购物资金'),
        new MenuChild(2, '/mclon/supermarket/reserveStoneList', '定制裸石预定'),
        new MenuChild(2, '/mclon/supermarket/customize', '定做单列表'),
        new MenuChild(3, '/mclon/supermarket/prepurchaseList', '预购单列表'), // 18/7/18 预购单 -> 预购单列表
        new MenuChild(3, '', '门店满足率查询'),
      ], 'anticon-shopping-cart'
    ),
    new Menu(5, '商品计划', false, [
        new MenuChild(1, '', '库存管控', [
          new MenuChild(1, '/mclon/commodityPlan/classIndexList', '门店大类库存指标'),
          new MenuChild(2, '/mclon/commodityPlan/totalInventoryIndexList', '门店大类总库存指标'),
          new MenuChild(3, '/mclon/commodityPlan/joinClassIndexList', '加盟店大类最低库存指标'),
          new MenuChild(3, '/mclon/commodityPlan/joinTotalIndexList', '加盟店大类最低总库存指标'),
        ]),
        new MenuChild(2, '', '裸石库存', [
          new MenuChild(1, '/mclon/commodityPlan/bareStoneList', '裸石下单库存计划'),
          new MenuChild(3, '/mclon/commodityPlan/stoneRuleAdd', '裸石库存同步规则'),
          new MenuChild(2, '/mclon/commodityPlan/stoneStockList', '裸石库存'),
          new MenuChild(3, '/mclon/commodityPlan/stoneDiffList', '裸石库存计划差异'),
        ]),
        // 下单控制菜单 2018/7/13 删除
        new MenuChild(3, '/mclon/commodityPlan/collectionMgtList', '商品集管理'),
        new MenuChild(4, '/mclon/commodityPlan/regionalList', '区域管理'),
        new MenuChild(6, '/mclon/commodityPlan/shoppingCalenList', '购物日历'),
        new MenuChild(5, '/mclon/supermarket/totalHz', '总部汇总'),
        new MenuChild(6, '/mclon/supermarket/pastTotalHzList', '历史总部汇总'),
        new MenuChild(5, '', '商品计划报表查询', [
          new MenuChild(1, '', '总单满足率查询'),
          new MenuChild(2, '', '款式满足率查询'),
          new MenuChild(3, '', '门店总单在途查询'),
          new MenuChild(4, '/mclon/supermarket/singleStyle', '门店下单款式查询'),
          new MenuChild(5, '', '手工调配在途量'),
        ]),
      ], 'anticon-calendar'
    ),
    new Menu(6, '采购管理', false, [
        new MenuChild(1, '/mclon/purchasingMgt/buyerStyle', '采购员饰品大类'),
        new MenuChild(2, '/mclon/purchasingMgt/purchasingTotal', '采购总单'),
        new MenuChild(3, '/mclon/purchasingMgt/purchasingOrder', '采购单'),
        new MenuChild(4, '/mclon/purchasingMgt/customizeMgt', '定做单管理')
      ], 'anticon-file-text'
    ),
    new Menu(7, '库存中心', false, [
        new MenuChild(1, '', '特殊工费基础配置', [
          new MenuChild(1, '/mclon/configurationCenter/pt950Fee', 'pt950特殊工费'),
          new MenuChild(2, '/mclon/configurationCenter/capWeight', '特殊工费封顶克重表'),
          new MenuChild(3, '/mclon/configurationCenter/inlaidMetalFee', '千足金特殊工费市场价单价'),
        ]),
        new MenuChild(2, '', '核价入库基础配置', [
          new MenuChild(1, '/mclon/configurationCenter/checkBasicPrice', '单款单价'),
          new MenuChild(1, '/mclon/configurationCenter/materialPrice', '采购总系数'),
          new MenuChild(2, '/mclon/configurationCenter/outsourcingRatio', '委外总系数'),
          new MenuChild(6, '/mclon/configurationCenter/partsPricingCoefficient', '配件核价系数'),
          new MenuChild(5, '/mclon/configurationCenter/bracketRatio', '托架系数'),
          new MenuChild(5, '/mclon/configurationCenter/pieceAndRatio', '时尚黄金系数'),
          new MenuChild(7, '/mclon/configurationCenter/bracketPrice', '托架市场价'),
          new MenuChild(7, '/mclon/configurationCenter/otherStonePrice', '其他珠宝主配石市场价'),
          new MenuChild(9, '/mclon/configurationCenter/diamondsPrice', '钻石市场价'),
          new MenuChild(6, '/mclon/configurationCenter/robertPrice', '钻石罗伯特报价表'),
          new MenuChild(10, '/mclon/configurationCenter/diamondShapePrice', '钻石形状市场价比值'),
          new MenuChild(11, '/mclon/configurationCenter/fixedGoldPrice', '固定金价'),
          new MenuChild(6, '/mclon/configurationCenter/stoneRatio', '石头系数'),
          new MenuChild(2, '/mclon/configurationCenter/gramAndPieceFee', '按克按件工费基础表'),
          new MenuChild(2, '/mclon/configurationCenter/staffCode', '人员入库核价编码'),
          new MenuChild(10, '/mclon/configurationCenter/fixedPriceBasics', '一口价基础表'),
          new MenuChild(10, '/mclon/configurationCenter/stoneCheck', '裸石核对规则'),

          // new MenuChild(6, '/mclon/configurationCenter/rulePricing', '核价规则'), // 去掉
        ]),
        new MenuChild(3, '', '收货入库管理', [
          new MenuChild(1, '/mclon/inventoryCenter/deliveryMgtList', '采购送货单管理'),
          new MenuChild(2, '/mclon/inventoryCenter/qualityCheckMgtList', '质检单管理'),
          new MenuChild(3, '/mclon/inventoryCenter/nationalInspectionMgtList', '饰品国检管理'),
          new MenuChild(4, '/mclon/inventoryCenter/purchaseReceiptList', '采购收货单'),
          new MenuChild(6, '/mclon/inventoryCenter/pricingList', '核价管理'),
          new MenuChild(7, '/mclon/inventoryCenter/InStorageList', '入库管理'),
          new MenuChild(5, '/mclon/inventoryCenter/otherReceiptsList', '其他交接单'),
        ]),
        new MenuChild(4, '', '饰品形态转换', [
          new MenuChild(5, 'mclon/inventoryCenter/StoneSplitList', '裸石拆混包单'),
          new MenuChild(6, '/mclon/inventoryCenter/MorphologicalTransformationList', '形态转换单'),
          new MenuChild(7, '/mclon/inventoryCenter/StoneList', '拆石单'),
          new MenuChild(8, '/mclon/inventoryCenter/MaterialPurifyList', '原料提纯单'),
        ]),
        new MenuChild(5, '', '配货管理', [
          new MenuChild(1, '/mclon/inventoryCenter/orderAllocationList', '订单配货'),
          new MenuChild(2, '/mclon/inventoryCenter/multipleDistributionList', '综合配货'),
          new MenuChild(3, '/mclon/inventoryCenter/styleDistributionList', '款式配货'),
          new MenuChild(4, '/mclon/inventoryCenter/needStoneMgtList', '物料需求汇总配货'),
        ]),
        new MenuChild(6, '', '其他出库单', [
          new MenuChild(1, '/mclon/inventoryCenter/publicSalesSlipList', '对公销售单'),
          new MenuChild(2, '/mclon/inventoryCenter/proDeliveryOrderList', '饰品出库单'),
          new MenuChild(5, '/mclon/inventoryCenter/cancellationBillList', '代销退货单'),
          new MenuChild(6, '/mclon/inventoryCenter/lentReturnOrderList', '借出归还单'),
          new MenuChild(7, '/mclon/inventoryCenter/residualGoldCollarList', '余金领用单'),
          // new MenuChild(8, '/mclon/inventoryCenter/maintenanceSheetList', '维修耗料单') // 2018/7/27 删除
        ]),
        new MenuChild(7, '', '委外管理', [
          new MenuChild(1, '/mclon/inventoryCenter/outsourcingWorkOrderList', '委外发料单'),
          new MenuChild(9, '/mclon/inventoryCenter/returnOrderList', '金料退料单'),
          new MenuChild(9, '/mclon/inventoryCenter/outsourcingReturnOrderList', '裸石配件退料单'), // 2018/7/5 新增
          new MenuChild(14, '/mclon/inventoryCenter/InventoryAdjList', '委外库存调整'),
          new MenuChild(18, '/mclon/inventoryCenter/OutsourcingInquireList', '委外库存查询'),
          new MenuChild(18, '/mclon/inventoryCenter/OutsourcingLedgerList', '委外裸石及配件查询'),
        ]),
        new MenuChild(7, '', '饰品属性修改', [   // 2018/8/3 新增
          new MenuChild(11, '/mclon/inventoryCenter/PriceLockSheetList', '价格锁定单'), // 2018/8/3 从库存中心移到该处
          new MenuChild(12, '/mclon/inventoryCenter/FixedPriceList', '一口价'),  // 2018/8/3 从库存中心移到该处
          new MenuChild(19, '/mclon/inventoryCenter/InformationAdjustList', '饰品成本/重量调整'),
          new MenuChild(4, '/mclon/saleManagement/oldproductChangeList', '旧品信息修改'),
        ]),
        new MenuChild(8, '/mclon/inventoryCenter/SingleTransferList', '移库单'),

        new MenuChild(13, '/mclon/inventoryCenter/checkOrderList', '盘点单'),

        new MenuChild(9, '', '库存中心报表管理', [
          new MenuChild(1, '', '库存汇总查询'),
          new MenuChild(2, '/mclon/inventoryCenter/InventoryDetailsList', '库存明细查询'),
          new MenuChild(3, '', '商品部库存汇总查询表-(款式)'),
          new MenuChild(4, '/mclon/inventoryCenter/JewelryCirculationRecordsList', '饰品流转记录'),
          new MenuChild(1, '', '进销存查询'),
          new MenuChild(1, '', '未关闭收货单查询'),
          new MenuChild(1, '', '未关闭其它交接单查询'),
          new MenuChild(1, '', '代销退货报表'),
          new MenuChild(1, '', '代销商品查询(截止昨天)'),
          new MenuChild(1, '', '代销进销存查询'),
          new MenuChild(1, '', '代销饰品销售给加盟商报表'),
          new MenuChild(1, '', '代销饰品与供应商结算报表'),
          new MenuChild(1, '', '款式分析-带分析范围(截止昨天)'),
          new MenuChild(1, '', '款式分析-不带分析范围(截止昨天)'),
          new MenuChild(1, '', '连锁店库存网点金额查询'),
          new MenuChild(1, '', '拆石委外发料报表'),
          new MenuChild(1, '', '饰品库数据'),
          new MenuChild(1, '', '核价查询'),
          new MenuChild(1, '', '饰品编码盘点信息查询'),
          new MenuChild(1, '', '裸石导入日志'),
          new MenuChild(1, '', '门店库存信息_饰品库'),
          new MenuChild(1, '', '门店库存信息_旧品库'),
          new MenuChild(1, '', '物流日产量查询表格'),
          new MenuChild(1, '', '饰品(部分代销)供应商查询'), // 2018/7/25 新增
          new MenuChild(1, '', '未入库统计'), // 2018/8/3 新增
          new MenuChild(1, '', '采购单在途统计'), // 2018/8/3 新增
          new MenuChild(1, '', '入库48小时未配货统计'), // 2018/8/3 新增
          new MenuChild(1, '', '入库量统计'), // 2018/8/3 新增
        ]),
        new MenuChild(10, '', '标签管理', [
          new MenuChild(1, '/mclon/labelMgt/definitionLabelList', '换标签原因'),
          new MenuChild(2, '/mclon/labelMgt/labelCategoryList', '标签类别'),
          new MenuChild(3, '', '标签模版'),
          new MenuChild(5, '/mclon/labelMgt/batchGenerationCodeList', '批量生成条码'),
          new MenuChild(2, '/mclon/labelMgt/labelApplicationList', '标签申请'),
          new MenuChild(3, '/mclon/labelMgt/importLabelApplicationList', '标签导入申请单'),
          new MenuChild(4, '/mclon/labelMgt/labelPrintinList', '标签打印'),
        ]),
        new MenuChild(11, '', '滞销品、濒临滞销品管理', [
          new MenuChild(1, '/mclon/configurationCenter/deadStockRule', '滞销品、濒临滞销品规则'),
          new MenuChild(2, '', '(濒临)滞销品调拨平台信息表别'),
          new MenuChild(3, '', '(濒临)滞销品调拨平台信息表-销售数据'),
          new MenuChild(5, '', '(濒临)滞销品-颜色等级记录表'),
          new MenuChild(2, '', '滞销商品管理查询'),
        ]),

      ], 'anticon-flag'
    ),
    new Menu(3, '联合库存管理', false, [
        new MenuChild(2, '/mclon/jointStock/companylSaleList', '总公司款式销售分类'),
        new MenuChild(3, '/mclon/jointStock/shopSaleList', '门店款式销售分类'),
        new MenuChild(4, '/mclon/jointStock/boardMgtList', '板位管理'),
        new MenuChild(5, '/mclon/jointStock/shopCounterList', '门店柜台'),
        new MenuChild(6, '', '建议量配置', [
          new MenuChild(1, '/mclon/jointStock/proposalSwitch', '建议量开关配置'),
          new MenuChild(2, '/mclon/jointStock/detailStockIndexList', '明细款式门店库存标准'),
          new MenuChild(3, '/mclon/jointStock/dimensionRatioAdd', '尺寸占比'),
          new MenuChild(4, '/mclon/jointStock/priceRatioAdd', '价格段占比')
        ]),
        new MenuChild(1, '/mclon/saleManagement/surplusStock', '门店多余库存查询'),
        new MenuChild(7, '/mclon/jointStock/surplusOperationList', '门店多余库存操作单'),
        new MenuChild(8, '/mclon/jointStock/allocationOrderList', '调拨指令')
      ], 'anticon-api'
    ),
    new Menu(6, '调拨管理', false, [

        new MenuChild(1, '/mclon/transferMgt/expressPecipientList', '装箱单组织快递接收人'),
        new MenuChild(2, '/mclon/transferMgt/transferPriceRatioList', '调拨销价系数'),
        new MenuChild(4, '/mclon/transferMgt/transferNetworkList', '调拨网络'),
        new MenuChild(3, '/mclon/transferMgt/TransferPathList', '调拨路径'),
        new MenuChild(5, '/mclon/transferMgt/specialDiamondList', '一口价的门店价'),
        new MenuChild(5, '/mclon/transferMgt/storecounterMaintainList', '专卖店专柜维护'),
        new MenuChild(6, '/mclon/transferMgt/unitGroupList', '门店饰品柜组'),
        new MenuChild(3, '/mclon/saleManagement/checkReportList', '48小时检查上报'),
        new MenuChild(3, '/mclon/transferMgt/groupRequisitionList', '柜组调拨单'),
        new MenuChild(2, '/mclon/transferMgt/transferOrderList', '调拨单'),
        new MenuChild(5, '/mclon/transferMgt/transferReceiveList', '调拨单接收'),
        new MenuChild(6, '/mclon/transferMgt/returnBillList', '退货单'),
        new MenuChild(7, '/mclon/transferMgt/returnReceiptList', '退货单接收'),
        new MenuChild(8, '/mclon/transferMgt/incompleteOrderList', '退残单'),
        new MenuChild(9, '/mclon/transferMgt/incompleteOrderReceiveList', '退残单接收'),
        new MenuChild(10, '/mclon/transferMgt/packingNoteList', '装箱单'),
        new MenuChild(5, '/mclon/transferMgt/packingNoteQuery', '装箱单查询'),
        new MenuChild(5, '/mclon/transferMgt/transferQuery', '调拔查询'),
        new MenuChild(5, '/mclon/transferMgt/retreatingQuery', '退残饰品查询'),
      ], 'anticon-switcher'
    ),

    new Menu(10, '销售管理', false, [
        new MenuChild(1, '', '销售管理基础配置', [
          new MenuChild(1, '/mclon/saleManagement/spzkjurisdictionList', '饰品折扣权限'),
          new MenuChild(2, '/mclon/saleManagement/tbzkapprovalType', '特殊折扣审批类型'),
          new MenuChild(3, '/mclon/saleManagement/tsapprovalPower', '特殊折扣审批权限'),
          new MenuChild(4, '/mclon/saleManagement/changeLossControl', '变更损耗控制'),
          new MenuChild(5, '/mclon/saleManagement/shopGoldList', '门店金价'),
          new MenuChild(6, '/mclon/saleManagement/weightHSnumList', '净重换算系数'),
          new MenuChild(7, '/mclon/saleManagement/oldChangeRateList', '以旧换新增长率'),
          new MenuChild(8, '/mclon/saleManagement/largeTypeChange', '大类通换'),
          new MenuChild(9, '/mclon/saleManagement/nursingProjectList', '护理项目'),
          new MenuChild(10, '/mclon/saleManagement/shopNursPriceList', '门店护理金额'),
          new MenuChild(11, '/mclon/saleManagement/GJgoldPrice', '国际金价'),
          new MenuChild(12, '/mclon/saleManagement/JGWXJpirceList', '加工厂维修件费用'),
          new MenuChild(13, '/mclon/saleManagement/smallTicket', '小票模板管理'),
          new MenuChild(14, '/mclon/saleManagement/SMPlanList', '销售月计划(月计划、大类月计划)'),
          new MenuChild(15, '/mclon/saleManagement/ZGRCKDrateList', '商场专柜日常扣点比率'),
          new MenuChild(16, '/mclon/saleManagement/ZGHDKDrateList', '商场专柜活动扣点比率'),
          new MenuChild(17, '/mclon/saleManagement/ZgcdadjustOrderList', '商场专柜扣点调整单'),
          new MenuChild(18, '/mclon/saleManagement/costingCoefficient', '旧品成本系数'),
          new MenuChild(19, '/mclon/saleManagement/bareStoneCoefficient', '旧品裸石石头系数'),
          new MenuChild(20, '/mclon/saleManagement/diamondCoefficient', '旧品钻石石头系数'),
          new MenuChild(21, '/mclon/saleManagement/commonAbstracts', '销售开单常用摘要说明'),
          new MenuChild(22, '/mclon/saleManagement/basicForColor', '成色对应基础信息'),
        ]),
        new MenuChild(2, '', '电商销售管理', [
          new MenuChild(1, '/mclon/saleManagement/saleDataImportList', '销售数据导入'),
          new MenuChild(2, '/mclon/saleManagement/dsreturnList', '电商退货退款'),
          new MenuChild(3, '/mclon/inventoryCenter/relistingList', '旧品无信息变更重新上柜'),

        ]),
        new MenuChild(3, '', '维修件管理', [
            new MenuChild(1, '/mclon/wrepairManagement/repairAllocationList', '维修件调拨单'),
            new MenuChild(2, '/mclon/wrepairManagement/repairAllocationrList', '维修件调拨单接收'),
            new MenuChild(3, '/mclon/wrepairManagement/repairPackingList', '维修件装箱单'),
            new MenuChild(4, '/mclon/wrepairManagement/repairHqhandoverList', '维修件总部交接单'),
            new MenuChild(5, '/mclon/wrepairManagement/wxcostEntryList', '维修费用录入单'),
            new MenuChild(6, '/mclon/wrepairManagement/wxcostAdjustList', '工厂维修项目调整单'),
            new MenuChild(7, '/mclon/wrepairManagement/wxflowSearchList', '维修件流转查询'),
            new MenuChild(8, '/mclon/wrepairManagement/WXMDsaleNumberList', '门店售后件数查询'),
            new MenuChild(9, '/mclon/wrepairManagement/wxstockSearchList', '维修件库存查询')
          ], 'anticon-tool'
        ),
        new MenuChild(4, '', '礼品卡管理', [
          new MenuChild(1, '/mclon/salesActivities/giftCardStorageList', '礼品卡入库单'),
          new MenuChild(2, '/mclon/salesActivities/giftCardReturnList', '礼品卡发放单/退回单'),
          new MenuChild(3, '/mclon/saleManagement/giftCard', '礼品卡库存查询'),
          new MenuChild(4, '/mclon/saleManagement/useDetailList', '礼品卡使用明细查询'),
          new MenuChild(5, '/mclon/saleManagement/circulationRecord', '礼品卡流转记录查询'),
        ]),
        new MenuChild(5, '', '营销活动管理', [
          new MenuChild(1, '/mclon/salesActivities/ReferenceDataList', '引用数据管理'),
          new MenuChild(2, '/mclon/salesActivities/activitiesList', '活动管理'),
          new MenuChild(3, '', '导入营销活动数据'),
          new MenuChild(4, '/mclon/salesActivities/activityTemplateList', '活动规则模板'),
        ]),
        new MenuChild(6, '', '销售管理报表', [
          new MenuChild(1, '/mclon/saleManagement/cashierSearch', '收银员/收银单查询'),
          new MenuChild(2, '/mclon/saleManagement/saleSearch', '销售单查询'),
          new MenuChild(3, '/mclon/saleManagement/returnSearch', '退货单查询'),
          new MenuChild(4, '/mclon/saleManagement/storeSearchList', '门店查询'),
          new MenuChild(5, '/mclon/saleManagement/shopSaleSearch', '门店销售查询'),
          new MenuChild(6, '/mclon/saleManagement/shopCashierSearch', '门店收银单查询'),
          new MenuChild(7, '/mclon/saleManagement/summaryRecord', '汇总记录查询'),
          new MenuChild(8, '/mclon/saleManagement/returnRecord', '退回记录查询'),
          new MenuChild(9, '/mclon/saleManagement/unpaidRecord', '未付款记录查询'),
          new MenuChild(10, '/mclon/saleManagement/discountRecord', '折扣记录查询'),
          new MenuChild(11, '/mclon/saleManagement/saleStatistic', '销售统计'),
          new MenuChild(12, '/mclon/saleManagement/changeLoss', '变更损耗查询'),
          new MenuChild(13, '/mclon/saleManagement/dailyKnot', '日结单查询'),
          new MenuChild(14, '/mclon/saleManagement/storeGroupSales', '门店人员班组销售查询'),
          new MenuChild(15, '/mclon/report/saleBMplanList', '销售月计划'),
          new MenuChild(16, '/mclon/report/saleDLMplanList', '销售大类月计划'),
          new MenuChild(17, '', '销售汇总查询'),
          new MenuChild(18, '', '销售明细查询（新）'),
          new MenuChild(19, '', '销售明细查询'),
          new MenuChild(20, '', '销售汇总查询'),
          new MenuChild(21, '', '商品部销售汇总查询表-（款式）'),
          new MenuChild(22, '', '商品部销售明细查询'),
          new MenuChild(23, '', '财务销售查询(截止昨天)'),
          new MenuChild(24, '', '销售退回查询'),
          new MenuChild(25, '', '销售折扣统计'),
        ]),

        // new MenuChild(9, '', '礼品卡查询', [
        //   new MenuChild(1, '/mclon/saleManagement/useDetailList', '礼品卡使用明细查询'),
        //   new MenuChild(2, '/mclon/saleManagement/circulationRecord', '礼品卡流转记录查询'),
        // ]),
        new MenuChild(7, '', '会员查询', [
          new MenuChild(1, '/mclon/saleManagement/memberData', '会员资料查询'),
          new MenuChild(2, '/mclon/saleManagement/memberInterest', '会员权益'),
          new MenuChild(8, '/mclon/saleManagement/cardCouponSearch', '卡券查询'),
        ]),
      ], 'anticon-folder'
    ),

    new Menu(11, '加盟管理', false, [
        new MenuChild(1, '', '基础数据', [
          new MenuChild(1, '/mclon/joinManagement/pieceCoefficient', '销售按件系数'),
          new MenuChild(2, '/mclon/joinManagement/returnRemnantList', '退货/退残按件系数'),
          new MenuChild(3, '/mclon/joinManagement/gramUnitPrice', '按克工费单价'),
          new MenuChild(4, '/mclon/joinManagement/tsfeeDiscount', '特殊工费折扣'),
          // new MenuChild(5, '/mclon/joinManagement/zsgoldTj', '退货折算成金原料订单条件'), // 2018/8/3 去除
          new MenuChild(6, '/mclon/joinManagement/priceOfGold', '金原料金价'),
          new MenuChild(7, '/mclon/joinManagement/priceGoldNum', '金原料金价系数'),
          // new MenuChild(8, '/mclon/joinManagement/styleOtherFee', '款式额外工费'), // 2018/8/3 去除
          new MenuChild(9, '/mclon/joinManagement/payType', '结算类型'),
          // new MenuChild(10, '/mclon/joinManagement/diamondSurface', '钻石一口价折扣基础表'), // 2018/8/3 去除
          new MenuChild(11, '/mclon/joinManagement/exchangeGoods', '加盟免费换货品类'),
          new MenuChild(12, '/mclon/joinManagement/exchangeGoodsNum', '加盟免费换货品类系数'),
          new MenuChild(13, '/mclon/joinManagement/exchangeDegree', '免费换货额度记录表'),
          new MenuChild(14, '/mclon/joinManagement/tsreturnNum', '加盟特殊退货系数'),
          new MenuChild(15, '/mclon/joinManagement/tsreturnList', '加盟特殊退货清单'),
          new MenuChild(17, '/mclon/joinManagement/franchiserIndex', '加盟商指标'),
          new MenuChild(18, '/mclon/joinManagement/returnTime', '退货大类批次时间'),
        ]),
        new MenuChild(2, '', '结算管理', [
          new MenuChild(1, '/mclon/joinManagement/saleOrderList', '销售结算单'),
          new MenuChild(2, '/mclon/joinManagement/rgoodsOrderList', '退货结算单'),
          new MenuChild(3, '/mclon/joinManagement/otherOrderList', '其他结算单'),
        ]),
        new MenuChild(3, '', '加盟商管理', [
          new MenuChild(1, '/mclon/joinManagement/receiptList', '收款单'),
          new MenuChild(2, '/mclon/joinManagement/refundList', '退款单'),
          new MenuChild(3, '/mclon/joinManagement/paddleList', '划款单'),
          new MenuChild(4, '/mclon/joinManagement/joinStoreFind', '加盟门店账户查询'),
          new MenuChild(5, '/mclon/joinManagement/joinStoreLedger', '加盟门店账户台账'),
          new MenuChild(6, '/mclon/joinManagement/joinCheck', '加盟商考核'),
          new MenuChild(7, '/mclon/joinManagement/joinGL', '加盟商管理'),
        ]),
        new MenuChild(4, '', '商品管理', [
          new MenuChild(1, '/mclon/joinManagement/joinPriceList', '加盟核价表'),
          new MenuChild(2, '/mclon/joinManagement/clearOutList', '清算出库单'),
          // new MenuChild(3, '/mclon/joinManagement/shopeChangeList', '加盟形态转换单'), // 2018/8/3 去除
        ]),
        new MenuChild(5, '', '维修管理', [
          new MenuChild(1, '/mclon/joinManagement/shfwOrderList', '售后服务单'),
          new MenuChild(2, '/mclon/joinManagement/wxzxorderList', '维修装箱单'),
          new MenuChild(3, '/mclon/joinManagement/wxfylrorderList', '维修费用录入单'),
          new MenuChild(4, '/mclon/joinManagement/wxjsorderList', '维修结算单'),
          new MenuChild(5, '/mclon/joinManagement/slpzrecordList', '维修件饰品流转记录'),
          new MenuChild(6, '/mclon/joinManagement/wxdborderList', '维修调拨单'),
          new MenuChild(7, '/mclon/joinManagement/wxdbdreceiveList', '维修调拨单接收'),
        ]),
        new MenuChild(6, '', '调拨单管理', [
          new MenuChild(16, '/mclon/joinManagement/franchiseePriceList', '加盟特价'), // 2018/7/16 从基础数据移到了调拨单管理
          new MenuChild(1, '/mclon/joinManagement/joinTransferList', '加盟调拨单'),
          new MenuChild(2, '/mclon/joinManagement/joinDbReceiveList', '加盟调拨单接收'),
          new MenuChild(3, '/mclon/joinManagement/joinDxtransferList', '加盟代销调拨单'),
          new MenuChild(4, '/mclon/joinManagement/joinDxReceiveList', '加盟代销调拨单接收'),
          // new MenuChild(5, '/mclon/joinManagement/saleTurnBuyList', '加盟代销转买断'),
          new MenuChild(6, '/mclon/joinManagement/joinReturnList', '加盟退货单'),
          new MenuChild(7, '/mclon/joinManagement/joinThReceiveList', '加盟退货单接收'),
          new MenuChild(8, '/mclon/joinManagement/joinRetreatList', '加盟退残单'),
          new MenuChild(9, '/mclon/joinManagement/joinTcReceiveList', '加盟退残单接收'),
          new MenuChild(10, '/mclon/joinManagement/joinLibraryList', '加盟移库单'),
          new MenuChild(11, '/mclon/joinManagement/joinGroupList', '加盟柜组调拨单'),
          new MenuChild(12, '/mclon/joinManagement/ornamentPackList', '加盟饰品装箱单'),
          new MenuChild(13, '/mclon/joinManagement/joinMfhhapplyList', '加盟免费换货申请单'),
          new MenuChild(14, '/mclon/joinManagement/joinTsreturnList', '加盟特殊退货单'),
          new MenuChild(15, '/mclon/joinManagement/joinTsthreceiveList', '加盟特殊退货单接收'),
        ]),
        new MenuChild(7, '', '加盟管理报表', [
          new MenuChild(1, '', '换货以旧换新明细表'),
          new MenuChild(2, '', '加盟可换货饰品明细表'),
          new MenuChild(3, '', '加盟销售结算单汇总表'),
          new MenuChild(4, '', '应收未收商品信息汇总表'),
          new MenuChild(5, '', '加盟销售净收入汇总'),
          new MenuChild(6, '', '加盟调拨汇总查询'),
          new MenuChild(7, '', '加盟调拨查询'),
          new MenuChild(8, '', '加盟销售结算明细报表'),
          new MenuChild(9, '', '加盟退货结算明细报表'),
          new MenuChild(10, '', '加盟形态转换报表'),
          new MenuChild(11, '', '加盟调拨查询'),
          new MenuChild(12, '', '免费换货额度查询报表'),
          new MenuChild(13, '', '加盟维修报表'),
          new MenuChild(14, '', '加盟店违约金查询表'),
        ]),
      ], 'anticon-team'
    ),
    new Menu(8, '供应商平台', false, [
        new MenuChild(1, '/mclon/supplierPlatform/supplierInformationList', '供应商信息'),
        new MenuChild(2, '/mclon/supplierPlatform/purchaseorderList', '采购单'),
        new MenuChild(3, '/mclon/supplierPlatform/returnList', '送货记录'),
        new MenuChild(4, '/mclon/supplierPlatform/returnRecordList', '代销退货记录'),
        new MenuChild(5, '/mclon/supplierPlatform/FactorynumberList', '工厂款号'),
        new MenuChild(6, '/mclon/supplierPlatform/standingBookList', '供应商台帐'),
        new MenuChild(7, '/mclon/supplierPlatform/InventoryqueryList', '库存查询'),
        new MenuChild(8, '/mclon/supplierPlatform/SalerecordsList', '销售记录'),
        new MenuChild(9, '/mclon/commodityPlan/supplierList', '供应商列表'),
        new MenuChild(10, '/mclon/commodityPlan/supplierContract', '供应商合同'),
        new MenuChild(11, '/mclon/configurationCenter/partsStonePrice', '供应商结算主材'),
        new MenuChild(12, '/mclon/configurationCenter/supplierMaterial', '供应商主材转换'),
      ], 'anticon-api'
    ),
    new Menu(18, '财务管理', false, [
        new MenuChild(1, '/mclon/financialMgt/paymentList', '付款申请单'),
        new MenuChild(2, '/mclon/financialMgt/advancePaymentList', '预付申请单'),
        // new MenuChild(3, '/mclon/financialMgt/RefundList', '退款单'),
        // new MenuChild(4, '/mclon/financialMgt/ReceiptList', '收票单'),
        new MenuChild(3, '/mclon/financialMgt/RawMaterialList', '原料台帐'),
        new MenuChild(4, '/mclon/financialMgt/supplierRawMaterialList', '供应商原料台帐'), // 2018/7/5 新增
        new MenuChild(5, '/mclon/financialMgt/fundAccountList', '资金台帐'), // 2018/7/5 新增
        new MenuChild(9, '/mclon/financialMgt/supplierfundAccountList', '供应商资金台帐'), // 2018/7/5 新增
        new MenuChild(9, '/mclon/financialMgt/materialAdjustment', '原料调整单'), // 2018/7/6 新增
        new MenuChild(9, '/mclon/financialMgt/moneyAdjustment', '资金调整单'), // 2018/7/6 新增
        new MenuChild(7, '/mclon/financialMgt/consignmentList', '代销结算单'),
        new MenuChild(8, '/mclon/financialMgt/pounddifferenceList', '磅差查询'),
        new MenuChild(8, '/mclon/financialMgt/checkout', '结账'),
      ], 'anticon-red-envelope'
    ),
    new Menu(1, '系统基础资料', false, [
        new MenuChild(1, '/mclon/configurationCenter/dataDictionary', '数据字典'),
        new MenuChild(10, '/mclon/configurationCenter/businessData', '业务数据字典'),
        new MenuChild(2, '/mclon/configurationCenter/documentCodingRules', '单据编码规则')
      ], 'anticon-laptop'
    ),
    new Menu(2, '组织中心', false, [
        new MenuChild(1, '/mclon/orgCenter/orgList', '组织列表'),
        new MenuChild(2, '/mclon/orgCenter/administrativeOrg', '行政组织'),
        new MenuChild(3, '/mclon/orgCenter/financialOrg', '财务组织'),
        new MenuChild(4, '', '计划类组织基础数据复制'),
        new MenuChild(5, '/mclon/orgCenter/postMgt', '岗位管理'),
        new MenuChild(6, '/mclon/orgCenter/basicPersonnel', '人员档案'),
        new MenuChild(7, '/mclon/orgCenter/personnelMg', '人员管理'),
        new MenuChild(8, '/mclon/orgCenter/moduleMgt', '模块管理'),
        new MenuChild(9, '/mclon/orgCenter/dataMgt', '数据集管理'),
        new MenuChild(10, '/mclon/orgCenter/roleMgt', '角色管理'),
        new MenuChild(20, '/mclon/inventoryCenter/WarehouseList', '仓库管理'),
      ], 'anticon-flag'
    ),
    new Menu(3, '商品资料', false, [
        new MenuChild(1, '', '商品资料基础配置', [
          new MenuChild(1, '/mclon/market/large/category', '饰品大类'),
          new MenuChild(2, '/mclon/market/small/category', '饰品小类'),
          new MenuChild(11, '/mclon/market/large/style', '款式大类'),
          new MenuChild(12, '/mclon/market/small/style', '款式小类'),
          new MenuChild(10, '/mclon/market/scope/analysis', '分析范围'),
          new MenuChild(4, '/mclon/market/material', '材质管理'),
          new MenuChild(3, '/mclon/market/material/color', '材质颜色'),
          new MenuChild(5, '/mclon/market/cycle/type', '周期类型'),
          new MenuChild(6, '/mclon/market/size/information', '尺寸管理'),
          new MenuChild(8, '/mclon/market/chromatic/list', '色级管理'),
          new MenuChild(7, '/mclon/market/neatness/list', '净度管理'),
          new MenuChild(9, '/mclon/market/cut/list', '切工管理'),
          new MenuChild(13, '/mclon/market/topic/list', '主题管理')
        ]),
        new MenuChild(2, '/mclon/market/detail/style', '明细款式管理'),
        new MenuChild(2, '', 'BOM管理'), // 2018/7/27 新增
        new MenuChild(3, '/mclon/market/material/management', '物料管理'),
        new MenuChild(4, '/mclon/market/bom/offer', '物料报价'),
        new MenuChild(5, '/mclon/market/style/offer', '款式工费报价'),
        new MenuChild(2, '', '款式工费查询'), // 2018/7/27 新增
        new MenuChild(5, '', '明细款式无BOM查询'), // 2018/7/25 新增
        new MenuChild(6, '', 'E3标准码管理', [
          new MenuChild(1, '', 'E3标准码基础表'),
          new MenuChild(2, '', 'E3款式标准码基础表'),
          new MenuChild(3, '', 'E3尺寸标准码基础表'),
          new MenuChild(4, '', '未生成商品标准码饰品报表'),
        ]),
      ], 'anticon-shop'
    ),
  ];


  constructor() {
  }

  getMenus() {
    return this.menus;
  }

  // tslint:disable-next-line:member-ordering
  checkOpenStatus(value: Menu) {
    for (const item of this.menus) {
      item.menuFirstChild.forEach(element => {
        element.isOpen = false;
      });
      if (item.title !== value.title) {
        item.isOpen = false;
      }
    }
  }
}
