(this.webpackJsonpmyportfoliositev1=this.webpackJsonpmyportfoliositev1||[]).push([[0],{35:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),s=n(17),r=n.n(s),o=(n(46),n(15)),l=n(6),j=n(25),b=n(59),u=n(57),d=n(60),h=(n(47),function(){var e=Object(a.useState)(1),t=Object(j.a)(e,2),n=t[0],i=t[1],s=window.location.pathname;return Object(a.useEffect)((function(){switch(s){case"/about":i(3);break;case"/projects":i(2);break;default:i(1)}}),[s]),Object(c.jsx)("div",{class:"container",children:Object(c.jsxs)(b.a,{className:"color-nav",variant:"dark",style:{padding:"10px",marginBottom:"20px"},children:[Object(c.jsx)(b.a.Brand,{className:"logo-font justify-content-end",as:o.b,to:"/",onClick:function(){return i(1)},children:Object(c.jsx)(u.a,{src:"".concat("/My-Website","/untitled-design-4-removebg-preview.png")})}),Object(c.jsx)(b.a.Collapse,{className:"justify-content-end",children:Object(c.jsxs)(d.a,{className:"justify-content-end",activeKey:n,onSelect:function(e){i(e)},children:[Object(c.jsx)(d.a.Link,{as:o.b,eventKey:1,to:"/",children:"Links"}),Object(c.jsx)(d.a.Link,{as:o.b,eventKey:2,to:"/projects",children:"Projects"}),Object(c.jsx)(d.a.Link,{as:o.b,eventKey:3,to:"/about",children:"About"})]})})]})})}),m=n(62),x=n(58),g=(n(35),function(){return Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center",children:[Object(c.jsx)(u.a,{alt:"logo",width:"120",height:"150",src:"".concat("/My-Website","/HamidouBallo1.JPG"),className:"mb-4",rounded:!0}),Object(c.jsx)("h4",{className:"text-white mb-4",children:Object(c.jsx)("strong",{children:"About Me"})}),Object(c.jsx)("h5",{className:"text-white mb-5 max-button",children:'I am an aspiring software engineer currently looking for opportunities to perfect my craft. In my free time I play soccer and go to the gym. Click the "My Resume" button bellow to know more about me.'}),Object(c.jsx)(x.a,{variant:"outline-light",href:"".concat("/My-Website","Portfolio Site Res.pdf"),size:"ld",download:!0,children:"My Resume"})]})})}),O=n(18),f=n(24),p=n.n(f),y=n(39),v=n.n(y),k=n(40),w=n.n(k),N=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),i=n[0],s=n[1];return Object(a.useEffect)((function(){e.link.includes("medium")?s(Object(c.jsx)(O.Icon,{icon:w.a})):e.link.includes("github")?s(Object(c.jsx)(O.Icon,{icon:p.a})):e.link.includes("linkedin")&&s(Object(c.jsx)(O.Icon,{icon:v.a}))}),[e]),Object(c.jsx)(x.a,{variant:"outline-light",href:e.link,className:"mb-3 max-button",size:"lg",block:!0,children:i})},W=function(){return Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center",children:[Object(c.jsx)(u.a,{alt:"logo",width:"120",height:"150",src:"".concat("/My-Website","/HamidouBallo1.JPG"),className:"mb-4",rounded:!0}),Object(c.jsx)("h5",{className:"mb-4 text-white",children:"Hamidou Ballo"}),["https://github.com/Waraba2","https://www.linkedin.com/in/waraba2/","https://medium.com/@ballowara"].map((function(e){return Object(c.jsx)(N,{link:e},e)}))]})})},M=function(){return Object(c.jsx)(W,{})},I=n(61),C=function(e){return Object(c.jsxs)(I.a,{className:"col-12 col-md-6 col-lg-3 mx-3 my-3",children:[Object(c.jsxs)(I.a.Body,{children:[Object(c.jsx)(I.a.Title,{children:e.name}),Object(c.jsx)(I.a.Text,{children:e.description}),Object(c.jsxs)(I.a.Text,{children:[Object(c.jsx)("strong",{children:"Language/Framework:   "}),e.languages]})]}),Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-around mb-3",children:[Object(c.jsx)(x.a,{variant:"outline-primary",href:e.github,children:Object(c.jsx)(O.Icon,{icon:p.a})}),""!==e.url&&Object(c.jsx)(x.a,{variant:"outline-success",href:e.url,children:"It's live"})]})]})},L=function(){return Object(c.jsxs)("div",{className:"py-3 d-flex flex-column justify-content-center align-items-center align-content-center",children:[Object(c.jsx)("h2",{style:{color:"White"},children:"My Projects"}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-center",children:[{name:"Text Proofreader",url:"",github:"https://github.com/Waraba2/Text-Proofreader",languages:"C++",description:"Analyses text and return if a word is repeated too much in a the text."},{name:"Arithmetic Expression Evaluator",url:"",github:"https://github.com/Waraba2/Arithmetic-Expression-Evaluator",languages:"C++",description:"A program that evaluates arithmetic operations using a data structure called stacks."},{name:"Portfolio Website",url:"https://waraba2.github.io/My-Website/",github:"https://github.com/Waraba2/My-Website",languages:"React.js",description:"This a website that displays my software development skills."},{name:"Sorting Algorithm analysis",url:"",github:"https://github.com/Waraba2/Compare-Sorting-Algorithms",languages:"C++",description:"Programed and compared sorting algorithms like Merge, Quick, Heap, Selection and Insertion sort."},{name:"Doubly Circular Linked List",url:"",github:"https://github.com/Waraba2/Doubly-Circular-Linked-List",languages:"C++",description:"Implementation of a data structure"}].map((function(e,t){return Object(c.jsx)(C,{url:e.url,name:e.name,github:e.github,languages:e.languages,description:e.description},t)}))})})]})},P=function(){return Object(c.jsx)(L,{})},A=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(h,{}),Object(c.jsx)("main",{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/",exact:!0,children:Object(c.jsx)(M,{})}),Object(c.jsx)(l.b,{path:"/projects",exact:!0,children:Object(c.jsx)(P,{})}),Object(c.jsx)(l.b,{path:"/about",exact:!0,children:Object(c.jsx)(g,{})}),Object(c.jsx)(l.a,{to:"/"})]})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.71218d75.chunk.js.map