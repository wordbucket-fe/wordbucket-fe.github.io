(this["webpackJsonpwordbucket-fe"]=this["webpackJsonpwordbucket-fe"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),s=a.n(n),r=a(14),i=a.n(r);a(21),a(22);function o(){return s.a.createElement("div",{className:"footer"},s.a.createElement("span",null,"Credits: ")," Icons by\xa0",s.a.createElement("a",{href:"https://www.freepik.com/"},"Freepik")," and\xa0",s.a.createElement("a",{href:"https://www.flaticon.com/authors/sarfraz-shoukat",title:"Sarfraz Shoukat"},"Sarfraz Shoukat")," from\xa0",s.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," (",s.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY"),")")}var c=a(1),l=a.n(c),d=a(4),h=a.n(d),u=a(2),p=a.n(u),m=a(5),w=a(3);class g{static setSave(e){g.save=e}static startSave(){g.debounce&&clearTimeout(g.debounce),g.debounce=setTimeout(g.save,g.debounceTime)}constructor(e){this.undo=void 0,this.redo=void 0,this.dispatch=void 0,this.undo=()=>{e.undo(),e.dispatch&&e.dispatch()},this.redo=()=>{e.redo(),e.dispatch&&e.dispatch()},this.dispatch=e.dispatch,g.undoQueue.push(this),this.redo(),g.redoQueue=[],g.startSave()}}g.undo=()=>{if(g.undoQueue.length>0){const e=g.undoQueue.pop();e&&(e.undo(),g.redoQueue.push(e))}g.startSave()},g.redo=()=>{if(g.redoQueue.length>0){const e=g.redoQueue.pop();e&&(e.redo(),g.undoQueue.push(e))}g.startSave()},g.undoQueue=[],g.redoQueue=[],g.save=void 0,g.debounce=void 0,g.debounceTime=void 0;var v=class{constructor(e){var t=this;this.GoogleAuth=void 0,this.fileIds={},this.clientId="404024621165-t0sbcvfkac2m8u4b8l3p04hm9r2jtqcg.apps.googleusercontent.com",this.loadBucket=void 0,this.save=Object(w.a)(p.a.mark((function e(){var a,n,s,r,i,o,c,d,h,u,w,g,v,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.GoogleAuth){a=l.a.getBuckets().map(e=>e.title),n={},s=[],r=[],i=Object(m.a)(a);try{for(i.s();!(o=i.n()).done;)c=o.value,n[c+".json"]=l.a.serialise(c),t.fileIds[c+".json"]||r.push(c+".json")}catch(p){i.e(p)}finally{i.f()}for(d=0,h=Object.keys(t.fileIds);d<h.length;d++)u=h[d],n[u]||s.push(u);for(w=r.map(e=>t.create(e)),Promise.all(w).then(()=>{for(var e=0,a=Object.keys(n);e<a.length;e++){const s=a[e];t.saveFile(t.fileIds[s],n[s])}}),g=0,v=s;g<v.length;g++)f=v[g],t.delete(t.fileIds[f]),delete t.fileIds[f]}case 1:case"end":return e.stop()}}),e)}))),this.load=Object(w.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadFiles().then(e=>{e.forEach(t.loadBucket)},()=>{t.loadBucket("")});case 1:case"end":return e.stop()}}),e)}))),this.loadFile=function(){var e=Object(w.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.client.drive.files.get({alt:"media",fileId:t.fileIds[a]}).then(e=>e));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.loadFiles=Object(w.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.keys(t.fileIds).length>0)){e.next=4;break}return e.abrupt("return",Promise.all(Object.keys(t.fileIds).map(t.loadFile)).then(e=>e.map(e=>e.body)));case 4:return e.abrupt("return",t.getFileIds().then(e=>Object.keys(e).length>0?t.loadFiles():[]));case 5:case"end":return e.stop()}}),e)}))),this.saveFile=function(){var e=Object(w.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.client.request({body:a,method:"PATCH",params:{uploadType:"media"},path:"/upload/drive/v3/files/".concat(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.create=function(){var e=Object(w.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.client.drive.files.create({fields:"id",resource:{name:a,parents:["appDataFolder"]}}).then(e=>(e&&e.result&&e.result.id&&(t.fileIds[a]=e.result.id),t.fileIds)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(w.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.client.drive.files.delete({fileId:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getFileIds=Object(w.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.client.drive.files.list({fields:"files(name, id)",spaces:"appDataFolder"}).then(e=>{if(e&&e.result&&e.result.files&&e.result.files.length>0){const a={};e.result.files.forEach(e=>{e.name&&e.id&&(a[e.name]=e.id)}),t.fileIds=a}return t.fileIds}));case 1:case"end":return e.stop()}}),e)})));const a=this;this.loadBucket=e;const n=document.createElement("meta");n.name="google-signin-client_id",n.content=this.clientId,document.head.appendChild(n);const s=document.createElement("meta");s.name="google-signin-scope",s.content="https://www.googleapis.com/auth/drive.appdata",document.head.appendChild(s);const r=document.createElement("script");r.src="https://apis.google.com/js/platform.js",r.type="text/javascript",r.charset="utf-8",document.head.appendChild(r),r.onload=()=>{gapi.load("auth2",()=>{gapi.load("client",()=>{gapi.client.load("drive","v3",i)})})};const i=()=>{gapi.auth2.getAuthInstance().then(e=>{a.GoogleAuth=e,a.load(),g.setSave(this.save)},e=>{throw console.error(JSON.stringify(e)),e})}}};const f=s.a.createContext({});class b extends s.a.Component{constructor(e){super(e),this.state=void 0,this.load=e=>{try{0===e.length?(console.log("No buckets loaded, adding defaults"),this.load('{"hex":{"words":[{"words":"You come across ${hex.root}","weight":1}],"children":{"root":{"words":[{"words":"${hex.structure}. ${hex.additional}","weight":1}],"children":{}},"additional":{"words":[{"words":"","weight":5},{"words":"Nearby is ${hex.root}","weight":0.5}],"children":{}},"structure":{"words":[{"words":"${$a, size} number of ${hex.structure.status} statues","weight":1},{"words":"${$a, size.extreme, hex.structure.status} monastry${hex.structure.occupied}","weight":1},{"words":"${$a, size.extreme, hex.structure.status} tower${hex.structure.occupied}","weight":1},{"words":"${$a, size.extreme} obelisk","weight":1},{"words":"${$a, size.extreme} camp${hex.structure.occupied}","weight":1},{"words":"${$a, size, hex.structure.status} graveyard","weight":1},{"words":"some ${size, hex.structure.status} canals","weight":1},{"words":"${$a, size, hex.structure.status} hovel${hex.structure.occupied}","weight":1}],"children":{"occupied":{"words":[{"words":"","weight":5},{"words":". There are signs of recent occupation","weight":1},{"words":". There are friendly creatures here","weight":1},{"words":". There are neutral creatures here","weight":1},{"words":". There are unfriendly creatures here","weight":1}],"children":{}},"rarelyoccupied":{"words":[{"words":"","weight":5},{"words":"${hex.structure.occupied}","weight":1}],"children":{}},"status":{"words":[{"words":"","weight":2},{"words":"tumbledown","weight":1},{"words":"ruined","weight":1},{"words":"overgrown","weight":1},{"words":"poorly maintained","weight":1},{"words":"neatly maintained","weight":0.5},{"words":"freshly painted","weight":0.1}],"children":{}}}}}},"size":{"words":[{"words":"","weight":5},{"words":"small","weight":2},{"words":"large","weight":2},{"words":"modest","weight":1}],"children":{"extreme":{"words":[{"words":"${size}","weight":5},{"words":"tiny","weight":1},{"words":"enormous","weight":1},{"words":"huge","weight":1}],"children":{}}}}}')):l.a.deserialise(e)}catch(t){console.error("Error loading buckets: ".concat(t))}this.setState({})},this.navigate=e=>{e&&(this.setState({path:e}),window.history.pushState(null,"",function(e){return"/"+e.replace(/\./g,"/")}(e||"")))},this.inPath=e=>{const t=e.title.split("."),a=this.state.path.split(".");let n=0;for(let s=0;s<t.length&&!(a.length<s);s++)t[s]!==a[s]&&n++;return n<=1},this.state={googleManager:new v(this.load),inPath:this.inPath,load:this.load,navigate:this.navigate,path:k(window.location.pathname)},window.onpopstate=()=>{this.setState({path:k(window.location.pathname)})},this.load.bind(this)}render(){return s.a.createElement(f.Provider,{value:this.state},this.props.children)}}function k(e){return e.replace(/\//g,".").slice(1)}const E=e=>{let t=Object.assign({},e);return s.a.createElement(f.Consumer,null,e=>s.a.createElement("a",Object.assign({},t,{className:h()(t.className,{active:e.path===t.path}),onClick:a=>{t.onClick(a),e.navigate(t.path),a.preventDefault()}})))},y=({render:e})=>s.a.createElement(f.Consumer,null,t=>e(t));a(38),a(39);var N=e=>{let t;return s.a.createElement("div",{className:"floating-panel"},s.a.createElement("textarea",{ref:e=>t=e},e.content),s.a.createElement("div",{className:"button",onClick:()=>{e.doneFunc(t.value)}},e.doneString))};class C extends s.a.Component{constructor(e){super(e),this.clearPanel=()=>{this.setState({showPanel:!1})};let t="",a=!1;window.location.search.indexOf("privacy")>-1&&(t="Apparently I legally need a privacy policy, and it's this: I wouldn't even know how to get your data back out of this app. If you choose to log in through Google, the app saves your bucket data to Google Drive, specifically so I don't have to figure out how to save data any other way, so consider your secret random outcomes safe.",a=!0),this.state={content:t,doneFunc:this.clearPanel,doneString:"Thanks",showPanel:a}}render(){return s.a.createElement(y,{render:e=>s.a.createElement("div",{className:"controls"},s.a.createElement("div",{className:"g-signin2"},"Login"),s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"help button",onClick:e=>{this.setState({content:"Buckets are named and have a parent. Each bucket contains entries, which have a weight used for rolling on the table (supports divisions down to 0.1) and the words to use. To embed another table in the result, use `${fully.qualified.bucket.name}`. You can comma separate bucket names within the braces, and it will comma separate the results.\n\nCurrently there is one pair of supported commands: within a table query, use `$a` or `$an` to use the appropriate identifier depending on the result of the table query.\n\neg: `${$a, $size, $colour} table` may generates `a large blue table` or `an enormous pink table`, depending on the results. If there's no generated output, it the word used to call the command will be used, in this case `a table`.\n",doneFunc:this.clearPanel,doneString:"OK",showPanel:!0})}},"Really Basic Help"),s.a.createElement("div",{className:"undo button",onClick:g.undo},"Undo"),s.a.createElement("div",{className:"redo button",onClick:g.redo},"Redo"),s.a.createElement("div",{className:"import button"},"Import"),s.a.createElement("div",{className:"export button",onClick:t=>{this.setState({content:l.a.serialise(e.path),doneFunc:this.clearPanel,doneString:"OK",showPanel:!0})}},"Export")),this.state.showPanel&&s.a.createElement(N,{content:this.state.content,doneString:this.state.doneString,doneFunc:this.state.doneFunc}))})}}var x=C;function S(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"logo"}),s.a.createElement("div",{className:"spacer"}),s.a.createElement(x,null))}class $ extends s.a.Component{constructor(e){super(e),this.parentName=void 0,this.inputRef=void 0,this.parentName=e.parentName,this.inputRef=s.a.createRef(),this.newBucket=this.newBucket.bind(this)}render(){return s.a.createElement("div",{className:h()({root:!this.props.parentFolder},{folder:this.props.parentFolder},"new-bucket")},s.a.createElement("input",{ref:this.inputRef,className:"title"}),s.a.createElement("div",{className:"create confirm",onClick:this.newBucket}))}newBucket(e){if(this.inputRef.current){const e=this.parentName||"";!function(e,t,a){let n,s;if(t&&l.a.check(t)){const e=l.a.fetch(t);n=e.attach,s=e.detach}else n=l.a.attach,s=l.a.detach;const r=new c.Bucket(e);new g({dispatch:a,redo:()=>n(r),undo:()=>{s(r)}})}(this.inputRef.current.value,e,()=>{this.props.parentFolder&&this.props.parentFolder.setState({create:!1})})}}}var I=$,F=a(10);a(40);class j extends s.a.Component{constructor(e){super(e),this.state=Object(F.a)({collapseChildren:!!e.bucket&&!e.inPath(e.bucket)},e)}componentWillReceiveProps(e){e.collapsed===this.state.collapsed&&e.path===this.state.path||this.setState(Object(F.a)({},e))}render(){const e=this.state.bucket,t=[];var a,n=Object(m.a)(e.getChildren());try{for(n.s();!(a=n.n()).done;){const e=a.value;t.push(s.a.createElement(j,{bucket:e,collapsed:this.state.collapseChildren,inPath:this.state.inPath,path:this.state.path,key:e.title,create:!1,parentName:this.constructFullName()}))}}catch(r){n.e(r)}finally{n.f()}return this.state.create&&t.push(s.a.createElement(I,{parentName:this.constructFullName(),parentFolder:this})),s.a.createElement("div",{className:h()({root:0===e.title.length},{folder:e.title.length>0},{collapsed:this.props.collapsed},{focused:this.constructFullName()===this.state.path})},e.getChildren().length>0?s.a.createElement("div",{className:"toggle",onClick:()=>{this.setState({collapseChildren:!this.state.collapseChildren})}},this.state.collapseChildren?"+":"-"):"",s.a.createElement(E,{className:"title",path:this.constructFullName(),onClick:()=>{this.setState({collapseChildren:!1})}},e.title),s.a.createElement("div",{className:"create",onClick:()=>{this.setState({create:!0})}}),s.a.createElement("div",{className:"children"},t))}constructFullName(){var e;let t=this.state.parentName?this.state.parentName+".":"";return t+=null===(e=this.state.bucket)||void 0===e?void 0:e.title,t}}var O=j;class P extends s.a.Component{constructor(e){super(e),this.state={lastDragX:0,resizeMode:!1,width:275}}render(){const e=this;function t(t){t.nativeEvent.offsetX>e.state.width-10&&(document.body.addEventListener("pointermove",n),document.body.addEventListener("pointerleave",a),e.setState({lastDragX:t.pageX,resizeMode:!0}))}function a(t){document.body.removeEventListener("pointermove",n),document.body.removeEventListener("pointerleave",a),e.setState({resizeMode:!1})}function n(t){e.state.resizeMode&&0!==t.movementX&&e.setState({lastDragX:t.pageX,width:e.state.width+(t.pageX-e.state.lastDragX)})}return s.a.createElement(y,{render:n=>{const r=l.a.getBuckets().map(e=>s.a.createElement(O,{bucket:e,create:!1,collapsed:!1,inPath:n.inPath,path:n.path,parentName:""}));return r.push(s.a.createElement(I,{parentName:""})),s.a.createElement("div",{className:"sidebar",onPointerDown:t,onPointerUp:a,style:{width:e.state.width}},r)}})}}var z=P;function B(e){return s.a.createElement("div",{className:"frame"},s.a.createElement(S,null),s.a.createElement("div",{className:"center"},s.a.createElement(z,null),e.children),s.a.createElement(o,null))}a(41);class D extends s.a.Component{render(){return s.a.createElement(y,{render:e=>""!==e.path&&l.a.check(e.path)?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"result-title"},e.path),s.a.createElement("div",{className:"result-container"},s.a.createElement("div",{className:"results"},l.a.generate(e.path)),s.a.createElement("div",{className:"roller",onClick:e=>this.forceUpdate()},"Re-roll"))):s.a.createElement("div",{className:"result-title"},"Select a table to start.")})}}var T=D;a(13),a(42);class Q extends s.a.Component{constructor(e){super(e),this.updateDebounce=void 0,this.word=void 0,this.bucket=void 0,this.navigate=void 0,this.debounceLength=2500,this.state={create:e.create||!1,weight:e.word?e.word.weight:0,words:e.word?e.word.words:""},this.word=e.word,this.bucket=e.bucket,this.navigate=e.navigate,this.wordChange=this.wordChange.bind(this),this.weightChange=this.weightChange.bind(this),this.updateWord=this.updateWord.bind(this)}render(){return s.a.createElement("div",{className:h()("wordedit",{create:this.state.create})},s.a.createElement("input",{className:"weight",value:this.state.weight,onChange:this.weightChange}),s.a.createElement("input",{className:"words",value:this.state.words,onChange:this.wordChange}),s.a.createElement("div",{className:"button",onClick:this.updateWord}))}weightChange(e){const t=this.doUpdate.bind(this);this.setState({weight:e.target.value}),clearInterval(this.updateDebounce),this.updateDebounce=setTimeout(t,this.debounceLength)}wordChange(e){const t=this.doUpdate.bind(this);this.setState({words:e.target.value}),clearInterval(this.updateDebounce),this.updateDebounce=setTimeout(t,this.debounceLength)}updateWord(){var e,t,a;this.state.create?this.setState({create:!1}):this.word?(e=this.word,t=this.bucket,a=this.navigate,new g({dispatch:a,redo:()=>t.remove(e),undo:()=>t.add(e.words,e.weight)})):this.setState({create:!0,weight:0,words:""})}doUpdate(){var e,t,a;!this.word&&this.state.words&&this.state.weight?(this.word=new c.Word(this.state.words,+this.state.weight),e=this.word,t=this.bucket,new g({dispatch:a,redo:()=>t.add(e.words,e.weight),undo:()=>t.remove(e)})):this.word&&function(e,t,a,n){const s={words:e.words,weight:e.weight};new g({dispatch:n,redo:()=>e.update({words:t,weight:a}),undo:()=>e.update(s)})}(this.word,this.state.words,+this.state.weight)}}var R=Q;var W=()=>s.a.createElement(y,{render:e=>{if(""===e.path||!l.a.check(e.path))return null;const t=l.a.fetch(e.path);if(!t&&e.path.indexOf(".")>-1)e.navigate(e.path.slice(0,e.path.lastIndexOf(".")));else{if(t){const i=[],o=t.getWords();var a,n=Object(m.a)(o);try{for(n.s();!(a=n.n()).done;){const n=a.value;i.push(s.a.createElement(R,{key:"".concat(n.weight,"::").concat(n.words),word:n,bucket:t,navigate:()=>e.navigate(e.path)}))}}catch(r){n.e(r)}finally{n.f()}return i.push(s.a.createElement(R,{key:"".concat(Math.random()),bucket:t,navigate:()=>e.navigate(e.path),create:!0})),s.a.createElement("div",{className:"words"},i)}e.navigate("")}}});var X=()=>s.a.createElement("div",{className:"content"},s.a.createElement(T,null),s.a.createElement(W,null));var L=function(){return s.a.createElement(b,null,s.a.createElement(B,null,s.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[15,1,2]]]);