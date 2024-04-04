function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('h').innerText = hours;
    document.getElementById('n').innerText = minutes;
    document.getElementById('s').innerText = seconds;
  }
  
  function rotateCube() {
    const cube = document.getElementById('cube');
    const rotation = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;
    cube.style.transform = rotation;
  }
  
  setInterval(updateTime, 1000);
  setInterval(rotateCube, 5000);
  