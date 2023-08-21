import { useCallback, useEffect, useMemo } from 'react'
import css from './AdminSyncStands.module.scss'
import { useDispatch, useSelector } from 'react-redux'
// Components
import Title from 'components/UI/Title'
import BoardItem from './BoardItem'
import FormRecord from './FormRecord'
// Store
import {
  getBoardsAction,
  selectBoardsData,
  deleteBoardAction,
  selectBoardDeleteRequest,
} from '@/store/boards'
// Hooks
import { useActionState } from 'hooks'

const AdminSyncStands = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })

  const [loadingDelete, errorDelete] = useSelector(selectBoardDeleteRequest)
  const data = useSelector(selectBoardsData)

  const deleteHandle = useCallback(
    (name) => {
      dispatch(deleteBoardAction({ name }))
    },
    [dispatch]
  )

  const handleRefresh = useCallback(() => {
    dispatch(getBoardsAction())
  }, [dispatch])

  const items = useMemo(
    () =>
      data.map(({ name, family, model, id }) => (
        <BoardItem
          name={name}
          family={family}
          model={model}
          deleteHandler={() => deleteHandle(name)}
          key={id}
        />
      )),
    [data, deleteHandle]
  )

  useEffect(() => {
    handleRefresh()
  }, [handleRefresh])

  useActionEffect({
    error: errorDelete,
    loading: loadingDelete,
    messageError: <div>{errorDelete}</div>,
    onSuccess: handleRefresh,
  })

  return (
    <>
      <Title>Стенды</Title>
      {data.length === 0 ? (
        <div className={css.empty}>У Вас нет активных записей</div>
      ) : (
        <div className={css.items}>{items}</div>
      )}
      <FormRecord />
    </>
  )
}

export default AdminSyncStands
