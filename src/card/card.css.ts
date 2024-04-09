import { style, StyleRule } from '@vanilla-extract/css'
export const cardWrapper = style({
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    color: '#2e2e2e',
    width: '100%',
    borderWidth: 1,
    borderColor: '#4e4e4e',
    borderStyle: 'solid',
    overflow: 'clip',
    boxSizing: 'border-box',
})

const contentRule: StyleRule = {
    padding: 16,
    width: '100%',
    minHeight: 48,
    boxSizing: 'border-box',
}

export const cardContent = style(contentRule)

export const cardImage = style({
    width: '100%',
})

export const cardActions = style(contentRule)
