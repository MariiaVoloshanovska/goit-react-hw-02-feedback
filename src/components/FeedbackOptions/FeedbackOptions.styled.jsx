// import styled, { keyframes } from 'styled-components';

// const buttonAnimation = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   gap: 40px;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// export const Button = styled.button`
//   width: 60px;
//   height: 40px;
//   cursor: pointer;
//   border-radius: 6px;
//   background-color: #BC8F8F; /* Change background color to a woman-themed color */
//   border-color: transparent;
//   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
//     rgba(0, 0, 0, 0.22) 0px 10px 10px;
//   &:hover {
//     background-color: #D8BFD8;
//     border-color: #0000ff;
//     box-shadow: none;
//     animation: ${buttonAnimation} 0.5s ease-in-out infinite; /* Add animation to the button */
//   }
// `;

import styled from 'styled-components';

export const FeedbackFormButton = styled.button`
  padding: 8px 15px;
  font-size: 15px;
  outline: none;
  border: none;
  color: ${props => props.color};

  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 1px 2px 1px #000;
  transition: 0.5s;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    transform: scale(1.1);
    color: #000;
    box-shadow: 0 1px 4px 2px ${props => props.color};
  }
`;