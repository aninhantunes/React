import { TextField } from "@material-ui/core";

export const PRIMARY_COLOR = '#004643';
export const SECONDARY_COLOR = '#B23552';

export const SPACING = 8;

const round2 = (n) => Math.round(n * 100) / 100;
 
const em = (n) => round2(n) + 'em';
 
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