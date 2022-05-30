import PropTypes from 'prop-types';
import { LazyMotion } from 'framer-motion';

// import Home from '../../Home';

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions

const loadFeatures = () => import('./features.js').then((res) => res.default);

MotionLazyContainer.propTypes = {
  children: PropTypes.node
};

export default function MotionLazyContainer({ children }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
      {/* {Home}   */}
    </LazyMotion>
  );
}




