import Typography from "typography"
import moragaTheme from 'typography-theme-moraga'

moragaTheme.overrideThemeStyles = () => ({
  'a': {
    color: '#ebebeb',
  },
  'a:hover': {
    color: 'green',
  },
})

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography