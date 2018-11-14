
export  const DateComponent = () => {
    const element = document.createElement('button');
    element.innerHTML = `Нажми, чтобы узнать дату и время`;
    element.onclick = () => {
        var now = new Date();
        alert( now );
    };
    return element;
};