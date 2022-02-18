import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function EducationComponent(props) {
    return (
        <div className={`
            
        `}>
            <h1 className={`
                font-black
                text-sm
                text-[#17294F]
            `}>

                <FontAwesomeIcon className='ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#e3e7fc]' icon={faGraduationCap} /> Educação
            </h1>
            <ul className="text-xs list-disc pl-[15.36px] pb-3 border-l-2 ml-1.5">
                <li className="font-black text-lg pt-3"> <span className='text-[14px]'> {props.tituloEduca} </span> </li>
                <li className="underline list-none pb-6 list-inside"> {props.subTituloEduca_1} </li>
                <li className='list-inside'> {props.subTituloEduca_2} </li>
            </ul>
        </div>
    )
}