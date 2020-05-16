function getFetch() {
    fetch('http://localhost:3000/server/test')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

function postFetch() {
    let formData = new FormData();

    formData.append('title', 'imagen 1');
    formData.append('mensaje', 'post data');

    fetch('http://localhost:3000/server/images', {
        method: "POST",
        body: formData
    })
        .then(response => console.log(response))
        .catch(error => console.log(error));
}