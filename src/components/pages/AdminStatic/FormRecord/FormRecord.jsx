import css from './FormRecord.module.scss'
import { DatePicker, Form } from 'antd'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import cn from 'classnames'
// Components
import Button from 'components/UI/Button'
// Store
import { staticAction, selectGetStaticRequest } from '@/store/static'
// Hooks
import { useActionState } from 'hooks'
import { useState } from 'react'

const defaultValues = {
  date: '',
}

const days = [
  { text: '1 неделя', value: 7 },
  { text: '2 недели', value: 14 },
  { text: '1 месяц', value: 30 },
]

const FormRecord = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [form] = Form.useForm()
  const [selectedDate, setSelectedDate] = useState(null)

  const [loading, error] = useSelector(selectGetStaticRequest)

  const onSubmit = useCallback(
    ({ date }) => {
      setSelectedDate(null)
      const formatDate = moment(date).format('YYYY-MM-DD')
      dispatch(staticAction(date ? formatDate : undefined))
    },
    [dispatch]
  )

  const onSubmitDays = useCallback(
    (value) => {
      const formatDate = moment().subtract(value, 'd').format('YYYY-MM-DD')
      setSelectedDate(value)
      dispatch(staticAction(formatDate))
    },
    [dispatch]
  )

  const daysRender = useMemo(
    () =>
      days.map(({ text, value }) => (
        <div
          className={cn(css.btns, value === selectedDate && css.active)}
          onClick={() => onSubmitDays(value)}
          key={value}
        >
          {text}
        </div>
      )),
    [onSubmitDays, selectedDate]
  )

  useActionEffect({
    error: error,
    loading: loading,
    messageError: <div>{error}</div>,
  })

  useEffect(() => {
    setSelectedDate(7)
  }, [])

  return (
    <Form initialValues={defaultValues} onFinish={onSubmit} form={form}>
      <div className={css.container}>
        <div className={css.wrapper}>
          {daysRender}
          <div className={css.date}>
            <Form.Item name="date" style={{ margin: 0 }}>
              <DatePicker
                label="Дата:"
                className={css.input}
                placeholder=""
                format="MM.DD.YYYY"
              />
            </Form.Item>
          </div>
        </div>
        <Button className={css.btn} type="submit">
          Обновить
        </Button>
      </div>
    </Form>
  )
}

export default FormRecord
