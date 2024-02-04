let yes=document.querySelector(".green")
let no=document.querySelector(".red")
let image=document.querySelector(".container>div>img")
let hidden=document.querySelector(".buttons")
let headding=document.querySelector(".container h2")
let a = 4
let i=0
let sent=["are you sure?","really sure?", "think again :(", "i'll cryy T-T", "Change of mind", "Last chance", "u will regret this","this could be a mistake","ok u r not thinking straight"," u cold hearted T-T", "You are breaking my heart"]

yes.addEventListener("click",()=>{
     image.setAttribute("src","https://i.pinimg.com/originals/a3/31/e9/a331e9e43c4e1fb6a8acda8c72aad43e.gif")
     hidden.style.display= "none"
     headding.innerText="hepi hepi hepi"
     image.style.width="100%"

})
no.addEventListener("click",()=>{
    yes.style.fontSize= a+"rem"
    if(i>=sent.length){
        no.innerText=sent[sent.length-1]
    }else{
        no.innerText=sent[i]
    }
    no.style.fontSize="1rem"
    a=a+2
    i=i+1
})

