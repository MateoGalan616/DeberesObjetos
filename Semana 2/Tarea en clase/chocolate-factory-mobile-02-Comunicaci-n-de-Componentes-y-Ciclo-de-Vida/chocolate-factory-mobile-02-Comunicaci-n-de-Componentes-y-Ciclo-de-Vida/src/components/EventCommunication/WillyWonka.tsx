import { FC, useState } from 'react';
import { OompaLoompaEvent} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes the event handler to the OompaLoompa component via props
export const WillyWonkaEvent: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");

    const changeOrders = (): void => {
        setOrders("Make more candies 🍭🍭🍭!");
    };

    // let orders = "Make more chocolates 🍫🍫🍫!";
    //
    // const changeOrders = (): void => {
    //     orders = "Make more candies 🍭🍭🍭!";
    // };

    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaEvent orders={orders} onOrderChange={changeOrders}/>
            {/*<OompaLoompaEvent orders={orders} onOrderChange={() => setOrders("Make more candies 🍭🍭🍭!")}/>*/}
        </div>
    );
}

import { FC, useState } from 'react';
import { WillyWonkaEvent } from "./WillyWonka.tsx";
import './OompaLoompa.css';

// OompaLoompaEvent is the parent component that passes the event handler to the WillyWonka component via props
export const OompaLoompaEvent: FC = () => {
    const [message, setMessage] = useState<string>("¡Se acabo el chocolate 🍫🍫🍫!");

    const changeMessage = (): void => {
        setMessage("¡Hemos terminado de hacer más caramelos 🍭🍭🍭!");
    };

    return (
        <div className='background'>
            <h1>Oompa Loompa 🔊:</h1>
            <WillyWonkaEvent message={message} onMessageChange={changeMessage}/>
        </div>
    );
}
