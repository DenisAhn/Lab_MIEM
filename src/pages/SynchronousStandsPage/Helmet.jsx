import { Helmet } from 'react-helmet'

const title = 'Синхронные стенды'

const CustomHelmet = () => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" content={title} />
  </Helmet>
)

export default CustomHelmet
