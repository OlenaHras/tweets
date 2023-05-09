import { Link } from 'react-router-dom';
import ListOfTweets from '../../components/ListOfTweets/ListOfTweets';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Container } from './TweetsPage.styled';
const TweetPage = () => {
  return (
    <Container>
      <Link
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
        }}
        to="/"
      >
        <MdOutlineArrowBackIosNew /> Back
      </Link>
      <ListOfTweets />
    </Container>
  );
};

export default TweetPage;
