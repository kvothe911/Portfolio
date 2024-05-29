const letters = "abcdefghijklmnopqrstuvwxyz";
const h1 = document.querySelector("h1");
const span = document.querySelector('span');
const spanValues = span.dataset.value;
const h1Values = h1.dataset.value;
const menuIcon = document.querySelectorAll('.menu-icon')

// Efect h1 santiago<renedo>

h1.onmouseover = (event) => {
  let iterations = 0;
  const interval = setInterval(() => {
    let word = h1Values
      .split("")
      .map((letter, index) => {
        if (iterations > index) {
          return h1Values[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    let surnamePart = spanValues
      .split("")
      .map((letter, index) => {
        if (iterations > (index + 8)) {
          return spanValues[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    let name = word.slice(0, 8);
    let surname = surnamePart;

    // Actualizamos solo los contenidos de texto, no el HTML completo
    h1.childNodes[0].nodeValue = name;
    span.innerText = surname;

    if (iterations >= 16) clearInterval(interval);

    iterations += 1 / 2;
  }, 30);
  console.log(iterations);
};

console.log(span.innerText);

// time function

function checkTime(){
    let clock = document.getElementById('clock');
    let now = new Date()
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
      let seconds = now.getSeconds().toString().padStart(2,'0')
    clock.textContent = `${hours}:${minutes}:${seconds}`
    }
    
    checkTime();
    
    setInterval(checkTime,500)

// left icons color


let itemColor;

menuIcon.forEach((element, index) => {

    element.addEventListener('click', ()=>{
        itemColor = index
        menuIcon.forEach(el => {
            el.style.color = 'var(--icon-color)'
        });
        
        element.style.color = 'var(--icon-hover-color)'
        console.log(index)
    })
    
});

menuIcon.forEach(element => {
    element.addEventListener("mouseover", () => {
        menuIcon.forEach((el) => {
            if (el.style.color != 'var(--icon-hover-color)' ) {
                el.style.color = "var(--icon-color)";}
        });
        element.style.color = "var(--green-color)";
    });
    console.log(element.innerText);
});

menuIcon.forEach((element, index) => {
    element.addEventListener('mouseout', ()=>{
        element.style.color = 'var(--icon-color)'
        if (index === itemColor) {
            element.style.color = 'var(--icon-hover-color)'
        }
    })
});


const gradientBkg = document.querySelectorAll('.sphere')
const greenButton = document.querySelector('.bkg-btn')

document.querySelector('button').addEventListener('click', ()=> {
    gradientBkg.forEach(element => {
        element.classList.toggle('opacity')
    });
        greenButton.classList.toggle('opacity')
})

const maxBtn = document.querySelector('.max')
console.log(maxBtn.innerHTML);

maxBtn.addEventListener('click', ()=> {
    const element = document.documentElement
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Si no estamos en pantalla completa, entramos en pantalla completa
        const elem = document.documentElement; // Selecciona el elemento raíz (documento completo)

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // Internet Explorer/Edge
            elem.msRequestFullscreen();
        }
        maxBtn.innerHTML = `
        <svg data-v-d1e61456="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="icon" width="1em" height="1em">
            <path d="M7.44.67q-.53 0-.9.02a2 2 0 0 0-.78.2 2 2 0 0 0-.87.87 2 2 0 0 0-.2.78q-.02.37-.02.9v1.23H3.44q-.53 0-.9.02a2 2 0 0 0-.78.2 2 2 0 0 0-.88.87 2 2 0 0 0-.2.78l-.01.9v5.12q0 .52.02.9a2 2 0 0 0 .2.78 2 2 0 0 0 .87.88 2 2 0 0 0 .78.2l.9.01h5.12q.53 0 .9-.02a2 2 0 0 0 .78-.2 2 2 0 0 0 .88-.87 2 2 0 0 0 .2-.78l.01-.9v-1.23h1.23q.52 0 .9-.02a2 2 0 0 0 .78-.2 2 2 0 0 0 .88-.87 2 2 0 0 0 .2-.78l.01-.9V3.44q0-.52-.02-.9a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.88 2 2 0 0 0-.78-.2l-.9-.01zM7.47 2h5.06q.56 0 .83.02a1 1 0 0 1 .28.05.7.7 0 0 1 .29.3q.02.03.05.27c.02.2.02.44.02.83v5.06q0 .56-.02.83a1 1 0 0 1-.05.27.7.7 0 0 1-.3.3 1 1 0 0 1-.28.05l-.82.02H7.47q-.57 0-.82-.02a1 1 0 0 1-.29-.05.7.7 0 0 1-.29-.3 1 1 0 0 1-.05-.28L6 8.53V3.47q0-.57.02-.82a1 1 0 0 1 .05-.29.7.7 0 0 1 .3-.29q.03-.02.28-.05Q6.9 2 7.47 2m-4 4h1.2v2.56q0 .52.02.9a2 2 0 0 0 .2.78 2 2 0 0 0 .87.88 2 2 0 0 0 .78.2l.9.01H10v1.2q0 .56-.02.83a1 1 0 0 1-.05.28.7.7 0 0 1-.3.29 1 1 0 0 1-.28.05q-.25.02-.82.02H3.47c-.39 0-.63 0-.82-.02a1 1 0 0 1-.29-.05.7.7 0 0 1-.29-.3 1 1 0 0 1-.05-.28Q2 13.1 2 12.53V7.47q0-.57.02-.82a1 1 0 0 1 .05-.29.7.7 0 0 1 .3-.29q.03-.03.28-.05T3.47 6">
            </path>
        </svg>    
        `
    } else {
        // Si estamos en pantalla completa, salimos de pantalla completa
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // Internet Explorer/Edge
            document.msExitFullscreen();
        }
        maxBtn.innerHTML = `
        <svg data-v-d1e61456="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="icon" width="1em" height="1em">
            <path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6">
            </path>                        
        </svg>            
        `
    }
});