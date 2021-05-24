(this["webpackJsonpstanford-finances"]=this["webpackJsonpstanford-finances"]||[]).push([[0],{273:function(e,t,n){},274:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(17),r=n.n(a),c=(n(273),n(274),n(465)),o=n(3),l=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{class:"header-margin",children:"The Big Bad Budget"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{item:!0,xs:"10",md:"8",children:Object(o.jsx)("p",{children:"In order to understand Stanford\u2019s finances, first we have to look at where the money comes from and where it goes. Below, you can find an interactive chart where you can explore each of Stanford\u2019s main sources of revenue and a breakdown of how that money gets distributed through the budget plan."})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},d=n(16),j=n(127),b=function(){function e(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var t=function(){var t=Object(i.useState)(e()),n=Object(d.a)(t,2),s=n[0],a=n[1];return Object(i.useEffect)((function(){function t(){a(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),s}().width,n=function(){return t<750?40:300};return Object(o.jsx)("div",{style:{height:600},children:Object(o.jsx)(j.a,{data:[{id:"University-sponsored Research",label:"University-sponsored Research",value:1147,color:"hsl(304, 70%, 50%)"},{id:"Investment Income",label:"Investment Income",value:1657.6,color:"hsl(218, 70%, 50%)"},{id:"Health Care Services",label:"Health Care Services",value:1423.8,color:"hsl(67, 70%, 50%)"},{id:"Student Income",label:"Student Income",value:1017.6,color:"hsl(67, 70%, 50%)"},{id:"SLAC Sponsored Research",label:"SLAC Sponsored Research",value:488.4,color:"hsl(67, 70%, 50%)"},{id:"Special Program Fees and Other Income",label:"Special Program Fees and Other Income",value:578.7,color:"hsl(218, 70%, 50%)"},{id:"Gifts and Net Assets",label:"Gifts and Net Assets",value:445.1,color:"hsl(294, 70%, 50%)"}],sortByValue:!0,valueFormat:">-$0,.2f",margin:{top:50,bottom:50,right:n(),left:n()},innerRadius:.5,startAngle:30,endAngle:390,padAngle:1,cornerRadius:1,activeOuterRadiusOffset:8,colors:{scheme:"set2"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},enableArcLinkLabels:!(t<750),arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",3]]},theme:{fontFamily:"Source Sans Pro, sans",fontSize:18},tooltip:function(e){return function(e){var n=e.datum.id,i="";switch(n){case"Gifts and Net Assets":i="gna description";break;case"University-sponsored Research":i="usr description";break;case"Investment Income":i="invest description";break;case"Special Program Fees and Other Income":i="spfoi description";break;case"Health Care Services":i="hcs description";break;case"Student Income":i="stuincome description";break;case"SLAC Sponsored Research":i="slac description"}return n=t<750?e.datum.id+": ":"",Object(o.jsx)("div",{style:{backgroundColor:"white",borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",width:300},children:Object(o.jsx)("div",{style:{margin:8},children:Object(o.jsxs)("span",{children:[Object(o.jsx)("b",{children:n}),i]})})})}(e)}})})},u=function(){function e(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var t=function(){var t=Object(i.useState)(e()),n=Object(d.a)(t,2),s=n[0],a=n[1];return Object(i.useEffect)((function(){function t(){a(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),s}().width,n=function(){return t<750?40:300};return Object(o.jsx)("div",{style:{height:600},children:Object(o.jsx)(j.a,{data:[{id:"Academic Units",label:"Academic Units",value:5250.6,color:"hsl(294, 70%, 50%)"},{id:"Administrative",label:"Administrative",value:138.4,color:"hsl(304, 70%, 50%)"},{id:"Auxiliary",label:"Auxiliary",value:449.5,color:"hsl(218, 70%, 50%)"}],valueFormat:">-$0,.2f",margin:{top:50,bottom:50,right:n(),left:n()},innerRadius:.5,startAngle:-200,endAngle:160,padAngle:1,cornerRadius:1,activeOuterRadiusOffset:8,colors:{scheme:"set2"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},enableArcLinkLabels:!(t<750),arcLinkLabelsSkipAngle:0,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:0,arcLabelsTextColor:{from:"color",modifiers:[["darker",3]]},theme:{fontFamily:"Source Sans Pro, sans",fontSize:18,textColor:"black"},tooltip:function(e){return function(e){var n=e.datum.id,i="";switch(n){case"Academic Units":i="Academic Units description";break;case"Administrative":i="Administrative description";break;case"Auxiliary":i="Auxiliary description"}return n=t<750?e.datum.id+": ":"",Object(o.jsx)("div",{style:{backgroundColor:"white",borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",width:300},children:Object(o.jsx)("div",{style:{margin:8},children:Object(o.jsxs)("span",{children:[Object(o.jsx)("b",{children:n}),i]})})})}(e)}})})},h=function(){return Object(o.jsxs)("div",{id:"budget",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{id:"budget-graphic-div",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{style:{height:300}}),Object(o.jsx)(u,{})]})]})},m=n(471),x=n(479),O=n(472),f=n(473),p=n(474),g=n(87),v=n.n(g),S=Object(m.a)({accordionStyle:{border:"1px solid rgba(0, 0, 0, .125)"},question:{fontSize:"200",fontWeight:"900",fontFamily:"Source Sans Pro, sans"}}),y=function(){var e=S(),t=Object(i.useState)(),n=Object(d.a)(t,2),s=n[0],a=n[1],r=function(e){return function(t,n){a(!!n&&e)}};return Object(o.jsxs)(c.a,{container:!0,id:"faq",children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{class:"header-margin",children:"FAQ"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsxs)(c.a,{item:!0,xs:"10",md:"8",children:[Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel1"===s,onChange:r("panel1"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(f.a,{className:e.question,variant:"h5",children:"Who am I?"})}),Object(o.jsx)(p.a,{children:Object(o.jsx)(f.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel2"===s,onChange:r("panel2"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel2d-content",id:"panel2d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(f.a,{className:e.question,variant:"h5",children:"What am I?"})}),Object(o.jsx)(p.a,{children:Object(o.jsx)(f.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel3"===s,onChange:r("panel3"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel3d-content",id:"panel3d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(f.a,{className:e.question,variant:"h5",children:"Where am I?"})}),Object(o.jsx)(p.a,{children:Object(o.jsx)(f.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel4"===s,onChange:r("panel4"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel4d-content",id:"panel4d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(f.a,{className:e.question,variant:"h5",children:"Why am I?"})}),Object(o.jsx)(p.a,{children:Object(o.jsx)(f.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(o.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel5"===s,onChange:r("panel5"),children:[Object(o.jsx)(O.a,{"aria-controls":"panel5d-content",id:"panel5d-header",expandIcon:Object(o.jsx)(v.a,{}),children:Object(o.jsx)(f.a,{className:e.question,variant:"h5",children:"How am I?"})}),Object(o.jsx)(p.a,{children:Object(o.jsx)(f.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},k=n(475),w=Object(m.a)({appBarStyle:{backgroundColor:"#B1040E"},stanfordFont:{fontFamily:"Source Serif Pro, serif"},margins:{marginTop:"5px",marginBottom:"5px"},footerText:{fontSize:"12",fontFamily:"Source Sans Pro, sans",textAlign:"end"}}),A=function(){var e=w();return Object(o.jsx)("div",{children:Object(o.jsx)(k.a,{className:e.appBarStyle,position:"static",children:Object(o.jsxs)(c.a,{container:!0,className:e.margins,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"4",children:Object(o.jsx)(f.a,{className:e.stanfordFont,variant:"h6",color:"inherit",children:"Stanford University"})}),Object(o.jsx)(c.a,{item:!0,xs:"6",children:Object(o.jsx)(f.a,{className:e.footerText,color:"inherit",children:"@ Stanford University. Stanford, California 94305."})}),Object(o.jsx)(c.a,{item:!0,xs:"1"})]})})})},L=Object(m.a)({appBarStyle:{backgroundColor:"#B1040E"},stanfordFont:{fontFamily:"Source Serif Pro, serif"},margins:{marginTop:"5px",marginBottom:"5px"}}),C=function(){var e=L();return Object(o.jsx)(k.a,{className:e.appBarStyle,position:"static",children:Object(o.jsxs)(c.a,{container:!0,className:e.margins,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)(f.a,{className:e.stanfordFont,variant:"h6",color:"inherit",children:"Stanford | Finances"})})]})})},N=function(){return Object(o.jsxs)(c.a,{container:!0,xs:12,style:{position:"absolute",top:40},justify:"center",alignItems:"center",children:[Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(o.jsx)(c.a,{item:!0,xs:10,sm:10,md:10,lg:8,children:Object(o.jsx)(f.a,{class:"intro-title",variant:"h1",children:"Understanding Stanford's Finances"})}),Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(o.jsx)(c.a,{container:!0,item:!0,xs:10,sm:10,md:10,lg:8,style:{position:"relative",bottom:30},children:Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsxs)("p",{class:"intro-desc",children:["Have you ever wondered where your tuition money goes? How does Stanford pay for all those t-shirts? ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Who makes budgeting decisions? And why does Stanford have a giant endowment yet never seems to use it? ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"In this website, we will attempt to dive into these sorts of questions about Stanford Finances and give some clarity on how Stanford uses its money."]})})}),Object(o.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2})]})},I=function(){return Object(o.jsxs)("div",{id:"intro",children:[Object(o.jsx)(C,{}),Object(o.jsxs)("div",{style:{position:"relative"},children:[Object(o.jsx)("div",{id:"intro-div"}),Object(o.jsx)(N,{})]})]})},F=n(252),R=n.n(F),T=function(){return Object(o.jsxs)(R.a,{id:"#nav",className:"nav-style hidden-mobile",items:["intro","budget","sankey","timeline","faq","resources"],currentClassName:"current-section",children:[Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#intro",ref:Object(i.createRef)(),children:"INTRO"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#budget",ref:Object(i.createRef)(),children:"BUDGET"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#sankey",ref:Object(i.createRef)(),children:"SANKEY"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#timeline",ref:Object(i.createRef)(),children:"TIMELINE"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#faq",ref:Object(i.createRef)(),children:"FAQ"})}),Object(o.jsx)("li",{className:"no-bullet",children:Object(o.jsx)("a",{className:"nav-link nav-link-ltr",href:"#resources",ref:Object(i.createRef)(),children:"RESOURCES"})})]})},B=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{id:"resources",class:"header-margin",children:"Resources"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{item:!0,xs:"10",md:"8",style:{position:"relative",bottom:20},children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Check out the following Stanford Magazine article: ",Object(o.jsx)("a",{href:"https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that",children:"Stanford Magazine"})]}),Object(o.jsxs)("li",{children:["Learn more through Stanford Fingate: ",Object(o.jsx)("a",{href:"https://fingate.stanford.edu/managing-funds/endowments#anchor-8021",children:"Stanford Fingate"})]})]})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},q=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{class:"header-margin",children:"The Student Sankey"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsxs)(c.a,{container:!0,item:!0,xs:"10",md:"8",justify:"center",children:[Object(o.jsx)("p",{children:"But looking at the revenue and budget breakdown is incredibly impersonal. How does it relate to us as students? What is your giant tuition paying for exactly?"}),Object(o.jsx)("p",{children:"Check out the sankey graph below to see the flow of money centered around the student experience. Hover over a section to learn more about it!"})]}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{container:!0,item:!0,xs:"12",justify:"center",children:Object(o.jsx)("h3",{children:"2020-2021 Academic Year"})})]})},E=n(256),P=Object(m.a)({tipHeader:{fontWeight:"bold"},tipDesc:{},nodeStyle:{fontWeight:"bold"}}),W=function(){var e=P();function t(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var n=function(){var e=Object(i.useState)(t()),n=Object(d.a)(e,2),s=n[0],a=n[1];return Object(i.useEffect)((function(){function e(){a(t())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s}().width;return Object(o.jsxs)(c.a,{container:!0,justify:"center",xs:12,children:[Object(o.jsx)(c.a,{item:!0,sm:0,md:1,lg:2}),Object(o.jsx)(c.a,{container:!0,item:!0,sm:12,md:10,lg:8,alignItems:"center",style:{height:"600px",minWidth:"700px"},children:Object(o.jsx)(E.a,{data:{nodes:[{id:"Price per Student"},{id:"Stanford Subsidy"},{id:""},{id:"Instruct/Dept Research"},{id:"FinAid Costs"},{id:"Dep't Administration"},{id:"Library"},{id:"Facilities O&M"},{id:"Student Services"},{id:"Administration (G&A)"},{id:"Depreciation"},{id:"Institutional/Community"}],links:[{source:"Price per Student",target:"",value:78165},{source:"Stanford Subsidy",target:"",value:77643.67},{source:"",target:"Instruct/Dept Research",value:69624.43},{source:"",target:"FinAid Costs",value:31755.31},{source:"",target:"Dep't Administration",value:19275.27},{source:"",target:"Facilities O&M",value:7609.43},{source:"",target:"Library",value:7479.56},{source:"",target:"Student Services",value:7082.68},{source:"",target:"Administration (G&A)",value:5088.03},{source:"",target:"Depreciation",value:4740.75},{source:"",target:"Institutional/Community",value:3153.21}]},sort:"descending",margin:{top:20,bottom:20,left:160,right:160},align:"center",colors:{scheme:"category10"},nodeOpacity:1,nodeThickness:18,nodeInnerPadding:3,nodeSpacing:10,nodeStyle:{display:"flex",justifyContent:"space-evenly"},nodeBorderWidth:0,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},nodeTooltip:function(t){return""===t.label?Object(o.jsx)("span",{className:e.nodeStyle,children:"Student"}):Object(o.jsx)("span",{className:e.nodeStyle,children:t.label})},linkTooltip:function(t){return function(t){var n="",i="";switch(t.source.label){case"Price per Student":n="pps description",i="$78,165.00";break;case"Stanford Subsidy":n="ss description",i="$77,643.67"}switch(t.target.label){case"Instruct/Dept Research":n="I/D research description",i="$69,624.43";break;case"FinAid Costs":n="FA description",i="$31,755.31";break;case"Dep't Administration":n="DA description",i="$19,275.27";break;case"Library":n="library description",i="$7,479.56";break;case"Facilities O&M":n="fom description",i="$7,609.43";break;case"Student Services":n="stuserv description",i="$7,082.68";break;case"Administration (G&A)":n="admin g&a description",i="$5,088.03";break;case"Depreciation":n="dep description",i="$4,740.75";break;case"Institutional/Community":n="I/C description",i="$3,153.21"}return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:e.tipHeader,children:i}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:e.tipDesc,children:n})]})}(t)},linkOpacity:.5,linkHoverOpacity:.7,linkHoverOthersOpacity:.3,enableLinkGradient:!0,labelPosition:n<750?"inside":"outside",labelOrientation:"horizontal",labelPadding:10,labelTextColor:{from:"color",modifiers:[["darker",1]]},theme:{fontFamily:"Source Sans Pro, sans",fontSize:12}})}),Object(o.jsx)(c.a,{item:!0,sm:0,md:1,lg:2})]})},D=function(){return Object(o.jsxs)("div",{id:"sankey",children:[Object(o.jsx)(q,{}),Object(o.jsx)(W,{})]})},H=function(){return Object(o.jsxs)(c.a,{container:!0,children:[Object(o.jsx)(c.a,{item:!0,xs:"1"}),Object(o.jsx)(c.a,{item:!0,xs:"11",children:Object(o.jsx)("h1",{id:"timeline",class:"header-margin",children:"The Timeline"})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(o.jsx)(c.a,{item:!0,xs:"10",md:"8",children:Object(o.jsx)("p",{children:"Now that you\u2019ve been given a couple perspectives on how stanford\u2019s budget works, you might be wondering who\u2019s even making these decisions and how you can affect these decisions. Below you can find a timeline of decisions and who makes them. As mentioned above, it can get a little convoluted since each school and department has their own way of budgeting and deciding each year."})}),Object(o.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},z=function(){return Object(o.jsx)(H,{})},$=n(432),U=n(476),G=n(480),M=n(255),Q=n.n(M),J=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),n=t[0],s=t[1],a=function(){s(null)};return Object(o.jsxs)("div",{class:"hidden-large hamburger-div",children:[Object(o.jsx)($.a,{id:"hamburger-menu",edge:"end",color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(o.jsx)(Q.a,{})}),Object(o.jsxs)(U.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:a,children:[Object(o.jsx)(G.a,{onClick:a,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#intro",children:"Intro"})}),Object(o.jsx)(G.a,{onClick:a,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#budget",children:"Budget"})}),Object(o.jsx)(G.a,{onClick:a,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#sankey",children:"Sankey"})}),Object(o.jsx)(G.a,{onClick:a,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#timeline",children:"Timeline"})}),Object(o.jsx)(G.a,{onClick:a,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#faq",children:"FAQ"})}),Object(o.jsx)(G.a,{onClick:a,children:Object(o.jsx)("a",{class:"hamburger-item",href:"#resources",children:"Resources"})})]})]})},Y=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(I,{}),Object(o.jsx)(T,{}),Object(o.jsx)(J,{}),Object(o.jsx)(h,{}),Object(o.jsx)(D,{}),Object(o.jsx)(z,{}),Object(o.jsx)(y,{}),Object(o.jsx)(B,{}),Object(o.jsx)(A,{})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,482)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),K()}},[[403,1,2]]]);
//# sourceMappingURL=main.348ec198.chunk.js.map