import css from './AdminStatic.module.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
// Components
import Title from 'components/UI/Title'
import FormRecord from './FormRecord'
import ChartStatic from './ChartStatic'
import Info from './Info'
// Store
import { staticAction } from '@/store/static'

const AdminStatic = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const formatDate = moment().subtract(7, 'd').format('YYYY-MM-DD')
    dispatch(staticAction(formatDate))
  }, [dispatch])

  return (
    <>
      <Title className={css.title}>Статистика</Title>
      <FormRecord />
      <ChartStatic />
      <Info />
    </>
  )
}

export default AdminStatic
