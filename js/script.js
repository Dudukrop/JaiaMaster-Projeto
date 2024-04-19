$(document).ready(() => {
	$("#clientes").html($('tr').length)
	$('#pagos').html

	let pagos = $('.pago').html()
	let qntpagos = 0
	for (let i = 0; i < pagos.length; i++) {
		if (pagos[i]) {
			qntpagos++
		}
	}
	console.log(qntpagos)

})
