
// This is the script.js file that would be linked to an HTML document
// In this React app, we're simulating this behavior in the ScriptDemo.tsx component

// Change text content dynamically
document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('dynamic-text');
  let counter = 0;
  
  setInterval(() => {
    const texts = [
      "JavaScript is modifying this text!",
      "DOM manipulation is powerful!",
      "Watch how dynamic content works!"
    ];
    textElement.textContent = texts[counter % texts.length];
    counter++;
  }, 2000);
  
  // Modify CSS styles via JavaScript
  const styleButton = document.getElementById('style-button');
  styleButton.addEventListener('click', () => {
    const card = document.querySelector('.style-demo-card');
    
    // Toggle between styles
    if (card.classList.contains('default-style')) {
      card.classList.remove('default-style');
      card.classList.add('modified-style');
    } else {
      card.classList.add('default-style');
      card.classList.remove('modified-style');
    }
  });
  
  // Add or remove elements
  let elementAdded = false;
  const addRemoveButton = document.getElementById('add-remove-button');
  const elementContainer = document.getElementById('element-container');
  
  addRemoveButton.addEventListener('click', () => {
    if (!elementAdded) {
      const newElement = document.createElement('div');
      newElement.id = 'added-element';
      newElement.className = 'new-element';
      newElement.innerHTML = '<p>🎉 New element added dynamically!</p>';
      elementContainer.appendChild(newElement);
      elementAdded = true;
      addRemoveButton.textContent = 'Remove Element';
    } else {
      const addedElement = document.getElementById('added-element');
      elementContainer.removeChild(addedElement);
      elementAdded = false;
      addRemoveButton.textContent = 'Add Element';
    }
  });
});