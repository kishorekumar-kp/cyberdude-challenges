(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const o=document.forms.jobApplication;document.querySelector("#submit");const l=document.querySelector("#output"),u=document.querySelector(".greenBtn"),a=document.querySelector(".redBtn");o.addEventListener("submit",c=>{c.preventDefault();const r=new FormData(o),n=Object.fromEntries(r);console.log(n);for(const s in n){const e=document.getElementById("span"+s);e&&(e.innerText=n[s])}l.className=" w-10/12  bg-gray-700 p-10 my-10 mx-32 text-white  bottom-1 ",o.className="hidden",console.log("form submitted")});a.addEventListener("click",c=>{l.className="hidden",o.className="mt-7 mx-10 p-5 text-lg"});u.addEventListener("click",c=>{l.className="hidden",o.className="mt-7 mx-10 p-5 text-lg",o.reset(),alert("You have successfully applied a job")});
