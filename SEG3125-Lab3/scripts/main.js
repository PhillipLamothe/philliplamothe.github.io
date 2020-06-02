let  selectedRestrictions = [];

function openInfo(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent")
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById((tabName)).style.display = "block";
    evt.currentTarget.className += "active";
}

function populateListProductChoices(slct1, slct2) {
    if (slct1 !== null) {
        let s1 = document.getElementById(slct1);
        if (( !selectedRestrictions.includes(s1.value)) && (s1.checked)) {
            selectedRestrictions.push(s1.value);
        }
        else if ((selectedRestrictions.includes(s1.value)) && (!s1.checked)) {
            let index = selectedRestrictions.indexOf(s1.value);
            if (index > -1) {
                selectedRestrictions.splice(index, 1)
            }
        }
    }

    let s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    let optionArray = restrictListProducts(products, selectedRestrictions);

    for (let i = 0; i < optionArray.length; i++) {

        let productName = optionArray[i];
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        let label = document.createElement('label');
        label.htmlFor = productName;
        label.className = "listtext";
        let prodPrice = 0
        for ( let j = 0; j < products.length; j += 1) {
            if (products[j]["name"] === optionArray[i]) {
                prodPrice = products[j]["price"];
            }
        }
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
    c.innnerHTML = "";

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
