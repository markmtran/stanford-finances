(this["webpackJsonpstanford-finances"]=this["webpackJsonpstanford-finances"]||[]).push([[0],{279:function(e,t,a){},280:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(16),r=a.n(i),c=(a(279),a(280),a(479)),o=a(3),l=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{class:"header-margin",children:"The Big Bad Budget"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{item:!0,xs:"10",md:"8",children:Object(o.jsx)("p",{children:"In order to understand Stanford\u2019s finances, first we have to look at where the money comes from and where it goes. Below, you can find an interactive chart where you can explore each of Stanford\u2019s main sources of revenue and a breakdown of how that money gets distributed through the budget plan."})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},d=a(15),j=a(129),b=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(o.jsx)("div",{id:"budget-revenue",style:{height:600},children:Object(o.jsx)(j.a,{leavesOnly:!0,margin:{top:50,bottom:50},data:{name:"Revenues",children:[{id:"Gifts and Net Assets",name:"Gifts and Net Assets include yada yada yada",color:"hsl(40, 70%, 50%)",value:445.1},{id:"University-sponsored Research",name:"University-sponsored Research include yada yada yada",color:"hsl(40, 70%, 50%)",value:1147},{id:"Investment Income",name:"Investment Income include yada yada yada",color:"hsl(40, 70%, 50%)",value:1657.6},{id:"Special Program Fees and Other Income",name:"Special Program Fees and Other Income include yada yada yada",color:"hsl(40, 70%, 50%)",value:578.7},{id:"Health Care Services",name:"Health Care Services include yada yada yada",color:"hsl(40, 70%, 50%)",value:1423.8},{id:"Student Income",name:"Student Income include yada yada yada",color:"hsl(40, 70%, 50%)",value:1017.6},{id:"SLAC Sponsored Research",name:"SLAC Sponsored Research include yada yada yada",color:"hsl(40, 70%, 50%)",value:488.4}]},id:"id",value:"value",valueFormat:">-$0,.2f",colors:{scheme:"category10"},colorBy:"id",childColor:{from:"color",modifiers:[["brighter",.4]]},padding:10,enableLabels:!0,label:function(e){return function(e){var t=e.percentage.toFixed(2);return"".concat(t,"%")}(e)},labelsSkipRadius:200,labelTextColor:"white",borderWidth:2,borderColor:{from:"color",modifiers:[["darker",.5]]},onClick:function(e){return s(a===e.id?null:e.id)},zoomedId:a,theme:{fontFamily:"Source Sans Pro, sans",fontSize:100},tooltip:function(e){return function(e){var t=e.id,a=e.value.toFixed(2),n="";switch(t){case"Gifts and Net Assets":n="[examples for gifts]";break;case"University-sponsored Research":n="[examples for usr]";break;case"Investment Income":n="[examples for ii]";break;case"Special Program Fees and Other Income":n="[examples for special]";break;case"Health Care Services":n="[examples for health cs]";break;case"Student Income":n="[examples for stuincome]";break;case"SLAC Sponsored Research":n="[examples for slac]"}return Object(o.jsx)("div",{style:{width:450,height:"100%",backgroundColor:"white",borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",textAlign:"center"},children:Object(o.jsxs)("span",{children:[Object(o.jsx)("b",{children:e.id}),": ",Object(o.jsxs)("i",{children:["$",a]})," comes from things like ",n,"."]})})}(e)}})})},u=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(o.jsx)("div",{id:"budget-expense",style:{height:600},children:Object(o.jsx)(j.a,{leavesOnly:!0,margin:{top:50,bottom:50},data:{name:"Expenses",color:"hsl(124, 70%, 100%)",children:[{id:"Academic Units",color:"hsl(40, 70%, 50%)",value:5250.6},{id:"Administrative",color:"hsl(40, 70%, 50%)",value:138.4},{id:"Auxiliary",color:"hsl(40, 70%, 50%)",value:449.5}]},id:"id",value:"value",valueFormat:">-$0,.2f",colors:{scheme:"nivo"},colorBy:"id",childColor:{from:"color",modifiers:[["brighter",.4]]},padding:10,enableLabels:!0,label:function(e){return function(e){var t=e.percentage.toFixed(2);return"".concat(t,"%")}(e)},labelsSkipRadius:230,labelTextColor:"white",borderWidth:2,borderColor:{from:"color",modifiers:[["darker",.5]]},onClick:function(e){return s(a===e.id?null:e.id)},zoomedId:a,theme:{fontFamily:"Source Sans Pro, sans",fontSize:100},tooltip:function(e){return function(e){var t=e.id,a=e.value.toFixed(2),n="";switch(t){case"Academic Units":n="[examples for academic units]";break;case"Administrative":n="[examples for administrative]";break;case"Auxiliary":n="[examples for auxiliary]"}return Object(o.jsx)("div",{style:{width:400,height:"100%",backgroundColor:"white",borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",textAlign:"center"},children:Object(o.jsxs)("span",{children:[Object(o.jsx)("b",{children:e.id}),": ",Object(o.jsxs)("i",{children:["$",a]})," is allocated for things like ",n,"."]})})}(e)}})})},m=function(){return Object(o.jsxs)("div",{id:"budget",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{id:"budget-graphic-div",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{})]})]})},h=a(484),x=a(492),O=a(485),p=a(486),f=a(487),g=a(84),v=a.n(g),y=Object(h.a)({accordionStyle:{border:"1px solid rgba(0, 0, 0, .125)"},question:{fontSize:"200",fontWeight:"900",fontFamily:"Source Sans Pro, sans"},answer:{fontFamily:"Source Sans Pro, sans"}}),S=function(){var e=y(),t=Object(n.useState)(),a=Object(d.a)(t,2),s=a[0],i=a[1],r=function(e){return function(t,a){i(!!a&&e)}};return Object(o.jsxs)(c.a,{container:!0,id:"faq",children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{class:"header-margin",children:"FAQ"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsxs)(c.a,{item:!0,xs:"10",md:"8",children:[Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel1"===s,onChange:r("panel1"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(p.a,{className:e.question,variant:"h5",children:"Who am I?"})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(p.a,{className:e.answer,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel2"===s,onChange:r("panel2"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel2d-content",id:"panel2d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(p.a,{className:e.question,variant:"h5",children:"What am I?"})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(p.a,{className:e.answer,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel3"===s,onChange:r("panel3"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel3d-content",id:"panel3d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(p.a,{className:e.question,variant:"h5",children:"Where am I?"})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(p.a,{className:e.answer,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel4"===s,onChange:r("panel4"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel4d-content",id:"panel4d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(p.a,{className:e.question,variant:"h5",children:"Why am I?"})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(p.a,{className:e.answer,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel5"===s,onChange:r("panel5"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel5d-content",id:"panel5d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(p.a,{className:e.question,variant:"h5",children:"How am I?"})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(p.a,{className:e.answer,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},k=a(488),w=Object(h.a)({appBarStyle:{backgroundColor:"#B1040E"},stanfordFont:{fontFamily:"Source Serif Pro, serif"},margins:{marginTop:"5px",marginBottom:"5px"},footerText:{fontSize:"12",fontFamily:"Source Sans Pro, sans",textAlign:"end"}}),C=function(){var e=w();return Object(o.jsx)("div",{children:Object(o.jsx)(k.a,{className:e.appBarStyle,position:"static",children:Object(o.jsxs)(c.a,{container:!0,className:e.margins,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"4",children:Object(o.jsx)(p.a,{className:e.stanfordFont,variant:"h6",color:"inherit",children:"Stanford University"})}),Object(o.jsx)(c.a,{item:!0,xs:"6",children:Object(o.jsx)(p.a,{className:e.footerText,color:"inherit",children:"@ Stanford University. Stanford, California 94305."})}),Object(o.jsx)(c.a,{item:!0,xs:"1"})]})})})},N=Object(h.a)({appBarStyle:{backgroundColor:"#B1040E"},stanfordFont:{fontFamily:"Source Serif Pro, serif"},margins:{marginTop:"5px",marginBottom:"5px"}}),I=function(){var e=N();return Object(o.jsx)(k.a,{className:e.appBarStyle,position:"static",children:Object(o.jsxs)(c.a,{container:!0,className:e.margins,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)(p.a,{className:e.stanfordFont,variant:"h6",color:"inherit",children:"Stanford | Finances"})})]})})},F=function(){return Object(o.jsxs)(c.a,{container:!0,xs:12,style:{position:"absolute",top:40},justify:"center",alignItems:"center",children:[Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(o.jsx)(c.a,{item:!0,xs:10,sm:10,md:10,lg:8,children:Object(o.jsx)(p.a,{class:"intro-title",variant:"h1",children:"Understanding Stanford's Finances"})}),Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(o.jsx)(c.a,{container:!0,item:!0,xs:10,sm:10,md:10,lg:8,style:{position:"relative",bottom:30},children:Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)("p",{class:"intro-desc",children:["Have you ever wondered where your tuition money goes? How does Stanford pay for all those t-shirts? ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Who makes budgeting decisions? And why does Stanford have a giant endowment yet never seems to use it? ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"In this website, we will attempt to dive into these sorts of questions about Stanford Finances and give some clarity on how Stanford uses its money."]})})}),Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2})]})},A=function(){return Object(o.jsxs)("div",{id:"intro",children:[Object(o.jsx)(I,{}),Object(o.jsxs)("div",{style:{position:"relative"},children:[Object(o.jsx)("div",{id:"intro-div"}),Object(o.jsx)(F,{})]})]})},L=a(256),R=a.n(L),B=function(){return Object(o.jsxs)(R.a,{id:"#nav",className:"nav-style hidden-mobile",items:["intro","budget","sankey","timeline","faq","resources"],currentClassName:"current-section",children:[Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#intro",ref:Object(n.createRef)(),children:"INTRO"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#budget",ref:Object(n.createRef)(),children:"BUDGET"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#sankey",ref:Object(n.createRef)(),children:"SANKEY"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#timeline",ref:Object(n.createRef)(),children:"TIMELINE"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#faq",ref:Object(n.createRef)(),children:"FAQ"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#resources",ref:Object(n.createRef)(),children:"RESOURCES"})})]})},T=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{id:"resources",class:"header-margin",children:"Resources"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{item:!0,xs:"10",md:"8",style:{position:"relative",bottom:20},children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Check out the following Stanford Magazine article: ",Object(o.jsx)("a",{href:"https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that",children:"Stanford Magazine"})]}),Object(o.jsxs)("li",{children:["Learn more through Stanford Fingate: ",Object(o.jsx)("a",{href:"https://fingate.stanford.edu/managing-funds/endowments#anchor-8021",children:"Stanford Fingate"})]})]})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},P=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{class:"header-margin",children:"The Student Sankey"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsxs)(c.a,{container:!0,item:!0,xs:"10",md:"8",justify:"center",children:[Object(o.jsx)("p",{children:"But looking at the revenue and budget breakdown is incredibly impersonal. How does it relate to us as students? What is your giant tuition paying for exactly?"}),Object(o.jsx)("p",{children:"Check out the sankey graph below to see the flow of money centered around the student experience. Hover over a section to learn more about it!"})]}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{container:!0,item:!0,xs:"12",justify:"center",children:Object(o.jsx)("h3",{children:"2020-2021 Academic Year"})})]})},q=a(260),D=Object(h.a)({tipHeader:{fontWeight:"bold"},tipDesc:{},nodeStyle:{fontWeight:"bold"}}),$=function(){var e=D();function t(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var a=function(){var e=Object(n.useState)(t()),a=Object(d.a)(e,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){function e(){i(t())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s}().width;return Object(o.jsxs)(c.a,{container:!0,justify:"center",xs:12,children:[Object(o.jsx)(c.a,{item:!0,sm:0,md:1,lg:2}),Object(o.jsx)(c.a,{container:!0,item:!0,sm:12,md:10,lg:8,alignItems:"center",style:{height:"600px",minWidth:"700px"},children:Object(o.jsx)(q.a,{data:{nodes:[{id:"Price per Student"},{id:"Stanford Subsidy"},{id:""},{id:"Instruct/Dept Research"},{id:"FinAid Costs"},{id:"Dep't Administration"},{id:"Library"},{id:"Facilities O&M"},{id:"Student Services"},{id:"Administration (G&A)"},{id:"Depreciation"},{id:"Institutional/Community"}],links:[{source:"Price per Student",target:"",value:78165},{source:"Stanford Subsidy",target:"",value:77643.67},{source:"",target:"Instruct/Dept Research",value:69624.43},{source:"",target:"FinAid Costs",value:31755.31},{source:"",target:"Dep't Administration",value:19275.27},{source:"",target:"Facilities O&M",value:7609.43},{source:"",target:"Library",value:7479.56},{source:"",target:"Student Services",value:7082.68},{source:"",target:"Administration (G&A)",value:5088.03},{source:"",target:"Depreciation",value:4740.75},{source:"",target:"Institutional/Community",value:3153.21}]},sort:"descending",margin:{top:20,bottom:20,left:140,right:140},align:"center",colors:{scheme:"category10"},nodeOpacity:1,nodeThickness:18,nodeInnerPadding:3,nodeSpacing:10,nodeStyle:{display:"flex",justifyContent:"space-evenly"},nodeBorderWidth:0,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},nodeTooltip:function(t){return""===t.label?Object(o.jsx)("span",{className:e.nodeStyle,children:"Student"}):Object(o.jsx)("span",{className:e.nodeStyle,children:t.label})},linkTooltip:function(t){return function(t){var a="",n="";switch(t.source.label){case"Price per Student":a="pps description",n="$78,165.00";break;case"Stanford Subsidy":a="ss description",n="$77,643.67"}switch(t.target.label){case"Instruct/Dept Research":a="I/D research description",n="$69,624.43";break;case"FinAid Costs":a="FA description",n="$31,755.31";break;case"Dep't Administration":a="DA description",n="$19,275.27";break;case"Library":a="library description",n="$7,479.56";break;case"Facilities O&M":a="fom description",n="$7,609.43";break;case"Student Services":a="stuserv description",n="$7,082.68";break;case"Administration (G&A)":a="admin g&a description",n="$5,088.03";break;case"Depreciation":a="dep description",n="$4,740.75";break;case"Institutional/Community":a="I/C description",n="$3,153.21"}return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:e.tipHeader,children:n}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:e.tipDesc,children:a})]})}(t)},linkOpacity:.5,linkHoverOpacity:.7,linkHoverOthersOpacity:.3,enableLinkGradient:!0,labelPosition:a<750?"inside":"outside",labelOrientation:"horizontal",labelPadding:10,labelTextColor:{from:"color",modifiers:[["darker",1]]}})}),Object(o.jsx)(c.a,{item:!0,sm:0,md:1,lg:2})]})},E=function(){return Object(o.jsxs)("div",{id:"sankey",children:[Object(o.jsx)(P,{}),Object(o.jsx)($,{})]})},W=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{id:"timeline",class:"header-margin",children:"The Timeline"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{item:!0,xs:"10",md:"8",children:Object(o.jsx)("p",{children:"Now that you\u2019ve been given a couple perspectives on how stanford\u2019s budget works, you might be wondering who\u2019s even making these decisions and how you can affect these decisions. Below you can find a timeline of decisions and who makes them. As mentioned above, it can get a little convoluted since each school and department has their own way of budgeting and deciding each year."})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},H=function(){return Object(o.jsx)(W,{})},z=a(447),U=a(489),G=a(493),M=a(259),Q=a.n(M),J=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],s=t[1],i=function(){s(null)};return Object(o.jsxs)("div",{class:"hidden-large hamburger-div",children:[Object(o.jsx)(z.a,{id:"hamburger-menu",edge:"end",color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(o.jsx)(Q.a,{})}),Object(o.jsxs)(U.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:i,children:[Object(o.jsx)(G.a,{onClick:i,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#intro",children:"Intro"})}),Object(o.jsx)(G.a,{onClick:i,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#budget",children:"Budget"})}),Object(o.jsx)(G.a,{onClick:i,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#sankey",children:"Sankey"})}),Object(o.jsx)(G.a,{onClick:i,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#timeline",children:"Timeline"})}),Object(o.jsx)(G.a,{onClick:i,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#faq",children:"FAQ"})}),Object(o.jsx)(G.a,{onClick:i,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#resources",children:"Resources"})})]})]})},Y=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(A,{}),Object(o.jsx)(B,{}),Object(o.jsx)(J,{}),Object(o.jsx)(m,{}),Object(o.jsx)(E,{}),Object(o.jsx)(H,{}),Object(o.jsx)(S,{}),Object(o.jsx)(T,{}),Object(o.jsx)(C,{})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,495)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),K()}},[[419,1,2]]]);
//# sourceMappingURL=main.960e6114.chunk.js.map