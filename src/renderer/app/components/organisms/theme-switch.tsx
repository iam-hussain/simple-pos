import React, { useContext } from 'react';
import styled from 'styled-components';
import { SVG, DarkModeSvg } from '../atoms/svg';
import { ThemeContext } from '../../theme-provider';

const Float = styled.div`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
`;

function ThemeSwitch() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Float>
      <SVG color="ghost" onClick={() => toggleTheme()}>
        <DarkModeSvg />
      </SVG>
    </Float>
  );
}

export default ThemeSwitch;
