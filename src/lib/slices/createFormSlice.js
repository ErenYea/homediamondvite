export const createFormSlice = (set, get) => ({
  step1Data: null,
  step2Data: null,
  step3Data: null,
  step4Data: null,
  companyid: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  zip: null,
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
  setCompanyId: (companyid) => {
    set({ companyid });
  },
  // setData:(firstName,) => {

  // }
});
