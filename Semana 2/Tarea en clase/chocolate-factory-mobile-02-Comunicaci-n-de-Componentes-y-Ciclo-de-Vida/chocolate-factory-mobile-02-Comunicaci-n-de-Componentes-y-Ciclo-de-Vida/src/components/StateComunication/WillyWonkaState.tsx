import  { FC, useState } from 'react';
import {OompaLoompaState} from "./OompaLoompa.tsx";

// WillyWonka is the parent component that manages the state of the orders
export const WillyWonkaState: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");

    return (
        <div className={
            'background'
        }>
            <h2>Willy Wonka</h2>
            <p>{orders}</p>
            <OompaLoompaState orders={orders}/>
        </div>
    );
};


import { FC, useState } from 'react';
import { WillyWonkaState } from "./WillyWonka.tsx";

// OompaLoompaState is the parent component that manages the state of the message
export const OompaLoompaState: FC = () => {
    const [message, setMessage] = useState<string>("¡Nos hace falta mas chocolates 🍫🍫🍫!");

    return (
        <div className='background'>
            <h2>Oompa Loompa</h2>
            <p>{message}</p>
            <WillyWonkaState message={message}/>
        </div>
    );
};
