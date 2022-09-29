import { Notifyer } from "./Notifyer.js"
import { Timer } from "./Timer.js"
import { Emitter } from "./Emitter.js"

const notify = Notifyer.notify({title: "Hora do Post", body: "Crie algum conteúdo para ajudar a comunidade"})

export const App = {
    async start(){
       try{
        await Notifyer.init()

        Emitter.on('countdown-start', notify) 
        // Emitter.on('countdown-start', () => {
        //     console.log('Notificação enviada!')
        // })           
        
        Emitter.on('countdown-end', Timer.init)
        // Emitter.on('countdown-end', () => {
        //     console.log('Contagem terminou!')
        //     Timer.init()
        // })

        // Timer.init()
        Timer.init()
        
       }catch (err) {
        console.log(err.message)
       }
    }
}