// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
var coffeeForm = document.querySelector("[data-coffee-order='form']");
var customerName = document.querySelector("[name='customerName']");
var coffeeOrder = document.querySelector("[name='coffee']");
var emailAddress = document.querySelector("[name='emailAddress']");
var size = document.querySelector("[name='size']");
var flavor = document.querySelector("[name='flavor']");
var strength = document.querySelector("[name='strength']");
var orderContainer = document.querySelector(".orderContainer");

var orders = []; // empty array to hold order form submissions. array items will be objects.

// function: CREATE A NEW ELEMENT & GIVE IT A CLASS & ATTRIBUTES
var createNew = function(tagName, className, attribute, attributeValue) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.setAttribute(attribute, attributeValue);
    return newElement;
}
// the end

// function: "SUBMIT" EVENT HANDLER FOR FORM EVENT LISTENER
var submitOrder = function(event) {
    event.preventDefault();

    // create variable to hold newest order as an object in orders array
    var newestOrder = {
        customerName: customerName.value,
        type: coffeeOrder.value, 
        email: emailAddress.value,
        size: size.value, 
        flavor: flavor.value,
        strength: strength.value
    };
    
    // create newUL DOM element for newestOrder. add an event listener for click & call _f_removeMe
    var newUL = createNew("ul", "orderUL", "style", "list-style-type: square;");
    newUL.addEventListener("click", function() {
        orderContainer.removeChild(newUL);
    });
    
    // loop through values in newestOrder object and forEach: create newLI DOM element via _f_createNew, set text to the newestOrder value/currentOrderElement, & append to newUL
    Object.values(newestOrder).forEach(function(currentOrderElement) {
        var newLI = createNew("li", "orderLI");
        newLI.textContent = currentOrderElement;
        newUL.appendChild(newLI);
    });
    
    // append newUL DOM element to parent div DOM element.
    orderContainer.appendChild(newUL);

    // push newestOrder object to orders array
    orders.push(newestOrder);
    console.log(orders);
    
    };
// the end

// ADD AN EVENT LISTENER TO THE FORM DOM ELEMENT
coffeeForm.addEventListener("submit", submitOrder);