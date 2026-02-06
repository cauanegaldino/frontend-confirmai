import ts from "../assets/ts.png"

function Header({subtitle}){
    return(
        <div className="flex flex-col items-center">
            <img src={ts} 
            alt="" 
            className="flex w-30 pt-2"
            />
            <h1 className="text-white font-[Jaro] text-2xl">
                TECNOSYSTEM
            </h1>
            
            {subtitle && (
                <h2 className="text-white">
                    {subtitle}
                </h2>
            )
            }
        </div>
        
    )
}

export default Header;