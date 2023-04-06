//BELLI BASLI ID'LERIN ATANDIGI BOLUM
var alertTemizle = document.getElementById("alertTemizle");
var alertSil = document.getElementById("alertSil");
var check = document.getElementById("check");
var ul_DOM = document.getElementById("list");

//INPUT'A GIRILEN METNIN KAYDEDILDIGI VE SILINDIGI BOLUM
ekleme = function() {
    var etkinlik = document.getElementById("text-area").value
    var ul = document.getElementById("list");

    if (etkinlik=="") {
      alert("ETKINLIK ALANI BOS BIRAKILAMAZ")
    }else{
        ul.innerHTML += `<li onclick="ustunuCiz(this)" class="list-group-item">
            <div class="row">
                <p class=" col text-start">${etkinlik}</p>
                <a onclick="sil(this)" class="col-1"><i class="fa-solid fa-trash float-end mx-5"></i></a>
            </div>
        </li>  `
    }
    
    document.getElementById("text-area").value  ='';
        
    check.style.display = "inline"
    setTimeout(() => {
        check.style.display = "none"
    }, 2000);
}

temizle = function(){
    ul_DOM.innerHTML = "";
    alertTemizle.style.display = "inline"
setTimeout(() => {
    alertTemizle.style.display = "none"
}, 2000);
}
//BIR ETKINLIK TAMAMLANDIGINDA BELIRLENMIS DIV'E TIKLANDIGINDA METNIN USTUNU CIZER VE YESIL RENK ATAR
ustunuCiz = function(element){
    
    if(element.style.textDecoration == "line-through"){
        element.style.textDecoration = "none"
        element.style.color = "black"
    }else{
        element.style.textDecoration = "line-through"
        element.style.color = "green"
        
        
    
    }
}
//ETKINLIGIN SILINDIGI BOLUM
sil = function(element){
    element.parentNode.parentNode.innerHTML =""
    alertSil.style.display = "inline"
setTimeout(() => {
    alertSil.style.display = "none"
}, 2000);
}








