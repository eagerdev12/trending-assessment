export interface IRepository {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: IBiltBy[];
}

export interface IBiltBy {
  username: string;
  url: string;
  avatar: string;
}