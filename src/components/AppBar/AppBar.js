import { NavLink } from 'react-router-dom';

import { Header } from './AppBar.styled';
import logo from '../../assets/images/Logo.png';
const AppBar = () => {
  return (
    <Header>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? '#00CED1' : '#fff',
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/tweets"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? '#00CED1' : '#fff',
          };
        }}
      >
        Tweets
      </NavLink>
    </Header>
  );
};

export default AppBar;
