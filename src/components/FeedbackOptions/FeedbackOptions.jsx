import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackBtn,
  FeedbackBtnStyle,
  FeedbackBtnTitle,
} from './feedbackBtns.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <FeedbackBtnTitle>Please leave feedback</FeedbackBtnTitle>
        <FeedbackBtnStyle>
          <FeedbackBtn name="good" onClick={onLeaveFeedback}>
            Good
          </FeedbackBtn>
          <FeedbackBtn name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </FeedbackBtn>
          <FeedbackBtn name="bad" onClick={onLeaveFeedback}>
            Bad
          </FeedbackBtn>
        </FeedbackBtnStyle>
      </>
    );
  }
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
// };