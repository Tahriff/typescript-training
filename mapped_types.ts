import theme from './Theme'

type Flag = {
    [key: string]: boolean
}

const document_flag: Flag = {
    hasTitle: true,
    isUpToDate: false
}



type Theme = typeof theme
type BreakPoint = Theme["breakpoints"]
type BreakPointEnum = keyof BreakPoint

type Bob = {
    [key in BreakPointEnum]: string
}

const test: Bob = {
    desktop: '',
    mobile: '',
    tablet: ''
}


// exercice créer un type FullColor qui est un énum : admin.10, admin.20, ... , error.10, ...

type Color = keyof Theme["color"]
type ColorCombination = {
    [key in Color]: `${key}.${keyof Theme["color"][key] & string}`
}[keyof Theme['color']]
