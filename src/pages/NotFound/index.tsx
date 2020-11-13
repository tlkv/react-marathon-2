import React from 'react';
import Button from '../../components/Button';
import { navigate } from 'hookrouter';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.text}>
                    404
                </div>
                <div className={s.layer}>
                    < div className={s.subTitle}>
                        <span>The rocket team</span> has won this time.
                     </div>
                    <Button
                        onClick={() => navigate('/')}>
                        Return
                         </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;