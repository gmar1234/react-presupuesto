import { useEffect, useState } from "react";
import { ControlPresupuesto } from "./components/ControlPresupuesto";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { Pregunta } from "./components/Pregunta";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false)

  useEffect(() => {
    if(creargasto){

      //agrega nuevo presupusto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //resta del rpesupeusto

      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)
      guardarCrearGasto(false)
    }
  }, [gasto,creargasto,gastos,restante])


  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? 
          (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : 
          (
            <div className="row">
              <div className="one-half column">
                <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado  gastos={gastos}/>

                <ControlPresupuesto  presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
