// DOM Selectors 
const textArea = document.getElementById('text-area');
const wordCount = document.getElementById('word-count');
const btn = document.getElementById('btn');



// Event Listeners
btn.addEventListener('click', wordCounter);

// Word Counter
function wordCounter(e){
  
  if(textArea.value === '') {
    showError();
  } else {
    let emptyString = textArea.value;
    let wordAmount = emptyString.split(" ").length;
    wordCount.innerHTML = `${wordAmount} words`;
  } 
  e.preventDefault;
}

function showError(error) {
  const text = document.createElement('p');
  text.className = 'error';
  text.innerHTML = 'Please enter some words.';
  wordCount.appendChild(text);
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.error').remove();
}