const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let DateToday = new Date();
    let hr = DateToday.getHours();
    let min = DateToday.getMinutes();
    let sec = DateToday.getSeconds();

    if(hr < 10) hr = "0" + hr;
   
    if(min < 10) min = "0" + min;
     
    if(sec < 10) sec = "0" + sec;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

});