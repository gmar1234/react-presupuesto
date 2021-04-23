import PropTypes from "prop-types";

export const Gasto = ({ gasto }) => (
  <li className="gastos">
    <p>
      {gasto.nombre}
      <span className="gasto">S/ {gasto.cantidad}</span>
    </p>
  </li>
);

Gasto.propTypes = {
  gastos: PropTypes.object.isRequired,
};
