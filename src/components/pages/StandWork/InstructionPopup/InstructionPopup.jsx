import { useDispatch, useSelector } from 'react-redux'
import css from './InstructionPopup.module.scss'
import { useEffect } from 'react'
// Components
import Button from 'components/UI/Button'
import Modal from 'components/UI/Modal'
// Hooks
import { useToggle } from 'hooks'
// Store
import { selectManualText, getManualTextAction } from '@/store/other-data'

const InstructionPopup = () => {
  const dispatch = useDispatch()
  const [visibleModal, handleVisibleModal] = useToggle()
  const data = useSelector(selectManualText)

  useEffect(() => {
    if (visibleModal) {
      dispatch(getManualTextAction())
    }
  }, [dispatch, visibleModal])

  return (
    <>
      <Button className={css.btn} onClick={handleVisibleModal}>
        Информация по использованию
      </Button>
      <Modal
        open={visibleModal}
        onClose={() => handleVisibleModal(false)}
        contentStyle={{ width: '600px' }}
      >
        <div>
          <div className={css.title}>Инструкция</div>
          <div
            dangerouslySetInnerHTML={{ __html: data }}
            className="render-text light"
          />
        </div>
      </Modal>
    </>
  )
}

export default InstructionPopup
