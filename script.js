document.addEventListener('DOMContentLoaded', () => { // Event listener for when the DOM is fully loaded
    const form = document.getElementById('myForm'); // Gets the form element via ID
    const TextInput = document.getElementById('TextInput'); // Gets the text input element via ID
    const ColorSelector = document.getElementById('ColorSelector'); // Gets the color input element via ID

    const SavedColor = localStorage.getItem('ColorSelector'); // Retrieves the saved color value from the local storage
    if (SavedColor) { // If a saved color value exists
        console.log(`Saved color value: ${SavedColor}`); // Logs the saved color value to the console
    }

    form.addEventListener('submit', (event) => { // Adds an event listener to the form for the submit event
        event.preventDefault(); // Prevents the default form submission action from occurring
        console.log(`Text Inside Text Box: ${TextInput.value}`); // Logs the current value of the text input element to the console
        console.log(`Color Selector Hex Code: ${ColorSelector.value}`); // Logs the current value of the color input element to the console
        localStorage.setItem('ColorSelector', ColorSelector.value); // Saves the current color input value to the local storage
    }); // End of event listener for form submission
}); // End of DOMContentLoaded event listener