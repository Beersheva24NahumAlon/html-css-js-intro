/* <tr>
<th># order</th>
<th>name</th>
<th>coffee type</th>
<th>take away</th>
<th>price</th>
</tr> */

let id = 100;

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
            <td>${id++}</td>
            <td>${recordObj.name}</td>
            <td>${recordObj.coffeeType}</td>
            <td>${checkBoxOutput(recordObj.takeAway)}</td>
            <td>${recordObj.price}</td>
        </tr>
    `;
}

function checkBoxOutput(checkBox) {
    res = ""
    if (checkBox == "on") {
        res = "&#9745";
    }
    return res;
}
