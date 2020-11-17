import React from 'react';
import Header from '../../components/Header';
import Layout from "../../components/Layout"

import s from './Empty.module.scss';

interface EmptyPageProps {
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <div>
            <Layout className={s.layout}>
                {title}
            </Layout>
        </div>
    );
};

export default EmptyPage;