import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Localization {
  locale: string;
  availableLocales: Locale[];
}

export interface Locale {
  locale: string;
  flag?: string;
}

export interface SetLocaleAction {
  locale: string;
}

export const localization = createSlice({
  name: 'brj/localization',
  initialState: {
    locale: 'cs',
    availableLocales: [
      { locale: 'cs', flag: 'π¨πΏ' },
      { locale: 'en', flag: 'π¬π§' },
      { locale: 'sk', flag: 'πΈπ°' },
    ],
  } as Localization,
  reducers: {
    setActiveLocale: (state, action: PayloadAction<SetLocaleAction>) => {
      return {
        ...state,
        locale: action.payload.locale,
      };
    },
  },
});

export function* localizationSaga() {
  yield 1;
}

export const { setActiveLocale } = localization.actions;
