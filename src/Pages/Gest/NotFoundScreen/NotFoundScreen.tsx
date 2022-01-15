import { Link } from 'react-router-dom'
import { InnerSection } from '../../../Components/Row'

function NotFoundScreen() {
  return (
    <InnerSection>
      <h1 >
        Page Not Found 👀👀
      </h1>

      <Link to={'/'} style={{ color: '#fcdd06', marginTop: 120 }}>
        Home Page (☞ﾟヮﾟ)☞
      </Link>
    </InnerSection>
  )
}

export default NotFoundScreen
