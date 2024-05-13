import  { FC } from 'react';
import {OompaLoompa} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes orders to the OompaLoompas via props
export const WillyWonka: FC = () => {
    const orders: string = "Make more chocolates 🍫🍫!";
    return <div className='background'>
        <h1>Willy Wonka 🔊:</h1>
        <OompaLoompa orders={orders} />
        </div>
        ;
};

import { FC } from 'react';
import { WillyWonka } from "./WillyWonka.tsx";
import './OompaLoompa.css';

// OompaLoompa is the parent component that passes messages to WillyWonka via props
export const OompaLoompa: FC = () => {
    const message: string = "¡Hemos echo mas de 1000BN chocolates🍫🍫!";
    return (
        <div className='background'>
            <h1>Oompa Loompa 🔊:</h1>
            <WillyWonka message={message} />
        </div>
    );
};
