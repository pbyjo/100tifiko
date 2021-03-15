import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error from '../pages/Error404';

const routes = {
    '/' : Home,
    '/:id' : Character,
    '/contact' : 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;
