import './Catalog.css';
import CardItem from '../CardItem/CardItem';

function Catalog(){
    return (       
            <>
            <div className="catalog-container">
                <CardItem name="BlackWidow" img="src\assets\cardImages\BlackWidow.png" rating="30"/>
                <CardItem name="Shang-Chi" img="src\assets\cardImages\Shang-Chi-and-the-Legend-of-the-Ten-Rings.png" rating="10"/>
            </div>
            </>
            );
}
export default Catalog;