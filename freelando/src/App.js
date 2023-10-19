import { Card } from './componentes/Card/Card';
import { Estilos } from './componentes/EstilosGlobais/Estilos';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema';
import { Tipografia } from './componentes/Tipografia/Tipografia';

function App() {
  return (
    <>
      <ProvedorTema>
        <Estilos />
        <Card>
          <Tipografia
            variante="h1"
            componente="h1"
          >
            Freelando
          </Tipografia>
        </Card>
      </ProvedorTema>
    </>
  );
}

export default App;
