const controller = new NegociacaoContoller();
$('form').submit(controller.adiciona.bind(controller));