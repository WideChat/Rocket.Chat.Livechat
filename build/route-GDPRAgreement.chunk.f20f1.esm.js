(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{hLgB:function(t,e,r){"use strict";r.r(e);var n=r("EBz7"),o=r.n(n),a=r("hosL"),c=r("co3k"),i=r("z4Qk"),l=r("jdJj"),s=r("PyG4"),u=r("fsQa"),p=r("rCWq"),h=r.n(p);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var f=new o.a({linkify:!1,typographer:!1}),y=u.a.t("The controller of your personal data is [Company Name], with registered office at [Company Address]. To start the chat you agree that your personal data shall be processed and trasmitted in accordance with the General Data Protection Regulation (GDPR)."),g=u.a.t("Go to **menu options → Forget/Remove my personal data** to request the immediate removal of your data."),b=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleClick=function(){var t=e.props.onAgree;t&&t()},e.render=function(t){var r=t.color,n=t.title,o=t.consentText,p=t.instructions,b=(t.onAgree,function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["color","title","consentText","instructions","onAgree"]));return Object(a.h)(l.b,d({color:r,title:n,className:Object(s.d)(h.a,"gdpr")},b),Object(a.h)(l.b.Content,null,Object(a.h)("p",{className:Object(s.d)(h.a,"gdpr__consent-text"),dangerouslySetInnerHTML:{__html:f.renderInline(o||y)}}),Object(a.h)("p",{className:Object(s.d)(h.a,"gdpr__instructions"),dangerouslySetInnerHTML:{__html:f.renderInline(p||g)}}),Object(a.h)(i.a,null,Object(a.h)(c.a,{onClick:e.handleClick,stack:!0},u.a.t("I Agree")))),Object(a.h)(l.b.Footer,null))},e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n}(a.Component),v=r("Y3FI"),O=r("kQFM");function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var m=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleAgree=function(){return new Promise((function(t,r){var n;return n=e.props.dispatch,Promise.resolve(n({gdpr:{accepted:!0}})).then((function(e){try{return Object(v.b)("/"),t()}catch(t){return r(t)}}),r)}))},e.render=function(t){return Object(a.h)(b,j({},t,{onAgree:e.handleAgree}))},e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n}(a.Component),C=function(t){var e=t.ref,r=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["ref"]);return Object(a.h)(O.a,null,(function(t){var n=t.config,o=(n=void 0===n?{}:n).theme,c=(o=void 0===o?{}:o).color,i=n.messages,l=(i=void 0===i?{}:i).dataProcessingConsentText,s=t.iframe,p=(s=void 0===s?{}:s).theme,h=(p=void 0===p?{}:p).color,d=p.fontColor,f=p.iconColor,y=t.dispatch;return Object(a.h)(m,j({ref:e},r,{theme:{color:h||c,fontColor:d,iconColor:f},title:u.a.t("GDPR"),dispatch:y,consentText:l}))}))},_=C;r.d(e,"GDPR",(function(){return b})),r.d(e,"GDPRContainer",(function(){return m})),r.d(e,"GDPRConnector",(function(){return C})),r.d(e,"default",(function(){return _}))}}]);
//# sourceMappingURL=route-GDPRAgreement.chunk.f20f1.esm.js.map