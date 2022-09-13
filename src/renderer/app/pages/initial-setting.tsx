import React, { useEffect, useState } from 'react';
import { H6, Text } from '../components/atoms/typography';
import { FullScreen, Island } from '../components/atoms/screen';
import { SetupForm } from '../components/forms/setup';
import { Brand } from '../components/atoms/brand';
import useTheme from '../utils/useTheme';

const Home: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <FullScreen>
      <Island>
        <Brand size="regular" align="start" />
        <H6 onClick={() => toggleTheme()}>Application Setup</H6>
        <Text color="light">
          Place for employees to login and get access to the app
        </Text>
        <SetupForm options={[]} />
      </Island>
    </FullScreen>
  );
};

export default Home;
