window.onload = function () {

    loadWorlds();

};

function showForm() {

    let form =
        document.getElementById("worldForm");

    if (form.style.display === "block") {

        form.style.display = "none";

    }
    else {

        form.style.display = "block";

    }
}

function createWorld() {

    let name =
        document.getElementById("worldName").value;

    let description =
        document.getElementById("worldDescription").value;

    if (name === "") {

        alert("Enter a world name");

        return;
    }

    let worlds =
        JSON.parse(localStorage.getItem("worlds")) || [];

    let world = {

        id: Date.now(),

        owner: localStorage.getItem("currentUser"),

        name: name,

        description: description,

        createdAt:
            new Date().toLocaleDateString()
    };

    worlds.push(world);

    localStorage.setItem(
        "worlds",
        JSON.stringify(worlds)
    );

    document.getElementById("worldName").value = "";
    document.getElementById("worldDescription").value = "";

    loadWorlds();
}

function loadWorlds() {

     let currentUser =
        localStorage.getItem("currentUser");

    let worlds =
        JSON.parse(localStorage.getItem("worlds")) || [];

    worlds = worlds.filter(
        world =>
            world.owner === currentUser
    );

    let grid =
        document.getElementById("worldGrid");

    grid.innerHTML = "";

    worlds.forEach(world => {

        grid.innerHTML += `

        <div class="world-card"
             onclick="openWorld(${world.id})">

            <h3 onclick="openWorld(${world.id})"
                style="cursor:pointer;">
                ${world.name}
            </h3>

            <p>
                ${world.description}
            </p>

            <small>
                Created:
                ${world.createdAt}
            </small>

            <br><br>

            <button
                class="delete-btn"
                onclick="deleteWorld(${world.id})">
                Delete
            </button>

        </div>

        `;
    });
}

function deleteWorld(id) {

    let worlds =
        JSON.parse(localStorage.getItem("worlds")) || [];

    worlds = worlds.filter(
        world => world.id !== id
    );

    localStorage.setItem(
        "worlds",
        JSON.stringify(worlds)
    );

    loadWorlds();
}

function openWorld(id) {

    localStorage.setItem(
        "selectedWorld",
        id
    );

    window.location.href =
        "world.html";
}