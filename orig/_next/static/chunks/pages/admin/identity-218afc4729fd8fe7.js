(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2571],{83994:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return ee},default:function(){return et}});var o,r,i,s=n(36112),a=n(35017),c=n(82256),l=n(70079);let d=l.forwardRef(function({title:e,titleId:t,...n},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"}))}),u=l.forwardRef(function({title:e,titleId:t,...n},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))});var f=n(77311),p=n(19841),g=n(29124),m=n.n(g),x=n(32004),b=n(70671),v=n(94968),y=n(91559),j=n(98624),h=n(73797),w=n(34408),O=n(1454),M=n(97861),S=n(45634),I=n(35250);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Z(e){var t=e.onRemoveDomainClick,n=e.onVerifyDomainClick;return(0,I.jsxs)(h.Z.Root,{children:[(0,I.jsx)(h.Z.Trigger,{children:(0,I.jsx)(O.K9M,{className:"icon-sm"})}),(0,I.jsx)(h.Z.Portal,{children:(0,I.jsxs)(h.Z.Content,{children:[(0,I.jsx)(h.Z.Item,{onClick:t,children:(0,I.jsx)(x.Z,C({},T.ssoDropdownRemoveButtonText))}),(0,I.jsx)(h.Z.Item,{onClick:n,children:(0,I.jsx)(x.Z,C({},T.ssoDropdownVerifyButtonText))})]})})]})}function P(e){var t=e.domains,n=e.workspaceId,o=(0,S.Bd)(n).mutateAsync,r=(0,l.useState)(!1),i=r[0],s=r[1],a=(0,l.useState)(),c=a[0],d=a[1];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(w.Z.Root,{className:"w-full table-auto",children:[(0,I.jsxs)(w.Z.Header,{children:[(0,I.jsx)(w.Z.HeaderCell,{className:"dark:bg-gray-800",children:(0,I.jsx)(x.Z,C({},T.domainTableHeader))}),(0,I.jsx)(w.Z.HeaderCell,{className:"dark:bg-gray-800",children:(0,I.jsx)(x.Z,C({},T.statusTableHeader))}),(0,I.jsx)(w.Z.HeaderCell,{className:"dark:bg-gray-800"})]}),(0,I.jsx)(w.Z.Body,{children:t.map(function(e,t){return(0,I.jsxs)("tr",{onClick:function(){return d(e)},className:"cursor-pointer",children:[(0,I.jsx)(w.Z.Cell,{children:e.hostname}),(0,I.jsx)(w.Z.Cell,{children:S.sd[e.status]}),(0,I.jsx)(w.Z.Cell,{textAlign:"right",children:(0,I.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:(0,I.jsx)(Z,{onRemoveDomainClick:function(){o({domainId:e.id})},onVerifyDomainClick:function(){d(e)}})})})]},t)})})]}),(0,I.jsxs)(y.z,{color:"neutral",className:"mt-6 font-medium text-gray-800 dark:text-gray-200",onClick:function(){s(!0)},children:[(0,I.jsx)(O.OvN,{className:"icon-sm"}),(0,I.jsx)(x.Z,C({},T.addDomainButton))]}),(0,I.jsx)(M.Z,{isOpen:i||void 0!==c,onClose:function(){s(!1),d(void 0)},workspaceId:n,currentDomain:i?void 0:c,domains:t},null==c?void 0:c.id)]})}var T=(0,v.vU)({ssoDropdownRemoveButtonText:{id:"workspaceIdentity.ssoDropdownRemoveButtonText",defaultMessage:"Remove Domain"},ssoDropdownVerifyButtonText:{id:"workspaceIdentity.ssoDropdownVerifyButtonText",defaultMessage:"Verify"},domainTableHeader:{id:"workspaceIdentity.domainTableHeader",defaultMessage:"Domain"},statusTableHeader:{id:"workspaceIdentity.statusTableHeader",defaultMessage:"Status"},addDomainButton:{id:"workspaceIdentity.addDomainButton.0",defaultMessage:"Add domain"}}),D=n(50134),L=n(4399),E=n.n(L),A=n(73558),B=n(3554),R=n(21120),N=n(998),_=n(4748),U=n(81942);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=(o=(0,D.Z)(E().mark(function e(t){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var o=new FileReader;o.readAsText(t),o.onload=function(t){var n;e(null===(n=t.target)||void 0===n?void 0:n.result)},o.onerror=n}));case 1:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)});function z(e){var t=e.acsId,n=e.hasSSO,o="".concat(location.host,"/auth/login?sso=true&connection=").concat(t),r=(0,b.Z)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(U.Li,{children:(0,I.jsx)(x.Z,H({},W.setupSSOContent))}),(0,I.jsxs)("div",{className:"mb-6 flex flex-col space-y-4",children:[(0,I.jsx)(A.Z,{label:r.formatMessage(W.acsURLLabel),value:"https://auth0.openai.com/login/callback?connection=".concat(t),onCopied:function(){_.m.success(r.formatMessage(W.copiedACSToClipboard),{duration:3})}}),(0,I.jsx)(A.Z,{label:r.formatMessage(W.entityIDLabel),value:"urn:auth0:openai:".concat(t),onCopied:function(){_.m.success(r.formatMessage(W.copiedEntityToClipboard),{duration:3})}}),n&&(0,I.jsx)(A.Z,{label:r.formatMessage(W.idpSignInURL),value:o,onCopied:function(){_.m.success(r.formatMessage(W.copiedIDPUrlToClipboard),{duration:3})}})]})]})}function X(e){var t,n,o=e.workspaceId,r=e.data,s=e.isOpen,a=e.onClose,c=(0,b.Z)(),d=(0,S.Fc)(o).mutateAsync,u=(0,S.OR)(o).mutateAsync,f=(0,S.DD)(o).mutateAsync,g=(0,l.useRef)(null),m=null==r?void 0:r.connection,v=(0,l.useState)(null==m?void 0:m.sign_in_endpoint),j=v[0],h=v[1],w=(0,l.useState)(null==m?void 0:m.cert),M=w[0],k=w[1],C=null===r?i.CREATE:i.EDIT,Z=(t=(0,D.Z)(E().mark(function e(t,n){var o;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({signInEndpoint:t,cert:n});case 2:return o=e.sent,e.next=5,f({connectionId:o.id,active:!0});case 5:a();case 6:case"end":return e.stop()}},e)})),function(e,n){return t.apply(this,arguments)}),P=C===i.CREATE?(0,I.jsx)(B.ZP.Button,{title:c.formatMessage(W.doneButton),color:"primary",disabled:void 0===j||void 0===M,onClick:(0,D.Z)(E().mark(function e(){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===j||void 0===M)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Z(j,M);case 4:case"end":return e.stop()}},e)}))}):r&&(0,I.jsx)(B.ZP.Button,{title:c.formatMessage(W.doneButton),color:"primary",onClick:(0,D.Z)(E().mark(function e(){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({connectionId:null==r?void 0:r.id,cert:M,signInEndpoint:j,active:!0});case 2:a();case 3:case"end":return e.stop()}},e)}))}),T=null===r?(0,I.jsx)(B.ZP.Button,{title:c.formatMessage(W.cancelButton),color:"light",onClick:function(){return a()}}):(0,I.jsx)(y.z,{as:"link",color:"danger",className:"bg-transparent font-bold text-red-500 hover:bg-transparent",onClick:(0,D.Z)(E().mark(function e(){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({connectionId:null==r?void 0:r.id});case 2:a();case 3:case"end":return e.stop()}},e)})),children:c.formatMessage(W.deleteButton)});return(0,I.jsx)(R.Z,{isOpen:s,type:"success",title:c.formatMessage(C===i.CREATE?W.createTitle:W.editTitle),primaryButton:P,secondaryButton:T,onClose:a,children:(0,I.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,I.jsx)(S.z0,{children:(0,I.jsx)(x.Z,H({},W.createInstructionsManual))}),(0,I.jsx)("label",{className:"mb-2 flex items-center text-sm",children:(0,I.jsx)(x.Z,H({},W.signInLabel))}),(0,I.jsx)("div",{className:"mb-4",children:(0,I.jsx)(N.Z,{className:"w-full appearance-none rounded border px-3 py-2",name:"Sign-In URL",type:"text",placeholder:"https://your.idp.here/saml2?idpid=123456",value:null!=j?j:"",onChange:function(e){h(e.target.value)}})}),(0,I.jsxs)("div",{className:"mb-4",children:[(0,I.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[(0,I.jsx)("label",{className:"text-sm",children:(0,I.jsx)(x.Z,H({},W.certLabel))}),(0,I.jsx)("input",{ref:g,type:"file",accept:".csv,.cer,.pem,text/plain",className:"hidden",onChange:(n=(0,D.Z)(E().mark(function e(t){var n;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!==(n=t.target.files)&&void 0!==n&&n[0])){e.next=5;break}return e.next=3,V(t.target.files[0]);case 3:k(e.sent);case 5:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)})}),(0,I.jsx)(y.z,{color:"light",onClick:function(){return g.current.click()},children:(0,I.jsx)("div",{className:"flex items-center",children:(0,I.jsx)(O.Yjd,{className:"icon-sm"})})})]}),(0,I.jsx)("textarea",{rows:10,className:(0,p.default)("w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2","outline-none focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600","text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:text-gray-100"),placeholder:"-----BEGIN CERTIFICATE-----",value:null!=M?M:"",onChange:function(e){k(e.target.value)}})]})]})})}(r=i||(i={}))[r.CREATE=1]="CREATE",r[r.EDIT=2]="EDIT";var W=(0,v.vU)({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},createInstructionsXML:{id:"ssoModal.createInstructionsXML",defaultMessage:"If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option."},createInstructionsManual:{id:"ssoModal.createInstructionsManual",defaultMessage:"Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider."},createTitle:{id:"ssoModal.createTitle",defaultMessage:"Create SAML SSO Configuration"},editTitle:{id:"ssoModal.editTitle",defaultMessage:"Edit SAML SSO Configuration"},ssoMetadataLabel:{id:"ssoModal.ssoMetadataLabel",defaultMessage:"App Federation Metadata URL"},signInLabel:{id:"ssoModal.signInLabel",defaultMessage:"SSO URL"},certLabel:{id:"ssoModal.certLabel",defaultMessage:"X.509 Signing Certificate"},doneButton:{id:"ssoModal.doneButton",defaultMessage:"Done"},nextButton:{id:"ssoModal.nextButton",defaultMessage:"Next"},deleteButton:{id:"ssoModal.deleteButton",defaultMessage:"Delete configuration"},cancelButton:{id:"ssoModal.cancelButton",defaultMessage:"Cancel"},acsURLLabel:{id:"workspaceIdentity.acsURLLabel",defaultMessage:"Assertion Consumer Service (ACS) URL"},entityIDLabel:{id:"workspaceIdentity.entityIDLabel",defaultMessage:"Entity ID"},idpSignInURL:{id:"workspaceIdentity.idpSignInURL",defaultMessage:"IDP Tile URL"},copiedACSToClipboard:{id:"workspaceIdentity.copiedACSToClipboard",defaultMessage:"Copied ACS URL to clipboard"},copiedEntityToClipboard:{id:"workspaceIdentity.copiedEntityToClipboard",defaultMessage:"Copied entity ID to clipboard"},copiedIDPUrlToClipboard:{id:"workspaceIdentity.copiedIDPUrlToClipboard",defaultMessage:"Copied IDP URL to clipboard"},orDivider:{id:"workspaceIdentity.orDivider",defaultMessage:"or"},certExtractFailed:{id:"workspaceIdentity.certExtractFailed",defaultMessage:"Unable to find X.509 Certificate in provided XML"},ssoUrlExtractFailed:{id:"workspaceIdentity.ssoUrlExtractFailed",defaultMessage:"Unable to find Entity ID (sign-in endpoint) in provided XML"},ssoLearnMoreLink:{id:"workspaceIdentity.ssoLearnMoreLink",defaultMessage:"Learn more"}});function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var q=function(e){var t=e.title,n=e.footer,o=e.children;return(0,I.jsxs)(U.i9,{children:[(0,I.jsx)(U.A4,{children:(0,I.jsx)(x.Z,$({},t))}),(0,I.jsx)("div",{children:o}),(0,I.jsx)(U.Li,{children:n})]})},J=function(e){var t=e.icon,n=e.title,o=e.body,r=e.toggle;return(0,I.jsxs)(U.i9,{children:[(0,I.jsxs)("div",{className:"flex items-center justify-between",children:[(0,I.jsxs)("div",{className:"flex items-center gap-2",children:[(0,I.jsx)(t,{className:"icon-sm"}),(0,I.jsx)(U.A4,{children:(0,I.jsx)(x.Z,$({},n))})]}),(0,I.jsx)("div",{children:r})]}),(0,I.jsx)(U.Li,{children:o})]})};function K(e){var t,n,o,r,i=e.currentWorkspaceId,s=(0,b.Z)(),g=(0,S.f_)(i),v=g.data,h=g.isLoading,w=(0,S.DD)(i).mutateAsync,O=(0,S.Ji)(i),M=O.variables,k=O.mutateAsync,C=(null==v?void 0:v.sso_connection)!==null,Z=null==v?void 0:v.domains.some(function(e){return e.status===c.pT.VERIFIED}),T=C?Q.ssoEditButton:Q.ssoAddButton,D=(0,l.useState)(!1),L=D[0],E=D[1],A=(null==v?void 0:null===(t=v.sso_connection)||void 0===t?void 0:t.status)==="ACTIVE",B=null==v?void 0:null===(n=v.sso_connection)||void 0===n?void 0:n.id,R=v?(0,I.jsxs)(U.$V,{children:[(0,I.jsx)(q,{title:Q.domainSubtitle,footer:(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(x.Z,$({},Q.verifyDomainInfoText))}),children:(0,I.jsx)(P,{domains:v.domains,workspaceId:i})}),(0,I.jsx)(J,{icon:d,title:Q.autoProvisionTitle,body:(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(x.Z,$({},Q.autoProvisionBody))}),toggle:(0,I.jsx)(j.Z,{disabled:!Z,enabled:null!==(o=null==M?void 0:M.shouldAutoProvision)&&void 0!==o?o:v.should_auto_provision,onChange:function(e){k({shouldAutoProvision:e})},label:s.formatMessage(Q.toggleAutoProvisionLabel)})}),(0,I.jsxs)(U.i9,{children:[(0,I.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,I.jsxs)("div",{className:"flex items-center gap-2",children:[(0,I.jsx)(u,{className:(0,p.default)("icon-sm",A?"text-blue-600":"text-gray-400")}),(0,I.jsx)(U.A4,{children:(0,I.jsx)(x.Z,$({},Q.ssoTitle))})]}),C&&(0,I.jsx)("div",{children:(0,I.jsx)(j.Z,{enabled:A,onChange:function(){w({connectionId:B,active:!A})},label:s.formatMessage(Q.ssoToggleActive)})})]}),Z&&(0,I.jsx)(z,{acsId:v.acs_id,hasSSO:C}),(0,I.jsxs)("div",{children:[(0,I.jsx)(y.z,{as:"button",color:"primary",disabled:!Z,onClick:function(){E(!0)},className:"font-medium",children:(0,I.jsx)(x.Z,$({},T))}),(0,I.jsx)(X,{workspaceId:i,data:v.sso_connection,isOpen:L,onClose:function(){return E(!1)}})]})]}),v.sso_connection&&(0,I.jsx)(J,{icon:f.Z,title:Q.enforceSSOTitle,body:(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(x.Z,$({},Q.enforceSSOBody))}),toggle:(0,I.jsx)(j.Z,{disabled:!Z,enabled:null===(r=v.sso_connection.auth0_enforced_clients)||void 0===r?void 0:r.includes("chat"),onChange:function(e){w({connectionId:v.sso_connection.id,enforcedClients:e?["chat"]:[]})},label:s.formatMessage(Q.enforceSSOLabel)})})]}):null;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(m(),{children:(0,I.jsx)("title",{children:s.formatMessage(Q.title)})}),(0,I.jsx)(a.yG,{title:s.formatMessage(Q.title)}),(0,I.jsx)(a.hb,{showSpinner:h,children:R})]})}var Q=(0,v.vU)({title:{id:"workspaceIdentity.title",defaultMessage:"Identity & Provisioning"},domainSubtitle:{id:"workspaceIdentity.domainSubtitle",defaultMessage:"Domain management"},ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoToggleActive:{id:"WorkspaceIdentityPage.ssoToggleActive",defaultMessage:"Enable SSO for this workspace"},ssoAddButton:{id:"workspaceIdentity.ssoAddButton",defaultMessage:"Add SAML SSO"},ssoEditButton:{id:"workspaceIdentity.ssoEditButton",defaultMessage:"Edit SAML SSO"},autoProvisionTitle:{id:"workspaceIdentity.autoProvisionSubtitle",defaultMessage:"Automatic account creation"},autoProvisionBody:{id:"workspaceIdentity.autoProvisionBody",defaultMessage:"Automatically create ChatGPT Enterprise accounts for new users who log in with a verified domain."},toggleAutoProvisionLabel:{id:"workspaceIdentity.toggleAutoProvisionLabel",defaultMessage:"Toggle to enable or disable auto provisioning"},enforceSSOTitle:{id:"workspaceIdentity.enforceSSOTitle",defaultMessage:"Enforce SSO log in"},enforceSSOBody:{id:"workspaceIdentity.enforceSSOBody",defaultMessage:"When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal."},enforceSSOLabel:{id:"workspaceIdentity.enforceSSOLabel",defaultMessage:"Toggle to enable or disable SSO enforcement"},verifyDomainInfoText:{id:"workspaceIdentity.verifyDomainInfoText",defaultMessage:"Verify ownership of an email domain to access advanced security features including single sign-on."},learnMoreLink:{id:"workspaceIdentity.learnMoreLink",defaultMessage:"Learn more"}});function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var ee=!0;function et(e){return(0,I.jsx)(K,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))}et.getLayout=function(e){return(0,I.jsx)(a.ZP,{mobilePageTitle:"Identity",children:e})}},81942:function(e,t,n){"use strict";n.d(t,{$V:function(){return p},A4:function(){return g},Li:function(){return v},W8:function(){return j},i$:function(){return m},i9:function(){return b},qQ:function(){return x},vi:function(){return y}});var o,r,i,s,a,c,l,d,u=n(90038),f=n(21389),p=f.Z.div(o||(o=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),g=f.Z.div(r||(r=(0,u.Z)(["text-xl font-medium"]))),m=f.Z.div(i||(i=(0,u.Z)(["text-base font-medium"]))),x=f.Z.div(s||(s=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),b=f.Z.div(a||(a=(0,u.Z)(["max-w-xl flex flex-col gap-3 w-full m-auto md:m-0"]))),v=f.Z.div(c||(c=(0,u.Z)(["text-sm"]))),y=f.Z.div(l||(l=(0,u.Z)(["flex justify-between py-4 gap-4"]))),j=f.Z.hr(d||(d=(0,u.Z)(["max-w-xl border-token-border-light"])))},29019:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/identity",function(){return n(83994)}])}},function(e){e.O(0,[5017,9774,2888,179],function(){return e(e.s=29019)}),_N_E=e.O()}]);
//# sourceMappingURL=identity-218afc4729fd8fe7.js.map