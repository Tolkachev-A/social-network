"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[521],{7521:function(e,r,n){n.r(r),n.d(r,{default:function(){return S}});var s=n(2791),t="pagination_listItemNum__BQa9b",a="pagination_paginationBlock__eRVYo",i="pagination_active__4dGAl",o=n(7025),u=n(8499),c=(0,u.Z)(s.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),l=(0,u.Z)(s.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),d=n(2067),p=n(8096),m=n(1261),f=n(6315),h=n(184),j=s.memo((function(e){var r=(0,m.T)(),n=(0,s.useMemo)((function(){for(var r=Math.ceil(e.totalCount/e.pageSize),n=[],s=1;s<=r;s++)n.push(s);return{portions:Math.ceil(r/10),arrayPages:n}}),[e.totalCount,e.pageSize]),u=n.portions,j=n.arrayPages,x=10*(e.portionsNumber-1)+1,b=10*e.portionsNumber,g=j.filter((function(e){return e>=x&&e<=b})).map((function(n,s){return(0,h.jsx)(p.Z,{button:!0,className:n===e.currentPage?"".concat(i," ").concat(t):t,onClick:function(){return r((0,f.D4)(n))},children:n},s)}));return(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)(o.Z,{color:"primary","aria-label":"upload picture",component:"span",disabled:e.portionsNumber<2,onClick:function(){r((0,f.kc)(e.portionsNumber-1))},children:(0,h.jsx)(c,{})}),(0,h.jsx)(d.Z,{children:g}),(0,h.jsx)(o.Z,{color:"primary","aria-label":"upload picture",component:"span",disabled:e.portionsNumber===u,onClick:function(){r((0,f.kc)(e.portionsNumber+1))},children:(0,h.jsx)(l,{})})]})})),x=n(4769),b=n(272),g=n(3755),C=n(9526),N=n(1288),Z=n(6513),v=n(4814),k=n(3504),P=s.memo((function(e){var r=(0,m.T)();return(0,h.jsx)("div",{children:(0,h.jsx)(C.Z,{elevation:3,children:(0,h.jsxs)(N.Z,{container:!0,className:v.Z.user,children:[(0,h.jsxs)(N.Z,{item:!0,md:2,className:v.Z.userBlock,children:[(0,h.jsx)(k.OL,{to:"/profile/".concat(e.users.id),children:(0,h.jsx)(b.Z,{className:v.Z.avatar,alt:"Remy Sharp",src:e.users.photos.small||g})}),(0,h.jsx)(Z.Z,{className:v.Z.button,variant:"outlined",color:"primary",size:"small",disabled:"fail"===e.authorizedStatus||e.userSubscription.some((function(r){return r===e.users.id})),onClick:function(){e.users.followed?r((0,f.oR)(e.users.id)):r((0,f.cF)(e.users.id))},children:e.users.followed?"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]}),(0,h.jsxs)(N.Z,{item:!0,md:10,className:v.Z.userInfo,children:[(0,h.jsx)(k.OL,{to:"/profile/".concat(e.users.id),children:(0,h.jsx)("div",{className:v.Z.userName,children:e.users.name})}),(0,h.jsxs)("div",{children:["\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",e.users.status?e.users.status:"\u043d\u0435\u0442\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"]})]})]})})})})),S=function(){var e=(0,m.T)(),r=(0,m.C)((function(e){return e.usersPage.items})),n=(0,m.C)((function(e){return e.usersPage.totalCount})),t=(0,m.C)((function(e){return e.usersPage.pageSize})),a=(0,m.C)((function(e){return e.usersPage.currentPage})),i=(0,m.C)((function(e){return e.usersPage.userSubscription})),o=(0,m.C)((function(e){return e.usersPage.portionsNumber})),u=(0,m.C)((function(e){return e.app.isLoading})),c=(0,m.C)((function(e){return e.app.authorizedStatus}));(0,s.useEffect)((function(){e((0,f.FQ)(a))}),[a]);var l=r.map((function(e){return(0,h.jsx)(P,{users:e,authorizedStatus:c,userSubscription:i},e.id)}));return u?(0,h.jsx)(x.g,{}):(0,h.jsxs)("div",{children:[l,(0,h.jsx)(j,{currentPage:a,totalCount:n,pageSize:t,portionsNumber:o})]})}}}]);
//# sourceMappingURL=521.6b33550d.chunk.js.map