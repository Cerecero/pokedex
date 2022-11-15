const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != 200) {
            console.log(res);
            pokeImage("./images/missingNo.png");
            const pokeAbilities = document.getElementById("abilities");
            pokeAbilities.innerHTML = "No such Pokemon by that name/Id.";
            const pokeName = document.getElementById("name");
            pokeName.innerHTML = "";
            const pokeIds = document.getElementById("pokeId");
            pokeIds.innerHTML = "";
            const pokeType = document.getElementById("pokeType");
            pokeType.innerHTML = "";
            const pokeStat = document.getElementById("pokeStats");
            pokeStat.innerHTML = "";
        }
        else {
            return res.json();
        }
    }).then((data => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        let pokeName = data.name;
        let pokeId = data.id;
        let pokeType = data.types[0].type.name;
        let pokeStat = data.stats;

        pokeData(pokeInfo);
        pokeImage(pokeImg);
        pokeNames(pokeName);
        pokeNumId(pokeId)
        pokeTypes(pokeType);
        pokeStats(pokeStat);
    }))
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.style.backgroundColor = '#eddaa6';
    pokeImg.style.paddingRight = '70px';
    pokeImg.style.paddingLeft = '70px';
    pokeImg.style.borderRadius = '10px'
    pokeImg.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = "<b> Habilidades: </b>" + abilitiesName;
}

const pokeNames = (names) => {
    const pokeNombre = document.getElementById("name");
    nombrePoke = names;
    pokeNombre.innerHTML = "<b> Nombre: </b>" + nombrePoke;
}

const pokeNumId = (id) => {
    const pokemonId = document.getElementById("pokeId")
    idPokemon = id;
    pokemonId.innerHTML = "<b> Id: </b>"+ idPokemon;
}

const pokeTypes = (type) => {
    const pokemonType = document.getElementById("pokeType");
    pokeType = type;
    pokemonType.innerHTML = "<b> Tipo: </b>"+pokeType;
}

const stats = document.getElementById("pokeStats");
const pokeStats = (stat) => {
    stats.innerHTML = "<b>Estadisticas: </b>" ;
    stat.forEach(item => {
        const statElement = document.createElement("p");
        const statName = document.createElement("p");
        const statAmount = document.createElement("p");
        stats.appendChild(statElement);

        statName.textContent = item.stat.name;
        statAmount.textContent = item.base_stat;
        statElement.appendChild(statName).appendChild(statAmount);
    });
}

let input = document.getElementById("pokeName");
input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("pokeButton").click();
    }
})
