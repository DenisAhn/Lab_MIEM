import css from './StandWork.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
// Components
import Button from 'components/UI/Button'
import ClickLog from './ClickLog'
import StandBtns from './StandBtns'
import InstructionPopup from './InstructionPopup'
// Videos
// Store
import { connectBoardAction, selectBoardConnectRequest } from '@/store/boards'
// Hooks
import { useActionState } from 'hooks'
// Constants
import { history } from '@/constants'

const StandWork = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { useActionEffect } = useActionState({
    type: '',
  })

  const [loading, error] = useSelector(selectBoardConnectRequest)

  const exitHandle = useCallback(() => {
    history.push('/synchronousStand')
  }, [])

  useEffect(() => {
    dispatch(connectBoardAction({ accessСode: id }))
  }, [id, dispatch])

  useActionEffect({
    error: error,
    loading: loading,
    onSuccess: () => true,
    onError: () => history.push('/synchronousStand'),
  })

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.left}>{/*
          <div className={css.video}>
            <video
              controls
              poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif"
            >
              <source src={starWarsVideo} type="video/mp4" />
              Your browser doesn't support HTML5 video tag.
            </video>
          </div>*/}
          <div className={css.btns}>
            <StandBtns />
          </div>
        </div>
        <div className={css.right}>
          <div className={css.file}>
            <div className={css.file_label}>Файл прошивки:</div>
            <Button>Загрузить файл</Button>
            <div className={css.file_text}>
              Расширение файла должно быть *.sof
            </div>
          </div>
          <ClickLog />
          <InstructionPopup />
        </div>
      </div>
      <div className={css.footer}>
        <div className={css.footer_code}>Код доступа: Qw023ks0</div>
        <div className={css.footer_exit} onClick={exitHandle}>
          Выйти
        </div>
      </div>
    </>
  )
}

export default StandWork
