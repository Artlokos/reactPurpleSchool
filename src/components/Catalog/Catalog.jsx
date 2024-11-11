import './Catalog.css';
import CardItem from '../CardItem/CardItem';

function Catalog({items}){
    return (       
            <>
            <div className="catalog-container">
                {items.map(elem => (
                    <CardItem key={elem.id} img={elem.img} name={elem.name} rating={elem.rating}/>
                ))}
            </div>
            </>
            );
}
export default Catalog;