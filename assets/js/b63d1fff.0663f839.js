"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},s="Adding Custom Parameters and Clauses",i={unversionedId:"custom-parameters/index",id:"custom-parameters/index",title:"Adding Custom Parameters and Clauses",description:"This libary supports all API options for the available API methods, so it is unnecessary for you to provide additional parameters. However, if you would like to pass custom parameters, simply pass them in an object as the last parameter to any appropriate method.",source:"@site/docs/custom-parameters/index.md",sourceDirName:"custom-parameters",slug:"/custom-parameters/",permalink:"/dynamodb-toolbox/docs/custom-parameters/",draft:!1,editUrl:"https://github.com/jeremydaly/dynamodb-toolbox/tree/main/docs/docs/custom-parameters/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Projection Expressions",permalink:"/dynamodb-toolbox/docs/projection-expressions/"},next:{title:"Type Inference",permalink:"/dynamodb-toolbox/docs/type-inference/"}},p={},l=[],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-custom-parameters-and-clauses"},"Adding Custom Parameters and Clauses"),(0,a.kt)("p",null,"This libary supports all API options for the available API methods, so it is unnecessary for you to provide additional parameters. However, if you would like to pass custom parameters, simply pass them in an object as the last parameter to any appropriate method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await MyEntity.update(\n  item, // the item to update\n  { ..options... }, // method options\n  { // your custom parameters\n    ReturnConsumedCapacity: 'TOTAL',\n    ReturnValues: 'ALL_NEW'\n  }\n)\n")),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," method, you can add additional statements to the clauses by specifying arrays as the ",(0,a.kt)("inlineCode",{parentName:"p"},"SET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"REMOVE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," properties. You can also specify additional ",(0,a.kt)("inlineCode",{parentName:"p"},"ExpressionAttributeNames")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ExpressionAttributeValues")," with object values and the system will merge them in with the generated ones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const results = await MyEntity.update(\n  item,\n  {},\n  {\n    SET: ['#somefield = :somevalue'],\n    ExpressionAttributeNames: { '#somefield': 'somefield' },\n    ExpressionAttributeValues: { ':somevalue': 123 }\n  }\n)\n")))}m.isMDXComponent=!0}}]);