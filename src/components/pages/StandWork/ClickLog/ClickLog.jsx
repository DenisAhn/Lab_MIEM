import { useDispatch, useSelector } from 'react-redux'
import css from './ClickLog.module.scss'
import { useCallback, useMemo } from 'react'
import copy from 'copy-to-clipboard'
// Store
import { selectLog, clearLog } from '@/store/stand-work'

const ClickLog = () => {
  const dispatch = useDispatch()
  const logs = useSelector(selectLog)

  const handleClear = useCallback(() => {
    dispatch(clearLog())
  }, [dispatch])

  const handleCopy = useCallback(() => {
    copy(logs.join(' '))
  }, [logs])

  const logRender = useMemo(
    () =>
      logs.map((item) => (
        <div className={css.item} key={item}>
          {item}
        </div>
      )),
    [logs]
  )

  return (
    <div className={css.wrapper}>
      <div className={css.title}>Журнал нажатий</div>
      <div className={css.items}>{logs.length !== 0 && logRender}</div>
      <div className={css.btns}>
        <div className={css.btn} onClick={handleCopy}>
          Скопировать
        </div>
        <div className={css.btn} onClick={handleClear}>
          Очистить
        </div>
      </div>
    </div>
  )
}

export default ClickLog
