/* eslint-disable no-unused-vars */
import { aqua, waterMelon, black, white, grape } from './color-palette'

export const COLORS = {
  text: {
    light: black.main, // Oxford Blue Dark
    dark: white.main, // white
  },
  background: {
    light: white.main, // white
    dark: black.main, // navy navy blue
  },
  offBackground: {
    light: white[100], // white
    dark: black.dark, // navy navy blue
  },
  primary: {
    light: grape.main, // Pinkish-red
    dark: aqua.main, // Yellow
  },
  primaryLight: {
    light: grape.light, // Pinkish-red
    dark: aqua.dark, // Yellow
  },
  secondary: {
    light: aqua.main, // Purplish-blue
    dark: aqua.main, // Cyan
  },
  secondaryLight: {
    light: aqua.light, // Purplish-blue
    dark: aqua.light, // Cyan
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
