import './UniInput.css';

function UniInput({name, placeholder}){
    return(
        <>
            <input type="text" name={name} placeholder={placeholder} className='uniInput'/>
        </>
    );
}

export default UniInput;