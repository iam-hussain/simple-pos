import React from 'react';
import { H4, Text } from '../components/atoms/typography';
import { FullScreen, Island } from '../components/atoms/screen';
import { SetupForm } from '../components/forms/setup-form';
import { Brand } from '../components/atoms/brand';

const Home: React.FC = () => {
  return (
    <FullScreen>
      <Island>
        <Brand size="regular" align="start" />
        <H4>Application Setup</H4>
        <Text color="light">
          Place for employees to login and get access to the app
        </Text>
        <SetupForm />
      </Island>
    </FullScreen>
  );
};

export default Home;
