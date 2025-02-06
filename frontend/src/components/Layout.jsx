import React from 'react';
import Navbar from './Navbar';
import Sebelumfooter from './Sebelumfooter';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
            <Sebelumfooter />
            <Footer/>
        </>
    );
};

export default Layout;