const table = document.querySelectorAll("table");
function getTableContents(table) {
    let tableParsed = [];
    for(let x = 0; x < table.rows[0].cells.length; x++) {
        tableParsed.push([]);
        for(let row of table.rows) {
            tableParsed[x].push(row.cells[x].innerText);
        }
    }
    return tableParsed;
}

for(let item of table) {
    console.log(getTableContents(item));
}