// Once the page loads, run this
document.addEventListener('DOMContentLoaded', () => {
    // Grab the input fields and button
    const priceField = document.getElementById('price');
    const litersField = document.getElementById('liters');
    const checkbutton = document.getElementById('checkbutton');
    const output = document.getElementById('output');
  
    checkbutton.addEventListener('click', () => {
      
      const price = parseFloat(priceField.value);                   // if the user clicks the button it Gets the values entered by the user
      const liters = parseFloat(litersField.value);
  
      // Simple check to avoid weird results
      if (isNaN(price) || isNaN(liters)) {
        output.textContent = "Oops! Enter a valid number cuh!.";
        return;
      }
  
      // Calculate the total
      const total = price * liters;
  
      // Display the results
      output.textContent = `you’ll be payin: AED${total.toFixed(2)}`;
    });
  });
  