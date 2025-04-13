# 🌾 FarmLife — Farm Equipment Rental & Booking Portal

**FarmLife** is a web application built to simplify the process of renting and booking agricultural equipment. It helps farmers list products and others to rent them for specific timeframes, improving accessibility and resource sharing within the farming community.

---

## 🚀 Features

- 📦 **List a Product** – Add product listings including price, availability, and contact info.
- 📅 **Book a Product** – Rent equipment by submitting a simple booking form.
- 📃 **CRUD Operations** – Full backend support to Create, Read, Update, and Delete product listings.
- 💬 **Responsive UI** – Clean and accessible frontend using HTML, CSS, and JavaScript.
- 🔗 **RESTful API** – Built with Node.js and Express, using MongoDB for data persistence.

---

## 🧠 Tech Stack

### 🔧 Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### 🎨 Frontend
- HTML5 + CSS3
- Vanilla JavaScript
- Responsive Design

---
## ⚙️ How to Run Locally

### 🛠 Backend

```bash
cd backend
npm install
npm run dev    # or node server.js

Ensure your MongoDB is running locally or provide a connection string in .env.

🌐 Frontend
Simply open frontend/lo_index.html in your browser.

🔗 API Endpoints
Method	Route	Description
GET	/api/products	Fetch all listed products
GET	/api/products/:id	Fetch a single product
POST	/api/products	Create a new listing
PUT	/api/products	Update a product
DELETE	/api/products	Delete a product
Adjust booking route accordingly (e.g., /api/bookings) for booking submissions.

📝 Future Improvements
✅ Image upload support

🔒 Authentication for users

🌍 Deploy frontend and backend on cloud

📱 Mobile app (React Native)

🙌 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to change.

📃 License
This project is licensed under the MIT License.

👨‍🌾 Made with ❤️ for Farmers
Empowering agriculture with digital solutions.
