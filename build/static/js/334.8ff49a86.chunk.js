"use strict";(self.webpackChunkSUN_crm=self.webpackChunkSUN_crm||[]).push([[334],{84268:(e,r,s)=>{s.d(r,{A:()=>n});s(65043);var t=s(50289),i=s(33307),a=s(70579);const n=e=>{let{label:r,name:s,required:n,required_text:d,warning:c}=e;return(0,a.jsx)(t.A.Item,{label:c?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:r}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:c})]}):(0,a.jsx)("div",{children:r}),name:s,rules:[{required:n,message:d}],children:(0,a.jsx)(i.A,{})})}},28334:(e,r,s)=>{s.r(r),s.d(r,{default:()=>S});var t=s(50289),i=s(48193),a=s(64435),n=s(89421),d=s(64124),c=s(47419),l=s(11645),o=s(96066),u=s(67407),x=s(92528),h=s(65043),p=s(59888),j=s(82907),m=s(84268),A=s(86178),f=s.n(A),v=s(70579);const g={title_uz:"",title_ru:"",sub_category:[]},y=e=>{let{data:r,refetch:s}=e;const[A]=t.A.useForm(),[y,b]=(0,h.useState)(!1),[S,w]=(0,h.useState)(null),{mutate:C,data:_,isLoading:k,isSuccess:q}=(0,j.useMutation)((e=>{let{url:r,data:s,id:t}=e;return p.A.editData(r,s,t)}),{onSuccess:()=>{i.Ay.success("Success")},onError:e=>{for(let r in e.response.data)i.Ay.error("".concat(r,": ").concat(e.response.data[r][0]))}}),D=e=>{C({url:"/Kurs",data:e,id:S})};(0,h.useEffect)((()=>{q&&(b(!1),A.setFieldsValue(g),s())}),[_]);const F=[{title:"\u0426\u0435\u043d\u0430",dataIndex:"price",id:"price",render:e=>(0,v.jsx)("p",{children:e})},{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",id:"action",render:(e,r)=>(0,v.jsx)(a.A,{size:20,children:(0,v.jsx)(n.A,{onClick:()=>{return e=r.id,b(!0),void w(e);var e},type:"primary",icon:(0,v.jsx)(u.A,{}),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0443\u0440\u0441"})})},{title:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435",dataIndex:"updateTime",id:"updateTime",render:e=>(0,v.jsx)("p",{children:f()(e).format("DD.MM.YYYY")})}];return(0,v.jsxs)("div",{children:[(0,v.jsx)(d.A,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0443\u0440\u0441",open:y,onOk:()=>{A.validateFields().then((e=>{D(e)})).catch((e=>{console.log("Failed:",e)}))},onCancel:()=>{b(!1)},children:k?(0,v.jsx)(x.HE,{}):(0,v.jsx)(t.A,{form:A,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:g,onFinish:D,autoComplete:"off",children:(0,v.jsx)(c.A,{gutter:20,children:(0,v.jsx)(l.A,{span:24,children:(0,v.jsx)(m.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u0443\u0440\u0441",label:"\u041a\u0443\u0440\u0441",name:"price"})})})})}),(0,v.jsx)(o.A,{columns:F,dataSource:r,rowKey:e=>null===e||void 0===e?void 0:e.id})]})};var b=s(5397);const S=()=>{const{data:e,isLoading:r,refetch:s}=(0,j.useQuery)("course-get",(()=>p.A.getDataByID("/Kurs",1)),{onError:e=>{i.Ay.error(e.message)}});return(0,v.jsx)("div",{className:"site-space-compact-wrapper",children:(0,v.jsx)(a.A,{direction:"vertical",style:{width:"100%"},children:(0,v.jsx)(b.A,{size:"medium",spinning:r,children:(0,v.jsx)(y,{data:[e],refetch:s})})})})}}}]);
//# sourceMappingURL=334.8ff49a86.chunk.js.map