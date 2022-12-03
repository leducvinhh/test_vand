import PropTypes from 'prop-types';
import './styled/GlobalStyles.scss';

const GlobalStyles = ({ children }) => {
  return children;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
