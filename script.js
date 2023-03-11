const checkboxes = document.querySelectorAll('table input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const row = this.parentNode.parentNode; 
    if (this.checked) {
      row.style.backgroundColor = 'green';
    } else {
      row.style.backgroundColor = 'white';
    }
  });
});
function changee() {
  document.getElementById("y11s").innerHTML = "Paragraph changed.";
}