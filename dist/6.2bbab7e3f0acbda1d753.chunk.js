(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unmount=t.mount=t.bootstrap=void 0;var r=a(n(131)),o=a(n(251)),u=a(n(255)),l=a(n(256));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,u.default)({React:r.default,ReactDOM:o.default,rootComponent:l.default,domElementGetter:function(){return document.getElementById("root")}});t.bootstrap=[i.bootstrap],t.mount=[i.mount],t.unmount=[i.unmount]},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=a(o),l=a(n(132));function a(e){return e&&e.__esModule?e:{default:e}}n(297);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={error:null,errorInfo:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=e.errorInfo,n=e.error,r=this.props.children;return t?u.default.createElement(u.default.Fragment,null,u.default.createElement("h2",null,"Something went wrong."),u.default.createElement("details",{className:"ErrorBoundary__fragmentDetails___2-AcC"},n&&n.toString(),u.default.createElement("br",null),t.componentStack)):r}}]),t}();t.default=i,i.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node])},i.defaultProps={children:null}},163:function(e,t,n){e.exports={"line-through":"index__line-through___1xJV3"}},164:function(e,t,n){e.exports={"line-through":"footer__line-through___2WBHC",innerFooter:"footer__innerFooter___vx9DQ",footerRightColumn:"footer__footerRightColumn___3YMHl",footerLeftColumn:"footer__footerLeftColumn___XxonI"}},225:function(e,t,n){e.exports={"line-through":"nav__line-through___1V_ab",innerNav:"nav__innerNav___18Pap",navLeftColumn:"nav__navLeftColumn___iRUuT",navRightColumn:"nav__navRightColumn___2bzTO",closeMenu:"nav__closeMenu___9wvBF"}},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=s(o),l=n(133),a=n(249),i=n(212),c=s(n(265));n(268),n(163);var f=s(n(287));function s(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(i.Provider,{store:c.default},u.default.createElement(a.CookiesProvider,null,u.default.createElement(l.BrowserRouter,null,u.default.createElement(f.default,null))))}}]),t}();t.default=p},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var r=n(218),o=function(e){return e&&e.__esModule?e:{default:e}}(n(266)),u=n(267);var l=(0,r.combineReducers)({search:u.searchTextReducer}),a=t.store=(0,r.createStore)(l,(0,r.compose)((0,r.applyMiddleware)(o.default),window.devToolsExtenion?window.devToolsExtenion:function(e){return e}));t.default=a},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.searchTextReducer=function(e,t){switch(e=[],t.type){case"SET_PAGES":return Object.assign.apply(Object,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e).concat([t.payload]));default:return e}}},268:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(143)),o=n(124);r.default.interceptors.request.use(function(e){var t=(0,o.getCookieValue)("token");return t&&(e.headers.Authorization="Bearer "+t),e},function(e){return Promise.reject(e)})},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=f(o),l=n(133),a=f(n(288)),i=f(n(294)),c=f(n(144));function f(e){return e&&e.__esModule?e:{default:e}}var s=(0,o.lazy)(function(){return n.e(7).then(n.t.bind(null,334,7))}),p=(0,o.lazy)(function(){return n.e(11).then(n.t.bind(null,343,7))}),d=(0,o.lazy)(function(){return n.e(13).then(n.t.bind(null,345,7))}),_=(0,o.lazy)(function(){return n.e(9).then(n.t.bind(null,347,7))}),y=(0,o.lazy)(function(){return n.e(14).then(n.t.bind(null,350,7))}),b=(0,o.lazy)(function(){return n.e(12).then(n.t.bind(null,352,7))}),h=(0,o.lazy)(function(){return Promise.all([n.e(2),n.e(10)]).then(n.t.bind(null,354,7))}),m=(0,o.lazy)(function(){return Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,456,7))}),v=(0,o.lazy)(function(){return n.e(15).then(n.t.bind(null,472,7))}),E=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"wrapper"},u.default.createElement(c.default,null,u.default.createElement(a.default,null)),u.default.createElement(o.Suspense,{fallback:u.default.createElement("div",null,"Loading...")},u.default.createElement(l.Switch,null,u.default.createElement(l.Route,{exact:!0,path:"/",render:function(){return u.default.createElement(m,null)}}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(m,null)},exact:!0,path:"/category/:tag"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(s,null)},exact:!0,path:"/:slug/:id"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(p,null)},exact:!0,path:"/contact"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(d,null)},exact:!0,path:"/about-us"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(_,null)},exact:!0,path:"/my-account"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(y,null)},exact:!0,path:"/vinyl-singles-top-30-chart"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(b,null)},exact:!0,path:"/comments-policy"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(h,null)},exact:!0,path:"/sitemap"}),u.default.createElement(l.Route,{component:function(){return u.default.createElement(v,null)},path:""}))),u.default.createElement(c.default,null,u.default.createElement(i.default,null)))}}]),t}();t.default=E},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=d(o),l=n(132),a=n(249),i=d(n(224)),c=d(n(289)),f=d(n(290));n(225);var s=d(n(291)),p=d(n(293));function d(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.cookies;return n.state={isClicked:!1,loggedIn:r.get("token")||!1},n.handleClicked=n.handleClicked.bind(n),n.handleLogout=n.handleLogout.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.state.isClicked;n===t.isClicked&&n&&this.setState({isClicked:!n})}},{key:"handleLogout",value:function(){var e=this.props.cookies;e.remove("token"),this.setState({loggedIn:e.get("token")||!1})}},{key:"handleClicked",value:function(){var e=this.state.isClicked;this.setState({isClicked:!e})}},{key:"render",value:function(){var e=this.state,t=e.isClicked,n=e.loggedIn,r=t?"display-menu":"no-menu",o=(0,i.default)("inner-header","wrapper"),l=null;return l=n?u.default.createElement(f.default,{onClick:this.handleLogout}):u.default.createElement(c.default,null),u.default.createElement("nav",null,u.default.createElement("div",{className:(o?o+" ":"")+"nav__innerNav___18Pap"},u.default.createElement("div",{className:"nav__navLeftColumn___iRUuT"},u.default.createElement(p.default,{text:"SoundsVinyl"})),u.default.createElement("div",{className:"nav__navRightColumn___2bzTO"},u.default.createElement("label",{className:"hidden-desktop",htmlFor:"toggle-1"},"Main Menu"),u.default.createElement("input",{className:"hidden-desktop",id:"toggle-1",onChange:this.handleClicked,type:"checkbox"}),u.default.createElement("div",{className:((0,i.default)("hidden-desktop",r)?(0,i.default)("hidden-desktop",r)+" ":"")+"nav__closeMenu___9wvBF",onClick:this.handleClicked}),u.default.createElement(s.default,{buttonElement:l,isClicked:r}))))}}]),t}();_.propTypes={cookies:(0,l.instanceOf)(a.Cookies).isRequired},t.default=(0,a.withCookies)(_)},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=function(e){return e&&e.__esModule?e:{default:e}}(o),l=n(133);var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(l.Link,{to:"/my-account"},u.default.createElement("li",null,"My account"))}}]),t}();t.default=a},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(131)),o=n(133),u=l(n(132));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.onClick;return r.default.createElement(o.Link,{onClick:t,to:"/"},r.default.createElement("li",null,r.default.createElement("span",null,"Logout")))}a.propTypes={onClick:u.default.func},t.default=a},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=c(o),l=c(n(132)),a=n(133),i=c(n(292));function c(e){return e&&e.__esModule?e:{default:e}}n(225);var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.buttonElement,n=e.isClicked;return u.default.createElement("ul",{className:n},u.default.createElement(a.Link,{to:"/"},u.default.createElement(i.default,{text:"Home"})),u.default.createElement(a.Link,{to:"/about-us"},u.default.createElement(i.default,{text:"About"})),u.default.createElement(a.Link,{to:"/contact"},u.default.createElement(i.default,{text:"Contact"})),t)}}]),t}();f.propTypes={buttonElement:l.default.oneOfType([l.default.node]),isClicked:l.default.string.isRequired},f.defaultProps={buttonElement:null},t.default=f},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=a(o),l=a(n(132));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.text;return u.default.createElement("li",null,u.default.createElement("span",null,e))}}]),t}();i.propTypes={text:l.default.string.isRequired},t.default=i},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=a(o),l=a(n(132));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.text;return u.default.createElement("a",{href:"/"},u.default.createElement("h1",null,e))}}]),t}();i.propTypes={text:l.default.string.isRequired},t.default=i},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=i(o);n(164);var l=i(n(224)),a=i(n(295));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=(0,l.default)("inner-footer","wrapper");return u.default.createElement("footer",null,u.default.createElement("div",{className:(e?e+" ":"")+"footer__innerFooter___vx9DQ"},u.default.createElement("div",{className:"footer__footerLeftColumn___XxonI"},u.default.createElement("p",null,"SoundsVinyl")),u.default.createElement("div",{className:"footer__footerRightColumn___3YMHl"},u.default.createElement(a.default,null))))}}]),t}();t.default=c},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=i(o),l=n(133),a=i(n(296));function i(e){return e&&e.__esModule?e:{default:e}}n(164);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("ul",null,u.default.createElement(l.Link,{to:"/comments-policy"},u.default.createElement(a.default,{text:"Comments Policy"})),u.default.createElement(l.Link,{to:"/sitemap"},u.default.createElement(a.default,{text:"Sitemap"})),u.default.createElement("a",{href:"https://github.com/TCotton/soundsvinyl",rel:"noreferrer"},u.default.createElement(a.default,{text:"Code (CC BY-NC 4.0 license)"})))}}]),t}();t.default=c},296:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(131),u=a(o);n(164);var l=a(n(132));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.text;return u.default.createElement("li",null,e)}}]),t}();i.propTypes={text:l.default.string.isRequired},t.default=i},297:function(e,t,n){e.exports={"line-through":"ErrorBoundary__line-through___3LNn9",fragmentDetails:"ErrorBoundary__fragmentDetails___2-AcC"}}}]);