(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2,7,11],{467:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("847919fa",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,required:!0},big:{type:Boolean,default:!1},anim:{type:Boolean,default:!1}},mounted:function(){if(this.anim){var t=this.$scrollmagic.scene({triggerElement:this.$refs.fadeAnim,reverse:!1}).setClassToggle(this.$refs.fadeAnim,"fade-in");this.$scrollmagic.addScene(t)}}},l=(n(469),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"fadeAnim",class:(t.anim?"fade":"")+" font-size-"+(t.big?16:12)+" lh-"+(t.big?32:26)+" ls-2-0 text-pre-line"},[t._v(t._s(t.text))])}),[],!1,null,"6a15cb02",null);e.default=component.exports},469:function(t,e,n){"use strict";n(467)},470:function(t,e,n){var r=n(20)(!1);r.push([t.i,".fade[data-v-6a15cb02]{opacity:0;transform:translateY(40px);transition:all 1s cubic-bezier(.155,.91,.695,.95)}.fade-in[data-v-6a15cb02]{opacity:1;transform:translate(0)}",""]),t.exports=r},471:function(t,e,n){"use strict";n.r(e);n(19);var r={props:{num:{type:[Number,String],required:!0},text:{type:String,required:!0}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mr-2 color-main color-white--text font-family-en font-size-10 font-weight-bold lh-18 radius-circle text-center",staticStyle:{width:"18px"}},[t._v(t._s(t.num))]),t._v(" "),n("div",{staticClass:"font-family-en font-size-12 font-weight-medium"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,n){"use strict";n.r(e);n(19);var r=n(471),l=n(217),m=n(468),c=n(218),o={components:{NumberText:r.default,SubTitle:l.default,DetailText:m.default,FadeAnimation:c.default},props:{num:{type:[Number,String],required:!0},numText:{type:[String],required:!0},title:{type:String,required:!0},text:{type:String,required:!0},link:{type:String},width:{type:[Number,String]}}},d=n(13),x=n(28),f=n.n(x),v=n(465),h=n(75),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"transparent",attrs:{"max-width":t.width}},[n("fade-animation",[n("number-text",{staticClass:"mb-2 mb-sm-6",attrs:{num:t.num,text:t.numText}}),t._v(" "),n("sub-title",{staticClass:"mb-4 mb-sm-6",attrs:{h3:"",title:t.title}})],1),t._v(" "),n("fade-animation",[n("detail-text",{attrs:{text:t.text}}),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-sm-start"},[t.link?n("v-btn",{staticClass:"mt-6 font-size-10",staticStyle:{"z-index":"1000"},attrs:{to:t.link,nuxt:"",dark:"",rounded:"",color:"primary",width:"160",height:"41"}},[t._v("詳しくみる")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VSheet:h.a})},485:function(t,e,n){"use strict";n.r(e);var r=n(126),l=n(214),m=n(218),c=n(468),o=n(215),d=n(125),x=n(217),f=n(472),v={components:{WidthFull:r.default,WidthBase:l.default,FadeAnimation:m.default,DetailText:c.default,SvgAnimation:o.default,VImgSet:d.default,SubTitle:x.default,DescriptionContent:f.default}},h=n(13),w=n(28),_=n.n(w),C=n(75),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-full",[n("section",{attrs:{id:"web"}},[n("width-base",{staticClass:"relative mb-8",attrs:{"px-sm":"0"}},[n("description-content",{staticClass:"mb-8 mb-sm-16",attrs:{num:"1",title:t.$t("marketing.web.title"),"num-text":t.$t("marketing.web.subTitle"),text:t.$t("marketing.web.text")}}),t._v(" "),n("fade-animation",[n("detail-text",{attrs:{text:t.$t("marketing.web.text2")}})],1)],1)],1),t._v(" "),t.$isMobile()?n("section",[n("svg-animation",{attrs:{top:"-820",left:"-1080",width:"2880",height:"2880",fill:t.$config.color.yellow,svg:t.$config.svg.c}}),t._v(" "),n("width-base",{staticClass:"relative pt-8 mb-16",attrs:{"px-sm":"0"}},[n("v-img-set",{staticClass:"mx-auto my-8",attrs:{src:"/img/img-mc-01.png",width:"311"}}),t._v(" "),n("div",{staticClass:"mb-12"},[n("fade-animation",[n("sub-title",{staticClass:"mb-4 color-orange--text",attrs:{h3:"",title:t.$t("marketing.web.pdca.title_sp")}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.pdca.text")}})],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("fade-animation",[n("sub-title",{staticClass:"mb-4 color-orange--text lighten",attrs:{h3:"",title:t.$t("marketing.web.plan.title_sp")}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.plan.text")}})],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("fade-animation",[n("sub-title",{staticClass:"mb-4 color-amber--text",attrs:{h3:"",title:t.$t("marketing.web.issue.title_sp")}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.issue.text")}})],1)],1),t._v(" "),n("div",{staticClass:"mb-12"},[n("fade-animation",[n("sub-title",{staticClass:"mb-4 color-amber--text lighten",attrs:{h3:"",title:t.$t("marketing.web.ux.title_sp")}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.ux.text")}})],1)],1)],1)],1):n("section",[n("svg-animation",{attrs:{top:"-760",left:"-760",width:"2880",height:"2880",fill:t.$config.color.yellow,svg:t.$config.svg.c}}),t._v(" "),n("v-img-set",{staticClass:"absolute",staticStyle:{top:"700px",right:"0"},attrs:{src:"/img/img_02_2.png",width:"360"}}),t._v(" "),n("width-base",{staticClass:"relative pt-32 mb-64",attrs:{"px-sm":"0"}},[n("div",{staticClass:"d-flex justify-space-between"},[n("v-sheet",{staticClass:"transparent",attrs:{"max-width":"448"}},[n("fade-animation",[n("sub-title",{staticClass:"mb-8 color-orange--text",attrs:{title:t.$t("marketing.web.pdca.title"),"font-size-sm":"24"}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.pdca.text")}})],1)],1),t._v(" "),n("v-sheet",{staticClass:"transparent",attrs:{"max-width":"448"}},[n("fade-animation",[n("sub-title",{staticClass:"mb-8 color-orange--text lighten",attrs:{title:t.$t("marketing.web.plan.title"),"font-size-sm":"24"}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.plan.text")}})],1)],1)],1),t._v(" "),n("v-img-set",{staticClass:"mx-auto my-8",attrs:{src:"/img/img-mc-01.png",width:"660"}}),t._v(" "),n("div",{staticClass:"d-flex justify-space-between"},[n("v-sheet",{staticClass:"transparent",attrs:{"max-width":"448"}},[n("fade-animation",[n("sub-title",{staticClass:"mb-8 color-amber--text",attrs:{title:t.$t("marketing.web.issue.title"),"font-size-sm":"24"}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.issue.text")}})],1)],1),t._v(" "),n("v-sheet",{staticClass:"transparent",attrs:{"max-width":"448"}},[n("fade-animation",[n("sub-title",{staticClass:"mb-8 color-amber--text lighten",attrs:{title:t.$t("marketing.web.ux.title"),"font-size-sm":"24"}}),t._v(" "),n("detail-text",{attrs:{text:t.$t("marketing.web.ux.text")}})],1)],1)],1)],1)],1),t._v(" "),n("section",{attrs:{id:"instagram"}},[n("width-base",{staticClass:"relative mb-16 mb-sm-32",attrs:{"px-sm":"0"}},[n("description-content",{staticClass:"mb-8 mb-sm-16",attrs:{num:"2",title:t.$t("marketing.instagram.title"),"num-text":t.$t("marketing.instagram.subTitle"),text:t.$t("marketing.instagram.text")}}),t._v(" "),n("fade-animation",[n("detail-text",{staticClass:"mb-8 mb-sm-24",attrs:{text:t.$t("marketing.instagram.text2")}})],1),t._v(" "),n("v-img-set",{staticClass:"mx-auto",attrs:{src:"/img/img-mc-03.png",width:"776"}})],1)],1),t._v(" "),n("section",{attrs:{id:"cream"}},[n("width-base",{staticClass:"relative",attrs:{"px-sm":"0"}},[n("description-content",{staticClass:"mb-8 mb-sm-16",attrs:{num:"3",title:t.$t("marketing.cream.title"),"num-text":t.$t("marketing.cream.subTitle"),text:t.$t("marketing.cream.text")}}),t._v(" "),n("fade-animation",[n("detail-text",{staticClass:"mb-8 mb-sm-24",attrs:{text:t.$t("marketing.cream.text2")}})],1),t._v(" "),n("v-img-set",{staticClass:"mx-auto",attrs:{src:"/img/img-mc-04.png",width:"528"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;_()(component,{VSheet:C.a})}}]);