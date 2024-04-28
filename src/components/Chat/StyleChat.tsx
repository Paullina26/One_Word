import styled from 'styled-components';
import { Button } from 'components/Shared/Buttons/Button';
import { boxShadow_lightTheme_input } from 'style/mixins';

export const ChatWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .custom-mic {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 50%;
    margin: 0;
    margin-left: 20px;
    ${boxShadow_lightTheme_input}

    img {
      width: 25px;
      height: 20px;
    }
  }
`;

export const Messages = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const Interface = styled.form`
  width: 100%;
  display: flex;
  padding: 40px;
  max-width: 800px;
  align-items: flex-end;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  margin: 0 0 0 10px;
  padding: 12px 40px;
  border-radius: 25px;
`;
