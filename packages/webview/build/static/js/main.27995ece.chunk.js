(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{112:function(e,n,t){},113:function(e,n,t){},125:function(e,n,t){"use strict";t.r(n);var c,r=t(6),s=t.n(r),a=t(96),o=t.n(a),i=(t(112),t(97)),l=t.p+"static/media/logo.6ce24c58.svg",d=(t(113),t(47)),j=t(26),u=Object(d.gql)(c||(c=Object(i.a)(['\n  query GetExchangeRates {\n    rates(currency: "USD") {\n      currency\n      rate\n    }\n  }\n'])));var p=function(){var e=Object(d.useQuery)(u),n=e.loading,t=e.error,c=e.data;return n?Object(j.jsx)("p",{children:"Loading..."}):t?Object(j.jsx)("p",{children:"Error :("}):Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),c.rates.map((function(e){var n=e.currency,t=e.rate;return Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[n,": ",t]})},n)}))]})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,126)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),s(e),a(e)}))},h=t(67),g=new h.ApolloClient({uri:"https://48p1r2roz4.sse.codesandbox.io",cache:new h.InMemoryCache});o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d.ApolloProvider,{client:g,children:Object(j.jsx)(p,{})})}),document.getElementById("root")),b()}},[[125,1,2]]]);
//# sourceMappingURL=main.27995ece.chunk.js.map