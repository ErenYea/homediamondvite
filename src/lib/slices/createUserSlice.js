export const createUserSlice = (set, get) => ({
  user: null,
  accounttype: null,
  fetchUser: () => {
    return get().user;
  },
  fetchAccountType: () => {
    return get().accounttype;
  },
  setUser: (user) => {
    set({ user });
  },
  setAccoutType: (accounttype) => {
    set({ accounttype });
  },
  removeUser: () => {
    set({ user: null });
  },
});
