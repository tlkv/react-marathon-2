import React from 'react';
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";
import PokedexNew from './pages/Pokedex';

interface IGeneralMenu {
    title: string,
    link: LinkEnum,
    component: () => JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage />
    },
    {
        title: 'Pokédex',
        link: LinkEnum.POKEDEX,
        component: () => <PokedexNew />,
    },
    {
        title: 'Legendaries',
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="Legend" />
    },
    {
        title: 'Documentation',
        link: LinkEnum.DOCUMENTATION,
        component: () => <EmptyPage title="Doc" />
    },
];

interface IAccMenu {
    [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;