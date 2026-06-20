function updateInfo() {
    const race = document.getElementById("race").value;
    const characterClass = document.getElementById("characterClass").value;
    const infoPanel = document.getElementById("infoPanel");

    const raceData = raceInfo[race];
    const classText =
        classInfo[characterClass] ||
        "No class information available.";

    infoPanel.innerHTML = `
        <h2>Information</h2>

        <h3>Race: ${race}</h3>

        <p>${raceData.description}</p>

        <br>

        <h3>Current Stats</h3>

        <p>STR 10 ${raceData.STR ? `(${raceData.STR > 0 ? "+" : ""}${raceData.STR})` : ""}</p>
        <p>DEX 10 ${raceData.DEX ? `(${raceData.DEX > 0 ? "+" : ""}${raceData.DEX})` : ""}</p>
        <p>CON 10 ${raceData.CON ? `(${raceData.CON > 0 ? "+" : ""}${raceData.CON})` : ""}</p>
        <p>INT 10 ${raceData.INT ? `(${raceData.INT > 0 ? "+" : ""}${raceData.INT})` : ""}</p>
        <p>WIS 10 ${raceData.WIS ? `(${raceData.WIS > 0 ? "+" : ""}${raceData.WIS})` : ""}</p>
        <p>CHA 10 ${raceData.CHA ? `(${raceData.CHA > 0 ? "+" : ""}${raceData.CHA})` : ""}</p>

        <br>

        <h3>Class: ${characterClass}</h3>

        <p>${classText}</p>
    `;
}