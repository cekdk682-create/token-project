function navigateToSettings() {
    const main = document.getElementById('mainPage');
    const settings = document.getElementById('settingsPage');

    console.log("Main Page:", main);
    console.log("Settings Page:", settings);

    if (!main) {
        console.error("ОШИБКА: Элемент с id='mainPage' не найден в HTML!");
        alert("Браузер не нашел id='mainPage'. Проверь HTML!");
        return;
    }
    
    if (!settings) {
        console.error("ОШИБКА: Элемент с id='settingsPage' не найден в HTML!");
        alert("Браузер не нашел id='settingsPage'. Проверь HTML!");
        return;
    }

    main.classList.add('moved-left');     
    settings.classList.add('active');     
}

function navigateBackToMain() {
    const main = document.getElementById('mainPage');
    const settings = document.getElementById('settingsPage');

    if (main && settings) {
        main.classList.remove('moved-left');  
        settings.classList.remove('active');  
    }
}

async function handleIosGenerate() {
    const block = document.getElementById('iosResult');
    const txt = document.getElementById('rawToken');

    const backendUrl = 'http://192.168.1'


    try {
        let response = await fetch(backendUrl, { method: 'POST' });

        if (!response.ok) {
            alert('Server answered with error code: ' + response.status);
            return;
        }

        let data = await response.json();

        if (data.token) {
            txt.innerText = data.token;
            block.style.display = 'block';
        }
    } catch(e) {
        alert('Error: ' + e.message);
    }
}