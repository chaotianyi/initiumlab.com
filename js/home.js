(function(window, document, xdomain){

  console.log('home script loaded');

  function addQuote() {
    var quotes = [
      "Zhikai and Duanzhao lives together",
      "Ben and William lives together",
      "Cat and Ben are iOS developers",
      "Charlie can write R",

    ];
    /* These quotes are not attributed because we can't verify the authenticity of many of the attributions. */

    var quoteDOMNode = document.getElementById('quote');
    var currentQuote = window.localStorage['currentQuote'];

    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    while (randomQuote === currentQuote) {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    for (var i = 0; i < randomQuote.length; i++) {
      (function (index) {
        setTimeout(function () {
          var text = randomQuote.substr(0, index + 1);
          quoteDOMNode.innerHTML = text;
        }, 40 * (index + 1));
      })(i)
    }
    window.localStorage['currentQuote'] = randomQuote;
  }

  addQuote();

  /* Add lightbox effects */

  window.currentLightbox = null;
  var projects = [];

  function closeLightbox(lightbox) {
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll');
    window.currentLightbox = null;

    // Clear hash
    window.location.hash = '';
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    console.log(lightbox)

    document.title = window.localStorage['initTitle'];

    ga('send', 'event', 'lightbox', 'close', lightbox.id);
  }

  function configLightbox(project){
    var anchor = document.getElementById('anchor-'+project);
    var btnClose = document.getElementById('btnClose-'+project);
    var lightbox = document.getElementById('lightbox-'+project);

    anchor.addEventListener('click', function(event){

      // Open Lightbox

      event.preventDefault();
      lightbox.style.display = 'block';
      document.body.classList.add('no-scroll');
      window.location.hash = event.target.parentNode.id.replace('anchor-', '');
      window.currentLightbox = lightbox;
      document.title = currentLightbox.getElementsByTagName('h1')[0].textContent + " | Initium Lab"

      ga('send', 'event', 'lightbox', 'open', lightbox.id);

    });

    btnClose.addEventListener('click', function(){
      closeLightbox(lightbox);
    });

    projects.push([project, lightbox]);
  }

  document.onkeydown = function(event){
    if (event.keyCode === 27) {
      // Esc key
      closeLightbox(window.currentLightbox);
    }
  };

  var showcaseAnchors = document.getElementsByClassName('showcase-anchor')
  var projectCode
  for (i = 0; i < showcaseAnchors.length; i += 1) {
    projectCode = showcaseAnchors[i].dataset.projectcode
    configLightbox(projectCode)
  }

  // Open lightbox if location includes hashtags pointing to a case
  var hash = window.location.hash;
  var i, projectName, lightbox;
  if (hash != '') {
    for (i = 0; i < projects.length; i += 1) {
      projectName = projects[i][0];
      lightbox = projects[i][1];
      if (hash.slice(1) === projectName) {
        lightbox.style.display = 'block';
        document.body.classList.add('no-scroll');
        window.currentLightbox = lightbox;
        document.title = currentLightbox.getElementsByTagName('h1')[0].textContent + "| Initium Lab"

        ga('send', 'event', 'lightbox', 'url-direct-open', lightbox.id);
      }
    }
  }

  window.localStorage['initTitle'] = document.title;

}(window, window.document, window.xdomain));
