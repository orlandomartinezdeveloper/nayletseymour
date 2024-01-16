document.addEventListener('DOMContentLoaded', geralDoc);
function geralDoc() {
    // Declaração de Variáveis
    const SectionHome = document.getElementById('home');   
    const SectionQuienesSomos = document.getElementById('quienesSomos');
    const SectionServicios = document.getElementById('servicios');
    const SectionPortafolio = document.getElementById('portafolio');
    const SectionContacto =  document.getElementById('contacto');
    const linkHome = document.getElementById('linkHome').addEventListener('click', margenHome);
    const linkQuienesSomos = document.getElementById('linkQuienesSomos').addEventListener('click', margenSomos);
    const linkServicios = document.getElementById('linkServicios').addEventListener('click', margenServicios);
    const linkPortafolio = document.getElementById('linkPortafolio').addEventListener('click', margenPortafolio);
    const linkContacto = document.getElementById('linkContacto').addEventListener('click', margenContacto);
    
    // Funções para a margem superior em relação ao menu fixo
    function margenHome() {
        SectionHome.style.paddingTop = "0";
        SectionQuienesSomos.style.paddingTop = "0";
        SectionServicios.style.paddingTop = "0";
        SectionPortafolio.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function margenSomos() {
        SectionHome.style.paddingTop = "0";
        SectionQuienesSomos.style.paddingTop = "50px";
        SectionServicios.style.paddingTop = "0";
        SectionPortafolio.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function margenServicios() {
        SectionHome.style.paddingTop = "0";
        SectionQuienesSomos.style.paddingTop = "0";
        SectionServicios.style.paddingTop = "75px";
        SectionPortafolio.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function margenPortafolio() {
        SectionHome.style.paddingTop = "0";
        SectionQuienesSomos.style.paddingTop = "0";
        SectionServicios.style.paddingTop = "0";
        SectionPortafolio.style.paddingTop = "75px";
        SectionContacto.style.paddingTop = "0";
    }

    function margenContacto() {
        SectionHome.style.paddingTop = "0";
        SectionQuienesSomos.style.paddingTop = "0";
        SectionServicios.style.paddingTop = "0";
        SectionPortafolio.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function mensaje() {
        alert('Mensaje Enviado')
    }
}