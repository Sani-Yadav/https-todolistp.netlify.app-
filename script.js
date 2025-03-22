
var count = 1;

function AddRows() {
    var element = document.getElementById('tablecontainer');
    element.innerHTML += `
        <tr id="row_${count}" class="item">
            <td>
                <select onchange="ToggleState(this, ${count})">
                    <option value="">Please choose country</option>
                    <option value="1">India</option>
                    <option value="2">America</option>
                </select>
            </td>
            <td>
                <select id="state_${count}" onchange="ToggleCity(this, ${count})">
                    <option value="">Please choose state</option>
                </select>
            </td>
            <td>
                <select id="city_${count}">
                    <option value="">Please choose city</option>
                </select>
            </td>
            <td>
                <button class="clone" onclick="RemoveRow(${count})" type="button">Remove</button>
            </td>
        </tr>
    `;
    count++;
}

function RemoveRow(id) {
    var row = document.getElementById('row_' + id);
    if (row) {
        row.remove();
    }
}

function ToggleState(country, row) {
    var country_id = country.value;
    var stateElement = document.getElementById('state_' + row);
    var options = '<option value="">Please choose state</option>';

    if (country_id == 1) {
        options += `
            <option value="1">Uttar Pradesh</option>
            <option value="2">Bihar </option>

        `;
    } else if (country_id == 2) {
        options += `
            <option value="3">California</option>
            <option value="4">Texas</option>
        `;
    }

    stateElement.innerHTML = options;
}

function ToggleCity(state, row) {
    var state_id = state.value;
    var cityElement = document.getElementById('city_' + row);
    var options = '<option value="">Please choose city</option>';

    if (state_id == 1) {
        options += `
            <option value="1">Lucknow</option>
            <option value="2">Varanasi</option>
            <option value="3">Sultanpur</option>
           


        `;
    } else if (state_id == 2) {
        options += `
            
            <option value="3">Bhopal</option>
            <option value="4">Indore</option>
            <option value="5">patna</option>
        `;
    } else if (state_id == 3) {
        options += `
            <option value="5">Los Angeles</option>
            <option value="6">San Francisco</option>
        `;
    } else if (state_id == 4) {
        options += `
            <option value="7">Houston</option>
            <option value="8">Dallas</option>
        `;
    }

    cityElement.innerHTML = options;
}
