(window.webpackJsonp=window.webpackJsonp||[]).push([[26,2,7,8,9,11,12,15,16],{467:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("847919fa",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("70728ac0",content,!0,{sourceMap:!1})},469:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,required:!0},big:{type:Boolean,default:!1},anim:{type:Boolean,default:!1}},mounted:function(){if(this.anim){var t=this.$scrollmagic.scene({triggerElement:this.$refs.fadeAnim,reverse:!1}).setClassToggle(this.$refs.fadeAnim,"fade-in");this.$scrollmagic.addScene(t)}}},l=(n(470),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"fadeAnim",class:(t.anim?"fade":"")+" font-size-"+(t.big?16:12)+" lh-"+(t.big?32:26)+" ls-2-0 text-pre-line"},[t._v(t._s(t.text))])}),[],!1,null,"6a15cb02",null);e.default=component.exports},470:function(t,e,n){"use strict";n(467)},471:function(t,e,n){var r=n(20)(!1);r.push([t.i,".fade[data-v-6a15cb02]{opacity:0;transform:translateY(40px);transition:all 1s cubic-bezier(.155,.91,.695,.95)}.fade-in[data-v-6a15cb02]{opacity:1;transform:translate(0)}",""]),t.exports=r},472:function(t,e,n){"use strict";n(468)},473:function(t,e,n){var r=n(20)(!1);r.push([t.i,".sprite-anim[data-v-578dcac4]{background-position:0 100%;-webkit-animation:sprite-data-v-578dcac4 var(--anim-sec) steps(var(--anim-steps)) 1;animation:sprite-data-v-578dcac4 var(--anim-sec) steps(var(--anim-steps)) 1}@-webkit-keyframes sprite-data-v-578dcac4{0%{background-position:0 0}to{background-position:0 var(--anim-height)}}@keyframes sprite-data-v-578dcac4{0%{background-position:0 0}to{background-position:0 var(--anim-height)}}",""]),t.exports=r},474:function(t,e,n){"use strict";n.r(e);n(19);var r={props:{src:{type:String,required:!0},width:{type:[String,Number],required:!0},height:{type:[String,Number],required:!0},steps:{type:[String,Number],required:!0}},computed:{styles:function(){return{"--anim-sec":"".concat(.025*this.steps,"s"),"--anim-steps":this.steps,"--anim-height":"-".concat(this.height*this.steps,"px"),width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),"background-image":"url(".concat(this.src,")"),"background-size":"100% auto","background-repeat":"no-repeat"}}},mounted:function(){var t=this.$scrollmagic.scene({triggerElement:this.$refs.spriteImg}).setClassToggle(this.$refs.spriteImg,"sprite-anim");this.$scrollmagic.addScene(t)}},l=(n(472),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"spriteImg",style:t.styles})}),[],!1,null,"578dcac4",null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);n(19);var r={props:{num:{type:[Number,String],required:!0},text:{type:String,required:!0}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mr-2 color-main color-white--text font-family-en font-size-10 font-weight-bold lh-18 radius-circle text-center",staticStyle:{width:"18px"}},[t._v(t._s(t.num))]),t._v(" "),n("div",{staticClass:"font-family-en font-size-12 font-weight-medium"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);n(19);var r=n(475),l=n(217),o=n(469),c=n(218),d={components:{NumberText:r.default,SubTitle:l.default,DetailText:o.default,FadeAnimation:c.default},props:{num:{type:[Number,String],required:!0},numText:{type:[String],required:!0},title:{type:String,required:!0},text:{type:String,required:!0},link:{type:String},width:{type:[Number,String]}}},m=n(13),f=n(28),h=n.n(f),v=n(465),w=n(75),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"transparent",attrs:{"max-width":t.width}},[n("fade-animation",[n("number-text",{staticClass:"mb-2 mb-sm-6",attrs:{num:t.num,text:t.numText}}),t._v(" "),n("sub-title",{staticClass:"mb-4 mb-sm-6",attrs:{h3:"",title:t.title}})],1),t._v(" "),n("fade-animation",[n("detail-text",{attrs:{text:t.text}}),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-sm-start"},[t.link?n("v-btn",{staticClass:"mt-6 font-size-10",attrs:{to:t.link,nuxt:"",dark:"",rounded:"",color:"primary",width:"160",height:"41"}},[t._v("詳しくみる")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VSheet:w.a})},477:function(t,e,n){"use strict";n.r(e);var r={props:{work:{type:Object,required:!0}},data:function(){return{open:!1}},methods:{openDialog:function(){this.work.dialog&&(this.open=!0)},close:function(){this.open=!1}}},l=n(13),o=n(28),c=n.n(o),d=n(460),m=n(462),f=n(155),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticStyle:{overflow:"hidden"},attrs:{href:t.work.link||"",target:"_blank",width:"100%"},on:{click:t.openDialog}},[n("v-img",{attrs:{src:t.work.src,width:"100%","aspect-ratio":"1"}}),t._v(" "),t.work.dialog?n("v-dialog",{attrs:{value:t.open,transition:"fade-transition","max-width":"960"},on:{"click:outside":t.close}},[n("v-card",{staticClass:"pa-4 px-sm-16 py-sm-8",staticStyle:{"border-radius":"16px"}},[n("div",[n("v-img",{attrs:{src:t.work.dialog.src,width:"100%"}})],1),t._v(" "),t.work.dialog.text?n("div",{staticClass:"pt-4 pt-sm-8 text-center font-size-12 ls-2-0"},[n("a",{staticClass:"text-no-decoration",attrs:{href:t.work.dialog.link,target:"_blank"}},[t._v(t._s(t.work.dialog.text))])]):t._e()])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VDialog:m.a,VImg:f.a})},478:function(t,e,n){"use strict";n.r(e);var r=n(214),l=n(477),o=n(216),c={components:{WidthBase:r.default,WorkCard:l.default,HeadLine:o.default},props:{works:{type:Array,default:function(){return[]}}}},d=n(13),m=n(28),f=n.n(m),h=n(455),v=n(466),w=n(456),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{directives:[{name:"show",rawName:"v-show",value:t.works.length>0,expression:"works.length > 0"}]},[n("section",[n("head-line",{staticClass:"mb-8 mb-sm-16 text-center",attrs:{h2:"","no-anim":"",title:t.$t("works.title"),"sub-title":t.$t("works.subTitle"),justify:"center"}}),t._v(" "),n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{justify:t.$isMobile()&&t.works.length<2||!t.$isMobile()&&t.works.length<3?"center":"start"}},t._l(t.works,(function(t){return n("v-col",{key:t.src,attrs:{cols:"6",sm:"4"}},[n("work-card",{attrs:{work:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:h.a,VContainer:v.a,VRow:w.a})},483:function(t,e,n){"use strict";n.r(e);var r=n(214),l=n(215),o=n(216),c={components:{WidthBase:r.default,SvgAnimation:l.default,HeadLine:o.default}},d=n(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{attrs:{"px-sm":"0"}},[t.$isMobile()?n("svg-animation",{staticClass:"absolute",attrs:{top:"-280",left:"-220",width:"480",height:"480",fill:t.$config.color.orange,svg:t.$config.svg.b}}):n("svg-animation",{staticClass:"absolute",attrs:{top:"-600",left:"-350",width:"1000",height:"1000",fill:t.$config.color.yellow,svg:t.$config.svg.b}}),t._v(" "),n("head-line",{class:["mt-sm-16",{"pt-24":t.$isMobile()}],attrs:{h1:"",title:t.$t(t.$isMobile()?"design.title_sp":"design.title"),"sub-title":t.$t("design.subTitle"),text:t.$t("design.text")}})],1)}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,n){"use strict";n.r(e);var r=n(214),l=n(215),o=n(474),c=n(476),d={components:{WidthBase:r.default,SvgAnimation:l.default,SpriteAnimation:o.default,DescriptionContent:c.default}},m=n(13),f=n(28),h=n.n(f),v=n(455),w=n(466),x=n(456),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-base",{attrs:{"px-sm":"0"}},[n("v-container",{staticClass:"px-0",attrs:{fluid:""}},[n("v-row",{staticClass:"pb-64 pb-sm-48 flex-sm-row-reverse",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"relative pb-8 pb-sm-0 px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[t.$isMobile()?n("svg-animation",{attrs:{top:"-350",left:"-70",width:"460",height:"460",fill:t.$config.color.orange,svg:t.$config.svg.a}}):n("svg-animation",{attrs:{top:"-180",right:"-60",width:"600",height:"600",fill:t.$config.color.orange,svg:t.$config.svg.a}}),t._v(" "),t.$isMobile()?n("sprite-animation",{staticClass:"absolute",staticStyle:{top:"-300px"},attrs:{src:"/img/img_05.png",width:"360",height:"360",steps:"17"}}):n("sprite-animation",{staticClass:"absolute",staticStyle:{top:"-60px",left:"60px"},attrs:{src:"/img/img_05.png",width:"360",height:"360",steps:"17"}})],1),t._v(" "),n("v-col",{staticClass:"relative px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[n("description-content",{attrs:{width:"100%",num:"1",title:t.$t("design.consulting.title"),"num-text":t.$t("design.consulting.subTitle"),text:t.$t("design.consulting.text")}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"relative pb-8 pb-sm-0 px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[t.$isMobile()?n("svg-animation",{attrs:{top:"-330",left:"-80",width:"480",height:"480",fill:t.$config.color.amber,svg:t.$config.svg.c}}):n("svg-animation",{attrs:{top:"-160",left:"-100",width:"600",height:"600",fill:t.$config.color.amber,svg:t.$config.svg.c}}),t._v(" "),t.$isMobile()?n("sprite-animation",{staticClass:"absolute",staticStyle:{top:"-280px"},attrs:{src:"/img/img_08.png",width:"360",height:"360",steps:"22"}}):n("sprite-animation",{staticClass:"absolute",staticStyle:{top:"-40px"},attrs:{src:"/img/img_08.png",width:"360",height:"360",steps:"22"}})],1),t._v(" "),n("v-col",{staticClass:"relative px-0 px-sm-3",attrs:{cols:"12",sm:"6"}},[n("description-content",{attrs:{width:"100%",num:"2",title:t.$t("design.creative.title"),"num-text":t.$t("design.creative.subTitle"),text:t.$t("design.creative.text")}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCol:v.a,VContainer:w.a,VRow:x.a})},504:function(t,e,n){"use strict";n.r(e);var r=n(125),l=n(478),o=n(483),c=n(484),d={components:{WidthFull:r.default,WorkList:l.default,DesignOverview:o.default,DesignList:c.default}},m=n(13),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("width-full",[n("section",[n("design-overview",{staticClass:"mb-64 mb-sm-48"})],1),t._v(" "),n("section",[n("design-list",{staticClass:"mb-16 mb-sm-32"})],1),t._v(" "),n("section",[n("work-list",{staticClass:"mb-32",attrs:{works:t.$config.list.works.design}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);