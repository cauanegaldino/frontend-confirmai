import FormPainel from "../components/formPainel";
import Background from "../components/background";
import Header from "../components/header";


function PainelProcesso(){
    return(
    <Background>
        <Header/>
        <div className="min-h-screen flex items-center justify-center px-4">
        <FormPainel/>
        </div>
    </Background>
    )
}
export default PainelProcesso;