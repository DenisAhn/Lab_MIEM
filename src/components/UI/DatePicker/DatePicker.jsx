import css from './DatePicker.module.scss'
import cn from 'classnames'
import { DatePicker as DatePickerAntd } from 'antd'
import styled from 'styled-components'
import localeRu from 'antd/es/date-picker/locale/ru_RU'

const StyledDatePicker = styled(DatePickerAntd)`
  padding: 11px 11px;
  border-radius: 20px;

  .ant-picker-input > input {
    text-align: center;
    font-size: 20px;
    color: #001f99;
  }
`

const DatePicker = ({ className, children, label, ...props }) => (
  <div className={cn(css.datepicker, className)}>
    <div className={css.datepicker_label}>{label}</div>
    <StyledDatePicker {...props} locale={localeRu} />
  </div>
)

export default DatePicker
