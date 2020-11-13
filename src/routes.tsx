import React from 'react';
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";
import PokedexNew from './pages/Pokedex';

interface IGeneralMenu {
    title: string,
    link: string,
    component: () => JSX.Element
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: '/',
        component: () => <HomePage />
    },
    {
        title: 'Pokédex',
        link: '/pokedex',
        component: () => <PokedexNew />,
    },
    {
        title: 'Legendaries',
        link: '/legendaries',
        component: () => <EmptyPage title="Legend" />
    },
    {
        title: 'Documentation',
        link: '/documentation',
        component: () => <EmptyPage title="Doc" />
    },
];

/* MENU.reduce((acc, item)=> {
    acc[item.link] = item.component;
    return acc;
}, {}); */

interface IAccMenu {
    [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;