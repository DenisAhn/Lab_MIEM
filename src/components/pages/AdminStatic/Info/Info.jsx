import css from './Info.module.scss'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
// Store
import { selectIntervals, selectGeneral } from '@/store/static'

const Info = () => {
  const intervals = useSelector(selectIntervals)
  const general = useSelector(selectGeneral)

  const renderIntervals = useMemo(
    () =>
      intervals.map(({ interval, count }) => (
        <div className={css.interval} key={interval}>
          <span>{interval}</span>
          <span>{count}</span>
        </div>
      )),
    [intervals]
  )

  return (
    <div className={css.wrapper}>
      <div className={css.intervals}>
        <div className={css.intervals_title}>Бронирование по интервалам</div>
        <div className={css.intervals_data}>{renderIntervals}</div>
      </div>
      <div className={css.col}>
        <div className={css.all}>
          <div className={css.all_title}>Всего бронирований</div>
          <div className={css.all_num}>{general}</div>
        </div>
        <div className={css.all}>
          <div className={css.all_title}>Ошибок при работе с платой</div>
          <div className={css.all_num}>0</div>
        </div>
      </div>
    </div>
  )
}

export default Info
