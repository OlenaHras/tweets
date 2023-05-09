import backgroundVideo from '../../assets/video/Background.mp4';
import { VideoWrapper, Video } from './HomePage.styled';
export const HomePage = () => {
  return (
    <VideoWrapper>
      <Video src={backgroundVideo} autoPlay loop muted />
    </VideoWrapper>
  );
};
