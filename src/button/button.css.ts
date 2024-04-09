import { style } from '@vanilla-extract/css'

export const baseButton = style({
    cursor: 'pointer',
    borderRadius: 4,
    fontSize: '1rem',
    border: 'none',
    padding: 16,
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 1,
    backgroundColor: '#017b9e',
    color: '#ffffff',
    ':hover': {
        backgroundColor: '#015972',
    },
})
