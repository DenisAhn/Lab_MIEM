import { useCallback, useEffect, useMemo } from 'react'
import css from './SynchronousStands.module.scss'
import { useDispatch, useSelector } from 'react-redux'
// Components
import StandItem from './StandItem'
import HeaderLayout from '@/layouts/HeaderLayout'
import ReserveModal from './ReserveModal'
// Hooks
import { useToggle } from 'hooks'
// Store
import { getBoardsAction, selectBoardsData } from '@/store/boards'

const SynchronousStands = () => {
  const dispatch = useDispatch()
  const [visibleModal, handleVisibleModal] = useToggle()
  const boards = useSelector(selectBoardsData)

  const handleConnect = useCallback(() => {
    handleVisibleModal()
  }, [handleVisibleModal])

  const items = useMemo(
    () =>
      boards.map(({ name, nameBoard, family, model, id }) => (
        <StandItem
          title={name}
          name={nameBoard}
          group={family}
          model={model}
          connectHandler={handleConnect}
          key={id}
        />
      )),
    [boards, handleConnect]
  )

  useEffect(() => {
    dispatch(getBoardsAction())
  }, [dispatch])

  return (
    <HeaderLayout title="Синхронные стенды">
      <div className={css.items}>{items}</div>
      <ReserveModal open={visibleModal} onClose={handleVisibleModal} />
    </HeaderLayout>
  )
}

export default SynchronousStands
