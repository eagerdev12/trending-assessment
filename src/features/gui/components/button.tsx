import styled from "styled-components"

export const PrimaryButton = styled.button`
  font-size: 12px;
  line-height: 20px;
  padding: 3px 12px;
  box-shadow: 0 0 transparent, 0 0 transparent;
  background-color: #21262d;
  border: 1px solid #30363d;
  color: #c9d1d9;
  transition: .2s cubic-bezier(.3,0,.5,1);
  transition-property: color,background-color,border-color;
  display: inline-flex;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  align-items: center;
  font-weight: 500;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
    &:hover {
      background-color: #30363d;
      border-color: #8b949e;
      transition-duration: .1s;
    }
`