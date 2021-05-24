const defaultSelect = () => {
    const elements = document.querySelectorAll('.calculator__select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
        });
    })
}

defaultSelect();