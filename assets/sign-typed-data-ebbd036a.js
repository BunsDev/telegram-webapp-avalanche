import{v as n}from"./session-request-2285efdc.js";import"./index-85f30e3b.js";async function o(e){const{account:a,params:t}=e;return n(a,t[0]),a.signTypedData(typeof t[1]=="string"?JSON.parse(t[1]):t[1])}export{o as handleSignTypedDataRequest};