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

function skillAnimation(){
  let tlForSkills = gsap.timeline({
    scrollTrigger:{
      trigger: ".all-skills",
      scroller: "body",
      // markers: true,
      start: "top 45%",
      end: "top 0%",
      scrub: 2,
    }
  })

  tlForSkills.from(".all-skills h1",{
    opacity: 0
  })
  
  tlForSkills.from(".skill1",{
    y: 50,
    duration: 1,
    opacity: 0
  },"anim1")
  tlForSkills.from(".skill2",{
    x: 50,
    duration: 1,
    opacity: 0
  },"anim1")
  tlForSkills.from(".skill3",{
    x: -50,
    duration: 1,
    opacity: 0
  },"anim2")
  tlForSkills.from(".skill4",{
    y: 50,
    duration: 1,
    opacity: 0
  },"anim2")
  tlForSkills.from(".skill5",{
    y: 50,
    duration: 1,
    opacity: 0
  },"anim3")
  tlForSkills.from(".skill6",{
    x: 50,
    duration: 1,
    opacity: 0
  },"anim3")
}  
skillAnimation()
