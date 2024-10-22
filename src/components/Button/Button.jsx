import './Button.css';

function Button({value}){
    return (       
            <button className='button accent'>{value}</button>  
            );
}

export default Button;