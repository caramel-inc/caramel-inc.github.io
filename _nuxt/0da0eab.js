(window.webpackJsonp=window.webpackJsonp||[]).push([[29,2,7,9,11,12,19,20],{467:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("847919fa",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,required:!0},big:{type:Boolean,default:!1},anim:{type:Boolean,default:!1}},mounted:function(){if(this.anim){var t=this.$scrollmagic.scene({triggerElement:this.$refs.fadeAnim,reverse:!1}).setClassToggle(this.$refs.fadeAnim,"fade-in");this.$scrollmagic.addScene(t)}}},l=(n(469),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"fadeAnim",class:(t.anim?"fade":"")+" font-size-"+(t.big?16:12)+" lh-"+(t.big?32:26)+" ls-2-0 text-pre-line"},[t._v(t._s(t.text))])}),[],!1,null,"6a15cb02",null);e.default=component.exports},469:function(t,e,n){"use strict";n(467)},470:function(t,e,n){var r=n(20)(!1);r.push([t.i,".fade[data-v-6a15cb02]{opacity:0;transform:translateY(40px);transition:all 1s cubic-bezier(.155,.91,.695,.95)}.fade-in[data-v-6a15cb02]{opacity:1;transform:translate(0)}",""]),t.exports=r},471:function(t,e,n){"use strict";n.r(e);n(19);var r={props:{num:{type:[Number,String],required:!0},text:{type:String,required:!0}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mr-2 color-main color-white--text font-family-en font-size-10 font-weight-bold lh-18 radius-circle text-center",staticStyle:{width:"18px"}},[t._v(t._s(t.num))]),t._v(" "),n("div",{staticClass:"font-family-en font-size-12 font-weight-medium"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,n){"use strict";n.r(e);n(19);var r=n(471),l=n(217),o=n(468),c=n(218),d={components:{NumberText:r.default,SubTitle:l.default,DetailText:o.default,FadeAnimation:c.default},props:{num:{type:[Number,String],required:!0},numText:{type:[String],required:!0},title:{type:String,required:!0},text:{type:String,required:!0},link:{type:String},width:{type:[Number,String]}}},f=n(13),m=n(28),v=n.n(m),h=n(465),w=n(75),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"transparent",attrs:{"max-width":t.width}},[n("fade-animation",[n("number-text",{staticClass:"mb-2 mb-sm-6",attrs:{num:t.num,text:t.numText}}),t._v(" "),n("sub-title",{staticClass:"mb-4 mb-sm-6",attrs:{h3:"",title:t.title}})],1),t._v(" "),n("fade-animation",[n("detail-text",{attrs:{text:t.text}}),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-sm-start"},[t.link?n("v-btn",{staticClass:"mt-6 font-size-10",staticStyle:{"z-index":"1000"},attrs:{to:t.link,nuxt:"",dark:"",rounded:"",color:"primary",width:"160",height:"41"}},[t._v("詳しくみる")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VSheet:w.a})},473:function(t,e,n){"use strict";n.r(e);var r={props:{work:{type:Object,required:!0}},data:function(){return{open:!1}},methods:{openDialog:function(){this.work.dialog&&(this.open=!0)},close:function(){this.open=!1}}},l=n(13),o=n(28),c=n.n(o),d=n(460),f=n(462),m=n(155),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticStyle:{overflow:"hidden"},attrs:{href:t.work.link||"",target:"_blank",width:"100%"},on:{click:t.openDialog}},[n("v-img",{attrs:{src:t.work.src,width:"100%","aspect-ratio":"1"}}),t._v(" "),t.work.dialog?n("v-dialog",{attrs:{value:t.open,transition:"fade-transition","max-width":"960"},on:{"click:outside":t.close}},[n("v-card",{staticClass:"pa-4 px-sm-16 py-sm-8",staticStyle:{"border-radius":"16px"}},[n("div",[n("v-img",{attrs:{src:t.work.dialog.src,width:"100%"}})],1),t._v(" "),t.work.dialog.text?n("div",{staticClass:"pt-4 pt-sm-8 text-center font-size-12 ls-2-0"},[n("a",{staticClass:"text-no-decoration",attrs:{href:t.work.dialog.link,target:"_blank"}},[t._v(t._s(t.work.dialog.text))])]):t._e()])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VDialog:f.a,VImg:m.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(214),l=n(473),o=n(216),c={components:{WidthBase:r.default,WorkCard:l.default,HeadLine:o.default},props:{works:{type:Array,default:function(){return[]}}}},d=n(13),f=n(28),m=n.n(f),v=n(455),h=n(466),w=n(456),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{directives:[{name:"show",rawName:"v-show",value:t.works.length>0,expression:"works.length > 0"}]},[n("section",[n("head-line",{staticClass:"mb-8 mb-sm-16 text-center",attrs:{h2:"","no-anim":"",title:t.$t("works.title"),"sub-title":t.$t("works.subTitle"),justify:"center"}}),t._v(" "),n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{justify:t.$isMobile()&&t.works.length<2||!t.$isMobile()&&t.works.length<3?"center":"start"}},t._l(t.works,(function(t){return n("v-col",{key:t.src,attrs:{cols:"6",sm:"4"}},[n("work-card",{attrs:{work:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCol:v.a,VContainer:h.a,VRow:w.a})},486:function(t,e,n){"use strict";n.r(e);var r=n(214),l=n(215),o=n(216),c={components:{WidthBase:r.default,SvgAnimation:l.default,HeadLine:o.default}},d=n(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{attrs:{"px-sm":"0"}},[t.$isMobile()?n("svg-animation",{staticClass:"absolute",attrs:{top:"-280",left:"-220",width:"480",height:"480",fill:t.$config.color.orange,svg:t.$config.svg.b}}):n("svg-animation",{staticClass:"absolute",attrs:{top:"-628",right:"-260",width:"900",height:"900",fill:t.$config.color.orange,svg:t.$config.svg.b}}),t._v(" "),n("head-line",{class:["mt-sm-16",{"pt-24":t.$isMobile()}],attrs:{h1:"",title:t.$t("newbiz.title"),"sub-title":t.$t("newbiz.subTitle"),text:t.$t("newbiz.text")}})],1)}),[],!1,null,null,null);e.default=component.exports},487:function(t,e,n){"use strict";n.r(e);var r=n(214),l=n(215),o=n(125),c=n(472),d={components:{WidthBase:r.default,SvgAnimation:l.default,VImgSet:o.default,DescriptionContent:c.default}},f=n(13),m=n(28),v=n.n(m),h=n(455),w=n(466),x=n(456),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{attrs:{"px-sm":"0"}},[n("v-container",{staticClass:"px-0",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"relative pb-8 pb-sm-0 px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[t.$isMobile()?n("svg-animation",{attrs:{top:"-340",left:"-100",width:"500",height:"500",fill:t.$config.color.amber,svg:t.$config.svg.c}}):n("svg-animation",{attrs:{top:"-280",left:"-220",width:"800",height:"800",fill:t.$config.color.amber,svg:t.$config.svg.c}}),t._v(" "),t.$isMobile()?n("v-img-set",{staticClass:"absolute",staticStyle:{top:"-290px"},attrs:{src:"/img/img_03_2.png",width:"360"}}):n("v-img-set",{staticClass:"absolute",staticStyle:{top:"-80px",left:"0px"},attrs:{src:"/img/img_03_2.png",width:"360"}})],1),t._v(" "),n("v-col",{staticClass:"relative px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[n("description-content",{attrs:{width:"100%",num:"1",title:t.$t("newbiz.development.title"),"num-text":t.$t("newbiz.development.subTitle"),text:t.$t("newbiz.development.text")}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:h.a,VContainer:w.a,VRow:x.a})},506:function(t,e,n){"use strict";n.r(e);var r=n(126),l=n(474),o=n(486),c=n(487),d={components:{WidthFull:r.default,WorkList:l.default,NewbizOverview:o.default,NewbizList:c.default}},f=n(13),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-full",[n("section",[n("newbiz-overview",{staticClass:"mb-64 mb-sm-32"})],1),t._v(" "),n("section",[n("newbiz-list",{staticClass:"mb-16 mb-sm-32"})],1),t._v(" "),n("section",[n("work-list",{staticClass:"mb-32",attrs:{works:t.$config.list.works.newbiz}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);