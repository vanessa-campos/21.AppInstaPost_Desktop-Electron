export const View = {
    render({min, sec}) {
        // const timer = document.getElementById("timer")
        // timer.innerHTML = `
        document.body.innerHTML = `
        <p>Próximo Post em</p>
        <span>${min}:${sec}</span>
        `        
    }
}
