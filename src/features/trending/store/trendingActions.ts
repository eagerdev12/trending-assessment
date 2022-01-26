import { trendingSlice } from './trendingSlice';

export const { fetchDevelopers } = trendingSlice.actions;
export const { fetchDevelopersSuccess } = trendingSlice.actions;
export const { fetchRepositories } = trendingSlice.actions;
export const { fetchRepositoriesSuccess } = trendingSlice.actions;
export const { setSelectedLanguage } = trendingSlice.actions;
export const { setProgrammingLanguage } = trendingSlice.actions;
export const { setDateRange } = trendingSlice.actions;
export const { fetchError } = trendingSlice.actions;