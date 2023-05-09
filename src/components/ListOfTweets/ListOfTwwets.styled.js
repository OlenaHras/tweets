import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  gap: 100px;
  margin-bottom: 50px;
`;

export const LoadMoreBtn = styled.button`
  position: absolute;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  left: 50%;
  margin-left: -98px;
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

export const NoMoreUsersMessage = styled.h3`
  color: #766a90;
  text-align: center;
`;
