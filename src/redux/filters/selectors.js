import { filtersSlice } from "./filtersSlice";

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
