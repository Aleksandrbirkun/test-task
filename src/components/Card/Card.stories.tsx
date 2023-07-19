import { Card } from './'

export default {
    title: 'Card',
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        checked: { control: 'boolean' },
        onChange: { action: 'onChange' },
        label: { control: 'text' },
    },
}

export const Default = {
    args: {
        label: 'Flood zone 3'
    }
}
