var test=document.querySelector(".test")
test.addEventListener("click",function(){
    test.style.border= right= "3px solid crimson"
})
var btn=document.querySelector("button")
var list=document.querySelector(".task-my")
var inp=document.querySelector("input")
btn.addEventListener("click",function(){
list.innerHTML+="<li>"+inp.value+"</li>"
})
