hourDisplay = document.getElementById("hour")
minuteDisplay = document.getElementById("minute")
secondDisplay = document.getElementById("second")
amPmDisplay = document.querySelector(".am-pm")
iconNight = document.querySelector(".iconDark")
body = document.querySelector("body")

setInterval(() => {
    let date = new Date()
    hour = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()

    let d
    d = hour < 12 ? "AM" : "PM"
    hour = hour > 12 ? hour - 12 : hour
    hour = hour == 0 ? hour = 12 : hour

    hour = hour < 10 ? "0" + hour : hour
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    hourDisplay.innerText = `${hour}:`
    minuteDisplay.innerText = `${min}:`
    secondDisplay.innerText = `${sec}`
    amPmDisplay.innerText = `${d}`
}, 1000)