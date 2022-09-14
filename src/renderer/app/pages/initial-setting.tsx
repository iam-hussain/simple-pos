import React, { useContext } from 'react';
import { H4, Text } from '../components/atoms/typography';
import { FullScreen, Island } from '../components/atoms/screen';
import { SetupForm } from '../components/forms/setup-form';
import { Brand } from '../components/atoms/brand';
import { ThemeContext } from '../theme-provider';

const Home: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <FullScreen>
      <Island>
        <Brand size="regular" align="start" />
        <H4 onClick={() => toggleTheme()}>Application Setup</H4>
        <Text color="light">
          Place for employees to login and get access to the app
        </Text>
        <SetupForm />
      </Island>
    </FullScreen>
  );
};

export default Home;
