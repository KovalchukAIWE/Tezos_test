import React from 'react';

import Blocks from '../components/tezosBlocks/TezosBlocks';
import Tests from '../components/testingSkils/TestingSkils';
import GeneralDescription from '../components/generalDescription/GeneralDescription';
import OurTeam from '../components/team/OurTeam';
import Footer from '../components/footer/Footer';

const HomePage = () => {
    return (
        <>
            <Blocks/>
            <Tests/>
            <GeneralDescription/>
            <OurTeam/>
            <Footer/>
        </>
    )
}

export default HomePage;