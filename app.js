// splitting the words
function splitWords(){
  let h1 = document.querySelector(".h1")
  let h1Text = h1.textContent
  
  let splittedText = h1Text.split("")
  let result=""
  splittedText.forEach((text)=>{
    result += `<span>${text}</span>`

  })
  h1.innerHTML = result
  console.log(result)
}
splitWords()

// animating landing page
function landingPageAnim(){
  let tl = gsap.timeline()

tl.from(".h1 span",{
  y: 50,
  stagger: 0.09,
  opacity: 0,
  duration: 0.3,
  delay: 0.32
})
tl.from(".right-cont",{
  x: 50,
  opacity: 0,
  duration: 1.5
},"-=1.5")
tl.from(".right-cont button",{
  x: -50,
  opacity: 0,
  duration: 1.5
},"-=1")
}
landingPageAnim()

// animating skills sectio
function skillAnimation(){
  let tlForSkills = gsap.timeline({
    scrollTrigger:{
      trigger: ".all-skills",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: 2,
    }
  })

  // tlForSkills.from(".all-skills h1",{
  //   opacity: 0,
  //   duration: 0.2
  // })
  
  
  tlForSkills.from(".skill1",{
    y: 100,
    duration: 2,
    opacity: 0,
  },"anim1")
  tlForSkills.from(".skill2",{
    x: 100,
    duration: 2,
    opacity: 0
  },"anim1")
  tlForSkills.from(".skill3",{
    x: -100,
    duration: 3,
    opacity: 0,
    delay:1.5
  },"anim2")
  tlForSkills.from(".skill4",{
    y: 100,
    duration: 3,
    opacity: 0,
     delay:1.5
  },"anim2")
  tlForSkills.from(".skill5",{
    y: 100,
    duration: 2,
    opacity: 0,
    delay: 1.5
  },"anim3")
  tlForSkills.from(".skill6",{
    x: 100,
    duration: 2,
    opacity: 0,
    delay: 1.5
  },"anim3")
}  
skillAnimation()

// animating navbar
function navBarAnim(){
  gsap.from("nav .logo",{
    y: -90,
    opacity: 0,
    duration: 1
  })
  gsap.from("nav ul li",{
    y: -90,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  })
  gsap.from("nav button",{
    y: -90,
    opacity: 0,
    duration: 1,
  
  })
}
navBarAnim()

// Select all .certi elements

function certiAnim(){

  let certiDivs = document.querySelectorAll('.certi');
  
  certiDivs.forEach(certi => {
    certi.addEventListener("mouseenter", () => {
      gsap.to(certi.querySelector(".screen1"), {
        height: 0,
        duration: 0.4
      });
    });
  
    certi.addEventListener("mouseleave", () => {
      gsap.to(certi.querySelector(".screen1"), {
        height: "14rem",
        duration: 0.4,
        
      });
    });
  });
  
  let tlForSkills = gsap.timeline({
      scrollTrigger:{
        trigger: ".all-certificates",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 0%",
        scrub: 2,
      }
    })
  
  tlForSkills.from(".certi",{
    opacity: 0,
    duaration: 0.7,
    stagger: 0.2
  })
}  
certiAnim()

// animating the form section


