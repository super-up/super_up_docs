"use strict";(self.webpackChunksuper_up_docs=self.webpackChunksuper_up_docs||[]).push([[563],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(k,r(r({ref:n},s),{},{components:t})):i.createElement(k,r({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3},r="Backend",l={unversionedId:"backend/backend",id:"backend/backend",title:"Backend",description:"Requirements",source:"@site/docs/backend/backend.md",sourceDirName:"backend",slug:"/backend/",permalink:"/super_up_docs/docs/backend/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Flutter",permalink:"/super_up_docs/docs/flutter/"}},p={},d=[{value:"Requirements",id:"requirements",level:3},{value:".env file",id:"env-file",level:3},{value:"privacy-policy",id:"privacy-policy",level:3},{value:"firebase admin file",id:"firebase-admin-file",level:3},{value:"Obtaining OneSignal Keys",id:"obtaining-onesignal-keys",level:3},{value:"Running the Code (Without Docker)",id:"running-the-code-without-docker",level:3},{value:"Deploy web",id:"deploy-web",level:3},{value:"Running the Code (With Docker)",id:"running-the-code-with-docker",level:3},{value:"Common Errors",id:"common-errors",level:3}],s={toc:d},c="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backend"},"Backend"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Node.js (version ",(0,a.kt)("inlineCode",{parentName:"p"},"v16.x")," or to ",(0,a.kt)("inlineCode",{parentName:"p"},"19.x"),") and npm. Check the Node.js version using ",(0,a.kt)("inlineCode",{parentName:"p"},"node -v"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install only if you not ",(0,a.kt)("inlineCode",{parentName:"p"},"docker user")," cross-env ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g cross-env")," for managing production or development\nenvironments and pm2 for manage production deploy by ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g pm2"),"\nCLI (",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g @nestjs/cli"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/try/download/community-kubernetes-operator"},"MongoDB")," (minimum ",(0,a.kt)("inlineCode",{parentName:"p"},"v4.4"),",\nrecommended ",(0,a.kt)("inlineCode",{parentName:"p"},"v6"),")."))),(0,a.kt)("h3",{id:"env-file"},".env file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'DB_URL="YOUR_MONGO_URL"\nJWT_SECRET="STRONG_PASSWORD"\n\nissuer="your gmail"\naudience="your gmail"\n\nNODE_ENV="production" # dont update it\nEDIT_MODE ="false" # set to false\nignoreEnvFile="false"  # set to true if you will inject the env values from system os\nPORT=80 //exposed port\n\n#Admin panel passwords be carfaul\nControlPanelAdminPassword= "xxxxxxxxxxxxx" # put strong password for admin who can edit and update any thing in the app\nControlPanelAdminPasswordViewer= "xxxxxxxxxx-xxxx" # put strong password for admin that can only read(see ,users data,chats data etc...) he cannot update any thing\n\nisOneSignalEnabled ="false" # set to true if you can provide oneSignalAppId and oneSignalApiKey to enable push by onesignal\nisFirebaseFcmEnabled ="false" # set to true if you provide the firebase admin.json file\noneSignalAppId="xxxxxxxxx-xxxxx-xxxxx-xxxx-xxxxxxxxx"\noneSignalApiKey="xxxxxxxxx"\n\n# SET THE Email data to let use use forget password OTP\nEMAIL_HOST="EMAIL HOST FROM THE PROVIDER COMPANY"\nEMAIL_USER="YOUR EMAIL USER"\nEMAIL_PASSWORD="EMAIL USER PASSWORD"\n\n# SET AGORA API KEYS\nAGORA_APP_ID=""\n# Get this from agora app console `Primary Certificate` value\nAGORA_APP_CERTIFICATE=""\n')),(0,a.kt)("h3",{id:"privacy-policy"},"privacy-policy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can update your privacy privacy page in the source code inside"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/privacy-policy.html")," this will be the ",(0,a.kt)("inlineCode",{parentName:"li"},"privacy-policy")," of your app"),(0,a.kt)("li",{parentName:"ul"},"You can edit it inside ",(0,a.kt)("inlineCode",{parentName:"li"},"public/privacy-policy.html")),(0,a.kt)("li",{parentName:"ul"},"You can edit the home inside ",(0,a.kt)("inlineCode",{parentName:"li"},"public/home.html")," you can access it ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"))),(0,a.kt)("h3",{id:"firebase-admin-file"},"firebase admin file"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure the firebase account is the same as the one used in flutter app."),(0,a.kt)("li",{parentName:"ol"},"To ensure chat notifications work properly, follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cXOzbKDXTh0"},"this video")," to\nobtain the ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase.adminsdk.json")," file."),(0,a.kt)("li",{parentName:"ol"},"Replace the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase.adminsdk.json")," file with your new one."),(0,a.kt)("li",{parentName:"ol"},"open your account in ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase")," then enable the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud Messaging API (Legacy)")," from\n",(0,a.kt)("img",{src:t(2247).Z,width:"1866",height:"910"}),(0,a.kt)("img",{src:t(5992).Z,width:"857",height:"697"}))),(0,a.kt)("h3",{id:"obtaining-onesignal-keys"},"Obtaining OneSignal Keys"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Firebase account and follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FOkgfsTwvC4"},"this video")," to obtain OneSignal\nkeys.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the following fields with your OneSignal keys:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'oneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"\noneSignalApiKey="xxxxxxxxxxxx"\n')))),(0,a.kt)("h3",{id:"running-the-code-without-docker"},"Running the Code (Without Docker)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a terminal in the ",(0,a.kt)("inlineCode",{parentName:"li"},"backend")," root folder."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i --force")," if issues occur."),(0,a.kt)("li",{parentName:"ol"},"Generate a ",(0,a.kt)("inlineCode",{parentName:"li"},"dist")," folder ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run start:prod"),". for live console logs if you run in production mode. in your vps server then you should\nrun ",(0,a.kt)("inlineCode",{parentName:"li"},"pm2 start ecosystem.config.js --only normal --env production"),". to see logs run ",(0,a.kt)("inlineCode",{parentName:"li"},"pm2 logs")),(0,a.kt)("li",{parentName:"ol"},"If you see ",(0,a.kt)("inlineCode",{parentName:"li"},"app run in production,")," your code is production-ready."),(0,a.kt)("li",{parentName:"ol"},"Access the development server at ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:80")," and production server at port ",(0,a.kt)("inlineCode",{parentName:"li"},"80"),". Update the port\nin ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," if necessary."),(0,a.kt)("li",{parentName:"ol"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file if using Docker, and ensure you update the environment variable in the OS (env).")),(0,a.kt)("h3",{id:"deploy-web"},"Deploy web"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"run the flutter code to build the web version inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"super_up_app")," folder"),(0,a.kt)("li",{parentName:"ol"},"run this code ",(0,a.kt)("inlineCode",{parentName:"li"},"flutter build web --web-renderer html")),(0,a.kt)("li",{parentName:"ol"},"now you can find the html folder inside the build folder you need to upload it to your server"),(0,a.kt)("li",{parentName:"ol"},"your server can your vps server you can use nginx to deploy your web code and admin code")),(0,a.kt)("h3",{id:"running-the-code-with-docker"},"Running the Code (With Docker)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com"},"Docker")," and Docker Compose."),(0,a.kt)("li",{parentName:"ol"},"update ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," this keys from ",(0,a.kt)("inlineCode",{parentName:"li"},"mongodb://127.0.0.1:27017/v_chat_sdk_v2"),"\nto ",(0,a.kt)("inlineCode",{parentName:"li"},"mongodb://v_mongodb:27017/v_chat_sdk_v2")),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," if Docker is already installed on your system. Note that this only sets up v_chat_sdk and\ndoesn't include MongoDB or Redis. You need to manage these separately OR."),(0,a.kt)("li",{parentName:"ol"},"Use a ",(0,a.kt)("inlineCode",{parentName:"li"},"compose file")," witch manage all dependency together."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up")," to start the containers and view logs, or run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to run in the\nbackground.")),(0,a.kt)("h3",{id:"common-errors"},"Common Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you encounter the error ",(0,a.kt)("inlineCode",{parentName:"p"},'ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist'),", it means NestJS\ncannot read your ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," file."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To fix this, ensure you have injected the environment variable or that ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," exists in the root of the\nproject. It may be ignored by .git."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you see the\nerror ",(0,a.kt)("inlineCode",{parentName:"p"},"The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services"),"\n,it means you have enabled FCM but have not ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cXOzbKDXTh0"},"configured")," it."))),(0,a.kt)("admonition",{title:"Contact me",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Iam offer paid full server side setup\nSupport email",(0,a.kt)("inlineCode",{parentName:"p"},"hatemragapdev@gmail.com"),"\nOr on Skype at ",(0,a.kt)("inlineCode",{parentName:"p"},"live:.cid.607250433850e3a6"))))}u.isMDXComponent=!0},2247:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/firebase1-deaf911889a9f99f72e73715b4126b76.png"},5992:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/firebase2-c08907efabbd2abeb4905b9c66b2c6c5.png"}}]);