(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[892],{94825:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var o=n(65043),l=n(64435),r=n(89421),i=n(28440),a=n(96066),s=n(67407),c=n(61966),d=n(14556),u=n(36213),v=n(73216),f=n(70579);const p=e=>{let{data:t,deleteHandle:n}=e;const o=(0,d.wA)(),p=(0,v.Zp)(),h=[{title:"\u042d\u0442\u0430\u0436",dataIndex:"name",id:"name",render:e=>(0,f.jsx)("p",{children:e})},{title:"\u0421\u043b\u043e\u0442",dataIndex:"house",id:"house",render:e=>{var t;return(0,f.jsx)("p",{children:null===e||void 0===e||null===(t=e.slot)||void 0===t?void 0:t.name})}},{title:"\u0414\u043e\u043c",dataIndex:"house",id:"house",render:e=>(0,f.jsx)("p",{children:null===e||void 0===e?void 0:e.name})},{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",id:"action",render:(e,t)=>(0,f.jsxs)(l.A,{size:20,children:[(0,f.jsx)(r.A,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),o({type:u.aT,payload:e}),void p("/floor/add");var e},type:"primary",icon:(0,f.jsx)(s.A,{}),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,f.jsx)(i.A,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/Floor",e)})(t.id),children:(0,f.jsx)(r.A,{type:"danger",icon:(0,f.jsx)(c.A,{}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})}];return(0,f.jsx)("div",{children:(0,f.jsx)(a.A,{columns:h,dataSource:t,rowKey:e=>e.id})})};var h=n(50289),m=n(48193),A=n(47419),y=n(11645),x=n(33307),g=n(94406),C=n(5397),b=n(75337),j=n(59888),w=n(82907);const I=()=>{const[e]=h.A.useForm(),t=(0,v.Zp)(),n=(0,d.wA)(),[i,a]=(0,o.useState)({slotId:null,houseId:null}),{data:s,refetch:c}=(0,w.useQuery)("get-floor-slot",(()=>j.A.getData("/Slot")),{enabled:!1}),{data:I,refetch:E}=(0,w.useQuery)("get-floor-house",(()=>j.A.getData("/House?slotId=".concat(null===i||void 0===i?void 0:i.slotId))),{enabled:!1}),{mutate:O,isSuccess:k,isLoading:P}=(0,w.useMutation)((e=>{let{url:t,id:n}=e;return j.A.deleteData(t,n)}),{onSuccess:()=>{m.Ay.success("Success")},onError:e=>{m.Ay.error(e.message)}}),{data:S,isLoading:N,refetch:T}=(0,w.useQuery)("floor-get",(()=>j.A.getData("Floor?".concat(null!==i&&void 0!==i&&i.slotId?"&SlotId=".concat(null===i||void 0===i?void 0:i.slotId):"").concat(null!==i&&void 0!==i&&i.houseId?"&housId=".concat(null===i||void 0===i?void 0:i.houseId):""))),{onError:e=>{m.Ay.error(e.message)}}),[q,D]=(0,o.useState)([]),[V,z]=(0,o.useState)(!1);(0,o.useEffect)((()=>{c()}),[]),(0,o.useEffect)((()=>{null!==i&&void 0!==i&&i.slotId&&E()}),[null===i||void 0===i?void 0:i.slotId]),(0,o.useEffect)((()=>{k&&T()}),[k]),(0,o.useEffect)((()=>{T()}),[i]);const F=(0,o.useMemo)((()=>{var e;return null===s||void 0===s||null===(e=s.result)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}),[s]),H=(0,o.useMemo)((()=>{var e;return null===I||void 0===I||null===(e=I.result)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}),[I]);return(0,f.jsx)("div",{className:"site-space-compact-wrapper",children:(0,f.jsxs)(l.A,{direction:"vertical",style:{width:"100%"},children:[(0,f.jsxs)(A.A,{gutter:20,children:[(0,f.jsx)(y.A,{span:16,children:(0,f.jsx)(x.A,{onChange:e=>(e=>{var t;z(""!==e);const n=null===S||void 0===S||null===(t=S.result)||void 0===t?void 0:t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())));D(n)})(e.target.value)})}),(0,f.jsx)(y.A,{span:8,children:(0,f.jsx)(r.A,{type:"primary",icon:(0,f.jsx)(b.A,{}),style:{width:"100%"},onClick:()=>{n({type:u.aT,payload:""}),t("/floor/add")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),(0,f.jsx)(h.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},autoComplete:"off",children:(0,f.jsxs)(A.A,{gutter:20,children:[(0,f.jsx)(y.A,{span:6,children:(0,f.jsx)(h.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0442",name:"slotId",wrapperCol:{span:24},children:(0,f.jsx)(g.A,{style:{width:"100%"},optionLabelProp:"label",onChange:t=>{e.setFieldsValue({houseId:null}),a({slotId:t,houseId:null})},options:F,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043b\u043e\u0442\u0430\u043c"})})}),(0,f.jsx)(y.A,{span:6,children:(0,f.jsx)(h.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u043c",name:"houseId",wrapperCol:{span:24},children:(0,f.jsx)(g.A,{style:{width:"100%"},optionLabelProp:"label",onChange:t=>{e.setFieldsValue({floorId:null}),a((e=>({...e,houseId:t})))},options:H,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0434\u043e\u043c\u0430\u043c"})})})]})}),(0,f.jsx)(C.A,{size:"medium",spinning:N||P,children:(0,f.jsx)(p,{data:V?q:null===S||void 0===S?void 0:S.result,deleteHandle:(e,t)=>{O({url:e,id:t})}})})]})})}},61966:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(89379),l=n(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var i=n(22172),a=function(e,t){return l.createElement(i.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:r}))};const s=l.forwardRef(a)},75337:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(89379),l=n(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var i=n(22172),a=function(e,t){return l.createElement(i.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:r}))};const s=l.forwardRef(a)},38046:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var o=n(58168),l=n(5544),r=n(8566),i=n(65043),a=n(89421),s=n(83085);function c(e){return!(!e||!e.then)}const d=function(e){var t=i.useRef(!1),n=i.useRef(null),d=(0,r.A)(!1),u=(0,l.A)(d,2),v=u[0],f=u[1],p=e.close,h=function(){null===p||void 0===p||p.apply(void 0,arguments)};i.useEffect((function(){var t=null;return e.autoFocus&&(t=setTimeout((function(){var e;null===(e=n.current)||void 0===e||e.focus()}))),function(){t&&clearTimeout(t)}}),[]);var m=e.type,A=e.children,y=e.prefixCls,x=e.buttonProps;return i.createElement(a.A,(0,o.A)({},(0,s.D)(m),{onClick:function(n){var o=e.actionFn;if(!t.current)if(t.current=!0,o){var l;if(e.emitEvent){if(l=o(n),e.quitOnNullishReturnValue&&!c(l))return t.current=!1,void h(n)}else if(o.length)l=o(p),t.current=!1;else if(!(l=o()))return void h();!function(e){c(e)&&(f(!0),e.then((function(){f(!1,!0),h.apply(void 0,arguments),t.current=!1}),(function(e){return f(!1,!0),t.current=!1,Promise.reject(e)})))}(l)}else h()},loading:v,prefixCls:y},x,{ref:n}),A)}},11645:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n(30227).A},28440:(e,t,n)=>{"use strict";n.d(t,{A:()=>j});var o=n(58168),l=n(5544),r=n(51376),i=n(98139),a=n.n(i),s=n(28678),c=n(25001),d=n(65043),u=n(35296),v=n(36282),f=n(12701),p=n(89421),h=n(83085),m=n(38046),A=n(38097),y=n(8376),x=n(98986),g=function(e){var t=e.prefixCls,n=e.okButtonProps,l=e.cancelButtonProps,r=e.title,i=e.cancelText,a=e.okText,s=e.okType,c=e.icon,v=e.showCancel,f=void 0===v||v,g=e.close,C=e.onConfirm,b=e.onCancel,j=d.useContext(u.QO).getPrefixCls;return d.createElement(A.A,{componentName:"Popconfirm",defaultLocale:y.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,x.b)(r))),d.createElement("div",{className:"".concat(t,"-buttons")},f&&d.createElement(p.A,(0,o.A)({onClick:b,size:"small"},l),null!==i&&void 0!==i?i:e.cancelText),d.createElement(m.A,{buttonProps:(0,o.A)((0,o.A)({size:"small"},(0,h.D)(s)),n),actionFn:C,close:g,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==a&&void 0!==a?a:e.okText)))}))},C=void 0,b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const j=d.forwardRef((function(e,t){var n=e.prefixCls,i=e.placement,p=void 0===i?"top":i,h=e.trigger,m=void 0===h?"click":h,A=e.okType,y=void 0===A?"primary":A,x=e.icon,j=void 0===x?d.createElement(r.A,null):x,w=e.children,I=e.overlayClassName,E=e.onOpenChange,O=e.onVisibleChange,k=b(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=d.useContext(u.QO).getPrefixCls,S=(0,s.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),N=(0,l.A)(S,2),T=N[0],q=N[1],D=function(e,t){q(e,!0),null===O||void 0===O||O(e,t),null===E||void 0===E||E(e,t)},V=P("popover",n),z=P("popconfirm",n),F=a()(z,I);return d.createElement(v.A,(0,o.A)({},k,{trigger:m,prefixCls:V,placement:p,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||D(t)},open:T,ref:t,overlayClassName:F,_overlay:d.createElement(g,(0,o.A)({okType:y,icon:j},e,{prefixCls:V,close:function(e){D(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(C,t)},onCancel:function(t){var n;D(!1,t),null===(n=e.onCancel)||void 0===n||n.call(C,t)}}))}),(0,f.Ob)(w,{onKeyDown:function(e){var t,n;d.isValidElement(w)&&(null===(n=null===w||void 0===w?void 0:(t=w.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===c.A.ESC&&T&&D(!1,e)}(e)}}))}))},17324:e=>{e.exports=function(e,t,n,o){var l=n?n.call(o,e,t):void 0;if(void 0!==l)return!!l;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),s=0;s<r.length;s++){var c=r[s];if(!a(c))return!1;var d=e[c],u=t[c];if(!1===(l=n?n.call(o,d,u,c):void 0)||void 0===l&&d!==u)return!1}return!0}}}]);
//# sourceMappingURL=892.25bf3645.chunk.js.map