import{b as n,u as c,r as o,f as l,j as s,H as m}from"./index-179cd1d5.js";import{C as h,L as d}from"./Container-a476ff0a.js";import{e as p,d as x,C as _}from"./CamperListItem-7ac44cdb.js";const j="_container_hnnw8_1",f="_title_hnnw8_5",u="_line_hnnw8_12",v="_list_hnnw8_19",e={container:j,title:f,line:u,list:v};function N(){const r=n(p),t=c(),a=n(x);return o.useEffect(()=>{a.length===0&&t(l())},[t,a]),s.jsxs("div",{children:[s.jsx(m,{children:s.jsx("title",{children:"Favorites - Campervaneo"})}),s.jsxs(h,{children:[s.jsx(d,{favorites:!0}),s.jsxs("div",{className:e.container,children:[s.jsx("h1",{className:e.title,children:"Favorite campers"}),s.jsx("div",{className:e.line}),s.jsx("ul",{className:e.list,children:r.map(i=>s.jsx(_,{camper:i},i._id))})]})]})]})}export{N as default};
