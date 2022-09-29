import { View } from "./View.js"
import { Emitter } from "./Emitter.js"

export const Timer = {
    time: 60 * 60, currentTime: 0, interval: null,
    timeToMin: time => Math.floor(time/60),
    timeToSec: time => time % 60,
    formatTime: time => String(time).padStart(2, '0'),

    init(time) {
        Emitter.emit('countdown-start')
        Timer.time = time || 60 * 60
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)

    },

    countdown() {
        Timer.currentTime = Timer.currentTime - 1
        // console.log(Timer.currentTime)
        const min = Timer.formatTime(Timer.timeToMin(Timer.currentTime))
        const sec = Timer.formatTime(Timer.timeToSec(Timer.currentTime))

        View.render({
            min, sec
        })

        if(Timer.currentTime == 0){
            clearInterval(Timer.interval)
            Emitter.emit('countdown-end')
            return
        }
    }
} 