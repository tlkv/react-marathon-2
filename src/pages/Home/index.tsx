import React from 'react';

import s from './Home.module.scss';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";


const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            {/* <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                <h1>
                    <b>Find</b> all your favourite <b>Pokemon</b>
                </h1>
                <p>You can...</p>
                <button type="button">See pokemons</button>
                </div>
                <div className={s.contentParallax}>We will see...</div>
            </Layout> */}
            <Button onClick={() =>console.log('click!')
            }>
                See pokemons
            </Button>
        </div> 
    );
};


export default HomePage;