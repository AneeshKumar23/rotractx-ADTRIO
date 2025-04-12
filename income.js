document.addEventListener("DOMContentLoaded", () => {
    let salesData = JSON.parse(localStorage.getItem("salesReport")) || [];

    let tableBody = document.querySelector("#reportTable");
    let productSales = {};  // To store sales for the pie chart

    if (salesData.length > 0) {
        salesData.forEach(sale => {
            let row = document.createElement("tr");

            // Product Name
            let productCell = document.createElement("td");
            productCell.textContent = sale.product;

            // Quantity Sold
            let quantityCell = document.createElement("td");
            quantityCell.textContent = sale.quantitySold;

            // Total Earnings
            let earningsCell = document.createElement("td");
            earningsCell.textContent = `$${sale.totalEarnings}`;

            // Sale Date (new column)
            let dateCell = document.createElement("td");

            // Format the timestamp (assuming the timestamp is stored in sale.date)
            let saleDate = new Date(sale.date);
            let formattedDate = saleDate.toLocaleString(); // This will format the date and time in a readable format
            dateCell.textContent = formattedDate;

            // Append all cells to the row
            row.appendChild(productCell);
            row.appendChild(quantityCell);
            row.appendChild(earningsCell);
            tableBody.appendChild(row);

            // Store data for pie chart
            if (productSales[sale.product]) {
                productSales[sale.product] += sale.totalEarnings;
            } else {
                productSales[sale.product] = sale.totalEarnings;
            }
        });

        createPieChart(productSales);
    } else {
        tableBody.innerHTML = "<tr><td colspan='4' style='text-align:center;'>No sales data available.</td></tr>";
    }
});

// Function to create Pie Chart
function createPieChart(productSales) {
    let ctx = document.getElementById("salesPieChart").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(productSales),
            datasets: [{
                label: "Sales Distribution",
                data: Object.values(productSales),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"]
            }]
        }
    });
}
