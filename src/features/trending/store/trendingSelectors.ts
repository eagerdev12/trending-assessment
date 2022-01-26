import { RootState } from '../../../app/store/store';

export const selectRepositories = (state: RootState) => state.trending.repositories;
export const selectTrending = (state: RootState) => state.trending;
export const selectDevelopers = (state: RootState) => state.trending.developers;
export const selectLanguage = (state: RootState) => state.trending.selectedLanguage;
export const selectProgrammingLanguage = (state: RootState) => state.trending.selectedProgrammingLanguage;
export const selectDateRange = (state: RootState) => state.trending.selectedDateRange;
export const selectIsLoading = (state: RootState) => state.trending.isLoading;
export const selectError = (state: RootState) => state.trending.error;