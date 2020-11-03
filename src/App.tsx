import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
    console.log('something');

    return (
        <>
            <Header />
            <div className={cn(s.content)}>
                Here is some content
            </div>
            <Footer />
        </>
    )
}

export default App;