document.addEventListener('DOMContentLoaded', geralDoc);
function geralDoc() {
    // Declaração de Variáveis
    const SectionHome = document.getElementById('home');   
    const SectionAbout = document.getElementById('about');
    const SectionArtwork = document.getElementById('artwork');
    const SectionPortfolio = document.getElementById('portfolio');
    const SectionCommissions = document.getElementById('commissions');
    const SectionContact =  document.getElementById('contact');
    const linkHome = document.getElementById('linkHome').addEventListener('click', margenHome);
    const linkAbout = document.getElementById('linkAbout').addEventListener('click', marginAbout);
    const linkArtwork = document.getElementById('linkArtwork').addEventListener('click', marginArtwork);
    const linkPortfolio = document.getElementById('linkPortfolio').addEventListener('click', marginPortfolio);
    const linkCommissions = document.getElementById('linkCommissions').addEventListener('click', marginCommissions);
    const linkContact = document.getElementById('linkContact').addEventListener('click', marginContact);
    
    // Funções para a margem superior em relação ao menu fixo
    function margenHome() {
        SectionHome.style.paddingTop = "50px";
        SectionAbout.style.paddingTop = "0";
        SectionArtwork.style.paddingTop = "0";
        SectionPortafolio.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function marginAbout() {
        SectionHome.style.paddingTop = "0";
        SectionAbout.style.paddingTop = "50px";
        SectionArtwork.style.paddingTop = "0";
        SectionPortfolio.style.paddingTop = "0";
        SectionCommissions.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function marginArtwork() {
        SectionHome.style.paddingTop = "0";
        SectionAbout.style.paddingTop = "0";
        SectionArtwork.style.paddingTop = "75px";
        SectionPortfolio.style.paddingTop = "0";
        SectionCommissions.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function marginPortfolio() {
        SectionHome.style.paddingTop = "0";
        SectionAbout.style.paddingTop = "0";
        SectionArtwork.style.paddingTop = "0";
        SectionPortfolio.style.paddingTop = "75px";
        SectionCommissions.style.paddingTop = "0";
        SectionContacto.style.paddingTop = "0";
    }

    function marginCommissions() {
        SectionHome.style.paddingTop = "0";
        SectionAbout.style.paddingTop = "0";
        SectionArtwork.style.paddingTop = "0";
        SectionPortfolio.style.paddingTop = "0";
        SectionCommissions.style.paddingTop = "75px";
        SectionContacto.style.paddingTop = "0";
    }

    function marginContact() {
        SectionHome.style.paddingTop = "0";
        SectionAbout.style.paddingTop = "0";
        SectionArtwork.style.paddingTop = "0";
        SectionPortfolio.style.paddingTop = "0";
        SectionCommissions.style.paddingTop = "0";
        SectionContact.style.paddingTop = "75px";
    }

    function mensaje() {
        alert('Mensaje Enviado')
    }
}