import css from './ReserveModal.module.scss'
// Components
import Modal from 'components/UI/Modal'
import FormRecord from '../FormRecord'

const ReserveModal = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={() => onClose(false)}
    contentStyle={{ width: 'auto' }}
  >
    <div className={css.modal}>
      <FormRecord />
    </div>
  </Modal>
)

export default ReserveModal
