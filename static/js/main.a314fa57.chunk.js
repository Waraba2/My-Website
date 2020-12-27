(this.webpackJsonpmyportfoliositev1=this.webpackJsonpmyportfoliositev1||[]).push([[0],{35:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),s=n(17),r=n.n(s),o=(n(46),n(15)),l=n(6),b=n(25),u=n(59),j=n(57),d=n(60),h=(n(47),function(){var e=Object(c.useState)(1),t=Object(b.a)(e,2),n=t[0],i=t[1],s=window.location.pathname;return Object(c.useEffect)((function(){switch(s){case"/about":i(3);break;case"/projects":i(2);break;default:i(1)}}),[s]),Object(a.jsxs)(u.a,{className:"color-nav",variant:"dark",style:{padding:"10px",marginBottom:"20px"},children:[Object(a.jsx)(u.a.Brand,{className:"logo-font",as:o.b,to:"/",onClick:function(){return i(1)},children:Object(a.jsx)(j.a,{alt:"logo",width:"160",height:"30",src:"".concat("/My-Website","/untitled-design-4-removebg-preview.png")})}),Object(a.jsx)(u.a.Collapse,{className:"justify-content-end",children:Object(a.jsxs)(d.a,{className:"justify-content-end",activeKey:n,onSelect:function(e){i(e)},children:[Object(a.jsx)(d.a.Link,{as:o.b,eventKey:1,to:"/",children:"Links"}),Object(a.jsx)(d.a.Link,{as:o.b,eventKey:2,to:"/projects",children:"Projects"}),Object(a.jsx)(d.a.Link,{as:o.b,eventKey:3,to:"/about",children:"About"})]})})]})}),m=n(62),x=n(58),g=(n(35),function(){return Object(a.jsx)(m.a,{children:Object(a.jsxs)("div",{className:"mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center",children:[Object(a.jsx)(j.a,{alt:"logo",width:"120",height:"150",src:"".concat("/My-Website","/HamidouBallo1.JPG"),className:"mb-4",rounded:!0}),Object(a.jsx)("h4",{className:"text-white mb-4",children:Object(a.jsx)("strong",{children:"About Me"})}),Object(a.jsx)("h5",{className:"text-white mb-5 max-button",children:'I am an aspiring software engineer currently looking for opportunities to perfect my craft. In my free time I play soccer and go to the gym. Click the "My Resume" button bellow to know more about me.'}),Object(a.jsx)(x.a,{variant:"outline-light",href:"".concat("/My-Website","/RESUME-12:25:20.pdf"),size:"ld",download:!0,children:"My Resume"})]})})}),O=n(18),p=n(24),f=n.n(p),y=n(39),k=n.n(y),v=n(40),w=n.n(v),N=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){e.link.includes("medium")?s(Object(a.jsx)(O.Icon,{icon:w.a})):e.link.includes("github")?s(Object(a.jsx)(O.Icon,{icon:f.a})):e.link.includes("linkedin")&&s(Object(a.jsx)(O.Icon,{icon:k.a}))}),[e]),Object(a.jsx)(x.a,{variant:"outline-light",href:e.link,className:"mb-3 max-button",size:"lg",block:!0,children:i})},W=function(){return Object(a.jsx)(m.a,{children:Object(a.jsxs)("div",{className:"mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center",children:[Object(a.jsx)(j.a,{alt:"logo",width:"120",height:"150",src:"".concat("/My-Website","/HamidouBallo1.JPG"),className:"mb-4",rounded:!0}),Object(a.jsx)("h5",{className:"mb-4 text-white",children:"Hamidou Ballo"}),["https://github.com/Waraba2","https://www.linkedin.com/in/waraba2/","https://medium.com/@ballowara"].map((function(e){return Object(a.jsx)(N,{link:e},e)}))]})})},M=function(){return Object(a.jsx)(W,{})},I=n(61),C=function(e){return Object(a.jsxs)(I.a,{className:"col-12 col-md-6 col-lg-3 mx-3 my-3",children:[Object(a.jsxs)(I.a.Body,{children:[Object(a.jsx)(I.a.Title,{children:e.name}),Object(a.jsx)(I.a.Text,{children:e.description}),Object(a.jsxs)(I.a.Text,{children:[Object(a.jsx)("strong",{children:"Language/Framework:   "}),e.languages]})]}),Object(a.jsxs)("div",{className:"d-flex flex-row justify-content-around mb-3",children:[Object(a.jsx)(x.a,{variant:"outline-primary",href:e.github,children:Object(a.jsx)(O.Icon,{icon:f.a})}),""!==e.url&&Object(a.jsx)(x.a,{variant:"outline-success",href:e.url,children:"It's live"})]})]})},E=function(){return Object(a.jsxs)("div",{className:"py-3 d-flex flex-column justify-content-center align-items-center align-content-center",children:[Object(a.jsx)("h2",{style:{color:"White"},children:"My Projects"}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row justify-content-center",children:[{name:"Text Proofreader",url:"",github:"https://github.com/Waraba2/Text-Proofreader",languages:"C++",description:"Analyses text and return if a word is repeated too much in a the text."},{name:"Arithmetic Expression Evaluator",url:"",github:"https://github.com/Waraba2/Arithmetic-Expression-Evaluator",languages:"C++",description:"A program that evaluates arithmetic operations using a data structure called stacks."},{name:"Portfolio Website",url:"https://waraba2.github.io/My-Website/",github:"https://github.com/Waraba2/My-Website",languages:"React.js",description:"This a website that displays my software development skills."},{name:"Sorting Algorithm analysis",url:"",github:"https://github.com/Waraba2/Compare-Sorting-Algorithms",languages:"C++",description:"Programed and compared sorting algorithms like Merge, Quick, Heap, Selection and Insertion sort."},{name:"Doubly Circular Linked List",url:"",github:"https://github.com/Waraba2/Doubly-Circular-Linked-List",languages:"C++",description:"Implementation of a data structure"}].map((function(e,t){return Object(a.jsx)(C,{url:e.url,name:e.name,github:e.github,languages:e.languages,description:e.description},t)}))})})]})},L=function(){return Object(a.jsx)(E,{})},A=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(h,{}),Object(a.jsx)("main",{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",exact:!0,children:Object(a.jsx)(M,{})}),Object(a.jsx)(l.b,{path:"/projects",exact:!0,children:Object(a.jsx)(L,{})}),Object(a.jsx)(l.b,{path:"/about",exact:!0,children:Object(a.jsx)(g,{})}),Object(a.jsx)(l.a,{to:"/"})]})})]})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a314fa57.chunk.js.map