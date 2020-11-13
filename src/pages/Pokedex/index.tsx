import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../imp/pokemon';

const PokedexNew = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <Heading tag="h1" className={s.contentTitle}>
                    New <b>Pokemons</b> page!
                 </Heading>
                <div className={s.pokemonList}>
                    {POKEMONS.map((pokemon) => {
                        return (
                            <PokemonCard
                                name={pokemon.name}
                                attack={pokemon.stats.attack}
                                defense={pokemon.stats.defense}
                                types={pokemon.types}
                                img={pokemon.img}
                                key={pokemon.name}
                            />
                        );
                    })}
                </div>
            </Layout>
            <Footer />
        </div>
    );
};

export default PokedexNew;