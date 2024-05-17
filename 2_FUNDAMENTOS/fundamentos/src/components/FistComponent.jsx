// arquivos jsx

import MyComponent from "./MyComponents";

const FirstComponent = () => {
    // podemos comentar com barras, mas dentro do return irá ser diferente 
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
            {/* 
                Os compontens .jsx precisam estar sempre envolto em uma <div
            */}
        </div>
    )
}

export default FirstComponent;