import{b as t,u as d,r as x,f,j as e,H as h}from"./index-72dd9c77.js";import{C as _,L as u}from"./Container-e110f63f.js";import{e as v,d as j,a as g,b as C,S as y,C as N}from"./Skeleton-de6aade3.js";const E="_container_1e73f_1",F="_title_1e73f_5",L="_line_1e73f_12",b="_list_1e73f_19",k="_empty_1e73f_25",s={container:E,title:F,line:L,list:b,empty:k};function H(){const n=t(v),r=t(j),o=t(g),c=t(C),i=d();x.useEffect(()=>{r.length===0&&i(f())},[i,r]);const l=4,m=Array.from({length:l});return e.jsxs("div",{children:[e.jsx(h,{children:e.jsx("title",{children:"Favorites - Campervaneo"})}),e.jsxs(_,{children:[e.jsx(u,{favorites:!0}),e.jsxs("div",{className:s.container,children:[e.jsx("h1",{className:s.title,children:"Favorite campervans"}),e.jsx("div",{className:s.line}),o||c?m.map((a,p)=>e.jsx(y,{variant:"rectangular",width:888,height:360,animation:"wave",sx:{borderRadius:"20px",margin:"0 auto",marginBottom:"32px"}},p)):e.jsx("ul",{className:s.list,children:n.map(a=>e.jsx(N,{camper:a},a._id))}),n.length===0?e.jsx("p",{className:s.empty,children:"Your favorite campervans list is empty"}):null]})]})]})}export{H as default};
