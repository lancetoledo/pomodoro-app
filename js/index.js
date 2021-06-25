const timer = new Timer();
timer.reset();

const action = (action = "stop") => {
    switch(action.toLowerCase()) {
        case "start":
            timer.start();
            break;
        default:
            timer.stop();
            break;
    }
} 

const navLinks = document.querySelectorAll('.nav > ul > li');
const navBg = document.getElementById('indicator');

navLinks.forEach((navItem,i) =>{
    navItem.addEventListener('click', ()=> {
        navLinks.forEach((nav)=>{
            nav.classList.remove('active');
            navBg.style.marginLeft = `calc(calc(100%/3)*${i})`;
            navItem.classList.add('active')
        })
    })
})

const settingsContainer = document.getElementById('settingscontainer');

document.querySelector('#settings > img').addEventListener('click', ()=>{
    settingsContainer.style.visibility = "visible";
    settingsContainer.style.opacity = 1;
})
