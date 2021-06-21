const defaultSelectOld = () => {
    const elements = document.querySelectorAll('.calculator__select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: '',
        });
    })
}

const defaultSelect = () => {
    const elementsDefault = document.querySelectorAll('.form__select');
    elementsDefault.forEach(elem => {
        const choicesDefault = new Choices(elem, {
            searchEnabled: false,
            itemSelectText: '',
        });
    })
}
const filterSelect = () => {
    const elementsDefault = document.querySelectorAll('.cars-filter__select');
    elementsDefault.forEach(elem => {
        const choicesDefault = new Choices(elem, {
            searchEnabled: false,
            itemSelectText: '',
        });
    })
}

defaultSelectOld();
defaultSelect();
filterSelect();