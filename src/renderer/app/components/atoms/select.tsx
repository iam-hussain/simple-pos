import styled from 'styled-components';

interface INPUT {
  hasError?: boolean;
}
export const Select = styled.select<INPUT>`
  height: 40px;
  width: auto;
  overflow: visible;
  padding: 0 ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.border_radius};
  font-size: ${(props) => props.theme.font_sizes.text};
  font-weight: ${(props) => props.theme.font_weight.normal};
  background-color: ${(props) => props.theme.color.background};
  /* box-shadow: ${(props) => props.theme.shadows[0]}; */
  transition: ${(props) => props.theme.transition[0]};
  border: 1px solid;
  border-color: ${(props) =>
    props.hasError ? props.theme.color.error : props.theme.color.background};
  color: ${(props) =>
    props.hasError ? props.theme.color.error : props.theme.color.text};

  &:focus {
    border: 1px solid ${(props) => props.theme.color.secondary_light};
  }

  &:focus-visible {
    outline: 0.5px solid ${(props) => props.theme.color.secondary_light};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.text_lighter};
    font-size: ${(props) => props.theme.font_sizes.text};
    font-weight: ${(props) => props.theme.font_weight.normal};
    font-style: italic;
  }

  &:disabled {
    color: ${(props) => props.theme.color.text_lighter};
    background-color: ${(props) => props.theme.color.background};
    user-select: none;
  }
`;
