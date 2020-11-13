import React from 'react';
import Header from '../../components/Header'

interface EmptyPageProps {
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <div>
            <Header />
            <div>
                { title }
        </div>
        </div>
    );
};

export default EmptyPage;