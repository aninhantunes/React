export const PRIMARY_COLOR = '#1D3557';
export const SECONDARY_COLOR = '#a8dadc';

export const SPACING = 8;

const round2 = (n) => Math.round(n * 100) / 100;
 
const em = (n) => round2(n) + 'em';

export const USER_COLORS = ['#ffe66d', '#43aa8b', '#ff006e', '#90be6d', '#b8f2e6', '#073b4c', '#9a031e', '#0353a4'];
 
const generateNClasses = (name, number, calc) => {
  let classes = {};
 
  for (let i = 0; i <= number; i++) {
    let className = name.replace('{i}', i);
    classes[className] = calc(i);
  }
 
  return classes;
};
 
const spacing = (num) => (num ? num * SPACING + 'px' : '0');

export default {
    spacing: SPACING,
    palette: {
        background: {
            default: '#fff',
        },
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
        text:{
            primary: PRIMARY_COLOR,
            secondary: SECONDARY_COLOR,
        }
    },
    overrides: {

    }
}