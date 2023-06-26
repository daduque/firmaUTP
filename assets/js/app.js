document.addEventListener('DOMContentLoaded', (e) => {

    //Capturar el botón de copiar
    const btnCopiar = document.getElementById('btnCopiar');    
    //Capturar el formulario de la firma
    const dataFirma = document.getElementById('dataFirma');
    //capturar la sección de la firma
    const firma = document.getElementById('firma');
    
    dataFirma.addEventListener('submit', (e) => {
        e.preventDefault();

        
        firma.innerHTML = `
        <!-- Bloque texto y barra azul -->
        <div style="display:block;">
        <div  style="display:flex; min-height:130px; width:500px;">
                        
        <!-- imagen -->
        <a  style="display: inline; color:white; font-weight: bold; text-decoration: none; margin: auto;" href="https://www.utp.edu.co">
            <img style="display:inline-block; 
                margin: 0; 
                
                vertical-align: middle;"
                class="utp-azul" src="https://media2.utp.edu.co/imagenes/logo-utp-azul-noborder.png" width="120" alt="Marca utp azul">
        </a>
        
        <!-- separador -->
        <div style="display: flex; margin: auto; margin-right: 6px; margin-left: 5px">

            <img src="https://ci5.googleusercontent.com/proxy/lvLIP8ep_ETbuzCBauiedvVf4W4EfCAam8aGqTXHQkdJ3Z_3825utYAY8ymjcHzyRopVe3-61qPWM5CMOtXCrwsBh4PZjzuLQZ61tcjx_ej033cQ86kmTA=s0-d-e1-ft#https://media.utp.edu.co/firma_digital/images/VicerrectoriasLinea.png"
            style="border:0px none;vertical-align:middle" class="CToWUd" data-bit="iit" width="2px"
            height="110px">
        </div>

        <!-- texto -->
        <div style="display: flex; margin: auto;">
            <div style="color:black; display:table-cell; font-family:Helvetica;font-size:14px; line-height: 18px; margin:0; vertical-align: middle; width: 355px">
                <div style="font-weight: bold;"> ${ dataFirma.elements[0].value.toUpperCase() } </div>
                <div style="font-family:Helvetica">
                    <div style="min-width:328px"> ${ dataFirma.elements[1].value.toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) } </div>
                    <div style="font-style:italic;font-weight:bold"> ${ dataFirma.elements[2].value } </div>
                    <div>Ext:&nbsp;<span style="font-weight:700"> ${ dataFirma.elements[3].value } </span>&nbsp;/ Edificio Nº&nbsp;<span
                            style="font-weight:700"> ${ dataFirma.elements[4].value } </span>&nbsp;/ Of:&nbsp;<span
                            style="font-weight:700"> ${ dataFirma.elements[4].value } - ${ dataFirma.elements[5].value } </span></div>
                    <div>
                        <a style="color:#003d6d" class="enlace-institucional" href="mailto:${ dataFirma.elements[6].value }" target="_blank"> ${ dataFirma.elements[6].value } </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <!-- barra inferior -->
    <div style="
    background-color: #003d6d;
    color:white;
    display: block;
    font-family:Helvetica; 
    font-size:14px; 
    height: 32px; 
    padding-left:10px;
    /* vertical-align: middle; */
    width: 500px;" 
    >

        <div style="display: inline-block; height: 22px; margin-top: 5px; vertical-align: middle;">

            <!-- Web -->
            <a target="_blank" style="display:inline-block; color:white; margin-right: 5px; vertical-align: middle;" href="https://www.utp.edu.co">
                <img width="20" height="20" title="ir a la web" src="https://media2.utp.edu.co/iconos/sociales/WebB.png" alt="icono web" >
            </a>
            
            
            <!-- redes -->
            <a target="_blank" style="display:inline-block; color:white; margin-right: 5px; vertical-align: middle; " href="https://facebook.com/utpereira"> 
                <img width="20" height="20" title="ir a facebook" src="https://media2.utp.edu.co/iconos/sociales/FacebookB.png" alt="icono facebook">
            </a>
            <a target="_blank" style="display:inline-block; color:white; margin-right: 5px; vertical-align: middle;" href="https://twitter.com/utpereira">
                <img width="20" height="20" title="ir a twitter" src="https://media2.utp.edu.co/iconos/sociales/TwitterB.png" alt="icono twitter">
            </a>
            <a target="_blank" style="display:inline-block; color:white; margin-right: 5px; vertical-align: middle;" href="https://youtube.com/utpereira">
                <img width="20" height="20" title="ir a youtube" src="https://media2.utp.edu.co/iconos/sociales/YoutubeB.png" alt="icono youtube">
            </a>
            <a target="_blank" style="display:inline-block; color:white; margin-right: 5px; vertical-align: middle;" href="https://instagram.com/utpereira">
                <img width="20" height="20" title="ir a instagram" src="https://media2.utp.edu.co/iconos/sociales/InstagramB.png" alt="icono instagram">
            </a>
            <a target="_blank" style="display:inline-block; color:white; margin-right: 20px; vertical-align: middle;" href="https://www.linkedin.com/school/universidad-tecnol-gica-de-pereira/">
                <img width="20" height="20" title="ir a linkedin" src="https://media2.utp.edu.co/iconos/sociales/LinkedInB.png" alt="icono linkedin">
            </a>
        </div>
            
            
            <!-- teléfono -->
            <div style="display: inline-block; height: 18px; margin-top: 5px; vertical-align: middle;">
                <img width="16" title="Teléfono" src="https://media2.utp.edu.co/iconos/sociales/telephone-fill.png" alt="icono teléfono"> 
                
            </div>
            <div style="display: inline-block; height: 18px; margin-top: 5px; vertical-align: middle;">
                
                <span style="display: inline-block; margin-left: 5px;">
                    +57 606 3137300
                </span>
                
            </div>
            <div style="display: inline-block; height: 19px; margin-top: 5px; vertical-align: middle;">
                
                
                <span style="display: inline-block; font-weight: bold; margin-left: 10px;">
                    @UTPereira
                </span>
                
            </div>
        
    </div>
    </div>
    <!-- fin bloque texto y barra inferior -->
        
    <div>
        <p style="color:black;font-family:Helvetica;font-size:14px; margin-top:2rem"> El contenido de este mensaje y sus anexos son únicamente para el uso del destinatario y pueden contener información  clasificada o reservada. Si usted no es el destinatario intencional, absténgase de cualquier uso, difusión, distribución o copia de esta comunicación.</p>
    </div>

    `;

        //habilitar el botón btnCopiar
        btnCopiar.disabled = false;


        // console.log('Submit');

        Array.from(dataFirma.elements).forEach((element) => {
            // console.log(element.name);
            console.log(element.value);
        }
        );
    });



    //capturar el evento de click sobre cleanForm y reset el formulario dataFirma
    const cleanForm = document.getElementById('cleanForm');
    cleanForm.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Cleaning Form');
        dataFirma.reset();
    });

// usando navigator.clipboard.writeText copiar la firma al portapapeles
    btnCopiar.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Copiar');

        // const firma = document.getElementById('firma');
        const range = document.createRange();
        range.selectNode(firma);
        window.getSelection().addRange(range);

        try {
            const resultado = document.execCommand('copy');
            console.log(resultado ? 'Copiado' : 'No copiado');
        }
        catch(err) {
            console.log('ERROR');
        }
        window.getSelection().removeAllRanges();





    }
    );
});