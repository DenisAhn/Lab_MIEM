import css from './FormRecord.module.scss'
import { Form } from 'antd'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import Title from 'components/UI/Title'
import Input from 'components/UI/Input'
import Button from 'components/UI/Button'
// Store
import {
  createBoardAction,
  selectBoardCreateRequest,
  getBoardsAction,
} from '@/store/boards'
// Utils
import { delay } from 'utils/other'
// Hooks
import { useActionState } from 'hooks'

const defaultValues = {
  name: '',
  nameBoard: '',
  family: '',
  model: '',
  linkApi: '',
}

const FormRecord = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [form] = Form.useForm()

  const [loading, error] = useSelector(selectBoardCreateRequest)

  const onSubmit = useCallback(
    (values) => {
      dispatch(createBoardAction(values))
    },
    [dispatch]
  )

  const handleRefresh = useCallback(async () => {
    await delay(1000)
    form.resetFields()
    dispatch(getBoardsAction())
  }, [dispatch, form])

  useActionEffect({
    error: error,
    loading: loading,
    messageError: <div>{error}</div>,
    onSuccess: handleRefresh,
  })

  return (
    <>
      <Title>Новый стенд</Title>
      <Form initialValues={defaultValues} onFinish={onSubmit} form={form}>
        <div className={css.form}>
          <Form.Item name="name">
            <div className={css.input}>
              <div className={css.input_label}>Название стенда:</div>
              <Input className={css.input} />
            </div>
          </Form.Item>
          <Form.Item name="nameBoard">
            <div className={css.input}>
              <div className={css.input_label}>Название платы:</div>
              <Input className={css.input} />
            </div>
          </Form.Item>
          <Form.Item name="family">
            <div className={css.input}>
              <div className={css.input_label}>Семейство:</div>
              <Input className={css.input} />
            </div>
          </Form.Item>
          <Form.Item name="model">
            <div className={css.input}>
              <div className={css.input_label}>Модель:</div>
              <Input className={css.input} />
            </div>
          </Form.Item>
          <Form.Item name="linkApi">
            <div className={css.input}>
              <div className={css.input_label}>Ссылка на WS:</div>
              <Input className={css.input} />
            </div>
          </Form.Item>
          <Button type="submit" className={css.btn}>
            Добавить
          </Button>
        </div>
      </Form>
    </>
  )
}

export default FormRecord
