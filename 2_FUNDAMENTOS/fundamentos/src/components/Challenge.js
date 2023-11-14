const Challenge = () =>{

    const a = 1;
    const b = 2 ;

    const soma = () =>{
        return console.log(a + b);
    };

    return(
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={soma} >Clique aqui para somar</button>
        </div>
    )
};

export default Challenge;