(window.webpackJsonp=window.webpackJsonp||[]).push([[15,19],{532:function(t,e,n){},570:function(t,e,n){"use strict";var a=n(532);n.n(a).a},582:function(t,e,n){"use strict";n.r(e);var a={name:"HrSlider",props:{min:{type:String,default:"0"},max:{type:String,default:"100"},step:{type:String,default:"1"},value:{type:String,default:"0"},width:{type:String,default:"200"},disabled:{type:Boolean,default:!1}},methods:{handleRange:function(t){this.$emit("input",t.target.value)}},computed:{rangeColor:function(){var t=this.min,e=this.max,n=this.value;return{width:this.width+"px",backgroundSize:100*(n-t)/(e-t)+"% 100%"}},toolTip:function(){var t=this.min,e=this.max,n=this.value;return{left:(this.width-24)*(n-t<0?t:n-t)/(e-t)-1+"px"}}}},s=(n(570),n(4)),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hr-range",class:{disabled:t.disabled},style:{width:parseInt(t.width)+25+"px"}},[n("span",{staticClass:"hr-range-min"},[t._v(t._s(t.min))]),t._v(" "),n("input",{style:t.rangeColor,attrs:{type:"range",min:t.min,max:t.max,step:t.step,disabled:t.disabled,width:t.width},domProps:{value:t.value},on:{input:t.handleRange}}),t._v(" "),n("div",{staticClass:"hr-range-tooltip",style:t.toolTip},[t._v(t._s(t.value))]),t._v(" "),n("span",{staticClass:"hr-range-max",style:{left:parseInt(t.width)+35+"px"}},[t._v(t._s(t.max))]),n("br"),t._v(" "),n("span",{staticClass:"hr-range-content"},[t._t("content",[t._v("数字")])],2)])}),[],!1,null,null,null);e.default=i.exports},639:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{range:"-50",range1:"0",range2:"0"}},components:{HrSlider:n(582).default}},s=n(4),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show"},[n("h3",[t._v("1.可以设置最大值,最小值,步长,宽")]),t._v(" "),n("hr-slider",{attrs:{min:"-50",max:"50",step:"2",width:"300"},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}}),t._v(" "),n("h3",[t._v("可以设置滑块禁用")]),t._v(" "),n("hr-slider",{attrs:{disabled:""},model:{value:t.range1,callback:function(e){t.range1=e},expression:"range1"}}),t._v(" "),n("h3",[t._v("可以自定义滑块的信息")]),t._v(" "),n("hr-slider",{attrs:{min:"0",max:"1",step:"0.01"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v("透明度")]},proxy:!0}]),model:{value:t.range2,callback:function(e){t.range2=e},expression:"range2"}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);