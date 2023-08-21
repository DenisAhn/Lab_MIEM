import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import css from './AnimationLayout.module.scss'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.3,
}

const AnimationLayout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      className={css.wrapper}
    >
      {children}
    </motion.div>
  )
}
export default AnimationLayout
