import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"M PLUS Rounded 1c"',
          'Roboto',
          ...defaultTheme.fontFamily.sans
        ],
        heading: [
          '"M PLUS Rounded 1c"',
          ...defaultTheme.fontFamily.sans
        ],
      },
    },
  },
} as Config