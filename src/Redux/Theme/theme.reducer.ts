import { EnumTheme, ToggleTheme, TypeTheme } from "./theme.type"



interface IState{
    theme:TypeTheme
}
const  initialState:{
    theme:TypeTheme

}={
    theme:"Light"
}


export const  ThemeReducer=(state=initialState,action:ToggleTheme):IState=>{

    switch (action.type) {
        case EnumTheme.ToggleTheme:

             return {
                  ...state,
                  theme:action.payload.theme
               
             }

default :return state

}
}