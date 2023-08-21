import css from './StandBtns.module.scss'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
// Components
import Switch from 'components/UI/Switch'
// Images
import btnImg from 'images/btn.png'
// Store
import { changeLog } from '@/store/stand-work'

const btns = [
  { id: 1, active: false, label: 'SW10' },
  { id: 2, active: false, label: 'SW9' },
  { id: 3, active: false, label: 'SW8' },
  { id: 4, active: false, label: 'SW7' },
  { id: 5, active: false, label: 'SW6' },
  { id: 6, active: false, label: 'SW5' },
  { id: 7, active: true, label: 'SW4' },
  { id: 8, active: false, label: 'SW3' },
  { id: 9, active: false, label: 'SW2' },
  { id: 10, active: false, label: 'SW1' },
]

const StandBtns = () => {
  const dispatch = useDispatch()
  const [btnsState, setBtnsState] = useState(btns)

  const handleBtn = useCallback(
    (id) => {
      const findedBtn = btnsState.find((item) => item.id === id)
      let activeBtn
      const result = btnsState.map((item) => {
        if (item.id === id) {
          item.active = !item.active
          activeBtn = !item.active
        }

        return item
      })

      const text = `${findedBtn.label} был переведен в ${activeBtn ? '1' : '0'}`

      setBtnsState(result)
      dispatch(changeLog(text))
    },
    [btnsState, dispatch]
  )

  const handleBtn2 = useCallback(() => {
    dispatch(changeLog('Button 1 был нажат'))
  }, [dispatch])

  const btnsRender = useMemo(
    () =>
      btnsState.map(({ label, id, active }) => (
        <Switch
          label={label}
          key={id}
          active={active}
          onClick={() => handleBtn(id)}
        />
      )),
    [btnsState, handleBtn]
  )

  return (
    <div className={css.btns}>
      {btnsRender}
      <div className={css.btn} onClick={handleBtn2}>
        <img src={btnImg} alt="btn" />
        <div className={css.btn_label}>Button 1</div>
      </div>
    </div>
  )
}

export default StandBtns
