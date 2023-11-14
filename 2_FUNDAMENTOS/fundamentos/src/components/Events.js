const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento");
    };


    const renderSomething = (x) =>{
        if (x){
            return <h1>Renderiza isso</h1>
        }else{
            return <h1>Agora renderiza isso</h1>
        }
    }

return (
    <div>
        <div>
            <button onClick={handleMyEvent}>clique aqui</button>
        </div>
        <div>
            <button onClick={()=> console.log("Clicou")}>clique aqui também</button>
        </div>

        {renderSomething(true)}
        {renderSomething(false)}
    </div>
)

};

export default Events;