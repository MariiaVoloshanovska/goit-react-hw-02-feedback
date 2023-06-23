import styled from '@emotion/styled';

const FeedbackBtnStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const FeedbackBtnTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: #F08080;
`;

const FeedbackBtn = styled.button`
  width: 130px;
  height: 40px;
  margin-right: 12px;
  border-radius: 4px;
  background-color: #FAF0E6;
  border: none;
  transition: box-shadow 1s cubic-bezier(0.19, 1, 0.22, 1),
    color 1s cubic-bezier(0.19, 1, 0.22, 1),
    background-color 2s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: #ff4081;
    color: white;
    cursor: pointer;
    box-shadow: 1px 1px 1px #800000;
    border-radius: 4px;
    animation: pulse 1s infinite; /* Add animation */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export { FeedbackBtnTitle, FeedbackBtn, FeedbackBtnStyle };
