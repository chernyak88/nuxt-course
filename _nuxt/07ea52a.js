(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{240:function(e,t,r){"use strict";r.r(t);var n=r(5),c=(r(43),{fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(r=e.store).getters["users/users"].length){t.next=4;break}return t.next=4,r.dispatch("users/fetch");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{pageTitle:"Users Page"}},computed:{users:function(){return this.$store.getters["users/users"]}},methods:{openUser:function(e){this.$router.push("/users/"+e.id)}}}),o=r(24),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h1",[e._v(e._s(e.pageTitle))]),e._v(" "),r("ul",e._l(e.users,(function(t){return r("li",{key:t.id},[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.openUser(t)}}},[e._v(e._s(t.name))])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);