(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"115cb9c0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="cloud_supervisor/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"58dd":function(e,t,n){e.exports=n.p+"img/genesys-logo-red-152.eda4e9b8.png"},7517:function(e,t,n){"use strict";n("f8b3")},8395:function(e,t,n){"use strict";n("dac2")},c799:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var i=Object(r["w"])("AppHeader"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(i),Object(r["g"])(s)],64)}var a,c=n("1da1"),i=(n("96cf"),n("b85c")),s=n("53ca"),u=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("e9c4"),n("159b"),n("93bf")),l={clientId:"2942f3d8-0490-47e9-8464-c8715a02b740",redirectUri:"https://juarezgerman.github.io/cloud_supervisor/"},p=new u["a"].RoutingApi,d=new u["a"].ConversationsApi,f=new u["a"].NotificationsApi,b={loginImplicitGrant:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),n=t.get("environment")||localStorage.getItem("gc-environment")||"cac1.pure.cloud",r=u["a"].ApiClient.instance,r.setPersistSettings(!0,"agent-monitoring-app"),r.setEnvironment(n),localStorage.setItem("gc-environment",n),e.next=8,r.loginImplicitGrant(l.clientId,l.redirectUri);case 8:console.log("Authenticated");case 9:case"end":return e.stop()}}),e)})))()},disconnectConversation:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.postConversationDisconnect(e);case 3:return t.abrupt("return","OK");case 6:return t.prev=6,t.t0=t["catch"](0),console.log("err es de tipo: "+Object(s["a"])(t.t0)),t.abrupt("return","ERROR");case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getConversation:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.getConversation(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},conversationsEmailParticipantReplace:function(e,t,n){return Object(c["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={queueId:n},r.prev=1,r.next=4,d.postConversationsEmailParticipantReplace(e,t,o);case 4:return r.abrupt("return","OK");case 7:return r.prev=7,r.t0=r["catch"](1),console.log("err:"+JSON.stringify(r.t0)),r.abrupt("return","ERROR");case 11:case"end":return r.stop()}}),r,null,[[1,7]])})))()},getQueues:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.getRoutingQueues({pageSize:100});case 2:return t=e.sent,e.abrupt("return",t.entities);case 4:case"end":return e.stop()}}),e)})))()},getQueue:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.getRoutingQueue(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},getMembersOfQueue:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.getRoutingQueueMembers(e,{pageSize:100,expand:["presence","routingStatus"]});case 2:return n=t.sent,console.log(n),t.abrupt("return",n.entities);case 5:case"end":return t.stop()}}),t)})))()},subscribeToUsersStatus:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r="",n.next=3,f.postNotificationsChannels();case 3:if(o=n.sent,o.connectUri&&o.id){n.next=6;break}throw new Error("Channel not created");case 6:return console.log("Channel created"),r=o.id,a&&a.close(),a=new WebSocket(o.connectUri),a.onmessage=function(e){var n,r=Object(i["a"])(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;o(e)}}catch(a){r.e(a)}finally{r.f()}},c=[],e.forEach((function(e){c.push({id:"v2.users.".concat(e,"?presence&routingStatus")})})),n.next=15,f.postNotificationsChannelSubscriptions(r,c);case 15:console.log("Subscribed to topics");case 16:case"end":return n.stop()}}),n)})))()}},v=n("58dd"),g=n.n(v),m=function(e){return Object(r["s"])("data-v-4c5f0ee2"),e=e(),Object(r["q"])(),e},h={class:"hero"},O=m((function(){return Object(r["e"])("img",{src:g.a,alt:"Custom app"},null,-1)})),j=m((function(){return Object(r["e"])("h1",null,"Supervisor",-1)})),w=[O,j];function x(e,t){return Object(r["p"])(),Object(r["d"])("div",h,w)}n("7517");var _=n("d959"),k=n.n(_);const C={},R=k()(C,[["render",x],["__scopeId","data-v-4c5f0ee2"]]);var y=R,E={name:"Agent Monitoring App",components:{AppHeader:y},created:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.loginImplicitGrant();case 2:history.pushState({},"",l.redirectUri);case 3:case"end":return e.stop()}}),e)})))()}};n("8395");const S=k()(E,[["render",o]]);var I=S,M=n("6c02"),A=function(e){return Object(r["s"])("data-v-5878aeb5"),e=e(),Object(r["q"])(),e},P={class:"about"},q={class:"alert alert-success alert-dismissible"},D=A((function(){return Object(r["e"])("strong",null,"¡Aviso!",-1)})),N=Object(r["f"])(" Se procesó correctamente a la interacción seleccionada. "),U=A((function(){return Object(r["e"])("h2",{class:"view-header"},"Mover interacciones de cola",-1)})),T=A((function(){return Object(r["e"])("label",{class:"c_label"},"Cola destino: ",-1)})),J=["value"],Q=A((function(){return Object(r["e"])("hr",null,null,-1)})),V=A((function(){return Object(r["e"])("br",null,null,-1)})),H=A((function(){return Object(r["e"])("br",null,null,-1)})),K=["disabled"],z=["disabled"],G=["disabled"],L=A((function(){return Object(r["e"])("br",null,null,-1)})),B=A((function(){return Object(r["e"])("hr",null,null,-1)})),W=A((function(){return Object(r["e"])("br",null,null,-1)})),F=A((function(){return Object(r["e"])("br",null,null,-1)})),X=["disabled"],Y=["disabled"],Z=["disabled"];function $(e,t,n,o,a,c){return Object(r["p"])(),Object(r["d"])("div",P,[Object(r["E"])(Object(r["e"])("div",q,[Object(r["e"])("a",{onClick:t[0]||(t[0]=function(t){return e.mostrar_alerta=!1}),href:"#",class:"close","data-dismiss":"alert","aria-label":"close"},"×"),D,N],512),[[r["C"],e.mostrar_alerta]]),U,T,Object(r["E"])(Object(r["e"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.queue_selected=t})},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.queues,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e.key,value:e.value},Object(r["y"])(e.key),9,J)})),128))],512),[[r["A"],e.queue_selected]]),Q,V,Object(r["E"])(Object(r["e"])("input",{class:"c_input","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.conversation_id=t}),placeholder:"Conversation or Contact ID"},null,512),[[r["B"],e.conversation_id]]),H,Object(r["e"])("button",{class:"cmd-button",onClick:t[3]||(t[3]=function(){return e.moverInteraccion&&e.moverInteraccion.apply(e,arguments)}),disabled:""===e.conversation_id},"Mover conversación",8,K),Object(r["e"])("button",{class:"cmd-button",onClick:t[4]||(t[4]=function(){return e.desconectarInteraccion&&e.desconectarInteraccion.apply(e,arguments)}),disabled:""===e.conversation_id},"Desconectar conversación",8,z),Object(r["e"])("button",{class:"cmd-button",onClick:t[5]||(t[5]=function(){return e.deleteContact&&e.deleteContact.apply(e,arguments)}),disabled:""===e.conversation_id},"Eliminar contacto",8,G),L,B,W,Object(r["E"])(Object(r["e"])("textarea",{rows:"10",cols:"30",class:"c_input","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.lista_conversation_id=t}),placeholder:"Conversations or Contacts ID"},null,512),[[r["B"],e.lista_conversation_id]]),F,Object(r["e"])("button",{class:"cmd-button",onClick:t[7]||(t[7]=function(){return e.moverMultiplesConversationes&&e.moverMultiplesConversationes.apply(e,arguments)}),disabled:""===e.lista_conversation_id},"Mover multiples ID",8,X),Object(r["e"])("button",{class:"cmd-button",onClick:t[8]||(t[8]=function(){return e.desconectarMultiplesConversationes&&e.desconectarMultiplesConversationes.apply(e,arguments)}),disabled:""===e.lista_conversation_id},"Desconectar multiples ID",8,Y),Object(r["e"])("button",{class:"cmd-button",onClick:t[9]||(t[9]=function(){return e.eliminarMultiplesContactos&&e.eliminarMultiplesContactos.apply(e,arguments)}),disabled:""===e.lista_conversation_id},"Eliminar contactos ",8,Z)])}n("1276"),n("498a"),n("fb6a");var ee=new u["a"].OutboundApi,te={deleteContact:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee.deleteOutboundContactlistContact(e,t);case 3:return n.abrupt("return","OK");case 6:return n.prev=6,n.t0=n["catch"](0),r=JSON.stringify(n.t0),o=JSON.parse(r),console.log("error: "+o.body.message),n.abrupt("return","ERROR");case 12:case"end":return n.stop()}}),n,null,[[0,6]])})))()}},ne=Object(r["h"])({name:"Home",data:function(){return{mostrar_alerta:!1,conversation_id:"",lista_conversation_id:"",participant_id:"",total:0,nOk:0,nError:0,conversation:{},queue:{},queue_selected:"",queues:[{key:"Clientes-Mail",value:"e598bc2e-e464-46e2-90b2-79c51bae5710"},{key:"Clientes-Mail-Documentacion",value:"edfb3536-3b3f-4f13-beb2-fcc2d497ec9d"},{key:"Soporte-AdministracionVentas-Mail",value:"c7e21a46-fe6f-48dc-a1fb-15433d20c46c"},{key:"Soporte-AdmPostVenta-Mail",value:"3292bd26-4149-4863-a429-1e9db5324fb2"},{key:"Ventas-WA-Hogar",value:"61ba9def-28ed-436f-8ec8-3fc5313a3212"},{key:"Clientes-Mail-Finalizar",value:"b2c2d6f5-5df1-4f60-a966-75d8718cfb77"}]}},methods:{sleep:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},moverMultiplesConversationes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0,r=0,o=e.lista_conversation_id.split("\n"),e.total=o.length,console.log("Cola: ["+e.queue_selected+"]"),n=0;case 6:if(!(n<o.length)){t.next=36;break}if(""===o[n].trim()){t.next=32;break}return e.conversation_id=o[n].trim(),console.log("["+e.conversation_id+"] inicio"),r++,t.next=13,b.getConversation(e.conversation_id);case 13:if(t.t1=a=t.sent,t.t0=null!==t.t1,!t.t0){t.next=17;break}t.t0=void 0!==a;case 17:if(!t.t0){t.next=21;break}t.t2=a,t.next=22;break;case 21:t.t2={};case 22:return e.conversation=t.t2,console.log("conversation.participants: ["+e.conversation.participants.length+"]"),t.next=26,e.moverConversationID(e.conversation,e.queue_selected);case 26:return console.log("espero 1 seg"),t.next=29,e.sleep(1e3);case 29:e.conversation_id="",t.next=33;break;case 32:console.log("linea vacia, no se cuenta");case 33:n++,t.next=6;break;case 36:return console.log("total de lineas:"+e.total),t.next=39,e.sleep(1e3);case 39:console.log("total de conversaciones:"+r);case 40:case"end":return t.stop()}}),t)})))()},moverInteraccion:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.getConversation(e.conversation_id);case 2:if(t.t1=n=t.sent,t.t0=null!==t.t1,!t.t0){t.next=6;break}t.t0=void 0!==n;case 6:if(!t.t0){t.next=10;break}t.t2=n,t.next=11;break;case 10:t.t2={};case 11:e.conversation=t.t2,console.log("conversation.participants: ["+e.conversation.participants.length+"]"),e.moverConversationID(e.conversation,e.queue_selected),e.conversation_id="",e.queue_selected="",e.mostrar_alerta=!0;case 17:case"end":return t.stop()}}),t)})))()},desconectarMultiplesConversationes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0,0,r=e.lista_conversation_id.split("\n"),e.total=r.length,n=0;case 5:if(!(n<r.length)){t.next=22;break}if(""===r[n].trim()){t.next=17;break}return e.conversation_id=r[n].trim(),console.log("["+e.conversation_id+"] inicio"),b.disconnectConversation(e.conversation_id).then((function(t){var n=t;console.log("[disconnectConversation]resultado: "+n),"OK"===n?e.nOk++:e.nError++})),console.log("espero 1s p/no superar api calls"),t.next=14,e.sleep(1e3);case 14:e.conversation_id="",t.next=19;break;case 17:console.log("linea vacia, no se cuenta"),e.nError++;case 19:n++,t.next=5;break;case 22:console.log("total de lineas:"+e.total),console.log("total de conversaciones procesadas:"+e.nOk),console.log("total de conversaciones con error:"+e.nError),e.total=0,e.nError=0,e.nOk=0;case 28:case"end":return t.stop()}}),t)})))()},desconectarInteraccion:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{b.disconnectConversation(e.conversation_id)}catch(n){console.log("Excepcion:"+JSON.stringify(n))}case 1:case"end":return t.stop()}}),t)})))()},eliminarMultiplesContactos:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0,0,r=e.lista_conversation_id.split("\n"),e.total=r.length,n=0;case 5:if(!(n<r.length)){t.next=22;break}if(""===r[n].trim()){t.next=17;break}return e.conversation_id=r[n].trim(),console.log("["+e.conversation_id+"] inicio"),te.deleteContact("1756bdd2-35a8-4fb6-bf07-660087504c21",e.conversation_id).then((function(t){var n=t;console.log("[deleteContact]resultado: "+n),"OK"===n?e.nOk++:e.nError++})),console.log("espero 1s p/no superar api calls"),t.next=14,e.sleep(1e3);case 14:e.conversation_id="",t.next=19;break;case 17:console.log("linea vacia, no se cuenta"),e.nError++;case 19:n++,t.next=5;break;case 22:console.log("total de lineas:"+e.total),console.log("total de contactos procesados:"+e.nOk),console.log("total de contactos con error:"+e.nError),e.total=0,e.nError=0,e.nOk=0;case 28:case"end":return t.stop()}}),t)})))()},deleteContact:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{te.deleteContact("1756bdd2-35a8-4fb6-bf07-660087504c21",e.conversation_id)}catch(n){console.log("Excepcion:"+JSON.stringify(n))}case 1:case"end":return t.stop()}}),t)})))()},moverConversationID:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=!0,o="",a="";try{e.participants.slice().reverse().forEach((function(n){if(r){if(console.log("participant.purpose: ["+n.purpose+"]"),console.log("participant.participantId: ["+n.id+"]"),console.log("-----------------"),"acd"===n.purpose&&null!=n.queueId){var c;console.log("*** PARTICIPANTE ENCONTRADO ***"),console.log("Se mueve ixn: ["+e.id+"]"),console.log("a la cola id: ["+t+"]"),console.log("participantId a usar: ["+n.id+"]"),n.id&&(o=n.id),e.id&&(a=e.id);c=b.conversationsEmailParticipantReplace(a,o,t);r=!1}}else console.log("no analizo mas participantes")}))}catch(c){console.log("Excepcion:"+JSON.stringify(c))}case 4:case"end":return n.stop()}}),n)})))()}}});n("f752");const re=k()(ne,[["render",$],["__scopeId","data-v-5878aeb5"]]);var oe=re,ae=[{path:"/",name:"Home",component:oe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ce=Object(M["a"])({history:Object(M["b"])("cloud_supervisor/"),routes:ae}),ie=ce;Object(r["c"])(I).use(ie).mount("#app")},dac2:function(e,t,n){},f752:function(e,t,n){"use strict";n("c799")},f8b3:function(e,t,n){}});
//# sourceMappingURL=app.05da6289.js.map