import getData from '../utils/getData';

const Home = async () => {

    // Clase 11
    const characters = await getData();

    const view = `
    
        <section class="Characters">
            ${characters.results.map(character => 
                `
                <article class="Character__item"> 

                    <a href="#/${character.id}/" > 
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>

                </article>
                `
            ).join('')}
        </section>
    `;

    return view;
};

export default Home;