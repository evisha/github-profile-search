import './polyfills.server.mjs';
import{a as Se,b as Oe,c as Pe,d as Ne,h as Te,o as Ue,r as z,s as le}from"./chunk-GKI55TEU.mjs";import{$ as Ae,Aa as h,B as Ve,C as De,Ca as oe,Ea as w,Gb as W,Ha as P,Hb as x,I as be,Ia as d,Ib as q,Ja as Fe,L as te,La as p,Ma as a,N as S,Na as s,O as _,Oa as f,Pa as N,Qa as T,Ra as xe,S as b,Sa as Ie,T as H,Ta as M,U as ie,Ua as g,Va as F,W as m,Wa as U,X as y,Xa as u,Y as A,Ya as C,Z as Me,Za as se,_ as Ee,aa as L,ba as $,bb as k,ca as we,g as me,i as ge,k as ee,n as B,o as ve,ra as O,t as _e,ua as ne,ub as ae,v as ye,wa as re,x as Ce,za as l}from"./chunk-H7LJY3KY.mjs";import{a as V,b as E}from"./chunk-KRLCULJA.mjs";var Z=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl="https://api.github.com/"}getAllUsers(i=""){let r;return i&&(r=new Se().set("q",i)),this.http.get(`${this.baseUrl}search/users?q=e`,{params:r})}getSingleUser(i){return this.http.get(`${this.baseUrl}users/${i}`)}getUserRepos(i){return this.http.get(`${this.baseUrl}users/${i}/repos`)}getUserFollowers(i){return this.http.get(`${this.baseUrl}users/${i}/followers`)}};e.\u0275fac=function(r){return new(r||e)(H(Pe))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var $e=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(h(re),h(ne))},e.\u0275dir=A({type:e});let t=e;return t})(),gt=(()=>{let e=class e extends $e{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=we(e)))(o||e)}})(),e.\u0275dir=A({type:e,features:[P]});let t=e;return t})(),We=new b("NgValueAccessor");var vt={provide:We,useExisting:te(()=>J),multi:!0};function _t(){let t=ae()?ae().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var yt=new b("CompositionEventMode"),J=(()=>{let e=class e extends $e{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!_t())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(h(re),h(ne),h(yt,8))},e.\u0275dir=A({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&M("input",function(D){return o._handleInput(D.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(D){return o._compositionEnd(D.target.value)})},features:[se([vt]),P]});let t=e;return t})();var Ct=new b("NgValidators"),Vt=new b("NgAsyncValidators");function qe(t){return t!=null}function ze(t){return Ie(t)?ge(t):t}function Ze(t){let e={};return t.forEach(n=>{e=n!=null?V(V({},e),n):e}),Object.keys(e).length===0?null:e}function Ye(t,e){return e.map(n=>n(t))}function Dt(t){return!t.validate}function Ke(t){return t.map(e=>Dt(e)?e:n=>e.validate(n))}function bt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){return Ze(Ye(n,e))}}function Xe(t){return t!=null?bt(Ke(t)):null}function Mt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){let i=Ye(n,e).map(ze);return _e(i).pipe(B(Ze))}}function Je(t){return t!=null?Mt(Ke(t)):null}function je(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Qe(t){return t._rawValidators}function et(t){return t._rawAsyncValidators}function ue(t){return t?Array.isArray(t)?t:[t]:[]}function K(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ge(t,e){let n=ue(e);return ue(t).forEach(r=>{K(n,r)||n.push(r)}),n}function Re(t,e){return ue(e).filter(n=>!K(t,n))}var ce=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}};var R=class extends ce{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},de=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Et={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Oi=E(V({},Et),{"[class.ng-submitted]":"isSubmitted"}),tt=(()=>{let e=class e extends de{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(h(R,2))},e.\u0275dir=A({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[P]});let t=e;return t})();var j="VALID",Y="INVALID",I="PENDING",G="DISABLED";function At(t){return(Q(t)?t.validators:t)||null}function wt(t){return Array.isArray(t)?Xe(t):t||null}function Ft(t,e){return(Q(e)?e.asyncValidators:t)||null}function xt(t){return Array.isArray(t)?Je(t):t||null}function Q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var he=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===j}get invalid(){return this.status===Y}get pending(){return this.status==I}get disabled(){return this.status===G}get enabled(){return this.status!==G}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Re(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}hasValidator(e){return K(this._rawValidators,e)}hasAsyncValidator(e){return K(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=I,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=G,this.errors=null,this._forEachChild(i=>{i.disable(E(V({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(E(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=j,this._forEachChild(i=>{i.enable(E(V({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(E(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===j||this.status===I)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G:j}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=I,this._hasOwnPendingAsyncValidator=!0;let n=ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?G:this.errors?Y:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(I)?I:this._anyControlsHaveStatus(Y)?Y:j}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=xt(this._rawAsyncValidators)}};var it=new b("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function It(t,e,n=fe){Ot(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Nt(t,e),Ut(t,e),Tt(t,e),St(t,e)}function Be(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Pt(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function X(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function St(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Ot(t,e){let n=Qe(t);e.validator!==null?t.setValidators(je(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=et(t);e.asyncValidator!==null?t.setAsyncValidators(je(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();X(e._rawValidators,r),X(e._rawAsyncValidators,r)}function Pt(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Qe(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=et(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return X(e._rawValidators,i),X(e._rawAsyncValidators,i),n}function Nt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&nt(t,e)})}function Tt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&nt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function nt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ut(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function kt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function jt(t){return Object.getPrototypeOf(t.constructor)===gt}function Gt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===J?n=o:jt(o)?i=o:r=o}),r||i||n||null}function He(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Le(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var rt=class extends he{constructor(e=null,n,i){super(At(n),Ft(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Le(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){He(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){He(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Le(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({});let t=e;return t})();var ot=new b("NgModelWithFormControlWarning"),Bt={provide:R,useExisting:te(()=>pe)},pe=(()=>{let e=class e extends R{set isDisabled(i){}constructor(i,r,o,c,D){super(),this._ngModelWarningConfig=c,this.callSetDisabledState=D,this.update=new w,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Gt(this,o)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&Be(r,this,!1),It(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}kt(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Be(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(h(Ct,10),h(Vt,10),h(We,10),h(ot,8),h(it,8))},e.\u0275dir=A({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[se([Bt]),P,Me]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({imports:[Rt]});let t=e;return t})();var st=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ot,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:it,useValue:i.callSetDisabledState??fe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({imports:[Ht]});let t=e;return t})();var at=(()=>{let e=class e{constructor(){this.searchTerm=new rt,this.search=this.searchTerm.valueChanges.pipe(Ce(500),Ve(),B(i=>i===null?null:i.toLowerCase()))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-search-bar"]],outputs:{search:"search"},decls:2,vars:1,consts:[[1,"search-box"],["autocomplete","off","type","text","placeholder","Type to search GitHub users",1,"search-txt",3,"formControl"]],template:function(r,o){r&1&&(a(0,"div",0),f(1,"input",1),s()),r&2&&(l(1),d("formControl",o.searchTerm))},dependencies:[J,tt,pe],styles:["input[_ngcontent-%COMP%]{padding:10px;margin:5px 0 10px;border:2px solid #529858;outline:none;border-radius:5px;width:100%;font-size:16px}input[_ngcontent-%COMP%]::placeholder{color:#529858;font-size:16px;font-style:italic}"]});let t=e;return t})();var lt=(()=>{let e=class e{constructor(){this.navigateToUser=new w}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-user-card"]],inputs:{user:"user"},outputs:{navigateToUser:"navigateToUser"},decls:4,vars:2,consts:[[1,"user-item",3,"click"],["alt","Avatar",1,"avatar",3,"src"],[1,"username"]],template:function(r,o){r&1&&(a(0,"div",0),M("click",function(){return o.navigateToUser.emit(o.user.login)}),f(1,"img",1),a(2,"p",2),u(3),s()()),r&2&&(l(1),F("src",o.user.avatar_url,O),l(2),C(" ",o.user.login,""))},styles:[".user-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px 20px;border:1px dashed #666;margin:10px;cursor:pointer}.user-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{vertical-align:middle;width:50px;height:50px;border-radius:50%}.user-item[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-weight:700;margin-left:15px}.user-item[_ngcontent-%COMP%]:hover{border-bottom:1px dashed #529858}.user-item[_ngcontent-%COMP%]:hover   .username[_ngcontent-%COMP%]{color:#529858}"]});let t=e;return t})();function qt(t,e){if(t&1){let n=xe();a(0,"app-user-card",9),M("navigateToUser",function(r){Ee(n);let o=g(3);return Ae(o.navigateToUser(r))}),s()}if(t&2){let n=e.$implicit;d("user",n)}}function zt(t,e){if(t&1&&(N(0),a(1,"div",7),p(2,qt,1,1,"app-user-card",8),s(),T()),t&2){let n=g(2);l(2),d("ngForOf",n.userList)}}function Zt(t,e){t&1&&(a(0,"div"),u(1,"No users are here... yet."),s())}function Yt(t,e){if(t&1&&(N(0),p(1,zt,3,1,"ng-container",4)(2,Zt,2,0,"ng-template",null,6,k),T()),t&2){let n=U(3),i=g();l(1),d("ngIf",i.userList.length>0)("ngIfElse",n)}}function Kt(t,e){t&1&&(a(0,"div"),u(1,"Loading users..."),s())}var ct=(()=>{let e=class e{constructor(i,r){this.US=i,this.chRef=r,this.searchQuery$=new me(""),this.userList=[],this.router=ie(z)}ngOnInit(){this.searchQuery$.pipe(be(i=>i===null||i===""?[]:this.US.getAllUsers(i))).subscribe(i=>{console.log(i),this.userList=i.items})}navigateToUser(i){this.router.navigate(["/users",i])}};e.\u0275fac=function(r){return new(r||e)(h(Z),h(oe))},e.\u0275cmp=m({type:e,selectors:[["app-user-list"]],decls:14,vars:2,consts:[["width","40","height","40","viewBox","0 0 16 16","xmlns","http://www.w3.org/2000/svg",1,"Logo_icon_14tkmhr"],["d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z","fill","#000","fill-rule","evenodd"],["href","https://docs.github.com/en/rest?apiVersion=2022-11-28"],[3,"search"],[4,"ngIf","ngIfElse"],["isLoading",""],["noUsers",""],[1,"user-list"],["data-e2e-id","user-list",3,"user","navigateToUser",4,"ngFor","ngForOf"],["data-e2e-id","user-list",3,"user","navigateToUser"]],template:function(r,o){if(r&1&&(L(),a(0,"svg",0)(1,"title"),u(2,"mark-github"),s(),f(3,"path",1),s(),$(),a(4,"h1"),u(5," GitHub User Profile Search "),s(),a(6,"p"),u(7," Browse users and their profiles via "),a(8,"a",2),u(9," GitHub API"),s()(),a(10,"app-search-bar",3),M("search",function(D){return o.searchQuery$.next(D)}),s(),p(11,Yt,4,2,"ng-container",4)(12,Kt,2,0,"ng-template",null,5,k)),r&2){let c=U(13);l(11),d("ngIf",!0)("ngIfElse",c)}},dependencies:[W,x,at,lt],styles:[".user-list[_ngcontent-%COMP%]{padding:5px;border:1px solid #ccc;border-radius:5px;margin:10px}"]});let t=e;return t})();function Xt(t,e){t&1&&(a(0,"div",1),f(1,"div",2),s())}var dt=(()=>{let e=class e{constructor(){this.show=!1}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-spinner"]],inputs:{show:"show"},decls:1,vars:1,consts:[["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],[1,"spinner"]],template:function(r,o){r&1&&p(0,Xt,2,0,"div",0),r&2&&d("ngIf",o.show)},dependencies:[x],styles:[".spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;justify-content:center;align-items:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(0,0,0,.1);border-radius:50%;border-top:4px solid #3498db;width:40px;height:40px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]});let t=e;return t})();function ei(t,e){if(t&1&&(a(0,"div",5),f(1,"img",6),s()),t&2){let n=g();l(1),F("src",n.user.avatar_url,O)}}function ti(t,e){if(t&1&&(a(0,"div",7)(1,"p",8)(2,"span"),L(),a(3,"svg",9)(4,"title"),u(5,"mark-github"),s(),f(6,"path",10),s()(),u(7),s(),$(),a(8,"span"),u(9),s(),a(10,"span"),u(11),s()()),t&2){let n=g();l(7),C(" ","@"+n.user.login," "),l(2),C(" ",n.user.followers," Followers | "),l(2),C(" ",n.user.following," Following ")}}function ii(t,e){if(t&1&&(a(0,"div"),f(1,"img",15),s()),t&2){let n=e.$implicit;l(1),F("src",n==null?null:n.avatar_url,O),F("alt",n==null?null:n.login)}}function ni(t,e){if(t&1&&(N(0),a(1,"div",13),p(2,ii,2,2,"div",14),s(),T()),t&2){let n=g(2);l(2),d("ngForOf",n.userFollowers)}}function ri(t,e){t&1&&(a(0,"div"),u(1,"No followers are here... yet."),s())}function oi(t,e){if(t&1&&(a(0,"div")(1,"p"),u(2," Followers "),s(),p(3,ni,3,1,"ng-container",11)(4,ri,2,0,"ng-template",null,12,k),s()),t&2){let n=U(5),i=g();l(3),d("ngIf",i.userFollowers.length>0)("ngIfElse",n)}}function si(t,e){if(t&1&&(a(0,"p",21)(1,"span",22),u(2," \xA0 "),s(),u(3),s()),t&2){let n=g().$implicit;l(3),C(" ",n.language," ")}}function ai(t,e){if(t&1&&(a(0,"div",18)(1,"p",19),u(2),s(),p(3,si,4,1,"p",20),s()),t&2){let n=e.$implicit;l(2),C("",n.name," "),l(1),d("ngIf",n.language)}}function li(t,e){if(t&1&&(a(0,"div")(1,"p"),u(2),s(),a(3,"div",16),p(4,ai,4,2,"div",17),s()()),t&2){let n=g();l(2),C(" Public repositories ",n.userRepos.length," "),l(2),d("ngForOf",n.userRepos)}}var ht=(()=>{let e=class e{constructor(i,r){this.route=i,this.US=r,this.loading=!0}ngOnInit(){this.route.params.subscribe(i=>{let r=i.username;this.getUserData(r)})}getUserData(i){ve([this.US.getSingleUser(i),this.US.getUserRepos(i),this.US.getUserFollowers(i)]).subscribe(([r,o,c])=>{r&&(this.user=r),o&&(this.userRepos=o),c&&(this.userFollowers=c),this.loading=!1},r=>{this.loading=!1})}};e.\u0275fac=function(r){return new(r||e)(h(Ue),h(Z))},e.\u0275cmp=m({type:e,selectors:[["app-user-details"]],decls:7,vars:5,consts:[[1,"user-item"],["class","left-side",4,"ngIf"],["class","right-side",4,"ngIf"],[4,"ngIf"],[3,"show"],[1,"left-side"],["alt","User Avatar",1,"avatar",3,"src"],[1,"right-side"],[1,"username"],["width","25","height","30","viewBox","0 0 16 16","xmlns","http://www.w3.org/2000/svg",1,"Logo_icon_14tkmhr"],["d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z","fill","#000","fill-rule","evenodd"],[4,"ngIf","ngIfElse"],["noFollowers",""],[1,"avatar-row"],[4,"ngFor","ngForOf"],[1,"avatar",3,"src","alt"],[1,"grid-container"],["class","grid-card",4,"ngFor","ngForOf"],[1,"grid-card"],[1,"card-title"],["class","card-language",4,"ngIf"],[1,"card-language"],[1,"circle"]],template:function(r,o){r&1&&(a(0,"div",0),p(1,ei,2,1,"div",1)(2,ti,12,3,"div",2),s(),a(3,"div"),p(4,oi,6,2,"div",3)(5,li,5,2,"div",3),s(),f(6,"app-spinner",4)),r&2&&(l(1),d("ngIf",o.user),l(1),d("ngIf",o.user),l(2),d("ngIf",o.userFollowers),l(1),d("ngIf",o.userRepos),l(1),d("show",o.loading))},dependencies:[W,x,dt],styles:[".user-item[_ngcontent-%COMP%]{display:flex;border:1px solid #ddd;border-radius:5px;overflow:hidden}.user-item[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:center}.user-item[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%}.user-item[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{flex:4;padding:20px}.user-item[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{display:flex;align-items:center;color:#333}.user-item[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:10px}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.grid-card[_ngcontent-%COMP%]{padding:5px 15px;border:1px solid #ddd;border-radius:5px;overflow:hidden;box-shadow:0 0 10px #0000001a;color:#3178c6}.grid-card[_ngcontent-%COMP%]   .card-language[_ngcontent-%COMP%]{display:flex;align-items:center}.grid-card[_ngcontent-%COMP%]   .card-language[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{display:inline-block;height:15px;width:15px;background:#3178c6;border-radius:50%;margin:0 5px}.avatar-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.avatar[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#3498db;border-radius:50%;margin-right:10px}"]});let t=e;return t})();var ft=(()=>{let e=class e{constructor(i){this.router=i}intercept(i,r){let o=i.clone({setHeaders:{"Content-Type":"application/json",Authorization:"Bearer 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"}});return r.handle(o).pipe(ye(c=>c instanceof Oe?(c.status===401&&this.router.navigate(["access-denied"]),c.status===403&&this.router.navigate(["access-denied"]),c.status,ee(()=>new Error("Error: "+c))):ee(()=>new Error("Error: "+c))),De(()=>{}))}};e.\u0275fac=function(r){return new(r||e)(H(z))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Xi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-access-denied"]],decls:10,vars:0,consts:[[1,"access-denied"],["href","https://docs.github.com/en/rest?apiVersion=2022-11-28"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"h2"),u(2,"Access Denied"),s(),a(3,"p"),u(4,"You don't have permission to access this page. "),f(5,"br"),u(6," Check out the "),a(7,"a",1),u(8," GitHub API "),s(),u(9," documentation for more details ."),s()())},styles:[".access-denied[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.access-denied[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff5733}.access-denied[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#555}"]});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({providers:[{provide:Ne,useClass:ft,multi:!0}],imports:[q,st]});let t=e;return t})();var ui=[{path:"",component:ct},{path:":username",component:ht}],mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({imports:[le.forChild(ui),le]});let t=e;return t})();var En=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({imports:[q,pt,mt,Te]});let t=e;return t})();export{Xi as a,ft as b,mt as c,En as d};
