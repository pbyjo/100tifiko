import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {

    // Clase 12
    const id = getHash();
    const character = await getData(id);
    const view = `
    
        <section class="charaters__inner">

            <article class = "character--card">
                <img src="${character.image}" alt="${character.name}">
                <h2> ${character.name} </h2>
            </article>

            <article class="Characters--info">
                <h3>Episodes: <span> ${character.episode.length} </span> </h3>
                <h3>Status: <span> ${character.status} </span> </h3>
                <h3>Species: <span> ${character.species} </span> </h3>
                <h3>Genre: <span> ${character.gender} </span> </h3>
                <h3>Origin: <span> ${character.origin.name} </span> </h3>
                <h3>Last location: <span> ${character.location.name} </span> </h3>
            </article>

        </section>
    `;
    return view;
};

export default Character;