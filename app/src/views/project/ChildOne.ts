interface Student {
    name: string,
    say: () => {}
}

const handleClick = (): boolean => {
    return true
}
export const newMap = new Map([
    ['clickItem', handleClick]
])
