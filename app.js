let customerList = [
    {
        name: "saman",
        address: "panadura",
        phone : "0773412334",
        email: "123@gmail.com"
    }
];

function addCustomer(){
    let customer = {
    name : document.getElementById("name").value,
    address : document.getElementById("address").value,
    phone : document.getElementById("phone").value,
    email : document.getElementById("email").value

    }

    customerList.push(customer);

    localStorage.setItem("customerList",JSON.stringify(customerList));
    let value = JSON.parse(localStorage.getItem("customerList"));
    console.log(value);
}