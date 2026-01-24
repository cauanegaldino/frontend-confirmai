import ts from "../assets/ts.png"

function Header(){
    return(
        <div className="flex flex-col items-center">
            <img src={ts} 
            alt="" 
            className="flex w-30"
            />
            <h1 className="text-white font-[Jaro] text-2xl">
                TECNOSYSTEM
            </h1>
            <h2 className="text-white">
                Portal de Inscrições
            </h2>
        </div>
        
    )
}

export default Header;