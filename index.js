let home = document.querySelector(".home");

let about_us = document.querySelector(".about-us");
let about_us_item = document.querySelector(".about-item");

let our_work = document.querySelector(".our-work");
let our_work_item = document.querySelector(".our-work-item");

let get_in_touch = document.querySelector(".get-in-touch");
let get_in_touch_item = document.querySelector(".get-in-touch-item");

let our_services = document.querySelector(".our-services");
let our_services_item = document.querySelector(".our-services-item");

let logo_white = document.querySelector(".logo-white");
let back_arrow = document.querySelector(".back-arrow");

let displayContainter = (container) => {
    let curr_active = document.querySelector(".active");

    if(!curr_active.classList.contains("home"))
        curr_active.classList.toggle("animate-section")
    
    curr_active.classList.toggle("active");

    logo_white.style.display = "none";
    
    container.classList.toggle("active");
    container.classList.toggle("animate-section");
    back_arrow.classList.toggle("show");
}

let returnBack = ()=>{
    let curr_active = document.querySelector(".active");

    curr_active.classList.toggle("animate-section");
    curr_active.classList.toggle("active");
    
    home.classList.toggle("active");
    logo_white.style.display = "block";
    back_arrow.classList.toggle("show");
}

back_arrow.addEventListener("click",returnBack);

about_us_item.addEventListener("click", ()=>{displayContainter(about_us);});
about_us.querySelector(".return-btn").addEventListener("click", returnBack);

our_work_item.addEventListener("click", ()=>{displayContainter(our_work);});
our_work.querySelector(".return-btn").addEventListener("click", returnBack);

get_in_touch_item.addEventListener("click", ()=>{displayContainter(get_in_touch);});
get_in_touch.querySelector(".return-btn").addEventListener("click", returnBack);

our_services_item.addEventListener("click", ()=>{displayContainter(our_services);});
our_services.querySelector(".return-btn").addEventListener("click", returnBack);

