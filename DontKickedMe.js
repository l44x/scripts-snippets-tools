//--------------------------- ALWAYS ACTIVE IN A VOICE-CHANNEL WHEN KICKED ADMIN ------------------------------------------------------- //

setInterval(function() {
    let getChannelIdElement = document.querySelector(`a[data-list-item-id="channels___1260055873649381386"]`); // -> Cambiar por el id de tu canal
    let getChannelId = getChannelIdElement ? getChannelIdElement.getAttribute('data-list-item-id') : null;

    let verifiedImgOnChannelElement = document.querySelector(`div[style*="https://cdn.discordapp.com/avatars/1097655777226936351"]`); // -> Cambiar por tu id de usuario
    let verifiedImgOnChannel = verifiedImgOnChannelElement ? verifiedImgOnChannelElement : null;

    if (getChannelId || verifiedImgOnChannel) {
        if (verifiedImgOnChannel) {
            console.log('¡Te encuentras dentro del canal!');
        } else {
            console.log('Intentando unirte al canal...');

            document.querySelector('a[data-list-item-id="channels___1260055873649381386"]').click(); // -> Cambiar por el id de tu canal
            document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
            
            console.log('Te uniste correctamente al canal -> 1259892010010284144');
        }

     // no existe ni un canal.   
    }
    
    else if(verifiedImgOnChannel){
        console.log("Creamos un canal propio.");
    }

    else {
        console.log('Creando el canal...');
        document.querySelector('a[data-list-item-id="channels___1180080646639583252"]').click(); // Boton estatico si el servidor tiene un canal de vos para crear un canal. (Pasarle el id)
        document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
        verifiedImgOnChannel=verifiedImgOnChannel.baseURI.split('/').pop();  // checker
        console.log(verifiedImgOnChannel);
    }
}, 3000);

// -------------------------------------------------------------------------------------- //