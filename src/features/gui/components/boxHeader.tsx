import { FunctionComponent } from "react";
import styled from "styled-components";
import { Navigation } from "../../trending/components/navigation";
import { SelectMenuLanguages } from "../../trending/components/selectMenuLanguages";
import { SelectProgrammingLanguages } from "../../trending/components/selectProgrammingLanguage";
import { useLocation } from 'react-router-dom'
import { SelectDateRange } from "../../trending/components/selectDateRange";
import { useDispatch, useSelector } from "react-redux";
import { IDateRange } from "../../../app/model/dateRange.model";
import { setDateRange, setProgrammingLanguage, setSelectedLanguage } from "../../trending/store/trendingActions";
import { selectTrending } from "../../trending/store/trendingSelectors";
import { fetchDevelopersThunk, fetchRepositoriesThunk } from "../../trending/store/trendingThunks";
import { ISpokenLanguage } from "../../../app/model/language.model";

const Wrapper = styled.div`
@media (min-width: 768px) {
  display: flex!important;
  align-items: center!important;
  justify-content: space-between!important;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: -1px -1px 0;
  padding: 18px;
}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;


export const BoxHeader: FunctionComponent = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const { selectedDateRange, selectedLanguage, selectedProgrammingLanguage } = useSelector(selectTrending);
  const handleDateRangeSelect = (range: IDateRange) => {
      dispatch(setDateRange(range));
      applyFilters({ language: selectedProgrammingLanguage ? selectedProgrammingLanguage : undefined, since: range.value, spoken_lang: selectedLanguage?.identifier });
  }
  const handleProgrammingLanguageSelect = (language: string) => {    
    dispatch(setProgrammingLanguage(language));
    applyFilters({ language,  since: selectedDateRange.value, spoken_lang: selectedLanguage?.identifier });
  }

  const handleLanguageSelect = (language: ISpokenLanguage) => {
    dispatch(setSelectedLanguage(language));
    applyFilters({ language: selectedProgrammingLanguage ? selectedProgrammingLanguage : undefined,  since: selectedDateRange.value, spoken_lang: language.identifier });
  }

  const applyFilters = (options: {language: string | undefined, since: string, spoken_lang?: string}) => {    
    if (location.pathname !== '/developers') {
      //@ts-ignore
      dispatch(fetchRepositoriesThunk({ language: options.language, since: options.since, spoken_lang: options.spoken_lang }))
    } else {
      //@ts-ignore
      dispatch(fetchDevelopersThunk({language: options.language, since: options.since}))
    }
  }

  return (
  <Wrapper>
    <Navigation></Navigation>
    <Flex>
      { location.pathname !== '/developers' && <SelectMenuLanguages handleSelectFn={ handleLanguageSelect }/>}
      <SelectProgrammingLanguages handleSelectFn={ handleProgrammingLanguageSelect }/>
      <SelectDateRange handleSelectFn={ handleDateRangeSelect }/>
    </Flex>
  </Wrapper>
  )
}