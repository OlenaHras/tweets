import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../redux/operations';
import { followUser, unfollowUser } from '../../redux/operations';
import { useEffect, useState, useCallback } from 'react';
// import { addFollower, deleteFollower } from '../../redux/usersSlice';
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
import { getUsers } from '../../redux/selectors';
import { addFollows, removeFollowing } from '../../redux/usersSlice';
// let btnId;
const TweetsItem = ({ user, img }) => {
  // const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();
  const { followedUsers } = useSelector(getUsers);

  const isFollowed = followedUsers.find(follower => follower.id === user.id);
  // console.log(isFollowed);
  const handleButtonClick = () => {
    if (isFollowed) {
      console.log('followed');
      dispatch(removeFollowing(user.id));
      return;
    }
    dispatch(addFollows(user));
    // localStorage.setItem('followed', JSON.stringify([...e.target.id]));
    // if (user.followed) {
    //   // setIsFollowed(false);
    //   dispatch(
    //     unfollowUser({
    //       id: e.target.id,
    //       followers: user.followers - 1,
    //       followed: false,
    //     })
    //   );
    //   return;
    // }
    // // setIsFollowed(true);
    // dispatch(
    //   followUser({
    //     id: e.target.id,
    //     followers: user.followers + 1,
    //     followed: true,
    //   })
    // );
    // console.log(user.followed);
  };

  // useEffect(() => {
  //   //   if (isFollowed) {
  //   //     console.log('isfolowed');
  //   //     dispatch(deleteFollower(btnId));
  //   //   } else {
  //   console.log('notfolowed');
  //   //     dispatch(addFollower(btnId));
  //   //   }
  // }, [handleButtonClick]);
  // const activeBtn=
  return (
    <Card>
      <>
        <Logo src={logo} alt="logo" />
        <BackgroundImg src={backgroundImg} alt="backgroundImg" />
        <Line></Line>
        <Ellipse>
          {/* <img src={ellipse} alt="ellipse"> */}

          <Avatar src={img} alt="avatar" />
          {/* </img> */}
        </Ellipse>
      </>
      <Info>
        <InfoTitle style={{ marginBottom: 16 }}>{user.tweets} tweets</InfoTitle>
        <InfoTitle> {user.followers.toLocaleString()} Followers</InfoTitle>
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
