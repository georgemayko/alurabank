const controller = new NegociacaoContoller();

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));