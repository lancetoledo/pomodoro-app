class Timer {
    constructor(type = "pomodoro") {
        this.type = type;
        this.pomodoro = 25;
        this.shortbreak = 5;
        this.longbreak = 15;
        this.clock = document.getElementById("time")
        this.actionElement = document.getElementById("action")
        this.time = this.pomodoro;
        this.text = this.time < 9 ? `0${this.time}` : `${this.time}`;
        this.circle = document.querySelector("#ring > circle");
    }


    select(type) {
        this.type = type
        this.reset()


        // console.log(this.type)
    }

    start() {
      console.log("test")
      const format = (time) => (time<10?"0" + time : time);
      let time = this[this.type] * 60;

      this.clock.innerText = `${this.text}:00`;
      this.circle.style.strokeDashoffset = 1024;

      let startTime = time;
      let minutes = 0
      let seconds = 0

      time--
      this.interval = setInterval(()=> {
        minutes = Math.floor(time/60);
        seconds = Math.floor(time % 60);

        minutes = format(minutes);
        seconds = format(seconds);

        this.clock.innerText = `${minutes}:${seconds}`;
        const percent = ((time%startTime)/startTime)*100;
        const offset = (percent/100) * 1024

        this.circle.style.strokeDashoffset = offset;

        if(--time < 0) {
          time = 0;
          clearInterval(this.interval);
          this.actionElement.innerText = "reset";
        }
      }, 1000)

      this.actionElement.innerText = "stop"
    




        //start the timer
        // let timeleft = 0
        // if(this.type == "pomodoro") {   
        //     timeleft = this.pomodoro
        //     this.interval = setInterval(function(){
        //         if(timeleft <= 0){
        //           clearInterval(this.interval);
        //           console.log("timer stopped")
        //           document.getElementById("time").innerHTML = 0;
        //         } else {
        //           document.getElementById("time").innerHTML = timeleft 
        //         }
        //         timeleft--;
        //       }, 2500);
        // }
        // else if(this.type == "shortbreak") {
        //     timeleft = this.shortbreak
        //     this.interval = setInterval(function(){
        //         if(timeleft <= 0){
        //           clearInterval(this.interval);
        //         //   console.log("timer stopped")
        //           document.getElementById("time").innerHTML = 0;
        //         } else {
        //           document.getElementById("time").innerHTML = timeleft 
        //         }
        //         timeleft--;
        //       }, 500);
        // }
        // else if(this.type == "longbreak") {
        //     timeleft = this.longbreak
        //     this.interval = setInterval(function(){
        //         if(timeleft <= 0){
        //           clearInterval(this.interval);
        //           console.log("timer stopped")
        //           document.getElementById("time").innerHTML = 0;
        //         } else {
        //           document.getElementById("time").innerHTML = timeleft 
        //         }
        //         timeleft--;
        //       }, 1500);
        // }
    }

    reset() {
        this.stop()
        this.circle.style.strokeDashoffset = 1024;
        this.time = this[this.type]
        this.text = this.time < 9 ? `0${this.time}`: `${this.time}`
        this.actionElement.innerText = "start"
        this.clock.innerText = `${this.text}:00`;
        // if(this.type == "pomodoro") {
        //     this.clock.innerText = this.pomodoro
        // }
        // else if(this.type == "shortbreak") {
        //     this.clock.innerText = this.shortbreak
        // }
        // else if(this.type == "longbreak") {
        //     this.clock.innerText = this.longbreak
        // }
    }

    stop() {
        clearInterval(this.interval)
        this.actionElement.innerText = "start"
        // console.log("timer stopped!")
    }
}