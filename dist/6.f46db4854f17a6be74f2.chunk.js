/*! For license information please see 6.f46db4854f17a6be74f2.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,n){e.exports={"line-through":"nav__line-through___1V_ab",innerNav:"nav__innerNav___18Pap",navLeftColumn:"nav__navLeftColumn___iRUuT",navRightColumn:"nav__navRightColumn___2bzTO",closeMenu:"nav__closeMenu___9wvBF"}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=s(o),a=n(12),l=n(126),i=n(92),c=s(n(145));n(148),n(43);var f=s(n(166));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return u.default.createElement(u.default.StrictMode,null,u.default.createElement(i.Provider,{store:c.default},u.default.createElement(l.CookiesProvider,null,u.default.createElement(a.BrowserRouter,null,u.default.createElement(f.default,null)))))}}]),t}(o.Component);t.default=d},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var r,o=n(95),u=n(146),a=(r=u)&&r.__esModule?r:{default:r},l=n(147);var i=(0,o.combineReducers)({search:l.searchTextReducer}),c=t.store=(0,o.createStore)(i,(0,o.compose)((0,o.applyMiddleware)(a.default),window.devToolsExtenion?window.devToolsExtenion:function(e){return e}));t.default=c},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.searchTextReducer=function(e,t){switch(e=[],t.type){case"SET_PAGES":return Object.assign.apply(Object,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e).concat([t.payload]));default:return e}}},148:function(e,t,n){"use strict";var r,o=n(20),u=(r=o)&&r.__esModule?r:{default:r},a=n(2);u.default.interceptors.request.use((function(e){var t=(0,a.getCookieValue)("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)}))},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=c(o),a=n(12),l=c(n(167)),i=c(n(22));function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,o.lazy)((function(){return n.e(7).then(n.t.bind(null,210,7))})),s=(0,o.lazy)((function(){return n.e(12).then(n.t.bind(null,219,7))})),d=(0,o.lazy)((function(){return n.e(14).then(n.t.bind(null,221,7))})),p=(0,o.lazy)((function(){return n.e(9).then(n.t.bind(null,223,7))})),y=(0,o.lazy)((function(){return n.e(15).then(n.t.bind(null,226,7))})),_=(0,o.lazy)((function(){return n.e(13).then(n.t.bind(null,228,7))})),b=(0,o.lazy)((function(){return Promise.all([n.e(2),n.e(11)]).then(n.t.bind(null,230,7))})),h=(0,o.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,332,7))})),m=(0,o.lazy)((function(){return n.e(16).then(n.t.bind(null,348,7))})),v=(0,o.lazy)((function(){return n.e(10).then(n.t.bind(null,349,7))})),E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"wrapper"},u.default.createElement(i.default,null,u.default.createElement(l.default,null)),u.default.createElement(o.Suspense,{fallback:u.default.createElement("div",null,"Loading...")},u.default.createElement(a.Switch,null,u.default.createElement(a.Route,{exact:!0,path:"/",render:function(){return u.default.createElement(h,null)}}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(h,null)},exact:!0,path:"/category/:tag"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(f,null)},exact:!0,path:"/:slug/:id"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(s,null)},exact:!0,path:"/contact"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(d,null)},exact:!0,path:"/about-us"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(p,null)},exact:!0,path:"/my-account"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(y,null)},exact:!0,path:"/vinyl-singles-top-30-chart"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(_,null)},exact:!0,path:"/comments-policy"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(b,null)},exact:!0,path:"/sitemap"}),u.default.createElement(a.Route,{component:function(){return u.default.createElement(m,null)},path:""}))),u.default.createElement(i.default,null,u.default.createElement(o.Suspense,{fallback:u.default.createElement("div",null)},u.default.createElement(v,null))))}}]),t}(o.Component);t.default=E},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=p(o),a=n(11),l=n(126),i=p(n(101)),c=p(n(168)),f=p(n(169));n(102);var s=p(n(170)),d=p(n(172));function p(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.cookies;return n.state={isClicked:!1,loggedIn:r.get("token")||!1},n.handleClicked=n.handleClicked.bind(n),n.handleLogout=n.handleLogout.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.state.isClicked;n===t.isClicked&&n&&this.setState({isClicked:!n})}},{key:"handleLogout",value:function(){var e=this.props.cookies;e.remove("token"),this.setState({loggedIn:e.get("token")||!1})}},{key:"handleClicked",value:function(){var e=this.state.isClicked;this.setState({isClicked:!e})}},{key:"render",value:function(){var e=this.state,t=e.isClicked,n=e.loggedIn,r=t?"display-menu":"no-menu",o=(0,i.default)("inner-header","wrapper"),a=null;a=n?u.default.createElement(f.default,{onClick:this.handleLogout}):u.default.createElement(c.default,null);return u.default.createElement("nav",null,u.default.createElement("div",{className:(o?o+" ":"")+"nav__innerNav___18Pap"},u.default.createElement("div",{className:"nav__navLeftColumn___iRUuT"},u.default.createElement(d.default,{text:"SoundsVinyl"})),u.default.createElement("div",{className:"nav__navRightColumn___2bzTO"},u.default.createElement("label",{className:"hidden-desktop",htmlFor:"toggle-1"},"Main Menu"),u.default.createElement("input",{className:"hidden-desktop",id:"toggle-1",onChange:this.handleClicked,type:"checkbox"}),u.default.createElement("div",{className:((0,i.default)("hidden-desktop",r)?(0,i.default)("hidden-desktop",r)+" ":"")+"nav__closeMenu___9wvBF",onClick:this.handleClicked}),u.default.createElement(s.default,{buttonElement:a,isClicked:r}))))}}]),t}(o.Component);y.propTypes={cookies:(0,a.instanceOf)(l.Cookies).isRequired},t.default=(0,l.withCookies)(y)},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(10),a=(r=u)&&r.__esModule?r:{default:r},l=n(12);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return a.default.createElement(l.Link,{to:"/my-account"},a.default.createElement("li",null,"My account"))}}]),t}(u.Component);t.default=i},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(10)),o=n(12),u=a(n(11));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.onClick;return r.default.createElement(o.Link,{onClick:t,to:"/"},r.default.createElement("li",null,r.default.createElement("span",null,"logout")))}l.propTypes={onClick:u.default.func},t.default=l},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=c(o),a=c(n(11)),l=n(12),i=c(n(171));function c(e){return e&&e.__esModule?e:{default:e}}n(102);var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.buttonElement,n=e.isClicked;return u.default.createElement("ul",{className:n},u.default.createElement(l.Link,{to:"/"},u.default.createElement(i.default,{text:"Home"})),u.default.createElement(l.Link,{to:"/about-us"},u.default.createElement(i.default,{text:"About"})),u.default.createElement(l.Link,{to:"/contact"},u.default.createElement(i.default,{text:"Contact"})),t)}}]),t}(o.Component);f.propTypes={buttonElement:a.default.oneOfType([a.default.node]),isClicked:a.default.string.isRequired},f.defaultProps={buttonElement:null},t.default=f},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=l(o),a=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.text;return u.default.createElement("li",null,u.default.createElement("span",null,e))}}]),t}(o.Component);i.propTypes={text:a.default.string.isRequired},t.default=i},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=l(o),a=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.text;return u.default.createElement("a",{"aria-label":"Home page",href:"/"},u.default.createElement("h1",null,e))}}]),t}(o.Component);i.propTypes={text:a.default.string.isRequired},t.default=i},173:function(e,t,n){e.exports={"line-through":"ErrorBoundary__line-through___3LNn9",fragmentDetails:"ErrorBoundary__fragmentDetails___2-AcC"}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10),u=l(o),a=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}n(173);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={error:null,errorInfo:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=e.errorInfo,n=e.error,r=this.props.children;return t?u.default.createElement(u.default.Fragment,null,u.default.createElement("h2",null,"Something went wrong."),u.default.createElement("details",{className:"ErrorBoundary__fragmentDetails___2-AcC"},n&&n.toString(),u.default.createElement("br",null),t.componentStack)):r}}]),t}(o.Component);i.propTypes={children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node])},i.defaultProps={children:null},t.default=i},43:function(e,t,n){e.exports={"line-through":"index__line-through___1xJV3"}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unmount=t.mount=t.bootstrap=void 0;var r=l(n(10)),o=l(n(128)),u=l(n(132)),a=l(n(133));function l(e){return e&&e.__esModule?e:{default:e}}var i=(0,u.default)({React:r.default,ReactDOM:o.default,rootComponent:a.default,domElementGetter:function(){return document.getElementById("root")}});t.bootstrap=[i.bootstrap],t.mount=[i.mount],t.unmount=[i.unmount]}}]);