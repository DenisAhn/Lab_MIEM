import css from './Select.module.scss'
import cn from 'classnames'
import { Select as SelectAntd } from 'antd'
import styled from 'styled-components'

const StyledSelect = styled(SelectAntd)`
  & .ant-select-selector {
    border-radius: 20px !important;
    height: 55px !important;
  }

  & .ant-select-selection-item {
    text-align: center !important;
    line-height: 50px !important;
    font-size: 20px !important;
    color: #001f99;
  }
`

const Select = ({ className, children, label, ...props }) => (
  <div className={cn(css.select, className)}>
    <div className={css.select_label}>{label}</div>
    <StyledSelect {...props}>{children}</StyledSelect>
  </div>
)

export default Select
