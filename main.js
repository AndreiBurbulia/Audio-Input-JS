/*
Funzione completa




registra.onclick = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {

        mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.start()
        chuck = []

        mediaRecorder.addEventListener("dataavailable", e => {
            chuck.push(e.data)

        })

        mediaRecorder.addEventListener("stop", e => {
            blob = new Blob(chuck)
            audio_url = URL.createObjectURL(blob)
            audio = new Audio(audio_url)
            audio.setAttribute("controls", 1)
            ok.appendChild(audio)
        })

    })
}

ferma.onclick = () => {
    mediaRecorder.stop()
}
*/


/*
Analisi dei singoli pezzi
*/


registra.onclick = () => {

    /*
    navigator.mediaDevices.getUserMedia va a chiedere all'utente che sta usando la funzione sulla pagina se puo accedere al audio tramite il suo coomputer o tramite input audio che ha collegato al pc

    { audio: true } vado a dire che mi interesa accedere solamente all'audio se volessi accedere anche al video dovrei scrivere { audio: true, video:true }, pero in questi casi volendo posso dare anche dei parametri speciali al video come la grandezza o altri valori

    .then mi permette di eseguire le sue instruzioni solamente se le condizioni che la procedono sono stata eseguie e sono vere altrimenti non vera eseguito niente, quindi se l'utente da il consenso allora il then viene eseguito mentre se l'utente non da il consenso il then non viene eseguito e viene saltato

    */
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {

        /*
        Questa sezione mi va a inizzializzare un nuovo oggetto come mediarevorder che ha la funzione di accedere e registrare i dati provenienti dall'audio
        */
        mediaRecorder = new MediaRecorder(stream)

        /*
        con mediaRecorder.start() vado a dire che puoi iniziare ad ascoltare e a registrare quindi prende i dati della registrazione e gli passa a chi ha il dovere poi di scriverli dove deve
        */
        mediaRecorder.start()

        /*
        array vuoto he poi contera i miei dati audio che gli andro a inserire
        */
        chuck = []


        /*
        in questa parte vado a dire a mediaRecorder di stare all'ascolte degli eventi che succedono e gli dico che deve vedere quando
        ci sono dati disponibili da scrivere appunto con la variabile "dataavailable" che mi dice se dalla registrazione ci sono dati che sono stati scritti 
        nell'array
        */
        mediaRecorder.addEventListener("dataavailable", e => {
            chuck.push(e.data)

        })


        /*
        il programma ascolta quando viene dato lo stop alla registrazione
        in questa parte del codice vado a dire al mio programma che quando viene fermata la registrazione quindi viene fermato l'ingresso di dati deve processare questi dati e fare in modo che siano disponibili
        */
        mediaRecorder.addEventListener("stop", e => {

            /*
            vado creare un blob dai dati che sono stati inseriti nel array chuck, un blob e un oggetto non modificabile che contiene dati non elaborati
            */
            blob = new Blob(chuck)

            /*
            con URL.createObjectURL vado a creare un URl che mi rapresenti l'oggetto che gli ho dato in ingresso e lo assegno a una variabile
            */
            audio_url = URL.createObjectURL(blob)

            /*
            Il costruttore Audio () crea e restituisce un nuovo HTMLAudioElement che può essere allegato a un documento per consentire all'utente di interagire e / o ascoltare, oppure può essere utilizzato fuori schermo per gestire e riprodurre l'audio.
            */
            audio = new Audio(audio_url)

            /*
            con l'attributo controls gli vado a dire che e un elemento che ha i contrlli quindi html lo riconosce e gli da la posibilita di poter interagire con questo elemento
            */
            audio.setAttribute("controls", 1)

            /*
            qui vado a inserire l'elemento in html, in questo caso e stato usato appendChild per inserirlo come nodo in html pero al posto di "ok" potrei usare un qualsiasi posto in html che mi vado a selezionare e inserirli "audio" che e l'elemento che mi contiene effetivamente i miei dati con cio che mi serve cioe l'audio
            */
            ok.appendChild(audio)
        })

    })
}

ferma.onclick = () => {
    /*
    La funzione mediarecorder.stop() mi permette di fermare la registrazione quindi ferma la scrittura di dati nell'array
    */
    mediaRecorder.stop()
}








