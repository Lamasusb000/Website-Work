function SetCount(){
    Waves = document.getElementById("WaveSelect").value
    RouteList = document.getElementById("RouteList")
    WaveList = []
    WaveList.push(`
    <h1>Wave Settings</h1>
    <p>Resubmitting Erases Data</p>
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
    WaveInfo = []
    WaveInfo.push(WaveLength)
    for (let i = 1; i <= Waves; i++) {
        WaveInfo.push(document.getElementById(`DSP${i}`).value)
    }

    netlifyIdentity.gotrue.currentUser().update({
		data: {
			RouteData: JSON.stringify(WaveInfo)
		}
	})
}