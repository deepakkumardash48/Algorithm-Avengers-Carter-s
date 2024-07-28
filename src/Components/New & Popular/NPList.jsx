import { Link } from "react-router-dom"
import { ChevronRightIcon } from '@chakra-ui/icons'
import '../CSS/List.css'

export default function NPList() {
    return (
        <div className="baby-list">
            <div className="baby-list_item">
                <Link to={'/'}>New Arrivals</Link>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>Halloween Outfits & Clothing</Link>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>Little Planet</Link>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>PurelySoft</Link>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>School Uniforms</Link>
            </div>
            <div className="baby-list_item">
                <Link to={'/charshop'}>Charcter Shop</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/fanshop'}>Fan Shop</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>Sustainable Children's Clothing & Products</Link>
            </div>
            
        </div>
    )
}