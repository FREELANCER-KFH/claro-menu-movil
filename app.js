import {seccion} from './seccion-creator.js'

const root = document.getElementById('root')

const seccion_pagar_facturas = seccion('pagarFactura', 'secciones', 'Paga tus facturas')
const seccion_comprar_internet = seccion('comprarInternet', 'secciones', 'Compra tu Internet')
const seccion_comprar_roaming = seccion('comprarRoaming', 'secciones', 'Compra roaming')
const seccion_recargar = seccion('recargar', 'secciones', 'Recargar propias y a terceros')
const seccion_consulta_consumo = seccion('consulta_consumo', 'secciones', 'Consultar consumo')
const seccion_reclamacion = seccion('reclamo', 'secciones', 'Realiza tus reclamos aqui')

root.appendChild(seccion_pagar_facturas)
root.appendChild(seccion_comprar_internet)
root.appendChild(seccion_comprar_roaming)
root.appendChild(seccion_recargar)
root.appendChild(seccion_consulta_consumo)
root.appendChild(seccion_reclamacion)
