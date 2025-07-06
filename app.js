let customerList = [];

function addCustomer(){
    let customer = {
    name : document.getElementById("name").value,
    address : document.getElementById("address").value,
    phone : document.getElementById("phone").value,
    email : document.getElementById("email").value

    }

    customerList.push(customer);
}