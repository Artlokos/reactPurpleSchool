import './Catalog.css';
import CardItem from '../CardItem/CardItem';

function Catalog(){
    return (       
            <>
            <div className="catalog-container">
                <CardItem name="BlackWidow" img="src\assets\cardImages\BlackWidow.png" rating="324"/>
                <CardItem name="Shang-Chi" img="src\assets\cardImages\Shang-Chi-and-the-Legend-of-the-Ten-Rings.png" rating="124"/>
                <CardItem name="Loki" img="src\assets\cardImages\Loki.png" rating="235"/>
                <CardItem name="How I Met Your Mother" img="\src/assets/cardImages/HowIMeetYourMother.png" rating="123"/>         
            </div>
            </>
            );
}
export default Catalog;