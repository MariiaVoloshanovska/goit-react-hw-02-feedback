// import PropTypes from 'prop-types';
// import { Title } from './Section.styled';

// export const Section = ({ title, children }) => {
//   return (
//     <>
//       <Title>{title}</Title>
//       {children}
//     </>
//   );
// };

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.element.isRequired,
// };
import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackFormTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <FeedbackSection>
      <FeedbackFormTitle>{title}</FeedbackFormTitle>
      {children}
    </FeedbackSection>
  );
}

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};