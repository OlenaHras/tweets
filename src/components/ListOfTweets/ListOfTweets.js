// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getUsers } from '../../redux/selectors';
// import { fetchUsers } from '../../redux/operations';
// import TweetsItem from '../TweetsItem/TweetsItem';
// import Spinner from '../Spinner/Spinner';
// import { Container, LoadMoreBtn } from './ListOfTwwets.styled';

// const ListOfTweets = () => {
//   const dispatch = useDispatch();
//   const { users, isLoading, error } = useSelector(getUsers);
//   const [usersList, setUsersList] = useState([]);
//   const [page, setPage] = useState(1);

//   // useEffect(() => {
//   //   dispatch(fetchUsers(page));
//   //   setPage(prevState => prevState + 1);
//   // }, []);
//   useEffect(() => {
//     dispatch(fetchUsers(page)).then(data => handleUsersList(data.payload));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     console.log(users);
//   }, [dispatch, page]);

//   const handleUsersList = newList => {
//     setUsersList([...usersList, ...newList]);
//   };

//   const handleLoadMoreBtn = () => {
//     setPage(prevState => prevState + 1);
//   };

//   return (
//     <>
//       {page === 1 && isLoading && <Spinner />}
//       {usersList && (
//         <>
//           <Container>
//             {usersList.map(user => {
//               return <TweetsItem user={user} key={user.id} />;
//             })}
//           </Container>
//           <LoadMoreBtn onClick={handleLoadMoreBtn}>
//             {isLoading ? 'Loading...' : 'Load More'}
//           </LoadMoreBtn>
//         </>
//       )}
//       {/* {isLoading && <Spinner />} */}
//       {error && <h2>{error}</h2>}
//     </>
//   );
// };
// export default ListOfTweets;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsers } from '../../redux/selectors';
import TweetsItem from '../TweetsItem/TweetsItem';
import Spinner from '../Spinner/Spinner';
import { Container, LoadMoreBtn } from './ListOfTwwets.styled';
import { addUsers } from '../../redux/usersSlice';
axios.defaults.baseURL = 'https://6455f99b5f9a4f236137da5c.mockapi.io/api/v1';

const ListOfTweets = () => {
  // const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { users } = useSelector(getUsers);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    fetchData(page);
    setIsLoading(false);
    // dispatch(addUsers(usersList));
    // localStorage.setItem('users', JSON.stringify(usersList));
  }, [page]);

  // useEffect(() => {
  // localStorage.setItem('users', JSON.stringify(usersList));
  // dispatch(addUsers(usersList));
  // }, [usersList]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/users`, {
        params: {
          limit: 3,
          page,
        },
      });

      // setUsersList(response.data);
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
export default ListOfTweets;
