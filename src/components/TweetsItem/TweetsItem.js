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
import avatar from '../../assets/images/Hansel.png';
const TweetsItem = () => {
  return (
    <Card>
      <>
        <Logo src={logo} alt="logo" />
        <BackgroundImg src={backgroundImg} alt="backgroundImg" />
        <Line></Line>
        <Ellipse>
          {/* <img src={ellipse} alt="ellipse"> */}

          <Avatar src={avatar} alt="avatar" />
          {/* </img> */}
        </Ellipse>
      </>
      <Info>
        <InfoTitle style={{ marginBottom: 16 }}> 777 tweets</InfoTitle>
        <InfoTitle> 100,500 Followers</InfoTitle>
        <Button>Follow</Button>
      </Info>
    </Card>
  );
};
export default TweetsItem;
