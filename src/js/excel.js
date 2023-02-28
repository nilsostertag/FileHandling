//import xlsx lib


//create sheet selection
function handleSheets(workbook) {
    let i = 0;
    const sheetNames = document.createElement('select');
    sheetNames.className = 'sheetNames';
    workbook.SheetNames.forEach(element => {
        var option = document.createElement('option');
        option.value = SheetNames[i];
        option.text = SheetNames[i];
        
        sheetNames.appendChild(sheetName);

        i++;
    });
    workspace.appendChild(sheetNames);
}

//processing excel file
function processExcelFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        console.log(workbook.SheetNames);
        handleSheets(workbook);
        console.log('file processed!');
    }
}

//Add eventlistener to input field
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', e => {
    console.log('Input detected!');
    const workspace = document.createElement('div');
    workspace.className = 'workspace';
    const file = e.target.files[0];
    processExcelFile(file);
});