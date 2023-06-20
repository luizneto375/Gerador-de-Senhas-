// Seleção de Elementos 
const ajuda_passwordButton = document.querySelector("#ajuda_password");
const ajuda_senha_passwordElement = document.querySelector("#ajuda_senha_password");


//Funções
//Letras, Números e Símbolos, vamos utilizar uma tecnica, atraves da tabela ascll  para buscar basicamente o valor do codigo dos caracteres. vamos pegar do objeto string o metodo fromcharcode, em seguida vou colocar um numero que corresponde ao valor da tabela ascll, pra pegar como exemplo, no case a letra A , corresponde ao  numero 65, na tabela, com isso podemos gerar a senha aleatoria

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


const getNumber = () => {
   return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%¨¨&*?^~+-/*:;|"
    return symbols [Math.floor(Math.random() * symbols.length)];
}

const ajudaPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = "";

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {

            const randomValue = generators[
                Math.floor(Math.random() * generators.length)]();

           password += randomValue;
        });
    };

   password = password.slice(0, passwordLength);

  ajuda_senha_passwordElement.style.display = "block"
  ajuda_senha_passwordElement.querySelector("h4").innerText = password;
};

//Eventos
ajuda_passwordButton.addEventListener("click", () => {
    ajudaPassword( getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol)
})