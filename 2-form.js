import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},t=document.querySelector(".feedback-form"),o=localStorage.getItem("feedback-form-state");if(o!==null){let e;try{e=JSON.parse(o)}catch(r){console.log(r)}t.email.value=e.email,t.message.value=e.message,a.email=e.email,a.message=e.message}t.addEventListener("input",s);t.addEventListener("submit",m);function s(e){if(e.target.nodeName!=="BUTTON"&&(e.target.nodeName==="INPUT"||e.target.nodeName==="TEXTAREA")){a.email=e.currentTarget.email.value.trim(),a.message=e.currentTarget.message.value.trim();const r=JSON.stringify(a);window.localStorage.setItem("feedback-form-state",r)}}function m(e){if(e.preventDefault(),Object.values(a).includes("")){window.alert("Fill please all fields!");return}console.log(a),localStorage.removeItem("feedback-form-state"),t.reset(),Object.keys(a).forEach(l=>a[l]="")}
//# sourceMappingURL=2-form.js.map
