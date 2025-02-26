// ------------------------------------- CARRITO 01 ---------------------------------------------------------
// Run in snippet console.

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js';
document.head.appendChild(script);

script.onload = function() {
    const button = document.createElement('button');
    button.textContent = 'Generar Excel y Moverme';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)'; 
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px'; 
    button.style.cursor = 'pointer';

    document.body.appendChild(button); 

    let isDragging = false; 
    let offsetX, offsetY;

    // Event
    button.addEventListener('mousedown', (e) => {
        if (e.button === 2) { 
            isDragging = true;
            offsetX = e.clientX - button.getBoundingClientRect().left; 
            offsetY = e.clientY - button.getBoundingClientRect().top; 
        }
    });

    // Event
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const newX = e.clientX - offsetX; 
            const newY = e.clientY - offsetY; 
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    });

    // Event
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    button.addEventListener('click', () => {
        const elementosDisponibles = document.querySelectorAll('[data-goods-status="sku_switch_available"], [data-goods-status="sku_switch_unavailable"]');
        let total = 0; 
        let precios = []; 

        elementosDisponibles.forEach((elemento, index) => {
            const precioEntero = elemento.getElementsByClassName("price-amount-decimal")[0].getElementsByClassName("price-amount")[0].textContent;
            const precioDecimal = elemento.getElementsByClassName("price-amount-decimal")[0].getElementsByClassName("price-decimal")[0].textContent;
            const precioCompleto = parseFloat(`${precioEntero}.${precioDecimal}`);
            
            const estado = elemento.getAttribute('data-goods-status');
            console.log(`Elemento [${index}] (${estado}): ${precioCompleto}`); 
            
            total += precioCompleto; 
            precios.push(precioCompleto); 
        });

        console.log(`Total: ${total}`);

        function exportarExcel() {
            const ws = XLSX.utils.json_to_sheet(precios.map((precio) => ({ 'Precio': precio })));
            const wb = XLSX.utils.book_new(); 
            XLSX.utils.book_append_sheet(wb, ws, 'Precios'); 
            XLSX.writeFile(wb, 'precios.xlsx'); 
        }

        exportarExcel();
    });
};

// ---------------------------  CARRITO COMPRA 02 [OPTIONAL] -----------------------------------------------------------------------------------------

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js';
document.head.appendChild(script);

script.onload = function() {
    const button = document.createElement('button');
    button.textContent = 'Generar Excel y Moverme';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.padding = '10px 20px'; 
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer'; 

    document.body.appendChild(button); 

    let isDragging = false; 
    let offsetX, offsetY;

    // Event
    button.addEventListener('mousedown', (e) => {
        if (e.button === 2) {
            isDragging = true;
            offsetX = e.clientX - button.getBoundingClientRect().left;
            offsetY = e.clientY - button.getBoundingClientRect().top; 
        }
    });

    // Event
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const newX = e.clientX - offsetX; 
            const newY = e.clientY - offsetY;
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false; 
    });

    button.addEventListener('click', () => {
        const spanElementos = document.querySelectorAll('span.checkout-shopping-bag__price-detail');
        let precios = [];
        spanElementos.forEach((spanElemento) => {
            const text = spanElemento.textContent.trim(); 
            const precioNumerico = parseFloat(text.replace('$', '').trim()); 
            precios.push(precioNumerico); 
        });

        console.log("Precios encontrados:", precios);

        function exportarExcel() {
            const ws = XLSX.utils.json_to_sheet(precios.map((precio) => ({ 'Precio': precio }))); 
            const wb = XLSX.utils.book_new(); 
            XLSX.utils.book_append_sheet(wb, ws, 'Precios'); 
            XLSX.writeFile(wb, 'precios.xlsx');
        }

        exportarExcel();
    });
};
