(this["webpackJsonpwordbucket-fe"]=this["webpackJsonpwordbucket-fe"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),s=a(14),i=a.n(s);a(21),a(22);function o(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"Credits: ")," Icons by\xa0",r.a.createElement("a",{href:"https://www.freepik.com/"},"Freepik")," and\xa0",r.a.createElement("a",{href:"https://www.flaticon.com/authors/sarfraz-shoukat",title:"Sarfraz Shoukat"},"Sarfraz Shoukat")," from\xa0",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," (",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY"),")")}var c=a(1),l=a.n(c),d=a(4),h=a.n(d),u=a(2),p=a.n(u),m=a(5),w=a(3),g=a(7);const f=function(){var e=Object(w.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.drive.files.get({alt:"media",fileId:t.fileId});case 2:return a=e.sent,e.abrupt("return",Object(g.a)({},t,{data:a.body}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(w.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.request({body:t.data,method:"PATCH",params:{uploadType:"media"},path:"/upload/drive/v3/files/".concat(t.fileId)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(w.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.drive.files.create({fields:"id",resource:{name:t,parents:["appDataFolder"]}});case 2:if(!((a=e.sent)&&a.result&&a.result.id)){e.next=5;break}return e.abrupt("return",{fileId:a.result.id,fileName:t});case 5:return e.abrupt("return",Promise.reject());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(w.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.drive.files.delete({fileId:t.fileId});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(w.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.drive.files.list({fields:"files(name, id)",spaces:"appDataFolder"});case 2:if(!((t=e.sent)&&t.result&&t.result.files&&t.result.files.length>0)){e.next=7;break}return a=[],t.result.files.forEach(e=>{console.log(e.name),e.name&&e.id&&a.push({fileId:e.id,fileName:e.name})}),e.abrupt("return",a);case 7:return e.abrupt("return",Promise.reject());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();class N{static setSave(e){N.save=e}static startSave(){N.debounce&&clearTimeout(N.debounce),N.debounce=setTimeout(N.save,N.debounceTime)}constructor(e){this.undo=void 0,this.redo=void 0,this.dispatch=void 0,this.undo=()=>{e.undo(),e.dispatch&&e.dispatch()},this.redo=()=>{e.redo(),e.dispatch&&e.dispatch()},this.dispatch=e.dispatch,N.undoQueue.push(this),this.redo(),N.redoQueue=[],N.startSave()}}N.undo=()=>{if(N.undoQueue.length>0){const e=N.undoQueue.pop();e&&(e.undo(),N.redoQueue.push(e))}N.startSave()},N.redo=()=>{if(N.redoQueue.length>0){const e=N.redoQueue.pop();e&&(e.redo(),N.undoQueue.push(e))}N.startSave()},N.undoQueue=[],N.redoQueue=[],N.save=void 0,N.debounce=void 0,N.debounceTime=void 0;var C=class{constructor(e){var t=this;this.GoogleAuth=void 0,this.files=[],this.clientId="404024621165-t0sbcvfkac2m8u4b8l3p04hm9r2jtqcg.apps.googleusercontent.com",this.loadBucket=void 0,this.save=Object(w.a)(p.a.mark((function e(){var a,n,r,s,i,o,c,d,h;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.GoogleAuth){e.next=18;break}a=l.a.getBuckets().map(e=>e.title),n={},r=[],s=[],i=Object(m.a)(a);try{for(i.s();!(o=i.n()).done;)c=o.value,n[d=c+".json"]=l.a.serialise(c),0===t.files.filter(e=>e.fileName===d).length&&s.push(d)}catch(u){i.e(u)}finally{i.f()}return t.files.forEach(e=>{n[e.fileName]||r.push(e)}),e.next=10,Promise.all(s.map(b));case 10:return(h=e.sent).forEach(e=>e.data=n[e.fileName]),e.next=14,Promise.all(r.map(k));case 14:return t.files=t.files.filter(e=>r.filter(t=>t.fileId===e.fileId).length>0),t.files=t.files.concat(h),e.next=18,Promise.all(t.files.map(v));case 18:case"end":return e.stop()}}),e)}))),this.load=Object(w.a)(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:return a=e.sent,e.next=6,Promise.all(a.map(f));case 6:(n=e.sent).forEach(e=>e.data&&t.loadBucket(e.data)),t.files=n,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.loadBucket("");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));const a=this;this.loadBucket=e;const n=document.createElement("meta");n.name="google-signin-client_id",n.content=this.clientId,document.head.appendChild(n);const r=document.createElement("meta");r.name="google-signin-scope",r.content="https://www.googleapis.com/auth/drive.appdata",document.head.appendChild(r);const s=document.createElement("script");s.src="https://apis.google.com/js/platform.js",s.type="text/javascript",s.charset="utf-8",document.head.appendChild(s),s.onload=()=>{gapi.load("auth2",()=>{gapi.load("client",()=>{gapi.client.load("drive","v3",i)})})};const i=()=>{gapi.auth2.getAuthInstance().then(e=>{a.GoogleAuth=e,a.load(),N.setSave(this.save)},e=>{throw console.error(JSON.stringify(e)),e})}}};const x=r.a.createContext({});class y extends r.a.Component{constructor(e){super(e),this.state=void 0,this.loadCount=0,this.load=e=>{this.loadCount++;try{0===e.length?(console.log("No buckets loaded, adding defaults"),this.load('{"hex":{"words":[{"words":"You come across ${hex.root}","weight":1}],"children":{"root":{"words":[{"words":"${hex.structure}. ${hex.additional}","weight":1}],"children":{}},"additional":{"words":[{"words":"","weight":5},{"words":"Nearby is ${hex.root}","weight":0.5}],"children":{}},"structure":{"words":[{"words":"${$a, size} number of ${hex.structure.status} statues","weight":1},{"words":"${$a, size.extreme, hex.structure.status} monastry${hex.structure.occupied}","weight":1},{"words":"${$a, size.extreme, hex.structure.status} tower${hex.structure.occupied}","weight":1},{"words":"${$a, size.extreme} obelisk","weight":1},{"words":"${$a, size.extreme} camp${hex.structure.occupied}","weight":1},{"words":"${$a, size, hex.structure.status} graveyard","weight":1},{"words":"some ${size, hex.structure.status} canals","weight":1},{"words":"${$a, size, hex.structure.status} hovel${hex.structure.occupied}","weight":1}],"children":{"occupied":{"words":[{"words":"","weight":5},{"words":". There are signs of recent occupation","weight":1},{"words":". There are friendly creatures here","weight":1},{"words":". There are neutral creatures here","weight":1},{"words":". There are unfriendly creatures here","weight":1}],"children":{}},"rarelyoccupied":{"words":[{"words":"","weight":5},{"words":"${hex.structure.occupied}","weight":1}],"children":{}},"status":{"words":[{"words":"","weight":2},{"words":"tumbledown","weight":1},{"words":"ruined","weight":1},{"words":"overgrown","weight":1},{"words":"poorly maintained","weight":1},{"words":"neatly maintained","weight":0.5},{"words":"freshly painted","weight":0.1}],"children":{}}}}}},"size":{"words":[{"words":"","weight":5},{"words":"small","weight":2},{"words":"large","weight":2},{"words":"modest","weight":1}],"children":{"extreme":{"words":[{"words":"${size}","weight":5},{"words":"tiny","weight":1},{"words":"enormous","weight":1},{"words":"huge","weight":1}],"children":{}}}}}')):l.a.deserialise(e)}catch(t){console.error("Error loading buckets: ".concat(t))}this.setState({})},this.navigate=e=>{e&&(this.setState({path:e}),window.history.pushState(null,"",function(e){return"/"+e.replace(/\./g,"/")}(e||"")))},this.inPath=e=>{const t=e.title.split("."),a=this.state.path.split(".");let n=0;for(let r=0;r<t.length&&!(a.length<r);r++)t[r]!==a[r]&&n++;return n<=1},this.state={googleManager:new C(this.load),inPath:this.inPath,load:this.load,navigate:this.navigate,path:S(window.location.pathname)},window.onpopstate=()=>{this.setState({path:S(window.location.pathname)})},this.load.bind(this)}render(){return r.a.createElement(x.Provider,{value:this.state},this.props.children)}}function S(e){return e.replace(/\//g,".").slice(1)}const $=e=>{let t=Object.assign({},e);return r.a.createElement(x.Consumer,null,e=>r.a.createElement("a",Object.assign({},t,{className:h()(t.className,{active:e.path===t.path}),onClick:a=>{t.onClick(a),e.navigate(t.path),a.preventDefault()}})))},P=({render:e})=>r.a.createElement(x.Consumer,null,t=>e(t));a(38),a(39);var I=e=>{let t;return r.a.createElement("div",{className:"floating-panel"},r.a.createElement("textarea",{ref:e=>t=e},e.content),r.a.createElement("div",{className:"button",onClick:()=>{e.doneFunc(t.value)}},e.doneString))};const j="Replace this with serialised bucket data to load it into the engine";class F extends r.a.Component{constructor(e){super(e),this.clearPanel=()=>{this.setState({showPanel:!1})},this.loadBucket=e=>{e&&e!==j&&l.a.deserialise(e),this.setState({showPanel:!1})};let t="",a=!1;window.location.search.indexOf("privacy")>-1&&(t="Apparently I legally need a privacy policy, and it's this: I wouldn't even know how to get your data back out of this app. If you choose to log in through Google, the app saves your bucket data to Google Drive, specifically so I don't have to figure out how to save data any other way, so consider your secret random outcomes safe.",a=!0),this.state={content:t,doneFunc:this.clearPanel,doneString:"Thanks",showPanel:a}}render(){return r.a.createElement(P,{render:e=>r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"g-signin2"},"Login"),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"help button",onClick:e=>{this.setState({content:"Buckets are named and have a parent. Each bucket contains entries, which have a weight used for rolling on the table (supports divisions down to 0.1) and the words to use. To embed another table in the result, use `${fully.qualified.bucket.name}`. You can comma separate bucket names within the braces, and it will comma separate the results.\n\nCurrently there is one pair of supported commands: within a table query, use `$a` or `$an` to use the appropriate identifier depending on the result of the table query.\n\neg: `${$a, $size, $colour} table` may generates `a large blue table` or `an enormous pink table`, depending on the results. If there's no generated output, it the word used to call the command will be used, in this case `a table`.\n",doneFunc:this.clearPanel,doneString:"OK",showPanel:!0})}},"Really Basic Help"),r.a.createElement("div",{className:"undo button",onClick:N.undo},"Undo"),r.a.createElement("div",{className:"redo button",onClick:N.redo},"Redo"),r.a.createElement("div",{className:"import button",onClick:e=>{this.setState({content:j,doneFunc:this.loadBucket,doneString:"OK",showPanel:!0})}},"Import"),r.a.createElement("div",{className:"export button",onClick:t=>{this.setState({content:l.a.serialise(e.path),doneFunc:this.clearPanel,doneString:"OK",showPanel:!0})}},"Export")),this.state.showPanel&&r.a.createElement(I,{content:this.state.content,doneString:this.state.doneString,doneFunc:this.state.doneFunc}))})}}var O=F;function B(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(O,null))}class z extends r.a.Component{constructor(e){super(e),this.parentName=void 0,this.inputRef=void 0,this.parentName=e.parentName,this.inputRef=r.a.createRef(),this.newBucket=this.newBucket.bind(this)}render(){return r.a.createElement("div",{className:h()({root:!this.props.parentFolder},{folder:this.props.parentFolder},"new-bucket")},r.a.createElement("input",{ref:this.inputRef,className:"title"}),r.a.createElement("div",{className:"create confirm",onClick:this.newBucket}))}newBucket(e){if(this.inputRef.current){const e=this.parentName||"";!function(e,t,a){let n,r;if(t&&l.a.check(t)){const e=l.a.fetch(t);n=e.attach,r=e.detach}else n=l.a.attach,r=l.a.detach;const s=new c.Bucket(e);new N({dispatch:a,redo:()=>n(s),undo:()=>{r(s)}})}(this.inputRef.current.value,e,()=>{this.props.parentFolder&&this.props.parentFolder.setState({create:!1})})}}}var D=z;a(40);class T extends r.a.Component{constructor(e){super(e),this.state=Object(g.a)({collapseChildren:!!e.bucket&&!e.inPath(e.bucket)},e)}componentWillReceiveProps(e){e.collapsed===this.state.collapsed&&e.path===this.state.path||this.setState(Object(g.a)({},e))}render(){const e=this.state.bucket,t=[];var a,n=Object(m.a)(e.getChildren());try{for(n.s();!(a=n.n()).done;){const e=a.value;t.push(r.a.createElement(T,{bucket:e,collapsed:this.state.collapseChildren,inPath:this.state.inPath,path:this.state.path,key:e.title,create:!1,parentName:this.constructFullName()}))}}catch(s){n.e(s)}finally{n.f()}return this.state.create&&t.push(r.a.createElement(D,{parentName:this.constructFullName(),parentFolder:this})),r.a.createElement("div",{className:h()({root:0===e.title.length},{folder:e.title.length>0},{collapsed:this.props.collapsed},{focused:this.constructFullName()===this.state.path})},e.getChildren().length>0?r.a.createElement("div",{className:"toggle",onClick:()=>{this.setState({collapseChildren:!this.state.collapseChildren})}},this.state.collapseChildren?"+":"-"):"",r.a.createElement($,{className:"title",path:this.constructFullName(),onClick:()=>{this.setState({collapseChildren:!1})}},e.title),r.a.createElement("div",{className:"create",onClick:()=>{this.setState({create:!0})}}),r.a.createElement("div",{className:"children"},t))}constructFullName(){var e;let t=this.state.parentName?this.state.parentName+".":"";return t+=null===(e=this.state.bucket)||void 0===e?void 0:e.title,t}}var R=T;class Q extends r.a.Component{constructor(e){super(e),this.state={lastDragX:0,resizeMode:!1,width:275}}render(){const e=this;function t(t){t.nativeEvent.offsetX>e.state.width-10&&(document.body.addEventListener("pointermove",n),document.body.addEventListener("pointerleave",a),e.setState({lastDragX:t.pageX,resizeMode:!0}))}function a(t){document.body.removeEventListener("pointermove",n),document.body.removeEventListener("pointerleave",a),e.setState({resizeMode:!1})}function n(t){e.state.resizeMode&&0!==t.movementX&&e.setState({lastDragX:t.pageX,width:e.state.width+(t.pageX-e.state.lastDragX)})}return r.a.createElement(P,{render:n=>{const s=l.a.getBuckets().map(e=>r.a.createElement(R,{bucket:e,create:!1,collapsed:!1,inPath:n.inPath,path:n.path,parentName:""}));return s.push(r.a.createElement(D,{parentName:""})),r.a.createElement("div",{className:"sidebar",onPointerDown:t,onPointerUp:a,style:{width:e.state.width}},s)}})}}var W=Q;function X(e){return r.a.createElement("div",{className:"frame"},r.a.createElement(B,null),r.a.createElement("div",{className:"center"},r.a.createElement(W,null),e.children),r.a.createElement(o,null))}a(41);class L extends r.a.Component{render(){return r.a.createElement(P,{render:e=>""!==e.path&&l.a.check(e.path)?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"result-title"},e.path),r.a.createElement("div",{className:"result-container"},r.a.createElement("div",{className:"results"},l.a.generate(e.path)),r.a.createElement("div",{className:"roller",onClick:e=>this.forceUpdate()},"Re-roll"))):r.a.createElement("div",{className:"result-title"},"Select a table to start.")})}}var U=L;a(13),a(42);class A extends r.a.Component{constructor(e){super(e),this.updateDebounce=void 0,this.word=void 0,this.bucket=void 0,this.navigate=void 0,this.debounceLength=2500,this.state={create:e.create||!1,weight:e.word?e.word.weight:0,words:e.word?e.word.words:""},this.word=e.word,this.bucket=e.bucket,this.navigate=e.navigate,this.forceChange=this.forceChange.bind(this),this.wordChange=this.wordChange.bind(this),this.weightChange=this.weightChange.bind(this),this.updateWord=this.updateWord.bind(this)}render(){return r.a.createElement("div",{className:h()("wordedit",{create:this.state.create})},r.a.createElement("input",{className:"weight",value:this.state.weight,onChange:this.weightChange,onBlur:this.forceChange}),r.a.createElement("input",{className:"words",value:this.state.words,onChange:this.wordChange,onBlur:this.forceChange}),r.a.createElement("div",{className:"button",onClick:this.updateWord}))}weightChange(e){const t=this.doUpdate.bind(this);this.setState({weight:e.target.value}),clearInterval(this.updateDebounce),this.updateDebounce=setTimeout(t,this.debounceLength)}wordChange(e){const t=this.doUpdate.bind(this);this.setState({words:e.target.value}),clearInterval(this.updateDebounce),this.updateDebounce=setTimeout(t,this.debounceLength)}forceChange(e){clearInterval(this.updateDebounce),this.setState({words:e.target.value}),this.doUpdate()}updateWord(){var e,t,a;this.state.create?this.setState({create:!1}):this.word?(e=this.word,t=this.bucket,a=this.navigate,new N({dispatch:a,redo:()=>t.remove(e),undo:()=>t.add(e.words,e.weight)})):this.setState({create:!0,weight:0,words:""})}doUpdate(){var e,t,a;!this.word&&this.state.weight?(this.word=new c.Word(this.state.words||"",+this.state.weight),e=this.word,t=this.bucket,new N({dispatch:a,redo:()=>t.add(e.words,e.weight),undo:()=>t.remove(e)})):this.word&&function(e,t,a,n){const r={words:e.words,weight:e.weight};new N({dispatch:n,redo:()=>e.update({words:t,weight:a}),undo:()=>e.update(r)})}(this.word,this.state.words,+this.state.weight)}}var M=A;var q=()=>r.a.createElement(P,{render:e=>{if(""===e.path||!l.a.check(e.path))return null;const t=l.a.fetch(e.path);if(!t&&e.path.indexOf(".")>-1)e.navigate(e.path.slice(0,e.path.lastIndexOf(".")));else{if(t){const i=[],o=t.getWords();var a,n=Object(m.a)(o);try{for(n.s();!(a=n.n()).done;){const n=a.value;i.push(r.a.createElement(M,{key:"".concat(n.weight,"::").concat(n.words),word:n,bucket:t,navigate:()=>e.navigate(e.path)}))}}catch(s){n.e(s)}finally{n.f()}return i.push(r.a.createElement(M,{key:"".concat(Math.random()),bucket:t,navigate:()=>e.navigate(e.path),create:!0})),r.a.createElement("div",{className:"words"},i)}e.navigate("")}}});var G=()=>r.a.createElement("div",{className:"content"},r.a.createElement(U,null),r.a.createElement(q,null));var Y=function(){return r.a.createElement(y,null,r.a.createElement(X,null,r.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[15,1,2]]]);