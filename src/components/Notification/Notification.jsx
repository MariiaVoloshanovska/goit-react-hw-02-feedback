// import PropTypes from 'prop-types';
// import { Message } from './Notification.styled';

// export const Notification = ({ message }) => {
//   return <Message>{message}</Message>;
// };

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};