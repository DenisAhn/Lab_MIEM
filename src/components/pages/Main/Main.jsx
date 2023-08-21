import css from './Main.module.scss'
// Images
import boardImg from 'images/board.png'
import userImg from '@/assets/icons/user.png'

const Main = () => (
  <div>
    <div className={css.title}>
      Удаленная лаборатория
      <br />
      учебной лаборатории систем автоматизированного проектирования
    </div>
    <div className={css.service}>
      <div className={css.service_text}>
        <span>
          Данный сервис позволяет
          <br /> получить доступ к:
          <br />
        </span>
        Синхронному оборудованию
        <br />
        Асинхронному оборудованию
      </div>
      <img alt="img" src={boardImg} />
    </div>
    <div className={css.title}>Контакты</div>
    <div className={css.contacts}>
      <div className={css.contacts_col}>
        <div className={css.contacts_text}>
          Американов Александр Александрович,
          <br />
          Старший преподаватель, Стажер-исследователь
          <br />
          МИЭИ НИУ ВШЭ им. А.Н. Тихонова
          <br />
          <a
            href="https://www.hse.ru/staff/a.amerikanov"
            target="_blank"
            rel="noreferrer"
          >
            https://www.hse.ru/staff/a.amerikanov
          </a>
        </div>
        <div className={css.contacts_text}>
          Падалица Кирилл,
          <br />
          Студент МИЭМ НИУ ВШЭ
          <br />
          Email: kpadalitsa@gmail.com
          <br />
          Tg: @KNPNVV
        </div>
      </div>
      <img alt="img" src={userImg} />
    </div>
    <a
      href="https://miem.hse.ru/edu/ce/cadsystem/"
      target="_blank"
      rel="noreferrer"
      className={css.link}
    >
      Сайт учебной лаборатории
    </a>
  </div>
)

export default Main
