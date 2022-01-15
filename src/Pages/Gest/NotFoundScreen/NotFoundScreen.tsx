import { Link } from 'react-router-dom'
import { InnerSection } from '../../../Components/Row'
import Typography from '../../../Components/Typography'

function NotFoundScreen() {
  return (
    <InnerSection>
      <Typography variant='h3'>
        Page Not Found 👀👀
      </Typography>

      <Link to={'/'} style={{ color: '#fcdd06', marginTop: 120 }}>
        Home Page (☞ﾟヮﾟ)☞
      </Link>
    </InnerSection>
  )
}

export default NotFoundScreen
