(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4933],{43521:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(36112),o=r(12457),s=r(91559),i=r(10721),a=r(94968),u=r(32004),c=r(35250);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var p=(0,a.vU)({oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"},systemBusyError:{id:"AuthError.systemBusyError",defaultMessage:"Our systems are a bit busy at the moment, please take a break and try again soon."},identityProviderMismatch:{id:"AuthError.identityProviderMismatch",defaultMessage:"You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method."},accountDeactivated:{id:"AuthError.accountDeactivated",defaultMessage:"You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com."},unsupportedCountry:{id:"AuthError.unsupportedCountry",defaultMessage:"OpenAI's services are not available in your country."},unsupportedRegion:{id:"AuthError.unsupportedRegion",defaultMessage:"OpenAI's services are not available in your region."},unknownCountry:{id:"AuthError.unknownCountry",defaultMessage:"We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists."},ssoRequired:{id:"AuthError.ssoRequired",defaultMessage:"Please use your organization's SSO to access your account."},defaultError:{id:"AuthError.defaultError",defaultMessage:"We ran into an issue while signing you in, please take a break and try again soon."}}),f=(0,c.jsx)(u.Z,d({},p.systemBusyError)),h={RequestTimeout:f,AuthRateLimit:f,identity_provider_mismatch:(0,c.jsx)(u.Z,d({},p.identityProviderMismatch)),account_deactivated:(0,c.jsx)(u.Z,d({},p.accountDeactivated)),unsupported_country:(0,c.jsx)(u.Z,d({},p.unsupportedCountry)),unsupported_region:(0,c.jsx)(u.Z,d({},p.unsupportedRegion)),unknown_country:(0,c.jsx)(u.Z,d({},p.unknownCountry)),sso_required:(0,c.jsx)(u.Z,d({},p.ssoRequired)),default:(0,c.jsx)(u.Z,d({},p.defaultError))};function y(){return(0,c.jsx)(g,{})}function g(){var e,t=(0,i.useRouter)(),r=null!==(e=h[String(t.query.error)])&&void 0!==e?e:h.default;return(0,c.jsx)(o.Wk,{isStorageComplianceEnabled:!1,children:(0,c.jsxs)(o.xh,{children:[(0,c.jsx)(o.jI,{}),(0,c.jsx)("div",{className:"mb-2 text-center text-lg",children:(0,c.jsx)(u.Z,d({},p.oops))}),(0,c.jsx)("div",{className:"mb-5 text-center",children:r}),(0,c.jsx)(s.z,{as:"button",color:"neutral",onClick:function(){return t.replace("/auth/login")},children:(0,c.jsx)(u.Z,d({},p.goBack))})]})})}},12457:function(e,t,r){"use strict";r.d(t,{VL:function(){return j},Wk:function(){return g},jI:function(){return m},xh:function(){return y}});var n,o=r(36112),s=r(90038),i=r(18008),a=r(32004),u=r(94968),c=r(21389),l=r(14972),d=r(60493),p=r(35250);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=c.Z.div(n||(n=(0,s.Z)(["w-96 flex flex-col flex-auto justify-center items-center"])));function g(e){var t=e.children,r=e.showTerms,n=e.isStorageComplianceEnabled;return(0,p.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:[t,(void 0===r||r)&&(0,p.jsx)(j,{isStorageComplianceEnabled:n})]})}function j(e){var t=e.isStorageComplianceEnabled;return(0,p.jsxs)("div",{className:"flex gap-3 py-3 text-xs text-token-text-tertiary",children:[(0,p.jsx)(d.Z,{href:"https://openai.com/policies/terms-of-use",type:"neutral",openNewTab:!0,children:(0,p.jsx)(a.Z,h({},x.terms))}),(0,p.jsx)(b,{}),(0,p.jsx)(d.Z,{href:"https://openai.com/policies/privacy-policy",openNewTab:!0,type:"neutral",children:(0,p.jsx)(a.Z,h({},x.privacy))}),t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{}),(0,p.jsx)("button",{className:"underline",onClick:function(){return i.vm.openModal(i.B.CookieManagement)},children:(0,p.jsx)(a.Z,h({},x.cookies))})]})]})}var b=function(){return(0,p.jsx)("span",{className:"text-token-text-tertiary",children:"|"})};function m(){return(0,p.jsx)("div",{className:"mb-5",children:(0,p.jsx)(l.nI,{})})}var x=(0,u.vU)({terms:{id:"AuthPage.terms",defaultMessage:"Terms of use"},privacy:{id:"AuthPage.privacy",defaultMessage:"Privacy policy"},cookies:{id:"AuthPage.cookies",defaultMessage:"Manage cookies"}})},4579:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/error",function(){return r(43521)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=4579)}),_N_E=e.O()}]);
//# sourceMappingURL=error-0bf38b4bd16cede0.js.map