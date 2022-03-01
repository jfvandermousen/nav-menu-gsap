var t1 = gsap.timeline({paused:true});

var toggleMenu = document.getElementById('toggle-menu');

var menuBar =gsap.timeline();




menuBar.to('.bar1',0.5, {
    attr:{d:"M8,2 L2,8"},
    x:1,
    ease:Power2.easeInOut
},'start')

menuBar.to('.bar2',0.5, {
    autoAlpha:0
},'start')


menuBar.to('.bar3',0.5, {
    attr:{d:"M8,8 L2,2"},
    x:1,
    ease:Power2.easeInOut
},'start')

t1.to('.fullpage-nav', {
    duration:0,
    display:"block",
    ease:"Expo.easeInOut",
})

t1.from('.menu-bg span', {
    duration:1,
    x:"100%",
    stagger: 0.1,
    ease:"Expo.easeInOut",
})


t1.from('.main-menu li a', {
    duration:1.5,
    y:"100%",
    stagger: 0.2,
    ease:"Expo.easeInOut",
},"-=0.5")


t1.from('.social-links li ', {
    duration:1,
    y:"-100%",
    opacity: 0,
    stagger: 0.1,
    ease:"Expo.easeInOut",
},"-=0.5")

toggleMenu.addEventListener('click',function(){
    menuBar.reversed(!menuBar.reversed());
    t1.reversed(!t1.reversed());
})

menuBar.reverse();

t1.reverse();


/* 

menuBar.to('.bar1', {
    rotation:45,duration:0.5,ease:"Power2.easeInOut"
})

menuBar.to('.bar3', {
    rotation:-45,duration:0.5,ease:"Power2.easeInOut"
})

menuBar.to('.bar2', {
    autoAlpha:0,
    duration:0,ease:"Power2.easeInOut"
})
*/


