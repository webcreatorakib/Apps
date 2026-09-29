import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <>
            <div>
                <Header></Header>
                {
                    isLoading ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>
                }
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;