import css from './AdminSupport.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
// Components
import  Editor from 'components/UI/Editor'
import Button from 'components/UI/Button'
import Title from 'components/UI/Title'
// Store
import {
  selectSaveSupportTextRequest,
  selectSupportText,
  getSupportTextAction,
  saveSupportTextAction,
} from '@/store/other-data'
// Hooks
import { useActionState } from 'hooks'

const AdminSupport = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [value, setValue] = useState('')

  const data = useSelector(selectSupportText)
  const [loading, error] = useSelector(selectSaveSupportTextRequest)

  const onSubmit = useCallback(() => {
    dispatch(saveSupportTextAction({ text: value }))
  }, [dispatch, value])

  useEffect(() => {
    dispatch(getSupportTextAction())
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
      <Title className={css.title}>Техподдержка</Title>
      <Form onFinish={onSubmit}>
        <Editor onChange={setValue} value={value} />
        <Button type="submit" className={css.btn}>
          Сохранить
        </Button>
      </Form>
    </>
  )
}

export default AdminSupport
