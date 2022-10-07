class Persona {
    constructor(nombre, apellido, documento) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
    }
}

class Interfaz {
    añadirPersona(persona) {
        const lista = document.getElementById('personas-list')
        const elemento = document.createElement('div')
        console.log(persona)
        elemento.innerHTML =
            `<div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>:${persona.nombre}<br>
            <strong>apellido</strong>:${persona.apellido}<br>
            <strong>Documento</strong>:${persona.documento}<br>
            <a href="#" class="btn btn-danger" id="eliminar" name="eliminar">ELIMINAR</a>
            </div>
        </div>`

        lista.appendChild(elemento)
        this.dejarblanco()
    }

    dejarblanco() {
        document.getElementById('personas-form').reset()
    }

    eliminarPersona(elemento) {
        if (elemento.name === 'eliminar') {
            elemento.parentElement.parentElement.remove()
        }
    }
}

//EVENTOS QUE INTERACTUAL CON EL HTML

document.getElementById('personas-form').addEventListener('submit', e => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const documento = document.getElementById('documento').value

    if(nombre==='' || apellido==='' || documento===''){
        alert(`Campos vacios`)
    }else{
        const persona=new Persona(nombre,apellido,documento)
        const interfaz=new Interfaz
        interfaz.añadirPersona(persona)
        alert(`Persona creada correctamente`)
    }
})