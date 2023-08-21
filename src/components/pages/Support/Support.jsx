// import css from './Support.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import HeaderLayout from '@/layouts/HeaderLayout'
// Store
import { selectSupportText, getSupportTextAction } from '@/store/other-data'

const Support = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectSupportText)

  useEffect(() => {
    dispatch(getSupportTextAction())
  }, [dispatch])

  return (
    <HeaderLayout title="Техподдержка">
      <div dangerouslySetInnerHTML={{ __html: data }} className="render-text" />
    </HeaderLayout>
  )
}

export default Support
