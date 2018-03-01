// CREATE THE VARIABLES FOR THE DOM ELEMENTS WE NEED TO WORK WITH
var coffeeForm = document.querySelector("[data-coffee-order='form']");
var customerName = document.querySelector("[name='customerName']");
var coffeeOrder = document.querySelector("[name='coffee']");
var emailAddress = document.querySelector("[name='emailAddress']");
var size = document.querySelector("[name='size']");
var flavor = document.querySelector("[name='flavor']");
var strength = document.querySelector("[name='strength']");

var order = []; //empty array to hold order form submissions. array elements are objects

var orderContainer = document.querySelector(".orderContainer"); // find empty div element to hold orders

// function: CREATE A NEW ELEMENT & GIVE IT A CLASS & ATTRIBUTES
var createNew = function(tagName, className, attribute, attributeValue) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.setAttribute(attribute, attributeValue);
    return newElement;
}
// the end

// function: "SUBMIT" EVENT HANDLER. [[NOTE TO JANELLE: REFACTOR THE HECK OUT OF THIS, PLEASE]]
var submitOrder = function(event) {
    event.preventDefault();
    var newestOrder = {
        customerName: customerName.value,
        type: coffeeOrder.value, 
        email: emailAddress.value,
        size: size.value, 
        flavor: flavor.value,
        strength: strength.value
    };
    order.push(newestOrder);
    console.log(order);
    var newUL = createNew("ul", "orderUL", "style", "list-style-type: square;");
    newUL.addEventListener("click", function() {
        orderContainer.removeChild(newUL);
    });
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

// ADD AN EVENT LISTENER TO THE FORM
coffeeForm.addEventListener("submit", submitOrder);

// ADD AN EVENT LISTENER TO THE UL HOLDING THE ORDER
orderUL.addEventListener("click", function(event) {
    var orderUL = document.querySelector(".orderUL");
})