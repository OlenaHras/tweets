import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  margin: 20px;
`;

export const BackgroundImg = styled.img`
  position: relative;
  top: -40px;
  padding: 0 36px;
`;

export const Line = styled.div`
  position: relative;
  top: -23px;
  height: 8px;
  width: 380px;
  left: 0px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3;
`;
export const Ellipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -70px;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -41px;
  position: relative;
`;
export const InfoTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  margin-top: 26px;
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
