
function Test(time){
  
  class T{

      constructor(time){
        
        this.duration = time
        this.time = time*1000
        this.clicks = 0
      }

      init(){

        this.duration = time
        this.time = time*1000
        this.clicks = 0
      }
    }

  return new T(time)
}


var test = Test(15)

let countdown = document.getElementById("time")
let cps_speed = document.getElementById("speed")
let start = document.getElementById("b1")


countdown.innerText = test.duration

async function repeat(num, func, delay){

  for (let i = num; i > 1 || num == 0; i--){

    await new Promise((resolve,reject) => setTimeout(()=>{func();resolve()}, delay));
    
  }

}

function update(){

  test.time -= 100

  countdown.innerText = test.time/1000
  cps_speed.innerText = `CPS: ${Math.round((test.clicks/(test.duration-test.time/1000))*10)/10}`
  
  if (test.time <= 0){

    cps_speed.innerText = `CPS: ${Math.round((test.clicks/test.duration)*10)/10}`

    test.init()

    start.innerText = "Click here to start"
    countdown.innerText = test.duration
    btn_pause()
  }

}

function record(){

  test.clicks++

  start.innerText = test.clicks
}


async function btn_pause(){

  start.disabled = true;

  await new Promise(resolve => setTimeout(resolve, 1000));

  start.disabled = false;

}


function timer(){

  if (test.clicks > 1) return
  
  repeat(test.duration*10+1, update, 100)
  
}
