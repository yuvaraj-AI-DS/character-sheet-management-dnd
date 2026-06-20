window.onload = function () {

    loadProfile();

};

function loadProfile() {

    let currentUser =
        localStorage.getItem("currentUser");

    document.getElementById(
        "username"
    ).innerText =
        currentUser;

    let characters =
        JSON.parse(
            localStorage.getItem("characters")
        ) || [];

    let worlds =
        JSON.parse(
            localStorage.getItem("worlds")
        ) || [];

    let userCharacters =
        characters.filter(
            character =>
                character.owner === currentUser
        );

    let userWorlds =
        worlds.filter(
            world =>
                world.owner === currentUser
        );

    document.getElementById(
        "characterCount"
    ).innerText =
        userCharacters.length;

    document.getElementById(
        "worldCount"
    ).innerText =
        userWorlds.length;

    document.getElementById(
        "dmCount"
    ).innerText =
        userWorlds.length;
}