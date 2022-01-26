export interface IPopularRepository {
  repositoryName: string;
  description: string;
  url: string;
}

export interface IDeveloper {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: IPopularRepository;
}