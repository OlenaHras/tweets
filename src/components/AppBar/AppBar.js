import { Header } from './AppBar.styled';
import logo from '../../assets/images/Logo.png';
const AppBar = () => {
  return (
    <Header>
      <img src={logo} alt="logo" />
    </Header>
  );
};

export default AppBar;
