"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 3438);
/* harmony import */ var _components_search_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/header-search/header-search.component */ 3588);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ 2769);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);






class AppComponent {
    constructor() {
        this.title = 'angular-ecommerce';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 0, consts: [[1, "d-flex", "flex-column", "p-0", "m-0"], [1, "row", "justify-content-center", "mx-0", "px-0", "mx-0", "bg-secondary", "mb-3"], [1, "col-lg-7", "px-0", "mx-0", "justify-content-start"], [1, "row", "px-0", "mx-0"], [1, "col-lg-6", "d-none", "d-lg-block", "justify-content-start", "px-0", "mx-0"], [1, "align-items-center"], ["href", "", 1, "text-dark", "small"], [1, "text-muted", "px-2"], [1, "col-lg-6", "d-flex", "justify-content-end", "px-0", "mx-0"], [1, "d-inline-flex"], ["href", "", 1, "text-dark", "btn", "btn-border", "pr-0"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], ["href", "", 1, "text-dark", "btn", "btn-border"], [1, "fab", "fa-youtube"], [1, "row", "justify-content-center", "mb-3", "px-0", "mx-0", "pb-3"], [1, "col-lg-7", "px-0", "mw-100", "justify-content-start"], [1, "col-lg-3", "d-none", "d-lg-block"], ["routerLink", "/home", 1, "text-decoration-none"], [1, "m-0", "font-weight-semi-bold"], [1, "text-primary", "font-weight-bold", "border"], [1, "col", "col-md-5", "col-6", "justify-content-start"], [1, "col-lg-4", "col-6", "text-right"], ["href", "", 1, "btn", "border"], [1, "fas", "fa-heart", "text-primary"], [1, "badge"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17)(32, "div", 18)(33, "div", 3)(34, "div", 19)(35, "a", 20)(36, "h3", 21)(37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "app-header-search", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 24)(44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "app-cart-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "app-category-list")(50, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__.CategoryListComponent, _components_search_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_1__.HeaderSearchComponent, _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_2__.CartStatusComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 4646);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 3438);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_search_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/header-search/header-search.component */ 3588);
/* harmony import */ var _components_search_body_search_body_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/body-search/body-search.component */ 9552);
/* harmony import */ var _components_product_list_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-list/pagination/pagination.component */ 526);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ 2769);
/* harmony import */ var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cart-details/cart-details.component */ 1201);
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/checkout/checkout.component */ 8149);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _others_model_item_added_to_cart_model_item_added_to_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./others/model-item-added-to-cart/model-item-added-to-cart.component */ 7158);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ 2612);
/* harmony import */ var _others_modal_order_tracking_number_modal_order_tracking_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./others/modal-order-tracking-number/modal-order-tracking-number.component */ 995);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _others_modal_loading_modal_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./others/modal-loading/modal-loading.component */ 3544);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _interceptors_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/auth-interceptor.interceptor */ 1206);
/* harmony import */ var _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login-callback/login-callback.component */ 5174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);






















// Import the module from the SDK









const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__.CheckoutComponent },
    { path: 'cart-details', component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_8__.CartDetailsComponent },
    { path: 'search/:keyword', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent },
    { path: 'callback', component: _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_17__.LoginCallbackComponent },
    { path: 'category/:id', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent },
    { path: 'category', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent },
    { path: 'products', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/products', pathMatch: 'full' },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS, useClass: _interceptors_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_16__.AuthInterceptorInterceptor, multi: true }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_21__.OAuthModule.forRoot(),
        _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_22__.AuthModule.forRoot({
            domain: 'dev-iwm1hr4ywzqlodpw.us.auth0.com',
            clientId: 'EEhKnXxSMBYDLCjwlfOl33wRDxSGwecD',
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        }),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent,
        _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent,
        _components_search_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__.HeaderSearchComponent,
        _components_search_body_search_body_search_component__WEBPACK_IMPORTED_MODULE_5__.BodySearchComponent,
        _components_product_list_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent,
        _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_7__.CartStatusComponent,
        _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_8__.CartDetailsComponent,
        _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__.CheckoutComponent,
        _others_model_item_added_to_cart_model_item_added_to_cart_component__WEBPACK_IMPORTED_MODULE_10__.ModelItemAddedToCartComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent,
        _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__.ProductDetailComponent,
        _others_modal_order_tracking_number_modal_order_tracking_number_component__WEBPACK_IMPORTED_MODULE_13__.ModalOrderTrackingNumberComponent,
        _others_modal_loading_modal_loading_component__WEBPACK_IMPORTED_MODULE_14__.ModalLoadingComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__.LoginComponent,
        _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_17__.LoginCallbackComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_21__.OAuthModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_22__.AuthModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 593:
/*!***********************************!*\
  !*** ./src/app/common/address.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ Address)
/* harmony export */ });
class Address {
    constructor(street, city, state, zipCode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}


/***/ }),

/***/ 3162:
/*!*************************************!*\
  !*** ./src/app/common/cart-item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
    constructor(product) {
        this.id = product.sku;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.quantity = 1;
    }
}


/***/ }),

/***/ 1385:
/*!************************************!*\
  !*** ./src/app/common/customer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => (/* binding */ Customer)
/* harmony export */ });
class Customer {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}


/***/ }),

/***/ 9197:
/*!**************************************!*\
  !*** ./src/app/common/order-item.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
    constructor(cartItem) {
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
    }
}


/***/ }),

/***/ 2759:
/*!*********************************!*\
  !*** ./src/app/common/order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
    constructor(totalQuantity, totalPrice) {
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
    }
}


/***/ }),

/***/ 9658:
/*!************************************!*\
  !*** ./src/app/common/purchase.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Purchase": () => (/* binding */ Purchase)
/* harmony export */ });
class Purchase {
    constructor(customer, shippingAddress, billingAddress, order, orderItems) {
        this.customer = customer;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
        this.order = order;
        this.orderItems = orderItems;
    }
}


/***/ }),

/***/ 1201:
/*!*******************************************************************!*\
  !*** ./src/app/components/cart-details/cart-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDetailsComponent": () => (/* binding */ CartDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function CartDetailsComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 15)(7, "div", 37)(8, "div", 38)(9, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_tr_32_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.decrementQuantity(cartItem_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 38)(13, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_tr_32_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.incrementQuantity(cartItem_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 15)(18, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_tr_32_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.removeFromCart(cartItem_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", cartItem_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cartItem_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cartItem_r1.unitPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cartItem_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cartItem_r1.unitPrice * cartItem_r1.quantity);
} }
class CartDetailsComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
        this.subTotalPrice = 0;
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.shipping = 10;
    }
    ngOnInit() {
        this.listCartDetails();
    }
    listCartDetails() {
        this.cartService.totalPrice.subscribe(data => { this.subTotalPrice = data; this.totalPrice = data + this.shipping; });
        this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
        this.cartItems = this.cartService.cartItems;
        this.cartService.computeCartTotals();
    }
    incrementQuantity(cartItem) {
        this.cartService.addToCart(cartItem);
    }
    decrementQuantity(cartItem) {
        this.cartService.decrementQuantity(cartItem);
    }
    removeFromCart(cartItem) {
        this.cartService.removeFromCart(cartItem);
    }
}
CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) { return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartDetailsComponent, selectors: [["app-cart-details"]], decls: 65, vars: 4, consts: [[1, "container-fluid", "bg-secondary", "mb-5"], [1, "px-xl-5"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", 2, "min-height", "300px"], [1, "font-weight-semi-bold", "text-uppercase", "mb-3"], [1, "d-inline-flex"], [1, "m-0"], ["href", ""], [1, "m-0", "px-2"], [1, "container", "pt-5", "p-5", 2, "min-width", "67%"], [1, "row", "px-xl-5"], [1, "col-12"], [1, "row"], [1, "col-12", "table-responsive"], [1, "table", "table-bordered", "text-center", "mb-0"], [1, "bg-secondary", "text-dark"], [1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-lg-6", "col-12", "col-md-9"], ["action", "", 1, "mb-5"], [1, "input-group"], ["type", "text", "placeholder", "Coupon Code", 1, "form-control", "p-4"], [1, "input-group-append"], [1, "btn", "btn-primary"], [1, "col-lg-6"], [1, "card", "border-secondary", "mb-5"], [1, "card-header", "bg-secondary", "border-0"], [1, "font-weight-semi-bold", "m-0"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-3", "pt-1"], [1, "font-weight-medium"], [1, "d-flex", "justify-content-between"], [1, "card-footer", "border-secondary", "bg-transparent"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "font-weight-bold"], ["routerLink", "/checkout", 1, "btn", "btn-block", "btn-primary", "my-3", "py-3"], ["alt", "", 2, "width", "50px", 3, "src"], [1, "input-group", "quantity", "mx-auto", 2, "width", "100px"], [1, "input-group-btn"], [1, "btn", "btn-sm", "btn-primary", "btn-minus", 3, "click"], [1, "fa", "fa-minus"], ["type", "text", 1, "form-control", "form-control-sm", "bg-secondary", "text-center", 3, "value"], [1, "btn", "btn-sm", "btn-primary", "btn-plus", 3, "click"], [1, "fa", "fa-plus"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa", "fa-times"]], template: function CartDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cart Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "p", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "table", 13)(19, "thead", 14)(20, "tr")(21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CartDetailsComponent_tr_32_Template, 20, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17)(34, "div", 18)(35, "form", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22)(39, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Apply Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "div", 26)(44, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cart Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28)(47, "div", 29)(48, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 31)(53, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 32)(58, "div", 33)(59, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Proceed To Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.subTotalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.shipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalPrice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2769:
/*!*****************************************************************!*\
  !*** ./src/app/components/cart-status/cart-status.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStatusComponent": () => (/* binding */ CartStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class CartStatusComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        this.updateCartStatus();
    }
    updateCartStatus() {
        this.cartService.totalPrice.subscribe(data => { this.totalPrice = data; });
        this.cartService.totalQuantity.subscribe(data => { this.totalQuantity = data; });
    }
}
CartStatusComponent.ɵfac = function CartStatusComponent_Factory(t) { return new (t || CartStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartStatusComponent, selectors: [["app-cart-status"]], decls: 7, vars: 5, consts: [["routerLink", "/cart-details", 1, "btn", "border"], [1, "fas", "fa-shopping-cart", "text-primary"], [1, "badge"]], template: function CartStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, ctx.totalPrice, "EUR"));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3438:
/*!*********************************************************************!*\
  !*** ./src/app/components/category-list/category-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function () { return { exact: true }; };
function CategoryListComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tempCategoryList_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/category/", tempCategoryList_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tempCategoryList_r1.name);
} }
class CategoryListComponent {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
        this.productCategories = [];
    }
    ngOnInit() {
        this.listProductCategories();
    }
    listProductCategories() {
        this.productCategoryService.getProductCategoryList().subscribe(data => {
            this.productCategories = data;
        });
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
CategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], decls: 26, vars: 3, consts: [[1, "d-flex", "flex-column", 2, "background", "#efefef"], [1, "row", "justify-content-center", "mx-0"], [1, "col-lg-7", "mw-100", "justify-content-start", 2, "background", "#fff"], [1, "navbar", "navbar-expand-lg", "navbar-light", "py-3", "py-lg-0", "px-0"], ["href", "", 1, "text-decoration-none", "d-block", "d-lg-none"], [1, "m-0", "font-weight-semi-bold"], [1, "text-primary", "font-weight-bold", "border"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "justify-content-start"], [1, "navbar-nav", "py-0"], ["routerLink", "/home", "routerLinkActive", "active-link", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["class", "nav-item nav-link", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "nav-item", "dropdown"], ["href", "#", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "rounded-0", "m-0"], ["href", "cart.html", 1, "dropdown-item"], ["href", "checkout.html", 1, "dropdown-item"], ["routerLinkActive", "active-link", 1, "nav-item", "nav-link", 3, "routerLink", "routerLinkActiveOptions"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4)(5, "h3", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoryListComponent_a_17_Template, 2, 4, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Meat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Grains");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Diary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productCategories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8149:
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/address */ 593);
/* harmony import */ var _common_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/customer */ 1385);
/* harmony import */ var _common_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/order */ 2759);
/* harmony import */ var _common_order_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/order-item */ 9197);
/* harmony import */ var _common_purchase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/purchase */ 9658);
/* harmony import */ var _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/custom-form-validators */ 533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/checkout.service */ 8106);
/* harmony import */ var _services_modal_dialogs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/modal-dialogs.service */ 9988);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);















function CheckoutComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " FirstName is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " FirstName is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_25_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_25_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.billingFirstName.errors && (ctx_r0.billingFirstName.hasError("required") || ctx_r0.billingFirstName.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.billingFirstName.errors && ctx_r0.billingFirstName.hasError("minlength"));
} }
function CheckoutComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Last Name is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Last Name is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_30_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_30_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.billingLastName.errors && (ctx_r1.billingLastName.hasError("required") || ctx_r1.billingLastName.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.billingLastName.errors && ctx_r1.billingLastName.hasError("minlength"));
} }
function CheckoutComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email must be valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_35_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_35_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.billingEmail.errors && (ctx_r2.billingEmail.hasError("required") || ctx_r2.billingEmail.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.billingEmail.errors && ctx_r2.billingEmail.hasError("pattern"));
} }
function CheckoutComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_40_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_40_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.billingMobile.errors && (ctx_r3.billingMobile.hasError("required") || ctx_r3.billingMobile.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.billingMobile.errors && ctx_r3.billingMobile.hasError("minlength"));
} }
function CheckoutComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_45_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_45_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_45_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.billingAddressLine1.errors && (ctx_r4.billingAddressLine1.hasError("required") || ctx_r4.billingAddressLine1.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.billingAddressLine1.errors && ctx_r4.billingAddressLine1.hasError("minlength"));
} }
function CheckoutComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 2 is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_50_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 2 is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_50_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_50_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.billingAddressLine2.errors && (ctx_r5.billingAddressLine2.hasError("required") || ctx_r5.billingAddressLine2.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.billingAddressLine2.errors && ctx_r5.billingAddressLine2.hasError("minlength"));
} }
function CheckoutComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Country is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_63_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Country is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_63_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_63_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.billingCountry.errors && (ctx_r6.billingCountry.hasError("required") || ctx_r6.billingCountry.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.billingCountry.errors && ctx_r6.billingCountry.hasError("minlength"));
} }
function CheckoutComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " City is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_68_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " City is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_68_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_68_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.billingCity.errors && (ctx_r7.billingCity.hasError("required") || ctx_r7.billingCity.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.billingCity.errors && ctx_r7.billingCity.hasError("minlength"));
} }
function CheckoutComponent_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " State is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_73_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " State is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_73_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_73_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.billingState.errors && (ctx_r8.billingState.hasError("required") || ctx_r8.billingState.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.billingState.errors && ctx_r8.billingState.hasError("minlength"));
} }
function CheckoutComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_78_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_78_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_78_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.billingZip.errors && (ctx_r9.billingZip.hasError("required") || ctx_r9.billingZip.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.billingZip.errors && ctx_r9.billingZip.hasError("minlength"));
} }
function CheckoutComponent_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " FirstName is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_99_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " FirstName is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_99_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_99_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.shippingFirstName.errors && (ctx_r11.shippingFirstName.hasError("required") || ctx_r11.shippingFirstName.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.shippingFirstName.errors && ctx_r11.shippingFirstName.hasError("minlength"));
} }
function CheckoutComponent_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Last Name is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_104_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Last Name is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_104_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_104_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.shippingLastName.errors && (ctx_r12.shippingLastName.hasError("required") || ctx_r12.shippingLastName.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.shippingLastName.errors && ctx_r12.shippingLastName.hasError("minlength"));
} }
function CheckoutComponent_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_109_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email must be valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_109_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_109_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r13.shippingEmail.errors && (ctx_r13.shippingEmail.hasError("required") || ctx_r13.shippingEmail.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r13.shippingEmail.errors && ctx_r13.shippingEmail.hasError("pattern"));
} }
function CheckoutComponent_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_114_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mobile is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_114_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_114_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.shippingMobile.errors && (ctx_r14.shippingMobile.hasError("required") || ctx_r14.shippingMobile.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.shippingMobile.errors && ctx_r14.shippingMobile.hasError("minlength"));
} }
function CheckoutComponent_div_119_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 1 is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_119_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 1 is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_119_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_119_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.shippingAddressLine1.errors && (ctx_r15.shippingAddressLine1.hasError("required") || ctx_r15.shippingAddressLine1.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.shippingAddressLine1.errors && ctx_r15.shippingAddressLine1.hasError("minlength"));
} }
function CheckoutComponent_div_124_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 2 is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_124_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 2 is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_124_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_124_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.shippingAddressLine2.errors && (ctx_r16.shippingAddressLine2.hasError("required") || ctx_r16.shippingAddressLine2.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.shippingAddressLine2.errors && ctx_r16.shippingAddressLine2.hasError("minlength"));
} }
function CheckoutComponent_div_137_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 2 is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_137_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Address Line 2 is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_137_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_137_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.shippingAddressLine2.errors && (ctx_r17.shippingAddressLine2.hasError("required") || ctx_r17.shippingAddressLine2.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.shippingAddressLine2.errors && ctx_r17.shippingAddressLine2.hasError("minlength"));
} }
function CheckoutComponent_div_142_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " City is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_142_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " City is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_142_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_142_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r18.shippingCity.errors && (ctx_r18.shippingCity.hasError("required") || ctx_r18.shippingCity.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r18.shippingCity.errors && ctx_r18.shippingCity.hasError("minlength"));
} }
function CheckoutComponent_div_147_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " State is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_147_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " State is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_147_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_147_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r19.shippingState.errors && (ctx_r19.shippingState.hasError("required") || ctx_r19.shippingState.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r19.shippingState.errors && ctx_r19.shippingState.hasError("minlength"));
} }
function CheckoutComponent_div_152_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Zip is requied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_152_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Zip is must be at least 2 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CheckoutComponent_div_152_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CheckoutComponent_div_152_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r20.shippingZip.errors && (ctx_r20.shippingZip.hasError("required") || ctx_r20.shippingZip.hasError("notOnlyWhiteSpace")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r20.shippingZip.errors && ctx_r20.shippingZip.hasError("minlength"));
} }
function CheckoutComponent_div_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 48)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const cartItem_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](cartItem_r62.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 2, cartItem_r62.unitPrice, "EUR"));
} }
class CheckoutComponent {
    constructor(cartService, formBuilder, checkoutService, dialogService, dialog, router) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.checkoutService = checkoutService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.router = router;
        this.cartItems = [];
        this.subTotalPrice = 0;
        this.totalPrice = 0;
        this.shipping = 10;
        this.totalQuantity = 0;
        this.checkoutFormGroup = this.formBuilder.nonNullable.group({
            billingAddress: this.formBuilder.nonNullable.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                addressLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                addressLine2: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace])
            }),
            shippingAddress: this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                addressLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                addressLine2: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace]),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _validators_custom_form_validators__WEBPACK_IMPORTED_MODULE_5__.CustomFormValidators.notOnlyWhiteSpace])
            }),
            customCheckBoxes: this.formBuilder.group({
                createAccountCheckbox: [''],
                shippingAddressCheckbox: ['']
            }),
        });
    }
    ngOnInit() {
        this.listCartDetails();
    }
    onSubmit() {
        if (this.checkoutFormGroup != undefined) {
            let billingAdress = this.checkoutFormGroup.get('billingAddress');
            let shippingAddress = this.checkoutFormGroup.get('shippingAddress');
            let customCheckBoxes = this.checkoutFormGroup.get('customCheckBoxes');
            if (customCheckBoxes.value['shippingAddressCheckbox'] && this.checkoutFormGroup.invalid) {
                this.checkoutFormGroup.markAllAsTouched();
                return;
            }
            else if (!customCheckBoxes.value['shippingAddressCheckbox'] && billingAdress.invalid) {
                billingAdress.markAllAsTouched();
                return;
            }
            let customer = new _common_customer__WEBPACK_IMPORTED_MODULE_1__.Customer(billingAdress.value.firstName, billingAdress.value.lastName, billingAdress.value.email);
            let shAddress = new _common_address__WEBPACK_IMPORTED_MODULE_0__.Address(shippingAddress.value.street, shippingAddress.value.city, shippingAddress.value.state, shippingAddress.value.zipCode);
            let bilAddress = new _common_address__WEBPACK_IMPORTED_MODULE_0__.Address(billingAdress.value.street, billingAdress.value.city, billingAdress.value.state, billingAdress.value.zipCode);
            let order = new _common_order__WEBPACK_IMPORTED_MODULE_2__.Order(this.totalQuantity, this.totalPrice);
            let purchase = new _common_purchase__WEBPACK_IMPORTED_MODULE_4__.Purchase(customer, shAddress, bilAddress, order, this.cartItems.map(c => new _common_order_item__WEBPACK_IMPORTED_MODULE_3__.OrderItem(c)));
            this.dialogService.openLoadingDialog('0ms', '5ms');
            this.checkoutService.purchase(purchase).subscribe(data => {
                this.dialogService.closeLoadingDialog();
                this.dialogService.openOrderTrackingNumberDialog('0ms', '5ms', data.orderTrackingNumber);
                this.dialogService.getTrackingNumberDialogCloseHandler().subscribe(() => {
                    this.cartService.empty();
                    this.router.navigate(["/home"]);
                });
            });
        }
    }
    listCartDetails() {
        this.cartService.totalPrice.subscribe(data => { this.subTotalPrice = data; this.totalPrice = data + this.shipping; });
        this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
        this.cartItems = this.cartService.cartItems;
        this.cartService.computeCartTotals();
    }
    //Billing first Name
    get billingFirstName() { return this.checkoutFormGroup.get('billingAddress.firstName'); }
    get billingLastName() { return this.checkoutFormGroup.get('billingAddress.lastName'); }
    get billingEmail() { return this.checkoutFormGroup.get('billingAddress.email'); }
    get billingZip() { return this.checkoutFormGroup.get('billingAddress.zip'); }
    get billingCity() { return this.checkoutFormGroup.get('billingAddress.city'); }
    get billingCountry() { return this.checkoutFormGroup.get('billingAddress.country'); }
    get billingState() { return this.checkoutFormGroup.get('billingAddress.state'); }
    get billingMobile() { return this.checkoutFormGroup.get('billingAddress.mobile'); }
    get billingAddressLine1() { return this.checkoutFormGroup.get('billingAddress.addressLine1'); }
    get billingAddressLine2() { return this.checkoutFormGroup.get('billingAddress.addressLine2'); }
    //Shipping first Name
    get shippingFirstName() { return this.checkoutFormGroup.get('shippingAddress.firstName'); }
    get shippingLastName() { return this.checkoutFormGroup.get('shippingAddress.lastName'); }
    get shippingEmail() { return this.checkoutFormGroup.get('shippingAddress.email'); }
    get shippingCountry() { return this.checkoutFormGroup.get('shippingAddress.country'); }
    get shippingZip() { return this.checkoutFormGroup.get('shippingAddress.zip'); }
    get shippingCity() { return this.checkoutFormGroup.get('shippingAddress.city'); }
    get shippingState() { return this.checkoutFormGroup.get('shippingAddress.state'); }
    get shippingMobile() { return this.checkoutFormGroup.get('shippingAddress.mobile'); }
    get shippingAddressLine1() { return this.checkoutFormGroup.get('shippingAddress.addressLine1'); }
    get shippingAddressLine2() { return this.checkoutFormGroup.get('shippingAddress.addressLine2'); }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_checkout_service__WEBPACK_IMPORTED_MODULE_7__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modal_dialogs_service__WEBPACK_IMPORTED_MODULE_8__.ModalDialogsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
CheckoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], hostAttrs: [1, "row"], decls: 207, vars: 34, consts: [[1, "container-fluid", "bg-secondary", "mb-5"], [1, "px-xl-5"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", 2, "min-height", "300px"], [1, "font-weight-semi-bold", "text-uppercase", "mb-3"], [1, "d-inline-flex"], [1, "m-0"], ["href", ""], [1, "m-0", "px-2"], [1, "container", "pt-5", "p-5", 2, "min-width", "67%"], [1, "row", "px-xl-5"], [1, "row", "p-0", "m-0", 3, "formGroup"], [1, "col-lg-7"], ["formGroupName", "billingAddress", 1, "mb-4"], [1, "font-weight-semi-bold", "mb-4"], [1, "row"], [1, "col-md-6", "form-group"], ["formControlName", "firstName", "type", "text", "placeholder", "John", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "lastName", "type", "text", "placeholder", "Doe", 1, "form-control"], ["formControlName", "email", "type", "text", "placeholder", "example@email.com", 1, "form-control"], ["formControlName", "mobile", "type", "text", "placeholder", "+123 456 789", 1, "form-control"], ["formControlName", "addressLine1", "type", "text", "placeholder", "123 Street", 1, "form-control"], ["formControlName", "addressLine2", "type", "text", "placeholder", "123 Street", 1, "form-control"], ["formControlName", "country", 1, "custom-select"], ["selected", ""], ["formControlName", "city", "type", "text", "placeholder", "New York", 1, "form-control"], ["formControlName", "state", "type", "text", "placeholder", "New York", 1, "form-control"], ["formControlName", "zip", "type", "text", "placeholder", "123", 1, "form-control"], ["formGroupName", "customCheckBoxes"], [1, "col-md-12", "form-group"], [1, "custom-control", "custom-checkbox"], ["formControlName", "createAccountCheckbox", "type", "checkbox", "id", "newaccount", 1, "custom-control-input"], ["for", "newaccount", 1, "custom-control-label"], ["formControlName", "shippingAddressCheckbox", "type", "checkbox", "id", "shipto", 1, "custom-control-input", 3, "change"], ["checkBoxShippingAddress", ""], ["for", "shipto", "data-toggle", "collapse", "data-target", "#shipping-address", 1, "custom-control-label"], ["formGroupName", "shippingAddress", "id", "shipping-address", 1, "collapse", "mb-4"], [1, "col-lg-5", "p-0", "m-0"], [1, "row-6"], [1, "card", "border-secondary"], [1, "card-header", "bg-secondary", "border-0"], [1, "font-weight-semi-bold", "m-0"], [1, "card-body"], [1, "font-weight-medium", "mb-3"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "mt-0"], [1, "d-flex", "justify-content-between", "mb-3", "pt-1"], [1, "font-weight-medium"], [1, "d-flex", "justify-content-between"], [1, "card-footer", "border-secondary", "bg-transparent"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "font-weight-bold"], [1, "card", "border-secondary", "mb-5"], [1, "form-group"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "payment", "id", "paypal", 1, "custom-control-input"], ["for", "paypal", 1, "custom-control-label"], ["type", "radio", "name", "payment", "id", "directcheck", 1, "custom-control-input"], ["for", "directcheck", 1, "custom-control-label"], [1, ""], ["type", "radio", "name", "payment", "id", "banktransfer", 1, "custom-control-input"], ["for", "banktransfer", 1, "custom-control-label"], [1, "btn", "btn-lg", "btn-block", "btn-primary", "font-weight-bold", "my-3", "py-3", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "p", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "form", 10)(16, "div", 11)(17, "div", 12)(18, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, CheckoutComponent_div_25_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 15)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, CheckoutComponent_div_30_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 15)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, CheckoutComponent_div_35_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 15)(37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, CheckoutComponent_div_40_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 15)(42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, CheckoutComponent_div_45_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 15)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, CheckoutComponent_div_50_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 15)(52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "select", 23)(55, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Afghanistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Albania");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Algeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, CheckoutComponent_div_63_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 15)(65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](67, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, CheckoutComponent_div_68_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 15)(70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, CheckoutComponent_div_73_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 15)(75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "ZIP Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, CheckoutComponent_div_78_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 28)(80, "div", 29)(81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](82, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 29)(86, "div", 30)(87, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CheckoutComponent_Template_input_change_87_listener() { return true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "Ship to different address");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 36)(92, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 14)(95, "div", 15)(96, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](98, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, CheckoutComponent_div_99_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 15)(101, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](103, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](104, CheckoutComponent_div_104_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 15)(106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](108, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](109, CheckoutComponent_div_109_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 15)(111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](113, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, CheckoutComponent_div_114_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 15)(116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](118, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](119, CheckoutComponent_div_119_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "div", 15)(121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](123, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, CheckoutComponent_div_124_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "div", 15)(126, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "select", 23)(129, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Afghanistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134, "Albania");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, "Algeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, CheckoutComponent_div_137_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "div", 15)(139, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](141, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](142, CheckoutComponent_div_142_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 15)(144, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](146, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](147, CheckoutComponent_div_147_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "div", 15)(149, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "ZIP Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](151, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](152, CheckoutComponent_div_152_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "div", 37)(154, "div", 38)(155, "div", 39)(156, "div", 40)(157, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "div", 42)(160, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](161, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](162, CheckoutComponent_div_162_Template, 6, 5, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](163, "hr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "div", 46)(165, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](166, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](167, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](169, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 48)(171, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](172, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](175, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "div", 49)(177, "div", 50)(178, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](179, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](182, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "div", 38)(184, "div", 52)(185, "div", 40)(186, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](187, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "div", 42)(189, "div", 53)(190, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](191, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "Paypal");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "div", 53)(195, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](196, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](198, "Direct Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "div", 59)(200, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](201, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203, "Bank Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "div", 49)(205, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_205_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingFirstName.invalid && (ctx.billingFirstName.dirty || ctx.billingFirstName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingLastName.invalid && (ctx.billingLastName.dirty || ctx.billingLastName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingEmail.invalid && (ctx.billingEmail.dirty || ctx.billingEmail.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingMobile.invalid && (ctx.billingMobile.dirty || ctx.billingMobile.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingAddressLine1.invalid && (ctx.billingAddressLine1.dirty || ctx.billingAddressLine1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingAddressLine2.invalid && (ctx.billingAddressLine2.dirty || ctx.billingAddressLine2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingCountry.invalid && (ctx.billingCountry.dirty || ctx.billingCountry.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingCity.invalid && (ctx.billingCity.dirty || ctx.billingCity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingState.invalid && (ctx.billingState.dirty || ctx.billingState.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.billingZip.invalid && (ctx.billingZip.dirty || ctx.billingZip.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingFirstName.invalid && (ctx.shippingFirstName.dirty || ctx.shippingFirstName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingLastName.invalid && (ctx.shippingLastName.dirty || ctx.shippingLastName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingEmail.invalid && (ctx.shippingEmail.dirty || ctx.shippingEmail.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingMobile.invalid && (ctx.shippingMobile.dirty || ctx.shippingMobile.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingAddressLine1.invalid && (ctx.shippingAddressLine1.dirty || ctx.shippingAddressLine1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingAddressLine2.invalid && (ctx.shippingAddressLine2.dirty || ctx.shippingAddressLine2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingAddressLine2.invalid && (ctx.shippingAddressLine2.dirty || ctx.shippingAddressLine2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingCity.invalid && (ctx.shippingCity.dirty || ctx.shippingCity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingState.invalid && (ctx.shippingState.dirty || ctx.shippingState.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shippingZip.invalid && (ctx.shippingZip.dirty || ctx.shippingZip.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](169, 25, ctx.subTotalPrice, "EUR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](175, 28, ctx.shipping, "EUR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](182, 31, ctx.totalPrice, "EUR"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/cart-item */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ 6082);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _services_modal_dialogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal-dialogs.service */ 9988);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);








function HomeComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 44)(5, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 46)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h6", 47)(11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 48)(14, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_45_Template_a_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const newProduct_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.addToCart(newProduct_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const newProduct_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", newProduct_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](newProduct_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](newProduct_r2.unitPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](newProduct_r2.unitPrice);
} }
function HomeComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 44)(5, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 46)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h6", 47)(11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 48)(14, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_74_Template_a_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const highestRatedProduct_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.addToCart(highestRatedProduct_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const highestRatedProduct_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", highestRatedProduct_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](highestRatedProduct_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](highestRatedProduct_r5.unitPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](highestRatedProduct_r5.unitPrice);
} }
class HomeComponent {
    constructor(productService, cartService, dialogService, dialog) {
        this.productService = productService;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.newest = [];
        this.highestRated = [];
    }
    ngOnInit() {
        this.dialogService.openLoadingDialog('0ms', '5ms');
        this.productService.getNewest8Products().subscribe(newest8 => this.newest = newest8);
        this.productService.getHighestRated8Products().subscribe(highest8 => { this.highestRated = highest8, this.dialogService.closeLoadingDialog(); });
    }
    addToCart(theProduct) {
        this.cartService.addToCart(new _common_cart_item__WEBPACK_IMPORTED_MODULE_0__.CartItem(theProduct));
        this.dialogService.openAddedToCartDialog('0ms', '5ms', theProduct);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modal_dialogs_service__WEBPACK_IMPORTED_MODULE_3__.ModalDialogsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 75, vars: 2, consts: [[1, "container-fluid", "bg-secondary", "mb-5"], [1, "row", "justify-content-center", "mx-0", "mb-5", "pb-0"], [1, "col-lg-3", "container-fluid", "mb-4", "mb-lg-0", "p-0", 2, "min-width", "58%"], ["id", "header-carousel", "data-ride", "carousel", 1, "carousel", "slide", "container-fluid"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "height", "600px"], ["src", "assets/img/freshFoodFlipped.png?", "alt", "Image", 1, "img-fluid"], [1, "carousel-caption", "d-flex", "flex-column", "align-items-start", "justify-content-start"], [1, "p-3", 2, "max-width", "550px"], [1, "text-uppercase", "font-weight-medium", "mb-3"], [1, "", 2, "font-size", "2.5rem"], [1, "mb-4", 2, "font-size", "2.5rem"], ["href", "", 1, "btn", "btn-light", "py-2", "px-3", "mt-4", "font-weight-bold"], [1, "container", "mt-5"], [1, "row", "px-xl-5", "pb-3"], [1, "col-lg-3", "col-md-6", "col-sm-12", "pb-1"], [1, "d-flex", "align-items-center", "border", 2, "padding", "30px"], [1, "fa", "fa-check", "text-primary", "m-0", "mr-3"], [1, "font-weight-semi-bold", "m-0"], [1, "fa", "fa-shipping-fast", "text-primary", "m-0", "mr-2"], [1, "fas", "fa-exchange-alt", "text-primary", "m-0", "mr-3"], [1, "fa", "fa-phone-volume", "text-primary", "m-0", "mr-3"], [1, "container", "pt-5", "p-5", 2, "min-width", "67%"], [1, "text-center", "mb-4"], [1, "section-title", "px-5"], [1, "px-2"], ["class", "col-lg-3 col-md-6 col-sm-12 pb-1", 4, "ngFor", "ngForOf"], [1, "container", "offer", "pt-5", 2, "min-width", "65%"], [1, "row", "px-xl-5"], [1, "col-md-6", "pb-4"], [1, "position-relative", "text-center", "text-md-right", "text-white", "mb-2", "py-5", "px-5", "bg-primary"], ["src", "assets/img/offer/offer-1.png", "alt", ""], [1, "position-relative", 2, "z-index", "1"], [1, "text-uppercase", "mb-3"], [1, "mb-4", "font-weight-semi-bold", "text-white"], ["routerLink", "/products", 1, "btn", "btn-inverted-primary", "py-md-2", "px-md-3"], [1, "position-relative", "text-center", "text-md-left", "text-white", "mb-2", "py-5", "px-5", 2, "border", "solid 2px #7FAD39"], ["src", "assets/img/offer/GroceryBag.png", "alt", ""], [1, "text-uppercase", "text-primary", "mb-3"], [1, "mb-4", "font-weight-semi-bold"], ["routerLink", "/products", 1, "btn", "btn-light", "py-md-2", "px-md-3"], [1, "card", "product-item", "border-0", "mb-4"], [1, "card-header", "product-img", "d-flex", "justify-content-center", "align-items-end", "overflow-hidden", "bg-transparent", "border", "p-0"], ["alt", "", 1, "img-fluid", "w-50", 3, "src"], [1, "card-body", "border-left", "border-right", "text-center", "p-0", "pt-4", "pb-3"], [1, "text-truncate", "mb-3"], [1, "d-flex", "justify-content-center"], [1, "text-muted", "ml-2"], [1, "card-footer", "d-flex", "justify-content-between", "bg-light", "border"], ["href", "", 1, "btn", "btn-sm", "text-dark", "p-0"], [1, "fas", "fa-eye", "text-primary", "mr-1"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "text-dark", "p-0", 3, "click"], [1, "fas", "fa-shopping-cart", "text-primary", "mr-1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "10% Off Your First Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Organic Vegetables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Eat Organic. Be organic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Quality Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "14-Day Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 15)(35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 22)(40, "div", 23)(41, "h2", 24)(42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, HomeComponent_div_45_Template, 20, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 27)(47, "div", 28)(48, "div", 29)(49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 32)(52, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "20% off the all order");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Spring Groceries");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 29)(59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 32)(62, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "20% off the all order");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Healthy Pack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 22)(69, "div", 23)(70, "h2", 24)(71, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Highest rated");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, HomeComponent_div_74_Template, 20, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.newest);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.highestRated);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5174:
/*!***********************************************************************!*\
  !*** ./src/app/components/login-callback/login-callback.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCallbackComponent": () => (/* binding */ LoginCallbackComponent)
/* harmony export */ });
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class LoginCallbackComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        console.log(this.auth.hasValidAccessToken());
        this.auth.events.subscribe((event) => {
            if (event instanceof angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_0__.OAuthEvent && event.type === 'token_received') {
                this.token = this.auth.getAccessToken();
                console.log("token:", this.token);
                console.log(this.auth.getIdentityClaims()['given_name']);
            }
        });
    }
    hasToken() {
        return this.auth.hasValidAccessToken();
    }
}
LoginCallbackComponent.ɵfac = function LoginCallbackComponent_Factory(t) { return new (t || LoginCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_0__.OAuthService)); };
LoginCallbackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginCallbackComponent, selectors: [["app-login-callback"]], decls: 2, vars: 0, template: function LoginCallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Processing login...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1jYWxsYmFjay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth-service.service */ 410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function LoginComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
// Import the AuthService type from the SDK
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    login() {
        this.auth.login();
    }
    logout() {
        this.auth.logout();
    }
    isUserLoggedIn() {
        return this.auth.isUserLoggedIn();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 2, consts: [["routerLink", "null", "class", "btn border", 3, "click", 4, "ngIf"], ["routerLink", "null", "class", "btn border", "href", "javascript:void(null);", 3, "click", 4, "ngIf"], ["routerLink", "null", 1, "btn", "border", 3, "click"], [1, "fas", "fa-user", "text-dark"], ["routerLink", "null", "href", "javascript:void(null);", 1, "btn", "border", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_a_0_Template, 3, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_a_1_Template, 3, 0, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2612:
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProductDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 2, vars: 0, template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 526:
/*!****************************************************************************!*\
  !*** ./src/app/components/product-list/pagination/pagination.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0) { return { "active": a0 }; };
function PaginationComponent_li_8_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_8_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.chagePage(page_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, page_r1 === ctx_r2.activePage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1);
} }
function PaginationComponent_li_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1);
} }
function PaginationComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_8_span_1_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_8_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r1 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r1 == 0);
} }
class PaginationComponent {
    constructor() {
        this.totalElements = 1;
        this.page = 1;
        this.pageSize = 10;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.pages = [];
        this.activePage = this.page;
    }
    ngOnChanges(changes) {
        this.activePage = this.page;
        this.pages = [];
        const totalPages = Math.ceil(this.totalElements / this.pageSize);
        for (var i = this.page - 1; i <= Math.min((this.page + 1), totalPages); i++) {
            this.pages.push(i);
        }
    }
    ngOnInit() {
    }
    increment() {
        if (this.page >= this.pages.length) {
            return;
        }
        this.pageChange.emit(this.page + 1);
    }
    decrement() {
        if (this.page === 1) {
            return;
        }
        this.pageChange.emit(this.page - 1);
    }
    chagePage(page) {
        this.pageChange.emit(page);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { totalElements: "totalElements", page: "page", pageSize: "pageSize" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 1, consts: [["aria-label", "Page navigation"], [1, "pagination", "justify-content-center", "mb-3"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngFor", "ngForOf"], ["href", "", "aria-label", "Next", 1, "page-link", 3, "click"], ["class", "page-link", 3, "ngClass", "click", 4, "ngIf"], ["class", "page-link", 4, "ngIf"], [1, "page-link", 3, "ngClass", "click"], [1, "page-link"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "li", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_span_click_3_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_li_8_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_span_click_10_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4646:
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/cart-item */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _services_modal_dialogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal-dialogs.service */ 9988);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _search_body_search_body_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/body-search/body-search.component */ 9552);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination/pagination.component */ 526);












function ProductListComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 67)(5, "h6", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 69)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h6", 70)(11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 71)(14, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductListComponent_div_152_Template_a_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const tmpProduct_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.addToCart(tmpProduct_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const tmpProduct_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", tmpProduct_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tmpProduct_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", tmpProduct_r1.unitPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", tmpProduct_r1.unitPrice, "");
} }
class ProductListComponent {
    constructor(productService, route, cartService, dialogService, dialog) {
        this.productService = productService;
        this.route = route;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.products = [];
        this.currentCategoryId = 1;
        this.productName = "";
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalElements = 0;
        this.previousCategoryId = this.currentCategoryId;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(() => {
            this.listProducts();
        });
    }
    listProducts() {
        this.dialogService.openLoadingDialog('0ms', '5ms');
        const hasSearchParameter = this.route.snapshot.paramMap.has('keyword');
        if (hasSearchParameter) {
            this.searchProduct();
        }
        else {
            this.handleListProducts();
        }
    }
    searchProduct() {
        const keyWord = this.route.snapshot.paramMap.get('keyword');
        this.productService.searchProductList(keyWord).subscribe(data => {
            this.products = data;
            this.dialogService.closeLoadingDialog();
        });
    }
    handleListProducts() {
        const hasCategoryId = this.route.snapshot.paramMap.has('id');
        if (hasCategoryId) {
            this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
            if (this.currentCategoryId !== this.previousCategoryId) {
                this.pageNumber = 1;
            }
            this.previousCategoryId = this.currentCategoryId;
        }
        else {
            this.currentCategoryId = 1;
        }
        this.productService.getProductsPaginate(this.pageNumber - 1, this.pageSize, this.currentCategoryId).subscribe(data => {
            this.products = data._embedded.products;
            this.totalElements = data.page.totalElements;
            this.dialogService.closeLoadingDialog();
        });
    }
    addToCart(theProduct) {
        this.cartService.addToCart(new _common_cart_item__WEBPACK_IMPORTED_MODULE_0__.CartItem(theProduct));
        this.dialogService.openAddedToCartDialog('0ms', '5ms', theProduct);
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modal_dialogs_service__WEBPACK_IMPORTED_MODULE_3__.ModalDialogsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 155, vars: 4, consts: [[1, "container-fluid", "bg-secondary", "mb-5"], [1, "px-xl-5"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", 2, "min-height", "300px"], [1, "font-weight-semi-bold", "text-uppercase", "mb-3"], [1, "d-inline-flex"], [1, "m-0"], ["href", ""], [1, "m-0", "px-2"], [1, "container", "pt-5", "p-5", 2, "min-width", "67%"], [1, "row", "px-xl-5"], [1, "col-lg-3", "col-md-12"], [1, "border-bottom", "mb-4", "pb-4"], [1, "font-weight-semi-bold", "mb-4"], [1, "custom-control", "custom-checkbox", "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["type", "checkbox", "checked", "", "id", "price-all", 1, "custom-control-input"], ["for", "price-all", 1, "custom-control-label"], [1, "badge", "border", "font-weight-normal"], ["type", "checkbox", "id", "price-1", 1, "custom-control-input"], ["for", "price-1", 1, "custom-control-label"], ["type", "checkbox", "id", "price-2", 1, "custom-control-input"], ["for", "price-2", 1, "custom-control-label"], ["type", "checkbox", "id", "price-3", 1, "custom-control-input"], ["for", "price-3", 1, "custom-control-label"], ["type", "checkbox", "id", "price-4", 1, "custom-control-input"], ["for", "price-4", 1, "custom-control-label"], [1, "custom-control", "custom-checkbox", "d-flex", "align-items-center", "justify-content-between"], ["type", "checkbox", "id", "price-5", 1, "custom-control-input"], ["for", "price-5", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "id", "color-all", 1, "custom-control-input"], ["type", "checkbox", "id", "color-1", 1, "custom-control-input"], ["for", "color-1", 1, "custom-control-label"], ["type", "checkbox", "id", "color-2", 1, "custom-control-input"], ["for", "color-2", 1, "custom-control-label"], ["type", "checkbox", "id", "color-3", 1, "custom-control-input"], ["for", "color-3", 1, "custom-control-label"], ["type", "checkbox", "id", "color-4", 1, "custom-control-input"], ["for", "color-4", 1, "custom-control-label"], ["type", "checkbox", "id", "color-5", 1, "custom-control-input"], ["for", "color-5", 1, "custom-control-label"], [1, "mb-5"], ["type", "checkbox", "checked", "", "id", "size-all", 1, "custom-control-input"], ["for", "size-all", 1, "custom-control-label"], ["type", "checkbox", "id", "size-1", 1, "custom-control-input"], ["for", "size-1", 1, "custom-control-label"], ["type", "checkbox", "id", "size-2", 1, "custom-control-input"], ["for", "size-2", 1, "custom-control-label"], ["type", "checkbox", "id", "size-3", 1, "custom-control-input"], ["for", "size-3", 1, "custom-control-label"], ["type", "checkbox", "id", "size-4", 1, "custom-control-input"], ["for", "size-4", 1, "custom-control-label"], ["type", "checkbox", "id", "size-5", 1, "custom-control-input"], ["for", "size-5", 1, "custom-control-label"], [1, "col-lg-9", "col-md-12"], [1, "row", "pb-3"], [1, "col-12", "pb-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "input-group"], [1, "dropdown", "ml-4"], ["type", "button", "id", "triggerId", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "border", "dropdown-toggle"], ["aria-labelledby", "triggerId", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], ["class", "col-lg-4 col-md-6 col-sm-12 pb-1", 4, "ngFor", "ngForOf"], [3, "page", "pageSize", "totalElements", "pageChange"], [1, "col-lg-4", "col-md-6", "col-sm-12", "pb-1"], [1, "card", "product-item", "border-0", "mb-4"], [1, "card-header", "product-img", "d-flex", "justify-content-center", "align-items-end", "overflow-hidden", "bg-transparent", "border", "p-0"], ["alt", "", 1, "img-fluid", "w-50", 3, "src"], [1, "card-body", "border-left", "border-right", "text-center", "p-0", "pt-4", "pb-3"], [1, "text-truncate", "mb-3"], [1, "d-flex", "justify-content-center"], [1, "text-muted", "ml-2"], [1, "card-footer", "d-flex", "justify-content-between", "bg-light", "border"], ["href", "", 1, "btn", "btn-sm", "text-dark", "p-0"], [1, "fas", "fa-eye", "text-primary", "mr-1"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "text-dark", "p-0", 3, "click"], [1, "fas", "fa-shopping-cart", "text-primary", "mr-1"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Our Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "p", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Filter by price per unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "form")(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "$0 - $3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "$3 - $9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "295");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "$9 - $14");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "246");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "$14 - $19");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "145");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "$20 - $40");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "168");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 11)(57, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Filter by type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "form")(60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Vegetarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Vegan");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "295");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Gluten free");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "246");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Lactose free");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "145");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Low Carbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "168");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 39)(97, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Filter by Continent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "form")(100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "295");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "Americas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "246");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Europe");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "145");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](131, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Australia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "168");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 52)(137, "div", 53)(138, "div", 54)(139, "div", 55)(140, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](141, "app-body-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "div", 57)(143, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, " Sort by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 59)(146, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "Popularity");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "Best Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](152, ProductListComponent_div_152_Template, 20, 4, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "div", 54)(154, "app-pagination", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ProductListComponent_Template_app_pagination_pageChange_154_listener($event) { return ctx.pageNumber = $event; })("pageChange", function ProductListComponent_Template_app_pagination_pageChange_154_listener() { return ctx.listProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("page", ctx.pageNumber)("pageSize", ctx.pageSize)("totalElements", ctx.totalElements);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _search_body_search_body_search_component__WEBPACK_IMPORTED_MODULE_4__.BodySearchComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9552:
/*!************************************************************************!*\
  !*** ./src/app/components/search/body-search/body-search.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodySearchComponent": () => (/* binding */ BodySearchComponent)
/* harmony export */ });
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search.component */ 9055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class BodySearchComponent extends _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent {
    constructor(router) {
        super(router);
    }
}
BodySearchComponent.ɵfac = function BodySearchComponent_Factory(t) { return new (t || BodySearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BodySearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BodySearchComponent, selectors: [["app-body-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 0, consts: [[1, "input-group"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "keyup.enter"], ["myInput", ""], [1, "input-group-append"], [1, "input-group-text", "bg-transparent", "text-primary", 3, "click"], [1, "fa", "fa-search"]], template: function BodySearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function BodySearchComponent_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.doSearch(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodySearchComponent_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.doSearch(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2R5LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3588:
/*!****************************************************************************!*\
  !*** ./src/app/components/search/header-search/header-search.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderSearchComponent": () => (/* binding */ HeaderSearchComponent)
/* harmony export */ });
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search.component */ 9055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class HeaderSearchComponent extends _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent {
    constructor(router) {
        super(router);
    }
}
HeaderSearchComponent.ɵfac = function HeaderSearchComponent_Factory(t) { return new (t || HeaderSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HeaderSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderSearchComponent, selectors: [["app-header-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 0, consts: [[1, "input-group"], ["type", "text", "placeholder", "Search for products", 1, "form-control", 2, "border", "solid 2px #7FAD39", 3, "keyup.enter"], ["myInput", ""], [1, "input-group-append"], [1, "input-group-text", "bg-transparent", "m-0", "p-0"], [1, "btn", "btn-light", "m-0", "ml-1", 3, "click"]], template: function HeaderSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function HeaderSearchComponent_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.doSearch(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "span", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderSearchComponent_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.doSearch(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SearchComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    doSearch(value) {
        console.log(value);
        this.router.navigateByUrl(`/search/${value}`);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 0, vars: 0, template: function SearchComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1206:
/*!**************************************************************!*\
  !*** ./src/app/interceptors/auth-interceptor.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorInterceptor": () => (/* binding */ AuthInterceptorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);



class AuthInterceptorInterceptor {
    constructor(oauthService) {
        this.oauthService = oauthService;
    }
    intercept(request, next) {
        console.log(this.oauthService.hasValidAccessToken());
        if (this.oauthService.hasValidAccessToken()) {
            const accessToken = this.oauthService.getAccessToken();
            console.log(accessToken);
            const authReq = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return next.handle(authReq);
        }
        return next.handle(request);
    }
}
AuthInterceptorInterceptor.ɵfac = function AuthInterceptorInterceptor_Factory(t) { return new (t || AuthInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__.OAuthService)); };
AuthInterceptorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorInterceptor, factory: AuthInterceptorInterceptor.ɵfac });


/***/ }),

/***/ 3544:
/*!*****************************************************************!*\
  !*** ./src/app/others/modal-loading/modal-loading.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalLoadingComponent": () => (/* binding */ ModalLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);



class ModalLoadingComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
}
ModalLoadingComponent.ɵfac = function ModalLoadingComponent_Factory(t) { return new (t || ModalLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ModalLoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalLoadingComponent, selectors: [["app-modal-loading"]], decls: 1, vars: 0, template: function ModalLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
    } }, dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 995:
/*!*********************************************************************************************!*\
  !*** ./src/app/others/modal-order-tracking-number/modal-order-tracking-number.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOrderTrackingNumberComponent": () => (/* binding */ ModalOrderTrackingNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class ModalOrderTrackingNumberComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.trackingNumber = '';
    }
    ngOnInit() {
        this.trackingNumber = this.data.trackingNumber;
    }
}
ModalOrderTrackingNumberComponent.ɵfac = function ModalOrderTrackingNumberComponent_Factory(t) { return new (t || ModalOrderTrackingNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ModalOrderTrackingNumberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalOrderTrackingNumberComponent, selectors: [["app-modal-order-tracking-number"]], decls: 9, vars: 1, consts: [["mat-dialog-title", "", 1, "text-center"], ["mat-dialog-content", "", 1, "text-center"], ["mat-dialog-actions", "", 1, "justify-content-end"], ["routerLink", "/home", "mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", 1, "btn", "btn-primary"]], template: function ModalOrderTrackingNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order Checkout successful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tracking number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.trackingNumber, "\n");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1vcmRlci10cmFja2luZy1udW1iZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7158:
/*!***************************************************************************************!*\
  !*** ./src/app/others/model-item-added-to-cart/model-item-added-to-cart.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelItemAddedToCartComponent": () => (/* binding */ ModelItemAddedToCartComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class ModelItemAddedToCartComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.product = this.data.product;
    }
}
ModelItemAddedToCartComponent.ɵfac = function ModelItemAddedToCartComponent_Factory(t) { return new (t || ModelItemAddedToCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ModelItemAddedToCartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelItemAddedToCartComponent, selectors: [["app-model-item-added-to-cart"]], decls: 21, vars: 4, consts: [["mat-dialog-title", "", 1, "text-center"], ["mat-dialog-content", "", 1, "text-center"], [1, "card", "product-item", "border-0", "mb-4"], [1, "card-header", "product-img", "d-flex", "justify-content-center", "align-items-end", "overflow-hidden", "bg-transparent", "border", "p-0"], ["alt", "", 1, "img-fluid", "w-50", 3, "src"], [1, "card-body", "border-left", "border-right", "text-center", "p-0", "pt-4", "pb-3"], [1, "text-truncate", "mb-3"], [1, "d-flex", "justify-content-center"], [1, "text-muted", "ml-2"], ["mat-dialog-actions", "", 1, "justify-content-end"], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-secondary"], ["routerLink", "/cart-details", "mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", 1, "btn", "btn-primary"]], template: function ModelItemAddedToCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Added to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Item successfully added to cart!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 8)(14, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Go to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.unitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.unitPrice);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbC1pdGVtLWFkZGVkLXRvLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 410:
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "authCodeFlowConfig": () => (/* binding */ authCodeFlowConfig)
/* harmony export */ });
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const authCodeFlowConfig = {
    issuer: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.issuer,
    redirectUri: window.location.origin + '/callback',
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId,
    responseType: 'token id_token',
    logoutUrl: window.location.origin,
    scope: 'openid profile email read:profile',
    showDebugInformation: true,
    skipIssuerCheck: true,
    silentRefreshRedirectUri: window.location.origin,
    useSilentRefresh: true,
    customQueryParams: {
        audience: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.audience,
        max_age: 0
    },
};
class AuthService {
    constructor(oauth) {
        this.oauth = oauth;
        this.oauth.configure(authCodeFlowConfig);
        this.oauth.loadDiscoveryDocumentAndTryLogin();
        this.oauth.setupAutomaticSilentRefresh();
    }
    login() {
        this.oauth.initLoginFlow();
    }
    logout() {
        this.oauth.logOut();
        this.oauth.events.subscribe((event) => {
            if (event instanceof angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__.OAuthEvent && event.type === 'logout') {
                console.log('User has been logged out.');
            }
        });
    }
    handleLoginCallback() {
    }
    isUserLoggedIn() {
        return this.oauth.getIdentityClaims() !== null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__.OAuthService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CartService {
    constructor() {
        this.cartItems = [];
        this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    addToCart(cartItem) {
        let alreadyExistsInCart = false;
        let existingCartItem = undefined;
        if (this.cartItems.length > 0) {
            existingCartItem = this.cartItems.find(item => item.id === cartItem.id);
            alreadyExistsInCart = (existingCartItem != undefined);
        }
        if (alreadyExistsInCart) {
            existingCartItem.quantity++;
        }
        else {
            this.cartItems.push(cartItem);
        }
        this.computeCartTotals();
    }
    computeCartTotals() {
        let totalPriceValue = 0;
        let totalQuantityValue = 0;
        for (let cartItem of this.cartItems) {
            totalPriceValue += cartItem.unitPrice * cartItem.quantity;
            totalQuantityValue += cartItem.quantity;
        }
        this.totalPrice.next(totalPriceValue);
        this.totalQuantity.next(totalQuantityValue);
    }
    empty() {
        this.cartItems = [];
        this.computeCartTotals();
    }
    removeFromCart(cartItem) {
        const cartIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === cartItem.id);
        if (cartIndex > -1)
            this.cartItems.splice(cartIndex, 1);
        this.computeCartTotals();
    }
    decrementQuantity(cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity == 0) {
            this.removeFromCart(cartItem);
        }
        this.computeCartTotals();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8106:
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutService": () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class CheckoutService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://backend-web-service-ecom.onrender.com/api/checkout/purchase';
    }
    purchase(purchase) {
        return this.httpClient.post(this.baseUrl, purchase);
    }
}
CheckoutService.ɵfac = function CheckoutService_Factory(t) { return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CheckoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckoutService, factory: CheckoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9988:
/*!***************************************************!*\
  !*** ./src/app/services/modal-dialogs.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDialogsService": () => (/* binding */ ModalDialogsService)
/* harmony export */ });
/* harmony import */ var _others_modal_loading_modal_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/modal-loading/modal-loading.component */ 3544);
/* harmony import */ var _others_modal_order_tracking_number_modal_order_tracking_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/modal-order-tracking-number/modal-order-tracking-number.component */ 995);
/* harmony import */ var _others_model_item_added_to_cart_model_item_added_to_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/model-item-added-to-cart/model-item-added-to-cart.component */ 7158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);





class ModalDialogsService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openLoadingDialog(enterAnimationDuration, exitAnimationDuration) {
        this.loadingModalDialog = this.dialog.open(_others_modal_loading_modal_loading_component__WEBPACK_IMPORTED_MODULE_0__.ModalLoadingComponent, {
            enterAnimationDuration,
            exitAnimationDuration
        });
    }
    closeLoadingDialog() {
        this.loadingModalDialog?.close();
    }
    openAddedToCartDialog(enterAnimationDuration, exitAnimationDuration, product) {
        this.dialog.open(_others_model_item_added_to_cart_model_item_added_to_cart_component__WEBPACK_IMPORTED_MODULE_2__.ModelItemAddedToCartComponent, {
            width: '450px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: {
                "product": product
            }
        });
    }
    openOrderTrackingNumberDialog(enterAnimationDuration, exitAnimationDuration, trackingNumber) {
        this.trackingNumberModalDialog = this.dialog.open(_others_modal_order_tracking_number_modal_order_tracking_number_component__WEBPACK_IMPORTED_MODULE_1__.ModalOrderTrackingNumberComponent, {
            width: '450px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: {
                "trackingNumber": trackingNumber
            }
        });
    }
    getTrackingNumberDialogCloseHandler() {
        return this.trackingNumberModalDialog.afterClosed();
    }
}
ModalDialogsService.ɵfac = function ModalDialogsService_Factory(t) { return new (t || ModalDialogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
ModalDialogsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ModalDialogsService, factory: ModalDialogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:8080/products';
        this.categoryUrl = 'http://localhost:8080/product-category';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .set('Access-Control-Allow-Origin', '*');
    }
    getProduct(theProductId) {
        const productUrl = `${this.baseUrl}/${theProductId}`;
        return this.httpClient.get(productUrl, { headers: this.headers });
    }
    getProductCategoryList() {
        const options = { headers: this.headers };
        return this.httpClient.get(this.categoryUrl, { headers: this.headers }).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(response => response._embedded.productCategory));
    }
    getProductList(categoryid) {
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryid}`;
        return this.searchProducts(searchUrl);
    }
    searchProductList(name) {
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${name}`;
        return this.searchProducts(searchUrl);
    }
    searchProducts(searchUrl) {
        return this.httpClient.get(searchUrl, { headers: this.headers }).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(response => response._embedded.products));
    }
    getNewest8Products() {
        const searchUrl = `${this.baseUrl}/search/findFirst8ByOrderByDateCreated`;
        return this.searchProducts(searchUrl);
    }
    getHighestRated8Products() {
        const searchUrl = `${this.baseUrl}/search/findFirst8ByOrderByRating`;
        return this.searchProducts(searchUrl);
    }
    getProductsPaginate(page, pageSize, categoryId) {
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}&page=${page}&size=${pageSize}`;
        return this.httpClient.get(searchUrl, { headers: this.headers });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 533:
/*!******************************************************!*\
  !*** ./src/app/validators/custom-form-validators.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomFormValidators": () => (/* binding */ CustomFormValidators)
/* harmony export */ });
class CustomFormValidators {
    static notOnlyWhiteSpace(control) {
        if (control.value != null && control.value.trim().length === 0) {
            return { "notOnlyWhiteSpace": true };
        }
        return {};
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    issuer: 'https://dev-iwm1hr4ywzqlodpw.us.auth0.com/',
    clientId: 'EEhKnXxSMBYDLCjwlfOl33wRDxSGwecD',
    audience: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map