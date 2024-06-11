"use strict";(self.webpackChunkSUN_crm=self.webpackChunkSUN_crm||[]).push([[404],{84268:(e,t,a)=>{a.d(t,{A:()=>n});a(65043);var s=a(50289),r=a(33307),l=a(70579);const n=e=>{let{label:t,name:a,required:n,required_text:i,warning:d}=e;return(0,l.jsx)(s.A.Item,{label:d?(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:t}),(0,l.jsx)("br",{}),(0,l.jsx)("p",{children:d})]}):(0,l.jsx)("div",{children:t}),name:a,rules:[{required:n,message:i}],children:(0,l.jsx)(r.A,{})})}},65923:(e,t,a)=>{a.d(t,{A:()=>n});a(65043);var s=a(50289),r=a(3428),l=a(70579);const n=e=>{let{label:t,name:a,required:n,required_text:i}=e;return(0,l.jsx)(s.A.Item,{label:t,name:a,rules:[{required:n,message:i}],children:(0,l.jsx)(r.A,{style:{width:"100%"}})})}},90404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(65043),r=a(50289),l=a(48193),n=a(47419),i=a(11645),d=a(94406),o=a(89421),u=a(82907),c=a(59888),m=a(92528),p=a(73216),h=a(14556),x=a(36213),A=a(84268),v=a(65923),j=a(70579);const y={name:"",discount:null,fristPay:null,activate:!0,monthCount:null,ploshadSum:null},f=()=>{const[e]=r.A.useForm(),t=(0,p.Zp)(),{editId:a}=(0,h.d4)((e=>e.editData)),f=(0,h.wA)(),{mutate:b,data:g,isLoading:S,isSuccess:q}=(0,u.useMutation)((e=>{let{url:t,data:a}=e;return c.A.postData(t,a)}),{onSuccess:()=>{l.Ay.success("Success")},onError:e=>{for(let t in e.response.data)l.Ay.error("".concat(t,": ").concat(e.response.data[t]))}}),{isLoading:w,data:F,refetch:C,isSuccess:E}=(0,u.useQuery)(["edit-payment",a],(()=>c.A.getDataByID("/PaymentMetod",a)),{enabled:!1}),{mutate:I,isLoading:_,data:P,isSuccess:V}=(0,u.useMutation)((e=>{let{url:t,data:a,id:s}=e;return c.A.editData(t,a,s)}),{onSuccess:()=>{l.Ay.success("Success")},onError:e=>{for(let t in e.response.data)l.Ay.error("".concat(t,": ").concat(e.response.data[t]))}});(0,s.useEffect)((()=>{V&&f({type:x.aT,payload:""}),(q||V)&&t("/payment")}),[g,P]),(0,s.useEffect)((()=>{""!==a&&C()}),[a]),(0,s.useEffect)((()=>{""===a&&e.setFieldsValue(y)}),[]),(0,s.useEffect)((()=>{if(E){const t={name:null===F||void 0===F?void 0:F.name,discount:null===F||void 0===F?void 0:F.discount,fristPay:null===F||void 0===F?void 0:F.fristPay,activate:null===F||void 0===F?void 0:F.activate,monthCount:null===F||void 0===F?void 0:F.monthCount,ploshadSum:null===F||void 0===F?void 0:F.ploshdSum};e.setFieldsValue(t)}}),[F]);(0,s.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const a=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",a),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",a)}}),[]);const D=(0,s.useMemo)((()=>[{value:!0,label:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},{value:!1,label:"\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e"}]),[]);return(0,j.jsx)("div",{children:S||w||_?(0,j.jsx)(m.HE,{}):(0,j.jsxs)(r.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:y,onFinish:e=>{E?I({url:"/PaymentMetod",data:e,id:a}):b({url:"/PaymentMetod/",data:e})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,j.jsxs)(n.A,{gutter:20,children:[(0,j.jsx)(i.A,{span:12,children:(0,j.jsx)(A.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u043f\u043b\u0430\u0442\u044b",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u043f\u043b\u0430\u0442\u044b",name:"name"})}),(0,j.jsx)(i.A,{span:12,children:(0,j.jsx)(v.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u043a\u0438\u0434\u043a\u0430",label:"\u0421\u043a\u0438\u0434\u043a\u0430",name:"discount"})}),(0,j.jsx)(i.A,{span:24,children:(0,j.jsx)(v.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0446\u0435\u043d\u0430",label:"\u0446\u0435\u043d\u0430 \u0437\u0430 1 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439 \u043c\u0435\u0442\u0440",name:"ploshadSum"})})]}),(0,j.jsxs)(n.A,{gutter:20,children:[(0,j.jsx)(i.A,{span:12,children:(0,j.jsx)(v.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441",label:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441",name:"fristPay"})}),(0,j.jsx)(i.A,{span:12,children:(0,j.jsx)(v.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u044f\u0446\u0435\u0432",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u044f\u0446\u0435\u0432",name:"monthCount"})}),(0,j.jsx)(i.A,{span:24,children:(0,j.jsx)(r.A.Item,{label:"\u041e\u043d \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d?",name:"activate",rules:[{required:!0,message:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}],wrapperCol:{span:24},children:(0,j.jsx)(d.A,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435",optionLabelProp:"label",options:D})})})]}),(0,j.jsx)(o.A,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:E?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}},11645:(e,t,a)=>{a.d(t,{A:()=>s});const s=a(30227).A}}]);
//# sourceMappingURL=404.c4758c4b.chunk.js.map