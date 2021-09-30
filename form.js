let areas = document.querySelectorAll('.contacts__form-input');
let form = document.querySelector('.contacts__form_items');
let button = document.querySelector('.contacts__form-btn');


button.onclick = function(evt) {
    evt.preventDefault()

    // const body = {
    //     email: form.elements.email.value,
    //     message: form.elements.message.value,
    // }
    // console.log(body)
    // fetch('#', {
    //     method: 'POST',
    //     headers: {
    //         "Origin": '#',
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body
    // })

    // debugger
    for (let area of areas) {

        // button.onclick = function() {
        area.value = '';
        // }
    }
}