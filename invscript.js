function getTotal() {
    let price = document.querySelector('#price').value;
    let quantity = document.querySelector('#quantity').value;
    if (isNaN(price) || isNaN(quantity)) {
        alert("Quantity and Price must be valid numbers");
    } else {
        let total = parseFloat(price * quantity);
        document.querySelector('#total').value = total.toFixed(2);
    }
}

function addInventory() {
    let totalinventory = JSON.parse(localStorage.getItem("totalinventory")) || [];

    let product = document.querySelector('#product').value;
    let price = document.querySelector('#price').value;
    let quantity = document.querySelector('#quantity').value;

    if (!product) {
        alert("Please enter a product");
    } else if (!price || isNaN(price)) {
        alert("Enter a valid price");
    } else if (!quantity || isNaN(quantity)) {
        alert("Enter a valid quantity");
    } else {
        let total = (parseFloat(price) * parseFloat(quantity)).toFixed(2);
        let newInventory = { product, price, quantity, total };
        totalinventory.push(newInventory);
        localStorage.setItem("totalinventory", JSON.stringify(totalinventory));
        window.location.reload();
    }
}

function getGrandTotal() {
    let grandTotal = 0;
    let totalinventory = JSON.parse(localStorage.getItem("totalinventory"));
    if (totalinventory) {
        totalinventory.forEach(item => {
            grandTotal += parseFloat(item.total);
        });
    }
    document.querySelector('#grandTotal').innerHTML = grandTotal.toFixed(2);
}

function showInvent() {
    getGrandTotal();
    let totalinventory = JSON.parse(localStorage.getItem("totalinventory"));
    if (totalinventory) {
        let table = document.querySelector('#inventoryTable');
        for (let index = 0; index < totalinventory.length; index++) {
            let row = table.insertRow(1);
            row.insertCell(0).innerHTML = totalinventory[index].product;
            row.insertCell(1).innerHTML = totalinventory[index].price;
            row.insertCell(2).innerHTML = totalinventory[index].quantity;
            row.insertCell(3).innerHTML = totalinventory[index].total;

            let actionCell = row.insertCell(4);

            // Delete button
            let deleteBtn = document.createElement('input');
            deleteBtn.type = "button";
            deleteBtn.value = "Delete";
            deleteBtn.onclick = () => {
                if (confirm("Do you want to delete this item?")) {
                    totalinventory.splice(index, 1);
                    localStorage.setItem("totalinventory", JSON.stringify(totalinventory));
                    window.location.reload();
                }
            };

            // Sell input
            let sellInput = document.createElement('input');
            sellInput.type = "number";
            sellInput.min = "1";
            sellInput.placeholder = "Qty";
            sellInput.style.width = "50px";
            sellInput.style.margin = "5px";

            // Sell button
            let sellBtn = document.createElement('input');
            sellBtn.type = "button";
            sellBtn.value = "Sell";
            sellBtn.onclick = () => {
                let sellQty = parseInt(sellInput.value);
                if (!sellQty || sellQty <= 0) {
                    alert("Please enter a valid quantity to sell.");
                    return;
                }
                if (sellQty > totalinventory[index].quantity) {
                    alert("Not enough stock available!");
                    return;
                }

                totalinventory[index].quantity -= sellQty;

                let earnings = sellQty * totalinventory[index].price;

                let salesData = JSON.parse(localStorage.getItem("salesReport")) || [];
                salesData.push({
                    product: totalinventory[index].product,
                    quantitySold: sellQty,
                    totalEarnings: earnings
                });
                localStorage.setItem("salesReport", JSON.stringify(salesData));

                totalinventory[index].total = (totalinventory[index].quantity * totalinventory[index].price).toFixed(2);

                if (totalinventory[index].quantity == 0) {
                    totalinventory.splice(index, 1);
                }

                localStorage.setItem("totalinventory", JSON.stringify(totalinventory));
                window.location.reload();
            };

            actionCell.appendChild(deleteBtn);
            actionCell.appendChild(sellInput);
            actionCell.appendChild(sellBtn);
        }
    }
}

function clearInventory() {
    if (confirm("Do you want to clear all your inventory data? This action cannot be undone.")) {
        localStorage.removeItem("totalinventory");
        localStorage.removeItem("salesReport");
        window.location.reload();
    }
}

function getDate() {
    let today = new Date();
    return today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() +
        ' ' + today.getHours() + ":" + today.getMinutes();
}

function printData() {
    let divContents = document.getElementById("allInventory").innerHTML;
    let printWindow = window.open('', '', 'height=1000,width=1000');
    printWindow.document.write('<html><head><title>Print Inventory</title></head><body>');
    printWindow.document.write('<h1>Your Inventory Records as at: ' + getDate() + '</h1><br>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

showInvent();
