import { IDateRange } from './../../../app/model/dateRange.model';
import { IDeveloper } from './../../../app/model/developer.model';
import { IRepository } from './../../../app/model/repository.model';
import { programmingLanguages } from './../constants/programmingLanguages';
import { spokenLanguages } from './../constants/spokenLanguages';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpokenLanguage } from '../../../app/model/language.model';

export interface TrendingState {
  repositories: IRepository[];
  developers: IDeveloper[];
  spokenLanguages: ISpokenLanguage[];
  programmingLanguages: string[];
  selectedLanguage: ISpokenLanguage | null;
  selectedProgrammingLanguage: string | null;
  selectedDateRange: IDateRange,
  isLoading: boolean;
  error: string | null;
}

const initialState: TrendingState = {
  developers: [],
  repositories: [],
  spokenLanguages: spokenLanguages,  
  programmingLanguages: programmingLanguages,
  selectedLanguage: null,
  selectedProgrammingLanguage: null,
  selectedDateRange: {view: 'Today', value: 'daily'},
  isLoading: false,
  error: null
}

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    fetchDevelopers: (state) => {
      state.isLoading = true;
    },
    fetchDevelopersSuccess: (state, action: PayloadAction<IDeveloper[]>) => {
      state.isLoading = false;
      state.error = null;
      state.developers = action.payload
    },
    fetchRepositories: (state) => {
      state.isLoading = true;
    },
    fetchRepositoriesSuccess: (state, action: PayloadAction<IRepository[]>) => {
      state.isLoading = false;
      state.error = null;
      state.repositories = action.payload
    },
    setSelectedLanguage: (state, action: PayloadAction<ISpokenLanguage>) => {
      state.selectedLanguage = action.payload
    },
    setProgrammingLanguage: (state, action: PayloadAction<string>) => {
      state.selectedProgrammingLanguage = action.payload
    },
    setDateRange: (state, action: PayloadAction<IDateRange>) => {
      state.selectedDateRange = action.payload
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default trendingSlice.reducer;