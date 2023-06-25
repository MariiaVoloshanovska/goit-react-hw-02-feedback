// import { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';
// import { WrapperStyled } from './App.styled';



// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({ [key]: prevState[key] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, el) => acc + el, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const percentOfGoodFeedbacks = this.countPositiveFeedbackPercentage();

//     return (
//       <WrapperStyled>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={this.state}
//           />
//         </Section>

//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               total={total}
//               positivePercentage={percentOfGoodFeedbacks}
//               data={this.state}
//             />
//           </Section>
//         )}
//       </WrapperStyled>
//     );
//   }
// }

import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { WrapperStyled } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = lable => {
    this.setState(prevState => ({
      [lable]: prevState[lable] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, number) => total + number,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const option = Object.keys(this.state);
    return (
      <WrapperStyled>
      <div className="container">
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <div>
            <h2>Statistics</h2>
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </div>
        </Section>
        </div>
      </WrapperStyled>
    );
  }
}