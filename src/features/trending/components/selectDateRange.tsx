import { FunctionComponent } from "react"
import { SelectMenu } from '@primer/components'
import { useState } from "react"
import styled from "styled-components"
import { IDateRange } from "../../../app/model/dateRange.model"

const style = {
  backgroundColor: 'red'
}

const Padding = styled.div`
  padding: 0 15px;
`;

export const SelectDateRange: FunctionComponent<{ handleSelectFn: (range: IDateRange) => any }> = ({ handleSelectFn }) => {
  const ranges: IDateRange[] = [
    {view: 'Today', value: 'daily'},
    {view: 'This week', value: 'weekly'},
    {view: 'This month', value: 'monthly'},
  ]
  const [range, setRange] = useState(ranges[0]);

 //@ts-ignore
  const handleSelect = (e) => {
    setRange(e);
    handleSelectFn(e);
  }

  return(
    <Padding>
      <SelectMenu css={style}>
      <summary style={{cursor: 'pointer', fontSize: '14px'}} >Date Range: <span style={{fontWeight: 600}}>{range.view}</span></summary>
      <SelectMenu.Modal>
        <SelectMenu.Header>Adjust time span</SelectMenu.Header>
        <SelectMenu.List>
        {
            ranges.map((dateRange, i) => <SelectMenu.Item selected={dateRange.value === range.value}
                                                       onClick={() => handleSelect(dateRange)}
                                                       key={i}>{dateRange.view}
                                      </SelectMenu.Item>)
          }
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
    </Padding>
  )
}