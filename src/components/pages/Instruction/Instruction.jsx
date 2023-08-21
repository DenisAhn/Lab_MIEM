// import css from './Instruction.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import HeaderLayout from '@/layouts/HeaderLayout'
// Store
import { selectManualText, getManualTextAction } from '@/store/other-data'

const Instruction = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectManualText)

  useEffect(() => {
    dispatch(getManualTextAction())
  }, [dispatch])

  return (
    <HeaderLayout title="Инструкция">
      <div dangerouslySetInnerHTML={{ __html: data }} className="render-text" />
    </HeaderLayout>
  )
}

export default Instruction
