import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'

export default function ContactNetworkComponent(props) {
    return (
        <div className={`
            grid grid-rows-[18px_18px] grid-cols-[162px_auto]
            text-[0.667rem]
            pt-2.5
            

        `}>
            <p className="oldstyle-nums"> <FontAwesomeIcon className="ring-1 ring-[#17294F] ring-offset-2 ring-offset-[#e3e7fc]" icon={faPhone} /> {props.tel}</p>
            <p className=""> <FontAwesomeIcon className="ring-1 ring-[#17294F] ring-offset-2 ring-offset-[#e3e7fc]" icon={faGithubSquare} /> {props.github}</p>
            <p className=""> <FontAwesomeIcon className="ring-1 ring-[#17294F] ring-offset-2 ring-offset-[#e3e7fc]" icon={faAt} /> {props.mail}</p>
            <p className=""> <FontAwesomeIcon className="ring-1 ring-[#17294F] ring-offset-2 ring-offset-[#e3e7fc]" icon={faLinkedin} /> {props.socialWork}</p>
        </div>
    )
}