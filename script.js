const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", ()=> {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active");
    }))



//slides 
let slidesIndex = 0;
showSlides();

function showSlides(){
    slides = document.getElementsByClassName("slides");
    dots = document.getElementsByClassName("dots");
    
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].style.color = "lightgray";
    }

    slidesIndex++;

    if(slidesIndex > slides.length){
        slidesIndex = 1;
    }

    slides[slidesIndex-1].style.display = "block";
    dots[slidesIndex-1].style.color = "black";

    setTimeout(showSlides, 2000);
}

function readMore(btn){

    post = btn.parentElement;
    hide = post.querySelector(".hide");
    ellipse = post.querySelector(".ellipse");


    if (hide.style.display == "inline"){
        //hide extra text, show ellipse, make button say read more
        hide.style.display = "none";
        ellipse.style.display = "inline";
        btn.innerHTML = "Read More";
    }
    else{
        //show extra text, hide ellipse, make buton say read less
        hide.style.display = "inline";
        ellipse.style.display = "none";
        btn.innerHTML = "Read Less";
    }

}