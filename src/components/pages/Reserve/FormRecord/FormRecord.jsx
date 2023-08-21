import css from './FormRecord.module.scss'
import { Form } from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// Components
import Title from 'components/UI/Title'
import Button from 'components/UI/Button'
import Select from 'components/UI/Select'
import DatePicker from 'components/UI/DatePicker'
import TimeItem from './TimeItem'
// Store
import {
  createBookingAction,
  selectBookingCreateRequest,
  getBookingsAction,
} from '@/store/booking'
import { getBoardsAction, selectBoardsData } from '@/store/boards'
import {
  getAvailableIntervalsAction,
  selectAvailableIntervals,
} from '@/store/other-data'
// Utils
import { fromEntriesToSelectOption } from 'utils/transform-data'
import { delay } from 'utils/other'
// Hooks
import { useActionState } from 'hooks'

const defaultValues = {
  boardName: '',
  date: '',
}

const FormRecord = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [selectedTime, setSelectedTime] = useState()
  const [isChangedValues, setIsChangedValues] = useState(false)
  const [form] = Form.useForm()
  const boardName = Form.useWatch('boardName', form)
  const date = Form.useWatch('date', form)

  const boards = useSelector(selectBoardsData)
  const availableIntervals = useSelector(selectAvailableIntervals)
  const [loading, error] = useSelector(selectBookingCreateRequest)

  const onSubmit = useCallback(
    (values) => {
      dispatch(
        createBookingAction({
          ...values,
          date: moment(values.date).format('YYYY-MM-DD'),
          interval: selectedTime,
        })
      )
    },
    [dispatch, selectedTime]
  )

  const handleRefresh = useCallback(async () => {
    await delay(1000)
    form.resetFields()
    setSelectedTime(null)
    dispatch(getBookingsAction())
  }, [dispatch, form])

  const standOptions = useMemo(
    () =>
      boards &&
      boards.map(({ name }) => fromEntriesToSelectOption()([name, name])),
    [boards]
  )

  const timesRender = useMemo(
    () =>
      availableIntervals.map(({ label, value, disabled }) => (
        <TimeItem
          label={label}
          key={value}
          disabled={disabled}
          onClick={() => setSelectedTime(value)}
          active={value === selectedTime}
        />
      )),
    [selectedTime, availableIntervals]
  )

  useEffect(() => {
    dispatch(getBoardsAction())
  }, [dispatch])

  useEffect(() => {
    if (boardName && date) {
      setIsChangedValues(true)
      setSelectedTime(null)
      dispatch(
        getAvailableIntervalsAction({
          board: boardName,
          date: moment(date).format('YYYY-MM-DD'),
        })
      )
    } else {
      setIsChangedValues(false)
    }
  }, [boardName, date, dispatch])

  useActionEffect({
    error: error,
    loading: loading,
    messageError: <div>{error}</div>,
    onSuccess: handleRefresh,
  })

  return (
    <div>
      <Title>Забронировать</Title>
      <Form initialValues={defaultValues} onFinish={onSubmit} form={form}>
        <div className={css.wrapper}>
          <div className={css.form}>
            <Form.Item name="boardName">
              <Select label="Стенд:" className={css.input}>
                {standOptions}
              </Select>
            </Form.Item>
            <Form.Item name="date">
              <DatePicker
                label="Дата:"
                className={css.input}
                placeholder=""
                disabledDate={(current) =>
                  current.isBefore(moment().subtract(1, 'day'))
                }
                format="MM.DD.YYYY"
              />
            </Form.Item>
            {isChangedValues && (
              <>
                <div className={css.input}>
                  <div className={css.label}>Время:</div>
                  <div className={css.times}>{timesRender}</div>
                </div>
                <Button type="submit" className={css.btn}>
                  Забронировать
                </Button>
              </>
            )}
          </div>
          {isChangedValues && (
            <div className={css.info}>
              Внимание!
              <br />
              Не может быть более 3 активных бронирований!
            </div>
          )}
        </div>
      </Form>
    </div>
  )
}

export default FormRecord
