import { useEffect, useRef } from 'react'

/**
 * Хук, который запускается только при обновлении зависимостей
 */
const useUpdateEffect = (effect, deps) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- зависимости приходят извне
  }, deps)
}

export default useUpdateEffect
