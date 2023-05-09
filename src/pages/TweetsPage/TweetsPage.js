import { Link } from 'react-router-dom';
import ListOfTweets from '../../components/ListOfTweets/ListOfTweets';
import { Container } from './TweetsPage.styled';
const TweetPage = () => {
  return (
    <Container>
      <Link
        style={{
          display: 'block',

          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
        }}
        to="/"
      >
        Back
      </Link>
      <ListOfTweets />
    </Container>
  );
};

export default TweetPage;
