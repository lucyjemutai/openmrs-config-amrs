"use strict";(globalThis.webpackChunk_ohri_openmrs_esm_ohri_pmtct=globalThis.webpackChunk_ohri_openmrs_esm_ohri_pmtct||[]).push([[616],{7408:(t,n,e)=>{e.a(t,(async(t,r)=>{try{e.d(n,{bL:()=>s,bo:()=>u,bq:()=>f,fX:()=>a,g3:()=>l,g9:()=>p,lP:()=>d});var i=e(2870);e(8821);var o="/ws/rest/v1/";function a(t){return(0,i.openmrsFetch)("/ws/rest/v1/idgen/identifiersource/".concat(t,"/identifier"),{headers:{"Content-Type":"application/json"},method:"POST",body:{}})}function c(t){return(0,i.openmrsFetch)("/ws/rest/v1/patient",{headers:{"Content-Type":"application/json"},method:"POST",body:t})}function u(t){return Promise.all(t.map((function(t){return c(t)})))}function s(t){return(0,i.openmrsFetch)("/ws/rest/v1/relationship",{headers:{"Content-Type":"application/json"},method:"POST",body:t})}function d(t){return(0,i.openmrsFetch)("".concat(o,"/patient/").concat(t,"/identifier")).then((function(t){var n=t.data;return n.results.length?n.results:null}))}function l(t,n){return(0,i.openmrsFetch)("".concat(o,"patient/").concat(n,"/identifier"),{headers:{"Content-Type":"application/json"},method:"POST",body:t})}function p(t){return(0,i.openmrsFetch)("".concat(o,"patient?identifier=").concat(t,"&v=custom:(identifiers:(identifier,identifierType:(uuid,display)),person:(uuid,display))")).then((function(t){return t.data||null}))}function f(t,n,e){var r="patient=".concat(t,"&code=").concat(n).concat(e?"&encounter.type=".concat(e):"");return r+="&_sort=-_lastUpdated&_count=1",(0,i.openmrsFetch)("/ws/fhir2/R4/Observation?".concat(r)).then((function(t){var n,e,r=t.data;return(null===(n=r.entry)||void 0===n?void 0:n.length)?null===(e=r.entry[0].resource.valueCodeableConcept.coding[0])||void 0===e?void 0:e.display:null}))}await(0,i.getConfig)("@ohri/openmrs-esm-ohri-pmtct"),r()}catch(h){r(h)}}),1)},3616:(t,n,e)=>{e.a(t,(async(t,r)=>{try{e.r(n),e.d(n,{generateInfantPTrackerId:()=>a,getIdentifierAssignee:()=>c});var i=e(7408),o=t([i]);i=(o.then?(await o)():o)[0];var a=function(t,n){if(t&&n)return"infantPtrackerid"===t?n+"1":t.includes("_")?n.concat((Number(t.split("_")[1])+1).toString()):void 0},c=function(t,n){return(0,i.g9)(t).then((function(e){if(e){var r=!0,i=!1,o=void 0;try{for(var a,c=e.results[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var u=a.value,s=!0,d=!1,l=void 0;try{for(var p,f=u.identifiers[Symbol.iterator]();!(s=(p=f.next()).done);s=!0){var h=p.value;if(h.identifier===t&&h.identifierType.uuid===n)return u.person}}catch(t){d=!0,l=t}finally{try{s||null==f.return||f.return()}finally{if(d)throw l}}}}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return{}}return{}}))};r()}catch(t){r(t)}}))}}]);