import React from 'react';

import GeneralDescription from '../components/GeneralDescription';
import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';
import GetBlocks from '../api/index';
import TestingSkills from '../components/TestingSkills';

const HomePage = () => {
  return (
    <>
      <GetBlocks />
      <TestingSkills />
      <GeneralDescription />
      <OurTeam />
      <Footer />
    </>
  );
};

export default HomePage;
