(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.forms.jobApplication,u=document.querySelector("#submit"),l=document.querySelector("#output"),a=document.querySelector(".greenBtn"),d=document.querySelector(".redBtn");document.querySelector("#spanfirstName");document.querySelector("main");c.addEventListener("submit",o=>{o.preventDefault();const r=new FormData(c),n=Object.fromEntries(r);console.log(n);for(const s in n){const e=document.getElementById("span"+s);e&&(e.innerText=n[s])}console.log("form submitted")});u.addEventListener("click",o=>{console.log("clicked"),l.className=" w-10/12  bg-gray-700 p-10 my-10 mx-32 text-white  bottom-1 ",c.className="hidden",console.log(l.className)});d.addEventListener("click",o=>{l.className="hidden",c.className="mt-7 mx-10 p-5 text-lg"});a.addEventListener("click",o=>{l.className="hidden",c.className="mt-7 mx-10 p-5 text-lg",alert("you have successfully applied a job")});
