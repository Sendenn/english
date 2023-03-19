let boxes = document.getElementsByClassName('box').length;
const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
let myInt = localStorage.getItem("checki");

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
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
      localStorage.setItem("checki", myInt);
    } else {
      row.style.backgroundColor = 'white';
      myInt--;
      localStorage.setItem("checki", myInt);
    }
  });
});
function delete11() {
  let keysToRemove = ["checki", "checkbox1",
  "checkbox2",
  "checkbox3",
  "checkbox4",
  "checkbox5",
  "checkbox6",
  "checkbox7",
  "checkbox8",
  "checkbox9",
  "checkbox10",
  "checkbox11",
  "checkbox12",
  "checkbox13",
  "checkbox14",
  "checkbox15",
  "checkbox16",
  "checkbox17",
  "checkbox18",
  "checkbox19",
  "checkbox20",
  "checkbox21",
  "checkbox22",
  "checkbox23",
  "checkbox24",
  "checkbox25",
  "checkbox26",
  "checkbox27",
  "checkbox28"];

  for (key of keysToRemove) {
    localStorage.removeItem(key);
}
  location.reload()
}
function delete12() {
  let keysToRemove = ["cchecki", "checkboxx1",
  "checkboxx2",
  "checkboxx3",
  "checkboxx4",
  "checkboxx5",
  "checkboxx6",
  "checkboxx7",
  "checkboxx8",
  "checkboxx9",
  "checkboxx10",
  "checkboxx11",
  "checkboxx12",
  "checkboxx13",
  "checkboxx14",
  "checkboxx15",
  "checkboxx16",
  "checkboxx17",
  "checkboxx18",
  "checkboxx19",
  "checkboxx20",
  "checkboxx21",
  "checkboxx22",
  "checkboxx23",
  "checkboxx24",
  "checkboxx25",
  "checkboxx26",
  "checkboxx27",
  "checkboxx28",
  "checkboxx29",
  "checkboxx30",
  "checkboxx31",
  "checkboxx32",
  "checkboxx33",
  "checkboxx34",
  "checkboxx35",
  "checkboxx36",
  "checkboxx37",
  "checkboxx38",
  "checkboxx39",
  "checkboxx40",
  "checkboxx41",
  "checkboxx42",
  "checkboxx43",
  "checkboxx44",];

  for (key of keysToRemove) {
    localStorage.removeItem(key);

  location.reload()
}
}
function codeAddress() {
  if (localStorage.getItem("checki") >= 1){
    document.getElementById('y11s').innerHTML = "Status: " + localStorage.getItem("checki")+"/28";
    let y11p = ((localStorage.getItem("checki")/28)*100)
    document.getElementById("y11m").setAttribute("value", y11p);
  }
  if (localStorage.getItem("cchecki") >= 1){
    document.getElementById('y12s').innerHTML = "Status: " + localStorage.getItem("cchecki")+"/44";
    let y12p = ((localStorage.getItem("cchecki")/44)*100)
    document.getElementById("y12m").setAttribute("value", y12p);
  }
}
window.onload = codeAddress;