const id = 100;

const formEl = document.getElementById("formId");
formEl.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const recordObj = Object.fromEntries(formData);
    addRecordToTable(recordObj);
});

function addRecordToTable(recordObj) {
    document.getElementById("tbodyId").innerHTML += getHtmlRecord(recordObj);
}

function getHtmlRecord(recordObj) {
    return `
        <tr>
            <td>${recordObj.id}</td>
            <td>${recordObj.name}</td>
            <td>${recordObj.department}</td>
            <td>${recordObj.salary}</td>
        </tr>
    `;
}