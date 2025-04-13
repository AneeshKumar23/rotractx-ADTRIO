# 🌾 FarmLife — Farm Equipment Rental & Smart Farming Portal

**FarmLife** is a comprehensive web application built to empower farmers by providing digital tools for renting agricultural equipment, accessing loan eligibility, managing inventory, planning crops, and diagnosing crop and cattle diseases. It aims to make farming smarter, easier, and more efficient for all.

---

## 🚀 Key Features

### 📦 Equipment Rental & Booking
- Add product listings including availability, price, and contact details.
- Rent any equipment by submitting a simple booking form.
- Full backend support for Create, Read, Update, and Delete product listings.

### 🏦 Loan Eligibility Checker
- A dedicated page where farmers can input their details to discover loans they are eligible for.
- Smart filters based on landholding, income, and purpose of the loan.

### 📊 Inventory Management
- Maintain a list of farming equipment and tools owned.
- Track usage and status of each item.
- Helps avoid rental dependency if equipment is available internally.

### 🗓 Crop Calendar
- Plan sowing, irrigation, and harvesting schedules based on regional data.
- Receive reminders and optimized dates according to the selected district.

### 🧪 District-Based Soil Classification
- Select your district to view its soil type and properties.
- Get personalized crop suggestions based on soil suitability.

### 🌱 Crop Recommendation Engine
- Based on soil type, climate, and season — the system recommends crops that are optimal for the region.

### 🐛 Crop Disease Classification
- Upload images or provide symptoms to detect diseases using classification models.
- Get remedies, pesticide suggestions, and prevention tips.

### 🐄 Cattle Disease Diagnosis
- Submit cattle health symptoms to get possible diseases and treatment guidance.
- Supports common livestock like cows, goats, buffaloes, etc.
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
