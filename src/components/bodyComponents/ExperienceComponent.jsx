import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function ExperienceComponent(props) {
    return (
        <div className={`

        `}> 
            
            <h1 className={`
                font-black
                text-sm
                text-[#17294F]

            `}>
               <FontAwesomeIcon className='ring-1 ring-[#17294F] ring-offset-4 ring-offset-[#e3e7fc] ' icon={faBriefcase}/> Experiência
            </h1>

            <p>
                {props.titulo}
                {props.subTitulo}
            </p>

        </div>
    )
}