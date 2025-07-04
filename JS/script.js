let carouselItem=document.getElementsByClassName("carousel-item")
console.log(carouselItem)
Array.from(carouselItem).forEach((citem)=>{
    let imgcItem=citem.firstElementChild
    console.log(imgcItem)
    imgcItem.addEventListener("click",()=>{
const query = imgcItem.nextElementSibling.firstElementChild.innerText;
const url = "history.html?query=" + encodeURIComponent(query);
window.open(url, "_blank");

    })
})