import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/SocialMedia.module.css'
import Link from 'next/link'



export default function SocialMediaComponent(props) {
    return (
        <div className={`
                row-span-3 self-center place-self-center
                text-gray-50
                pl-20
                
        `}>
            <ul className={styles.content}>

                <li className={styles.contentLi}>

                    <Link href={`https://wa.me/5527997588583`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faWhatsappSquare} />
                        </a>
                    </Link>
                </li>
                <li className={styles.contentLi}>
                    <Link href={`https://github.com/darlansaulo`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faGithubSquare} />
                        </a>
                    </Link>

                </li>
                <li className={styles.contentLi}>
                    <Link href={`https://www.linkedin.com/in/darlansaulo/`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faLinkedin} />
                        </a>
                    </Link>

                </li>
                <li className={styles.contentLi}>

                    <Link href={`mailto: darlansaulo@gmail.com`} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon className={styles.icons} icon={faSquareEnvelope} />
                        </a>
                    </Link>

                </li>
            </ul>
        </div>
    )
}