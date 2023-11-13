const TemplateExpressions = () => {

    const name = "Estefan";
    const data = {
        age: 26,
        job: "QA Analyst",
    }

return(
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como: {data.job}</p>
    </div>
)

}

export default TemplateExpressions;