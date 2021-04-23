import PropTypes from "prop-types";

export const Error = ({ mensaje }) => (
  <p className="alert alert-danger error">{mensaje}</p>
);

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
