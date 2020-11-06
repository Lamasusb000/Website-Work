document.getElementById("WaveSelect").addEventListener(onchange, SetCount())

function SetCount(){
    Waves = document.getElementById("WaveSelect").value
    console.log(`Waves starting at Zero ${Waves}`)
}