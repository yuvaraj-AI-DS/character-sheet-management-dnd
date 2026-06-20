const stats = ["dex", "con", "int", "wis", "cha"];
function getCharacters() {
    return JSON.parse(localStorage.getItem("characters")) || [];
}

function saveCharacter() {
    const name = document.getElementById("characterName").value.trim();
    const race = document.getElementById("race").value;
    const characterClass = document.getElementById("characterClass").value;
    const age = document.getElementById("age").value;
    const world = document.getElementById("world").value;
    if (!name || !age || !world) {
        alert("Please fill all fields.");
        return;
    }

    const raceData =
    raceInfo[race];

const character = {

    id: Date.now(),

    owner:
        localStorage.getItem("currentUser"),

    name,

    race,

    class:
        characterClass,

    age,

    world,

    level: 1,

    exp: 0,

    str:
        10 + raceData.STR,

    dex:
        10 + raceData.DEX,

    con:
        10 + raceData.CON,

    int:
        10 + raceData.INT,

    wis:
        10 + raceData.WIS,

    cha:
        10 + raceData.CHA,

    statPoints: 0,

    buffs: [],

    effects: []
};

    const characters = getCharacters();

    characters.push(character);

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    alert("Character Created!");
    window.location.href = "character.html";
}

function loadCharacters() {
    const currentUser = localStorage.getItem("currentUser");
    const grid = document.getElementById("characterGrid");

    if (!grid) return;

    const userCharacters = getCharacters().filter(
        character => character.owner === currentUser
    );

    grid.innerHTML = "";

    userCharacters.forEach(character => {
        const card = document.createElement("div");

        card.className = "character-card";
        card.onclick = () => openCharacter(character);

        card.innerHTML = `
            <h2>${character.name}</h2>
            <p>Race: ${character.race}</p>
            <p>Class: ${character.class}</p>
            <p>Level: ${character.level}</p>
            <p>EXP: ${character.exp}</p>
            <p>World: ${character.world}</p>

            <button
                class="delete-btn"
                onclick="deleteCharacter('${character.name}')">
                Delete
            </button>
        `;

        grid.appendChild(card);
    });
}

function deleteCharacter(characterName) {
    if (!confirm(`Delete ${characterName}?`)) return;

    const currentUser = localStorage.getItem("currentUser");

    const characters = getCharacters().filter(
        character =>
            !(character.owner === currentUser &&
              character.name === characterName)
    );

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    loadCharacters();

    alert(`${characterName} deleted successfully.`);
}

function openCharacter(character) {
    character.buffs =
        character.buffs || [];
    character.effects =
        character.effects || [];
    const modal = document.getElementById("characterModal");
    const body = document.getElementById("modalBody");
    body.innerHTML = `
        <div class="sheet-header">
            <h1>${character.name}</h1>
            <p>Level ${character.level} ${character.class}</p>
        </div>

        <div class="sheet-grid">

            <div class="sheet-section">
                <h2>Character Information</h2>

                <p><strong>Race:</strong> ${character.race}</p>
                <br>

                <p><strong>Class:</strong> ${character.class}</p>
                <br>

                <p><strong>World:</strong> ${character.world}</p>
                <br>

                <p><strong>Level:</strong> ${character.level}</p>
                <br>
                <p><strong>EXP:</strong> ${character.exp}/100</p>
                <br>
                <p><strong>Stat Points:</strong>${character.statPoints}</p>
                <br>

                <p><strong>Buffs:</strong>
                    ${
                        character.buffs.length
                        ? character.buffs.join(", ")
                        : "None"
                }
                </p>
                <br>

                <p><strong>Effects:</strong>
                    ${
                        character.effects.length
                        ? character.effects.join(", ")
                        : "None"
                    }
                </p>
            </div>

            <div class="sheet-section">
                <h2>Statistics</h2>

                <div class="stats-grid">

    <div class="stat-box">
    STR
    <br>
    ${character.str}
    <br>

    ${
        character.statPoints > 0
        ?
        `<button onclick="increaseStat('${character.id}','str')">
            +
        </button>`
        :
        ""
    }
</div>

<div class="stat-box">
    DEX
    <br>
    ${character.dex}
    <br>

    ${
        character.statPoints > 0
        ?
        `<button onclick="increaseStat('${character.id}','dex')">
            +
        </button>`
        :
        ""
    }
</div>

<div class="stat-box">
    CON
    <br>
    ${character.con}
    <br>

    ${
        character.statPoints > 0
        ?
        `<button onclick="increaseStat('${character.id}','con')">
            +
        </button>`
        :
        ""
    }
</div>

<div class="stat-box">
    INT
    <br>
    ${character.int}
    <br>

    ${
        character.statPoints > 0
        ?
        `<button onclick="increaseStat('${character.id}','int')">
            +
        </button>`
        :
        ""
    }
</div>

<div class="stat-box">
    WIS
    <br>
    ${character.wis}
    <br>

    ${
        character.statPoints > 0
        ?
        `<button onclick="increaseStat('${character.id}','wis')">
            +
        </button>`
        :
        ""
    }
</div>

<div class="stat-box">
    CHA
    <br>
    ${character.cha}
    <br>

    ${
        character.statPoints > 0
        ?
        `<button onclick="increaseStat('${character.id}','cha')">
            +
        </button>`
        :
        ""
    }
</div>

</div>
            </div>

        </div>
    `;

    modal.style.display = "block";
}

function closeCharacter() {
    document.getElementById("characterModal").style.display = "none";
}
function loadWorlds() {

    let worlds =
        JSON.parse(localStorage.getItem("worlds")) || [];

    let worldSelect =
        document.getElementById("world");

    if (!worldSelect) return;

    worldSelect.innerHTML =
        '<option value="">Select World</option>';

    worlds.forEach(world => {

        worldSelect.innerHTML += `
            <option value="${world.name}">
                ${world.name}
            </option>
        `;
    });
}

window.onload = function () {

    loadCharacters();

    if (document.getElementById("world")) {

        loadWorlds();

    }
};

function increaseStat(characterId, stat) {

    let characters =
        getCharacters();

    let character =
        characters.find(
            character =>
                character.id == characterId
        );

    if (
        !character ||
        character.statPoints <= 0
    ) {

        alert(
            "No Stat Points Available"
        );

        return;
    }

    character[stat]++;

    character.statPoints--;

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    closeCharacter();

    openCharacter(character);
}