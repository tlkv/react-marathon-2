import React from 'react';
import s from './App.modules.scss';
import cn from 'classnames';

const App = () => {
    return (
        <div className={cn(s.header)}>
            This is my NEW component!
        </div>
    )
}

export default App;