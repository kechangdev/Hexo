import{initTocToggle as e}from"../tools/tocToggle.js";import{main as t}from"../main.js";export function initTOC(){const o={navItems:document.querySelectorAll(".post-toc-wrap .post-toc li"),updateActiveTOCLink(){if(!Array.isArray(o.sections))return;let e=o.sections.findIndex((e=>e&&e.getBoundingClientRect().top-100>0));-1===e?e=o.sections.length-1:e>0&&e--,this.activateTOCLink(e)},registerTOCScroll(){o.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map((e=>document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))))},activateTOCLink(e){const t=document.querySelectorAll(".post-toc li a.nav-link")[e];if(!t||t.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach((e=>{e.classList.remove("active","active-current")})),t.classList.add("active","active-current");const o=document.querySelector(".toc-content-container"),n=o.getBoundingClientRect().top,i=o.offsetHeight>window.innerHeight?(o.offsetHeight-window.innerHeight)/2:0,c=t.getBoundingClientRect().top-n-Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2+t.offsetHeight/2-i,r=o.scrollTop+c;o.scrollTo({top:r,behavior:"smooth"})},showTOCAside(){const o=()=>{const o=t.getStyleStatus(),n="isOpenPageAside";o&&o.hasOwnProperty(n)?e().pageAsideHandleOfTOC(o[n]):e().pageAsideHandleOfTOC(!0)},n="init_open";theme.articles.toc.hasOwnProperty(n)?theme.articles.toc[n]?o():e().pageAsideHandleOfTOC(!1):o()}};return o.navItems.length>0?(o.showTOCAside(),o.registerTOCScroll()):document.querySelectorAll(".toc-content-container, .toc-marker").forEach((e=>{e.remove()})),o}try{swup.hooks.on("page:view",(()=>{initTOC()}))}catch(o){}document.addEventListener("DOMContentLoaded",initTOC);