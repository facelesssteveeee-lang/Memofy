// Wait for the DOM to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'fade-in-element' class
    const elementsToFadeIn = document.querySelectorAll('.fade-in-element');

    // Loop through each element
    elementsToFadeIn.forEach((element, index) => {
        // Use a setTimeout to add a delay to each element
        // The delay is 'index * 200' to create a cascading effect (200ms between each element)
        setTimeout(() => {
            element.classList.add('is-visible');
        }, index * 500);
    });
});
