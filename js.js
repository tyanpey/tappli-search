
window.addEventListener('load', (event) => {

  addBtn = document.getElementById('add');
  formsDiv = document.getElementById('forms');
  addBtn.addEventListener('click', function(e) {
    textfield = document.createElement("input");
    textfield.type = "text";
    textfield.setAttribute("placeholder","検索ワードを入力");
    textfield.setAttribute("class","form");

    formsDiv.appendChild(textfield);
  });



  searchBtn = document.getElementById('search-btn');

  searchBtn.addEventListener('click', function(e) {
    forms_list = document.getElementsByClassName('form');
    keywords = [];

    for (i=0; i<forms_list.length; i++) {
      keywords.push(forms_list[i].value);
    }

    for (index in keywords) {
      window.open("https://www.google.com/search?q=" + keywords[index]);
    }

  })


});
