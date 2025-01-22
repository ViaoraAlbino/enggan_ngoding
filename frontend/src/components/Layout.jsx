import React from 'react';
import Sebelumfooter from './Sebelumfooter';

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Sebelumfooter />
        </>
    );
};

export default Layout;
