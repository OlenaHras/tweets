import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsers } from '../../redux/selectors';
import TweetsItem from '../TweetsItem/TweetsItem';
import Spinner from '../Spinner/Spinner';
import {
  Container,
  LoadMoreBtn,
  NoMoreUsersMessage,
} from './ListOfTwwets.styled';
import { addUsers, clearUsers } from '../../redux/usersSlice';
axios.defaults.baseURL = 'https://6455f99b5f9a4f236137da5c.mockapi.io/api/v1';

const ListOfTweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { users } = useSelector(getUsers);
  useEffect(() => {
    dispatch(clearUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setError(false);
    setIsLoading(true);

    fetchData(page);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/users`, {
        params: {
          limit: 3,
          page,
        },
      });
      dispatch(addUsers(response.data));
    } catch (error) {
      setError('Error while loading data. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };
  return (
    <>
      {page === 1 && isLoading && <Spinner />}
      {users.length > 0 && (
        <>
          <Container>
            {users.map(user => {
              return (
                <TweetsItem
                  user={user}
                  key={user.id}
                  img={`https://i.pravatar.cc/300${user.id}`}
                />
              );
            })}
          </Container>
          {users.length % 3 === 0 ? (
            <LoadMoreBtn onClick={handleLoadMoreBtn}>
              {isLoading ? 'Loading...' : 'Load More'}
            </LoadMoreBtn>
          ) : (
            <NoMoreUsersMessage>There are no more users</NoMoreUsersMessage>
          )}
        </>
      )}
      {error && <h2>{error}</h2>}
    </>
  );
};
export default ListOfTweets;
