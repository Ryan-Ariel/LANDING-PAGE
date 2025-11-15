//menu
const mobileMenu = document.querySelector(".menu-mobile i")
const navMobile = document.querySelector(".nav-mobile")

mobileMenu.addEventListener("click", () => {
    if (navMobile.classList.contains("show")) {
        navMobile.classList.remove("show")
        mobileMenu.classList.replace ("fa-xmark", "fa-bars")
    } else {
        navMobile.classList.add("show")
        mobileMenu.classList.replace("fa-bars", "fa-xmark")
    }
})

//favoritos




const iconDivs = document.querySelectorAll(".cards-inside .icon") //selecionar todos que tiver .icon
const divFavorite = document.querySelector(".cards-favorites")
 
iconDivs.forEach(iconDiv => { //para cada div icon que tiver
    const iconFavorite = iconDiv.querySelector("i") //pegar o i

    iconDiv.addEventListener("click", () => {  //adiciona um evento nessa div icon que cliquei
    
    if(iconFavorite.classList.contains("fa-regular")) { 
        iconFavorite.classList.replace("fa-regular", "fa-solid")
        

    } else { 
        iconFavorite.classList.replace("fa-solid", "fa-regular")
        
    }
})


})

