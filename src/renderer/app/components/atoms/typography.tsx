import styled, { css } from 'styled-components';

interface TEXT {
  italic?: boolean;
  uppercase?: boolean;
  noTopMargin?: boolean;
  color?: 'primary' | 'normal' | 'light' | 'error' | 'disabled';
  weight?: 'lighter' | 'light' | 'normal' | 'bold' | 'bolder';
  align?: 'center' | 'left' | 'right';
}

const AttributeHandle = (props: TEXT): TEXT => ({
  italic: props.italic || false,
  uppercase: props.uppercase || false,
  noTopMargin: props.noTopMargin || false,
  color: props.color || 'normal',
  align: props.align || 'left',
});

const Common = css<TEXT>`
  padding: 0;
  user-select: none;
  font-family: ${(props) => props.theme.font_family[0]};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props) =>
    props.theme.font_weight[props?.weight || 'lighter']};
  text-align: ${(props) => props.align || 'left'};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  letter-spacing: ${({ theme, uppercase }) =>
    uppercase ? theme.letter_spacings.caps : theme.letter_spacings.normal};
  transition: ${(props) => props.theme.transition[0]};

  ${({ color: input, theme: { color } }) =>
    input === 'primary' &&
    css`
      color: ${color.primary};
    `}

  ${({ color: input, theme: { color } }) =>
    input === 'normal' &&
    css`
      color: ${color.text};
    `}

    ${({ color: input, theme: { color } }) =>
    input === 'light' &&
    css`
      color: ${color.text_light};
    `}


    ${({ color: input, theme: { color } }) =>
    input === 'error' &&
    css`
      color: ${color.error};
    `}

    ${({ color: input, theme: { color } }) =>
    input === 'disabled' &&
    css`
      color: ${color.text_lighter};
    `}
`;

export const TextNote = styled.p.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.input_error};
  line-height: ${(props) => props.theme.line_heights[0]};
  margin: 0;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Text = styled.p.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.text};
  line-height: ${(props) => props.theme.line_heights[0]};
  margin: 0;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const H6 = styled.h6.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.heading[5]};
  line-height: ${(props) => props.theme.line_heights[2]};
  margin: ${(props) => props.theme.space[2]} 0;
  margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
  font-weight: ${(props) => props.theme.font_weight[props?.weight || 'normal']};
`;

export const H5 = styled.h5.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.heading[4]};
  line-height: ${(props) => props.theme.line_heights[2]};
  margin: ${(props) => props.theme.space[2]} 0;
  margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
  font-weight: ${(props) => props.theme.font_weight[props?.weight || 'normal']};
`;

export const H4 = styled.h4.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.heading[3]};
  line-height: ${(props) => props.theme.line_heights[2]};
  margin: ${(props) => props.theme.space[2]} 0;
  margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
  font-weight: ${(props) => props.theme.font_weight[props?.weight || 'normal']};
`;

export const H3 = styled.h3.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.heading[2]};
  line-height: ${(props) => props.theme.line_heights[2]};
  margin: ${(props) => props.theme.space[2]} 0;
  margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
  font-weight: ${(props) => props.theme.font_weight[props?.weight || 'normal']};
`;

export const H2 = styled.h2.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.heading[1]};
  line-height: ${(props) => props.theme.line_heights[2]};
  margin: ${(props) => props.theme.space[2]} 0;
  margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
  font-weight: ${(props) => props.theme.font_weight[props?.weight || 'normal']};
`;

export const H1 = styled.h1.attrs(AttributeHandle)`
  ${Common}
  font-size: ${(props) => props.theme.font_sizes.heading[0]};
  line-height: ${(props) => props.theme.line_heights[2]};
  margin: ${(props) => props.theme.space[2]} 0;
  margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
  font-weight: ${(props) => props.theme.font_weight[props?.weight || 'normal']};
`;
