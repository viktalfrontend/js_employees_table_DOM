var e,t=document.querySelector("body"),r=document.createElement("form"),n=document.createElement("button");t.appendChild(r),r.classList.add("new-employee-form");var o=t.querySelector("form"),a=document.querySelectorAll("thead th"),c=document.querySelector("tbody"),i=Array.from(c.querySelectorAll("tr"));s();var u=-1;function l(e,t,r){i.sort(function(n,o){var a=n.querySelectorAll("td")[e].textContent.trim(),c=o.querySelectorAll("td")[e].textContent.trim();return"number"===t?"ASC"===r?m(a)-m(c):m(c)-m(a):"ASC"===r?a.localeCompare(c):c.localeCompare(a)})}a.forEach(function(t,r){var a=document.createElement("label");o.appendChild(a),a.textContent=t.textContent+":";var d=t.textContent.trim().toLowerCase(),s="text";if((3===r||4===r)&&(s="number"),2!==r){var m=document.createElement("input");m.setAttribute("name",d),m.setAttribute("type",s),m.setAttribute("data-qa",d),(0===r||1===r)&&m.setAttribute("required",""),a.appendChild(m)}else{var f=document.createElement("select");f.setAttribute("name",d),f.setAttribute("data-qa",d),f.setAttribute("required",""),["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.textContent=e,f.appendChild(t)}),a.appendChild(f)}o.insertAdjacentElement("beforeend",n),n.textContent="Save to table",t.addEventListener("click",function(){switch(e=u!==r?"ASC":"ASC"===e?"DESC":"ASC",u=r,r){case 0:case 1:case 2:l(r,"text",e);break;case 3:case 4:l(r,"number",e)}i.forEach(function(e){return c.appendChild(e)})})}),n.onclick=function(e){e.preventDefault();var t=o.querySelectorAll("input, select"),n={};if(t.forEach(function(e){n[e.name]=e.value.trim()}),n.name.length<4){d("Error","Name should be at least 4 characters.","error");return}if(!n.position){d("Error","Position is required.","error");return}var a=parseInt(n.age,10);if(a<18){d("Error","Age should be at least 18.","error");return}if(a>90){d("Error","Age should not exceed 90.","error");return}var u=document.createElement("tr");Object.values(n).forEach(function(e,t){var r=document.createElement("td"),n=e;3===t&&(n=Number(e)),4===t&&(n="$".concat(Number(e).toLocaleString("en-US"))),r.textContent=n,u.appendChild(r)}),c.appendChild(u),d("Success","New employee added successfully.","success"),r.reset(),i=Array.from(c.querySelectorAll("tr")),s()};var d=function(e,t,r){var n=document.createElement("div");n.className="notification ".concat(r),n.setAttribute("data-qa","notification");var o=document.createElement("h2");o.className="title",o.textContent=e;var a=document.createElement("p");a.textContent=t,n.appendChild(o),n.appendChild(a),document.body.appendChild(n),setTimeout(function(){n.remove()},3e3)};function s(){i.forEach(function(e){e.addEventListener("click",function(){i.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})})}function m(e){return Number(e.replace(/[^0-9.-]+/g,""))}
//# sourceMappingURL=index.10fd060a.js.map
