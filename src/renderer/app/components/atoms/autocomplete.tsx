import { useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useCombobox } from 'downshift';
import { Input } from './input';
import { ThemeContext } from '../../theme-provider';

const InputWrapper = styled.div<{ flex?: number; hasError?: boolean }>`
  height: 40px;
  width: auto;
  display: flex;

  button {
    width: 40px;
    color: ${(props) =>
      props.hasError ? props.theme.color.error : props.theme.color.text};
    background-color: ${(props) => props.theme.color.background_light};
    border: 1px solid;
    border-top-right-radius: ${({ theme }) => theme.border_radius};
    border-bottom-right-radius: ${({ theme }) => theme.border_radius};
    border-color: ${(props) =>
      props.hasError ? props.theme.color.error : props.theme.color.background};
  }
`;
const DropList = styled.ul<{ flex?: number; hasError?: boolean }>`
  list-style: none;
  position: absolute;
  top: 45px;
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) => props.theme.color.background_light};
  padding: 0;
  border-bottom-left-radius: ${({ theme }) => theme.border_radius};
  border-bottom-right-radius: ${({ theme }) => theme.border_radius};
  li {
    padding: ${(props) => props.theme.space[2]};
  }
`;

type OPTION = {
  value: string;
  label: string;
};

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  options: Array<OPTION>;
  onChange: (option: OPTION[], value: string) => void;
}

export function SelectAutoComplete({
  id,
  name,
  placeholder,
  value,
  options,
  onChange,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const [searchItems, setSearchItems] = useState(options);

  function getOption(inputValue: any) {
    return function filter(option: OPTION) {
      if (!inputValue) {
        return false;
      }
      return (
        option.value.toLowerCase() === inputValue.toLowerCase() ||
        option.label.toLowerCase() === inputValue.toLowerCase()
      );
    };
  }

  function filterOption(inputValue: any) {
    return function filter(option: OPTION) {
      return (
        !inputValue ||
        option.value.toLowerCase().includes(inputValue.toLowerCase()) ||
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    };
  }

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    setInputValue,
  } = useCombobox({
    items: searchItems.length > 0 ? searchItems : options,
    // selectedItem,
    initialInputValue: value || undefined,
    onInputValueChange: ({ inputValue }: any) => {
      const filteredOption = inputValue
        ? options.filter(filterOption(inputValue))
        : options;
      setSearchItems(filteredOption);
      if (onChange) {
        const selectedOption = options.filter(getOption(inputValue));
        onChange(selectedOption, inputValue);
      }
    },
    itemToString(item: any) {
      return item ? item?.label : '';
    },
    // onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
    // setFieldValue(name, newSelectedItem || '');
    // },
  });

  useEffect(() => {
    console.log({ value });
    if (!value) {
      setInputValue('');
    }
  }, [setInputValue, value]);

  return (
    <>
      <InputWrapper {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          noRightBorder
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
        />
        <button type="button" {...getToggleButtonProps()}>
          &#8595;
        </button>
      </InputWrapper>
      <DropList {...getMenuProps()}>
        {isOpen &&
          (searchItems.length > 0 ? searchItems : options).map(
            (item: OPTION, index: number) => (
              <li
                style={
                  highlightedIndex === index
                    ? {
                        backgroundColor: theme.color.background,
                      }
                    : {}
                }
                key={`${item.value}${index}`}
                {...getItemProps({ item, index })}
              >
                {item.label}
              </li>
            )
          )}
      </DropList>
    </>
  );
}
