function resNav(){
    var tl = gsap.timeline()

var menu = document.querySelector("#nav-menu i");
var full = document.querySelector('#full')
var cross = document.querySelector("#full i");

tl.to("#full", {
    right: 0,
    duration: 0.5,
    display: "block",
})

tl.from("#full h2", {
    x: 100,
    duration: 0.3,
    stagger: .2,
    opacity: 0,
})

tl.from("#full i", {
    x: 100,
    duration: 0.2,
    opacity: 0,
})

tl.pause();

menu.addEventListener('click', function () {
    tl.play();
})

cross.addEventListener('click', function () {
    tl.reverse()
})

}

resNav();



