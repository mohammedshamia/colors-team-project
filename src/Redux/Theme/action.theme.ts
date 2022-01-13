import { EnumTheme, TypeTheme } from "./theme.type"


export const  toggleTheme=(theme:TypeTheme="Light")=>({
    type:EnumTheme.ToggleTheme,
    payload:{
        theme:theme==="Dark"?"Light":"Dark"
    }
})



