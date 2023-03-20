let boxes = document.getElementsByClassName('boxx').length;
const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
let myInt = localStorage.getItem("cchecki");

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkboxx" + String(i), checkbox.checked);	
  }
}

for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkboxx" + String(i)));
    const roww = document.getElementById(String(i)).parentNode.parentNode;
    if(document.getElementById(String(i)).checked = checked){
      document.getElementById(String(i)).checked = checked;
      roww.style.backgroundColor = 'green';
    }
  }
}
window.addEventListener('change', save);

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const row = this.parentNode.parentNode;
    if (this.checked) {
      row.style.backgroundColor = 'green';
      myInt++;
      localStorage.setItem("cchecki", myInt);
    } else {
      row.style.backgroundColor = 'white';
      myInt--;
      localStorage.setItem("cchecki", myInt);
    }
  });
});