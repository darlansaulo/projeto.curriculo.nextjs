import SearchComponent from "./SearchComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'

export default function FooterComponent() {
    return (
        <div className={`
            bg-white
            flex flex-row justify-end pr-5 pb-3 pl-3 grid-in-FooterComponent
            mobile:justify-center
            mobile:p-0
            
        `}>
            <p className={`
                text-xs
                self-end
                
         
            `}>
                Desenvolvido por Darlan <FontAwesomeIcon className="border-[#17294F]" icon={faCodeCommit}/>
            </p>
        </div>
    )
}