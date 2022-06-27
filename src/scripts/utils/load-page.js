const displayLoading = (parameter) => {
    parameter.classList.add('display');

    setTimeout(() => {
        parameter.classList.remove('display');
    }, 2000);
};

export default displayLoading;