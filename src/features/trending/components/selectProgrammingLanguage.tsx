import { FunctionComponent, useState } from "react"
import { SelectMenu } from '@primer/components'
import { programmingLanguages } from "../constants/programmingLanguages"
import styled from "styled-components";
const style = {
  backgroundColor: 'red'
}

const Padding = styled.div`
  padding: 0 15px;
`;

export const SelectProgrammingLanguages: FunctionComponent<{ handleSelectFn: (lang: string) => any }> = ({ handleSelectFn }) => {
  const [filter, setFilter] = useState('');
  const [lang, setLang] = useState('');
  //@ts-ignore
  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
 //@ts-ignore
  const handleSelect = (e) => {
    setLang(e);
    handleSelectFn(e);
  }

  return(
    <Padding>
      <SelectMenu css={style} inputMode={'text'}>
      <summary style={{cursor: 'pointer', fontSize: '14px'}} >Language: <span style={{fontWeight: 600}}>{lang ? lang : 'Any'}</span></summary>
      <SelectMenu.Modal>
        <SelectMenu.Header>Select a language</SelectMenu.Header>
        <SelectMenu.Filter placeholder="Filter languages" value={filter} aria-label="Filter Languages" onChange={handleFilter} />
        <SelectMenu.List>
        <SelectMenu.Item selected={!lang} onClick={() => handleSelect('')} >Any</SelectMenu.Item>
          {
            programmingLanguages.filter(lang => !filter || lang.toLowerCase().includes(filter.toLowerCase()))
                .map((language) => <SelectMenu.Item selected={language === lang} onClick={() => handleSelect(language)} key={language}>{language}</SelectMenu.Item>)
          }
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
    </Padding>
  )
}