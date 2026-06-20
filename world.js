window.onload = function () {

    loadWorld();

};

function loadWorld() {

    let selectedWorldId =
        localStorage.getItem("selectedWorld");

    let worlds =
        JSON.parse(
            localStorage.getItem("worlds")
        ) || [];

    let world =
        worlds.find(
            world =>
                world.id == selectedWorldId
        );

    if (!world) {

        document.getElementById(
            "worldTitle"
        ).innerText = "World Not Found";

        return;
    }

    document.getElementById(
        "worldTitle"
    ).innerText = world.name;

    document.getElementById(
        "worldDescription"
    ).innerText =
        world.description;

    document.getElementById(
        "worldDate"
    ).innerText =
        "Created: " + world.createdAt;

    loadCharacters(world);
}

function loadCharacters(world) {

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let worldCharacters =
        characters.filter(
            character =>
                character.world === world.name
        );

    let characterList =
        document.getElementById(
            "characterList"
        );

    if (worldCharacters.length === 0) {

        characterList.innerHTML =
            "No Characters Linked Yet";

        return;
    }

    characterList.innerHTML = "";

    worldCharacters.forEach(character => {

        characterList.innerHTML += `

            <div class="character-card"
                 onclick="openDMPanel('${character.id}')">

                <h3>
                    ${character.name}
                </h3>

                <p>
                    Race:
                    ${character.race}
                </p>

                <p>
                    Class:
                    ${character.class}
                </p>

                <p>
                    Level:
                    ${character.level}
                </p>

                <p>
                    EXP:
                    ${character.exp}
                </p>

            </div>

        `;
    });
}
function openDMPanel(characterId) {

    let worlds =
        JSON.parse(
            localStorage.getItem("worlds")
        ) || [];

    let selectedWorldId =
        localStorage.getItem("selectedWorld");

    let world =
        worlds.find(
            world =>
                world.id == selectedWorldId
        );

    let currentUser =
        localStorage.getItem("currentUser");

    if (world.owner !== currentUser) {

        alert(
            "Only the DM can manage characters."
        );

        return;
    }

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let character =
        characters.find(
            character =>
                character.id == characterId
        );

    let dmBody =
        document.getElementById("dmBody");

    dmBody.innerHTML = `

        <div class="dm-grid">

            <div class="dm-panel">

                <h2>
                    Character Information
                </h2>

                <br>

                <p>
                    Name:
                    ${character.name}
                </p>

                <p>
                    Race:
                    ${character.race}
                </p>

                <p>
                    Class:
                    ${character.class}
                </p>

                <p>
                    Level:
                    ${character.level}
                </p>

                <p>
                    EXP:
                    ${character.exp}/100
                </p>

                <p>
                    Buffs:
                    ${
                        character.buffs.length
                        ? character.buffs.join(", ")
                        : "None"
                    }
                </p>

                <p>
                    Effects:
                    ${
                        character.effects.length
                        ? character.effects.join(", ")
                        : "None"
                    }
                </p>

            </div>

            <div class="dm-panel">

                <h2>
                    DM Controls
                </h2>

                <br>

                <button
                    onclick="addExp(${character.id},10)">
                    +10 EXP
                </button>

                <button
                    onclick="addExp(${character.id},50)">
                    +50 EXP
                </button>

                <button
                    onclick="addExp(${character.id},100)">
                    +100 EXP
                </button>

                <button
                    onclick="addBuff(${character.id})">
                    Add Buff
                </button>

                <button
                    onclick="addEffect(${character.id})">
                    Add Effect
                </button>
                <button
                    onclick="removeBuff(${character.id})">
                    Remove Buff
                </button>

                <button
                onclick="removeEffect(${character.id})">
                    Remove Effect
                </button>

            </div>

        </div>

    `;

    document.getElementById(
        "dmModal"
    ).style.display = "flex";
}

function closeDMPanel() {

    document.getElementById(
        "dmModal"
    ).style.display = "none";
}
function addExp(characterId, amount) {

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let character =
        characters.find(
            character =>
                character.id == characterId
        );

    if (!character) {

        return;
    }

    character.exp += amount;

    while (character.exp >= 100) {

        character.exp -= 100;

        character.level++;
        character.statPoints++;
    }

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    alert(
        `${character.name} gained ${amount} EXP`
    );

    location.reload();
}
function addBuff(characterId) {

    let buff =
        prompt("Enter Buff");

    if (!buff) {

        return;
    }

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let character =
        characters.find(
            character =>
                String(character.id) ===
                String(characterId)
        );

    if (!character) {

        return;
    }

    character.buffs =
        character.buffs || [];

    character.buffs.push(buff);

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    location.reload();
}
function addEffect(characterId) {

    let effect =
        prompt("Enter Effect");

    if (!effect) {

        return;
    }

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let character =
        characters.find(
            character =>
                String(character.id) ===
                String(characterId)
        );

    if (!character) {

        return;
    }

    character.effects =
        character.effects || [];

    character.effects.push(effect);

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    location.reload();
}
function removeBuff(characterId) {

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let character =
        characters.find(
            character =>
                String(character.id) ===
                String(characterId)
        );

    if (!character ||
        !character.buffs ||
        character.buffs.length === 0) {

        alert("No Buffs Found");

        return;
    }

    let buff =
        prompt(
            "Enter Buff To Remove:\n\n" +
            character.buffs.join("\n")
        );

    if (!buff) {

        return;
    }

    character.buffs =
        character.buffs.filter(
            currentBuff =>
                currentBuff !== buff
        );

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    location.reload();
}
function removeEffect(characterId) {

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let character =
        characters.find(
            character =>
                String(character.id) ===
                String(characterId)
        );

    if (!character ||
        !character.effects ||
        character.effects.length === 0) {

        alert("No Effects Found");

        return;
    }

    let effect =
        prompt(
            "Enter Effect To Remove:\n\n" +
            character.effects.join("\n")
        );

    if (!effect) {

        return;
    }

    character.effects =
        character.effects.filter(
            currentEffect =>
                currentEffect !== effect
        );

    localStorage.setItem(
        "characters",
        JSON.stringify(characters)
    );

    location.reload();
}