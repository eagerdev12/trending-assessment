import { FunctionComponent } from "react"
import { SelectMenu } from '@primer/components'
import { spokenLanguages } from "../constants/spokenLanguages"
import { useState } from "react"
import { ISpokenLanguage } from "../../../app/model/language.model"
import styled from "styled-components"

const style = {
  backgroundColor: 'red'
}

const Padding = styled.div`
  padding: 0 15px;
`;

export const SelectMenuLanguages: FunctionComponent<{ handleSelectFn: (lang: ISpokenLanguage) => any }> = ({ handleSelectFn }) => {
  const [filter, setFilter] = useState('');
  const [lang, setLang] = useState({} as ISpokenLanguage);
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
      <summary style={{cursor: 'pointer', fontSize: '14px'}} >Spoken Language: <span style={{fontWeight: 600}}>{lang.name ? lang.name : 'Any'}</span></summary>
      <SelectMenu.Modal>
        <SelectMenu.Header>Select a spoken language</SelectMenu.Header>
        <SelectMenu.Filter placeholder="Select a spoken language" value={filter} aria-label="Select a spoken language" onChange={handleFilter} />
        <SelectMenu.List>
        <SelectMenu.Item selected={!lang.name} onClick={() => handleSelect({})} >Any</SelectMenu.Item>
          {
            spokenLanguages.filter(lang => !filter || lang.name.toLowerCase().includes(filter.toLowerCase()))
                .map((language) => <SelectMenu.Item selected={language.name === lang.name} onClick={() => handleSelect(language)} key={language.name}>{language.name}</SelectMenu.Item>)
          }
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
    </Padding>
  )
}