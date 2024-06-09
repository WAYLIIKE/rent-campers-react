import{j as e,r as h,u as _,a as u,f as j,H as N}from"./index-df3fa1ba.js";import{C as w}from"./Container-bf366414.js";const C="_icon_13tfn_1",g={icon:C},o=({id:s,width:p=24,height:l=24,fill:c,stroke:i,isInputStyled:a=!1})=>{const d="/rent-campers-react//";return e.jsx("svg",{className:a?g.icon:null,width:p,height:l,role:"img",fill:c,stroke:i,children:e.jsx("use",{xlinkHref:`${d}sprite.svg#${s}`})})},b="_title_c79xq_1",k="_subtitle_c79xq_8",v="_block_c79xq_14",f="_wrapper_c79xq_21",W="_wrapperItem_c79xq_29",q="_content_c79xq_55",y="_submit_c79xq_63",$="_checked_c79xq_79 _wrapperItem_c79xq_29",t={title:b,subtitle:k,block:v,wrapper:f,wrapperItem:W,content:q,submit:y,checked:$},I=()=>{const[s,p]=h.useState({equipment:[],type:[]}),l=(c,i)=>{p(a=>{const d=a[c].includes(i)?a[c].filter(x=>x!==i):[...a[c],i];return{...a,[c]:d}})};return e.jsxs("div",{children:[e.jsx("p",{className:t.title,children:"Filters"}),e.jsx("h2",{className:t.subtitle,children:"Vehicle equipment"}),e.jsx("div",{className:t.block}),e.jsx("ul",{className:t.wrapper,children:[{id:"icon-wind",label:"AC",isFill:!0,isStroke:!0},{id:"icon-automatic",label:"Automatic"},{id:"icon-eat",label:"Kitchen"},{id:"icon-tv",label:"TV"},{id:"icon-shower",label:"Shower/WC"}].map(({id:c,label:i,isFill:a,isStroke:d})=>e.jsx("li",{className:s.equipment.includes(i)?(t.wrapperItem,t.checked):t.wrapperItem,onClick:()=>{l("equipment",i)},children:e.jsxs("button",{children:[e.jsx(o,{id:c,width:32,height:32,fill:a?"var(--color-dark)":"none",stroke:d?"none":"currentColor"}),e.jsx("p",{className:t.content,children:i})]})},c))}),e.jsx("h2",{className:t.subtitle,children:"Vehicle type"}),e.jsx("div",{className:t.block}),e.jsx("ul",{className:t.wrapper,children:[{id:"icon-camper1",label:"Van"},{id:"icon-camper2",label:"Fully Integrated"},{id:"icon-camper3",label:"Alcove"}].map(({id:c,label:i})=>e.jsx("li",{className:s.type.includes(i)?(t.wrapperItem,t.checked):t.wrapperItem,onClick:()=>{l("type",i)},children:e.jsxs("button",{children:[e.jsx(o,{id:c,width:40,height:28,fill:"var(--color-dark)",stroke:"transparent"}),e.jsx("p",{className:t.content,children:i})]})},c))}),e.jsx("button",{className:t.submit,type:"submit",onClick:()=>{console.log(s),p({equipment:[],type:[]})},children:"Search"})]})},F="_container_1kao8_1",A="_label_1kao8_8",S="_input_1kao8_15",L="_inputWrapper_1kao8_32",m={container:F,label:A,input:S,inputWrapper:L},V=()=>{const s=h.useId();return e.jsxs("div",{className:m.container,children:[e.jsx("label",{className:m.label,htmlFor:s,children:"Location"}),e.jsxs("div",{className:m.inputWrapper,children:[e.jsx("input",{className:m.input,type:"text",id:s}),e.jsx(o,{id:"icon-location",width:18,height:20,fill:"none",stroke:"currentColor",isInputStyled:!0})]})]})},E="_container_7b8o3_1",H={container:E},P=()=>e.jsxs("div",{className:H.container,children:[e.jsx(V,{}),e.jsx(I,{})]}),R="_container_hx8xl_1",K={container:R},B=s=>s.camper.items,D="_container_1p0gq_1",T="_wrapper_1p0gq_8",z="_text_1p0gq_17",r={container:D,wrapper:T,text:z},G=({camper:{adults:s,children:p,transmission:l,engine:c,details:{kitchen:i,beds:a,airConditioner:d}}})=>e.jsxs("ul",{className:r.container,children:[s&&e.jsxs("li",{className:r.wrapper,children:[e.jsx(o,{id:"icon-users",width:20,height:20,fill:"var(--color-dark)",stroke:"none"}),e.jsxs("p",{className:r.text,children:[s," adults"]})]}),l&&e.jsxs("li",{className:r.wrapper,children:[e.jsx(o,{id:"icon-automatic",width:20,height:20,fill:"none",stroke:"currentColor"}),e.jsx("p",{className:r.text,children:l==="automatic"?"Automatic":l})]}),c&&e.jsxs("li",{className:r.wrapper,children:[e.jsx(o,{id:"icon-automatic",width:20,height:20,fill:"none",stroke:"currentColor"}),e.jsx("p",{className:r.text,children:c==="petrol"?"Petrol":l})]}),i&&e.jsxs("li",{className:r.wrapper,children:[e.jsx(o,{id:"icon-eat",width:20,height:20,fill:"none",stroke:"currentColor"}),e.jsx("p",{className:r.text,children:"Kitchen"})]}),a&&e.jsxs("li",{className:r.wrapper,children:[e.jsx(o,{id:"icon-bed",width:20,height:20,fill:"none",stroke:"currentColor"}),e.jsxs("p",{className:r.text,children:[a," ",a>1?"beds":"bed"]})]}),d&&e.jsxs("li",{className:r.wrapper,children:[e.jsx(o,{id:"icon-wind",width:20,height:20,fill:"var(--color-dark)",stroke:"none"}),e.jsx("p",{className:r.text,children:"AC"})]})]}),J="_container_ms09m_1",M="_mainContent_ms09m_11",O="_contentWrapper_ms09m_17",Q="_secondaryWrapper_ms09m_21",U="_priceWrapper_ms09m_27",X="_secondaryContent_ms09m_32",Y="_priceContent_ms09m_38",Z="_img_ms09m_44",ee="_favorite_ms09m_48",se="_rating_ms09m_60",te="_location_ms09m_65",ne="_description_ms09m_69",ce="_button_ms09m_78",n={container:J,mainContent:M,contentWrapper:O,secondaryWrapper:Q,priceWrapper:U,secondaryContent:X,priceContent:Y,img:Z,favorite:ee,rating:se,location:te,description:ne,button:ce},ie=({camper:s})=>e.jsxs("li",{className:n.container,children:[e.jsx("div",{className:n.imgWrapper,children:e.jsx("img",{className:n.img,src:s.gallery[0],alt:s.name,width:290,height:310})}),e.jsxs("div",{className:n.contentWrapper,children:[e.jsxs("div",{className:n.mainContent,children:[e.jsx("p",{className:n.priceContent,children:s.name}),e.jsxs("div",{className:n.priceWrapper,children:[e.jsxs("p",{className:n.priceContent,children:["€",s.price,".00"]}),e.jsx("button",{className:n.favorite,children:e.jsx(o,{id:"icon-favorite",width:24,height:24,fill:"none",stroke:"currentColor"})})]})]}),e.jsxs("div",{className:n.secondaryWrapper,children:[e.jsxs("div",{className:n.secondaryContent,children:[e.jsx(o,{id:"icon-star",width:16,height:16,fill:"none",stroke:"currentColor"}),e.jsxs("p",{className:n.rating,children:[s.rating,"(",s.reviews.length>1?`${s.reviews.length} Reviews`:`${s.reviews.length} Review`,")"]})]}),e.jsxs("div",{className:n.secondaryContent,children:[e.jsx(o,{id:"icon-location",width:16,height:16,fill:"none",stroke:"currentColor"}),e.jsx("p",{className:n.location,children:s.location})]})]}),e.jsx("p",{className:n.description,children:s.description}),e.jsx(G,{camper:s}),e.jsx("button",{className:n.button,children:"Show more"})]})]});const re=()=>{const s=_(B);return e.jsx("ul",{children:s.map(p=>e.jsx(ie,{camper:p},p._id))})};function le(){const s=u();return h.useEffect(()=>{s(j())}),e.jsxs("div",{children:[e.jsx(N,{children:e.jsx("title",{children:"Catalog - Campervaneo"})}),e.jsx(w,{children:e.jsxs("div",{className:K.container,children:[e.jsx(P,{}),e.jsx(re,{})]})})]})}export{le as default};
