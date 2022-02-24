import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function SkillCompetenceComponent(props) {
    return (
        <div className={`
            
        `}>
            <h1 className={`
                font-black
                text-sm
                text-[#17294F]
                
            `}>
                <FontAwesomeIcon className="ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#e3e7fc]" icon={faStar} /> Competências e habilidades
            </h1>
            <ul className="text-xs list-disc pl-[15.36px] pb-3 border-l-2 ml-1.5">
                <li className="font-black text-lg pt-3"> <span className='text-[14px]'> {props.tituloSkill} </span> </li>
  
                <li className='list-inside'> {props.subTituloSkill_1} </li>
                <li className="font-black text-lg pt-3"> <span className='text-[14px]'> {props.tituloSkill_2} </span> </li>
                <li className='list-inside'> {props.subTituloSkill_2} </li>
                <li className='list-inside'> {props.subTituloSkill_3} </li>
            </ul>
            {/* ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#dae6ff] rounded-full */}
        </div>
    )
}