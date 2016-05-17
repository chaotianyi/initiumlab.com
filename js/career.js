(function () {
  var titles = document.querySelectorAll('#career h2');
  console.log(titles);
  [].forEach.call(titles, function (title) {
    title.addEventListener('click', function (event) {
      var section = event.target.nextElementSibling;
      if (!section.style.height || section.style.height == '0px') {
        section.style.height = section.childNodes[0].clientHeight + 34 + 'px';
      } else {
        section.style.height = '0px';
      }
    });
  });
})()