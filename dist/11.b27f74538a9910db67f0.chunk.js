/*! For license information please see 11.b27f74538a9910db67f0.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{105:function(e,t,n){e.exports={"line-through":"sitemap__line-through___25Ggx",sitemap:"sitemap__sitemap___2mkRz",sitemapUnorderedList:"sitemap__sitemapUnorderedList___14wVG",sitemapItem:"sitemap__sitemapItem___34w4U"}},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.homeURI=window.location.protocol+"//"+window.location.hostname+(0===window.location.port.length?"":":8443")},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(10),o=p(r);n(105);var u=p(n(20)),i=n(16),l=p(n(231)),c=p(n(22)),s=p(n(232)),f=p(n(316));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={customPages:[],error:null,pages:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.getAll(),this.getTags()}},{key:"getAll",value:function(){var e=this;u.default.get(i.homeURI+"/apiV1/page/getall").then((function(t){e.setState({pages:t.data})})).catch((function(t){e.setState({error:t.toString()}),new Error(t.toString())}))}},{key:"getTags",value:function(){var e=this;u.default.get(i.homeURI+"/apiV1/page/getTags").then((function(t){var n=[];t.data.forEach((function(e){n.push(e._id.name)}));var a=(0,s.default)(n),r=(0,f.default)(a);e.setState({customPages:r})})).catch((function(t){e.setState({error:t.toString()}),new Error(t.toString())}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.pages,a=e.customPages;return o.default.createElement("main",{className:"sitemap__sitemap___2mkRz"},o.default.createElement("h3",null,"Sitemap"),o.default.createElement("section",null,t&&o.default.createElement("p",null,t),!t&&o.default.createElement("h4",null,"Categories"),!t&&o.default.createElement(c.default,null,o.default.createElement(l.default,{categories:!0,data:a})),!t&&o.default.createElement("h4",null,"Tracks"),!t&&o.default.createElement(c.default,null,o.default.createElement(l.default,{data:n}))))}}]),t}(r.Component);t.default=d},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(10),o=l(r);n(105);var u=l(n(11)),i=n(12);function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.categories,n=e.data;return o.default.createElement("ul",{className:"sitemap__sitemapUnorderedList___14wVG"},!t&&n.map((function(e){return o.default.createElement("li",{key:e._id},o.default.createElement(i.Link,{className:"sitemap__sitemapItem___34w4U",to:"/"+e.slug+"/"+e._id},e.title))})),t&&n.map((function(e,t){var a="category/"+encodeURIComponent(n[t][0]);return o.default.createElement("li",{key:t.toString()},o.default.createElement(i.Link,{className:"sitemap__sitemapItem___34w4U",to:a},n[t][0]))})))}}]),t}(r.Component);c.propTypes={categories:u.default.bool,data:u.default.arrayOf(u.default.object,u.default.string,u.default.number,u.default.node,u.default.element,u.default.arrayOf(u.default.string,u.default.number))},c.defaultProps={categories:!1,data:[]},t.default=c}}]);