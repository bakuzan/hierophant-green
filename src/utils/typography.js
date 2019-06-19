import '../fonts/fonts.css';
import './global.css';
import Typography from 'typography';
import FairyGates from 'typography-theme-fairy-gates';

FairyGates.overrideThemeStyles = () => ({
  a: {
    color: 'var(--link-colour)',
    backgroundImage: 'none',
    textShadow: 'none'
  },
  'h1,h2,h3,h4,h5,h6': {
    color: 'var(--text-title-colour)'
  },
  'td,th': {
    padding: typography.rhythm(1 / 2)
  }
});
delete FairyGates.googleFonts;

const typography = new Typography(FairyGates);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
