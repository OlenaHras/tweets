import TweetsItem from '../TweetsItem/TweetsItem';
import { Container, LoadMoreBtn } from './ListOfTwwets.styled';
const ListOfTwwets = () => {
  return (
    <>
      <Container>
        <TweetsItem />
        <TweetsItem />
        <TweetsItem />
      </Container>
      <LoadMoreBtn>Загрузить еще</LoadMoreBtn>
    </>
  );
};
export default ListOfTwwets;
