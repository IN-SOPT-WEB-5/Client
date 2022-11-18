import { css, CSSProp } from 'styled-components';

const colors = {
  main_purple: '#503396',
  main_darken: '#351f66',
  sub_mint: '#73bcc7',
  sub_blue: '#344690',
  gray1: '#222222',
  gray2: '#444444',
  gray3: '#666666',
  gray4: '#888888',
  gray5: '#aaaaaa',
  white: '#ffffff',
  footer: '#F8F8FA',
};

function FONT({ weight, size, lineHeight }) {
  return `
      font-family: 'NanumBarunGothic';
      font-weight: ${weight};
      font-size: ${size}rem;
      line-height: ${lineHeight}%;
    `;
}

const fonts = {
  headline1: FONT({ weight: 400, size: 3, lineHeight: 110 }),
  headline2: FONT({ weight: 400, size: 2.8, lineHeight: 111 }),
  headline3: FONT({ weight: 400, size: 2, lineHeight: 110 }),
  body1_bold: FONT({ weight: 600, size: 1.5, lineHeight: 153 }),
  body1: FONT({ weight: 400, size: 1.3, lineHeight: 154 }),
  body2: FONT({ weight: 400, size: 1.3, lineHeight: 154 }),
};

const theme = {
  colors,
  fonts,
};

export default theme;
