import '../../styles/Input.css';

function Input({ name, id, type, placehodler ='' }) {
    return (
        <div className='input-custom'>
            <label htmlFor={id}>{name}</label>
            <input type={type} name={id} id={id} placeholder={placehodler}/>
        </div>
    );
}

export default Input;