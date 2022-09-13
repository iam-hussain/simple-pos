import styled, { css } from 'styled-components';

interface BUTTON {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'caution' | 'solid' | 'ghost';
  size?: 'small' | 'regular' | 'large';
  fullWidth?: boolean;
  selected?: boolean;
}

export const Button = styled.button.attrs(
  (props: BUTTON): BUTTON => ({
    size: props.size || 'regular',
    mode: props.mode || 'primary',
    fullWidth: props.fullWidth || true,
    selected: props.selected || false,
  })
)`
  display: block;
  padding: 0 ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[2]} auto;
  border-radius: ${(props) => props.theme.border_radius};
  font-size: ${(props) => props.theme.font_sizes.text};
  font-weight: ${(props) => props.theme.font_weight.normal};
  line-height: ${(props) => props.theme.line_heights[1]};
  transition: ${(props) => props.theme.transition[0]};
  box-shadow: ${(props) => props.theme.shadows[0]};
  cursor: pointer;
  user-select: none;
  height: 40px;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  max-width: ${(props) => props.theme.space[9]};
  /* text-transform: uppercase; */
  letter-spacing: ${(props) => props.theme.letter_spacings.caps};

  ${({ mode, selected, theme: { color } }) =>
    mode === 'primary' &&
    css`
      color: ${color.invert};
      background-color: ${selected ? color.primary_dark : color.primary};
      border: 2px solid ${color.primary};

      &:hover {
        background-color: ${color.primary_light};
        border: 2px solid ${color.primary_light};
      }

      &:active {
        background-color: ${color.primary_darker};
        border: 2px solid ${color.primary_darker};
      }

      &:focus {
        border: 2px solid ${color.primary_darker};
      }

      &:focus-visible {
        outline: 0px solid ${color.primary_darker};
      }

      &:disabled {
        border: 2px solid ${color.primary_lighter};
        background-color: ${color.primary_lighter};
      }
    `}

  ${({ mode, selected, theme: { color } }) =>
    mode === 'secondary' &&
    css`
      color: ${color.primary};
      background-color: ${color.invert};
      border: 2px solid ${selected ? color.primary : color.secondary_light};

      &:hover {
        color: ${color.primary_light};
        border: 2px solid ${color.primary_light};
      }

      &:active {
        color: ${color.primary_darker};
        border: 2px solid ${color.primary_darker};
      }

      &:focus {
        border: 2px solid ${color.primary_dark};
      }

      &:focus-visible {
        outline: 0px solid ${color.primary_darker};
      }

      &:disabled {
        user-select: none;
        border: 2px solid ${color.secondary_lighter};
        color: ${color.primary_lighter};
      }
    `}

    ${({ mode, selected, theme: { color } }) =>
    mode === 'tertiary' &&
    css`
      color: ${color.secondary};
      background-color: ${color.invert};
      border: 2px solid ${selected ? color.secondary : color.secondary_light};

      &:hover {
        color: ${color.secondary_dark};
        border: 2px solid ${color.secondary_dark};
      }

      &:active {
        color: ${color.secondary_darker};
        border: 2px solid ${color.secondary_darker};
      }

      &:focus {
        border: 2px solid ${color.secondary_dark};
      }

      &:focus-visible {
        outline: 0px solid ${color.secondary_darker};
      }

      &:disabled {
        user-select: none;
        border: 2px solid ${color.secondary_lighter};
        color: ${color.secondary_lighter};
      }
    `}

    ${({ mode, selected, theme: { color } }) =>
    mode === 'caution' &&
    css`
      color: ${color.error};
      background-color: ${color.invert};
      border: 2px solid ${selected ? color.secondary : color.background};
      box-shadow: none;

      &:hover {
        color: ${color.error};
        border: 2px solid ${color.error};
      }

      &:active {
        color: ${color.error};
        /* border: 2px solid ${color.background}; */
      }

      &:focus {
        border: 2px solid ${color.error};
      }

      &:focus-visible {
        outline: 0px solid ${color.error};
      }

      &:disabled {
        user-select: none;
        border: 2px solid ${color.background};
        color: ${color.error_lighter};
      }
    `}

    ${({ mode, selected, theme: { color } }) =>
    mode === 'ghost' &&
    css`
      color: ${color.primary};
      background-color: ${color.background};
      border: 2px solid ${selected ? color.primary : color.background};
      box-shadow: none;

      &:hover {
        color: ${color.primary_darker};
        border: 2px solid ${color.background};
      }

      &:active {
        color: ${color.error};
        border: 2px solid ${color.background};
      }

      &:focus {
        border: 2px solid ${color.background};
      }

      &:focus-visible {
        outline: 0px solid ${color.background};
      }

      &:disabled {
        user-select: none;
        border: 2px solid ${color.background};
        color: ${color.primary_lighter};
      }
    `}
`;
