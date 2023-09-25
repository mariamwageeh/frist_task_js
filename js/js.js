var products=document.querySelectorAll(".container ul li")
var score=document.querySelector(".score")
var price=0
var btn=document.querySelector(".btn")
var total=document.querySelector(".total")

products.forEach(function(item){
    item.onclick=function(){
        score.innerHTML+=item.textContent +"/ "
        price += parseInt( item.getAttribute("price"))
        if(score.innerHTML != "")
        {
            btn.style.display="block";
        }
    }
})
btn.onclick=function(){
    total.innerHTML=price +"$"
}