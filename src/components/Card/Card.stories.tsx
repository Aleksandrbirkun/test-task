import { Card } from './'

export default {
    title: 'Card',
    component: <Card/>,
    tags: ["autodocs"]
}

export const Default = {
    args: {
        checked: true,
        onChange: (checked: boolean) => {}
    }
}
