"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=l,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={},a="\u672f\u8bed",i={unversionedId:"general/glossary",id:"general/glossary",title:"\u672f\u8bed",description:"\u4e0e BOOLNetwork \u5e73\u53f0\u3001\u7f51\u7edc\u3001\u5de5\u5177\u548c\u533a\u5757\u94fe\u6280\u672f\u76f8\u5173\u7684\u5173\u952e\u672f\u8bed\u5217\u8868\u3002",source:"@site/docs/general/03-glossary.md",sourceDirName:"general",slug:"/general/glossary",permalink:"/docs/en/general/glossary",draft:!1,editUrl:"https://github.com/boolnetwork/docs/docs/general/03-glossary.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/docs/en/general/architecture"},next:{title:"FAQ",permalink:"/docs/en/general/FAQ"}},u={},c=[{value:"\u53ef\u4fe1\u6267\u884c\u73af\u5883",id:"\u53ef\u4fe1\u6267\u884c\u73af\u5883",level:2},{value:"Intel SGX",id:"intel-sgx",level:2},{value:"\u5b89\u5168\u591a\u65b9\u8ba1\u7b97",id:"\u5b89\u5168\u591a\u65b9\u8ba1\u7b97",level:2},{value:"\u95e8\u9650\u7b7e\u540d\u65b9\u6848",id:"\u95e8\u9650\u7b7e\u540d\u65b9\u6848",level:2},{value:"\u96f6\u77e5\u8bc6\u8bc1\u660e",id:"\u96f6\u77e5\u8bc6\u8bc1\u660e",level:2},{value:"Substrate",id:"substrate",level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u672f\u8bed"},"\u672f\u8bed"),(0,l.kt)("p",null,"\u4e0e BOOLNetwork \u5e73\u53f0\u3001\u7f51\u7edc\u3001\u5de5\u5177\u548c\u533a\u5757\u94fe\u6280\u672f\u76f8\u5173\u7684\u5173\u952e\u672f\u8bed\u5217\u8868\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u53ef\u4fe1\u6267\u884c\u73af\u5883"},"\u53ef\u4fe1\u6267\u884c\u73af\u5883"),(0,l.kt)("p",null,"TEE \u7684\u5168\u79f0 trusted execution environment\uff0c\u5b83\u662f\u79fb\u52a8\u8bbe\u5907\uff08\u667a\u80fd\u624b\u673a\u3001\u5e73\u677f\u7535\u8111\u3001\u667a\u80fd\u7535\u89c6\uff09CPU \u4e0a\u7684\u4e00\u5757\u533a\u57df\u3002\u8fd9\u5757\u533a\u57df\u7684\u4f5c\u7528\u662f\u7ed9\u6570\u636e\u548c\u4ee3\u7801\u7684\u6267\u884c\u63d0\u4f9b\u4e00\u4e2a\u66f4\u5b89\u5168\u7684\u7a7a\u95f4\uff0c\u5e76\u4fdd\u8bc1\u5b83\u4eec\u7684\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\u3002"),(0,l.kt)("p",null,"TEE \u5728\u5b89\u5168\u65b9\u9762\u6ce8\u91cd\u5982\u4e0b\uff1a \u5f00\u653e\u73af\u5883\u7684\u4f7f\u7528\uff0c\u4f7f\u5f97\u8bbe\u5907\u66b4\u6f0f\u4e8e\u5404\u79cd\u653b\u51fb\u4e4b\u4e0b\uff1b \u9690\u79c1\uff0c\u4e2a\u4eba\u4fe1\u606f\u5982\u8054\u7cfb\u4eba\uff0c\u77ed\u6d88\u606f\uff0c\u7167\u7247\uff0c\u89c6\u9891\u7b49\uff0c\u9700\u8981\u4e0d\u88ab\u76d7\u7a83\uff0c\u4e22\u5931\u6216\u8005\u53d7\u5230\u6076\u610f\u8f6f\u4ef6\u7684\u653b\u51fb\uff1b \u5185\u5bb9\u4fdd\u62a4\uff0c\u5bf9\u4e8e DRM \u800c\u8a00\uff0c\u6761\u4ef6\u63a5\u6536\u670d\u52a1\u6216\u8005\u5185\u5bb9\u4fdd\u62a4\u7684\u8bb8\u53ef\u7b49\u4e5f\u503e\u5411\u4e8e\u4f7f\u7528\u786c\u4ef6\u7ea7\u522b\u7684\u4fdd\u62a4\uff1b \u516c\u53f8\u6570\u636e\uff0c\u6bd4\u5982\u767b\u9646 VPN \u7684\u51ed\u636e\u7b49\u7684\u4fdd\u62a4\uff1b \u8fde\u63a5\u6027\u4fdd\u62a4\uff0c\u5728 3G\uff0c4G\uff0cwifi\uff0c\u4e43\u81f3 NFC \u7b49\u65b9\u9762\uff0c\u5bc6\u94a5\u8d44\u6e90\u7684\u4fdd\u62a4\uff1b \u91d1\u878d\u98ce\u9669\uff0c\u6bd4\u5982\u91d1\u878d\u4ea4\u6613\u4e2d\u7684\u7528\u6237\u4ea4\u4e92\u6570\u636e\uff08\u4ea4\u6613\u5185\u5bb9\uff0c\u4ea4\u6613\u989d\uff0c\u7528\u6237\u8f93\u5165 PIN \u7b49\uff09\u3002"),(0,l.kt)("h2",{id:"intel-sgx"},"Intel SGX"),(0,l.kt)("p",null,"Intel\xae Software Guard Extensions (Intel\xae SGX)\u4fdd\u62a4\u9009\u5b9a\u7684\u4ee3\u7801\u548c\u6570\u636e\u4e0d\u88ab\u6cc4\u9732\u548c\u4fee\u6539\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u628a\u5e94\u7528\u7a0b\u5e8f\u5212\u5206\u5230 CPU \u5f3a\u5316\u7684 encalve\uff08\u98de\u5730\uff09\u4e2d\u6216\u8005\u5185\u5b58\u4e2d\u53ef\u6267\u884c\u7684\u4fdd\u62a4\u533a\u57df\uff0c\u5373\u4f7f\u5728\u53d7\u653b\u51fb\u7684\u5e73\u53f0\u4e2d\u4e5f\u80fd\u63d0\u9ad8\u5b89\u5168\u6027\u3002\u4f7f\u7528\u8fd9\u79cd\u65b0\u7684\u5e94\u7528\u5c42\u53ef\u4fe1\u6267\u884c\u73af\u5883\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u542f\u7528\u8eab\u4efd\u548c\u8bb0\u5f55\u9690\u79c1\u3001\u5b89\u5168\u6d4f\u89c8\u548c\u6570\u5b57\u7ba1\u7406\u4fdd\u62a4\uff08DRM\uff09\u6216\u8005\u4efb\u4f55\u9700\u8981\u5b89\u5168\u5b58\u50a8\u673a\u5bc6\u6216\u8005\u4fdd\u62a4\u6570\u636e\u7684\u9ad8\u4fdd\u969c\u5b89\u5168\u5e94\u7528\u573a\u666f\u4e2d\u3002"),(0,l.kt)("p",null,"\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\uff1a\u5373\u4f7f\u5728 OS\u3001BIOS\u3001VMM \u6216\u8005 SMM \u5c42\u5b58\u5728\u7279\u6743\u6076\u610f\u8f6f\u4ef6\u7684\u60c5\u51b5\u4e0b\u4e5f\u80fd\u4fdd\u8bc1\u3002 \u4f4e\u5b66\u4e60\u66f2\u7ebf\uff1a\u548c\u7236\u5e94\u7528\u7a0b\u5e8f\u7c7b\u4f3c\u7684 OS \u7f16\u7a0b\u6a21\u578b\uff0c\u5e76\u4e14\u5728\u4e3b CPU \u4e0a\u6267\u884c\u3002 \u8fdc\u7a0b\u8ba4\u8bc1\u548c\u63d0\u4f9b\uff1a\u8fdc\u7a0b\u90e8\u5206\u80fd\u591f\u8ba4\u8bc1\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f enclave \u7684\u8eab\u4efd\uff0c\u5e76\u4e14\u5b89\u5168\u5730\u5c06\u5bc6\u94a5\u3001\u51ed\u636e\u548c\u654f\u611f\u6570\u636e\u63d0\u4f9b\u7ed9 enclave\u3002 \u6700\u5c0f\u53ef\u80fd\u7684\u653b\u51fb\u9762\uff1aCPU \u8fb9\u754c\u6210\u4e3a\u653b\u51fb\u9762\u5916\u56f4\uff0c\u6240\u6709\u7684\u6570\u636e\u3001\u5185\u5b58\u3001\u5916\u56f4\u4e4b\u5916\u7684 I/O \u90fd\u662f\u52a0\u5bc6\u7684\u3002"),(0,l.kt)("h2",{id:"\u5b89\u5168\u591a\u65b9\u8ba1\u7b97"},"\u5b89\u5168\u591a\u65b9\u8ba1\u7b97"),(0,l.kt)("p",null,"\u5b89\u5168\u591a\u65b9\u8ba1\u7b97\uff08Secure Muti-party Computation\uff0c\u7b80\u79f0 MPC\uff0c\u4ea6\u53ef\u7b80\u79f0 SMC \u6216 SMPC\uff09\u95ee\u9898\u9996\u5148\u7531\u534e\u88d4\u8ba1\u7b97\u673a\u79d1\u5b66\u5bb6\u3001\u56fe\u9886\u5956\u83b7\u5f97\u8005\u59da\u671f\u667a\u6559\u6388\u4e8e 1982 \u5e74\u63d0\u51fa\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5b89\u5168\u591a\u65b9\u8ba1\u7b97\u534f\u8bae\u4f5c\u4e3a\u5bc6\u7801\u5b66\u7684\u4e00\u4e2a\u5b50\u9886\u57df\uff0c\u5176\u5141\u8bb8\u591a\u4e2a\u6570\u636e\u6240\u6709\u8005\u5728\u4e92\u4e0d\u4fe1\u4efb\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u534f\u540c\u8ba1\u7b97\uff0c\u8f93\u51fa\u8ba1\u7b97\u7ed3\u679c\uff0c\u5e76\u4fdd\u8bc1\u4efb\u4f55\u4e00\u65b9\u5747\u65e0\u6cd5\u5f97\u5230\u9664\u5e94\u5f97\u7684\u8ba1\u7b97\u7ed3\u679c\u4e4b\u5916\u7684\u5176\u4ed6\u4efb\u4f55\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u95e8\u9650\u7b7e\u540d\u65b9\u6848"},"\u95e8\u9650\u7b7e\u540d\u65b9\u6848"),(0,l.kt)("p",null,"\u95e8\u9650\u7b7e\u540d\u65b9\u6848\uff08Threshold Signature Scheme\uff09\u662f\u4e00\u79cd\u591a\u65b9\u5b89\u5168\u8ba1\u7b97\u534f\u8bae\uff0c\u7531\u95e8\u9650\u79d8\u5bc6\u5171\u4eab\u6280\u672f\u548c\u6570\u5b57\u7b7e\u540d\u6280\u672f\u7ec4\u6210\u3002 1991 \u5e74\uff0cDesmedt-Frankel \u9996\u6b21\u63d0\u51fa\u4e86(t,n)\u95e8\u9650\u7b7e\u540d\u65b9\u6848\u3002(t,n)\u95e8\u9650\u7b7e\u540d\u65b9\u6848\u662f\u6307\u7531 n \u4e2a\u6210\u5458\u7ec4\u6210\u4e00\u4e2a\u7b7e\u540d\u7fa4\u4f53\uff0c\u8be5\u7fa4\u4f53\u6709\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\uff0c\u7fa4\u4f53\u5185\u5927\u4e8e\u7b49\u4e8e t \u4e2a\u5408\u6cd5\u3001\u8bda\u5b9e\u7684\u6210\u5458\u7ec4\u5408\u53ef\u4ee5\u4ee3\u8868\u7fa4\u4f53\u7528\u7fa4\u79c1\u94a5\u8fdb\u884c\u7b7e\u540d\uff0c\u4efb\u4f55\u4eba\u53ef\u5229\u7528\u8be5\u7fa4\u4f53\u7684\u516c\u94a5\u8fdb\u884c\u7b7e\u540d\u9a8c\u8bc1\u3002"),(0,l.kt)("h2",{id:"\u96f6\u77e5\u8bc6\u8bc1\u660e"},"\u96f6\u77e5\u8bc6\u8bc1\u660e"),(0,l.kt)("p",null,"\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u82f1\u6587\u5168\u79f0\u662f Zero-knowledge Proofs\uff0c\u7b80\u5199\u4e3a ZKP \uff0c\u662f\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u5bc6\u7801\u5b66\u65b9\u6cd5\u3002\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u672c\u8d28\u5c31\u662f\u5728\u4e0d\u63ed\u6653\u6211\u6240\u77e5\u9053\u6216\u62e5\u6709\u7684\u67d0\u6837\u4e1c\u897f\u7684\u524d\u63d0\u4e0b\uff0c\u5411\u522b\u4eba\u8bc1\u660e\u6211\u6709\u5f88\u5927\u51e0\u7387\uff08\u96f6\u77e5\u8bc6\u8bc1\u660e\u8bf4\u5230\u5e95\u662f\u4e00\u4e2a\u6982\u7387\u4e0a\u7684\u8bc1\u660e\uff09\u786e\u5b9e\u77e5\u9053\u6216\u62e5\u6709\u8fd9\u4e2a\u4e1c\u897f\u3002\u66f4\u901a\u4fd7\u7684\u8bf4\uff0c\u8bc1\u660e\u8005\uff08prover\uff09\u80fd\u591f\u5728\u4e0d\u5411\u9a8c\u8bc1\u8005\uff08verifier\uff09\u63d0\u4f9b\u4efb\u4f55\u6709\u7528\u4fe1\u606f\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u9a8c\u8bc1\u8005\uff08verifier\uff09\u76f8\u4fe1\u67d0\u4e2a\u8bba\u65ad\u662f\u6b63\u786e\u7684\u3002"),(0,l.kt)("h2",{id:"substrate"},"Substrate"),(0,l.kt)("p",null,"\u7531 Parity \u4e00\u4e2a\u57fa\u4e8e rust \u7684\u5f00\u53d1\u533a\u5757\u94fe\u6846\u67b6\u3002Substrate \u9644\u5e26\u4e86\u6784\u5efa\u533a\u5757\u94fe\u6240\u9700\u7684\u8bb8\u591a\u6a21\u5757\u548c\u529f\u80fd\uff0c\u5305\u62ec P2P \u7f51\u7edc\u3001\u5171\u8bc6\u673a\u5236\u3001\u8d28\u62bc\u3001\u52a0\u5bc6\u8d27\u5e01\u3001\u94fe\u4e0a\u6cbb\u7406\u6a21\u5757\u7b49\u7b49\uff0c\u5b83\u5927\u5927\u51cf\u5c11\u4e86\u5b9e\u73b0\u533a\u5757\u94fe\u6240\u9700\u7684\u65f6\u95f4\u548c\u5de5\u7a0b\u5de5\u4f5c\u3002"))}p.isMDXComponent=!0}}]);