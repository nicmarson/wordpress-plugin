(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b00731e"],{"0032":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{class:["idx-wp-icon","idx-wp-icon-"+e.icon,{"idx-wp-icon-spin":e.spin}],attrs:{role:"image","aria-hidden":"true",focusable:"false"}},[a("use",{attrs:{"xlink:href":"#"+e.icon}})])},n=[],s={name:"SvgIcon",props:{icon:{type:String,required:!0},spin:{type:Boolean,default:!1}}},o=s,i=(a("a4aa"),a("2877")),u=Object(i["a"])(o,r,n,!1,null,null,null);t["a"]=u.exports},"1e0b":function(e,t,a){},"33ff":function(e,t,a){},"480b":function(e,t,a){"use strict";a("d4c1")},"7a2e":function(e,t,a){"use strict";a("e35d")},"8be2":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-dialog",{attrs:{show:!0,customClass:"gs-dialog"},on:{dismiss:e.closeDialog},scopedSlots:e._u([{key:"header",fn:function(){return[a("idx-block",{attrs:{className:"dialog-header"}},[a("idx-block",{attrs:{className:"dialog-header__title"}},[e._v(e._s(e.title))]),a("idx-block",{attrs:{className:"dialog-header__dismiss"}},[a("span",{on:{click:e.closeDialog}},[e._v("Close ×")])])],1)]},proxy:!0}])},[a("ContentCard",{attrs:{steps:e.steps,cardTitle:e.cardTitle,relatedLinks:e.relatedLinks},on:{"back-step":function(t){return e.$emit("back-step")},"skip-step":function(t){return e.$emit("skip-step")},continue:function(t){return e.$emit("continue")}},scopedSlots:e._u([{key:"description",fn:function(){return[e._t("description")]},proxy:!0},{key:"controls",fn:function(){return[e._t("controls")]},proxy:!0}],null,!0)})],1)},n=[],s=a("5530"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-block",{attrs:{className:"content-card"}},[a("idx-block",{attrs:{className:"content-card__stepper"}},e._l(e.steps,(function(t){return a("idx-progress-stepper",e._b({key:t.name,scopedSlots:e._u([{key:"complete",fn:function(){return[a("svg-icon",{attrs:{icon:"check"}})]},proxy:!0},{key:"icon",fn:function(){return[a("svg-icon",{attrs:{icon:t.icon}})]},proxy:!0}],null,!0)},"idx-progress-stepper",Object.assign({},t),!1))})),1),a("idx-block",{attrs:{className:"content-card__content",role:"tabpanel"}},[a("h1",[e._v(e._s(e.cardTitle))]),e._t("description"),e._t("controls")],2),a("idx-block",{attrs:{className:"content-card__sidebar"}},[a("RelatedLinks",{attrs:{relatedLinks:e.relatedLinks}})],1),a("idx-block",{attrs:{className:"content-card__footer"}},[a("idx-block",{attrs:{className:"content-card__buttons"}},[a("idx-button",{attrs:{size:"lg",theme:"light"},on:{click:function(t){return e.$emit("back-step")}}},[e._v("← Back")]),a("idx-button",{attrs:{size:"lg",theme:"link",customClass:"btn-link"},on:{click:function(t){return e.$emit("skip-step")}}},[e._v("Skip")]),a("idx-button",{attrs:{size:"lg"},on:{click:function(t){return e.$emit("continue")}}},[e._v("Continue")])],1)],1)],1)},i=[],u=a("bb2b"),c=a("0032"),l={name:"ContentCard",components:{RelatedLinks:u["a"],SvgIcon:c["a"]},props:{cardTitle:{type:String,default:""},steps:{type:Array,default:function(){return[]}},relatedLinks:{type:Array,default:function(){return[]}}}},d=l,p=(a("eb98"),a("2877")),f=Object(p["a"])(d,o,i,!1,null,null,null),m=f.exports,g=a("2f62"),h={name:"GuidedSetupContentCard",components:{ContentCard:m},props:{cardTitle:{type:String,default:""},relatedLinks:{type:Array,default:function(){return[]}},steps:{type:Array,default:function(){return[]}}},data:function(){return{title:"IMPress for IDX Broker Setup"}},computed:Object(s["a"])({},Object(g["c"])({changedModules:"guidedSetup/changedModules"})),methods:Object(s["a"])(Object(s["a"])({},Object(g["b"])({setItem:"guidedSetup/setItem"})),{},{closeDialog:function(){for(var e=0;e<this.changedModules.length;e++)this.setItem({key:this.changedModules[e].module,value:{changes:{},module:this.changedModules[e].module,path:this.changedModules[e].path}});this.showDialog=!1,this.$router.push({path:"/settings/general"},(function(){location.reload()}))}})},b=h,_=(a("7a2e"),Object(p["a"])(b,r,n,!1,null,null,null));t["a"]=_.exports},a4aa:function(e,t,a){"use strict";a("33ff")},a762:function(e,t,a){"use strict";a("1e0b")},b387:function(e,t,a){"use strict";a("b64b");var r=a("ade3"),n=a("5530");t["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.$store.state[this.module]),this.formChanges),this.$store.state.guidedSetup[this.module].changes)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var t=Object(r["a"])({},e.key,e.value);this.formChanges=Object(n["a"])(Object(n["a"])({},this.formChanges),t)}},beforeRouteLeave:function(e,t,a){if(this.formIsUpdated){var r=window.confirm("Do you really want to leave? You have unsaved changes!");r?a():a(!1)}else a()}}},bb2b:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-card",[a("idx-card-header",[e._v(e._s(e.title))]),a("idx-card-body",[a("idx-list",{attrs:{unstyled:""}},e._l(e.relatedLinks,(function(t){return a("idx-list-item",{key:t.href},[a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])])})),1)],1)],1)},n=[],s={name:"RelatedLinks",props:{title:{type:String,default:"Related Links"},relatedLinks:{type:Array,default:function(){return[]}}}},o=s,i=(a("a762"),a("2877")),u=Object(i["a"])(o,r,n,!1,null,"c94edb7e",null);t["a"]=u.exports},bce2:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-block",{attrs:{tag:"fieldset",className:{"form-content":!0,"form-content--disabled":e.formDisabled}}},[a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("CSS Settings")]),a("p",[e._v("Here you can deregister the IMPress Agents CSS files and move to your theme's css file for ease of customization.")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.cssLabel)+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.deregisterMainCss,disabled:e.formDisabled,label:e.cssLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"deregisterMainCss",value:!e.deregisterMainCss})}}})],1)],1),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default Number of Posts")]),a("p",[e._v(" The default number of posts displayed on a employee archive page is 9. Here you can set a custom number. Enter -1 to display all employee posts. "),a("i",[e._v("If you have more than 20-30 posts, it's not recommended to show all or your page will load slow.")])])],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"number-of-posts"}},[e._v("Default Number of Posts")]),a("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"number-of-posts",value:e.numberOfPosts},on:{change:function(t){return e.$emit("form-field-update",{key:"numberOfPosts",value:t.target.value})}}})],1),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Directory Slug")]),a("p",[e._v(" Optionally change the slug of the employee post type. Don't forget to "),a("a",{attrs:{href:"../wp-admin/options-permalink.php",target:"_blank"}},[e._v(" reset your permalinks ")]),e._v(" if you change the slug! ")])],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"directory-slug"}},[e._v("Directory Slug")]),a("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"directory-slug",value:e.directorySlug},on:{change:function(t){return e.$emit("form-field-update",{key:"directorySlug",value:t.target.value})}}})],1),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Custom Wrapper")]),a("p",[e._v("Detailed sentence or two describing how custom wrappers can be used and how to set them up properly.")])],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"wrapper-start"}},[e._v("Wrapper Start HTML")]),a("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"wrapper-start",value:e.wrapperStart},on:{change:function(t){return e.$emit("form-field-update",{key:"wrapperStart",value:t.target.value})}}})],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"wrapper-end"}},[e._v("Wrapper End HTML")]),a("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"wrapper-end",value:e.wrapperEnd},on:{change:function(t){return e.$emit("form-field-update",{key:"wrapperEnd",value:t.target.value})}}})],1)],1)},n=[],s=(a("a9e3"),{name:"agentSettings",props:{deregisterMainCss:{type:Boolean,default:!1},numberOfPosts:{type:[String,Number],default:""},directorySlug:{type:String,default:"employees"},wrapperStart:{type:String,default:""},wrapperEnd:{type:String,default:""},formDisabled:{type:Boolean,default:!1}},created:function(){this.cssLabel="Deregister IMPress Agents Main CSS?"}}),o=s,i=(a("480b"),a("2877")),u=Object(i["a"])(o,r,n,!1,null,null,null);t["a"]=u.exports},d4c1:function(e,t,a){},d537:function(e,t,a){},e35d:function(e,t,a){},eb98:function(e,t,a){"use strict";a("d537")},ef74:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GuidedSetupContentCard",{attrs:{cardTitle:e.cardTitle,steps:e.guidedSetupSteps,relatedLinks:e.links},on:{"back-step":e.goBackStep,"skip-step":e.goSkipStep,continue:function(t){return e.saveHandler("agentSettings")}},scopedSlots:e._u([{key:"controls",fn:function(){return[a("AgentsSettings",e._b({attrs:{formDisabled:e.formDisabled},on:{"form-field-update":e.formUpdate}},"AgentsSettings",e.localStateValues,!1))]},proxy:!0}])})},n=[],s=(a("96cf"),a("1da1")),o=a("5530"),i=a("2f62"),u=a("12e8"),c=a("fa47"),l=a("b387"),d=a("8be2"),p=a("bce2"),f={inject:[u["a"].agentSettings.repo],name:"guided-setup-agents-configure",mixins:[c["a"],l["a"]],components:{AgentsSettings:p["a"],GuidedSetupContentCard:d["a"]},data:function(){return{formDisabled:!1}},computed:Object(o["a"])({},Object(i["d"])({guidedSetupSteps:function(e){return e.guidedSetup.guidedSetupSteps}})),methods:Object(o["a"])({},Object(i["b"])({progressStepperUpdate:"guidedSetup/progressStepperUpdate"})),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.module="agentSettings",e.cardTitle="Configure IMPress Agents",e.continuePath="/guided-setup/social-pro",e.skipPath="/guided-setup/social-pro",e.links=[{text:"IMPress Agents Features",href:"#agents-features"},{text:"IDX Broker Middleware",href:"https://middleware.idxbroker.com/mgmt/"},{text:"Sign up for IDX Broker",href:"#signUp"}],t.next=7,e.agentSettingsRepository.get();case 7:a=t.sent,r=a.data,e.updateState(r);case 10:case"end":return t.stop()}}),t)})))()},mounted:function(){this.progressStepperUpdate([4,5,2,0])}},m=f,g=a("2877"),h=Object(g["a"])(m,r,n,!1,null,null,null);t["default"]=h.exports},fa47:function(e,t,a){"use strict";var r=a("5530"),n=a("2f62");t["a"]={computed:Object(r["a"])({},Object(n["d"])({hasChanges:function(e){return e.guidedSetup.hasChanges}})),methods:{goBackStep:function(){this.$router.go(-1)},goSkipStep:function(){this.$router.push({path:this.skipPath})},updateState:function(e){for(var t in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:t,value:e[t]})},saveAction:function(){this.updateState(this.formChanges),this.formChanges={}},saveHandler:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.formIsUpdated?(this.$store.dispatch("guidedSetup/setItem",{key:"hasChanges",value:!0}),this.$store.dispatch("guidedSetup/setItem",{key:e,value:{changes:"omnibar"===e?this.localStateValues:this.formChanges,module:""!==t?t:this.module,path:a}}),this.formChanges={},this.$router.push({path:this.continuePath})):this.$router.push({path:this.continuePath})}},beforeRouteLeave:function(e,t,a){if("/settings/general"===e.path&&this.hasChanges){var r=window.confirm("Do you really want to leave? You have unsaved changes!");r?a():a(!1)}else a()}}}}]);
//# sourceMappingURL=chunk-8b00731e.04315b3a.js.map