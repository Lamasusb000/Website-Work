function SetCount(){
    Waves = document.getElementById("WaveSelect").value
    RouteList = document.getElementById("RouteList")
    WaveList = []
    WaveList.push(`
    <h1>Wave Settings</h1>
    <p>Resubmitting Erases Data</p>
    <select id="WaveLength">
        <option value="10">10 Minutes Each</option>
        <option value="5">5 Minutes Each</option>
        <option value="15">15 Minutes Each</option>
        <option value="20">20 Minutes Each</option>
        <option value="25">25 Minutes Each</option>
        <option value="30">30 Minutes Each</option>
        <option value="35">35 Minutes Each</option>
        <option value="40">40 Minutes Each</option>
        <option value="45">45 Minutes Each</option>
        <option value="50">50 Minutes Each</option>
        <option value="55">55 Minutes Each</option>
        <option value="60">60 Minutes Each</option>
    </select>
    `)
    for (let i = 1; i <= Waves; i++) {
        WaveList.push(`
        <span>Wave ${i} DSP
        <input type="text" id="DSP${i}"></span>
        `)
    }
    WaveList.push(`
    <input type="button" value="Set Route List" onclick="SetRouteData()">
    `)
    RouteList.innerHTML = WaveList.join("<br>")
}

function SetRouteData(){
    Waves = document.getElementById("WaveSelect").value
    WaveLength = document.getElementById("WaveLength").value
    Cycle = document.getElementById("Cycle").value
    WaveInfo = []
    WaveInfo.push(WaveLength)
    for (let i = 1; i <= Waves; i++) {
        WaveInfo.push(document.getElementById(`DSP${i}`).value)
    }

    if (Cycle == "One"){
        var PreviousWave = netlifyIdentity.currentUser().user_metadata.Dispatcher.WaveInfo.CycleTwo
        netlifyIdentity.gotrue.currentUser().update({
            data: {
                Dispatcher: {
                    WaveInfo: {
                        CycleOne: `${JSON.stringify(WaveInfo)}`,
                        CycleTwo: `${PreviousWave}`
                    }
                }
            }
        })
        return "Set to CycleOne"
    }
    if(Cycle == "Two"){
        var PreviousWave = netlifyIdentity.currentUser().user_metadata.Dispatcher.WaveInfo.CycleOne
        netlifyIdentity.gotrue.currentUser().update({
            data: {
                Dispatcher: {
                    WaveInfo: {
                        CycleOne: `${PreviousWave}`,
                        CycleTwo: `${JSON.stringify(WaveInfo)}`
                    }
                }
            }
        })
        return "Set to CycleTwo"
    }
}

function ChangeSetupCycle(){
    Cycle = document.getElementById("Cycle").value
    SetupRevist(Cycle)
}

function SetupRevist(Cycle){
    if(Cycle == "One" | Cycle == undefined){
        Cycle = "One"
        var WaveInfo = netlifyIdentity.currentUser().user_metadata.Dispatcher.WaveInfo.CycleOne
    }
    if (Cycle == "Two"){
        var WaveInfo = netlifyIdentity.currentUser().user_metadata.Dispatcher.WaveInfo.CycleTwo
    }
    if(WaveInfo == undefined){
        document.getElementById("RouteList").innerHTML = ""
        return "NoSavedInfo"
    }
    WaveInfo = JSON.parse(WaveInfo)
    var WaveLength = WaveInfo[0]
    var DSPlist = []
    DSPlist.push("Buffer Text")
    for (let i = 1; i < WaveInfo.length; i++) {
        DSPlist.push(WaveInfo[i])        
    }
    var Waves = DSPlist.length - 1
    document.getElementById("WaveSelect").value = `${Waves}`
    RouteList = document.getElementById("RouteList")
    WaveList = []
    WaveList.push(`
    <h1 id="Cycle">Cycle ${Cycle} Settings</h1>
    <span>Wave Length</span><select id="WaveLength">
        <option value="10">10 Minutes Each</option>
        <option value="5">5 Minutes Each</option>
        <option value="15">15 Minutes Each</option>
        <option value="20">20 Minutes Each</option>
        <option value="25">25 Minutes Each</option>
        <option value="30">30 Minutes Each</option>
        <option value="35">35 Minutes Each</option>
        <option value="40">40 Minutes Each</option>
        <option value="45">45 Minutes Each</option>
        <option value="50">50 Minutes Each</option>
        <option value="55">55 Minutes Each</option>
       <option value="60">60 Minutes Each</option>
    </select>
    `)
    for (let i = 1; i <= Waves; i++) {
        WaveList.push(`
        <span>Wave ${i} DSP
        <input type="text" value="${DSPlist[i]}" id="DSP${i}"></span>
        `)
    }
    WaveList.push(`
    <input type="button" value="Set Route List" onclick="SetRouteData()">
    `)
    RouteList.innerHTML = WaveList.join("<br>")
    document.getElementById("WaveLength").value = `${WaveLength}`
    return "Preivous Information Pasted"
}