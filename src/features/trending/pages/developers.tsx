import { useEffect } from 'react';
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DeveloperBoxRow } from '../components/developerBoxRow';
import { selectTrending } from '../store/trendingSelectors';
import { fetchDevelopersThunk } from '../store/trendingThunks';

export const Developers: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { developers } = useSelector(selectTrending);
  useEffect(() => {
    dispatch(fetchDevelopersThunk());
  }, [dispatch]);

  
  return (<div>
    {
      developers.map(developer => <DeveloperBoxRow developer={ developer } key={ developer.name }/>)
    }
  </div>)
}