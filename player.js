const playerElement = document.querySelector('#my-player');
const controls = playerElement.querySelector('.btn-container');

const playbtn = controls.querySelector('#btn1');
const pausebtn = controls.querySelector('#btn2');
const fowordbtn = controls.querySelector('#btn3');
const backwordbtn = controls.querySelector('#btn4');
const progressBar = playerElement.querySelector('#progresso');

const audioElement = playerElement.querySelector('audio');

const bolinha = document.querySelector('.bolinha');
const boc = document.querySelector('.back');
const play = document.querySelector('#btn1');
const stop = document.querySelector('#btn2');

playbtn.addEventListener('click',() =>{
    audioElement.play();
});

pausebtn.addEventListener('click',()=>{
    audioElement.pause();
});

fowordbtn.addEventListener('click',()=>{
    audioElement.currentTime +=10;
});

backwordbtn.addEventListener('click',()=>{
    audioElement.currentTime -=10;
});

audioElement.addEventListener('timeupdate',()=>{
    const {
        currentTime,
        duration,
    } = audioElement;
    progressBar.style.width = `${100 * currentTime / duration}%`;
    bolinha.style.left =  `${100 * currentTime / duration}%`;
});

boc.addEventListener('click', (e)=>{
    const largura = boc.offsetWidth;
    const mouseX = e.pageX;
    const porcentagen = `${ mouseX / largura}`;
    const duration = audioElement.duration;

    audioElement.currentTime = (duration*porcentagen);
});

progressBar.addEventListener('click', (e)=>{
    const mouseX = e.pageX;
    const largura =  boc.offsetWidth;
    const porcentagen = `${ mouseX / largura}`;
    const duration = audioElement.duration;

    audioElement.currentTime = (duration*porcentagen);
});

play.addEventListener('click',()=>{
    play.style.overflow = "hidden";
    stop.style.overflow = "visible";
    console.log('funcionou');
});

stop.addEventListener('click',()=>{
    play.style.overflow = "visible";
    stop.style.overflow = "hidden";
});