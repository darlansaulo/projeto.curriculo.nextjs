import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function SkillCompetenceComponent() {
    return (
        <div className={`
            
        `}> 
            <h1 className={`
                font-black
                text-sm
                text-[#17294F]
                
            `}>
               <FontAwesomeIcon className="ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#e3e7fc]" icon={faStar}/> Competências e habilidades
            </h1>
            {/* ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#dae6ff] rounded-full */}
        </div>
    )
}