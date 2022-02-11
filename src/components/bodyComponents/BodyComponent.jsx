import EducationComponent from "./EducationComponent";
import ExperienceComponent from "./ExperienceComponent";
import ProfileComponent from "./ProfileComponent";
import SkillCompetenceComponent from "./SkillCompetenceComponent";



export default function BodyComponent(props) {
    return (
        <div className={`
            grid grid-rows-[60px_1fr_1fr_150px] grid-cols-1 grid-in-BodyComponent
            pl-3 pt-5 pr-5
            bg-white
            
            
            `}>
            <ProfileComponent {...props}/>
            <ExperienceComponent/>
            <SkillCompetenceComponent/>
            <EducationComponent/>
        </div>
        
    )
}