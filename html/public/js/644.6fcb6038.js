"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[644],{3666:(e,t,n)=>{n.r(t);var o=n(4514),i=n(7295),l=n(259),s=n(8749),a=n(541),r=n(3914),c=n(5022),d=n(9509),p=n(6252),u=n(3577),h=n(9963);function b(e,t,n,o,i,l){const s=(0,p.up)("wwElement",!0),a=(0,p.up)("wwText"),r=(0,p.up)("wwLayoutItemContext"),c=(0,p.up)("OptionItem"),d=(0,p.up)("Multiselect");return l.isReadonly?((0,p.wg)(),(0,p.j4)(a,{key:1,text:l.valueLabel},null,8,["text"])):((0,p.wg)(),(0,p.j4)(d,(0,p.dG)({ref:"select",key:e.componentKey,modelValue:l.internalValue,"onUpdate:modelValue":t[0]||(t[0]=e=>l.internalValue=e),class:["ww-input-select",{editing:l.isEditing}],mode:"single",style:l.cssVariables,classes:{containerOpen:"is-open",containerOpenTop:"is-open-top"}},l.selectProps,{onClose:l.checkIsOpen}),{placeholder:(0,p.w5)((()=>[(0,p.Wm)(s,(0,p.dG)({class:"multiselect-placeholder-el"},n.content.placeholderElement,{"ww-props":{text:l.placeholder||""}}),null,16,["ww-props"])])),singlelabel:(0,p.w5)((({value:e})=>[(0,p._)("div",{class:"multiselect-single-label",style:(0,u.j5)(e.style||l.defaultOptionStyle)},[(0,p.Wm)(r,{index:e=>l.getValueIndex(e),item:{},"is-repeat":"",data:{...e,label:l.getLabel(e)}},{default:(0,p.w5)((()=>[(0,p.Wm)(a,{class:"multiselect-single-label-el",text:l.getLabel(e)},null,8,["text"])])),_:2},1032,["index","data"])],4)])),option:(0,p.w5)((({option:e})=>[(0,p.Wm)(r,{index:e=>l.getOptionIndex(e),item:{},"is-repeat":"",data:{...e,label:l.getLabel(e)}},{default:(0,p.w5)((()=>[(0,p.Wm)(c,{option:{...e,label:l.getLabel(e)},layoutType:n.content.layoutType,flexboxElement:n.content.flexboxElement,imageElement:n.content.imageElement,textElement:n.content.textElement},null,8,["option","layoutType","flexboxElement","imageElement","textElement"])])),_:2},1032,["index","data"])])),caret:(0,p.w5)((()=>[(0,p.Wm)(s,(0,u.vs)((0,p.F4)(n.content.caretIconElement)),null,16)])),clear:(0,p.w5)((()=>[(0,p.Wm)(s,(0,p.dG)(n.content.clearIconElement,{onMousedown:(0,h.iM)(l.clear,["prevent"])}),null,16,["onMousedown"])])),_:1},16,["modelValue","style","class","onClose"]))}var m=n(2085);function w(e,t,n,o,i,l){const s=(0,p.up)("wwElement");return"text"===n.layoutType?((0,p.wg)(),(0,p.j4)(s,(0,p.dG)({key:0,class:"multiselect-single-label-el"},n.textElement,{"ww-props":{text:n.option.label||""},states:o.optionStates}),null,16,["ww-props","states"])):((0,p.wg)(),(0,p.j4)(s,(0,p.dG)({key:1,class:"multiselect-single-label-el free-layout"},n.flexboxElement,{states:o.optionStates}),null,16,["states"]))}var g=n(2262),y={props:{option:{type:Object,required:!0},layoutType:{type:String,required:!0},textElement:{type:Object,required:!0},flexboxElement:{type:Object,required:!0}},setup(){const e=null,t=(0,g.iH)([]);return{observer:e,optionStates:t}},mounted(){const e=this.$el.parentElement;e&&(this.observer=new MutationObserver((e=>{for(const t of e){const e=t.target.getAttribute(t.attributeName);this.$nextTick((()=>{this.handleOntionState(e)}))}})),this.observer.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]}))},methods:{handleOntionState(e){e&&"string"===typeof e&&(e.includes("is-pointed")&&!e.includes("is-selected")?this.optionStates=[":hover"]:!e.includes("is-pointed")&&e.includes("is-selected")?this.optionStates=["Selected"]:e.includes("is-pointed")&&e.includes("is-selected")?this.optionStates=["Selected:hover"]:this.optionStates=[])}},beforeUnmount(){this.observer&&this.observer.disconnect()}},f=n(3744);const v=(0,f.Z)(y,[["render",w]]);var x=v;const O="label",S="value";var L={components:{Multiselect:m.Z,OptionItem:x},props:{uid:{type:String,required:!0},content:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["trigger-event","update:content","update:content:effect","add-state","remove-state"],setup(e){const{value:t,setValue:n}=wwLib.wwVariable.useComponentVariable({uid:e.uid,name:"value",type:"string",defaultValue:(0,p.Fl)((()=>e.content.initialValue?e.content.initialValue:""))}),o=(0,p.f3)("componentStyle"),i=(0,p.Fl)((()=>o.cursor));return{currentSelection:t,setCurrentSelection:n,cursor:i}},data:()=>({options:[],componentKey:0}),computed:{currentLang(){return wwLib.wwLang.lang},isEditing(){return!1},selectProps(){return{closeOnSelect:this.content.closeOnSelect,searchable:this.content.searchable,required:this.content.required,disabled:this.content.disabled,placeholder:"placeholder",canClear:this.content.clearIcon,canDeselect:this.content.canDeselect,caret:this.content.caretIcon,name:this.wwElementState.name,options:this.options,infinite:this.content.infiniteScroll,limit:this.content.limitedOptions?this.content.limit:-1,resolveOnLoad:!1,locale:this.currentLang}},internalValue:{get(){return this.content.allowCreation&&this.currentSelection&&!this.options.some((e=>e.value===this.currentSelection))&&this.options.push(this.formatOption(this.currentSelection)),this.currentSelection},set(e){this.setCurrentSelection(e),this.$emit("trigger-event",{name:"change",event:{domEvent:{},value:e}})}},placeholder(){return wwLib.wwLang.getText(this.content.placeholder)},valueLabel(){const e=this.options.find((e=>e.value==this.internalValue));return e?wwLib.wwLang.getText(e.label):this.internalValue},defaultOptionStyle(){return{backgroundColor:this.content.optionsDefaultBgColor,color:this.content.optionsDefaultTextColor}},cssVariables(){return{"--ms-dropdown-bg":this.content.dropdownBackgroundColor,"--ms-dropdown-border-width":this.content.dropdownBorderWidth||"0px","--ms-dropdown-border-color":this.content.dropdownBorderColor,"--ms-dropdown-radius":this.content.dropdownBorderRadius||"0px","--ms-max-height":this.content.dropdownMaxHeight||"10rem","--ms-option-bg-pointed":"transparent","--ms-option-bg-selected":"transparent","--ms-option-bg-selected-pointed":"transparent","--ms-option-color-pointed":"#000000","--ms-option-color-selected":"#000000","--ms-option-color-selected-pointed":"#000000","--ms-ring-width":"0px","--ms-ring-color":"transparent","--ms-spinner-color":this.content.loadingRingColor,"--search-font-size":this.content.searchFontSize||"inherit","--search-font-family":this.content.searchFontFamily||"inherit","--search-font-color":this.content.searchFontColor||"inherit","--component-cursor":this.cursor||"pointer"}},isReadonly(){return void 0===this.wwElementState.props.readonly?this.content.readonly:this.wwElementState.props.readonly}},watch:{textStyle(){return wwLib.getTextStyleFromContent(this.content)},async"content.initialValue"(e){this.init(),await this.$nextTick(),this.setCurrentSelection(e),this.$emit("trigger-event",{name:"initValueChange",event:{value:e}})},"content.options"(){this.init()},"content.layoutType"(){this.init()},"content.labelField"(){this.init()},"content.valueField"(){this.init()},isReadonly:{immediate:!0,handler(e){e?this.$emit("add-state","readonly"):this.$emit("remove-state","readonly")}}},created(){this.init()},methods:{async init(){this.options=[];const e=Array.isArray(this.content.options)?[...this.content.options]:[];this.options.push(...e.map((e=>this.formatOption(e)))),void 0!==this.content.initialValue&&this.content.allowCreation&&!this.options.some((e=>e===this.content.initialValue||e.value===this.content.initialValue))&&this.options.push(this.formatOption(this.content.initialValue))},getValueIndex(e){return this.options.findIndex((t=>t.value===e.value))},getOptionIndex(e){return this.options.indexOf(e)},formatOption(e){const t=this.content.labelField||O,n=this.content.valueField||S;let o=wwLib.resolveObjectPropertyPath(e,t);const i=wwLib.resolveObjectPropertyPath(e,n);return"object"!==typeof o&&(o=wwLib.resolveObjectPropertyPath(e,wwLib.wwLang.getText(t))),"free"===this.content.layoutType?{label:o,value:i,data:e}:"object"===typeof e?{label:o,value:i,image:wwLib.resolveObjectPropertyPath(e,"image"),style:{backgroundColor:wwLib.resolveObjectPropertyPath(e,"bgColor")||"#FFFFFF00",color:wwLib.resolveObjectPropertyPath(e,"textColor")||"#000000"},data:e}:{label:e,value:e}},getLabel(e){return e&&void 0!==e.label&&null!==e.label?`${wwLib.wwLang.getText(e.label)}`:""},handleOpening(e){this.$refs.select&&(e?this.$refs.select.open():this.$refs.select.close())},checkIsOpen(){},clear(){this.isEditing||(this.internalValue="")}}};const E=(0,f.Z)(L,[["render",b],["__scopeId","data-v-0d6bc3ce"]]);var j=E,V=n(5883),C=n(8329);o.Z.component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",i.Z),o.Z.component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",l.Z),o.Z.component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",s.Z),o.Z.component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",a.Z),o.Z.component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",r.Z),o.Z.component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",c.Z),o.Z.component("wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834",d.Z),o.Z.component("wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da",j),o.Z.component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",V.Z),o.Z.component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",C.Z)}}]);