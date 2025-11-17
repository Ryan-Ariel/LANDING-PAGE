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
// container da ação de favorito: atualiza ícone e adiciona classe de estilo no container
iconDivs.forEach(iconDiv => {
    const iconFavorite = iconDiv.querySelector("i") // pegar o elemento <i>

    iconDiv.addEventListener("click", () => {
        const isRegular = iconFavorite.classList.contains("fa-regular")
        if (isRegular) {
            iconFavorite.classList.replace("fa-regular", "fa-solid")
            iconDiv.classList.add('favorite') // adiciona fundo vermelho
        } else {
            iconFavorite.classList.replace("fa-solid", "fa-regular")
            iconDiv.classList.remove('favorite')
        }
    })
})



// calories: existem dois checkboxes (desktop e mobile). Selecionamos todos e sincronizamos o estado
const checkboxes = document.querySelectorAll('.checkbox-apple input[type="checkbox"]')
const kcal = document.querySelectorAll('.kcal')

checkboxes.forEach(cb => {
    cb.addEventListener('change', (e) => {
        const checked = e.target.checked
        // sincroniza todos os checkboxes para o mesmo estado
        checkboxes.forEach(c => c.checked = checked)
        // aplica/remover a classe que mostra as calorias
        kcal.forEach(item => item.classList.toggle('showkcal', checked))
    })
})