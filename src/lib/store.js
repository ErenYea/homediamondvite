import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createUserSlice } from "./slices/createUserSlice";
import { createLanguageSlice } from "./slices/createLanguageSlice";
import { createFormSlice } from "./slices/createFormSlice";

export const useAppStore = create()(
  // persist(
  (...a) => ({
    ...createUserSlice(...a),
    ...createLanguageSlice(...a),
    ...createFormSlice(...a),
  }),
  {
    name: "user-state",
  }
  // )
);
