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

