import { Link } from "react-router-dom"
import { ChevronRightIcon } from '@chakra-ui/icons'
import AllRoutesKid from "./AllRoutesKid"
import '../CSS/List.css'

export default function KidList() {
    return (
        <div className="baby-list">
            <div className="baby-list_item">
                <Link to={'/kidgirl'}>Girl</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/kidboy'}>Boy</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
        </div>
    )
}