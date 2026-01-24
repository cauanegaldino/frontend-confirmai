import Button from "./button";

function FormPainel(){
    return(
        <div className="bg-white rounded-[40px] flex justify-center w-full max-w-lg p-8 md:p-12 shadow-xl">
        <form className="flex flex-col gap-4 w-full max-w-lg">
            <div>
                <label className="block font-semibold mb-2">Nome Completo</label>
                <input 
                type="text"
                placeholder="Digite seu nome completo"
                className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none" 
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">Email</label>
                <input 
                type="email" 
                placeholder="digite.aqui@email.com"
                className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none"
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">Telefone</label>
                <input
                type="text" 
                placeholder="(75) 4589125013"
                className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none"
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">Curso/Formação</label>
                <input
                type="text" 
                placeholder="Ex: Engenharia de Software"
                className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none"
                />
            </div>

            <div className="flex flex-col">
                <label className="block font-semibold mb-2">Disponibilidade de horário</label>
                <select className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none" id="meuSelect">
                <option value="op0">Selecione o turno</option>
                <option value="op1">Matutino</option>
                <option value="op2">Vespertino</option>
                </select>
            </div>

            <Button type="submit" className="">
                Enviar inscrição
            </Button>
            

        </form>
        </div>
        
    )
}
export default FormPainel;