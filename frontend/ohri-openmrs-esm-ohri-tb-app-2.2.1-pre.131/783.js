"use strict";(globalThis.webpackChunk_ohri_openmrs_esm_ohri_tb_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_tb_app||[]).push([[783],{783:(e,r,t)=>{t.r(r),t.d(r,{ProgramEnrollmentSubmissionAction:()=>c,default:()=>d});var n=t(2870),o=t(9734),i=t(3565),l=t.n(i);function a(e,r,t,n,o,i,l){try{var a=e[i](l),s=a.value}catch(e){return void t(e)}a.done?r(s):Promise.resolve(s).then(n,o)}var s,u,c={applyAction:(s=function(e,r){var t,i,a,s,u,c,d,p,m,f,h,b,v,g,w,P,y;return function(e,r){var t,n,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=r.call(e,l)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(E){switch(E.label){case 0:return t=e.patient,i=e.encounters,a=e.sessionMode,p=i[0],m=p.location.uuid,"view"===a?[2]:(f=null===(u=p.obs)||void 0===u||null===(s=u.find((function(e){return e.formFieldPath.includes(r.enrollmentDate)})))||void 0===s?void 0:s.value,h=null===(d=p.obs)||void 0===d||null===(c=d.find((function(e){return e.formFieldPath.includes(r.completionDate)})))||void 0===c?void 0:c.value,(b=r.programUuid)?(v=new AbortController,g={patient:t.id,program:b,dateEnrolled:f?l()(f).format():null,dateCompleted:h?l()(h).format():null,location:m},"enter"!==a?[3,2]:[4,(0,o.getPatientEnrolledPrograms)(t.id)]):[3,5]);case 1:if((w=E.sent())&&w.results.some((function(e){return e.program.uuid===b&&null===e.dateCompleted})))throw new Error("Cannot enroll patient to program. Patient already has an active enrollment");return(0,o.createProgramEnrollment)(g,v).subscribe((function(e){201===e.status&&(0,n.showToast)({critical:!0,kind:"success",description:"It is now visible in the Programs table",title:"Program enrollment saved"})}),(function(e){(0,n.showToast)({title:"Error saving program enrollment",kind:"error",critical:!1,description:null==e?void 0:e.message})})),[3,4];case 2:return[4,(0,o.getPatientEnrolledPrograms)(t.id)];case 3:P=E.sent(),y=null,P&&(y=P.results.find((function(e){return e.program.uuid===b&&null===e.dateCompleted}))),y&&(g.dateEnrolled||(g.dateEnrolled=y.dateEnrolled),(0,o.updateProgramEnrollment)(y.uuid,g,v).subscribe((function(e){200===e.status&&(0,n.showToast)({critical:!0,kind:"success",description:"Changes to the program are now visible in the Programs table",title:"Program enrollment updated"})}),(function(e){(0,n.showToast)({title:"Error saving enrollment",kind:"error",critical:!1,description:null==e?void 0:e.message})}))),E.label=4;case 4:return[3,6];case 5:throw new Error("Please provide Program Uuid to enroll patient to.");case 6:return[2]}}))},u=function(){var e=this,r=arguments;return new Promise((function(t,n){var o=s.apply(e,r);function i(e){a(o,t,n,i,l,"next",e)}function l(e){a(o,t,n,i,l,"throw",e)}i(void 0)}))},function(e,r){return u.apply(this,arguments)})};const d=c}}]);