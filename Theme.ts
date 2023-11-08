const color = {
  admin: {
    '20': '#F1EBFF',
    '40': '#AA80FF',
    '60': '#7E47EB',
    '80': '#4E1FAD',
    '100': '#13004D',
  },
  error: {
    '10': '#FFF2F2',
    '20': '#FFE5E5',
    '30': '#FFCCCC',
    '40': '#FF8080',
    '50': '#FC4C4C',
    '60': '#EB1717',
    '70': '#C40A0A',
    '80': '#A60000',
    '90': '#730000',
    '100': '#400000',
  },
  highlight: {
    '10': '#FEFADE',
    '20': '#FEF0C3',
    '30': '#FDE18E',
    '40': '#FECA3D',
    '50': '#F8B500',
    '60': '#EBA200',
    '70': '#D58C00',
    '80': '#AF6D00',
    '90': '#794900',
    '100': '#2E1900',
  },
  neutral: {
    '0': '#FFFFFF',
    '10': '#F5F7FA',
    '20': '#EEF2F6',
    '30': '#E6EBF0',
    '40': '#DEE5ED',
    '50': '#C2CCD6',
    '60': '#A7B2BE',
    '70': '#7B8C9E',
    '80': '#627384',
    '90': '#414D58',
    '100': '#22262A',
  },
  primary: {
    '10': '#F2F6FF',
    '20': '#E5EDFF',
    '30': '#BFD0FF',
    '40': '#8CA7FF',
    '50': '#6685FF',
    '60': '#4060FF',
    '70': '#2745D9',
    '80': '#0D27A6',
    '90': '#001373',
    '100': '#000B40',
  },
  success: {
    '10': '#EBFFF5',
    '20': '#D7FCE6',
    '30': '#A4EBBD',
    '40': '#54D18C',
    '50': '#1DBF6B',
    '60': '#08A356',
    '70': '#007D3E',
    '80': '#006130',
    '90': '#004020',
    '100': '#002613',
  },
  warning: {
    '10': '#FFF6ED',
    '20': '#FFECD9',
    '30': '#FAD5AF',
    '40': '#FAAF64',
    '50': '#F5902A',
    '60': '#E5780B',
    '70': '#BF6000',
    '80': '#994D00',
    '90': '#5E2F00',
    '100': '#3B1D00',
  },
} as const

const family =
  '-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif'
const brand_family =
  'Brand, -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif'

const font = {
  base: {
    default: {
      h1: 'bold',
      h2: 'bold',
      h3: 'bold',
      h4: 'bold',
      h5: 'bold',
      m: 'regular',
      s: 'regular',
    },
    mobile: {
      h1: 'h2',
      h2: 'h3',
      h3: 'h4',
      h4: 'h5',
      h5: 'h5',
      m: 'm',
      s: 's',
    },
    sizes: {
      h1: {
        bold: `700 2rem/1.25 ${family}`,
      },
      h2: {
        bold: `700 1.75rem/1.143 ${family}`,
      },
      h3: {
        bold: `700 1.5rem/1.334 ${family}`,
      },
      h4: {
        bold: `700 1.25rem/1.2 ${family}`,
      },
      h5: {
        bold: `700 1.125rem/1.334 ${family}`,
        regular: `400 1.125rem/1.334 ${family}`,
      },
      m: {
        bold: `700 1rem/1.5 ${family}`,
        medium: `500 1rem/1.5 ${family}`,
        regular: `400 1rem/1.5 ${family}`,
      },
      s: {
        bold: `700 .875rem/1.429 ${family}`,
        medium: `500 .875rem/1.429 ${family}`,
        regular: `400 .875rem/1.429 ${family}`,
      },
    },
    spacing: '0',
    transform: 'normal',
  },
  brand: {
    default: {
      h1: 'bold',
    },
    mobile: {
      h1: 'h1',
    },
    sizes: {
      h1: {
        bold: `700 2.5rem/0.9 ${brand_family}`,
      },
    },
    spacing: '0.03125rem',
    transform: 'uppercase',
  },
} as const

/* eslint-disable sort-keys-fix/sort-keys-fix -- better readability */
const radii = {
  '0': '0px',
  s: '4px',
  m: '8px',
  l: '16px',
} as const

const spacing = {
  '0': '0px',
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '48px',
  xxxxl: '64px',
} as const
/* eslint-enable sort-keys-fix/sort-keys-fix -- see above */

const transition = {
  duration: '0.2s',
  easing: 'ease-in',
} as const

/* eslint-disable sort-keys-fix/sort-keys-fix -- better readability */
const icon = {
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '48px',
  xxxxl: '64px',
} as const
/* eslint-enable sort-keys-fix/sort-keys-fix -- see above */

const breakpoints = {
  desktop: '1190px',
  mobile: '767px',
  tablet: '992px',
}

const theme = {
  breakpoints,
  color,
  font,
  'font-family': family,
  icon,
  radii,
  spacing,
  transition,
} as const

type Recursive = { [key: string]: Recursive | string }
function makeVariables(obj: Recursive, path: string[] = []): Recursive {
  return Object.entries(obj).reduce<Recursive>((map, [key, val]) => {
    const current_key = [...path, key]
    if (typeof val === 'object') {
      map[key] = makeVariables(val, current_key)
    } else {
      map[key] = `var(--mtr-${current_key.join('-')})`
    }
    return map
  }, {})
}
export const variables = makeVariables(theme) as Theme

export type Theme = typeof theme
export default theme
