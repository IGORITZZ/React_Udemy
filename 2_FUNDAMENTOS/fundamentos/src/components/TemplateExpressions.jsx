const TemplateExpressions = () => {

    const name = 'Igor'
    const data ={
        Age: 31,
        Job: 'Programer'
    }
return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você é {data.Job}</p>
        <p>{console.log(data)}</p>
    </div>
)

}

export default TemplateExpressions