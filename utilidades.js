let pasajeros = []

if(localStorage.getItem('pasajeros')){
    pasajeros = JSON.parse(localStorage.getItem('pasajeros'))
}

if(localStorage.getItem('pasajeros')){
    pasajeros = JSON.parse(localStorage.getItem('pasajeros'))
}

const valida = () =>{  
    document.querySelectorAll('.form-control').forEach(item => {
        verificar(item.id)
    })
    if(document.querySelectorAll('.is-invalid').length == 0){
        const pasajero = {
            asiento: document.getElementById('asiento').value,
            anden: document.getElementById('anden').value.trim(),
            servicio: document.getElementById('servicio').value.trim(),
            boleto: document.getElementById('boleto').value,
            nombre: document.getElementById('nombre').value,
            run: document.getElementById('run').value,
            fecha: document.getElementById('fechaCompra').value
        }
        pasajeros.push(pasajero)
        localStorage.setItem('pasajeros',JSON.stringify(pasajeros))
        completarTabla()
    }
}

const completarTabla = () => {
    let tabla = ''
    pasajeros.forEach(item => {
        tabla += `<tr>
            <td>${item.asiento}</td>
            <td>${item.anden}</td>
            <td>${item.servicio}</td>
            <td>${item.boleto}</td>
            <td>${item.nombre}</td>
            <td>${item.run}</td>
            <td>${item.fecha}</td>
        </tr>`
    })
    document.getElementById('contenido').innerHTML = tabla
}
completarTabla()

const limpiar = () => {
    document.querySelector('form').reset()
    document.querySelectorAll('.form-control').forEach(item => {
        item.classList.remove('is-invalid')
        item.classList.remove('is-valid')
        document.getElementById('p-'+item.name).innerHTML = ''
    })
}

const soloNumeros = (evt) => {
    if(evt.keyCode >= 48 && evt.keyCode <= 57)
        return true
    return false
}

const verificar = (id) => {
    const input = document.getElementById(id)
    const div = document.getElementById('p-'+id)
    input.classList.remove('is-invalid')
    if(input.value.trim() == ''){
        input.classList.add('is-invalid')
        div.innerHTML = '<span class="badge bg-danger">ESTE CAMPO ES OBLIGATORIO</span>'
    }
    else{
        input.classList.add('is-valid')
        div.innerHTML = ''
        if(id == 'valor'){
            if(input.value <2500){                
                input.classList.add('is-invalid')
                div.innerHTML = '<span class="badge bg-danger">El sueldo no puede ser inferior a $500.000</span>'
            }
        }
        if(id == 'fechaCompra'){
            const fecha = new Date(input.value)
            const hoy = new Date()
            if(fecha < hoy){
                input.classList.add('is-invalid')
                div.innerHTML = '<span class="badge bg-danger">La fecha ingresa es menor a hoy</span>'
            }
        }
        if(id == 'run'){
            if(!validaRun(input.value) /*|| input.value.length < 9*/){
                input.classList.add('is-invalid')
                div.innerHTML = '<span class="badge bg-danger">RUN INVÁLIDO</span>'
            }
        }
    }
}

const validaRun = (run) => {
    const Fn = {
        validaRut : function (rutCompleto) {
            rutCompleto = rutCompleto.replace("‐","-")
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                return false
            const tmp 	= rutCompleto.split('-')
            const digv	= tmp[1]
            const rut 	= tmp[0]
            if ( digv == 'K' ) digv = 'k' 
            
            return (Fn.dv(rut) == digv )
        },
        dv : function(T){
            let M=0,S=1
            for(;T;T=Math.floor(T/10))
                S=(S+T%10*(9-M++%6))%11
            return S?S-1:'k'
        }
    }
    return Fn.validaRut(run)    
}
