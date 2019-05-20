(function(t){function e(e){for(var n,s,i=e[0],u=e[1],c=e[2],f=0,d=[];f<i.length;f++)s=i[f],o[s]&&d.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0562":function(t,e,r){},"3e6f":function(t,e,r){"use strict";var n=r("5582"),o=r.n(n);o.a},"54c8":function(t,e,r){"use strict";var n=r("995f"),o=r.n(n);o.a},5582:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container mt-5"},[r("Logo"),r("router-view")],1)])},a=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container"},[n("img",{staticClass:"logo-container__img",attrs:{src:r("b471"),alt:"logo"}}),n("div",{staticClass:"logo-container__name"},[t._v(" Scrum Poker")])])}],u={name:"Logo"},c=u,l=(r("54c8"),r("2877")),f=Object(l["a"])(c,s,i,!1,null,"5cd95aa3",null),d=f.exports,m={components:{Logo:d}},v=m,p=Object(l["a"])(v,o,a,!1,null,null,null),h=p.exports,y=r("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.error))]):t._e(),r("b-form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.createPoker(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md"},[r("b-form-group",{attrs:{id:"poker-name",label:"Poker Name","label-for":"poker-name"}},[r("b-form-input",{attrs:{type:"text",state:t.inValidPokerName},nativeOn:{keydown:function(e){return t.validatePokerName(e)}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),r("b-form-invalid-feedback",{attrs:{state:t.inValidPokerName}},[t._v("\n            "+t._s(t.errors.pokerName)+"\n          ")])],1)],1),r("div",{staticClass:"col-md"},[r("b-form-group",{attrs:{id:"num-voters",label:"Number of Voters","label-for":"num-voters"}},[r("b-form-input",{attrs:{state:t.inValidVoterCount},nativeOn:{keydown:function(e){return t.validateVoterCount(e)}},model:{value:t.form.voterCount,callback:function(e){t.$set(t.form,"voterCount",e)},expression:"form.voterCount"}}),r("b-form-invalid-feedback",{attrs:{state:t.inValidVoterCount}},[t._v("\n            "+t._s(t.errors.voterCount)+"\n          ")])],1)],1)]),r("b-form-group",{attrs:{id:"story-list",label:"Story List","label-for":"story-list"}},[r("b-form-textarea",{attrs:{rows:"6",state:t.inValidStoryList},nativeOn:{keydown:function(e){return t.validateStoryList(e)}},model:{value:t.form.storyList,callback:function(e){t.$set(t.form,"storyList",e)},expression:"form.storyList"}}),r("b-form-invalid-feedback",{attrs:{state:t.inValidStoryList}},[t._v("\n        "+t._s(t.errors.storyList)+"\n      ")])],1),r("b-button",{staticClass:"mt-5 float-right",attrs:{type:"submit",variant:"primary"}},[t.loading?r("font-awesome-icon",{attrs:{icon:"sync-alt",spin:""}}):t._e(),t._v("\n      Start Session\n    ")],1)],1)],1)},k=[],g=(r("28a5"),r("7f7f"),r("96cf"),r("3b8d")),S=r("d225"),L=r("b0b4"),N=r("bc3a"),C=r.n(N),_="http://localhost:5000/api",w=function(){function t(){Object(S["a"])(this,t)}return Object(L["a"])(t,null,[{key:"create",value:function(t){return new Promise(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(r,n){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("".concat(_,"/createPoker"),t);case 3:o=e.sent,r(o),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r){return e.apply(this,arguments)}}())}},{key:"getStories",value:function(t){return new Promise(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(r,n){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(_,"/getStories?poker=").concat(t));case 3:o=e.sent,r(o),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r){return e.apply(this,arguments)}}())}},{key:"getVotes",value:function(t,e){return new Promise(function(){var r=Object(g["a"])(regeneratorRuntime.mark(function r(n,o){var a;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.a.get("".concat(_,"/getVotes?story=").concat(t,"&poker=").concat(e));case 3:a=r.sent,n(a),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),o(r.t0.response);case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t,e){return r.apply(this,arguments)}}())}},{key:"getPokerURL",value:function(t){return new Promise(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(r,n){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(_,"/getPokerURL?poker=").concat(t));case 3:o=e.sent,r(o),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r){return e.apply(this,arguments)}}())}},{key:"makeVote",value:function(t,e,r,n){return new Promise(function(){var o=Object(g["a"])(regeneratorRuntime.mark(function o(a,s){var i;return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,C.a.post("".concat(_,"/makeVote"),{story:t,poker:e,point:r,voter:n});case 3:i=o.sent,a(i),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),s(o.t0.response);case 10:case"end":return o.stop()}},o,null,[[0,7]])}));return function(t,e){return o.apply(this,arguments)}}())}},{key:"endVoting",value:function(t,e,r){return new Promise(function(){var n=Object(g["a"])(regeneratorRuntime.mark(function n(o,a){var s;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C.a.post("".concat(_,"/endVoting"),{story:t,poker:e,finalPoint:r});case 3:s=n.sent,o(s),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),a(n.t0.response);case 10:case"end":return n.stop()}},n,null,[[0,7]])}));return function(t,e){return n.apply(this,arguments)}}())}}]),t}(),x=w,V=(r("ac6a"),r("5df3"),r("4f7f"),function(){function t(){Object(S["a"])(this,t)}return Object(L["a"])(t,null,[{key:"pokerName",value:function(t){var e=null;return t?t.length>200?(e="Can't be more than 200 characters",e):e:(e="Poker name required.",e)}},{key:"voters",value:function(t){var e=null;return t?isNaN(t)?(e="You cant enter letters",e):t<=0?(e="Should more than 0",e):e:(e="Voter count required.",e)}},{key:"storyList",value:function(t){var e=null;return t?t.length<=0?(e="Story list required.",e):new Set(t).size!==t.length?(e="Stories must be different",e):e:(e="Story list required.",e)}}]),t}()),P=V,E={name:"CreatePoker",data:function(){return{form:{name:null,voterCount:null,storyList:null},errors:{pokerName:"",voterCount:"",storyList:""},error:null,loading:!1,pokerNameEntered:!1,voterCountEntered:!1,storyListEntered:!1}},computed:{inValidPokerName:function(){return!(!this.pokerNameEntered||null!==this.errors.pokerName)||(!this.pokerNameEntered||null===this.errors.pokerName)&&null},inValidVoterCount:function(){return!(!this.voterCountEntered||null!==this.errors.voterCount)||(!this.voterCountEntered||null===this.errors.voterCount)&&null},inValidStoryList:function(){return!(!this.storyListEntered||null!==this.errors.storyList)||(!this.storyListEntered||null===this.errors.storyList)&&null}},methods:{validatePokerName:function(){var t=this;setTimeout(function(){t.errors.pokerName=P.pokerName(t.form.name),t.pokerNameEntered=!0},500)},validateVoterCount:function(){var t=this;setTimeout(function(){t.voterCountEntered=!0,t.errors.voterCount=P.voters(t.form.voterCount)},500)},validateStoryList:function(){var t=this;setTimeout(function(){t.storyListEntered=!0,t.errors.storyList=P.storyList(t.toArray(t.form.storyList))},500)},createPoker:function(){var t=this;if(this.validateForm(),!this.errors.pokerName&&!this.errors.voterCount&&!this.errors.storyList){var e=this.toArray(this.form.storyList),r={name:this.form.name,voterCount:this.form.voterCount,storyList:e};this.loading=!0,this.error=null,setTimeout(function(){x.create(r).then(function(e){t.error=null,t.loading=!1,t.$router.push({name:"master-dashboard",params:{pokerName:e.data.pokerName}})}).catch(function(e){t.error=e.data.error,t.loading=!1})},1e3)}},toArray:function(t){if(null!==t){var e=t.split("\n");return e.filter(function(t){return t.length>0&&Boolean})}return[]},validateForm:function(){this.errors.pokerName=P.pokerName(this.form.name),this.errors.voterCount=P.voters(this.form.voterCount),this.errors.storyList=P.storyList(this.toArray(this.form.storyList)),this.pokerNameEntered=!0,this.voterCountEntered=!0,this.storyListEntered=!0}}},O=E,j=Object(l["a"])(O,b,k,!1,null,null,null),R=j.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row "},[r("div",{staticClass:"col pb-4"},[r("div",{staticStyle:{"font-size":"14px","text-align":"center"}},[t._v("\n        Please share link to developers: "),r("b",[t._v(t._s(t.pokerURL))])])])]),r("div",{staticClass:"row "},[r("div",{staticClass:"col pb-4"},[r("div",{staticStyle:{"font-size":"25px","text-align":"center"}},[t._v("\n        Active Story: "),r("b",[t._v(t._s(t.currentStoryName))])])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col mb-3"},[r("StoryTable",{attrs:{storyList:this.storyList,currentStory:this.currentStoryName}})],1),r("div",{staticClass:"col mb-3"},[r("MasterPanel",{attrs:{storyName:t.currentStoryName,pokerName:t.pokerName,voteList:t.voteList,endVoteEnabled:t.endVoteEnabled}})],1),r("div",{staticClass:"col mb-3"},[r("VotePanel",{attrs:{voter:t.voter,storyName:t.currentStoryName,pokerName:t.pokerName}})],1)])])},$=[],B=(r("7514"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-100"},[r("b-card",{staticClass:"h-100 card-body",attrs:{"body-class":"card-body"}},[t._l(t.voteList,function(e){return r("b-card-text",{key:e.voter,staticClass:"d-flex justify-content-between"},[r("div",{staticClass:"p-2"},[t._v(t._s(e.voter))]),r("div",{staticClass:"p-2 font-weight-bold"},[t._v(t._s(e.point))])])}),t.endVoteEnabled?r("b-form",{staticClass:"w-100 flex-nowrap align-items-start",attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.endVoting(e)}}},[r("label",{staticClass:"sr-only",attrs:{for:"finalVote"}},[t._v("Final Vote")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"finalVote",placeholder:"Final Point",disabled:t.disableButton},model:{value:t.finalPoint,callback:function(e){t.finalPoint=e},expression:"finalPoint"}}),r("b-button",{attrs:{variant:"primary",disabled:t.disableButton,type:"submit"}},[t._v("End")])],1):t._e()],2)],1)}),M=[],U={name:"MasterPanel",props:{storyName:String,pokerName:String,voteList:Array,endVoteEnabled:Boolean},data:function(){return{finalPoint:null,disableButton:!1}},methods:{endVoting:function(){x.endVoting(this.storyName,this.pokerName,this.finalPoint),this.finalPoint=null,this.disableButton=!0}},watch:{storyName:function(t,e){t!==e&&(this.disableButton=!1)}}},A=U,q=(r("3e6f"),Object(l["a"])(A,B,M,!1,null,"766e0d6e",null)),z=q.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"card-body h-100",attrs:{"body-class":"card-body"}},[r("div",{staticClass:"d-flex flex-wrap justify-content-center"},t._l(t.numbers,function(e){return r("b-button",{key:e,staticStyle:{width:"60px",height:"40px",margin:"10px"},attrs:{disabled:t.disableButton,variant:"outline-success"},on:{click:function(r){return t.makeVote(e)}}},[t._v(t._s(e)+"\n    ")])}),1),r("div",{staticClass:"pt-1 text-center"},[t._v(" "+t._s(t.voteLabel))])])},D=[],I=r("75fc"),J={name:"VotePanel",data:function(){return{numbers:[],voteLabel:"Please vote !",point:null,disableButton:!1}},props:{storyName:String,voter:String,pokerName:String},mounted:function(){this.numbers=this.fibonacci(10),this.numbers.push("?")},methods:{fibonacci:function(t){if(0===t)return[1];if(1===t)return[1,2];var e=this.fibonacci(t-1);return[].concat(Object(I["a"])(e),[e[t-1]+e[t-2]])},makeVote:function(t){var e=this;x.makeVote(this.storyName,this.pokerName,t,this.voter).then(function(){e.disableButton=!0,e.voteLabel=t+" voted"}).catch(function(t){console.log(t)})}},watch:{storyName:function(t,e){t!==e&&(this.disableButton=!1,this.voteLabel="Please vote !")}}},Y=J,G=(r("b270"),Object(l["a"])(Y,F,D,!1,null,"07f3b062",null)),H=G.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-table",{staticClass:"h-100 rounded",attrs:{bordered:"",items:t.stories}})},Q=[],W=(r("ac4d"),r("8a81"),{name:"StoryTable",props:{storyList:Array,currentStory:String},data:function(){return{stories:this.storyList}},mounted:function(){this.stories=this.storyList,this.addStyleToCurrentStory()},methods:{addStyleToCurrentStory:function(){var t=!0,e=!1,r=void 0;try{for(var n,o=this.stories[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var a=n.value;a.name===this.currentStory&&(a._rowVariant="success")}}catch(s){e=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}}},watch:{storyList:function(t,e){t!==e&&(this.stories=this.storyList,this.addStyleToCurrentStory())}}}),X=W,Z=Object(l["a"])(X,K,Q,!1,null,null,null),tt=Z.exports,et={name:"MasterBoard",components:{StoryTable:tt,VotePanel:H,MasterPanel:z},data:function(){return{storyList:[],voteList:[],pokerURL:null,currentStoryName:"",voter:"Scrum Master",pokerName:this.$route.params.pokerName,endVoteEnabled:!1}},mounted:function(){this.getPokerURL(),this.getStories(),setInterval(this.getStories,2e3)},methods:{getStories:function(){var t=this;x.getStories(this.pokerName).then(function(e){t.storyList=e.data,t.getCurrentStory(),t.getVotes()}).catch(function(t){console.log(t)})},getVotes:function(){var t=this;x.getVotes(this.pokerName,this.currentStoryName).then(function(e){t.voteList=e.data,t.shouldEndVote()}).catch(function(t){console.log(t)})},getCurrentStory:function(){var t=this.storyList.find(function(t){return"Not Voted"===t.status});this.currentStoryName=t?t.name:this.storyList[this.storyList.length-1].name},getPokerURL:function(){var t=this;x.getPokerURL(this.pokerName).then(function(e){t.pokerURL=e.data.pokerURL}).catch(function(t){console.log(t)})},shouldEndVote:function(){var t=0,e=0;this.voteList.forEach(function(e){"Not Voted"!==e.point&&(t+=1)}),this.storyList.forEach(function(t){isNaN(t.point)||(e+=1)}),e===this.storyList.length&&0!==e&&(this.endVoteEnabled=!0),t===this.voteList.length?this.endVoteEnabled=!0:this.endVoteEnabled=!1}}},rt=et,nt=Object(l["a"])(rt,T,$,!1,null,null,null),ot=nt.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row "},[r("div",{staticClass:"col pb-4"},[r("div",{staticStyle:{"font-size":"25px","text-align":"right"}},[t._v("\n        Active Story: "),r("b",[t._v(t._s(t.currentStoryName))])])])]),r("div",{staticClass:"row "},[r("div",{staticClass:"col"},[r("StoryTable",{attrs:{storyList:this.storyList,currentStory:this.currentStoryName}})],1),r("div",{staticClass:"col"},[r("VotePanel",{attrs:{voter:t.voter,storyName:t.currentStoryName,pokerName:t.pokerName}})],1)])])},st=[],it={name:"TeamBoard",components:{VotePanel:H,StoryTable:tt},data:function(){return{storyList:[],voter:"Voter",currentStoryName:"",pokerName:this.$route.params.pokerName}},mounted:function(){this.getStories(),setInterval(this.getStories,2e3)},methods:{getStories:function(){var t=this;x.getStories(this.pokerName).then(function(e){t.storyList=e.data,t.currentStoryName=t.getCurrentStory().name}).catch(function(t){console.log(t)})},getCurrentStory:function(){var t=this.storyList.find(function(t){return"Not Voted"===t.status});this.currentStoryName=t?t.name:this.storyList[this.storyList.length-1].name}}},ut=it,ct=Object(l["a"])(ut,at,st,!1,null,null,null),lt=ct.exports;n["default"].use(y["a"]);var ft=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"create-poker",component:R,meta:{title:"Create Poker"}},{path:"/master-dashboard/:pokerName",name:"master-dashboard",component:ot,meta:{title:"Master Dashboard"}},{path:"/team-board/:pokerName",name:"team-board",component:lt,meta:{title:"Team Board"}}]});ft.beforeEach(function(t,e,r){document.title=t.meta.title,r()});var dt=ft,mt=r("2f62");n["default"].use(mt["a"]);var vt=new mt["a"].Store({state:{},mutations:{},actions:{}}),pt=r("9f7b"),ht=r.n(pt),yt=(r("f9e3"),r("2dd8"),r("ecee")),bt=r("c074"),kt=r("ad3d");yt["c"].add(bt["a"]),n["default"].component("font-awesome-icon",kt["a"]),n["default"].config.productionTip=!1,n["default"].use(ht.a),new n["default"]({router:dt,store:vt,render:function(t){return t(h)}}).$mount("#app")},"995f":function(t,e,r){},b270:function(t,e,r){"use strict";var n=r("0562"),o=r.n(n);o.a},b471:function(t,e,r){t.exports=r.p+"img/poker.790cece6.svg"}});
//# sourceMappingURL=app.82fd1f1b.js.map