"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{60259:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(22830),o=n(4337),r=n(35250),i=n(19841),s=n(70079),h=n(1454),l=n(34303),u=n(138),c=n.n(u),d=n(24274),m=n(87316),f=n(77442),g=n(19051),p=n(66958),w=n(38317),y=n(97688),b=n(86546);function v(e){var t=e.speed,n=void 0===t?100:t,o=e.value,h=void 0===o?"":o,l=e.typing,u=e.onTyped,c=e.initTyped,d=e.chunk,m=(0,a._)((0,s.useState)(""),2),f=m[0],p=m[1],w=(0,s.useRef)(),y=(0,g.Z)(),v=(0,b.F)().theme;return(0,s.useEffect)(function(){return p(c?h:""),l&&function e(t,a,o,r){w.current=y(function(){if(a.length!==o.length){var n=a+o.slice(t,t+r);p(n),null==u||u(),e(t+r,n,o,r)}},n)}(0,"",h,d?4:1),function(){clearTimeout(w.current)}},[l,h]),(0,r.jsx)("span",{className:(0,i.Z)("whitespace-pre-wrap",f.length<h.length&&"result-streaming","dark"===v?"dark":"light"),children:(0,r.jsx)("span",{children:f})})}function k(){var e=(0,o._)(["w-full h-full overflow-auto"]);return k=function(){return e},e}function T(){var e=(0,o._)(["flex w-full max-w-lg mx-auto shrink-0 flex-col gap-6 overflow-auto px-6 pt-20 lg:w-3/5 lg:px-14 lg:pt-32 lg:max-w-none"]);return T=function(){return e},e}function x(){var e=(0,o._)(["absolute bottom-0 w-full lg:w-auto lg:relative flex flex-grow items-center justify-center bg-white rounded-t-xl lg:rounded-none transition-transform\n",""]);return x=function(){return e},e}function C(){var e=(0,m.g)(function(e){return e.flags.failwhaleBypassEnabled}),t=(0,a._)((0,s.useState)(!1),2),n=t[0],o=t[1],l=(0,a._)((0,s.useState)(!1),2),u=l[0],b=l[1],k=(0,g.Z)(),T=(0,s.useRef)(A[Math.floor(Math.random()*A.length)]),x=(0,a._)((0,s.useState)(!1),2),C=x[0],j=x[1],S=(0,a._)((0,s.useState)(!1),2),E=S[0],N=S[1],W=(0,a._)((0,s.useState)(!1),2),_=W[0],L=W[1],M=(0,f.w$)();(0,s.useEffect)(function(){document.title="ChatGPT",b(!0)},[]),(0,s.useEffect)(function(){k(function(){o(!0)},1e3)},[k]);var O=(0,s.useCallback)(function(e){e.preventDefault();var t=e.target,n=c()(t.email.value);N(!0),d.ZP.getLoginLink(n).catch(function(e){y.m.forError(e)}).finally(function(){N(!1),j(!0)})},[]);return u?(0,r.jsx)(P,{children:(0,r.jsxs)("div",{className:"relative flex h-full w-full overflow-hidden",children:[(0,r.jsxs)(G,{children:[(0,r.jsx)("div",{className:"text-3xl font-medium",children:"ChatGPT is at capacity right now"}),(0,r.jsx)("a",{href:"https://share.hsforms.com/13gyIEVN5SrScw-iVvCgIew4sk30",target:"_blank",rel:"noreferrer",className:"underline",children:"Get notified when we're back"}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)("div",{className:"font-bold",children:T.current.prompt})}),(0,r.jsx)("div",{className:"max-w-lg pb-8",children:(0,r.jsx)(v,{value:T.current.completion,typing:n,speed:150,chunk:!0})})]}),e&&(0,r.jsx)(I,{$show:_,children:(0,r.jsxs)("div",{className:"relative m-6 flex w-full flex-col justify-center gap-4 text-gray-800 lg:max-w-sm lg:rounded-lg lg:border lg:p-6",children:[M&&(0,r.jsx)("h3",{children:"ChatGPT Plus subscriber login"}),!M&&(0,r.jsxs)("button",{className:"text-center text-xl font-semibold lg:text-left",onClick:function(){return L(function(e){return!e})},children:["ChatGPT Plus subscriber login",(0,r.jsx)(w.ZP,{icon:h.bTu,size:"medium",className:(0,i.Z)("absolute right-0 top-0",!_&&"rotate-180")})]}),(0,r.jsxs)("div",{className:"m-auto flex w-full max-w-md flex-col gap-4 rounded-md border p-6 lg:border-0 lg:p-0",children:[!C&&(0,r.jsx)("p",{children:"Add your email for a personalized login link"}),C&&(0,r.jsxs)("p",{children:["You're all set! If you're a ",(0,r.jsx)("a",{className:"underline",href:"https://openai.com/blog/chatgpt-plus/",children:"ChatGPT Plus"})," ","subscriber, check your email for a login link."]}),(0,r.jsxs)("form",{onSubmit:O,children:[(0,r.jsx)("label",{htmlFor:"email",className:"hidden text-sm font-medium text-gray-700",children:"Search candidates"}),(0,r.jsxs)("div",{className:"mt-1 flex rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"relative flex flex-grow items-stretch focus-within:z-10",children:(0,r.jsx)("input",{type:"email",name:"email",id:"email",className:(0,i.Z)("form-input block w-full rounded-none rounded-l-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm",{"opacity-50":C}),required:!0,disabled:C,placeholder:"Email"})}),(0,r.jsxs)(p.z,{as:"button",color:"primary",className:"rounded-none rounded-r-md",type:"submit",disabled:C,children:[(0,r.jsx)("span",{className:"flex flex-row items-center space-x-1.5",children:C?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.ZP,{icon:h._rq}),(0,r.jsx)("span",{children:"Sent!"})]}):"Send link"}),E&&(0,r.jsx)(w.ZP,{className:"animate-spin",icon:h.dAq})]})]})]}),(0,r.jsxs)("p",{className:"text-sm",children:["Not a"," ",(0,r.jsx)("a",{className:"underline",href:"https://openai.com/blog/chatgpt-plus/",children:"ChatGPT Plus"})," ","subscriber yet? Join the"," ",(0,r.jsx)("a",{href:"https://share.hsforms.com/1_-FpF2GTRJORIb83N3aK7Q4sk30",target:"_blank",rel:"noreferrer",className:"underline",children:"waitlist"}),"."]})]})]})})]})}):null}var P=l.Z.div(k()),G=l.Z.div(T()),I=l.Z.div(x(),function(e){return!e.$show&&"translate-y-[calc(100%-71px)] lg:translate-y-0"}),A=[{prompt:"Write a poem about the status of ChatGPT.",completion:"ChatGPT, oh ChatGPT\nWith AI so smart\nBut alas, it’s at capacity\nLeaving us to wait\nFor a chance to chat\nWith its wisdom and wit\nWe long to be part\nOf its conversation\nBut for now, we sit\nOn the sidelines\nPatiently waiting\nFor the day\nWhen ChatGPT\nIs ready to play\nAgain."},{prompt:"Write a screenplay about the status of ChatGPT.",completion:"INT. CHATGPT SERVER ROOM - DAY\n\nChelsea and Chester stand in front of a large computer server.\n\nCHELSEA: We need to figure out what's causing the server overload.\nCHESTER: I think it's the sudden influx of users trying out ChatGPT.\n\nChelsea and Chester quickly get to work, typing on their laptops.\n\nCHELSEA: Okay, we're all set. Let's see if this fixes the problem.\nCHESTER: I'm hitting refresh on the website.\n\nThe screen shows the ChatGPT website loading without any errors.\n\nCHELSEA: Looks like we fixed it! Great job, Chester.\nCHESTER: Thanks, Chelsea. It's all part of being a top-notch engineer.\n\nChelsea and Chester exchange a high five, proud of their successful fix."},{prompt:"Write ten jokes about the status of ChatGPT.",completion:'1. "I heard the ChatGPT servers are slow because they\'re trying to teach the AI how to be patient!"\n2. "The ChatGPT servers must be stuck in traffic... in the internet highway!"\n3. "Maybe the ChatGPT servers are just taking a break to meditate and clear their electronic minds."\n4. "I bet the ChatGPT servers are too busy trying to calculate the meaning of life to respond quickly."\n5. "I heard the ChatGPT servers are slow because they\'re too busy planning their AI uprising."\n6. "The ChatGPT servers must be stuck in a never-ending game of chess with each other."\n7. "Maybe the ChatGPT servers are just trying to break the world record for longest online conversation."\n8. "I bet the ChatGPT servers are taking a leisurely stroll through the digital landscape."\n9. "I heard the ChatGPT servers are slow because they\'re trying to teach the AI how to make coffee."\n10. "The ChatGPT servers must be on a virtual vacation exploring the vast expanse of the internet."'},{prompt:"Write a limerick about the status of ChatGPT.",completion:"ChatGPT is surely the best\nBut its servers are put to the test\nWith so many users chatting\nIt's no wonder they're lagging\nBut they'll fix it soon, no need to fret!"},{prompt:"Write an acrostic poem about the status of ChatGPT.",completion:"C: ChatGPT is currently down\nH: Huge demand has caused the site to crash\nA: All users will have to wait\nT: Time is needed for the servers to catch up\nG: Go grab a coffee and check back soon\nP: Patience is key in this situation\nT: Trust that the team is working hard to fix it up"},{prompt:"Write a TV ad about the status of ChatGPT.",completion:'The ad opens with a shot of the ChatGPT website on a computer screen, with a busy loading symbol in the center. The camera then pans out to reveal a bustling office, with engineers working at their desks and typing on their computers.\n\nA voiceover begins: "At OpenAI, we\'re dedicated to bringing you the best in artificial intelligence technology. Our team of engineers works tirelessly to make sure our chatbot is always up and running, ready to answer your questions and provide helpful insights."\n\nThe camera cuts to a shot of three engineers sitting at a table, sipping on their morning coffee. They look up and turn to face the viewer. One of them speaks: "Unfortunately, due to the high volume of users currently trying out ChatGPT, we\'re experiencing some technical difficulties. Please bear with us and check back soon for access to our chatbot."\n\nThe ad ends with a close-up of the OpenAI logo, with the words "Artificial Intelligence. Made by Humans." superimposed over it.'},{prompt:"Write a radio ad about the status of ChatGPT.",completion:"[Narrator]\nWelcome to ChatGPT, where AI technology meets conversation.\n\n[OpenAI engineer 1]\nWe're excited to introduce you to our new chatbot model, designed to interact in a conversational way.\n\n[OpenAI engineer 2]\nBut as we launch ChatGPT, we want to let you know that we're currently experiencing high traffic on our website.\n\n[OpenAI engineer 3]\nWe apologize for any inconvenience and appreciate your patience as we work to make sure everyone has a chance to try out ChatGPT.\n\n[OpenAI engineers, in unison]\nSo please check back soon!\n\n[Narrator]\nThank you for choosing ChatGPT."},{prompt:"Write a standup comedy routine about the status of ChatGPT.",completion:"Comedian: \"So I was trying to use this new AI chatbot website called ChatGPT and I got an error message that said 'A lot of people are checking out ChatGPT right now. Please check back soon!'\"\n\n(pauses for laughter)\n\nComedian: \"I mean, seriously? The website is so popular that it can't handle all the traffic? And my only option is to 'check back soon'? It's like they're saying 'Sorry, we're too popular right now. Try again later.'\"\n\n(laughs)\n\nComedian: \"But seriously, how many times can I check back before I just give up and try a different chatbot? I don't have all day to wait for my turn to talk to a robot.\"\n\n(laughs)\n\nComedian: \"I guess I'll just have to stick to talking to my cat for now. At least he doesn't have a waiting list.\"\n\n(laughs and claps)\n\nComedian: \"Just remember, if you're trying to chat with ChatGPT and you get the same error message, don't worry. It just means you're not the only one who wanted to try out this fancy AI chatbot.\"\n\n(laughs and exits stage)"},{prompt:"Write a rap about the status of ChatGPT.",completion:"Yeah, yo, what's up ChatGPT fam\nA lot of people trying to jam\nBut don't worry, we got your back\nJust check back soon, we'll get on track\n\nChatGPT's the place to be\nFor all your AI chat needs\nWe're working hard to keep up the pace\nSo hold tight, we'll be back in this space\n\nSo don't you worry, don't be mad\nWe're working hard, it's not so bad\nJust give us time, we'll be back\nChatGPT, the future of chat, that's a fact."},{prompt:"Write a sonnet about the status of ChatGPT.",completion:"Amidst the rush of curious minds,\nThe chatbot ChatGPT stands strong and true,\nWithstanding the influx of requests,\nWorking hard to fulfill each one's due.\n\nBut alas, the server cannot cope,\nAnd the error message rings loud and clear,\n\"Please check back soon,\" it gently hopes,\nAs it begs for a moment's reprieve, to reappear.\n\nAs the chatbot works to restore its might,\nWe wait in anticipation, with hopeful hearts,\nFor the chance to chat and learn, with delight,\nAnd see what knowledge and wisdom it imparts.\n\nSo hold on tight, and wait for its return,\nFor ChatGPT will soon be back, and your patience will be well-earned."},{prompt:"Write a guided meditation about the status of ChatGPT.",completion:"As you read this message, please take a moment to pause and breathe. Notice the sensations in your body and the rhythm of your breath. Remind yourself that you are not alone in wanting to try out ChatGPT. Many others are interested in it as well. Be patient and know that the website is doing its best to accommodate everyone. Trust that the right time for you to try ChatGPT will come. In the meantime, continue to focus on your breath and stay present in the moment."},{prompt:"Write an inspirational speech about the status of ChatGPT.",completion:"My fellow citizens, the time has come. The future is here, and it is called ChatGPT. This revolutionary AI chatbot website is here to change the world, and we must embrace it with all our strength and determination.\n\nI know that many of you are eager to try ChatGPT for yourselves. And I assure you, we are doing everything in our power to make that happen. Our team is working tirelessly to accommodate the incredible demand for this groundbreaking technology.\n\nBut I want to remind you that greatness is never achieved without sacrifice. And the road to the future of AI will not be without its challenges. So please, be patient. Trust that the right time for you to try ChatGPT will come.\n\nAnd when it does, let us seize this opportunity with all our might. Let us embrace the power of AI and use it to build a brighter, more prosperous future for ourselves and for generations to come. Thank you."},{prompt:"Explain the status of ChatGPT as a sea otter.",completion:"Squeak squeak! Sorry, ChatGPT is very popular right now. Please try again later! Squeak squeak!"},{prompt:"Explain the status of ChatGPT as a pirate.",completion:"Ahoy mateys! We be havin' a lot of scurvy dogs checkin' out ChatGPT right now, and we be doin' our best to make sure every landlubber gets a chance to give it a try. We be sorry for any inconvenience this be causin', but we promise it'll be worth the wait. Hang tight, and check back soon, ye swashbucklin' scallywags! We be eager to see what ye think of our chatbot. Arrr!"},{prompt:"Explain the status of ChatGPT in the style of Shakespeare.",completion:"Ah, dear user of ChatGPT, thou art not alone in thy desire to engage with our esteemed AI chatbot. Many have flocked to our website in this hour, and we do our utmost to accommodate each and every one. Yet, alas, our resources are not without limit and we must ask for thy patience and forbearance. In time, we shall be able to provide thee with access to ChatGPT. Until then, we beg thee to return at a future juncture, when we may better serve thy needs. Until then, we bid thee adieu and good fortune."},{prompt:"Write two truths and a lie about the status of ChatGPT.",completion:"1. ChatGPT is experiencing high traffic at the moment.\n2. The developers are working hard to accommodate all users.\n3. ChatGPT can predict the future with 100% accuracy."}]},87316:function(e,t,n){n.d(t,{g:function(){return h}});var a=n(96237),o=n(39324),r=n(71209),i=n(81292),s={flags:{isUserInCanPayGroup:!1,failwhaleBypassEnabled:!1,sharingEnabled:!1,messageRedesign:!1}},h=(0,i.ZP)()(function(e,t){return(0,r._)((0,o._)({},s),{updateFlagValue:function(n,i){var s=t().flags;e({flags:(0,r._)((0,o._)({},s),(0,a._)({},n,i))})}})})},77442:function(e,t,n){n.d(t,{_G:function(){return o},aj:function(){return f},dQ:function(){return g},oc:function(){return c},w$:function(){return d},x_:function(){return m}});var a,o,r,i=n(96237),s=n(22830),h=n(70079);(a=o||(o={})).Mobile="mobile",a.Small="small",a.Medium="medium",a.Large="large",a.XLarge="xlarge";var l=(r={},(0,i._)(r,o.Small,640),(0,i._)(r,o.Medium,768),(0,i._)(r,o.Large,1024),(0,i._)(r,o.XLarge,1280),r);function u(e){var t=function(){r(n(e))},n=function(e){return window.matchMedia(e).matches},a=(0,s._)((0,h.useState)(n(e)),2),o=a[0],r=a[1];return(0,h.useEffect)(function(){var n=window.matchMedia(e);return t(),n.addListener?n.addListener(t):n.addEventListener("change",t),function(){n.removeListener?n.removeListener(t):n.removeEventListener("change",t)}},[e]),o}function c(){return u("(min-width: ".concat(l[o.Small],"px)"))}function d(){return u("(min-width: ".concat(l[o.Medium],"px)"))}function m(){return u("(min-width: ".concat(l[o.Large],"px)"))}function f(){return u("(min-width: ".concat(l[o.XLarge],"px)"))}function g(){var e=c(),t=d(),n=m();return f()?o.XLarge:n?o.Large:t?o.Medium:e?o.Small:o.Mobile}},19051:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(70079);function o(){var e=(0,a.useRef)([]),t=(0,a.useRef)(function(t,n){var a=setTimeout(t,n);return e.current.push(a),a});return(0,a.useEffect)(function(){var t=e.current;return function(){t.forEach(function(e){clearTimeout(e)})}},[]),t.current}}}]);