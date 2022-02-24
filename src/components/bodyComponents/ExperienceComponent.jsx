import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'


export default function ExperienceComponent(props) {
    return (
        <div className={`

        `}> 
            
            <h1 className={`
                font-black
                text-[16px]
                text-[#17294F]

            `}>
               <FontAwesomeIcon className='ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#e3e7fc]' icon={faBriefcase}/> Experiência
            </h1>

        <ul className="text-xs list-disc pl-[15.36px] pb-3 border-l-2 ml-1.5">
            <li className="font-black text-lg pt-3"> <span className='text-[14px]'> {props.tituloExp} </span> </li> 
            <li className="underline list-none pb-6 list-inside"> {props.subTituloExp_1} </li>
            <li className='list-inside'> {props.subTituloExp_2} </li>
            <li className='list-inside'> {props.subTituloExp_3} </li>
            <li className='list-inside'> {props.subTituloExp_4} </li>
            <li className='list-inside'> {props.subTituloExp_5} </li>
        </ul>

        </div>
    )
}