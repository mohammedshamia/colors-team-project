import { Link } from 'react-router-dom';
import Typography from '../../Typography';
import { LogoSt } from './LogoSt';

export default function Logo() {
  return (
    <LogoSt as={Link} to="/">
      <Typography color="#FCDD06" display="inline" fontSize="40px">
        pro
      </Typography>
      shop
    </LogoSt>
  );
}
