import { createSelector } from 'reselect';

const getAllData = (state) => state.data;

export const allData = createSelector([getAllData], ({ allData }) => allData);

export const isLoading = createSelector([getAllData], ({ isLoading }) => isLoading)

export const response = createSelector([getAllData], ({ response }) => response)