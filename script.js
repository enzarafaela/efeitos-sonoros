const criarHeader = () => {
    const header = document.getElementsByTagName('header')[0];
    const title = document.createElement('h1');
    title.innerText = 'Repertório de Efeitos Sonoros';
    header.appendChild(title);
    const text = document.createElement('p');
    text.innerText = 'Pra que? Já são outros 500...';
    header.appendChild(text);
}

const criarContainer = () => {
    const main = document.querySelector('main');
    const containerEfeitos = document.createElement('div');
    containerEfeitos.classList.add('efeitos-container');
    main.appendChild(containerEfeitos);
}

const audios = [
    {
        audio: './audios/asmei.mp3',
        description: ''
    },
    {
        audio: './audios/brasil.mp3',
        description: ''
    },
    {
        audio: './audios/meu-patrao.mp3',
        description: ''
    },
    {
        audio: './audios/irra.mp3',
        description: ''
    },
    {
        audio: './audios/joaokleber.mp3',
        description: ''
    },
    {
        audio: './audios/pare.mp3',
        description: ''
    },
    {
        audio: './audios/rapaz.mp3',
        description: ''
    },
    {
        audio: './audios/ratinho.mp3',
        description: ''
    },
    {
        audio: './audios/uepa.mp3',
        description: ''
    },
    {
        audio: './audios/xiii.mp3',
        description: ''
    },
];

const criarBotoes = () => {
    const container = document.querySelector('.efeitos-container');
    audios.forEach((audio) => {
        const containerAudio = document.createElement('div');
        containerAudio.classList.add('audio-container');

        const divEfeito = document.createElement('div');
        divEfeito.classList.add('efeito');
        
        const efeito = document.createElement('audio');
        efeito.src = audio.audio;

        const texto = document.createElement('p');
        texto.innerText = audio.audio.replace('./audios/', '');
        texto.innerText = texto.innerText.replace('.mp3', '');

        containerAudio.appendChild(divEfeito);
        containerAudio.appendChild(texto);
        divEfeito.appendChild(efeito);
        container.appendChild(containerAudio);
    });
}

const criarEventos = () => {
    const container = document.querySelector('.efeitos-container');

    container.addEventListener('mousedown', (event) => {
        const elementDiv = event.target;
        const elementAudio = event.target.firstElementChild;
        elementAudio.play();
        elementDiv.style.background = (`url('transparent_button_pressed.png.pagespeed.ce.aQzxIVJ9pw.png') no-repeat`);
        elementDiv.style.backgroundColor = (`green`);
    });

    const efeitos = document.querySelectorAll('.efeito');
    efeitos.forEach((efeito) => {
        efeito.addEventListener('mouseup', (event) => {
            const elementDiv = event.target;
            elementDiv.style.background = (`url('transparent_button_normal.png.pagespeed.ce._PQuVSQuHh.png') no-repeat`);
            elementDiv.style.backgroundColor = (`green`);
        });
    });
}

criarHeader();
criarContainer();
criarBotoes();
criarEventos();