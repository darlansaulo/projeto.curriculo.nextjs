import EducationComponent from "./EducationComponent";
import ExperienceComponent from "./ExperienceComponent";
import SkillCompetenceComponent from "./SkillCompetenceComponent";



export default function BodyComponent(props) {
    return (
        <div className={`
            grid grid-rows-[1fr_1fr_28%]
            grid-in-BodyComponent
            pl-3 pt-5 pr-5
            bg-white
            
            
            `}>
            
            <ExperienceComponent {...props} />
            <SkillCompetenceComponent {...props} />
            <EducationComponent {...props} />
        </div>
        
    )
}