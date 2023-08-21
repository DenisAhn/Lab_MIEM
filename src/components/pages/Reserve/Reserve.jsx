import { useCallback, useEffect, useMemo } from 'react'
import css from './Reserve.module.scss'
import { useDispatch, useSelector } from 'react-redux'
// Components
import HeaderLayout from '@/layouts/HeaderLayout'
import Title from 'components/UI/Title'
import ReserveItem from './ReserveItem'
import FormRecord from './FormRecord'
// Store
import {
  getBookingsAction,
  selectBookingData,
  deleteBookingAction,
  selectBookingDeleteRequest,
} from '@/store/booking'
// Hooks
import { useActionState } from 'hooks'

const Reserve = () => {
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })

  const [loadingDelete, errorDelete] = useSelector(selectBookingDeleteRequest)
  const data = useSelector(selectBookingData)

  const handleRemoveItem = useCallback(
    (accessСode) => {
      dispatch(deleteBookingAction({ accessСode }))
    },
    [dispatch]
  )

  const handleRefresh = useCallback(() => {
    dispatch(getBookingsAction())
  }, [dispatch])

  const renderItems = useMemo(
    () =>
      data.map(({ name, accessСode, bookingDate, interval }) => (
        <ReserveItem
          name={name}
          key={accessСode}
          code={accessСode}
          date={`${bookingDate} ${interval}`}
          handleRemove={() => handleRemoveItem(accessСode)}
        />
      )),
    [data, handleRemoveItem]
  )

  useActionEffect({
    error: errorDelete,
    loading: loadingDelete,
    messageError: <div>{errorDelete}</div>,
    onSuccess: handleRefresh,
  })

  useEffect(() => {
    handleRefresh()
  }, [handleRefresh])

  return (
    <HeaderLayout title="Бронирование">
      <Title>Ваши бронирования</Title>
      {data.length === 0 ? (
        <div className={css.empty}>У Вас нет активных записей</div>
      ) : (
        <div className={css.items}>{renderItems}</div>
      )}
      <FormRecord />
    </HeaderLayout>
  )
}

export default Reserve
