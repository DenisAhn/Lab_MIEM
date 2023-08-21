import css from './AdminInfo.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
// Components
import Editor from 'components/UI/Editor'
import Button from 'components/UI/Button'
import Title from  'components/UI/Title'
// Store
import {
  getGeneralInfoTextAction,
  saveGeneralInfoTextAction,
  selectGeneralInfoText,
  selectSaveGeneralInfoTextRequest,
} from '@/store/other-data'
// Hooks
import { useActionState } from 'hooks'

const AdminInfo = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [value, setValue] = useState('')

  const data = useSelector(selectGeneralInfoText)
  const [loading, error] = useSelector(selectSaveGeneralInfoTextRequest)

  const onSubmit = useCallback(() => {
    dispatch(saveGeneralInfoTextAction({ text: value }))
  }, [dispatch, value])

  useEffect(() => {
    dispatch(getGeneralInfoTextAction())
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
      <Title className={css.title}>Общая информация</Title>
      <Form onFinish={onSubmit}>
        <Editor onChange={setValue} value={value} />
        <Button type="submit" className={css.btn}>
          Сохранить
        </Button>
      </Form>
    </>
  )
}

export default AdminInfo
