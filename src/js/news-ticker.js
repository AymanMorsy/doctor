const lastChild = $('.ticker span:last-child').offsetParent.offsetLeft 

var sheet = document.createElement('style')
sheet.innerHTML = `@keyframes tikker { to {left: calc(${-(lastChild)}px + 300vw)}`;
document.head.appendChild(sheet);
window.addEventListener('resize',()=>{
    document.head.appendChild(sheet);

})
