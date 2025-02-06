import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutA = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default LayoutA;