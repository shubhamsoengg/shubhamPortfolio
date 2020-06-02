(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports=t.p+"static/media/profile_2.f04808ae.jpg"},,function(e,a,t){e.exports=t.p+"static/media/covid_viz.677ecd48.png"},function(e,a,t){e.exports=t.p+"static/media/sorter_viz.b50b9390.png"},function(e,a,t){e.exports=t.p+"static/media/aus_open_viz.d14668c0.png"},function(e,a,t){e.exports=t.p+"static/media/bms_logo.c88a71ba.png"},function(e,a,t){e.exports=t.p+"static/media/asu_logo.090e3549.png"},function(e,a,t){e.exports=t.p+"static/media/mcf_logo.a0ddf3ec.png"},function(e,a,t){e.exports=t.p+"static/media/ge_logo.dbf2df15.png"},function(e,a,t){e.exports=t.p+"static/media/SHUBHAM_GOYAL_RESUME.6b55ca5d.pdf"},function(e,a,t){e.exports=t(44)},,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports=t.p+"static/media/profile.2829b57c.jpg"},,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),s=t.n(r),c=t(7),o=(t(35),t(9)),i=t(10),m=t(12),p=t(11),d=t(1),h=t(20),u=t.n(h);t(14);function g(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav-profile-pic"},l.a.createElement("img",{src:u.a,alt:"nav_profile_pic "})),l.a.createElement("ul",{className:"category-list"},e.categoryItems.map((function(a){return l.a.createElement("li",{key:a.categoryId,className:a.active?"item active":"item",onClick:function(){return e.onCategoryChange(a)}},l.a.createElement(c.b,{to:a.link},a.name))}))))}t(41);function f(){return l.a.createElement("div",{className:"about-wrapper"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"portfolio-title text-left"},l.a.createElement("h1",null,"SHUBHAM GOYAL")),l.a.createElement("div",{className:"about-tag text-left"},l.a.createElement("h2",null,"Fullstack Developer | Technology Enthusiast ")),l.a.createElement("div",{className:"about-content"},'"Hi, I\'m Shubham. I am currently a Masters student at Arizona State University and a Web Developer at heart. A big movie buff, in my spare time I like to Netflix and chill and play lots of chess. Hit me up if you want to collaborate on a project or wanna play a game of chess or two !"'),l.a.createElement("div",{className:"home-social-icons"},l.a.createElement("a",{href:"https://twitter.com/SHUBHAM56861690",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"twitter fa fa-2x fa-twitter-square"})," Twitter"),l.a.createElement("a",{href:"https://www.facebook.com/shhubham.goyal",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"facebook fa fa-2x fa-facebook-square"})," ","Facebook"),l.a.createElement("a",{href:"https://github.com/shubhamsoengg/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"github fa fa-2x fa-github-square"})," Github"),l.a.createElement("a",{href:"https://www.linkedin.com/in/shubham93/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"linkedin fa fa-2x fa-linkedin-square"})," ","LinkedIn")))}function E(e){return l.a.createElement("div",{className:"project-card row"},l.a.createElement("div",{className:"col-sm-7 project-desc-wrapper"},l.a.createElement("h5",{className:"project-title text-left"},e.project.name),l.a.createElement("div",{className:"project-description"},l.a.createElement("p",null,e.project.description)),l.a.createElement("div",{className:"tech-stack"},l.a.createElement("span",{className:"font-weight-bold"},"Tech Stack: "),function(e){var a=e.split(",");return console.log(a),a.map((function(e){return l.a.createElement("li",{className:"techElem",key:e},e)}))}(e.project.techStack)),l.a.createElement("a",{className:"goto-link btn",href:e.project.link,target:"_blank",rel:"noopener noreferrer"},"View on github.io")),l.a.createElement("div",{className:"col-sm-5"},l.a.createElement("img",{src:e.project.imageName,alt:"",className:"project-snapshot"})))}var v=t(22),b=t.n(v),w=t(23),N=t.n(w),k=t(24),y=t.n(k),S=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={projects:[{projectId:"covid_viz",name:"COVID-19 Visualizer",link:"https://shubhamsoengg.github.io/covid-visualizer/",description:"Developed a tool where the growth and the spread of the covid-19 cases can be seen in the United states of America over the span of 3 months. The visualization can be seen as a form of a simulation which gets triggered on a button click. The simulation shows the spread for each day from the first case recorded in the USA for the next 3 months. The line chart also shows the prediction for the next 2 weeks which has been implemented using machine learning algorithms like Autoregression. Google charts have been used for the development of the charts. For the bubble chart and the bar chart, data has been obtained using text mining from different websites and then D3.js has been used for the rendering of the charts. ",imageName:b.a,techStack:"HTML,CSS,JavaScript,D3.js,Google Charts,Python,Autoregression"},{projectId:"sorter_viz",name:"Sorting Visualizer",link:"https://shubhamsoengg.github.io/sorting-visualizer/",description:"Demonstrated various sorting algoritms which can be seen as a form of visualization. 4 of the most common sorting algorithms have been implemented namely Bubble Sort, Merge Sort, Quick Sort, Insertion Sort. The sort operations can be started by clicking on any sorting button. The speed of the sort can be increased or decreased as per the user's convenience. The reset button stops the animation and resets the bars randomly. ",imageName:N.a,techStack:"HTML,CSS,JavaScript,React,Algorithms"},{projectId:"aus_viz",name:"Aus Open Visualizer",link:"https://shubhamsoengg.github.io/AusOpenViz/",description:"Implemented the visualization of Australian open tennis Championships. The visualization depicts the number of championships won by players within a duration of 10 years from 2004 to 2014. It's an interative visualization where on click of any section of the donut chart, the stats of that particular player can be see on the right. D3.js and svg has been used for the development of the charts. ",imageName:y.a,techStack:"HTML,CSS,JavaScript,D3.js"}]},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"projects-wrapper"},l.a.createElement("h3",{className:"text-center projects-heading"},"My Projects"),l.a.createElement("div",{className:"project-list"},this.state.projects.map((function(e){return l.a.createElement(E,{key:e.projectId,project:e})}))))}}]),t}(n.Component),j=t(25),A=t.n(j),x=t(26),I=t.n(x);function C(){return l.a.createElement("div",{className:"education-wrapper"},l.a.createElement("h5",{className:"font-weight-bold resume-section-title"},"Education"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"subsection col-sm-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("img",{className:"logo",src:I.a,alt:"ASU logo"})),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("h6",{className:"font-weight-bold"},"Arizona State University",l.a.createElement("span",{className:"float-right"},"Aug 2019 - May 2021")),l.a.createElement("p",{className:"location"},l.a.createElement("span",{className:"fa fa-map-marker"})," Tempe, AZ"),l.a.createElement("p",{className:"font-weight-bold"},"Master of Science - MS, Computer Science"),l.a.createElement("p",{className:"font-weight-bold"},"CGPA: 3.78 / 4"),l.a.createElement("p",{className:"core-subjects"},l.a.createElement("span",{className:"font-weight-bold"},"Core Subjects:")," Intro to AI, Data Visualization, Data Mining, Statistical Machine learning, Human Computer Interaction")))),l.a.createElement("div",{className:"subsection col-sm-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("img",{className:"logo",src:A.a,alt:"BMS logo"})),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("h6",{className:"font-weight-bold"},"BMS College of Engineering",l.a.createElement("span",{className:"float-right"},"Sep 2012 - Jun 2016")),l.a.createElement("p",{className:"location"},l.a.createElement("span",{className:"fa fa-map-marker"})," Bangalore, KA"),l.a.createElement("p",{className:"font-weight-bold"},"Bachelor of Engineering - BE, Computer Science"),l.a.createElement("p",{className:"font-weight-bold"},"CGPA: 8.73 / 10"),l.a.createElement("p",{className:"core-subjects"},l.a.createElement("span",{className:"font-weight-bold"},"Core Subjects:")," ","Algorithms and DS, Web Programming, RDBMS, Operating Systems, Object Oriented Programming"))))))}var M=t(27),_=t.n(M),z=t(28),D=t.n(z);function H(){return l.a.createElement("div",{className:"experience-wrapper"},l.a.createElement("h5",{className:"font-weight-bold resume-section-title"},"Experience"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"subsection col-sm-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("img",{className:"logo",src:_.a,alt:"ASU logo"})),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("h6",{className:"font-weight-bold"},"McFadyen Digital",l.a.createElement("span",{className:"float-right font-weight-bold"},"Aug 2016 - Jun 2019")),l.a.createElement("p",{className:"location"},l.a.createElement("span",{className:"fa fa-map-marker"})," Bangalore, KA"),l.a.createElement("p",null,"Software Engineer Level 1"),l.a.createElement("ul",{className:"work-desc"},l.a.createElement("li",null,"Designed and developed web layouts and functionality for clients in the e-commerce domain"),l.a.createElement("li",null,"Improved the conversion rate and decreased the page load time from 14 seconds to 4 seconds for \u201cAlpha Industries\u201d by optimizing images and the number of redirects."),l.a.createElement("li",null,"Increased the page views by 30% by bolstering the page ranking through Search Engine Optimization techniques."),l.a.createElement("li",null,"Worked closely with the client to understand client needs and was involved in planning and delegation activities for the UI team."," "))))),l.a.createElement("div",{className:"subsection col-sm-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("img",{className:"logo",src:D.a,alt:"BMS logo"})),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("h6",{className:"font-weight-bold"},"GE Healthcare",l.a.createElement("span",{className:"float-right font-weight-bold"},"Jan 2016 - Jun 2016")),l.a.createElement("p",{className:"location"},l.a.createElement("span",{className:"fa fa-map-marker"})," Bangalore, KA"),l.a.createElement("p",null,"Web Application Developer Intern"),l.a.createElement("ul",{className:"work-desc"},l.a.createElement("li",null,"Worked on medical data collection from various data sites using web scraping tools."),l.a.createElement("li",null,"Created a data warehouse using the data collected and automated the entire process."),l.a.createElement("li",null,"Created an application for the admin user for easy access to the data using web technologies and Python"),l.a.createElement("li",null,"The app was designed to be used, along with other software, in predictive analysis for the healthcare market.")))))))}function B(e){return l.a.createElement("div",{className:"col-sm-4 skill-wrapper"},l.a.createElement("span",null,e.skill.skill),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{style:{width:10*e.skill.level+"%"}})))}function O(){return l.a.createElement("div",{className:"skillset-wrapper"},l.a.createElement("h5",{className:"font-weight-bold resume-section-title"},"Skillset"),l.a.createElement("div",{className:"row skill-list"},[{skill:"React.js/Redux",level:9},{skill:"Python",level:9},{skill:"CSS3",level:8},{skill:"JavaScript",level:8},{skill:"Algorithms/Data Structures",level:8},{skill:"Knockout.js",level:8},{skill:"Oracle Commerce Cloud",level:8},{skill:"Git",level:8},{skill:"HTML5",level:7},{skill:"D3.js",level:7},{skill:"jQuery",level:7},{skill:"Bootstrap 4",level:7},{skill:"Beautiful Soup",level:7},{skill:"Object Oriented Programming",level:7},{skill:"Bitucket",level:7},{skill:"MySQL",level:6},{skill:"Flask",level:6},{skill:"SASS",level:6},{skill:"Node.js",level:5},{skill:"Numpy",level:4},{skill:"Angular.js",level:4},{skill:"C/C++",level:4}].map((function(e){return l.a.createElement(B,{skill:e})}))))}var T=t(29),P=t.n(T);function G(){return l.a.createElement("div",{className:"award-wrapper w-100"},l.a.createElement("h5",{className:"font-weight-bold resume-section-title"},"Award and Recognition"),l.a.createElement("div",{className:"award-item"},l.a.createElement("h6",{className:"font-weight-bold"},"Excellence Award - McFdayen Digital"),l.a.createElement("p",null,'Played a major role in delivering the project "AirBorn" under extreme deadlines, limited resources and a new technology which I learnt along the way.')))}function U(e){var a=e.recommendations;return l.a.createElement("div",{className:"recommendation-wrapper w-100"},l.a.createElement("h5",{className:"font-weight-bold resume-section-title"},"Recommendations"),l.a.createElement("div",{className:"row recommendation-list"},a.map((function(e){return l.a.createElement("div",{className:"col-sm-6",key:e.id},l.a.createElement("p",{className:"text-center font-weight-bold "},e.name),l.a.createElement("p",{className:"text-center font-weight-bold"},e.position),l.a.createElement("p",{className:"text-center font-weight-bold"},e.company),l.a.createElement("p",{className:"text-center font-italic"},'"',e.content,'"'))}))))}function J(){return l.a.createElement("div",{className:"resume-wrapper"},l.a.createElement("h3",{className:"resume-title text-center"},"My Resume",l.a.createElement("a",{href:P.a,download:!0,className:"pdf-download"},l.a.createElement("i",{className:"fa fa-file-pdf-o fa-lg"})," Download PDF")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(C,null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(H,null))),l.a.createElement("div",{className:"row"},l.a.createElement(O,null)),l.a.createElement("div",{className:"row"},l.a.createElement(G,null)),l.a.createElement("div",{className:"row"},l.a.createElement(U,{recommendations:[{id:1,name:"Indraneel Peratla",position:"Director, Advanced Analytics",company:"GE Healthcare",content:"Among all the strengths that Shubham brings to the organization his profound sense to learn newer technologies to solve for business problems. A good communicator he has always demonstrated clarity of thought and good understanding of processes, in the short time I had a chance to work with him."},{id:2,name:"Sweekar Tanugula",position:"Senior Product Manager",company:"GE Healthcare",content:"Shubham is a great expert at developing web applications. In partnership with Shubham - we developed a prototype for GE Healthcare - to make public data available for business analysts. With great knowledge on web scraping & database technologies - this prototype was very successful and we were eventually able to scale it to a web application. His dedication and positive attitude to learn new things - made this prototype a successful application. Thank you Shubham - it was a great partnership"}]})))}function q(){return l.a.createElement("div",{className:"contact-wrapper col-sm-8 offset-sm-2"},l.a.createElement("h3",{className:"text-center contact-heading"},"Contact Me "),l.a.createElement("p",{className:"contact-tagline text-center"},"Hit me up if you wanna collaborate on a project or just wanna chat!"),l.a.createElement("form",{className:"contact-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"fullname",placeholder:"Full Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"comment",className:"form-control",id:"comment",cols:"10",rows:"5",placeholder:"Comment"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"contact-submit"},l.a.createElement("span",{className:"fa fa-paper-plane"})," Send"))),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://twitter.com/SHUBHAM56861690",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"twitter fa fa-twitter-square"})),l.a.createElement("a",{href:"https://www.facebook.com/shhubham.goyal",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"facebook fa fa-facebook-square"})),l.a.createElement("a",{href:"https://github.com/shubhamsoengg/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"github fa fa-github-square"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/shubham93/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"linkedin fa fa-linkedin-square"}))))}t(42),t(43);var F=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={categoryItems:[{categoryId:"about",name:"About",active:!0,link:"/"},{categoryId:"project",name:"Projects",active:!1,link:"/projects"},{categoryId:"resume",name:"Resume",active:!1,link:"/resume"},{categoryId:"contact",name:"Contact",active:!1,link:"/contact"}]},e.handleCategoryChange=function(a){var t=e.state.categoryItems.map((function(e){return e.categoryId===a.categoryId?e.active=!0:e.active=!1,e}));e.setState({categoryItems:t})},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2 category-list-wrapper"},l.a.createElement(g,{categoryItems:this.state.categoryItems,onCategoryChange:this.handleCategoryChange})),l.a.createElement("div",{className:"col-sm-10 content-wrapper offset-sm-2"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/contact",component:q}),l.a.createElement(d.a,{path:"/projects",component:S}),l.a.createElement(d.a,{path:"/resume",component:J}),l.a.createElement(d.a,{path:"/",component:f})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(c.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.89085c6f.chunk.js.map