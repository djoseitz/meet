(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{128:function(e,t,n){},207:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(55),s=n.n(o),c=(n(207),n(22)),i=n(30),u=n(23),l=n(24),h=(n(128),n(6)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1,showButton:"show details"},e.showDetails=function(){!0===e.state.show?e.setState({show:!1,showButton:"show details"}):e.setState({show:!0,showButton:"hide details"})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("div",{className:"summary",children:Object(h.jsx)("h1",{children:e.summary})}),Object(h.jsxs)("div",{className:"eventInfo_collapsed",children:[Object(h.jsxs)("span",{className:"startDateTime",children:[e.start.dateTime," (",e.start.timeZone," Standard Time)"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"location",children:["@",e.summary," | ",e.location]})]}),this.state.show&&Object(h.jsxs)("div",{className:"detailInfo",children:[Object(h.jsx)("h2",{children:"About event:"}),Object(h.jsx)("div",{className:"description",children:e.description}),Object(h.jsx)("a",{className:"eventLink",target:"_blank",rel:"noreferrer",href:e.htmlLink,children:"See details on Google Calender"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"showDetails",onClick:this.showDetails,children:this.state.showButton})})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="#323edd",a}return n}(v),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="#B73DBA",a}return n}(v),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="#ec0101",a}return n}(v),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,locations:e.props.locations,infoText:""},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e.handleChange=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:'Sorry, we could not find "'.concat(n,'". Please try another city'),showSuggestions:!1}):e.setState({infoText:"",query:n,suggestions:a})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions,r=t.showSuggestions,o=t.infoText;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("label",{children:"Choose your nearest city"}),Object(h.jsx)("input",{type:"text",className:"city",value:n,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:r?{}:{display:"none"},children:[a.map((function(t){return Object(h.jsx)("li",{id:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]}),Object(h.jsx)(m,{text:o})]})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.submitNumber=function(t){var n=t.target.value;n>32||n<1||""===n?e.setState({infoText:"Please enter number between 1 ~ 32",warningText:"",numberOfEvents:n}):isNaN(n)?(e.setState({infoText:"Please enter number",numberOfEvents:n,warningText:""}),(n.includes("fuck")||n.includes("shit"))&&e.setState({numberOfEvents:n,warningText:"What??!! \ud83e\udd2c\ud83e\udd2c\ud83e\udd2c",infoText:""})):(e.props.updateEvents(null,n),e.setState({numberOfEvents:n,infoText:"",warningText:""}))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"numberOfEvents",children:[Object(h.jsx)(b,{text:this.state.infoText}),Object(h.jsx)(p,{text:this.state.warningText}),Object(h.jsx)("label",{children:"Number of Events: "}),Object(h.jsx)("input",{type:"text",className:"numberInput",value:this.state.numberOfEvents,onChange:this.submitNumber})]})}}]),n}(a.Component),w=n(29),O=n(365),x=n(364),y=n(187),k=n(96),S=function(e){var t=e.events;Object(a.useEffect)((function(){s((function(){return i()}))}),[t]);var n=Object(a.useState)([]),r=Object(w.a)(n,2),o=r[0],s=r[1],c=["#18c6d0","#d0186e","#d0a518","#846ac1","#7bd63e"],i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(h.jsx)(O.a,{height:400,children:Object(h.jsx)(x.a,{width:400,height:400,children:Object(h.jsx)(y.a,{data:o,cx:120,cy:180,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(h.jsx)(k.a,{fill:c[t]},t)}))})})})},T=n(33),E=n.n(T),N=n(78),C=n(196),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2021-05-19T19:17:46.000Z",updated:"2021-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2021-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2021-05-19T19:14:30.000Z",updated:"2021-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],A=n(122),W=n.n(A),B=n(79),D=n.n(B),I=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},J=function(){var e=Object(N.a)(E.a.mark((function e(){var t,n,a,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return D.a.done(),e.abrupt("return",{events:Z,locations:I(Z)});case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),D.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:I(JSON.parse(t).events)});case 8:return e.next=10,L();case 10:if(!(n=e.sent)){e.next=20;break}return q(),a="https://v42fuly3x5.execute-api.us-west-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,W.a.get(a);case 16:return(r=e.sent).data&&(o=I(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),D.a.done(),e.abrupt("return",{events:r.data.events,locations:o});case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(N.a)(E.a.mark((function e(){var t,n,a,r,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&n){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,W.a.get("https://v42fuly3x5.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&R(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},R=function(){var e=Object(N.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),n=encodeURIComponent(t),e.next=4,fetch("https://v42fuly3x5.execute-api.us-west-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=(n(356),n(361)),_=n(362),z=n(192),F=n(193),H=n(80),P=n(197),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?J().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);return e.setState({events:a,currentLocation:t,locations:n.locations})})):J().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,J().then((function(t){e.mounted&&e.setState({events:t.events,locations:t.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.getData().sort((function(e,t){return e.city>t.city?1:-1}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(h.jsx)(g,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(h.jsxs)("div",{className:"data-vis-wrapper",children:[Object(h.jsx)(O.a,{height:400,children:Object(h.jsx)(S,{events:this.state.events})}),Object(h.jsx)(O.a,{height:400,children:Object(h.jsxs)(U.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(h.jsx)(_.a,{}),Object(h.jsx)(z.a,{type:"category",dataKey:"city",name:"City"}),Object(h.jsx)(F.a,{type:"number",dataKey:"number",name:"Number of events",allowDecimals:!1}),Object(h.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(P.a,{data:e,fill:"#8884d8"})]})})]}),Object(h.jsx)(f,{events:this.state.events})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=n(194);s.a.render(Object(h.jsxs)(r.a.StrictMode,{children:[Object(h.jsx)("h1",{children:"MeetApp"}),Object(h.jsx)(Y,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),V.config("bb62b23b319e438f8a94c116128c5293").install()}},[[357,1,2]]]);
//# sourceMappingURL=main.26647b87.chunk.js.map