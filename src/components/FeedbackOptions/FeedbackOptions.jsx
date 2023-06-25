// import PropTypes from 'prop-types';
// import { Button, ButtonWrapper } from './FeedbackOptions.styled';

// export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
//   return (
//     <ButtonWrapper>
//       {Object.keys(options).map(btn => {
//         return (
//           <Button
//             key={btn}
//             type="button"
//             onClick={() => {
//               onLeaveFeedback(btn);
//             }}
//           >
//             {btn}
//           </Button>
//         );
//       })}
//     </ButtonWrapper>
//   );
// };

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   options: PropTypes.object.isRequired,
// };

import PropTypes from 'prop-types';
import { getColorLable } from './helpers';
import { FeedbackFormButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <FeedbackFormButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          color={getColorLable(option)}
        >
          {option}
        </FeedbackFormButton>
      ))}
    </div>
  );
}

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};