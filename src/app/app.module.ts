import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
//A组件
import { IonModleAComponent} from './../components/ion-modle-a/ion-modle-a';
//B组件
import { IonModleBComponent} from './../components/ion-modle-b/ion-modle-b';
//C组件
import { IonModleCComponent} from './../components/ion-modle-c/ion-modle-c';
//D组件
import{ IonModleDComponent} from './../components/ion-modle-d/ion-modle-d';
//G组件
import { IonModleGComponent} from './../components/ion-modle-g/ion-modle-g';
//轮播页面
import { IndexAdvPage } from '../pages/index-adv/index-adv';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { CartPage} from '../pages/cart/cart';
import { UserPage} from '../pages/user/user';
//登录
import { LoginPageModule } from '../pages/login/login.module';
//注册
import { RegisterPageModule } from '../pages/register/register.module';
import { RegistersignPageModule } from '../pages/registersign/registersign.module';
import { RegisterpasswordPageModule } from '../pages/registerpassword/registerpassword.module';
//搜索页面
import { SearchPageModule } from '../pages/search/search.module';


//商品列表
import { ProductlistPageModule } from '../pages/productlist/productlist.module';

//商品详情
import { PcontentPageModule } from '../pages/pcontent/pcontent.module';

//账户管理

import { PersonalPageModule } from '../pages/personal/personal.module';

//选择支付方式
import { PaymentPageModule } from '../pages/payment/payment.module';
//设置页面
import { SettingPageModule } from '../pages/setting/setting.module';

//我的粉丝

import { FansPageModule } from '../pages/fans/fans.module';

import { MywalletPageModule } from '../pages/mywallet/mywallet.module';

//粉丝详情
import { FandetailPageModule } from '../pages/fandetail/fandetail.module';

//全部订单
import { OrdersPageModule} from '../pages/orders/orders.module';

import { OrderlistPageModule} from '../pages/orderlist/orderlist.module';

import { RechargePageModule } from '../pages/recharge/recharge.module';


import { VippresentPageModule } from '../pages/vippresent/vippresent.module';

import { VippresentdetailPageModule } from '../pages/vippresentdetail/vippresentdetail.module';
import { SetpaypasswordPageModule} from '../pages/setpaypassword/setpaypassword.module';
import { UpdatepasswordPageModule} from '../pages/updatepassword/updatepassword.module';
import { WithdrawPageModule} from '../pages/withdraw/withdraw.module';
import { WithdrawaccountPageModule } from '../pages/withdrawaccount/withdrawaccount.module';
import { AddaliacountPageModule } from '../pages/addaliacount/addaliacount.module';
import { AddbankacountPageModule } from '../pages/addbankacount/addbankacount.module';
import { MoneyrecordPageModule } from '../pages/moneyrecord/moneyrecord.module';
import { UpdaterankPageModule } from '../pages/updaterank/updaterank.module';
import { AddressPageModule } from '../pages/address/address.module';
import { OperateaddressPageModule } from '../pages/operateaddress/operateaddress.module';

import { TabsPage } from '../pages/tabs/tabs';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';

import { StorageProvider } from '../providers/storage/storage';
import { ThemeableBrowser} from '@ionic-native/themeable-browser';
import { AlertProvider } from '../providers/alert/alert';
import { ClearloginProvider } from '../providers/clearlogin/clearlogin';
import { ToastProvider } from '../providers/toast/toast';
import { RloginprocessProvider } from '../providers/rloginprocess/rloginprocess';
/**商品详情 */
import { ProductDetailPageModule } from "../pages/product-detail/product-detail.module";
import { PaysuccessPageModule } from "../pages/paysuccess/paysuccess.module";
import { ElectransferPageModule } from "../pages/electransfer/electransfer.module";
import { CallcenterPageModule } from "../pages/callcenter/callcenter.module";
/**分享 */
import { ShareComponent } from '../components/share/share';
import { AppshareProvider } from '../providers/appshare/appshare';
//组件
import { CarModalComponent } from '../components/car-modal/car-modal'; 
import { ConfirmOrderPageModule } from '../pages/confirm-order/confirm-order.module';
import { WechatProvider } from '../providers/wechat/wechat';
import { WeblinkProvider } from '../providers/weblink/weblink';
import { VerifypasswordProvider } from '../providers/verifypassword/verifypassword';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    IndexAdvPage,
    IonModleAComponent,
    IonModleBComponent,
    IonModleCComponent,
    IonModleDComponent,
    IonModleGComponent,
    CarModalComponent,
    ShareComponent,
    HomePage,
    CategoryPage,
    CartPage,
    UserPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    ProductDetailPageModule,
 
    LoginPageModule,
    RegisterPageModule,
    RegistersignPageModule,
    RegisterpasswordPageModule,
    SearchPageModule,
    ProductlistPageModule,
    PcontentPageModule,
    PersonalPageModule,
    PaymentPageModule,
    SettingPageModule,
    FansPageModule,
    MywalletPageModule,
    FandetailPageModule,
    OrdersPageModule,
    RechargePageModule,
    VippresentPageModule,
    VippresentdetailPageModule,
    SetpaypasswordPageModule,
    UpdatepasswordPageModule,
    WithdrawPageModule,
    WithdrawaccountPageModule,
    AddaliacountPageModule,
    AddbankacountPageModule,
    OrderlistPageModule,
    ConfirmOrderPageModule,
    PaysuccessPageModule,
    MoneyrecordPageModule,
    ElectransferPageModule,
    UpdaterankPageModule,
    CallcenterPageModule,
    AddressPageModule,
    OperateaddressPageModule,
    IonicModule.forRoot(MyApp,{
      mode:'ios',
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '', /*配置返回按钮*/
      iconMode: 'ios'
    })   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    IndexAdvPage,
    IonModleAComponent,
    IonModleBComponent,
    IonModleCComponent,
    IonModleDComponent,
    IonModleGComponent,
    CarModalComponent,
    ShareComponent,
    HomePage,
    CategoryPage,
    CartPage,
    UserPage

  ],
  providers: [  /*引入了自定义的服务*/
    // StatusBar,
    // SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServicesProvider,
    StorageProvider,
    ThemeableBrowser,
    AlertProvider,
    ClearloginProvider,
    ToastProvider,
    RloginprocessProvider,
    AppshareProvider,
    WechatProvider,
    WeblinkProvider,
    VerifypasswordProvider
  ]
})
export class AppModule {}
