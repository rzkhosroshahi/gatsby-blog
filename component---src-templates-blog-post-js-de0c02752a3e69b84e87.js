(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CommentEmbed=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(a.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},HhXV:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.DiscussionEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}(a.default.Component)},Nr8n:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("vOnD"),r=n("WXSt"),i=Object(o.c)("h1").withConfig({displayName:"H1",componentId:"sc-9f56xm-0"})(["font-size:1.618rem;line-height:calc(2 * var(--base-line));color:"," !important;@media ","{font-size:2.618rem;line-height:calc(3 * var(--base-line));}"],(function(e){return e.theme.textColor}),r.b)},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(a.default.Component)},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,i=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value;if(e[u]!==t[u]&&!a(e[u]))return!0}}catch(l){r=!0,i=l}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return!1};var o,r=n("q1tI"),i=(o=r)&&o.__esModule?o:{default:o};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},xfY5:function(e,t,n){"use strict";var o=n("dyZX"),r=n("aagx"),i=n("LZWt"),a=n("Xbzi"),s=n("apmT"),c=n("eeVq"),u=n("kJMx").f,l=n("EemH").f,d=n("hswa").f,f=n("qncB").trim,p=o.Number,m=p,h=p.prototype,v="Number"==i(n("Kuth")(h)),b="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,i=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var a,c=t.slice(2),u=0,l=c.length;u<l;u++)if((a=c.charCodeAt(u))<48||a>r)return NaN;return parseInt(c,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?c((function(){h.valueOf.call(n)})):"Number"!=i(n))?a(new m(y(t)),n,p):y(t)};for(var w,E=n("nh4g")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;E.length>g;g++)r(m,w=E[g])&&!r(p,w)&&d(p,w,l(m,w));p.prototype=h,h.constructor=p,n("KroJ")(o,"Number",p)}},yihx:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),i=n("vOnD"),a=n("7evw"),s=n("Hv6d"),c=n("Nr8n"),u=n("NWMZ"),l=n("XTAU"),d=n("Wbzz"),f=n("WXSt"),p=Object(i.c)("div").withConfig({displayName:"PostNavigate__Div",componentId:"tmeisd-0"})(["display:flex;justify-content:flex-end;flex-wrap:wrap;margin-top:calc(1 * var(--base-line));margin:var(--base-line) 0;"]),m=Object(i.c)("div").withConfig({displayName:"PostNavigate__Next",componentId:"tmeisd-1"})(["display:flex;justify-content:flex-end;min-width:50%;@media ","{min-width:50%;}"],f.b),h=Object(i.c)("div").withConfig({displayName:"PostNavigate__Prev",componentId:"tmeisd-2"})(["display:flex;justify-content:flex-start;min-width:50%;"]),v=Object(i.c)(d.Link).withConfig({displayName:"PostNavigate__StyledLink",componentId:"tmeisd-3"})(["text-decoration:none;color:",";border-bottom:0.0625rem solid #e0e0e0;&:hover,&:focus{color:",";border-color:",";}"],(function(e){return e.theme.linkColor}),(function(e){return e.theme.linkHoverColor}),(function(e){return e.theme.linkHoverColor})),b=function(e){var t=e.next,n=e.prev,o=t.path,i=n.path;return r.a.createElement(p,{className:"PostNavigate"},i&&r.a.createElement(h,null,r.a.createElement(v,{to:i},"پست قبلی")),o&&r.a.createElement(m,null,r.a.createElement(v,{to:o},"پست بعدی")))};b.defaultProps={next:{path:null},prev:{path:null}},n.d(t,"query",(function(){return w}));var y=Object(i.c)("div").withConfig({displayName:"blogPost__TemplateDiv",componentId:"x0dikm-0"})(["margin-top:calc(3 * var(--base-line));.post__content{margin-top:calc(1 * var(--base-line));}"]),w="395931650";t.default=function(e){var t=e.data,n=e.pageContext,o=t.markdownRemark,i=o.html,d=o.frontmatter,f=d.title,p=n.next,m=n.prev,h={shortname:"itstardis-me",config:{identifier:n.pathSlug,title:f}};return r.a.createElement(s.a,null,r.a.createElement(l.a,{frontmatter:d}),r.a.createElement(y,null,r.a.createElement(c.a,null,f),r.a.createElement("div",{className:"post__content"},r.a.createElement(u.a,{dangerouslySetInnerHTML:{__html:i}}),r.a.createElement(b,{next:p&&p.frontmatter||void 0,prev:m&&m.frontmatter||void 0}),r.a.createElement(a.DiscussionEmbed,h))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-de0c02752a3e69b84e87.js.map