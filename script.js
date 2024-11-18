document.addEventListener('DOMContentLoaded', () => { // Event listener for when the DOM is fully loaded
    const form = document.getElementById('myForm'); // Gets the form element via ID
    const TextInput = document.getElementById('TextInput'); // Gets the text input element via ID
    const ColorSelector = document.getElementById('ColorSelector'); // Gets the color input element via ID

    const SavedColor = localStorage.getItem('ColorSelector'); // Retrieves the saved color value from the local storage
    if (SavedColor) { // If a saved color value exists
        console.log(`Saved color value: ${SavedColor}`); // Logs the saved color value to the console
    }
}); // End of DOMContentLoaded event listener