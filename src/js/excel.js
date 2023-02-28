import XLSX from 'xlsx';

function handleSheets(workbook) {
    let i = 0;
    const sheetNames = document.createElement('div');
    sheetNames.className = 'sheetNames';
    workbook.SheetNames.forEach(element => {
        const sheetName = document.createElement('div');
        sheetName.className = SheetNames[i];
        sheetName.innerText = SheetNames[i];
        
        sheetNames.appendChild(sheetName);
        workspace.appendChild(sheetNames);

        i++;
    });
}

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