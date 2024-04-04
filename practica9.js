function actualizarRelojDigital() {
    const relojDigital = document.getElementById('reloj-digital');
    const fecha = new Date();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    relojDigital.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarRelojDigital, 1000);
actualizarRelojDigital(); 





function getTime() {
  const time = new Date();

  const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

  const getHourRot = (360 / 12) * time.getHours();
  const getMinRot = (360 / 60) * time.getMinutes();
  const getSecRot = (360 / 60) * time.getSeconds();

  hour.style.transform = `rotate(${getHourRot}deg)`;
  min.style.transform = `rotate(${getMinRot}deg)`;
  sec.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();