// import css from './Info.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import HeaderLayout from '@/layouts/HeaderLayout'
// Store
import {
  getGeneralInfoTextAction,
  selectGeneralInfoText,
} from '@/store/other-data'

const Info = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectGeneralInfoText)

  useEffect(() => {
    dispatch(getGeneralInfoTextAction())
  }, [dispatch])

  return (
    <HeaderLayout title="Общая информация">
      <div dangerouslySetInnerHTML={{ __html: data }} className="render-text" />
    </HeaderLayout>
  )
}

export default Info
