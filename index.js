const dateSelect = document.querySelector("#start-date");
dateSelect.addEventListener('input', startTimer);
function startTimer(){
  const selectTime = dateSelect.value; 
  
  const example = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(selectTime),
});
console.log(example);
}

class CountdownTimer{
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate =  targetDate;
    this.start();
  };
  start(){
      setInterval(()=>{
      const targetDate = this.targetDate.getTime();
      const currentTime = new Date().getTime();
      const timeDifference = targetDate - currentTime;
      const timeComponent = this.getTimeComponent(timeDifference);
      if(timeDifference<0) 
      return  this.updateClock(timeComponent);

    }, 1000)
  }
  getTimeComponent(time){
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {days, hours, mins, secs};
  }
  updateClock({days, hours, mins, secs}){
    const day = document.querySelector(`${this.selector} [data-value="days"]`);
    const hour = document.querySelector(`${this.selector} [data-value="hours"]`);
    const min = document.querySelector(`${this.selector} [data-value="mins"]`);
    const sec = document.querySelector(`${this.selector} [data-value="secs"]`);
    day.textContent = days;
    hour.textContent = hours;
    min.textContent = mins;
    sec.textContent = secs;
    }
}
