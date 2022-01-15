import {  useCallback } from "react"
import {Dispatch} from'redux'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState } from "../Redux"
import { toggleTheme } from "../Redux/Theme/action.theme"
import { ToggleTheme, TypeTheme } from "../Redux/Theme/theme.type"

export function UseTheme(): [TypeTheme, () => void] {
    const dispatch = useDispatch()
    const theme = useSelector<AppState, AppState['theme']['theme']>((state:AppState) => state.theme.theme)
    const themeToggle = useCallback(() => {
      return dispatch(toggleTheme(theme))
    }, [dispatch])
  
    return [theme, toggleTheme]
  }