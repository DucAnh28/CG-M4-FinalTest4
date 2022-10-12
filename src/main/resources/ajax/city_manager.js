function showALlCity() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api-city",
        success: function (data) {
            let content = "";
            content += `<tr>
           <td>${data.id}</td>
           <td>${data.name}</td>
           <td>${data.country}</td>
           <td><a href="">EDIT</td>
           <td><a href="">DELETE</td>
           <tr>`
        }
    })
    event.preventDefault();
}

showALlCity();