import { IRepository } from './../../../app/model/repository.model';
import { fetchRepositories } from './../api/api';
import { fetchDevelopers } from "../api/api"
import { fetchDevelopersSuccess, fetchError, fetchRepositoriesSuccess } from "./trendingActions"

export const fetchDevelopersThunk = (options?: { language?: string, since?:  'daily' | 'weekly' | 'monthly'}) => {
  return (dispatch: any) => {
    fetchDevelopers(options)
      .then((response) => dispatch(
        fetchDevelopersSuccess(response.data as any[])
      ))
      .catch((response) => dispatch(
        fetchError(response.data)
      ))
  }
}


export const fetchRepositoriesThunk = (options?: { language?: string, since?:  'daily' | 'weekly' | 'monthly', spoken_lang?: string}) => {
  return (dispatch: any) => {
    fetchRepositories(options)
      .then((response) => dispatch(
        fetchRepositoriesSuccess(response.data as IRepository[])
      ))
      .catch((response) => dispatch(
        fetchError(response.data)
      ))
  }
}