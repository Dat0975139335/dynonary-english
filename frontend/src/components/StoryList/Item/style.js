import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: '1.2rem 0',
    borderBottom: 'solid 1px var(--border-color)',
    cursor: 'pointer',
    transition: 'all 0.35s',

    '&:hover, &:active': {
      borderBottom: 'solid 1px var(--accent-color)',
    },
  },

  picture: {
    display: 'none',
  },

  word: {
    fontSize: '1.8rem',
    fontWeight: 500,
    color: 'var(--primary-color)',
  },

  type: {
    color: 'var(--label-color)',
  },

  phonetic: {
    display: 'none',
  },

  mean: {
    fontSize: '1.6rem',
    color: 'var(--text-color)',
    maxWidth: '80%',
    lineHeight: 1.5,
  },
}));
