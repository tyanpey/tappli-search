
function completeParent(target) {
  formDiv = $(target).parent()

  keyword = formDiv.find('input')[0].value;
  if (keyword != "") {
    complete_mark = formDiv.find('div')[0];
    $(complete_mark).css('display', 'block');

    button = formDiv.find('button')[0];
    $(button).css("background-color", "#c7c7c7");

    field = formDiv.find('input')[0];
    $(field).css("border-color", "#c7c7c7");
    $(field).css("color", "#c7c7c7");
  }
}


function openLink(keyword) {
  if (keyword != "") {
    window.open("https://www.google.com/search?q=" + keyword);
  }
}

function addField() {
  formsDiv = document.getElementsByClassName('forms')[0];
  div = document.createElement('div');
  div.innerHTML = `
    <div class="indicator">
      <p>リサーチ済</p>
    </div>
    <input type="text" name="" value="" class="form-input" placeholder="検索ワードを入力">
    <button class="search-one">→</button>
    </div>
  `;
  div.setAttribute('class', 'form-wrap')
  formsDiv.appendChild(div);
  addedField = $(formsDiv).children().last().find('input')[0];

  searchOneBtn = document.getElementsByClassName('search-one');
  btn = searchOneBtn[searchOneBtn.length-1];
  btn.addEventListener('click', function(e) {
    keyword = $(e.target).parent().find('input')[0].value;
    completeParent(e.target);
    openLink(keyword);
  })

  return addedField

}



window.addEventListener('load', (event) => {

  firstSearchOneBtn = document.getElementById('first-button');
  firstSearchOneBtn.addEventListener('click', function(e) {
    keyword = $(e.target).parent().find('input')[0].value;
    completeParent(e.target);
    openLink(keyword);
  })


  addBtn = document.getElementById('add');
  addBtn.addEventListener('click', function(e) {

    addedFild = addField();
    addedField.focus()

  });

  forms_list = document.getElementsByClassName('form-input');
  $(document).on('keyup', function (e) {
    if (e.keyCode === 13 && $(forms_list).is(':focus')) {
      addedFild = addField();
      addedField.focus()
    }
});








  searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', function(e) {
    forms_list = document.getElementsByClassName('form-input');
    keywords = [];

    for (i=0; i<forms_list.length; i++) {
      keywords.push(forms_list[i].value);
    }
    console.log(keywords)

    indicators = document.getElementsByClassName('indicator');
    for (i=0; i<indicators.length; i++) {
      completeParent(indicators[i]);
    }

    for (var index in keywords) {
      openLink(keywords[index]);
    }

  })


});
