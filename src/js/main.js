window.onload = ()=>{
    document.querySelector("#loading").style.display = "flex";
    document.querySelector("main").style.display = "none";
    setTimeout(()=>{
    
        document.querySelector("#loading").style.display = "none";
        document.querySelector("main").style.display = "flex";



    }, 3000)
}


document.querySelector(".headerMenu img").addEventListener("click" , e=>{
            document.querySelector(".menulateral").style.display = "none";

})
document.querySelector("header img").addEventListener("click" , e=>{
            document.querySelector(".menulateral").style.display = "flex";

})