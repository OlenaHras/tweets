import styled from '@emotion/styled';

export const Container = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 31%); */
  /* grid-template-columns: fit-content(60%); */
  /* justify-content: space-between; */
  /* justify-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 50px;
  gap: 50px;
  row-gap: 45px; */
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  gap: 50px;
`;

export const LoadMoreBtn = styled.button`
  position: fixed;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  left: 50%;
  margin-left: -98px;
  /* right: 25%; */
  padding: 0;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #766a90;
    color: #ebd8ff;
  }
`;
