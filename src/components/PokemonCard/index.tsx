import React from 'react';
import cn from 'classnames';
import Heading from "../Heading";
import s from './PokemonCard.module.scss';

const PokemonCard: React.FC<any> = ({ name, attack, defense, types, img }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <div className={s.titleName}>
                    {name}
                </div>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {types.map((type) => (
                        <div key={type} className={cn(s.label, s[type])}>
                            {type}
                        </div>
                    ))}
                </div>
            </div>
            <div className={cn(s.pictureWrap, s[types[0]])}>
                <img src={img} alt={name} />
            </div>
        </div>
    );
};


export default PokemonCard;