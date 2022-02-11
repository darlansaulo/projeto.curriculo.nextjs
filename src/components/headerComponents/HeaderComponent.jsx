import PhotoComponent from "./PhotoComponent";
import ContactNetworkComponent from "./ContactNetworkComponent";
import TitleComponent from "./TitleComponent";


export default function HeaderComponent(props) {
    return (
        <div className={`
            grid grid-cols-[1fr_120px] grid-rows-[30px_1fr]  col-span-1  grid-in-HeaderComponent
            bg-white
            pr-5 pt-5 pl-3 pb-3
            `}>
            <TitleComponent> {props.titulo} </TitleComponent>
            <PhotoComponent> </PhotoComponent>
            <ContactNetworkComponent {...props}>   </ContactNetworkComponent>
            
        </div>
    )
}
