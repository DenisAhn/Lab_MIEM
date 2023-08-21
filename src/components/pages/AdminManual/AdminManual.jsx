import css from './AdminManual.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
// Components
import Editor from 'components/UI/Editor'
import Button from 'components/UI/Button'
import Title from "components/UI/Title";

// Store
import {
  selectManualText,
  selectSaveManualTextRequest,
  getManualTextAction,
  saveManualTextAction,
} from '@/store/other-data'
// Hooks
import { useActionState } from 'hooks'

const AdminManual = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [value, setValue] = useState('')

  const data = useSelector(selectManualText)
  const [loading, error] = useSelector(selectSaveManualTextRequest)

  const onSubmit = useCallback(() => {
    dispatch(saveManualTextAction({ text: value }))
  }, [dispatch, value])

  useEffect(() => {
    dispatch(getManualTextAction())
  }, [dispatch])

  useEffect(() => {
    setValue(data)
  }, [data])

  useActionEffect({
    error: error,
    loading: loading,
    messageError: <div>{error}</div>,
    messageSuccess: <>Текст сохранен!</>,
  })

  return (
    <>
      <Title className={css.title}>Инструкция</Title>
      <Form onFinish={onSubmit}>
        <Editor onChange={setValue} value={value} />
        <Button type="submit" className={css.btn}>
          Сохранить
        </Button>
      </Form>
    </>
  )
}

export default AdminManual
