function getClock() {
    let date = new Date() 
    let hour = String(date.getHours()).padStart(2,'0');
    let minute = String(date.getMinutes()).padStart(2,'0');
    let seconds = String(date.getSeconds()).padStart(2,'0');
    return `${hour}:${minute}:${seconds}`
    }
    
    setInterval(function() {
        clock.innerHTML = getClock()
    },1000)
    
    clock.innerHTML = getClock()
    