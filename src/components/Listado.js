import { Gasto } from "./Gasto";
import PropTypes from "prop-types";

export const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      <Gasto key={gasto.id} gasto={gasto} />
    ))}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};
