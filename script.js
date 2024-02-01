const images = document.querySelectorAll("[id*=img]")

images.forEach((element) => {
    let currentImg
    element.addEventListener("mouseenter",() => {
        currentImg = element
        images.forEach((element) => {
            if(element !== currentImg){
                element.style.opacity = ".5"
            }
            else{
                element.classList.add("nothover")
            }
        })
    })
    element.addEventListener("mouseleave",() => {
        images.forEach((element) => {
            element.style.opacity = "1"
            element.classList.remove("nothover")
        })
    })
})