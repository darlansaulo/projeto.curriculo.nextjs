export default function TitleComponent(props) {
    return (
            <div className={`
                    
            `}>
                <h1 className={`
                    text-[1.3rem]
                    font-black
                    text-[#17294F]
                    
                `}>
                    {props.children}
                </h1>
            </div>
    )
}