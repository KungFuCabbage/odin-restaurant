// Creates about contact body content 

function contact() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  const placeholder = document.createElement('div');
  placeholder.innerText = "Contact page content here..."
  body.appendChild(placeholder);
}

export { contact }