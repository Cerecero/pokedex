const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != 200) {
            console.log(res);
            pokeImage("./images/missingNo.png");
        }
        else {
            return res.json();
        }
    }).then((data => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        pokeData(pokeInfo);
        //console.log(pokeImg)
        pokeImage(pokeImg);
    }))
}
//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;
}