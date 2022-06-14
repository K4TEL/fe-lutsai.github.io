function validate(){
  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var faculty = document.getElementById('faculty').value;
  var date = document.getElementById('date').value;
  var adress = document.getElementById('adress').value;

  var nameRGEX = /^[A-Z]{1}[a-z]{1,15}\s[A-Z]{1}\.[A-Z]{1}\.$/;
  var numberRGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/im;
  var facultyRGEX = /^[A-Z]{4}$/;
  var dateRGEX = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
  var adressRGEX = /^[c]\.\s[A-Z]{1}[a-z]{3,9}$/;

  var nameText = document.getElementById('nameT');
  var numberText = document.getElementById('numberT');
  var facultyText = document.getElementById('facultyT');
  var dateText = document.getElementById('dateT');
  var adressText = document.getElementById('adressT');

  nameText.textContent = name;
  numberText.textContent = number;
  facultyText.textContent = faculty;
  dateText.textContent = date;
  adressText.textContent = adress;

  if (! nameRGEX.test(name)) {
    nameText.style.color = "red";
  } else {
    nameText.style.color = "black";
  }
  if (! numberRGEX.test(number)) {
    numberText.style.color = "red";
  } else {
    numberText.style.color = "black";
  }
  if (! facultyRGEX.test(faculty)) {
    facultyText.style.color = "red";
  } else {
    facultyText.style.color = "black";
  }
  if (! dateRGEX.test(date)) {
    dateText.style.color = "red";
  } else {
    dateText.style.color = "black";
  }
  if (! adressRGEX.test(adress)) {
    adressText.style.color = "red";
  } else {
    adressText.style.color = "black";
  }
}

function generateTable() {
  var table = document.getElementById('table');
  var cell26;

  for (var r=0; r<6;r++) {
     var row = table.insertRow(r);
     for (var c=0; c<6;c++) {
       var cell = row.insertCell(c);
       var num = r*6 +c + 1;
       cell.innerHTML = num;
       if (num === 26) {
         cell26 = cell;
       }
     }
  }

  cell26.addEventListener('click', function onClick(event) {
    var color = document.getElementById('colorpicker').value;
    cell26.style.backgroundColor = color;
  });

  cell26.addEventListener("mouseenter", function( event ) {
    cell26.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
  });

  cell26.addEventListener("mouseleave", function( event ) {
    cell26.style.backgroundColor = "";
  });

  cell26.addEventListener("dblclick", function( event ) {
    var color = document.getElementById('colorpicker').value;
    for (var r=0; r<6;r++) {
       var row = table.rows[r];
       for (var c=0; c<6;c++) {
         var cell = row.cells[c];
         var num = r*6 +c + 1
         cell.innerHTML = num;
         if (num >= 26) {
           cell.style.backgroundColor = color;
         }
       }
    }
  });

}

window.onload = function() {
  generateTable();
}
