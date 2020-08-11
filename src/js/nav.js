$('.ham').addEventListener('click',()=>{
    $('nav').classList.toggle("active")
    $('.ham').classList.toggle("active")
})

// services //

$('.snip1401').addEventListener('mouseleave',()=>{
    $('.snip1401').classList.remove("hover")
})

let myName = ()=> console.log("AymanMorsy")