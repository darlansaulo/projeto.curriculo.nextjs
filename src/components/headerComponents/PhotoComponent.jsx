import Image from "next/image"

export default function PhotoComponent() {
    return (
        <div className={`
            row-span-2
        `}>
            
            <Image 
                src="/assets/imgs/PainAkatsuki.jpg"
                alt="Picture of the author"
                width={120}
                height={130}
            />
        </div>
    )
}