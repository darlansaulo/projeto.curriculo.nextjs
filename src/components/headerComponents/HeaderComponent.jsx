import PhotoComponent from "./PhotoComponent";
import ProfileComponent from "./ProfileComponent";
import TitleComponent from "./TitleComponent";


export default function HeaderComponent(props) {
    return (
        <div className={`
            grid grid-cols-[1fr_20%] grid-rows-[25%_1fr]  col-span-1  grid-in-HeaderComponent
            bg-white
            pr-5 pt-5 pl-3 pb-3
            `}>
            <TitleComponent> {props.titulo} </TitleComponent>
            <PhotoComponent> </PhotoComponent>
            <ProfileComponent {...props}/>
            
        </div>
    )
}
