const arrVariants = [
    "yes",
    "no",
    "maybe",
    "give me 5kb",
    "give me chocolate",
    "If you try hard", 
    "I can't say directly",
    "ask another one",
    "i am not ready",
    "I think another time",
    "It's will be easy",
    "I can not say now",
]

const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    const randInt = Math.floor(Math.random()*arrVariants.length)
    alert(arrVariants[randInt])
})