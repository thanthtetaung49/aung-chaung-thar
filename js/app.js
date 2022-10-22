// Start Header
// Start nav bar
function dropBtn() {

    let getDropDown = document.getElementById("my-dropdown");
    getDropDown.classList.toggle("show");
};

function dropFilter() {
    
    var getSearch, filter, getDropDiv, getLinks,linkValue;

    getSearch = document.getElementById("search");
    filter = getSearch.value.toUpperCase();
    getDropDiv = document.getElementById("my-dropdown");
    getLinks = getDropDiv.getElementsByTagName("a");

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