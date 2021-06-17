(this["webpackJsonpstanford-finances"]=this["webpackJsonpstanford-finances"]||[]).push([[0],{273:function(e,t,n){},274:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(17),r=n.n(s),o=(n(273),n(274),n(16)),c=n(466),l=n(3),d=function(){return Object(l.jsxs)(c.a,{container:!0,children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"11",children:Object(l.jsx)("h1",{class:"header-margin",children:"Stanford's Budget"})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(l.jsxs)(c.a,{item:!0,xs:"10",md:"8",children:[Object(l.jsx)("p",{children:"In order to understand Stanford\u2019s finances, first we have to look at where the money comes from and where it goes. Below, you can find an interactive chart where you can explore each of Stanford\u2019s main sources of revenue and a breakdown of how that money gets distributed through the budget plan."}),Object(l.jsx)("p",{children:"Hover over or tap (for mobile) each revenue/expense for more information!"}),Object(l.jsx)("p",{style:{fontSize:14},children:Object(l.jsx)("i",{children:"*Note: Dollar amounts are in millions of dollars."})})]}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},h=n(127),u=n(19),b=function(){function e(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var t=function(){var t=Object(a.useState)(e()),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(a.useEffect)((function(){function t(){s(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}().width,n=function(){return t<750?40:200};return Object(l.jsxs)("div",{style:{height:500,fontWeight:"bold",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(l.jsx)("h2",{class:"budget-titles",children:"Budget Revenues"}),Object(l.jsx)(h.a,{data:[{id:"University-sponsored Research",label:"University-sponsored Research",value:1147,color:"#bb5a52"},{id:"Investment Income",label:"Investment Income",value:1657.6,color:"#f6b792"},{id:"Health Care Services",label:"Health Care Services",value:1423.8,color:"#ffc9b2"},{id:"Student Income",label:"Student Income",value:1017.6,color:"#e27f6a"},{id:"SLAC Sponsored Research",label:"SLAC Sponsored Research",value:488.4,color:"#f8b972"},{id:"Special Program Fees & Other Income",label:"Special Program Fees & Other Income",value:578.7,color:"#e99469"},{id:"Gifts & Net Assets",label:"Gifts & Net Assets",value:445.1,color:"#fbce73"}],sortByValue:!0,valueFormat:function(e){return"".concat((e/6758.2*100).toFixed(1),"%")},margin:{top:20,bottom:60,right:n(),left:n()},innerRadius:.5,startAngle:30,endAngle:390,padAngle:1,cornerRadius:1,activeOuterRadiusOffset:8,colors:{datum:"data.color"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},enableArcLinkLabels:!(t<750),arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",3]]},theme:{fontFamily:"Source Sans Pro, sans",fontSize:16},tooltip:function(e){return function(e){var n=e.datum.id,a=e.datum.value,i="",s="left",r=0;switch(n){case"Gifts & Net Assets":i="Expendable gifts are donations that are immediately available for purposes specified by the donor. Net assets released from restrictions include cash payments on gift pledges made in prior years, as well as pending gifts whose designation has been determined.",s="bottom",r=15;break;case"University-sponsored Research":i="This includes revenue from federally sponsored and non-federally sponsored research, excluding SLAC.",s="right";break;case"Investment Income":i="Stanford has a ~$29B endowment, which is composed of donations and land that the university owns. The Stanford Management Company invests the endowment on behalf of the university. A portion of the interest earned is used to fund the university budget. The rest of the interest earned is reinvested back into the endowment. The goal of the endowment is to fund the university in perpetuity.",s="left";break;case"Special Program Fees & Other Income":i="This revenue source is a collection of revenue streams that includes executive education, industrial affiliate,, pre-collegiate, and professional certificate fees; travel/study programs fees; technology licensing and patent income; as well as rental income from Stanford West, Colonnade, and Welch Road apartments. It also includes revenue from athletics (e.g. ticket sales and broadcast fees) and revenue from conference and symposium events.",s="right";break;case"Health Care Services":i="This revenue mostly comes from payments from the hospitals to the School of Medicine (SOM) for faculty physician services. The SOM \u201cloans\u201d faculty physicians to the hospital for clinical work. The hospitals reimburse the SOM, which pays the salaries of faculty physicians. Health care services revenue has been the fastest growing element of the Consolidated Budget over the past 15 years, with a compound annual growth rate of 11%.",s="top",r=0;break;case"Student Income":i="This includes all revenue the university receives from tuition and room and board payments.",s="right";break;case"SLAC Sponsored Research":i="This includes revenue from federally sponsored and non-federally sponsored research at the SLAC National Accelerator Laboratory, a research and development center for the Dept. of Energy.",s="bottom",r=15}return n=t<750?e.datum.id+", $".concat(a.toFixed(2),": "):"$".concat(a.toFixed(2),": "),Object(l.jsx)(u.g,{anchor:s,position:[0,r],children:Object(l.jsx)("div",{style:{backgroundColor:"white",borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",width:320,fontSize:16,fontWeight:"normal"},children:Object(l.jsx)("div",{style:{padding:12},children:Object(l.jsxs)("span",{children:[Object(l.jsx)("b",{children:n}),i]})})})})}(e)}})]})},m=function(){function e(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var t=function(){var t=Object(a.useState)(e()),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(a.useEffect)((function(){function t(){s(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}().width,n=function(){return t<750?40:200};return Object(l.jsxs)("div",{style:{height:500,fontWeight:"bold",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:40,marginTop:60},children:[Object(l.jsx)("h2",{class:"budget-titles",children:"Budget Expenses"}),Object(l.jsx)(h.a,{data:[{id:"School of Medicine",label:"School of Medicine",value:2660.2,color:"#B3C274"},{id:"School of Humanities & Sciences",label:"School of Humanities & Sciences",value:517.6,color:"#B3C274"},{id:"SLAC",label:"SLAC",value:492.4,color:"#B3C274"},{id:"School of Engineering",label:"School of Engineering",value:428.2,color:"#B3C274"},{id:"Graduate School of Business",label:"Graduate School of Business",value:299.3,color:"#B3C274"},{id:"Other",label:"Other",value:257.2,color:"#B3C274"},{id:"Dean of Research",label:"Dean of Research",value:248.6,color:"#B3C274"},{id:"School of Law",label:"School of Law",value:100.2,color:"#B3C274"},{id:"Libraries",label:"Libraries",value:92.8,color:"#B3C274"},{id:"Earth, Energy, Environmental Sciences",label:"Earth, Energy, Environmental Sciences",value:77.1,color:"#B3C274"},{id:"Graduate School of Education",label:"Graduate School of Education",value:77,color:"#B3C274"},{id:"Administrative",label:"Administrative",value:138.4,color:"#7BB261"},{id:"Auxiliary",label:"Auxiliary",value:449.5,color:"#5E9968"}],valueFormat:function(e){return"".concat((e/5838.5*100).toFixed(1),"%")},margin:{top:20,bottom:100,right:n(),left:n()},innerRadius:.5,startAngle:-200,endAngle:160,padAngle:1,cornerRadius:1,activeOuterRadiusOffset:8,colors:{datum:"data.color"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},enableArcLinkLabels:!0,arcLinkLabelsSkipAngle:0,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:0,arcLabelsTextColor:{from:"color",modifiers:[["darker",3]]},theme:{fontFamily:"Source Sans Pro, sans",fontSize:16,textColor:"black"},tooltip:function(e){return function(e){var n=e.datum.id,a=e.datum.value,i="",s="left";switch(n){case"Academic Units":i="This budget item is all of the divisions at Stanford that focus directly on education. It includes the different schools (Law, Engineering, etc.), research institutes (e.g. SLAC and Hoover), academic support divisions (e.g. Vice Provost for the Arts and Vice Provost for Undergraduate Education), and the libraries.",s="right";break;case"Administrative":i="This budget item includes all of the divisions at Stanford necessary for the institution to function but aren\u2019t directly involved in the academic mission. It includes everything from the General Counsel\u2019s Office to Student Affairs to The President and Provost\u2019s Offices. ",s="left";break;case"Auxiliary":i="This budget item consists of Athletics and Residential & Dining Enterprises. In normal years (i.e. non-COVID) bothBoth of these auxiliaries function as (nearly) self-sustaining operations which provide important services for the university.",s="left"}return n=t<750?e.datum.id+": $".concat(a.toFixed(2)):"$".concat(a.toFixed(2),": "),Object(l.jsx)(u.g,{anchor:s,position:[0,0],children:Object(l.jsx)("div",{style:{backgroundColor:"white",borderRadius:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",width:320,fontSize:16,fontWeight:"normal"},children:Object(l.jsx)("div",{style:{padding:12},children:Object(l.jsxs)("span",{children:[Object(l.jsx)("b",{children:n}),i]})})})})}(e)}})]})},j=function(){function e(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var t=function(){var t=Object(a.useState)(e()),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(a.useEffect)((function(){function t(){s(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}().width;return Object(l.jsxs)("div",{id:"budget",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{id:"budget-graphic-div",children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{style:{height:t<750?150:200}}),Object(l.jsx)(m,{})]})]})},f=n(472),x=n(480),g=n(473),p=n(474),O=n(475),v=n(87),y=n.n(v),S=Object(f.a)({accordionStyle:{border:"1px solid rgba(0, 0, 0, .125)"},question:{fontSize:"200",fontWeight:"900",fontFamily:"Source Sans Pro, sans"}}),w=function(){var e=S(),t=Object(a.useState)(),n=Object(o.a)(t,2),i=n[0],s=n[1],r=function(e){return function(t,n){s(!!n&&e)}};return Object(l.jsxs)(c.a,{container:!0,id:"faq",children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"11",children:Object(l.jsx)("h1",{class:"header-margin",children:"FAQ"})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(l.jsxs)(c.a,{item:!0,xs:"10",md:"8",children:[Object(l.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel1"===i,onChange:r("panel1"),children:[Object(l.jsx)(g.a,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:Object(l.jsx)(y.a,{}),children:Object(l.jsx)(p.a,{className:e.question,variant:"h5",children:"Who am I?"})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(l.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel2"===i,onChange:r("panel2"),children:[Object(l.jsx)(g.a,{"aria-controls":"panel2d-content",id:"panel2d-header",expandIcon:Object(l.jsx)(y.a,{}),children:Object(l.jsx)(p.a,{className:e.question,variant:"h5",children:"What am I?"})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(l.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel3"===i,onChange:r("panel3"),children:[Object(l.jsx)(g.a,{"aria-controls":"panel3d-content",id:"panel3d-header",expandIcon:Object(l.jsx)(y.a,{}),children:Object(l.jsx)(p.a,{className:e.question,variant:"h5",children:"Where am I?"})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(l.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel4"===i,onChange:r("panel4"),children:[Object(l.jsx)(g.a,{"aria-controls":"panel4d-content",id:"panel4d-header",expandIcon:Object(l.jsx)(y.a,{}),children:Object(l.jsx)(p.a,{className:e.question,variant:"h5",children:"Why am I?"})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(l.jsxs)(x.a,{className:e.accordionStyle,square:!0,expanded:"panel5"===i,onChange:r("panel5"),children:[Object(l.jsx)(g.a,{"aria-controls":"panel5d-content",id:"panel5d-header",expandIcon:Object(l.jsx)(y.a,{}),children:Object(l.jsx)(p.a,{className:e.question,variant:"h5",children:"How am I?"})}),Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{class:"faq-answer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},C=n(476),k=Object(f.a)({appBarStyle:{backgroundColor:"#8c1515"},stanfordFont:{fontFamily:"Source Serif Pro, serif"},margins:{marginTop:"5px",marginBottom:"5px"},footerText:{fontSize:"12",fontFamily:"Source Sans Pro, sans",textAlign:"end"}}),L=function(){var e=k();return Object(l.jsx)("div",{children:Object(l.jsx)(C.a,{className:e.appBarStyle,position:"static",children:Object(l.jsxs)(c.a,{container:!0,className:e.margins,children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"4",children:Object(l.jsx)(p.a,{className:e.stanfordFont,variant:"h6",color:"inherit",children:"Stanford University"})}),Object(l.jsx)(c.a,{item:!0,xs:"6",children:Object(l.jsx)(p.a,{className:e.footerText,color:"inherit",children:"@ Stanford University. Stanford, California 94305."})}),Object(l.jsx)(c.a,{item:!0,xs:"1"})]})})})},A=(n(13),Object(f.a)({appBarStyle:{backgroundColor:"#8c1515"},stanfordFont:{fontFamily:"Source Serif Pro, serif"},margins:{marginTop:"5px",marginBottom:"5px"}})),T=function(){var e=A();return Object(l.jsx)(C.a,{className:e.appBarStyle,position:"static",children:Object(l.jsxs)(c.a,{container:!0,className:e.margins,children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"11",children:Object(l.jsx)(p.a,{className:e.stanfordFont,variant:"h6",color:"inherit",children:"Stanford | Finances"})})]})})},I=function(){var e=Object(a.useState)({vertical:"top",horizontal:"center"}),t=Object(o.a)(e,2),n=t[0];t[1],n.vertical,n.horizontal;function i(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}(function(){var e=Object(a.useState)(i()),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){function e(){s(i())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n})().width;return Object(l.jsxs)("div",{id:"intro",children:[Object(l.jsx)(T,{}),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("div",{id:"intro-div"}),Object(l.jsxs)(c.a,{container:!0,xs:12,style:{position:"absolute",top:45},justify:"center",alignItems:"center",children:[Object(l.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(l.jsx)(c.a,{container:!0,item:!0,xs:10,sm:10,md:10,lg:8,children:Object(l.jsx)(p.a,{class:"intro-title",variant:"h2",children:"Stanford's Finances"})}),Object(l.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2})]})]})]})},E=n(252),F=n.n(E),N=function(){return Object(l.jsxs)(F.a,{style:{marginTop:20,marginBottom:20},id:"#nav",className:"nav-style hidden-mobile",items:["intro","budget","sankey","timeline","faq","resources"],currentClassName:"current-section",children:[Object(l.jsx)("li",{className:"no-bullet",children:Object(l.jsx)("a",{className:"nav-link nav-link-ltr",href:"#intro",ref:Object(a.createRef)(),children:"INTRO"})}),Object(l.jsx)("li",{className:"no-bullet",children:Object(l.jsx)("a",{className:"nav-link nav-link-ltr",href:"#budget",ref:Object(a.createRef)(),children:"BUDGET"})}),Object(l.jsx)("li",{className:"no-bullet",children:Object(l.jsx)("a",{className:"nav-link nav-link-ltr",href:"#sankey",ref:Object(a.createRef)(),children:"SANKEY"})}),Object(l.jsx)("li",{className:"no-bullet",children:Object(l.jsx)("a",{className:"nav-link nav-link-ltr",href:"#timeline",ref:Object(a.createRef)(),children:"TIMELINE"})}),Object(l.jsx)("li",{className:"no-bullet",children:Object(l.jsx)("a",{className:"nav-link nav-link-ltr",href:"#faq",ref:Object(a.createRef)(),children:"FAQ"})}),Object(l.jsx)("li",{className:"no-bullet",children:Object(l.jsx)("a",{className:"nav-link nav-link-ltr",href:"#resources",ref:Object(a.createRef)(),children:"RESOURCES"})})]})},B=function(){return Object(l.jsxs)(c.a,{container:!0,children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"11",children:Object(l.jsx)("h1",{id:"resources",class:"header-margin",children:"Resources"})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(l.jsx)(c.a,{item:!0,xs:"10",md:"8",style:{position:"relative",bottom:20},children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Check out the following Stanford Magazine article: ",Object(l.jsx)("a",{href:"https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that",children:"Stanford Magazine"})]}),Object(l.jsxs)("li",{children:["Learn more through Stanford Fingate: ",Object(l.jsx)("a",{href:"https://fingate.stanford.edu/managing-funds/endowments#anchor-8021",children:"Stanford Fingate"})]}),Object(l.jsxs)("li",{children:["And read this Stanford Daily article: ",Object(l.jsx)("a",{href:"https://stanforddaily.com/2020/03/05/stanford-as-a-vc/",children:"Stanford Daily"})]})]})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},R=function(){return Object(l.jsxs)(c.a,{container:!0,children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"11",children:Object(l.jsx)("h1",{class:"header-margin",children:"Student-Centered Sankey"})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(l.jsxs)(c.a,{container:!0,item:!0,xs:"10",md:"8",children:[Object(l.jsx)("p",{children:"This infographic shows the average financial picture of an undergraduate at Stanford. It includes how much undergraduates pay for tuition on average, how much Stanford subsidizes their education and how much of the money is spent on items and activities directly related to your experience at Stanford. Please note that this graph reflects the average amounts across the student body. You can use this graphic to see what your tuition is used for, how much of the cost of your education you are paying for, and how much Stanford is subsidizing it (more than you probably expect)."}),Object(l.jsx)("p",{children:"Check out the sankey graph below to see the flow of money centered around the student experience. Hover over or tap (for mobile) a section to learn more about it!"})]}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},z=n(256),W=Object(f.a)({nodeStyle:{fontWeight:"bold"}}),D=function(){var e=W();function t(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var n=function(){var e=Object(a.useState)(t()),n=Object(o.a)(e,2),i=n[0],s=n[1];return Object(a.useEffect)((function(){function e(){s(t())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}().width,i=function(){return n<750?150:230};return Object(l.jsxs)(c.a,{container:!0,justify:"center",xs:12,children:[Object(l.jsx)(c.a,{container:!0,item:!0,xs:"12",justify:"center",children:Object(l.jsxs)("h3",{class:"graphic-margin",children:["Costs per Student for the",Object(l.jsx)("br",{}),"2020-2021 Academic Year"]})}),Object(l.jsx)(c.a,{item:!0,sm:0,md:1,lg:2}),Object(l.jsx)(c.a,{container:!0,item:!0,sm:12,md:10,lg:8,alignItems:"center",style:{height:"500px",minWidth:"700px"},children:Object(l.jsx)(z.a,{data:{nodes:[{id:"AverageUndergraduateTuition",nodeColor:"#fab779"},{id:"AverageFinancialAidGivenbyStanford",nodeColor:"#e27f6a"},{id:"WhatStanfordCovers",nodeColor:"#bb5a52"},{id:"",nodeColor:"#f8ce73"},{id:"Instruction/Dep'tResearch",nodeColor:"#b3c274"},{id:"FinancialAidCosts",nodeColor:"#7bb261"},{id:"DepartmentalAdministration",nodeColor:"#5e9968"},{id:"FacilitiesO&MExpenses",nodeColor:"#70ab92"},{id:"Library",nodeColor:"#74c2a1"},{id:"StudentServices",nodeColor:"#98d6b9"},{id:"Administration(G&A)",nodeColor:"#93d1df"},{id:"Depreciation",nodeColor:"#72b6cb"},{id:"Institutional/Community",nodeColor:"#69adb6"}],links:[{source:"AverageUndergraduateTuition",target:"",value:39082.5,nodeColor:"#000000"},{source:"AverageFinancialAidGivenbyStanford",target:"",value:39082.5,nodeColor:"#000000"},{source:"WhatStanfordCovers",target:"",value:77643.67,nodeColor:"#000000"},{source:"",target:"Instruction/Dep'tResearch",value:69624.43,nodeColor:"#000000"},{source:"",target:"FinancialAidCosts",value:31755.31,nodeColor:"#000000"},{source:"",target:"DepartmentalAdministration",value:19275.27,nodeColor:"#000000"},{source:"",target:"FacilitiesO&MExpenses",value:7609.43,nodeColor:"#000000"},{source:"",target:"Library",value:7479.56,nodeColor:"#000000"},{source:"",target:"StudentServices",value:7082.68,nodeColor:"#000000"},{source:"",target:"Administration(G&A)",value:5088.03,nodeColor:"#000000"},{source:"",target:"Depreciation",value:4740.75,nodeColor:"#000000"},{source:"",target:"Institutional/Community",value:3153.21,nodeColor:"#000000"}]},sort:"input",margin:{top:0,bottom:20,left:i(),right:i()},align:"center",colors:function(e){return e.nodeColor},nodeOpacity:1,nodeThickness:18,nodeInnerPadding:3,nodeSpacing:10,nodeStyle:{display:"flex",justifyContent:"space-evenly"},nodeBorderWidth:0,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},nodeTooltip:function(t){return""===t.label?Object(l.jsx)("div",{style:{backgroundColor:"white",borderRadius:2,width:320,fontSize:18,whiteSpace:"normal"},children:Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:"The General Cost of a Student's Education"})})}):Object(l.jsx)("span",{className:e.nodeStyle,children:t.label})},linkTooltip:function(e){return function(e){var t="",n="";switch(e.source.label){case"AverageUndergraduateTuition":t="This category is the average amount that students actually pay in tuition (many students receive financial aid).",n="$39,082.50";break;case"AverageFinancialAidGivenbyStanford":t="This category is the average amount of financial aid per student. ",n="$39,082.50";break;case"WhatStanfordCovers":t="This category is the amount Stanford ends up paying over and above what students pay for their own education. This is the indirect subsidy Stanford pays.",n="$77,643.67"}switch(e.target.label){case"Instruction/Dep'tResearch":t="This category includes the direct costs of research and teaching and consists of pay for faculty, lecturers, and research staff and other research and teaching related expenses. ",n="$69,624.43";break;case"FinancialAidCosts":t="This category is money Stanford spends on financial aid (does not include external financial aid).",n="$31,755.31";break;case"DepartmentalAdministration":t="This category includes the costs of running departments like the departmental administrators. ",n="$19,275.27";break;case"Library":t="This category includes the costs of running the library. ",n="$7,479.56";break;case"FacilitiesO&MExpenses":t="This category is the amount spent to keep the physical buildings at Stanford up and running.",n="$7,609.43";break;case"StudentServices":t="This category includes admissions, academic advising, career planning, and other non-academic directly student facing services.",n="$7,082.68";break;case"Administration(G&A)":t="This category includes all of the general costs that go into running a large institution like HR, legal counsel, IT, etc.",n="$5,088.03";break;case"Depreciation":t="This category reflects the general decline in value that comes from the wear and tear on Stanford\u2019s buildings and other assets.",n="$4,740.75";break;case"Institutional/Community":t="This category is a catch all that includes things like Haas, Vaden, and the Community Centers.",n="$3,153.21"}return Object(l.jsx)("div",{style:{backgroundColor:"white",borderRadius:2,width:320,fontSize:16,whiteSpace:"normal"},children:Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:[Object(l.jsx)("b",{children:n}),": ",t]})})})}(e)},linkOpacity:.5,linkHoverOpacity:.7,linkHoverOthersOpacity:.3,enableLinkGradient:!0,labelPosition:n<750?"inside":"outside",labelOrientation:"horizontal",labelPadding:10,labelTextColor:{from:"color",modifiers:[["darker",1]]},theme:{fontFamily:"Source Sans Pro, sans",fontSize:14}})}),Object(l.jsx)(c.a,{item:!0,sm:0,md:1,lg:2})]})},H=function(){return Object(l.jsxs)("div",{id:"sankey",children:[Object(l.jsx)(R,{}),Object(l.jsx)(D,{})]})},q=function(){return Object(l.jsxs)(c.a,{container:!0,children:[Object(l.jsx)(c.a,{item:!0,xs:"1"}),Object(l.jsx)(c.a,{item:!0,xs:"11",children:Object(l.jsx)("h1",{id:"timeline",class:"header-margin",children:"Finances Timeline"})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"}),Object(l.jsx)(c.a,{item:!0,xs:"10",md:"8",children:Object(l.jsx)("p",{children:"Now that you\u2019ve been given a couple perspectives on how stanford\u2019s budget works, you might be wondering who\u2019s even making these decisions and how you can affect these decisions. Below you can find a timeline of decisions and who makes them. As mentioned above, it can get a little convoluted since each school and department has their own way of budgeting and deciding each year."})}),Object(l.jsx)(c.a,{item:!0,xs:"1",md:"2"})]})},P=function(){return Object(l.jsx)(q,{})},G=(n(432),n(477),n(481),n(255),function(){return Object(l.jsxs)(c.a,{className:"intro-desc",container:!0,xs:12,justify:"center",alignItems:"center",children:[Object(l.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2}),Object(l.jsx)(c.a,{container:!0,item:!0,xs:10,sm:10,md:10,lg:8,children:Object(l.jsxs)(c.a,{item:!0,xs:12,children:[Object(l.jsx)("p",{children:"Have you ever wondered where your tuition money goes? How does Stanford pay for all those t-shirts?"}),Object(l.jsx)("p",{children:"Who makes budgeting decisions? And why does Stanford have a giant endowment yet never seems to use it?"}),Object(l.jsx)("p",{children:"In this website, we will attempt to dive into these sorts of questions about Stanford Finances and give some clarity on how Stanford uses its money."})]})}),Object(l.jsx)(c.a,{item:!0,xs:1,sm:1,md:1,lg:2})]})}),$=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(I,{}),Object(l.jsx)(N,{}),Object(l.jsx)(G,{}),Object(l.jsx)(j,{}),Object(l.jsx)(H,{}),Object(l.jsx)(P,{}),Object(l.jsx)(w,{}),Object(l.jsx)(B,{}),Object(l.jsx)(L,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,483)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)($,{})}),document.getElementById("root")),M()}},[[403,1,2]]]);
//# sourceMappingURL=main.5084bca3.chunk.js.map