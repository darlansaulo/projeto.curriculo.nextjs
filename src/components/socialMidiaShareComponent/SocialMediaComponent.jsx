import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/SocialMedia.module.css'
import Link from 'next/link'



export default function SocialMediaComponent(props) {
    return (
        <div className={`
                self-center place-self-center grid-in-SocialMediaComponent
                pl-20
                list-none
                text-[35px]
                mobile:p-0
                mobile:justify-center
                mobile:items-center
    
        `}>
            <ul className={styles.content}>

                <li className={styles.contentLi}>

                    <Link href={`https://wa.me/5527997588583`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faWhatsapp} />
                        </a>
                    </Link>
                </li>
                <li className={styles.contentLi}>
                    <Link href={`https://github.com/darlansaulo`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faGithub} />
                        </a>
                    </Link>

                </li>
                <li className={styles.contentLi}>
                    <Link href={`https://www.linkedin.com/in/darlansaulo/`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faLinkedinIn} />
                        </a>
                    </Link>

                </li>
                <li className={styles.contentLi}>

                    <Link href={`mailto: darlansaulo@gmail.com`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faEnvelope} />
                        </a>
                    </Link>

                </li>
            </ul>
        </div>
    )
}