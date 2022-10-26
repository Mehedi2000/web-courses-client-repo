import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const category = useLoaderData()

    return (
        <div>
            <h1>{category.title}</h1>
        </div>
    );
};

export default Checkout;