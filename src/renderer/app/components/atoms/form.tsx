/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin: 0;
  margin-top: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[0]};
  padding: 0;
`;

type COLOR = 'normal' | 'error' | 'disabled';
interface TEXT {
  color?: COLOR;
}

const AttributeHandle = (props: TEXT): TEXT => ({
  color: props.color || 'normal',
});

export const Label = styled.label.attrs(AttributeHandle)`
  padding: 0;
  user-select: none;
  font-family: ${(props) => props.theme.font_family[0]};
  font-weight: 'light';
  text-align: 'left';
  letter-spacing: ${({ theme }) => theme.letter_spacings.normal};
  transition: ${(props) => props.theme.transition[0]};
  font-size: ${(props) => props.theme.font_sizes.label};
  line-height: ${(props) => props.theme.line_heights[0]};
  margin: 0;
  margin-bottom: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.color.text_light};

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

export const InputWrapper = styled.div<{ flex?: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${(props) => props.theme.space[4]};
  flex: ${(props) => (props?.flex !== undefined ? props.flex : 1)};
`;

export const InputRowGroup = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: ${(props) => props.theme.space[4]};
`;

export const ErrorBlock = styled.span`
  position: absolute;
  bottom: -${(props) => props.theme.space[3]};
  right: 0;
  font-size: ${(props) => props.theme.font_sizes.input_error};
  line-height: ${(props) => props.theme.line_heights[0]};
  color: ${(props) => props.theme.color.error};
  font-family: ${(props) => props.theme.font_family[0]};
`;

interface INPUT_CONTAINER {
  children: JSX.Element;
  id: string;
  label?: string;
  errorMessage?: string;
  touched?: boolean;
  disabled?: boolean;
  flex?: number;
}

export function InputContainer({
  children,
  label,
  id,
  errorMessage,
  touched,
  disabled,
  flex,
}: INPUT_CONTAINER) {
  const [color, setColor]: [COLOR, any] = useState('normal');
  useEffect(() => {
    if (errorMessage && touched) {
      setColor('error');
    } else if (disabled) {
      setColor('disabled');
    } else {
      setColor('normal');
    }
  }, [disabled, errorMessage, touched]);

  return (
    <InputWrapper flex={flex}>
      <Label htmlFor={id} color={color}>
        {label}
      </Label>
      {React.cloneElement(children, { id, hasError: errorMessage && touched })}
      {errorMessage && touched && <ErrorBlock>{errorMessage}</ErrorBlock>}
    </InputWrapper>
  );
}
