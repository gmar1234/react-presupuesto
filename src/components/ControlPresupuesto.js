import PropTypes from "prop-types";
import { revisarPresupuesto } from "../helper";

export const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">presupuesto: S/ {presupuesto} </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        restante: S/ {restante}
      </div>
    </>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
