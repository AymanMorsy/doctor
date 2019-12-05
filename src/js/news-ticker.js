const lastChild = document.querySelector('.ticker span:last-child').offsetParent.offsetLeft 
console.log('lastChild: ', lastChild);


var sheet = document.createElement('style')
sheet.innerHTML = `@keyframes tikker { to {left: calc(${-(lastChild)}px + 300vw)}`;
document.head.appendChild(sheet);
window.addEventListener('resize',()=>{
    document.head.appendChild(sheet);

})
