import type { StyleConfig } from "@chakra-ui/theme-tools"
import { extendTheme, ThemeOverride } from "@chakra-ui/react"

const Text: StyleConfig = {
  baseStyle: {
    fontFamily: 'DynaPuff',
    fontStyle: 'normal',
    color: 'black',
    fontWeight: 400
  },
  variants: {
    headerH1: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: 'white',
    },
    headerH2: {
      fontSize: '14px',
      color: 'white',
    },
    contentsH1: {
      fontSize: '20px',
    },
    contentsH2: {
      fontSize: '16px',
    },
    footerH1: {
      fontSize: "12px",
    },
  }
}

const Button: StyleConfig = {
  baseStyle: {
    fontFamily: 'DynaPuff',
    fontStyle: 'normal',
    color: 'white',
    fontWeight: 400
  },
  variants: {
    header: {
      fontWeight: 'bold',
      fontSize: '18px',
      bgColor: 'brand.200',
    },
    minting: {
      fontSize: '18px',
      bgColor: 'brand.300',
    },
    modalAccept: {
      w: '100px',
      h: '40px',
      fontSize: '18px',
      bgColor: 'brand.300'
    },
    modalCancel: {
      w: '100px',
      h: '40px',
      fontSize: '16px',
      bgColor: 'brand.200'
    },
    sale_status: {
      fontSize: '12px',
    },
    sell: {
      fontSize: '14px',
      bgColor: 'brand.200',
    },
    purchase: {
      fontSize: '14px',
      bgColor: 'brand.200',
    },
  }
}

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  brand: {
    100: '#FFD3EB',
    200: '#E88CBD',
    300: '#D53F8c',
  },
  negative: '#3182CE',
}

const shadows = {
  default: '0px 0px 20px 0px #00000040',
}

const theme: ThemeOverride = extendTheme({
  components: {
    Text,
    Button,
  },
  colors,
  shadows,
})

export default theme
