// import PropTypes from 'prop-types';
// import {
//   PositiveFeedback,
//   StatsList,
//   StatsListItem,
//   Total,
// } from './Statistics.styled';

// export const Statistics = ({ total, positivePercentage, data }) => {
//   return (
//     <>
//       <StatsList>
//         {Object.entries(data).map(([key, value]) => {
//           return (
//             <StatsListItem key={crypto.randomUUID()}>
//               {key}: {value}
//             </StatsListItem>
//           );
//         })}
//       </StatsList>
//       <Total>Total: {total}</Total>
//       <PositiveFeedback>
//         Positive Feedbacks: {positivePercentage}%
//       </PositiveFeedback>
//     </>
//   );
// };

// Statistics.propTypes = {
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
//   data: PropTypes.object.isRequired,
// };

import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export default function FeedbackOptions({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedback:
        {positivePercentage}%
      </li>
    </StatisticsList>
  );
}

FeedbackOptions.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};