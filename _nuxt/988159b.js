(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,7,11],{467:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("847919fa",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n.r(e);var l={props:{text:{type:String,required:!0},big:{type:Boolean,default:!1},anim:{type:Boolean,default:!1}},mounted:function(){if(this.anim){var t=this.$scrollmagic.scene({triggerElement:this.$refs.fadeAnim,reverse:!1}).setClassToggle(this.$refs.fadeAnim,"fade-in");this.$scrollmagic.addScene(t)}}},r=(n(469),n(13)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"fadeAnim",class:(t.anim?"fade":"")+" font-size-"+(t.big?16:12)+" lh-"+(t.big?32:26)+" ls-2-0 text-pre-line"},[t._v(t._s(t.text))])}),[],!1,null,"6a15cb02",null);e.default=component.exports},469:function(t,e,n){"use strict";n(467)},470:function(t,e,n){var l=n(20)(!1);l.push([t.i,".fade[data-v-6a15cb02]{opacity:0;transform:translateY(40px);transition:all 1s cubic-bezier(.155,.91,.695,.95)}.fade-in[data-v-6a15cb02]{opacity:1;transform:translate(0)}",""]),t.exports=l},471:function(t,e,n){"use strict";n.r(e);n(19);var l={props:{num:{type:[Number,String],required:!0},text:{type:String,required:!0}}},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mr-2 color-main color-white--text font-family-en font-size-10 font-weight-bold lh-18 radius-circle text-center",staticStyle:{width:"18px"}},[t._v(t._s(t.num))]),t._v(" "),n("div",{staticClass:"font-family-en font-size-12 font-weight-medium"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,n){"use strict";n.r(e);n(19);var l=n(471),r=n(217),o=n(468),c=n(218),m={components:{NumberText:l.default,SubTitle:r.default,DetailText:o.default,FadeAnimation:c.default},props:{num:{type:[Number,String],required:!0},numText:{type:[String],required:!0},title:{type:String,required:!0},text:{type:String,required:!0},link:{type:String},width:{type:[Number,String]}}},d=n(13),f=n(28),v=n.n(f),x=n(465),h=n(75),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"transparent",attrs:{"max-width":t.width}},[n("fade-animation",[n("number-text",{staticClass:"mb-2 mb-sm-6",attrs:{num:t.num,text:t.numText}}),t._v(" "),n("sub-title",{staticClass:"mb-4 mb-sm-6",attrs:{h3:"",title:t.title}})],1),t._v(" "),n("fade-animation",[n("detail-text",{attrs:{text:t.text}}),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-sm-start"},[t.link?n("v-btn",{staticClass:"mt-6 font-size-10",attrs:{to:t.link,nuxt:"",dark:"",rounded:"",color:"primary",width:"160",height:"41"}},[t._v("詳しくみる")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:x.a,VSheet:h.a})},483:function(t,e,n){"use strict";n.r(e);var l=n(214),r=n(215),o=n(125),c=n(472),m={components:{WidthBase:l.default,SvgAnimation:r.default,VImgSet:o.default,DescriptionContent:c.default}},d=n(13),f=n(28),v=n.n(f),x=n(455),h=n(466),_=n(456),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{attrs:{"px-sm":"0"}},[n("v-container",{staticClass:"px-0",attrs:{fluid:""}},[n("v-row",{staticClass:"pb-64 pb-sm-48 flex-sm-row-reverse",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"relative pb-8 pb-sm-0 px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[t.$isMobile()?n("svg-animation",{attrs:{top:"-350",left:"-70",width:"460",height:"460",fill:t.$config.color.orange,svg:t.$config.svg.a}}):n("svg-animation",{attrs:{top:"-180",right:"-60",width:"600",height:"600",fill:t.$config.color.orange,svg:t.$config.svg.a}}),t._v(" "),t.$isMobile()?n("v-img-set",{staticClass:"absolute",staticStyle:{top:"-280px"},attrs:{src:"/img/img_05_2.png",width:"360"}}):n("v-img-set",{staticClass:"absolute",staticStyle:{top:"-60px",left:"60px"},attrs:{src:"/img/img_05_2.png",width:"360"}})],1),t._v(" "),n("v-col",{staticClass:"relative px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[n("description-content",{attrs:{width:"100%",num:"1",title:t.$t("design.consulting.title"),"num-text":t.$t("design.consulting.subTitle"),text:t.$t("design.consulting.text")}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"relative pb-8 pb-sm-0 px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[t.$isMobile()?n("svg-animation",{attrs:{top:"-330",left:"-80",width:"480",height:"480",fill:t.$config.color.amber,svg:t.$config.svg.c}}):n("svg-animation",{attrs:{top:"-160",left:"-100",width:"600",height:"600",fill:t.$config.color.amber,svg:t.$config.svg.c}}),t._v(" "),t.$isMobile()?n("v-img-set",{staticClass:"absolute",staticStyle:{top:"-240px"},attrs:{src:"/img/img_08_2.png",width:"360"}}):n("v-img-set",{staticClass:"absolute",staticStyle:{top:"-40px"},attrs:{src:"/img/img_08_2.png",width:"360"}})],1),t._v(" "),n("v-col",{staticClass:"relative px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[n("description-content",{attrs:{width:"100%",num:"2",title:t.$t("design.creative.title"),"num-text":t.$t("design.creative.subTitle"),text:t.$t("design.creative.text")}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:x.a,VContainer:h.a,VRow:_.a})}}]);