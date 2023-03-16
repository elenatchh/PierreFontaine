let image = document.getElementById("gif");

function fadeOut() {
    let opacity = 1;
    const intervalId = setInterval(() => {
      opacity -= 0.1;
      image.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(intervalId);
        image.style.display = "none";
      }
    }, 100);
  }
  setTimeout(fadeOut, 3000);

let text1 = document.getElementById("text1");

function fadeOut2() {
    let opacity = 1;
    const intervalId = setInterval(() => {
      opacity -= 0.1;
      text1.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(intervalId);
        text1.style.display = "none";
      }
    }, 100);
  }
  setTimeout(fadeOut2, 3000);

let textElement = document.getElementById('text');
let text = 'Le Héron sauvage';
let index = 0;
  
  setTimeout(function() {
    const intervalId = setInterval(function() {
      if (index <= text.length) {
        textElement.innerText = text.slice(0, index);
        textElement.style.opacity = index / text.length; // changer l'opacité pour faire apparaître progressivement le texte
        index++;
      } else {
        clearInterval(intervalId); // arrêter l'animation une fois le texte entièrement écrit
      }
    }, 100); // ajustez la vitesse de l'animation en modifiant le temps en millisecondes (ici 100 ms)
  }, 3000); 