export const createLanguageSlice = (set, get) => ({
  language: "en",
  fetchLanguage: () => {
    return get().language;
  },
  setLanguage: (language) => {
    set({ language });
  },
});
