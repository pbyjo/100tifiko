import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Errorr from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/' : Home,
    '/:id' : Character,
    '/contact' : 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    // Clase 10
    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Errorr;
    content.innerHTML = await render();

}

export default router;
