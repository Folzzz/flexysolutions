

// TESTIMONIAL SCROLL FUNCTION
const testimonialCounters = document.querySelectorAll('.testimonial-counter');
const testimonials = document.querySelectorAll('.testimonials');

let testimonialIndex = 0;
let testimonialCounterIndex = 0;

const showTestimonials = () => {
    // to show/change testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.display = "none";
    });
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {
        testimonialIndex = 1;
    }

    // to change counter
    testimonialCounters.forEach(counter => {
        counter.classList.remove("active");
    });
    testimonialCounterIndex++;
    if (testimonialCounterIndex > testimonialCounters.length) {
        testimonialCounterIndex = 1;
    }

    testimonials[testimonialIndex - 1].style.display = "block";
    testimonialCounters[testimonialCounterIndex - 1].className +=' active';

    setTimeout(showTestimonials, 4000);
};

showTestimonials();

// END OF TESTIMONIAL SHOW SECTION

// PRODUCTS DISPLAY FILTER SECTION
// const btnShowAll = document.querySelector('#showAll');
const allProduct = document.querySelectorAll('.product-item')

//show filtered section function
const addShowClass = (elementSelect, name) => {
    let arrayOne = elementSelect.className.split(" ");
    let arrayTwo = name.split(" ");
    
    for (let i = 0; i < arrayTwo.length; i++) {
        if (arrayOne.indexOf(arrayTwo[i]) == -1) {
            elementSelect.className += " " + arrayTwo[i];
        }        
    }
};

//hide unselected section function
const removeShowClass = (elementSelect, name) => {
    let arrayOne = elementSelect.className.split(" ");
    let arrayTwo = name.split(" ");
    
    for (let i = 0; i < arrayTwo.length; i++) {
        while (arrayOne.indexOf(arrayTwo[i]) > -1) {
            arrayOne.splice(arrayOne.indexOf(arrayTwo[i]), 1);
        }        
    }
    elementSelect.className = arrayOne.join(" ");
}

// filter function
const filterSelection = (section) => {
    if (section == 'all') section = "";
    
    allProduct.forEach(item => {
        removeShowClass(item, "product-item-show");
        if (item.className.indexOf(section) > -1) {
            addShowClass(item, "product-item-show")
        }
    })
    
};
filterSelection('all');

// END OF PRODUCT DISPLAY FILTER SECTION