import React from 'react';
import { NextPage } from 'next';

import { Header } from './';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout