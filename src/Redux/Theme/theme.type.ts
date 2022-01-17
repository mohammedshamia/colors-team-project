import { Action } from 'redux';

export enum EnumTheme {
  'ToggleTheme' = 'ToggleTheme',
}

export type TypeTheme = 'Dark' | 'Light';

export interface ToggleTheme extends Action<string> {
  type: EnumTheme.ToggleTheme;
  payload: {
    theme: TypeTheme;
  };
}
