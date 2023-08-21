import css from './Modal.module.scss'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import { X } from 'react-bootstrap-icons'

const Modal = ({ children, ...props }) => (
  <Popup {...props}>
    {children}
    <div className={css.close} onClick={props.onClose}>
      <X fill="white" />
    </div>
  </Popup>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal
