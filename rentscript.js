document.addEventListener('DOMContentLoaded', () => {
    const rentList = document.getElementById('rentList');
    const rentForm = document.getElementById('rentForm');
  
    let rentItems = [];
  
    rentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('rentName').value;
      const price = document.getElementById('rentPrice').value;
      const availability = document.getElementById('rentAvailability').value;
      const imageInput = document.getElementById('rentImage');
      const imageFile = imageInput.files[0];
  
      if (!imageFile) return;
  
      const reader = new FileReader();
      reader.onload = function () {
        const newItem = {
          name,
          price,
          availability,
          image: reader.result
        };
        rentItems.push(newItem);
        displayRentItems();
        rentForm.reset();
      };
      reader.readAsDataURL(imageFile);
    });
  
    function displayRentItems() {
      rentList.innerHTML = '';
      rentItems.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product-card';
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>₹${item.price} / day</p>
          <p>Available: ${item.availability}</p>
          <button class="btn">Request Rent</button>
        `;
        rentList.appendChild(itemDiv);
      });
    }
  });
  