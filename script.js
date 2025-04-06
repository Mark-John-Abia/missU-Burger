document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Order form popup functionality
    const orderButton = document.getElementById('orderButton');
    const orderFormPopup = document.getElementById('orderFormPopup');
    const closeOrderForm = orderFormPopup.querySelector('.close');
    const cancelButton = document.getElementById('cancelButton');
    const orderForm = document.getElementById('orderForm');

    orderButton.addEventListener('click', () => {
        orderFormPopup.style.display = 'flex';
    });

    closeOrderForm.addEventListener('click', () => {
        orderFormPopup.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        orderFormPopup.style.display = 'none';
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Order successful!');
        orderFormPopup.style.display = 'none';
        alert('Your order was successful!');
        orderForm.reset();
    });

    window.addEventListener('click', (e) => {
        if (e.target === orderFormPopup) {
            orderFormPopup.style.display = 'none';
        }
    });

    // Contact form functionality
    const contactCancelButton = document.getElementById('contactCancelButton');
    const contactForm = document.getElementById('contactForm');

    contactCancelButton.addEventListener('click', () => {
        contactForm.reset();
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });

     // Quantity functionality
     const quantityInput = document.getElementById('quantity');
     const countLabel = document.getElementById('count');
     const increaseButton = document.getElementById('increaseCount-Btn');
     const decreaseButton = document.getElementById('decreaseCount-Btn');
     const resetButton = document.getElementById('resetCount-Btn');
 
     const updateCountLabel = () => {
         countLabel.textContent = quantityInput.value;
     };
 
     increaseButton.addEventListener('click', () => {
         let quantity = parseInt(quantityInput.value);
         if (quantity < 50) {
             quantityInput.value = quantity + 1;
             updateCountLabel();
         }
     });
 
     decreaseButton.addEventListener('click', () => {
         let quantity = parseInt(quantityInput.value);
         if (quantity > 1) {
             quantityInput.value = quantity - 1;
             updateCountLabel();
         }
     });
 
     resetButton.addEventListener('click', () => {
         quantityInput.value = 1;
         updateCountLabel();
     });
 
     // Initialize the display
     updateCountLabel();
});
