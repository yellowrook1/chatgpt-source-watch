(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3224],{73643:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return eg},default:function(){return em}});var i,a,r,s,l,o=t(35017),c=t(36112),u=t(50134),d=t(4399),f=t.n(d),g=t(4748),m=t(66027),p=t(73582),x=t(19841),v=t(10721),j=t(70079),h=t(1454),b=t(70671),y=t(32004),w=t(94968),Z=t(91559),O=t(60493),P=t(44247),M=t(63866),N=t(3554),_=t(7144),B=t(90387),I=t(21120),k=t(998),D=t(23232),T=t(35250);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function C(e){var n,t=e.isOpen,i=e.onClose,a=(0,b.Z)(),r=(0,D.ZP)(),s=r.data,l=r.isLoading,o=(0,_.t)(),c=(0,D.St)(o.id),d=(0,p.aF)(),m=(0,j.useState)(""),x=m[0],v=m[1],h=(0,j.useState)(!1),w=h[0],Z=h[1],O=(null==d?void 0:d.email)&&x.toLowerCase()==d.email.toLowerCase(),P=(0,j.useState)(s&&!s.will_renew),M=P[0],E=P[1];if(l||!o||!s)return null;var C=(n=(0,u.Z)(f().mark(function e(){return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,c.mutateAsync(o.id);case 4:E(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),g.m.warning(a.formatMessage(z.errorCancellingSubscription),{hasCloseButton:!0});case 10:return e.prev=10,Z(!1),e.finish(10);case 13:case"end":return e.stop()}},e,null,[[1,7,10,13]])})),function(){return n.apply(this,arguments)});return(0,T.jsx)(I.Z,{type:"success",onClose:i,isOpen:t,className:"",title:(0,T.jsx)("span",{className:"text-lg",children:(0,T.jsx)(y.Z,S({},z.cancelPlan))}),closeButton:(0,T.jsx)(N.ZP.CloseButton,{onClose:i}),children:M?(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{className:"mb-2 text-base font-medium text-token-text-primary",children:(0,T.jsx)(y.Z,S({},z.successfullyCanceled))}),null!=s.active_until&&(0,T.jsx)("p",{className:"text-sm text-token-text-primary",children:(0,T.jsx)(y.Z,S(S({},z.retainUntil),{},{values:{expiryDate:new Date(s.active_until)}}))}),(0,T.jsx)("div",{className:"mt-6 flex w-full flex-row justify-end",children:(0,T.jsx)(N.mH,{title:a.formatMessage(z.doneButton),color:"primary",onClick:i,disabled:w})})]}):(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4",children:[(0,T.jsxs)("div",{className:"flex w-full items-center gap-4",children:[(0,T.jsx)(B.B0,{src:o.data.profilePictureUrl,size:"large"}),(0,T.jsxs)("div",{className:"flex-col",children:[(0,T.jsx)("p",{className:"font-medium",children:o.data.name}),(0,T.jsx)("p",{className:"text-sm text-token-text-secondary",children:(0,T.jsx)(y.Z,S(S({},z.membersCount),{},{values:{count:s.seats_entitled}}))})]})]}),(0,T.jsxs)("div",{className:"w-full",children:[(0,T.jsx)("h3",{className:"mb-2 text-base font-medium text-token-text-primary",children:(0,T.jsx)(y.Z,S({},z.areYouSure))}),(0,T.jsxs)("ul",{className:"list-disc pl-5 text-sm text-token-text-secondary",children:[(0,T.jsx)("li",{className:"my-2",children:(0,T.jsx)(y.Z,S({},z.dataUnavailable))}),null!=s.active_until&&(0,T.jsx)("li",{className:"my-2",children:(0,T.jsx)(y.Z,S(S({},z.retainUntil),{},{values:{expiryDate:new Date(s.active_until)}}))}),(0,T.jsx)("li",{className:"my-2",children:(0,T.jsx)(y.Z,S({},z.retainEmailAccess))})]})]}),(0,T.jsxs)("div",{className:"w-full",children:[(0,T.jsx)("h3",{className:"mb-2 text-base font-medium text-token-text-primary",children:(0,T.jsx)(y.Z,S({},z.enterEmailToConfirm))}),(0,T.jsx)(k.Z,{type:"text",name:"user-email",placeholder:"abcd@acme.com",onChange:function(e){v(e.target.value)}})]})]}),(0,T.jsxs)("div",{className:"mt-6 flex w-full flex-row justify-end",children:[(0,T.jsx)(N.mH,{title:a.formatMessage(z.keepSubscriptionButton),onClick:i,disabled:w}),(0,T.jsx)(N.mH,{title:a.formatMessage(z.cancelSubscriptionButton),onClick:C,disabled:!O,loading:w,color:"danger",className:"ml-2"})]})]})})}var z=(0,w.vU)({dataUnavailable:{id:"cancelTeamPlanModal.dataUnavailable",defaultMessage:"All workspace data including chat history and settings will not be available."},cancelPlan:{id:"cancelTeamPlanModal.cancelPlan",defaultMessage:"Cancel subscription"},retainUntil:{id:"cancelTeamPlanModal.retainUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},retainEmailAccess:{id:"cancelTeamPlanModal.retainEmailAccess",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},errorCancellingSubscription:{id:"cancelTeamPlanModal.errorCancellingSubscription",defaultMessage:"There was a problem cancelling your subscription."},areYouSure:{id:"cancelTeamPlanModal.areYouSure",defaultMessage:"Are you sure?"},enterEmailToConfirm:{id:"cancelTeamPlanModal.enterEmailToConfirm",defaultMessage:"Enter your Email address to confirm"},emailPlaceholder:{id:"cancelTeamPlanModal.emailPlaceholder",defaultMessage:"abcd@acme.com"},doneButton:{id:"cancelTeamPlanModal.doneButton",defaultMessage:"Done"},keepSubscriptionButton:{id:"cancelTeamPlanModal.keepSubscriptionButton",defaultMessage:"Keep subscription"},cancelSubscriptionButton:{id:"cancelTeamPlanModal.cancelSubscriptionButton",defaultMessage:"Cancel subscription"},successfullyCanceled:{id:"cancelTeamPlanModal.successfullyCanceled",defaultMessage:"You have successfully canceled your subscription."},membersCount:{id:"yourComponent.membersCount",defaultMessage:"{count, plural, one {# member} other {# members}}"}}),A=t(90038),L=t(21389),U=t(90166);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function W(e){var n=e.numInUse,t=e.numAllocated;return(0,T.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,T.jsx)(Math.max(t,n)>10?q:V,{numInUse:n,numAllocated:t}),(0,T.jsx)("span",{className:"text-sm",children:(0,T.jsx)(y.Z,Y(Y({},X.description),{},{values:{num:"".concat(n,"/").concat(t)}}))})]})}function q(e){var n=e.numAllocated,t=e.numInUse,i=(0,b.Z)(),a=t>n;return(0,T.jsx)("div",{className:(0,x.default)("relative w-full rounded-full",a?"bg-orange-500":"bg-gray-200 dark:bg-gray-500"),children:(0,T.jsxs)("div",{className:"relative h-4",style:{width:"".concat(a?n/t*100:100,"%")},children:[(0,T.jsx)("div",{className:(0,x.default)("h-4 overflow-hidden rounded-l-full bg-green-600",t===n&&"rounded-r-full"),style:{width:"".concat(a?100:t/n*100,"%")}}),t!==n&&a&&(0,T.jsx)("div",{className:"absolute right-0 top-[-3px] bg-token-surface-primary dark:bg-token-surface-secondary",children:(0,T.jsx)(U.u,{label:i.formatMessage(X.dividerTooltip,{count:n}),children:(0,T.jsx)($,{className:"px-1 py-0.5"})})})]})})}var $=function(e){var n=e.className;return(0,T.jsxs)("div",{className:(0,x.default)("flex flex-col gap-0.5",n),children:[(0,T.jsx)(R,{}),(0,T.jsx)(R,{}),(0,T.jsx)(R,{}),(0,T.jsx)(R,{})]})},H=L.Z.div(i||(i=(0,A.Z)(["h-4 w-4 rounded-full"]))),G=(0,L.Z)(H)(a||(a=(0,A.Z)(["bg-green-600"]))),K=(0,L.Z)(H)(r||(r=(0,A.Z)(["bg-gray-200 dark:bg-gray-500"]))),Q=(0,L.Z)(H)(s||(s=(0,A.Z)(["bg-orange-500"]))),R=L.Z.span(l||(l=(0,A.Z)(["w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full"])));function V(e){var n=e.numAllocated,t=e.numInUse,i=(0,b.Z)(),a=t>n,r=(0,j.useMemo)(function(){return Array.from(Array(a?t:n).keys())},[a,n,t]);return(0,T.jsx)("div",{className:"flex items-center gap-2",children:r.map(function(e){var r=Q,s=null;return e<t&&!a?r=G:e<n&&!a&&(r=K),e===n-1&&(s=(0,T.jsx)(U.u,{label:i.formatMessage(X.dividerTooltip,{count:n}),children:(0,T.jsx)($,{})})),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(r,{},e),s]})})})}var X=(0,w.vU)({dividerTooltip:{defaultMessage:"Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",id:"components.business.NumSeats.dividerTooltip"},description:{defaultMessage:"{num} seats in use",id:"components.business.NumSeats.description"}}),J=t(81942),ee=t(61236);function en(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function et(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?en(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):en(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var ei=(0,w.vU)({invoicesLoadError:{id:"organizationBillingInfo.invoicesLoadError.0",defaultMessage:"Failed to load invoices. Contact support@openai.com if error persists."}});function ea(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function er(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ea(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ea(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function es(){var e,n=(0,v.useRouter)(),t=(0,D.ZP)(),i=t.data,a=t.isLoading,r=t.isError,s=(0,p.ec)(p.F_.isEnterprisePlan),l=(0,b.Z)(),o=(0,j.useState)(!1),c=o[0],d=o[1],x=(0,p.ec)(p.F_.workspaceId),h=(0,p.ec)(p.F_.isTeamPlan),w=(e=(0,u.Z)(f().mark(function e(){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,m.ZP.fetchCustomerPortalUrl(x);case 4:t=e.sent,n.push(t.url),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g.m.warning(l.formatMessage(ef.stripeErrorWarning),{hasCloseButton:!0});case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[1,8,11,14]])})),function(){return e.apply(this,arguments)});if(a)return(0,T.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,T.jsx)(M.Z,{})});if(r||!i)return null;var P=null!=i.active_until,N=(null==i?void 0:i.seats_in_use)>(null==i?void 0:i.seats_entitled);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(J.i9,{children:[(0,T.jsx)(J.A4,{children:(0,T.jsx)(y.Z,er({},ef.planTitle))}),(0,T.jsxs)("div",{children:[(0,T.jsx)(J.i$,{children:P?s?(0,T.jsx)(y.Z,er({},ef.activeEnterpriseLicense)):(0,T.jsx)(y.Z,er({},ef.activeTeamLicense)):(0,T.jsx)(y.Z,er({},ef.inactiveLicense))}),null!=i.active_until&&(0,T.jsx)(J.Li,{children:s?(0,T.jsx)(y.Z,er(er({},ef.licenseExpiry),{},{values:{expiryDate:new Date(i.active_until)}})):i.will_renew?(0,T.jsx)(y.Z,er(er({},ef.renewalDate),{},{values:{expiryDate:new Date(i.active_until)}})):(0,T.jsx)(y.Z,er(er({},ef.deactivateDate),{},{values:{expiryDate:new Date(i.active_until)}}))}),h&&(0,T.jsx)(Z.z,{color:"neutral",className:"mt-4",onClick:w,loading:c,children:(0,T.jsx)(y.Z,er({},ef.managePaymentMethodBtn))})]})]}),P&&(0,T.jsxs)(J.i9,{children:[(0,T.jsx)(J.A4,{children:(0,T.jsx)(y.Z,er({},ef.seatsTitle))}),(0,T.jsx)(eu,{}),h&&N&&(0,T.jsxs)("span",{className:"text-sm text-token-text-secondary",children:[(0,T.jsx)(y.Z,er({},ef.teamsAutochargeMessage)),(0,T.jsx)(O.Z,{className:"pl-1",openNewTab:!0,href:"https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan",children:(0,T.jsx)(y.Z,er({},ef.billingLearnMore))})]})]})]})}function el(){var e=(0,D.ZP)().data,n=(0,p.ec)(p.F_.isTeamPlan),t=(0,j.useState)(!1),i=t[0],a=t[1];if(!n||!(null!=e&&e.will_renew)&&!i)return(0,T.jsx)(T.Fragment,{});var r=function(){a(!i)};return(0,T.jsxs)(J.i9,{children:[(0,T.jsx)(J.A4,{children:(0,T.jsx)(y.Z,er({},ef.manageSubscription))}),(0,T.jsxs)("div",{children:[(0,T.jsx)(Z.z,{color:"neutral",className:"mt-4",onClick:function(){r()},children:(0,T.jsx)(y.Z,er({},ef.cancelSubscriptionBtn))}),(0,T.jsx)(C,{isOpen:i,onClose:r})]})]})}function eo(e){var n=e.invoice,t=(null==n?void 0:n.status_transitions.paid_at)!=null&&new Date(1e3*n.status_transitions.paid_at),i=n&&new Date(1e3*n.due_date),a=n&&new Date(1e3*n.created);return(0,T.jsxs)(J.vi,{className:"items-center",children:[(0,T.jsxs)("div",{className:"flex grow flex-col gap-1",children:[(0,T.jsx)("span",{children:a?(0,T.jsx)(y.Z,er(er({},ef.invoiceName),{},{values:{createdDate:a}})):(0,T.jsx)(y.Z,er({},ef.defaultInvoiceName))}),null!=n&&n.paid&&null!=t?(0,T.jsx)("div",{className:"text-xs text-token-text-secondary",children:(0,T.jsx)(y.Z,er(er({},ef.paidInvoice),{},{values:{invoiceDate:t}}))}):n&&(0,T.jsx)("div",{className:"text-xs text-green-600",children:(0,T.jsx)(y.Z,er(er({},ef.upcomingInvoice),{},{values:{invoiceDate:i}}))})]}),(0,T.jsx)("a",{href:null==n?void 0:n.hosted_invoice_url,className:(0,x.default)("mx-auto",(null==n?void 0:n.hosted_invoice_url)==void 0&&"cursor-not-allowed opacity-20"),target:"_blank",rel:"noreferrer",children:(0,T.jsx)(h.AlO,{className:"icon-sm text-green-600"})})]})}function ec(){var e,n,t,i,a,r,s,l,o=(0,j.useState)({limit:5}),c=o[0],d=o[1],x=(n=(0,p.ec)(function(e){return e.currentWorkspace}),t=(0,p.ec)(p.F_.isEnterprisePlan),i=null==n?void 0:n.id,a=null!==(e=null==n?void 0:n.organizationId)&&void 0!==e?e:void 0,r=t?{organization_id:a}:{account_id:i},s=(0,b.Z)(),(0,ee.a)({queryKey:["organization-invoices",et(et({},r),{},{options:c})],queryFn:(l=(0,u.Z)(f().mark(function e(){return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.ZP.getInvoices(r,c).catch(function(e){throw g.m.danger(s.formatMessage(ei.invoicesLoadError,{error:e.message})),e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),function(){return l.apply(this,arguments)}),enabled:"account_id"in r||"organization_id"in r})),v=x.data,w=x.isError,Z=null!=c.startingAfter||null!=c.endingBefore&&(null==v?void 0:v.has_more),O=null!=c.endingBefore||(null==v?void 0:v.has_more)&&null==c.endingBefore;return w||null==v?(0,T.jsxs)(J.i9,{children:[(0,T.jsx)(J.A4,{children:(0,T.jsx)(y.Z,er({},ef.invoicesTitle))}),(0,T.jsx)(P.Z,{children:(0,T.jsx)(y.Z,er({},ef.noInvoices))})]}):(0,T.jsxs)(J.i9,{children:[(0,T.jsx)(J.A4,{children:(0,T.jsx)(y.Z,er({},ef.invoicesTitle))}),(0,T.jsx)(J.qQ,{children:v.data.map(function(e){return(0,T.jsx)(eo,{invoice:e},e.id)})}),(0,T.jsxs)("div",{className:"flex",children:[Z&&(0,T.jsx)("button",{onClick:function(){v&&d(function(e){return er(er({},e),{},{endingBefore:v.data[0].id,startingAfter:void 0})})},children:(0,T.jsx)(h.YFh,{className:"icon-sm"})}),(0,T.jsx)("div",{className:"flex-grow"}),O&&(0,T.jsx)("button",{onClick:function(){v&&d(function(e){return er(er({},e),{},{startingAfter:v.data[v.data.length-1].id,endingBefore:void 0})})},children:(0,T.jsx)(h.Tfp,{className:"icon-sm"})})]})]})}function eu(){var e=(0,D.ZP)(),n=e.data,t=e.isLoading;return e.isError||!n||t?null:(0,T.jsx)(W,{numInUse:n.seats_in_use,numAllocated:n.seats_entitled})}function ed(){var e=(0,p.ec)(function(e){return e.currentWorkspace}),n=null==e?void 0:e.organizationId,t=(0,b.Z)();return void 0===n?null:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(o.yG,{title:t.formatMessage(ef.title),subtitle:t.formatMessage(ef.subtitle)}),(0,T.jsx)(o.hb,{children:(0,T.jsxs)(J.$V,{children:[(0,T.jsx)(es,{}),(0,T.jsx)(ec,{}),(0,T.jsx)(el,{})]})})]})}var ef=(0,w.vU)({title:{id:"organizationBillingInfo.title.1",defaultMessage:"Billing"},subtitle:{id:"organizationBillingInfo.subtitle",defaultMessage:"Only workspace owners can view and change these settings"},planTitle:{id:"organizationBillingInfo.planTitle",defaultMessage:"Plan"},activeEnterpriseLicense:{id:"organizationBillingInfo.activeEnterpriseLicense",defaultMessage:"Enterprise License"},activeTeamLicense:{id:"organizationBillingInfo.activeTeamLicense",defaultMessage:"Team License"},inactiveLicense:{id:"organizationBillingInfo.inactiveLicense",defaultMessage:"Inactive License"},licenseExpiry:{id:"organizationBillingInfo.licenseExpiry",defaultMessage:"Active until {expiryDate, date, long}"},renewalDate:{id:"organizationBillingInfo.renewalDate",defaultMessage:"Renews on {expiryDate, date, long}"},deactivateDate:{id:"organizationBillingInfo.deactivateDate",defaultMessage:"Deactivates on {expiryDate, date, long}"},seatsTitle:{id:"organizationBillingInfo.seatsTitle",defaultMessage:"Seats"},seatsInUse:{id:"organizationBillingInfo.seatsInUse",defaultMessage:"{numSeats} in use ({numSeatsPct})"},invoicesTitle:{id:"organizationBillingInfo.invoicesTitle",defaultMessage:"Invoices"},invoiceName:{id:"organizationBillingInfo.invoiceName",defaultMessage:"Invoice: {createdDate, date, long}"},defaultInvoiceName:{id:"organizationBillingInfo.defaultInvoiceName",defaultMessage:"Invoice"},paidInvoice:{id:"organizationBillingInfo.paidInvoice",defaultMessage:"Paid: {invoiceDate, date, long}"},upcomingInvoice:{id:"organizationBillingInfo.upcomingInvoice",defaultMessage:"Due: {invoiceDate, date, long}"},noInvoices:{id:"organizationBillingInfo.noInvoices",defaultMessage:"No invoices found"},manageSubscription:{id:"organizationBillingInfo.manageSubscription",defaultMessage:"Manage subscription"},cancelSubscriptionBtn:{id:"organizationBillingInfo.cancelSubscriptionBtn",defaultMessage:"Cancel subscription"},managePaymentMethodBtn:{id:"organizationBillingInfo.managePaymentMethodBtn",defaultMessage:"Manage payment method"},stripeErrorWarning:{id:"organizationBillingInfo.stripeErrorWarning",defaultMessage:"Error loading account information"},teamsAutochargeMessage:{id:"organizationBillingInfo.teamsAutochargeMessage",defaultMessage:"Your additional seats will be included on your next invoice."},billingLearnMore:{id:"organizationBillingInfo.billingLearnMore",defaultMessage:"Learn more"}}),eg=!0;function em(){return(0,T.jsx)(ed,{})}em.getLayout=function(e){return(0,T.jsx)(o.ZP,{mobilePageTitle:"Billing",requireAdminPrivileges:!0,children:e})}},81942:function(e,n,t){"use strict";t.d(n,{$V:function(){return g},A4:function(){return m},Li:function(){return j},W8:function(){return b},i$:function(){return p},i9:function(){return v},qQ:function(){return x},vi:function(){return h}});var i,a,r,s,l,o,c,u,d=t(90038),f=t(21389),g=f.Z.div(i||(i=(0,d.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),m=f.Z.div(a||(a=(0,d.Z)(["text-xl font-medium"]))),p=f.Z.div(r||(r=(0,d.Z)(["text-base font-medium"]))),x=f.Z.div(s||(s=(0,d.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),v=f.Z.div(l||(l=(0,d.Z)(["max-w-xl flex flex-col gap-3 w-full m-auto md:m-0"]))),j=f.Z.div(o||(o=(0,d.Z)(["text-sm"]))),h=f.Z.div(c||(c=(0,d.Z)(["flex justify-between py-4 gap-4"]))),b=f.Z.hr(u||(u=(0,d.Z)(["max-w-xl border-token-border-light"])))},6406:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/billing",function(){return t(73643)}])}},function(e){e.O(0,[5017,9774,2888,179],function(){return e(e.s=6406)}),_N_E=e.O()}]);
//# sourceMappingURL=billing-dd64351362096e8e.js.map