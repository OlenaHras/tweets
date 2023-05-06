import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getUsers } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';
import TweetsItem from '../TweetsItem/TweetsItem';
import Spinner from '../Spinner/Spinner';
import { Container, LoadMoreBtn } from './ListOfTwwets.styled';

const ListOfTwwets = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers(page)).then(data => handleUsersList(data.payload));
    // console.log(usersList);
  }, [dispatch, page]);

  const handleUsersList = newList => {
    setUsersList([...usersList, ...newList]);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevstate => prevstate + 1);
    // dispatch(fetchUsers(page)).then(data => handleUsersList(data.payload));
  };

  return (
    <>
      {page === 1 && isLoading && <Spinner />}
      {usersList.length > 0 && (
        <>
          <Container>
            {usersList.map(user => {
              return <TweetsItem user={user} key={user.id} />;
            })}
          </Container>
          <LoadMoreBtn onClick={handleLoadMoreBtn}>
            {isLoading ? 'Loading...' : 'Load More'}
          </LoadMoreBtn>
        </>
      )}
      {/* {isLoading && <Spinner />} */}
      {error && <h2>{error}</h2>}
    </>
  );
};
export default ListOfTwwets;
