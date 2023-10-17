import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid #211e1e;
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  background: linear-gradient(
    to bottom right,
    rgb(0 188 212 / 87%),
    rgb(0 188 212 / 50%)
  );
  color: #ffffff;
  border-radius: 4px;
  padding: 24px 16px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media (min-width: 768px) {
    margin: 12px;
    padding: 30px 40px;
  }
`;
