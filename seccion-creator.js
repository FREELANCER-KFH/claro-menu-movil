export const seccion = (id, clase, text) => {
    const element = document.createElement('div')
    element.id = id
    element.classList.add(clase)
    element.textContent = text
    element.addEventListener('click', mensaje())
    return element
}

const mensaje = (idSeccion) => {
    alert(`klk con klk ${idSeccion}`)
}