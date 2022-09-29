import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import GrenfellImg from './../../assets/images/grenfell.jpg'

const Logo = () => {
    return (
        <>
            <Link to="/">
                <h1>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="title">Street Dance Academy</span> 
                    <span className="location">Notting Hill</span>
                </h1>
            </Link>
        </>
    )
}

{/* <img className="grenfell-image" src={GrenfellImg} /> */}

export default Logo