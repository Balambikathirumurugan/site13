document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Finance Growth Home Page Loaded Successfully!");
});
 function toggleFAQ(element) {
        let faqBox = element.parentElement; 
        let divider = faqBox.querySelector('.divider'); 
        let answer = faqBox.querySelector('.faq-answer'); 
        let toggle = element.querySelector(".faq-toggle");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            divider.style.display = "none";
            toggle.textContent = "+";
        } else {
            answer.style.display = "block";
            divider.style.display = "block";
            toggle.textContent = "-";
        }
    }
document.querySelector("button").addEventListener("click", function () {
    let email = document.querySelector("input").value;
    if (email === "") {
        alert("Please enter your email!");
    } else {
        alert("Thank you for joining the waitlist!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Service Page Loaded Successfully!");

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showTestimonial(currentIndex);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Show first testimonial on load
    showTestimonial(currentIndex);
});