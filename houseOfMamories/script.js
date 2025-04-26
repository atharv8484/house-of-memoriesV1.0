
gsap.registerPlugin(ScrollTrigger) 


gsap.to("#az", {
    marginLeft: "110px",
    // duration:1
})
gsap.to("#pr", {
    marginLeft: "20px",
    // duration:1

})
gsap.to("#b1", {
    y: -500, // Translate along the y-axis by 500 pixels
    // Animation duration in seconds
    delay: 1

});
gsap.to("#b2", {
    y: -450, // Translate along the y-axis by 500 pixels
    delay: 1

});

// gsap.from("#relationShipStatus",{
//     // delay:1,
//     scale:0,
//     scrollTrigger:{
//         trigger:"#relationShipStatus ",
//         scroller:"body",
//         marker:true
//     }
//     // rotate:360,
    
// })
// gsap.from(".relationShipStatus", {
//     // duration: 5,
    
//     scale: 0,
//     // rotate:360,
//     scrollTrigger: {
//         trigger: ".relationShipStatus",
//         scroller: 'body',
//         marker: true

//     }, // start the animation when ".box" enters the viewport (once)
// });

document.querySelectorAll(".b2H1").forEach(element=>{
    element.addEventListener("mousemove" , (e)=>{
        console.log(element.getBoundingClientRect().top , e.clientY)
        gsap.to(element.getElementsByClassName("hoverImg"),{
            visibility:"visible",
            top:e.clientY - element.getBoundingClientRect().top,
            left:e.clientX - element.getBoundingClientRect().left

            
        })
    })
})
document.querySelectorAll(".b2H1").forEach(element=>{
    element.addEventListener("mouseleave" , ()=>{
        
        gsap.to(element.getElementsByClassName("hoverImg"),{
            visibility:"hidden",
        
        })
    })
})
document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        gsap.to('.vanshika', {
            marginLeft: -700,
            onComplete: function() {
                // Animation complete, change background image
                gsap.set('.vanshika', {
                    ease: "power2.inOut",
                    backgroundImage: 'url("4.jpeg")',
                    backgroundSize: 'cover', // Optional: Adjust background size
                    backgroundPosition: 'center' // Optional: Adjust background position
                });
            }
        });
    }
});

// gsap.from("#relationShipStatus", {
//     duration:5,
//     x: 500,
//     scrollTrigger: {
//         trigger:"#relationShipStatus",
//         scroller:'body',
//         marker:true

//     }, // start the animation when ".box" enters the viewport (once)
// });