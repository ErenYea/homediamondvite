import { translations } from "../constant";

export const createLanguageSlice = (set, get) => ({
  language: "en",
  fetchLanguage: () => {
    return get().language;
  },
  setLanguage: (language) => {
    set({ language });
  },
  getText: (section, element, index) => {
    // console.log(index);
    if (index !== undefined && index !== null) {
      // console.log(translations.en[section][element][index].heading);
      return (
        translations[get().language]?.[section]?.[element]?.[index] ||
        translations.en[section][element][index] ||
        "Text not found"
      );
    }
    return (
      translations[get().language]?.[section]?.[element] ||
      translations.en[section][element] ||
      "Text not found"
    );
  },
});
