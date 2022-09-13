import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-provider';

export function BrandCleanSvg({ invert = false }: any) {
  const { theme } = useContext(ThemeContext);
  return (
    <svg viewBox="0 0 200 45.72816729267347">
      <g
        transform="matrix(2.112155570364752,0,0,2.112155570364752,-2.1755211842006985,-4.752350033320692)"
        fill={invert ? theme.color.primary_invert : theme.color.primary}
      >
        <path d="M12.94 6.23 q0.17 0.1 0.25 0.26 t-0.03 0.38 l-1.69 2.4 q-0.11 0.17 -0.235 0.195 t-0.305 -0.085 q-0.49 -0.37 -1.08 -0.57 t-1.25 -0.2 q-0.82 0 -1.51 0.31 t-1.19 0.85 t-0.78 1.26 t-0.28 1.54 t0.28 1.535 t0.78 1.25 t1.19 0.845 t1.51 0.31 q0.66 0 1.26 -0.205 t1.09 -0.575 q0.18 -0.11 0.3 -0.09 t0.24 0.18 l1.71 2.46 q0.11 0.22 0.03 0.37 t-0.25 0.25 q-0.94 0.63 -2.025 0.975 t-2.285 0.345 q-1.06 0 -2.035 -0.27 t-1.825 -0.77 t-1.545 -1.195 t-1.195 -1.54 t-0.77 -1.82 t-0.27 -2.035 t0.27 -2.035 t0.77 -1.83 t1.195 -1.555 t1.545 -1.195 t1.825 -0.77 t2.035 -0.275 q1.2 0 2.265 0.335 t2.005 0.965 z M28.36 19.26 q0 0.17 -0.06 0.325 t-0.2 0.245 q-0.11 0.11 -0.26 0.14 t-0.26 0.03 l-1.97 0 q-0.21 0 -0.34 -0.055 t-0.21 -0.155 t-0.135 -0.245 t-0.115 -0.315 l-0.29 -0.75 q-0.27 0.27 -0.59 0.575 t-0.705 0.565 t-0.835 0.435 t-0.96 0.175 q-0.91 0 -1.745 -0.23 t-1.56 -0.655 t-1.315 -1.02 t-1.015 -1.325 t-0.655 -1.575 t-0.23 -1.765 q0 -1.39 0.51 -2.585 t1.39 -2.08 t2.07 -1.39 t2.55 -0.505 q0.62 0 1.14 0.185 t0.945 0.485 t0.77 0.68 t0.615 0.77 l0.39 -1.21 q0.1 -0.25 0.165 -0.405 t0.14 -0.23 t0.185 -0.1 t0.31 -0.025 l1.49 0 q0.11 0 0.26 0.03 t0.26 0.14 q0.14 0.11 0.2 0.25 t0.06 0.32 l0 11.27 z M18.509999999999998 13.66 q0 0.66 0.205 1.235 t0.585 0.995 t0.915 0.665 t1.185 0.245 q0.67 0 1.245 -0.245 t1 -0.665 t0.665 -0.995 t0.24 -1.235 q0 -0.64 -0.24 -1.22 t-0.665 -1.02 t-1 -0.695 t-1.245 -0.255 q-0.65 0 -1.185 0.255 t-0.915 0.695 t-0.585 1.02 t-0.205 1.22 z M31.020000000000003 7.42 q0.13 -0.11 0.27 -0.14 t0.27 -0.03 l1.51 0 q0.19 0 0.315 0.06 t0.205 0.165 t0.135 0.24 t0.105 0.295 l0.42 1.21 q0.28 -0.36 0.565 -0.735 t0.675 -0.68 t0.93 -0.505 t1.32 -0.2 q1.37 0 2.525 0.505 t1.99 1.39 t1.305 2.08 t0.47 2.585 q0 1.38 -0.47 2.58 t-1.305 2.085 t-1.99 1.395 t-2.525 0.51 q-0.65 0 -1.12 -0.155 t-0.835 -0.405 t-0.645 -0.55 t-0.55 -0.6 l0 4.66 q0 0.3 -0.18 0.51 t-0.56 0.21 l-2.29 0 q-0.12 0 -0.26 -0.05 t-0.26 -0.14 t-0.2 -0.225 t-0.08 -0.305 l0 -15.19 q0 -0.2 0.075 -0.33 t0.185 -0.24 z M40.36 13.66 q0 -0.64 -0.21 -1.215 t-0.59 -1.005 t-0.91 -0.68 t-1.17 -0.25 q-0.63 0 -1.195 0.235 t-0.99 0.64 t-0.69 0.955 t-0.295 1.17 l0 0.15 q0 0.66 0.25 1.24 t0.68 1.005 t1.01 0.675 t1.23 0.25 q0.64 0 1.17 -0.25 t0.91 -0.675 t0.59 -1.005 t0.21 -1.24 z M46.29 7.42 q0.13 -0.11 0.27 -0.14 t0.27 -0.03 l1.51 0 q0.19 0 0.315 0.06 t0.205 0.165 t0.135 0.24 t0.105 0.295 l0.42 1.21 q0.28 -0.36 0.565 -0.735 t0.675 -0.68 t0.93 -0.505 t1.32 -0.2 q1.37 0 2.525 0.505 t1.99 1.39 t1.305 2.08 t0.47 2.585 q0 1.38 -0.47 2.58 t-1.305 2.085 t-1.99 1.395 t-2.525 0.51 q-0.65 0 -1.12 -0.155 t-0.835 -0.405 t-0.645 -0.55 t-0.55 -0.6 l0 4.66 q0 0.3 -0.18 0.51 t-0.56 0.21 l-2.29 0 q-0.12 0 -0.26 -0.05 t-0.26 -0.14 t-0.2 -0.225 t-0.08 -0.305 l0 -15.19 q0 -0.2 0.075 -0.33 t0.185 -0.24 z M55.629999999999995 13.66 q0 -0.64 -0.21 -1.215 t-0.59 -1.005 t-0.91 -0.68 t-1.17 -0.25 q-0.63 0 -1.195 0.235 t-0.99 0.64 t-0.69 0.955 t-0.295 1.17 l0 0.15 q0 0.66 0.25 1.24 t0.68 1.005 t1.01 0.675 t1.23 0.25 q0.64 0 1.17 -0.25 t0.91 -0.675 t0.59 -1.005 t0.21 -1.24 z M61.28999999999999 8.08 q0 -0.32 0.18 -0.55 t0.56 -0.23 l2.29 0 q0.12 0 0.26 0.055 t0.26 0.16 t0.205 0.245 t0.085 0.32 l0 11.15 q0 0.38 -0.21 0.575 t-0.6 0.195 l-2.29 0 q-0.74 0 -0.74 -0.77 l0 -11.15 z M61.28999999999999 3.0199999999999996 q0 -0.42 0.18 -0.595 t0.56 -0.175 l2.32 0 q0.35 0 0.565 0.175 t0.215 0.595 l0 1.95 q0 0.12 -0.055 0.26 t-0.155 0.27 t-0.245 0.215 t-0.325 0.085 l-2.32 0 q-0.74 0 -0.74 -0.83 l0 -1.95 z M76.48 18.45 q-0.27 0.27 -0.595 0.58 t-0.715 0.58 t-0.84 0.445 t-0.97 0.175 q-1.36 0 -2.505 -0.51 t-1.97 -1.395 t-1.29 -2.085 t-0.465 -2.58 q0 -1.39 0.465 -2.585 t1.29 -2.08 t1.97 -1.39 t2.505 -0.505 q0.55 0 1.005 0.16 t0.83 0.41 t0.69 0.565 t0.595 0.615 l0 -4.57 q0 -0.32 0.195 -0.54 t0.585 -0.22 l2.25 0 q0.13 0 0.275 0.055 t0.265 0.155 t0.195 0.24 t0.075 0.31 l0 14.95 q0 0.77 -0.81 0.77 l-1.96 0 q-0.2 0 -0.31 -0.05 t-0.185 -0.145 t-0.135 -0.24 t-0.15 -0.335 z M70.73 13.66 q0 0.66 0.205 1.235 t0.585 0.995 t0.915 0.665 t1.185 0.245 q0.64 0 1.205 -0.23 t0.985 -0.635 t0.675 -0.955 t0.285 -1.18 l0 -0.14 q0 -0.64 -0.24 -1.22 t-0.665 -1.02 t-1 -0.695 t-1.245 -0.255 q-0.65 0 -1.185 0.255 t-0.915 0.695 t-0.585 1.02 t-0.205 1.22 z M82.59 13.66 q0 -0.92 0.235 -1.77 t0.66 -1.575 t1.02 -1.32 t1.325 -1.015 t1.575 -0.65 t1.765 -0.23 q1.36 0 2.555 0.505 t2.08 1.39 t1.4 2.08 t0.515 2.585 q0 0.92 -0.235 1.765 t-0.66 1.575 t-1.02 1.325 t-1.325 1.02 t-1.565 0.655 t-1.745 0.23 q-0.92 0 -1.765 -0.23 t-1.575 -0.655 t-1.325 -1.02 t-1.02 -1.325 t-0.66 -1.575 t-0.235 -1.765 z M86.24 13.66 q0 0.66 0.205 1.235 t0.58 0.995 t0.91 0.665 t1.205 0.245 q0.65 0 1.175 -0.245 t0.89 -0.665 t0.56 -0.995 t0.195 -1.235 q0 -0.64 -0.195 -1.22 t-0.56 -1.02 t-0.89 -0.695 t-1.175 -0.255 q-0.67 0 -1.205 0.255 t-0.91 0.695 t-0.58 1.02 t-0.205 1.22 z" />
      </g>
    </svg>
  );
}

export function BrandSvg({ invert = false }: any) {
  const { theme } = useContext(ThemeContext);
  return (
    <svg viewBox="0 0 240 76">
      <g
        transform="matrix(1,0,0,1,0,0)"
        fill={invert ? theme.color.primary_invert : theme.color.primary}
      >
        <rect width="240" height="76" rx="8" />
      </g>
      <g
        transform="matrix(2.112155570364752,0,0,2.112155570364752,17.824478815799303,10.247649966679308)"
        fill={invert ? theme.color.primary : theme.color.primary_invert}
      >
        <path d="M12.94 6.23 q0.17 0.1 0.25 0.26 t-0.03 0.38 l-1.69 2.4 q-0.11 0.17 -0.235 0.195 t-0.305 -0.085 q-0.49 -0.37 -1.08 -0.57 t-1.25 -0.2 q-0.82 0 -1.51 0.31 t-1.19 0.85 t-0.78 1.26 t-0.28 1.54 t0.28 1.535 t0.78 1.25 t1.19 0.845 t1.51 0.31 q0.66 0 1.26 -0.205 t1.09 -0.575 q0.18 -0.11 0.3 -0.09 t0.24 0.18 l1.71 2.46 q0.11 0.22 0.03 0.37 t-0.25 0.25 q-0.94 0.63 -2.025 0.975 t-2.285 0.345 q-1.06 0 -2.035 -0.27 t-1.825 -0.77 t-1.545 -1.195 t-1.195 -1.54 t-0.77 -1.82 t-0.27 -2.035 t0.27 -2.035 t0.77 -1.83 t1.195 -1.555 t1.545 -1.195 t1.825 -0.77 t2.035 -0.275 q1.2 0 2.265 0.335 t2.005 0.965 z M28.36 19.26 q0 0.17 -0.06 0.325 t-0.2 0.245 q-0.11 0.11 -0.26 0.14 t-0.26 0.03 l-1.97 0 q-0.21 0 -0.34 -0.055 t-0.21 -0.155 t-0.135 -0.245 t-0.115 -0.315 l-0.29 -0.75 q-0.27 0.27 -0.59 0.575 t-0.705 0.565 t-0.835 0.435 t-0.96 0.175 q-0.91 0 -1.745 -0.23 t-1.56 -0.655 t-1.315 -1.02 t-1.015 -1.325 t-0.655 -1.575 t-0.23 -1.765 q0 -1.39 0.51 -2.585 t1.39 -2.08 t2.07 -1.39 t2.55 -0.505 q0.62 0 1.14 0.185 t0.945 0.485 t0.77 0.68 t0.615 0.77 l0.39 -1.21 q0.1 -0.25 0.165 -0.405 t0.14 -0.23 t0.185 -0.1 t0.31 -0.025 l1.49 0 q0.11 0 0.26 0.03 t0.26 0.14 q0.14 0.11 0.2 0.25 t0.06 0.32 l0 11.27 z M18.509999999999998 13.66 q0 0.66 0.205 1.235 t0.585 0.995 t0.915 0.665 t1.185 0.245 q0.67 0 1.245 -0.245 t1 -0.665 t0.665 -0.995 t0.24 -1.235 q0 -0.64 -0.24 -1.22 t-0.665 -1.02 t-1 -0.695 t-1.245 -0.255 q-0.65 0 -1.185 0.255 t-0.915 0.695 t-0.585 1.02 t-0.205 1.22 z M31.020000000000003 7.42 q0.13 -0.11 0.27 -0.14 t0.27 -0.03 l1.51 0 q0.19 0 0.315 0.06 t0.205 0.165 t0.135 0.24 t0.105 0.295 l0.42 1.21 q0.28 -0.36 0.565 -0.735 t0.675 -0.68 t0.93 -0.505 t1.32 -0.2 q1.37 0 2.525 0.505 t1.99 1.39 t1.305 2.08 t0.47 2.585 q0 1.38 -0.47 2.58 t-1.305 2.085 t-1.99 1.395 t-2.525 0.51 q-0.65 0 -1.12 -0.155 t-0.835 -0.405 t-0.645 -0.55 t-0.55 -0.6 l0 4.66 q0 0.3 -0.18 0.51 t-0.56 0.21 l-2.29 0 q-0.12 0 -0.26 -0.05 t-0.26 -0.14 t-0.2 -0.225 t-0.08 -0.305 l0 -15.19 q0 -0.2 0.075 -0.33 t0.185 -0.24 z M40.36 13.66 q0 -0.64 -0.21 -1.215 t-0.59 -1.005 t-0.91 -0.68 t-1.17 -0.25 q-0.63 0 -1.195 0.235 t-0.99 0.64 t-0.69 0.955 t-0.295 1.17 l0 0.15 q0 0.66 0.25 1.24 t0.68 1.005 t1.01 0.675 t1.23 0.25 q0.64 0 1.17 -0.25 t0.91 -0.675 t0.59 -1.005 t0.21 -1.24 z M46.29 7.42 q0.13 -0.11 0.27 -0.14 t0.27 -0.03 l1.51 0 q0.19 0 0.315 0.06 t0.205 0.165 t0.135 0.24 t0.105 0.295 l0.42 1.21 q0.28 -0.36 0.565 -0.735 t0.675 -0.68 t0.93 -0.505 t1.32 -0.2 q1.37 0 2.525 0.505 t1.99 1.39 t1.305 2.08 t0.47 2.585 q0 1.38 -0.47 2.58 t-1.305 2.085 t-1.99 1.395 t-2.525 0.51 q-0.65 0 -1.12 -0.155 t-0.835 -0.405 t-0.645 -0.55 t-0.55 -0.6 l0 4.66 q0 0.3 -0.18 0.51 t-0.56 0.21 l-2.29 0 q-0.12 0 -0.26 -0.05 t-0.26 -0.14 t-0.2 -0.225 t-0.08 -0.305 l0 -15.19 q0 -0.2 0.075 -0.33 t0.185 -0.24 z M55.629999999999995 13.66 q0 -0.64 -0.21 -1.215 t-0.59 -1.005 t-0.91 -0.68 t-1.17 -0.25 q-0.63 0 -1.195 0.235 t-0.99 0.64 t-0.69 0.955 t-0.295 1.17 l0 0.15 q0 0.66 0.25 1.24 t0.68 1.005 t1.01 0.675 t1.23 0.25 q0.64 0 1.17 -0.25 t0.91 -0.675 t0.59 -1.005 t0.21 -1.24 z M61.28999999999999 8.08 q0 -0.32 0.18 -0.55 t0.56 -0.23 l2.29 0 q0.12 0 0.26 0.055 t0.26 0.16 t0.205 0.245 t0.085 0.32 l0 11.15 q0 0.38 -0.21 0.575 t-0.6 0.195 l-2.29 0 q-0.74 0 -0.74 -0.77 l0 -11.15 z M61.28999999999999 3.0199999999999996 q0 -0.42 0.18 -0.595 t0.56 -0.175 l2.32 0 q0.35 0 0.565 0.175 t0.215 0.595 l0 1.95 q0 0.12 -0.055 0.26 t-0.155 0.27 t-0.245 0.215 t-0.325 0.085 l-2.32 0 q-0.74 0 -0.74 -0.83 l0 -1.95 z M76.48 18.45 q-0.27 0.27 -0.595 0.58 t-0.715 0.58 t-0.84 0.445 t-0.97 0.175 q-1.36 0 -2.505 -0.51 t-1.97 -1.395 t-1.29 -2.085 t-0.465 -2.58 q0 -1.39 0.465 -2.585 t1.29 -2.08 t1.97 -1.39 t2.505 -0.505 q0.55 0 1.005 0.16 t0.83 0.41 t0.69 0.565 t0.595 0.615 l0 -4.57 q0 -0.32 0.195 -0.54 t0.585 -0.22 l2.25 0 q0.13 0 0.275 0.055 t0.265 0.155 t0.195 0.24 t0.075 0.31 l0 14.95 q0 0.77 -0.81 0.77 l-1.96 0 q-0.2 0 -0.31 -0.05 t-0.185 -0.145 t-0.135 -0.24 t-0.15 -0.335 z M70.73 13.66 q0 0.66 0.205 1.235 t0.585 0.995 t0.915 0.665 t1.185 0.245 q0.64 0 1.205 -0.23 t0.985 -0.635 t0.675 -0.955 t0.285 -1.18 l0 -0.14 q0 -0.64 -0.24 -1.22 t-0.665 -1.02 t-1 -0.695 t-1.245 -0.255 q-0.65 0 -1.185 0.255 t-0.915 0.695 t-0.585 1.02 t-0.205 1.22 z M82.59 13.66 q0 -0.92 0.235 -1.77 t0.66 -1.575 t1.02 -1.32 t1.325 -1.015 t1.575 -0.65 t1.765 -0.23 q1.36 0 2.555 0.505 t2.08 1.39 t1.4 2.08 t0.515 2.585 q0 0.92 -0.235 1.765 t-0.66 1.575 t-1.02 1.325 t-1.325 1.02 t-1.565 0.655 t-1.745 0.23 q-0.92 0 -1.765 -0.23 t-1.575 -0.655 t-1.325 -1.02 t-1.02 -1.325 t-0.66 -1.575 t-0.235 -1.765 z M86.24 13.66 q0 0.66 0.205 1.235 t0.58 0.995 t0.91 0.665 t1.205 0.245 q0.65 0 1.175 -0.245 t0.89 -0.665 t0.56 -0.995 t0.195 -1.235 q0 -0.64 -0.195 -1.22 t-0.56 -1.02 t-0.89 -0.695 t-1.175 -0.255 q-0.67 0 -1.205 0.255 t-0.91 0.695 t-0.58 1.02 t-0.205 1.22 z" />
      </g>
    </svg>
  );
}

type SIZE = 'little' | 'small' | 'regular' | 'large';

const brandStyleConfig: {
  [key in SIZE]: {
    height: string;
  };
} = {
  little: {
    height: '1.7rem',
  },
  small: {
    height: '2rem',
  },
  regular: {
    height: '3rem',
  },
  large: {
    height: '4rem',
  },
};

interface BRAND_WRAPPER {
  size: SIZE;
  align?: 'center' | 'start';
  invert?: boolean;
  noBox?: boolean;
  margin?: number;
}

const Wrapper = styled.div.attrs(
  (props: BRAND_WRAPPER): BRAND_WRAPPER => ({
    size: props.size || 'regular',
    align: props.align || 'start',
    margin: props?.margin !== undefined ? props.margin : 3,
  })
)`
  margin: ${(props) => props.theme.space[props.margin || 3]} 0;
  padding: 0;
  height: ${({ size }) => brandStyleConfig[size]?.height};
  display: flex;
  justify-content: ${({ align }) => align};
  align-items: center;

  svg {
    height: inherit;
    width: auto;
  }
`;

export function Brand({ size, align, invert, noBox, margin }: BRAND_WRAPPER) {
  return (
    <Wrapper size={size} align={align} margin={margin}>
      {noBox ? <BrandCleanSvg invert={invert} /> : <BrandSvg invert={invert} />}
    </Wrapper>
  );
}
