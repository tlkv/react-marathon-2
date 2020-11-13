import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

const PokedexNew = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <Heading tag="h1" className={s.contentTitle}>
                    New <b>Pokemons</b> page!
                 </Heading>
            </Layout>
            <Footer />
        </div>
    );
};

export default PokedexNew;