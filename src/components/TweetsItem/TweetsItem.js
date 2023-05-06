// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../redux/operations';
// import { useEffect } from 'react';
import {
  Card,
  BackgroundImg,
  Button,
  Line,
  Logo,
  Ellipse,
  Avatar,
  Info,
  InfoTitle,
} from './TweetsItem.styled';
import logo from '../../assets/images/Logo.png';
import backgroundImg from '../../assets/images/picture.png';
// import ellipse from '../../assets/images/Ellipse.png';
// import avatar from '../../assets/images/Hansel.png';
// import { getUsers } from '../../redux/selectors';

const TweetsItem = ({ user }) => {
  // const dispatch = useDispatch();
  // const { users, isLoading, error } = useSelector(getUsers);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  //   console.log(users);
  // }, [dispatch]);
  // console.log(user);
  return (
    <Card>
      <>
        <Logo src={logo} alt="logo" />
        <BackgroundImg src={backgroundImg} alt="backgroundImg" />
        <Line></Line>
        <Ellipse>
          {/* <img src={ellipse} alt="ellipse"> */}

          <Avatar src={user.avatar} alt="avatar" />
          {/* </img> */}
        </Ellipse>
      </>
      <Info>
        <InfoTitle style={{ marginBottom: 16 }}>
          {' '}
          {user.tweets} tweets
        </InfoTitle>
        <InfoTitle> {user.followers} Followers</InfoTitle>
        <Button>Follow</Button>
      </Info>
    </Card>
  );
};
export default TweetsItem;
