(()=>{"use strict";var e={110:(e,t,o)=>{o.d(t,{Lp:()=>c,CK:()=>s,FI:()=>d});let n=document.querySelector("#notes"),r='<div id="add"><i class="fas fa-plus-circle" data-toggle="modal" data-target="#addCategory"></i></div>\n<h4>Priority</h4>\n<h4>Due Date</h4>\n<h2 id="note-heading">Notes</h2>\n\n';n.innerHTML=r;let a=(e,t,o)=>({description:e,dueDate:t,priority:o}),l=function(){notes.innerHTML=r,s.sort(((e,t)=>"High"==e.priority?-1:"High"==t.priority?1:"Med"==e.priority?-1:"Med"==t.priority?1:-1)),s.forEach((e=>{var t;notes.innerHTML+=`<div class="note">\n    <p class="notePriority"><i class="fa fa-circle small-circle" aria-hidden="true"></i>\n    ${(t=e).priority}</p>\n    <p class="noteDueDate">${t.dueDate} </p>\n    <p><i class="far fa-circle"></i>${t.description}</p>\n    </div>`})),function(){let e=document.querySelectorAll(".small-circle");for(let t=0;t<e.length;t++)console.log(e[t].parentElement.textContent.trim()),"High"==e[t].parentElement.textContent.trim()?e[t].style.color="Red":"Med"==e[t].parentElement.textContent.trim()?e[t].style.color="Gold":e[t].style.color="Green";notes.innerHTML+='<div id="add-note" data-toggle="modal" data-target="#exampleModalCenter">\n    <p><i class="fas fa-plus" data-toggle="modal" data-target="#exampleModalCenter"></i>Add Note</p>\n</div>'}()};function i(){let e=document.querySelectorAll("#categories p");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>{e.style.backgroundColor="#f1faee"})),t.style.backgroundColor="#caf0f8",s!=t.textContent&&(s="Main"==t.textContent?c[d]:c[t.textContent],console.log(s),l())}))}))}document.querySelector("#save-note").addEventListener("click",(function(){let e=document.querySelector("#note-description"),t=document.querySelector("#notePriority"),o=document.querySelector("#due-date"),n=a(e.value,o.value,t.value);"Medium"==t.value&&(console.log("HI!"),n=a(e.value,o.value,"Med")),function(e){s.push(e)}(n),l(),e.value="",t.value="Default select"})),document.querySelector("#saveCategory").addEventListener("click",(function(){let e=document.querySelector("#categoryName").value;c[e]=[],function(e){let t=`<p><i class="fas fa-star"></i>${e}</p>`;document.querySelector("#categories").innerHTML+=t}(e),i()}));let c=[],d=[],s=d;c[d]=[],s=c[d],i(),l()}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(110)})();