import React from 'react';

import s from './Home.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from '../../components/Heading';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    /* const h = useHistory(); */
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading tag="h1" className={s.contentTitle}>
                        <b>Find</b> all your favourite <b>Pokemons</b>
                    </Heading>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button onClick={() => { }}>See pokemons</Button>
                    {/* <Button onClick={() => h.push('/pokedex')}>See pokemons</Button> */}
                </div>
                <div className={s.contentParallax}>
                    <Parallax />
                </div>
            </Layout>
            <Footer />
        </div>
    );
};

export default HomePage;