function resNav(){
var tl = gsap.timeline()

var menu = document.querySelector("#menu");
var optaion = document.querySelector('#option')
var cut = document.querySelector("#close");

tl.to("#option", {
    right: 0,
    duration: 1,
    display: "flex",
})

tl.from("#option h1", {
    x: 100,
    duration: 0.3,
    stagger: .2,
    opacity: 0,
})

tl.from("#option i", {
    x: 100,
    duration: 0.2,
    opacity: 0,
})

tl.pause();

menu.addEventListener('click', function () {
    tl.play();
})

cut.addEventListener('click', function () {
    tl.reverse()
})
}

function landingpage(){
    var tl = gsap.timeline();

tl.from("#nav",{
    y:-100,
    stagger: .2,
    duration:1,
})

tl.from("#content #left h2",{
    y:100,
    stagger:0.2,
    duration:.8,
})

tl.from("#content #left p",{
    x:-300,
    duration:.5,
})

tl.from("#btn2",{
    y:100,
    duration:.5,
})

gsap.from("#right img",{
    x:900,
    duration:1.5,
    delay:1,
})
}

resNav();
landingpage();