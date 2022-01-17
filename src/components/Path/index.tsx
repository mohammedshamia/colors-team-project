import { PathLink, PathName, PathWrapper } from './styles';
// import { useNavigate } from "react-router-dom";

const Path = ({ name, ...props }) => {
  const navigate = id => 0;
  // navigate = useNavigate();
  return (
    <PathWrapper {...props}>
      <PathLink onClick={() => navigate(-1)}>Back /</PathLink>
      <PathName> {name}</PathName>
    </PathWrapper>
  );
};

export default Path;
