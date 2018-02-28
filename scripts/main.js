// CREATE THE VARIABLES FOR THE DOM ELEMENTS WE NEED TO WORK WITH
var coffeeForm = document.querySelector("[data-coffee-order='form']");
var customerName = document.querySelector("[name='customerName']");
var coffeeOrder = document.querySelector("[name='coffee']");
var emailAddress = document.querySelector("[name='emailAddress']");
var size = document.querySelector("[name='size']");
var flavor = document.querySelector("[name='flavor']");
var strength = document.querySelector("[name='strength']");

var order = [];

// function: CREATE A NEW ELEMENT
var createNew = function(tagName) {
    var newElement = document.createElement(tagName);
    newElement.setAttribute("style", "margin: 5px;");
    return newElement;
}
// the end

// function: SUBMIT EVENT HANDLER. REFACTOR THE HECK OUT OF THIS, JANELLE
var submitOrder = function(event) {
    event.preventDefault();
    order.push([customerName.value, coffeeOrder.value, emailAddress.value, size.value, flavor.value, strength.value]);
    console.log(order);  
    var orderContainer = document.querySelector(".orderContainer");
    var newUL = createNew("ul");
    var customerNameLI = createNew("li");
    var coffeeLI = createNew("li");
    var emailLI = createNew("li");
    var sizeLI = createNew("li");
    var flavorLI = createNew("li");
    var strengthLI = createNew("li");
    customerNameLI.textContent = customerName.value;
    coffeeLI.textContent = coffeeOrder.value;
    emailLI.textContent = emailAddress.value;
    sizeLI.textContent = size.value;
    flavorLI.textContent = flavor.value;
    strengthLI.textContent = strength.value;
    newUL.appendChild(customerNameLI);
    newUL.appendChild(coffeeLI); 
    newUL.appendChild(emailLI); 
    newUL.appendChild(sizeLI);
    newUL.appendChild(flavorLI); 
    newUL.appendChild(strengthLI);
    orderContainer.appendChild(newUL);
};
// the end

// ADD THE EVENT LISTENER TO THE FORM
coffeeForm.addEventListener("submit", submitOrder);