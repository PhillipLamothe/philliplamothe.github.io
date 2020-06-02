let selectedRestrictions = [];
let selectedFilter = "---";

function openInfo(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent")
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById((tabName)).style.display = "block";

    if (evt.currentTarget.className === "clientnext") {
        for (let i = 0; i < tablinks.length; i++) {
            if (tablinks[i].id === "productsbutton") {
                tablinks[i].className += " active";
                tablinks[i].disabled = false;
            }
        }
    }
    if (evt.currentTarget.className === "cartbutton") {
        for (let i = 0; i < tablinks.length; i++) {
            if (tablinks[i].id === "cartbutton") {
                tablinks[i].className += " active";
                tablinks[i].disabled = false;
            }
        }
    }
    if (evt.currentTarget.id === "clientbutton") {
        for (let i = 0; i < tablinks.length; i++) {
            if (tablinks[i].id === "clientbutton") {
                tablinks[i].className += " active";
            }
            else {
                tablinks[i].disabled = true;
            }
        }
    }
    if (evt.currentTarget.id === "productsbutton") {
        for (let i = 0; i < tablinks.length; i++) {
            if (tablinks[i].id === "productsbutton") {
                tablinks[i].className += " active";
            }
            else if (tablinks[i].id ==="cartbutton") {
                tablinks[i].disabled = true;
            }
        }
    }
}

function populateListProductChoices(slct1, slct2) {

    if (slct1 !== null) {
        let s1 = slct1.split("_");
        if ((!selectedRestrictions.includes(s1[0])) && (s1[1] === "T")) {
            selectedRestrictions.push(s1[0]);
        }
        else if ((selectedRestrictions.includes(s1[0])) && (s1[1] === "F")) {
            let index = selectedRestrictions.indexOf(s1[0]);
            if (index > -1) {
                selectedRestrictions.splice(index, 1);
            }
        }
    }

    let s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    let optionArray = restrictListProducts(products, selectedRestrictions);

    for (let i = 0; i < optionArray.length; i++) {

        let prodMap = {
            "price" : "",
            "imageURL" : ""
        };
        for ( let j = 0; j < products.length; j += 1) {
            if (products[j]["name"] === optionArray[i]) {
                prodMap = products[j];
            }
        }

        let productName = optionArray[i];
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        let image = document.createElement("img");
        let imageURL = prodMap["imageURL"];
        image.className = "listimg"
        image.src = imageURL;
        image.alt = optionArray[i];

        let imagelink = document.createElement("a");
        imagelink.href = imageURL;
        imagelink.appendChild(image);
        s2.appendChild(imagelink);

        let label = document.createElement('label');
        label.htmlFor = productName;
        label.className = "listtext";
        let prodPrice = prodMap["price"]
        let labeltext = document.createTextNode(productName + " ..... $" + prodPrice);
        label.appendChild(labeltext);
        s2.appendChild(label);

        s2.appendChild(document.createElement("br"));
    }
}

function selectedItems() {

    let ele = document.getElementsByName("product");
    let chosenProducts = [];

    let c = document.getElementById("displayCart");
    while (c.firstChild) c.removeChild(c.firstChild);

    let para = document.createElement("p");
    para.className = "carttext";

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode("- " + ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    c.appendChild(para);
    let price = document.createElement("p");
    price.className = "priceline";
    price.appendChild(document.createTextNode("Total Price is : $" + getTotalPrice(chosenProducts)));
    c.appendChild(price);
}
