/*--------------------------------------------------------------------------------------------- */

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
    const wrapper = document.querySelector('.social-icons');
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})
