/*jshint esversion: 6 */
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('swSS.js', { scope: '/' })
        .then( reg => {
            console.log('Service Worker: Register ok', reg);
        }).catch( err => {
            console.log('Registration failed', err);
        });
    });
    
}

window.addEventListener('online', () => {console.log('You are online');}
);

window.addEventListener('offline', () => {console.log('You are offline');}
);

navigator.serviceWorker.addEventListener('message', event => {
    console.log(event.data.msg, event.data.url);
  });

  /// Change Web colour palette

  function setRed() {

    // If last node link is already a theme change remove isolation

    let path = document.head.lastElementChild.href.split( '/' );
    if(path[4] != "style.css"){
        document.head.lastElementChild.remove();
    }
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "css/red_theme.css");

    document.head.appendChild(newlink);
    document.querySelector('.rounded-circle').src = 'images/apple-touch-icon.png';

      
  }

  function setBlue(params) {


        // If last node link is already a theme change remove isolation

        let path = document.head.lastElementChild.href.split( '/' );
        if(path[4] != "style.css"){
            document.head.lastElementChild.remove();
        }
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "css/blue_theme.css");
    
        document.head.appendChild(newlink);
        document.querySelector('.rounded-circle').src = 'images/apple-touch-icon.png';
      
  }

  function setOrange(params) {

    let path = document.head.lastElementChild.href.split( '/' );
    if(path[4] != "style.css"){
        document.head.lastElementChild.remove();
    }
    
    document.querySelector('.rounded-circle').src = 'images/apple-touch-icon-orange.png';
  }

  const redPicker = document.getElementById('redPicker');
  const bluePicker = document.getElementById('bluePicker');
  const orangePicker = document.getElementById('orangePicker');

  redPicker.addEventListener('click', setRed);
  bluePicker.addEventListener('click', setBlue);
  orangePicker.addEventListener('click', setOrange);