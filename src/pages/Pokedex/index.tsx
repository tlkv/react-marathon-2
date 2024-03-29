import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import config from "../../config";


const usePokemons = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.url.pathname}`
            console.log('#tttest ', url);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }

        }
        getPokemons();
    }, []);

    return {
        data,
        isLoading,
        isError,
    }
}

const PokedexNew = () => {

    const {
        data,
        isLoading,
        isError,
    } = usePokemons();


    if (isLoading) {
        return (
            <div> Loading...</div >
        );
    }

    if (isError) {
        return (
            <div>ERROR</div >
        );
    }

    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <Heading tag="h1" className={s.contentTitle}>
                    {data.total} <b>Pokemons</b> page!
                 </Heading>
                <div className={s.pokemonList}>
                    {data.pokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            name={pokemon.name}
                            attack={pokemon.stats.attack}
                            defense={pokemon.stats.defense}
                            types={pokemon.types}
                            img={pokemon.img}
                        />
                    ))}
                </div>
            </Layout>
            <Footer />
        </div>
    );
};

export default PokedexNew;