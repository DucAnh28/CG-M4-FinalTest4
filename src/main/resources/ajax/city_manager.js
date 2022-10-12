function showALlCity() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api-city",
        success: function (data) {
            console.log(data)
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].country}</td>
                        <td>
                            <p data-placement="top" data-toggle="tooltip" title="Edit">
                                <button id="${data[i].id}" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal"
                                       onclick="showDetailForm(this)"
                                        data-target="#edit"><span class="glyphicon glyphicon-pencil"></span></button>
                            </p>
                        </td>
                        <td>
                            <p data-placement="top" data-toggle="tooltip" title="Delete">
                                <button id="${data[i].id}" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal"  onclick="deleteCity(this)"
                                        data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button>
                            </p>
                        </td>
                    </tr>`
            }
            document.getElementById("list").innerHTML = content;
        }
    })
}

showALlCity();

function showDetailForm(element) {
    let id = element.getAttribute("id");
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "get", url: "http://localhost:8080/api-city/" + id,
        success: function (data) {
            console.log(data);
            $('#edit-id').attr('value', `${data.id}`)
            $('#edit-name').attr('value', `${data.name}`)
            $('#edit-country').attr('value', `${data.country}`)
            $('#edit-area').attr('value', `${data.area}`)
            $('#edit-popu').attr('value', `${data.population}`)
            $('#edit-gdp').attr('value', `${data.gpa}`)
            $('#edit-description').val(`${data.description}`)
        }
    })
    event.preventDefault();
}

function createCity() {
    let name = $('#city-name').val();
    let country = $('#city-country').val();
    let area = $('#city-area').val();
    let population = $('#city-popu').val();
    let gdp = $('#city-gdp').val();
    let description = $('#city-description').val();
    let ob = {
        "name": name,
        "country": country,
        "area": area,
        "population": population,
        "description": description,
        "gpa": gdp
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(ob),
        url: "http://localhost:8080/api-city",
        success: function () {
            showALlCity();
        }
    })
}

function deleteCity(element) {
    let id = element.getAttribute("id");
    $.ajax({
        type: "delete",
        url: "http://localhost:8080/api-city/" + id,
        success: function (data) {
            console.log("Xoa thanh cong ");
            showALlCity();
        }
    })
    event.preventDefault();
}

function editCity(){
    let id = $('#edit-id').val();
    let name = $('#edit-name').val();
    let country = $('#edit-country').val();
    let area = $('#edit-area').val();
    let population = $('#edit-popu').val();
    let gdp = $('#edit-gdp').val();
    let description = $('#edit-description').val();
    let ob = {
        "name": name,
        "country": country,
        "area": area,
        "population": population,
        "description": description,
        "gpa": gdp
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(ob),
        url: "http://localhost:8080/api-city/"+id,
        success: function () {
            showALlCity();
        }
    })
}