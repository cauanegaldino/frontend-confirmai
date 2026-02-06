import Background from "../components/background"
import NovoForm from "../components/NovoForm/novoForm"


function PainelNovoForm() {
  return (
    <Background>
        <h1 className="text-white text-3xl font-bold text-center ">
        Painel de Gerenciamento de Formulários
      </h1>
      <div className="min-h-screen flex justify-center items-center px-4">
        <NovoForm />
      </div>
    </Background>
  )
}

export default PainelNovoForm
