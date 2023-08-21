import css from './FormRecord.module.scss'
import { Form } from 'antd'
import { useCallback } from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
// Components
import Input from 'components/UI/Input'
// Store
import { connectBoardAction, selectBoardConnectRequest } from '@/store/boards'
// Hooks
import { useActionState } from 'hooks'
// Constants
import { history } from '@/constants'

const defaultValues = {
  accessСode: '',
}

const FormRecord = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })
  const [form] = Form.useForm()

  const [loading, error] = useSelector(selectBoardConnectRequest)

  const onSubmit = useCallback(
    (values) => {
      dispatch(connectBoardAction(values))
    },
    [dispatch]
  )

  const onSuccess = useCallback(() => {
    const accessСode = form.getFieldValue('accessСode')
    history.push('/stand-work/' + accessСode)
  }, [form])

  useActionEffect({
    error: error,
    loading: loading,
    messageError: <div>{error}</div>,
    onSuccess,
  })

  return (
    <div>
      <div className={css.title}>Введите код доступа</div>
      <Form
        initialValues={defaultValues}
        onFinish={onSubmit}
        className={css.form}
        form={form}
      >
        <Form.Item name="accessСode" style={{ width: '100%' }}>
          <Input placeholder="Код доступа" className={css.input} />
        </Form.Item>
        <button type="submit" className={css.btn}>
          <ArrowRight fill="#0D40FF" width={20} height={20} />
        </button>
      </Form>
      <div className={css.text}>
        Данный код можно получить на вкладке “Бронирование”!
      </div>
    </div>
  )
}

export default FormRecord
