import { IDeveloper } from './../../../app/model/developer.model';
import { IRepository } from './../../../app/model/repository.model';
import { AxiosError, AxiosResponse } from "axios";
import request from "../../../app/request";

export const fetchRepositories = (options?: {language?: string, since?: 'daily' | 'weekly' | 'monthly', spoken_lang?: string}): Promise<AxiosResponse<any | AxiosError>> => {
  return request<IRepository[]>(
    options && options.language ? `repositories/${options.language}` : 'repositories',
    { method: 'GET', params: { since: options?.since, spoken_lang: options?.spoken_lang } },
  );
}



export const fetchDevelopers = (options?: {language?: string, since?: 'daily' | 'weekly' | 'monthly'}): Promise<AxiosResponse<any | AxiosError>> => {
  return request<IDeveloper[]>(
    options && options.language ? `developers/${options.language}` : 'developers',
    { method: 'GET', params: { since: options?.since } }, 
  );
}