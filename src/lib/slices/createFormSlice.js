export const createFormSlice = (set, get) => ({
  step1Data: null,
  step2Data: null,
  step3Data: null,
  step4Data: null,
  companydata: null,
  currentStep: 1,
  sellerId: 1,
  error: null,
  additionalOptions: [],
  setstep1Data: (step1Data) => {
    set({ step1Data });
  },
  setstep2Data: (step2Data) => {
    set({ step2Data });
  },
  setstep3Data: (step3Data) => {
    set({ step3Data });
  },
  setstep4Data: (step4Data) => {
    set({ step4Data });
  },
  setCompanyData: (companydata) => {
    set({ companydata });
  },
  incrementStep: () => {
    const currentStep = get().currentStep;
    set({ currentStep: currentStep + 1 });
  },
  decrementStep: () => {
    const currentStep = get().currentStep;
    set({ currentStep: currentStep - 1 });
  },
  clearData: () => {
    set({
      currentStep: 1,
      companydata: null,
      step4Data: null,
      step3Data: null,
      step2Data: null,
      step1Data: null,
      error: null,
      sellerId: 1,
      additionalOptions: [],
    });
  },
  setAdditionalOptions: (additionalOptions) => {
    set({ additionalOptions });
  },
  setError: (error) => {
    set({ error });
  },
  setSellerid: (id) => {
    set({ sellerId: id });
  },
  // setData:(firstName,) => {

  // }
});
