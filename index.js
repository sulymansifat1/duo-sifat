function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()

var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var video =document.querySelector(".video")
var elements = document.querySelectorAll('.p1, .p2, .p3, .p4');
const circlePointer = document.querySelector('.circle-pointer');


document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Add "magnetic" effect to the circle pointer
circlePointer.addEventListener('mouseenter', () => {
  document.addEventListener('mousemove', magnetize);
});

circlePointer.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', magnetize);
  gsap.to(circlePointer, {
      x: 0,
      y: 0,
      duration: 3,
      ease: "power3.out"
  });
});

function magnetize(e) {
  const rect = circlePointer.getBoundingClientRect();
  const relX = e.clientX - rect.left - rect.width / 2;
  const relY = e.clientY - rect.top - rect.height / 2;

  gsap.to(circlePointer, {
      x: relX * 3,
      y: relY * 3,
      duration: 3,
      ease: "power3.out"
  });
}




main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x + 20 +"px",
        y:dets.y + 20 +"px",
        duration:1,
        ease:"back.out"
    })
})


video.addEventListener("mouseover", function(dets){
    cursor.innerHTML = "sound on"
    gsap.to(cursor, {
      
        width: "80px",
        borderRadius: "30px",
        fontSize: "15px",
        textAlign: "center"
    })
    video.muted = false;
})

video.addEventListener("mouseleave", function(dets){
    cursor.innerHTML = ""
    gsap.to(cursor, {
      borderRadius: "50px",
      width: "20px",


    })
    video.muted = true;
})

video.addEventListener("click", function() {
  if (video.muted) {
      video.muted = false; // Unmute the video
      cursor.innerHTML = "sound on";
      gsap.to(cursor, {
          width: "80px",
          borderRadius: "30px",
          fontSize: "15px",
          textAlign: "center"
      });
  } else {
      video.muted = true; // Mute the video
      cursor.innerHTML = "sound off";
      gsap.to(cursor, {
          width: "80px",
          borderRadius: "30px",
          fontSize: "15px",
          textAlign: "center"
      });
  }
});

elements.forEach(function(element) {
  element.addEventListener("mouseover", function(dets) {
      cursor.innerHTML = "View";
      gsap.to(cursor, {
        
          width: "60px",
          borderRadius: "30px",
          fontSize: "15px",
          textAlign: "center",
          color: "white"
      });
  });

  element.addEventListener("mouseleave", function(dets) {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        borderRadius: "50px",
        width: "20px"
    });
});
});




tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1",{
    x: -50,
    filter: "blur(5px)" , 
    y: -10,
    rotate: 4,
    
},"anim")



tl.to(".page1 h2",{
    x: 50,
     filter: "blur(5px)"
    
}, "anim")

tl.to(".page1 p",{
     filter: "blur(5px)"
    
}, "anim")

tl.to(".page1 video",{
    width:"90%",
    y:-300
}, "anim")



tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page2",
      scroller: ".main",
      start: "top 120%",
      end: "top 130",
      scrub: 3
  }
})


tl2.to(".main ", {
  backgroundColor: "white"
})

tl2.to(".page2, h1,.page2 h2,.page2 p ", {
  color: "black"
})


tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page4",
      scroller: ".main",
      start: "top 55%",
      end: "top 130",
      scrub: 3
  }
})


tl3.to(".main ", {
  backgroundColor: "black"
  
})

tl3.to(".page4 h1", {
  color: "white"
})

tl3.to(".page3, .page4", {
  borderBottom: "2px solid white"
})


var text0 =document.querySelector(".text0")
var text1 =document.querySelector(".text1")
var text2 =document.querySelector(".text2")


text0.addEventListener("mouseover", function(dets) {
  
  gsap.to(".text0 h1", {
     color: "#EDBFFF"
  });
});

text0.addEventListener("mouseleave", function(dets) {
 
  gsap.to(".text0 h1", {
     color: "#FFF"
  });
});

text1.addEventListener("mouseover", function(dets) {
 
  gsap.to(".text1 h1", {
     color: "#EDBFFF"
  });
});

text1.addEventListener("mouseleave", function(dets) {

  gsap.to(".text1 h1", {
     color: "#FFF"
  });
});

text2.addEventListener("mouseover", function(dets) {
 
  gsap.to(".text2 h1", {
     color: "#EDBFFF"
  });
});

text2.addEventListener("mouseleave", function(dets) {

  gsap.to(".text2 h1", {
     color: "#FFF"
  });
});

var box=document.querySelectorAll(".box-container")
box.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    var att= elem.getAttribute("data-image")
    cursor.style.width= "450px"
    cursor.style.height= "370px"
    cursor.style.borderRadius= "0"
    cursor.style.backgroundImage = `url(${att})`

  })

  elem.addEventListener("mouseleave", function(){
    elem.style.backgroundColor = "transparent"
    cursor.style.width= ""
    cursor.style.height= ""
    cursor.style.borderRadius= "50%"
    cursor.style.backgroundImage = "none"
  })
})


tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:"footer",
      scroller: ".main",
      start: "top 30%",
      end: "top 130",
      scrub: 3
  }
})


tl4.to(".main ", {
  backgroundColor: "#EDBFFF"
  
})



var c=document.querySelector("#pp")






var nav = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
nav.forEach(function(elem){
  elem.addEventListener("mouseover", function(){
 
  })
  elem.addEventListener("mouseleave", function(){
    purple.style.display = ""
    purple.style.opacity= ""
    })
})
const hamburgerMenu = document.querySelector('.circle-pointer');
const overlay = document.querySelector('#purple');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('mouseover', () => {

   overlay.style.display = "block"
    overlay.style.opacity= "1"

  gsap.to('body', { backgroundColor: 'purple', duration: 0.5 });
  overlay.innerHTML = menuItems.innerHTML;
  gsap.to(overlay, { opacity: 1, duration: 0.5, zIndex: 100, pointerEvents: 'auto' });

  gsap.set(overlay.children, {
      display: 'inline-block',
      fontSize: '8vw',
      
      padding: "250px 0px",
      color: "white",
      mixBlendMode: "difference"
  });

  gsap.fromTo(overlay.children, {
      x: '500%'
  }, {
      x: '-400%',
      duration: 10,
      repeat: -1,
      ease: "bounce.out",
      stagger: {
          each: 0.1,
          repeat: -1
      }
  });
});

hamburgerMenu.addEventListener('mouseout', () => {
  gsap.to('body', { backgroundColor: 'white' });
  gsap.to(overlay, { opacity: 0, duration: 0.5, zIndex: -1, pointerEvents: 'none' });
});
