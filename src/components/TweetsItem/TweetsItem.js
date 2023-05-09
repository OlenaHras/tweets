import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/selectors';
import { addFollows, removeFollowing } from '../../redux/usersSlice';

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

const TweetsItem = ({ user, img }) => {
  const dispatch = useDispatch();
  const { followedUsers } = useSelector(getUsers);

  const isFollowed = followedUsers.find(follower => follower.id === user.id);
  const handleButtonClick = () => {
    if (isFollowed) {
      dispatch(removeFollowing(user.id));
      return;
    }

    dispatch(addFollows(user));
  };

  const countFollowers = isFollowed ? user.followers + 1 : user.followers;
  return (
    <Card>
      <>
        <Logo src={logo} alt="logo" />
        <BackgroundImg src={backgroundImg} alt="backgroundImg" />
        <Line></Line>
        <Ellipse>
          <Avatar src={img} alt="avatar" />
        </Ellipse>
      </>
      <Info>
        <InfoTitle style={{ marginBottom: 16 }}>{user.tweets} tweets</InfoTitle>
        <InfoTitle> {countFollowers.toLocaleString()} Followers</InfoTitle>
        <Button
          style={{ backgroundColor: isFollowed && '#5CD3A8' }}
          onClick={handleButtonClick}
        >
          {isFollowed ? 'Following' : 'Follow'}
        </Button>
      </Info>
    </Card>
  );
};
export default TweetsItem;
