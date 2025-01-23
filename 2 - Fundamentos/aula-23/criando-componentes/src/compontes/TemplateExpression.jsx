import MyComponent from "./MyComponent";

const TemplateExpression = () => {
     let nome = "Igor";
     let data = {
        age: 27,
        job: "Programador"
     };
    return(
        <>
        <h1>Olá {nome}, tudo bem?</h1>
        <MyComponent/>
        <p>Você trabalha como {data.job}</p>
        <p>{5+5}</p>
        {console.log("JSX")}
        </>
    )
}
export default TemplateExpression