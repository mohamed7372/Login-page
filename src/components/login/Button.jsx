function Button({ icon='', name}) {
    return (
        <button>
            {icon === '' && <img srcSet={ process.env.PUBLIC_URL + icon }/>}
            {name}
        </button>
    );
}

export default Button;