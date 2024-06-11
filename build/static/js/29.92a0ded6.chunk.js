"use strict";(self.webpackChunkSUN_crm=self.webpackChunkSUN_crm||[]).push([[29],{84268:(e,a,s)=>{s.d(a,{A:()=>l});s(65043);var r=s(50289),t=s(33307),n=s(70579);const l=e=>{let{label:a,name:s,required:l,required_text:i,warning:o}=e;return(0,n.jsx)(r.A.Item,{label:o?(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:a}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:o})]}):(0,n.jsx)("div",{children:a}),name:s,rules:[{required:l,message:i}],children:(0,n.jsx)(t.A,{})})}},65923:(e,a,s)=>{s.d(a,{A:()=>l});s(65043);var r=s(50289),t=s(3428),n=s(70579);const l=e=>{let{label:a,name:s,required:l,required_text:i}=e;return(0,n.jsx)(r.A.Item,{label:a,name:s,rules:[{required:l,message:i}],children:(0,n.jsx)(t.A,{style:{width:"100%"}})})}},20029:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var r=s(65043),t=s(50289),n=s(48193),l=s(47419),i=s(11645),o=s(22895),d=s(89421),u=s(82907),c=s(59888),m=s(92528),p=s(73216),v=s(14556),h=s(36213),f=s(84268),g=s(59488),A=s(65923),x=s(70579);const j={fulName:"",phoneNumber:"",userName:"",password:"",imageId:[]},b=()=>{const[e]=t.A.useForm(),a=(0,p.Zp)(),{editId:s}=(0,v.d4)((e=>e.editData)),b=(0,v.wA)(),[w,y]=(0,r.useState)([]),[S,N]=(0,r.useState)(null),{mutate:F,data:I,isLoading:q,isSuccess:E}=(0,u.useMutation)((e=>{let{url:a,formData:s}=e;return c.A.postData(a,s)}),{onSuccess:()=>{n.Ay.success("Success")},onError:e=>{for(let l in null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors){var a,s,r,t;n.Ay.error("".concat(l,": ").concat(null===(r=e.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.errors[l]))}}}),{mutate:D,data:L,isLoading:V,isSuccess:U}=(0,u.useMutation)((e=>{let{url:a,data:s}=e;return c.A.postData(a,s)}),{onSuccess:()=>{n.Ay.success("Success")},onError:e=>{for(let a in e.response.data)n.Ay.error("".concat(a,": ").concat(e.response.data[a]))}}),{isLoading:_,data:C,refetch:M,isSuccess:T}=(0,u.useQuery)(["edit-user",s],(()=>c.A.getDataByID("/User",s)),{enabled:!1}),{mutate:k,isLoading:O,data:R,isSuccess:z}=(0,u.useMutation)((e=>{let{url:a,data:s,id:r}=e;return c.A.editData(a,s,r)}),{onSuccess:()=>{n.Ay.success("Success")},onError:e=>{for(let a in e.response.data)n.Ay.error("".concat(a,": ").concat(e.response.data[a]))}}),{mutate:H,isLoading:J,data:P,isSuccess:B}=(0,u.useMutation)((e=>{let{url:a,data:s,id:r}=e;return c.A.editData(a,s,r)}),{onSuccess:()=>{n.Ay.success("Success")},onError:e=>{for(let a in e.response.data)n.Ay.error("".concat(a,": ").concat(e.response.data[a]))}});(0,r.useEffect)((()=>{z&&b({type:h.aT,payload:""}),(U||z)&&a("/user")}),[L,R]),(0,r.useEffect)((()=>{""!==s&&M()}),[s]),(0,r.useEffect)((()=>{""===s&&e.setFieldsValue(j)}),[]),(0,r.useEffect)((()=>{let a=null;var s,r;void 0!==C&&(a=[{uid:null===C||void 0===C||null===(s=C.image)||void 0===s?void 0:s.id,name:null===C||void 0===C||null===(r=C.image)||void 0===r?void 0:r.id,status:"done",url:"".concat("https://seller.human2human.uz/","/").concat(null===C||void 0===C?void 0:C.image.path)}]);if(T){const s={name:null===C||void 0===C?void 0:C.name,userName:null===C||void 0===C?void 0:C.userName,password:null===C||void 0===C?void 0:C.password,phoneNumber:null===C||void 0===C?void 0:C.phoneNumber,fulName:null===C||void 0===C?void 0:C.fulName,imageId:a};y(a),e.setFieldsValue(s)}}),[C]);(0,r.useEffect)((()=>{const a=JSON.parse(localStorage.getItem("myFormValues"));a&&(a.images=[],e.setFieldsValue(a));const s=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",s),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",s)}}),[]),(0,r.useEffect)((()=>{let a=B?P:I;if(E||B){const s=[{uid:null===a||void 0===a?void 0:a.id,name:null===a||void 0===a?void 0:a.id,status:"done",url:"".concat("https://seller.human2human.uz/","/").concat(null===a||void 0===a?void 0:a.path)}];e.setFieldsValue({imageId:s}),y(s)}}),[I,P]);return(0,x.jsx)("div",{children:V||_||O||q||J?(0,x.jsx)(m.HE,{}):(0,x.jsxs)(t.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:j,onFinish:e=>{var a;const r={userName:e.userName,password:e.password,phoneNumber:e.phoneNumber,fulName:e.fulName,imageId:w[0]?null===(a=w[0])||void 0===a?void 0:a.uid:1};T?k({url:"/User",data:r,id:s}):D({url:"/User/",data:r})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,x.jsxs)(l.A,{gutter:20,children:[(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(f.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u043e\u0435 \u0424\u0418\u041e",label:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0424\u0418\u041e",name:"fulName"})}),(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(A.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phoneNumber"})}),(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(f.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f login",label:"Login",name:"userName"})}),(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(f.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c",label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password"})})]}),(0,x.jsx)(l.A,{gutter:20,children:(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(t.A.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"imageId",children:(0,x.jsx)(g.A,{children:(0,x.jsx)(o.A,{maxCount:1,fileList:w,listType:"picture-card",onChange:e=>{let{fileList:a}=e;const s=new FormData;0!==a.length&&(s.append("fromFile",a[0].originFileObj),T&&1!==S?H({url:"/Image",data:s,id:S}):F({url:"/Image/",formData:s}))},onPreview:async e=>{let a=e.url;a||(a=await new Promise((a=>{const s=new FileReader;s.readAsDataURL(e.originFileObj),s.onload=()=>a(s.result)})));const s=new Image;s.src=a;const r=window.open(a);null===r||void 0===r||r.document.write(s.outerHTML)},onRemove:a=>{const s=null===a||void 0===a?void 0:a.uid;N(s),e.setFieldsValue({imageId:[]}),y([])},beforeUpload:()=>!1,children:w.length>0?"":"Upload"})})})})}),(0,x.jsx)(d.A,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:T?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}}]);
//# sourceMappingURL=29.92a0ded6.chunk.js.map