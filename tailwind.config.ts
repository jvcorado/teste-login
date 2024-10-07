import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/theme';


const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(checkbox|input).js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '768px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        /*              'mobile-login': "url('./public/bg-login.svg')" */
      },
      backgroundColor: {
        'green-opacity-10': 'rgba(0, 108, 62, 0.2)',
        'green-opacity-15': {
          default: 'rgba(0, 108, 62, 0.15)',
          hover: 'rgba(0, 108, 62, 0.20)',
        },
        'red-opacity-15': {
          default: 'rgba(220,53,69, 0.15)',
          hover: 'rgba(220,53,69, 0.20)',
        },
      },
      colors: {
        themeSearch: { DEFAULT: 'var(--themeSearch)' },
        themeCards: { DEFAULT: 'var(--themeCards)' },
        themeModais: { DEFAULT: 'var(--themeModais)' },
        themeInputs: { DEFAULT: 'var(--themeInputs)' },
        themeFontsPrimary: { DEFAULT: 'var(--themeFontsPrimary)' },
        themeFontsSecondary: { DEFAULT: 'var(--themeFontsSecondary)' },
        themeBackground: { DEFAULT: 'var(--themeBackground)' },
        themeMenu: { DEFAULT: 'var(--themeMenu)' },
        themeStroke: { DEFAULT: 'var(--themeStroke)' },
        themeGreen: { DEFAULT: 'var(--themeGreen)' },
        themeGreenLigth: { DEFAULT: 'var(--themeGreenLigth)' },
        themeOrange: { DEFAULT: 'var(--themeOrange)' },
        themeRed: { DEFAULT: 'var(--themeRed)' },
        themeStrokeDatagrid: { DEFAULT: 'var(--themeStrokeDatagrid)' },
        gray50: { DEFAULT: '#E9E9E9' },
        gray300: { DEFAULT: '#686868' },
        gray400: { DEFAULT: '#444648' },
        red: { DEFAULT: '#E53434' },
        borderInput: { DEFAULT: 'var(--borderInput)' },
        primary: '#006c3d',
        danger: '#C72D2D ',
        warning: '#D2710F ',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    nextui(),
    /*   nextui({
          addCommonColors: true,
          themes: {
              light: {
                  colors: {
                      themeSearch: { DEFAULT: "var(--themeSearch)" },
                      themeCards: { DEFAULT: "var(--themeCards)" },
                      themeModais: { DEFAULT: "var(--themeModais)" },
                      themeInputs: { DEFAULT: "var(--themeInputs)" },
                      themeFontsPrimary: { DEFAULT: "var(--themeFontsPrimary)" },
                      themeFontsSecondary: { DEFAULT: "var(--themeFontsSecondary)" },
                      themeBackground: { DEFAULT: "var(--themeBackground)" },
                      themeMenu: { DEFAULT: "var(--themeMenu)" },
                      themeStroke: { DEFAULT: "var(--themeStroke)" },
                  },
              },
              dark: {
                  colors: {
                      themeSearch: { DEFAULT: "var(--themeSearch)" },
                      themeCards: { DEFAULT: "var(--themeCards)" },
                      themeModais: { DEFAULT: "var(--themeModais)" },
                      themeInputs: { DEFAULT: "var(--themeInputs)" },
                      themeFontsPrimary: { DEFAULT: "var(--themeFontsPrimary)" },
                      themeFontsSecondary: { DEFAULT: "var(--themeFontsSecondary)" },
                      themeBackground: { DEFAULT: "var(--themeBackground)" },
                      themeMenu: { DEFAULT: "var(--themeMenu)" },
                      themeStroke: { DEFAULT: "var(--themeStroke)" }
                  },
              },
          },
      }), */
  ],
};
export default config;
