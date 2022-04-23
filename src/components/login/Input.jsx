import '../../styles/Input.css';

function Input({ name, id, type, placehodler ='', att, setatt }) {
    return (
        <div className='input-custom'>
            <label htmlFor={id}>{name}</label>
            <input value={ att } type={type} name={id} id={id} placeholder={placehodler} onChange={(e)=>setatt(e.target.value)}/>
        </div>
    );
}

export default Input;