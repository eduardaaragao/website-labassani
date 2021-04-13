/*--------------------------------------------------------------------------------------------- */

/*const slideContainer = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

const sliderImages = [
    {
        src: "assets/images/bg_1.jpg",
        text: "Os melhores bolos da cidade de Viseu",
    },
    {
        src: "assets/images/bg_2.jpg",
        text: "Para as melhores comemorações",
    },
    {
        src: "assets/images/bg_3.jpg",
        text: "Bolos e doces feitos à mão",
    },
    {
        src: "assets/images/bg_4.jpg",
        text: "Uma história de 25 anos no Brasil... agora em Viseu!",
    },
    
    {
        src: "assets/images/bg_5.PNG",
        text: "Entregamos para mais de 10 municípios",
    },
    {
        src: "assets/images/bg_6.jpg",
        text: "Quer receber um orçamento gratuito? Contacte-nos!",
    },
]

var currentIndex = 0;
var total = sliderImages.length;

function mostrarSlide()
{
    
        slideContainer.style.backgroundImage = `linear-gradient(
            to right,
            rgba(20, 20, 20, 0.5),
            rgba(64, 64, 64, 0.5)
        ),
        url(${sliderImages[currentIndex].src})`
        sliderText.innerHTML = sliderImages[currentIndex].text;
        currentIndex++;

        slideContainer.classList.add("fadeIn")
        setTimeout(() => {
            slideContainer.classList.remove("fadeIn")
          }, 1000)
        
        if(currentIndex > total -1){
            currentIndex = 0;
        }
        setTimeout(mostrarSlide, 6000);      

}*/
/*const app = ()=>{
    navbarMobile();
}*/
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const i = target / speed;

        if (count < target){
            counter.innerText = Math.ceil(count + i);
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target;
        }
    }
    updateCount();
})

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".product-box");

window.onload = () => {
    filterItem.onclick = (selectedItem) =>{
        if (selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");

            let filterName = selectedItem.target.getAttribute("data-name");

            filterImg.forEach((image) =>{
                let filterImages = image.getAttribute("data-name");
                if ((filterImages == filterName) || (filterName == "tudo")){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
}

window.addEventListener('load', () =>{
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})
