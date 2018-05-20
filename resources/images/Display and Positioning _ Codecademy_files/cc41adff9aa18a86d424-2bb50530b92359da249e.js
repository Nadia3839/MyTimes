(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(171)),a=f(n(1)),o=f(n(0)),u=f(n(30)),i=f(n(137)),l=f(n(96)),s=f(n(2908)),c=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=(0,u.default)({displayName:"Wall",mixins:[i.default],propTypes:{isOpen:a.default.bool,children:a.default.oneOfType([a.default.arrayOf(a.default.element),a.default.element]),type:a.default.string,dismiss:a.default.func,responseRequired:a.default.bool,padding:a.default.bool,width:a.default.string,height:a.default.string,overlayType:a.default.string,showHeader:a.default.bool,className:a.default.string,anonWall:a.default.bool},getDefaultProps:function(){return function(){return{isOpen:!0,showHeader:!0}}}(),closeIfNotRequired:function(){return function(){!this.props.responseRequired&&(0,r.default)(this.props.dismiss)&&this.props.dismiss()}}(),onEscapeKey:function(){return function(){this.closeIfNotRequired()}}(),render:function(){return function(){var e,t=this.props,n=t.className,r=t.type,a=t.padding,u=t.anonWall,i=(0,c.default)((d(e={},s.default.anonTop,u),d(e,s.default.noPadding,!1===a),e),s.default["type-"+r],s.default.wall,n),f=(0,c.default)(d({},s.default.showHeader,this.props.showHeader)),p={};return this.props.width&&(p.width=this.props.width),this.props.height&&(p.height=this.props.height),o.default.createElement(l.default,{className:f,overlayType:this.props.overlayType,isOpen:this.props.isOpen,onOutsideClick:this.closeIfNotRequired},o.default.createElement("div",{className:i,style:p},this.props.children))}}()});t.default=p,e.exports=t.default},2895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(990)),a=f(n(159)),o=f(n(20)),u=n(25),i=f(n(31)),l=n(34),s=n(17),c=f(n(595));function f(e){return e&&e.__esModule?e:{default:e}}t.default=o.default.createStore({mixins:[u.StateMixin.store],listenables:[c.default],getInitialState:function(){return function(){return{courseSlug:"",unitSlug:"",lessonSlug:"",url:"",contentId:"",items:[],updateUrl:"",completed:!1,errorMessage:""}}}(),answer:function(){return function(e,t){var n=(0,a.default)(this.state.items),r=!0,o=!1,u=void 0;try{for(var i,l=n[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var s=i.value;s.questionId===e&&(s.answer=t)}}catch(e){o=!0,u=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw u}}this.setState({items:n})}}(),fetchEvaluationData:function(){return function(e){var t=this;(0,s.track)("visit","self_evaluation",{course:e.courseSlug,unit:e.unitSlug,lesson:e.lessonSlug}),this.setState({contentId:e.contentId,url:e.url,courseSlug:e.courseSlug,unitSlug:e.unitSlug,lessonSlug:e.lessonSlug});var n=c.default.fetchEvaluationData.completed;i.default.get(this.state.url).use(l.csrf).send({contentId:e.contentId,answers:this.state.answers}).end(function(e,a){t.setState({items:(0,r.default)(a.body.items,"ordinal"),updateUrl:a.body.updateUrl}),n()})}}(),submit:function(){return function(){var e=this;(0,s.track)("action","click",{target:"selfEvaluation",button:"submit",course:this.state.courseSlug,unit:this.state.unitSlug,lesson:this.state.lessonSlug});var t=c.default.submit,n=t.completed,r=t.failed;this.setState({errorMessage:""});var a=[],o=!0,u=!1,f=void 0;try{for(var d,p=this.state.items[Symbol.iterator]();!(o=(d=p.next()).done);o=!0){var h=d.value;a.push({answer:h.answer,questionId:h.questionId})}}catch(e){u=!0,f=e}finally{try{!o&&p.return&&p.return()}finally{if(u)throw f}}(0,i.default)("POST",this.state.updateUrl).use(l.csrf).send({content_id:this.state.contentId,course:this.state.courseSlug,unit:this.state.unitSlug,lesson:this.state.lessonSlug,answers:a}).end(function(t){t?r(t):(e.setState({completed:!0}),n())})}}()}),e.exports=t.default},2896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(1)),l=n(0),s=c(l);function c(e){return e&&e.__esModule?e:{default:e}}var f=(a=r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),u(t,[{key:"handleClick",value:function(){return function(e){this.props.onClick(e,this.props.index)}}()},{key:"render",value:function(){return function(){return s.default.createElement("span",o({},this.props,{onClick:this.handleClick}),this.props.children)}}()}]),t}(),r.propTypes={index:i.default.number.isRequired,onClick:i.default.func.isRequired,children:i.default.node},a);t.default=f,e.exports=t.default},2897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=h(n(160)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=h(n(1)),l=n(0),s=h(l),c=h(n(44)),f=n(6),d=h(n(2896)),p=n(283);function h(e){return e&&e.__esModule?e:{default:e}}var m=(a=r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleRatingClick=n.handleRatingClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),u(t,[{key:"handleRatingClick",value:function(){return function(e,t){this.props.onRatingChange(t+1)}}()},{key:"isActive",value:function(){return function(e){var t=this.props,n=t.rating,r=t.mode;return"all"===r?n>e:"single"===r?n===e:void 0}}()},{key:"render",value:function(){return function(){var e=this,t=this.props,n=t.icon,r=t.count,a=(t.rating,t.mode,t.activeColor),o=t.inactiveColor,u=t.iconSize,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["icon","count","rating","mode","activeColor","inactiveColor","iconSize"]),l=Array(r).fill().map(function(t,r){var i={color:e.isActive(r)?a:o,cursor:"pointer",lineHeight:1,marginLeft:"0.2rem",marginRight:"0.2rem"};return s.default.createElement(d.default,{key:"rating-item-"+r,index:r,onClick:e.handleRatingClick,style:i},s.default.createElement(c.default,{name:n,size:u}))});return s.default.createElement(f.Container,i,l)}}()}]),t}(),r.propTypes={icon:i.default.oneOfType([i.default.node,i.default.string]).isRequired,iconSize:i.default.number.isRequired,count:i.default.number.isRequired,rating:i.default.number.isRequired,mode:i.default.oneOf(["single","all"]).isRequired,inactiveColor:i.default.string.isRequired,activeColor:i.default.string.isRequired,onRatingChange:i.default.func.isRequired},r.defaultProps={icon:"star",iconSize:2,count:5,rating:0,mode:"all",inactiveColor:p.swatches.grey[500],activeColor:p.swatches.yellow[500],onRatingChange:o.default},a);t.default=m,e.exports=t.default},2898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=d(n(1)),i=d(n(0)),l=d(n(991)),s=n(6),c=d(n(2897)),f=d(n(595));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=(a=r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),u=0;u<a;u++)o[u]=arguments[u];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleCommentChange=function(e){f.default.answer(r.props.questionId,e.target.value)},r.handleRatingChange=function(e){f.default.answer(r.props.questionId,e)},r.renderComment=function(){var e=r.props,t=e.question,n=e.answer;return i.default.createElement(s.Container,{column:!0,className:l.default.commentContainer},i.default.createElement(s.Item,{className:l.default.questionItem},t),i.default.createElement("textarea",{defaultValue:n,className:l.default.commentField,onChange:r.handleCommentChange}))},r.renderRating=function(){var e=r.props,t=e.question,n=e.answer,a=parseInt(n,10);return i.default.createElement(s.Container,{center:!0,className:l.default.ratingContainer},i.default.createElement(s.Item,{grow:1,className:l.default.questionItem},t),i.default.createElement(c.default,{className:l.default.rating,iconSize:1.5,rating:a,onRatingChange:r.handleRatingChange}))},r.renderContent=function(){switch(r.props.type){case"rating":return r.renderRating();case"comment":return r.renderComment()}},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),o(t,[{key:"render",value:function(){return function(){return i.default.createElement("div",{className:l.default.questionRow},this.renderContent())}}()}]),t}(),r.propTypes={question:u.default.string.isRequired,ordinal:u.default.number,questionId:u.default.string.isRequired,category:u.default.string.isRequired,answer:u.default.oneOfType([u.default.string,u.default.number]),type:u.default.string.isRequired},a);t.default=h,e.exports=t.default},2901:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Continue=void 0;var r,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=d(i),s=d(n(1)),c=n(5),f=d(n(443));function d(e){return e&&e.__esModule?e:{default:e}}var p=t.Continue=(a=r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),u(t,[{key:"render",value:function(){return function(){return l.default.createElement(f.default,o({},this.props,{path:this.props.path||this.props.resume_path,buttonText:(0,c.t)("views.learning_environment.components.completion_modal.continue")}))}}()}]),t}(),r.propTypes={title:s.default.string,description:s.default.string,path:s.default.string,resume_path:s.default.string},a);t.default=p},2902:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=l(n(0)),o=l(n(1)),u=n(5),i=l(n(443));function l(e){return e&&e.__esModule?e:{default:e}}var s={title:o.default.string,description:o.default.string,thumbnailUrl:o.default.string,resumePath:o.default.string};function c(e){var t=e.thumbnailUrl,n=e.resumePath;return a.default.createElement(i.default,r({},e,{path:n,image:t,buttonText:(0,u.t)("views.learning_environment.components.completion_modal.start_quiz")}))}c.propTypes=s,t.default=c,e.exports=t.default},2903:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=l(n(0)),o=l(n(1)),u=n(5),i=l(n(443));function l(e){return e&&e.__esModule?e:{default:e}}var s={title:o.default.string,description:o.default.string,thumbnailUrl:o.default.string,resumePath:o.default.string};function c(e){var t=e.thumbnailUrl,n=e.resumePath;return a.default.createElement(i.default,r({},e,{path:n,image:t,buttonText:(0,u.t)("views.learning_environment.components.completion_modal.start_project")}))}c.propTypes=s,t.default=c,e.exports=t.default},2904:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=l(n(0)),o=l(n(1)),u=n(5),i=l(n(443));function l(e){return e&&e.__esModule?e:{default:e}}var s={title:o.default.string,description:o.default.string,resume_path:o.default.string,resumePath:o.default.string};function c(e){var t=e.resumePath;return a.default.createElement(i.default,r({},e,{path:t,buttonText:(0,u.t)("views.learning_environment.components.completion_modal.start_lesson")}))}c.propTypes=s,t.default=c,e.exports=t.default},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2904)),a=i(n(2903)),o=i(n(2902)),u=i(n(2901));function i(e){return e&&e.__esModule?e:{default:e}}t.default={lesson:r.default,project:a.default,quiz:o.default,continue:u.default},e.exports=t.default},2908:function(e,t,n){e.exports={showHeader:"showHeader__1DPMm-lVsCbpuRUE68nuOv",wall:"wall__1chfRb-bjNqZ6zwEiMUEwV",anonTop:"anonTop__1328ybUH94mUIIsooNrgLl",noPadding:"noPadding__nSmTmBIj8loR_FptW2f7m","type-glass":"type-glass__3rERzal8Fqg5P1CXUbW8uP","type-screen":"type-screen__14ey5SVlK5e8JxNBvT08rY"}},2931:function(e,t,n){e.exports={button:"button__3QyyZ7VfF20gYLvlba4bzy",active:"active__3G23BnUo54b_LohtzReol1",exerciseTitle:"exerciseTitle__DMOI_fKuWDiNeRfuuknlN",burger:"burger__4P7-7iPTdceddCJKQSFUg",close:"close__2pot0AW8lJ8x-K9dxddXaS"}},443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var r,a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=p(u),l=p(n(1)),s=p(n(2)),c=p(n(16)),f=p(n(45)),d=p(n(993));function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=t.Content=(a=r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"renderHeader",value:function(){return function(){return this.props.expanded&&this.props.image?i.default.createElement("span",{className:d.default.contentHeadingThumbnail},i.default.createElement("span",{className:d.default.contentHeading},this.props.title),i.default.createElement("img",{src:this.props.image,className:d.default.contentHeadingImage})):i.default.createElement("span",{className:d.default.contentHeading},this.props.title)}}()},{key:"render",value:function(){return function(){var e,t=i.default.createElement(f.default,{className:d.default.startButton,href:this.props.path,category:"user",linkContentTarget:"interstitial_"+this.props.type},i.default.createElement(c.default,{outline:!this.props.expanded,className:d.default.startButton,theme:"lantern"},this.props.buttonText)),n=this.props.description?i.default.createElement("div",{className:d.default.contentDescription},this.props.description):null,r=(0,s.default)((h(e={},d.default.expanded,this.props.expanded),h(e,d.default.compact,!this.props.expanded),e),d.default.content);return this.props.expanded?i.default.createElement("div",{className:r},i.default.createElement("div",{className:d.default.contentBody},this.renderHeader(),n),i.default.createElement("div",{className:d.default.startButtonContainer},t)):i.default.createElement("div",{className:r},i.default.createElement("div",{className:d.default.contentBody},this.renderHeader(),i.default.createElement("div",{className:d.default.startButtonContainer},t)),n)}}()}]),t}(),r.propTypes={expanded:l.default.bool,title:l.default.string,type:l.default.string,description:l.default.string,path:l.default.string,buttonText:l.default.string,image:l.default.string},a);t.default=m},595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(20),o=(r=a)&&r.__esModule?r:{default:r};var u=o.default.createActions(["answer"]);u.fetchEvaluationData=o.default.createAction({asyncResult:!0}),u.submit=o.default.createAction({asyncResult:!0}),t.default=u,e.exports=t.default},991:function(e,t,n){e.exports={container:"container__27SM4kaBUe3O6JhyOPlv1V",containerInner:"containerInner__ugwZb9FCadWkklxvGpUX9",subHeader:"subHeader__3b9V39OXwb1c3KCZOGhoow",questionItem:"questionItem__2Gf7hYakG2B1rBQDR4EHL3",answer:"answer__3ITTyHb3bywptf8BPQHepm",commentField:"commentField__VyJaLag7Q3QUFd4Ik_SRy",header:"header__2JHmoEMrGIbRdqewCxSWlb",questionRow:"questionRow__1e1-WQAGyCl3yjVX9gbJJJ",button:"button__2UJ7PbQcEMSvlH_0gSTjZm",buttonGroup:"buttonGroup__2AVjEQUfTYgWaCHMzJ6TJm",ratingContainer:"ratingContainer__2nNzWy6LMifkK2pZAWbRNh",rating:"rating__2y47p3sJHCWLK4zSqCdXiJ"}},992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=m(n(1)),o=m(n(0)),u=m(n(30)),i=n(6),l=m(n(16)),s=m(n(991)),c=m(n(2898)),f=n(25),d=m(n(595)),p=m(n(2895)),h=n(17);function m(e){return e&&e.__esModule?e:{default:e}}var b=(0,u.default)({displayName:"SelfEvaluation",mixins:[f.StateMixin.connect(p.default,"items")],propTypes:{courseSlug:a.default.string,unitSlug:a.default.string,lessonSlug:a.default.string,url:a.default.string,contentId:a.default.string,onClose:a.default.func},componentDidMount:function(){return function(){d.default.fetchEvaluationData(this.props)}}(),renderHeader:function(){return function(){return o.default.createElement("div",null,o.default.createElement(i.Container,{center:!0},o.default.createElement("div",{className:s.default.header},"What I've learned so far")),o.default.createElement(i.Container,{center:!0},o.default.createElement("div",{className:s.default.subHeader},"Keep track of how well you've learned the concepts")))}}(),handleSkip:function(){return function(){(0,h.track)("action","click",{target:"selfEvaluation",button:"skip",course:this.props.courseSlug,unit:this.props.unitSlug,lesson:this.props.lessonSlug}),this.triggerClose()}}(),triggerClose:function(){return function(){this.props.onClose()}}(),handleSubmit:function(){return function(){var e=this;d.default.submit().then(function(){e.triggerClose()}).catch(function(t){e.setState({error:t})})}}(),render:function(){return function(){return o.default.createElement(i.Container,{column:!0,center:!0,className:s.default.container},o.default.createElement("div",{className:s.default.containerInner},this.renderHeader(),o.default.createElement(i.Container,{column:!0},this.state.items.map(function(e){return o.default.createElement(c.default,r({key:"question-"+e.questionId},e))})),o.default.createElement(i.Container,{center:!0},o.default.createElement("div",{className:s.default.buttonGroup},o.default.createElement(l.default,{className:s.default.button,theme:"secondary",outline:!0,onClick:this.handleSkip},"Skip"),o.default.createElement(l.default,{className:s.default.button,theme:"secondary",onClick:this.handleSubmit},"Submit")))))}}()});t.default=b,e.exports=t.default},993:function(e,t,n){e.exports={modal:"modal__3Cwx_o9N5phrZNL3nPxg-0",header:"header__2T7njBrkMIdfwPfdF0o4Qn",content:"content__1h0fkuLcfMFOEv4xX89vUd",contentBody:"contentBody__26KE1nVM4_l7evcuIFmi1g",contentHeading:"contentHeading__HGluaV4Q4H4Kf31ZVxoAF",contentDescription:"contentDescription__3JStWqvcSY6bSb2E6T0JkF",startButton:"startButton__1zirL3nW5mSh4m_57ojMjt",compact:"compact__ORNaEknpxEPzlJT-wHC8Y",expanded:"expanded__3Kd58bzsOPIOLbi_t7eZRR",startButtonContainer:"startButtonContainer__3FlDtQ060vLa7itR2KDC1t",contentHeadingThumbnail:"contentHeadingThumbnail__3eTe_KgqGieWfS9ZUPJOcY",contentHeadingImage:"contentHeadingImage__1wT5JpzFLwNt2qyCCEQ6R4"}},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=h(n(597)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=h(n(1)),l=h(n(0)),s=n(5),c=h(n(122)),f=n(447),d=h(n(993)),p=h(n(2905));function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=(a=r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={leadinComplete:!1},r.onLeadinComplete=function(){r.setState({leadinComplete:!0})},r.renderContentTypes=function(){var e=r.props,t=e.nextContent,n=e.locationQuery;return(0,o.default)(t.map(function(e,t){if(e){var r=e.title,a=e.content,o=void 0===a?{}:a,u=e.slug,i=e.resume_path,s=e.type,c=p.default[s];return c?l.default.createElement(c,{key:u,title:r,description:o.description,thumbnailUrl:o.thumbnail_url,resumePath:(0,f.addParamsAsHash)(i,n),expanded:0===t}):null}}))},r.renderContent=function(){return l.default.createElement("div",{className:d.default.modal},l.default.createElement("h2",{className:d.default.header},(0,s.t)("views.learning_environment.components.completion_modal.up_next")),r.renderContentTypes())},m(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l["default"].Component),u(t,[{key:"render",value:function(){return function(){return l.default.createElement(c.default,{dismiss:this.props.onRequestClose,type:"glass"},this.renderContent())}}()}]),t}(),r.propTypes={isOpen:i.default.bool.isRequired,onRequestClose:i.default.func.isRequired,nextContent:i.default.array.isRequired,locationQuery:i.default.object,thumbnailUrl:i.default.string},a);t.default=b,e.exports=t.default},996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=p(n(229)),u=p(n(1033)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=p(n(0)),c=p(n(1)),f=p(n(2)),d=p(n(2931));function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=(a=r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={active:r.props.active,close:r.props.active},r._active=function(e){r.setState({active:(0,o.default)(e)?r.props.active:e})},r._close=function(e){r.setState({close:(0,o.default)(e)?r.props.active:e})},r.handleClick=function(e){e.preventDefault(),r.props.onClick&&r.props.onClick(e)},m(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["default"].Component),l(t,[{key:"componentWillReceiveProps",value:function(){return function(e){e.active&&!this.props.active?(this._active(e.active),(0,u.default)(this._close,150)):e.active!==this.props.active&&(this._close(e.active),(0,u.default)(this._active,150))}}()},{key:"render",value:function(){return function(){var e,t=this.props,n=(t.onClick,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onClick"])),r=(0,f.default)((h(e={},d.default.button,!0),h(e,d.default.active,this.state.active),h(e,d.default.close,this.state.close),e));return s.default.createElement("button",i({},n,{onClick:this.handleClick,className:r}),s.default.createElement("span",{className:d.default.burger}),s.default.createElement("span",{"data-cue":"course-navigator",className:d.default.exerciseTitle},this.props.title))}}()}]),t}(),r.propTypes={active:c.default.bool,title:c.default.string},r.defaultProps={active:!1},a);t.default=b,e.exports=t.default}}]);
//# sourceMappingURL=cc41adff9aa18a86d424-2bb50530b92359da249e.js.map