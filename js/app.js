// Start Jquery Area
$(document).ready(function () {

    // Start Room Section
    $(".room-popup").magnificPopup({
        type: "image"
    });
    // End Room Section
});
// End Jquery Area

// Start JavaScript Area
// Start Header
// Start nav bar
function dropBtn(e) {

    // let getDropDown = document.getElementById("my-dropdown");
    // getDropDown.classList.toggle("show");

    // undefined
    // console.log(this);
    // console.log(e);

    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle("show");
};

function dropFilter() {

    var getSearch, filter, getDropDiv, getLinks, linkValue;

    getSearch = document.getElementById("search");
    filter = getSearch.value.toUpperCase();
    // getDropDiv = document.getElementById("my-dropdown");
    // getLinks = getDropDiv.getElementsByTagName("a");
    getLinks = document.querySelectorAll(".my-dropdowns a")

    // console.log(getLinks.length);
    // console.log(filter);

    for (var x = 0; x < getLinks.length; x++) {

        linkValue = getLinks[x].textContent;
        // console.log(linkValue);

        if (linkValue.toUpperCase().indexOf(filter) > -1) {
            getLinks[x].style.display = "";
        } else {
            getLinks[x].style.display = "none";
        };
    };
};
// End nav bar

// Start auto background
function* genFun() {

    var index = 8;

    while (true) {
        yield index++;

        if (index > 13) {
            index = 8;
        };
    };
};

var getGen = genFun();
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);

var getHeader = document.querySelector("header");

// getHeader.style.backgroundImage = `url("./asset/imgs/img/banner/banner${getGen.next().value}.jpg")`;

function autoLoad() {
    // console.log(getGen.next().value);

    getHeader.style.backgroundImage = `
    url("./asset/imgs/img/banner/banner${getGen.next().value}.jpg")`;
};

autoLoad();

setInterval(autoLoad, 2500);
// End auto background 

// End Header

// Start Testimonials Section
const getCompanyName = document.querySelector("company-name");
const getRole = document.querySelector(".role");
const getTestimonial = document.querySelector(".testimonial");

const testimonialDatas = [
    {
        name: "Rich Star Restaurant",
        position: "Our Outlet",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, odit, atque at deleniti cum
                        unde reiciendis rem libero ullam magni, temporibus distinctio blanditiis autem? Possimus earum
                        sequi temporibus nam consectetur!`
    },
    {
        name: "Rich Star Restaurant",
        position: "Our Outlet",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, odit, atque at deleniti cum
                        unde reiciendis rem libero ullam magni, temporibus distinctio blanditiis autem? Possimus earum
                        sequi temporibus nam consectetur!`
    },
    {
        name: "48 Sky Bar Cafe",
        position: "Our Partner",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, odit, atque at deleniti cum
                        unde reiciendis rem libero ullam magni, temporibus distinctio blanditiis autem? Possimus earum
                        sequi temporibus nam consectetur!`
    },
    {
        name: "Cool Land Swimming Pool",
        position: "Our Outlet",
        text: `Lorem ipsum Branch sit, amet consectetur adipisicing elit. Illum, odit, atque at deleniti cum
                        unde reiciendis rem libero ullam magni, temporibus distinctio blanditiis autem? Possimus earum
                        sequi temporibus nam consectetur!`
    },
    {
        name: "Chaung Thar SPA",
        position: "Our Business",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, odit, atque at deleniti cum
                        unde reiciendis rem libero ullam magni, temporibus distinctio blanditiis autem? Possimus earum
                        sequi temporibus nam consectetur!`
    },
];

let idx = 0;

function updateTestimonial() {

}

setInterval(updateTestimonial, 10000);
// End Testimonials Section

// End Javascript Area

// 3TM