# 🏥 GetCured — Doctor Appointment Booking Platform

**GetCured** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows patients to discover doctors, book appointments, and manage their health profiles. It features a dedicated Admin Panel for managing doctors and appointments, and integrates Razorpay for payment processing.

---

## 📸 Overview

| Module | Description |
|---|---|
| **Patient Frontend** | Browse doctors, book/cancel appointments, manage profile |
| **Admin Panel** | Manage doctors, view all appointments, dashboard analytics |
| **Backend API** | RESTful API with JWT authentication, Cloudinary, and Razorpay |

---

## 🚀 Tech Stack

### Frontend (Patient — `GetCured/`)
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM v7 | Client-side routing |
| Axios | HTTP client |
| Tailwind CSS v4 | Styling |
| React Toastify | Notifications |
| Vite | Build tool & dev server |

### Frontend (Admin — `admin/`)
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM v7 | Client-side routing |
| Axios | HTTP client |
| Tailwind CSS v4 | Styling |
| React Toastify | Notifications |
| Vite | Build tool & dev server |

### Backend (`backend/`)
| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server & REST API |
| MongoDB + Mongoose | Database & ODM |
| bcrypt | Password hashing |
| JSON Web Token (JWT) | Authentication |
| Cloudinary | Image upload & storage |
| Multer | File upload middleware |
| Razorpay | Payment gateway |
| dotenv | Environment variable management |
| Nodemon | Development server auto-restart |

---

## 📁 Project Structure

```
Project/
├── GetCured/               # Patient-facing frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Images, icons, and static assets
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── TopDoctors.jsx
│   │   │   ├── SpecialityMenu.jsx
│   │   │   └── RelatedDoctors.jsx
│   │   ├── context/        # React Context (AppContext)
│   │   ├── pages/          # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── admin/                  # Admin panel frontend
│   ├── src/
│   │   ├── components/     # Navbar, Sidebar
│   │   ├── context/        # AdminContext, DoctorContext, AppContext
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── AllAppointments.jsx
│   │   │       ├── AddDoctor.jsx
│   │   │       └── DoctorsList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
└── backend/                # Express.js REST API
    ├── config/
    │   ├── mongodb.js      # MongoDB connection
    │   └── cloudinary.js   # Cloudinary configuration
    ├── controllers/
    │   ├── adminController.js
    │   ├── doctorController.js
    │   └── userController.js
    ├── middleware/
    │   ├── authAdmin.js
    │   ├── authUser.js
    │   └── multer.js
    ├── models/
    │   ├── userModel.js
    │   ├── doctorModel.js
    │   └── appointmentModel.js
    ├── routes/
    │   ├── adminRoute.js
    │   ├── doctorRoute.js
    │   └── userRoute.js
    ├── .env
    ├── server.js
    └── package.json
```

---

## ✨ Features

### 👤 Patient
- **Register & Login** with secure JWT-based authentication
- **Browse Doctors** by speciality (General Physician, Gynecologist, Dermatologist, Pediatrician, Neurologist, Gastroenterologist)
- **Book Appointments** with available doctors by selecting a date and time slot
- **Cancel Appointments** and get information on cancellation policies
- **Online Payment** via Razorpay payment gateway (INR)
- **My Profile** — View and edit personal info, profile photo, address, gender, and date of birth
- **My Appointments** — View all upcoming and past appointments

### 🔐 Admin
- **Secure Login** with admin credentials via JWT
- **Dashboard** with summary statistics (doctors count, appointments, patients)
- **Add Doctor** — Upload doctor profile with image (Cloudinary), speciality, degree, fees, experience, and availability
- **Doctors List** — View all registered doctors and toggle their availability
- **All Appointments** — View and manage all booked appointments across the platform

---

## 🔌 API Endpoints

### Admin Routes — `/api/admin`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/login` | Admin login | — |
| POST | `/add-Doctor` | Add a new doctor | Admin JWT |
| POST | `/all-doctors` | Get all doctors | Admin JWT |
| POST | `/change-availability` | Toggle doctor availability | Admin JWT |

### Doctor Routes — `/api/doctor`
| Method | Endpoint | Description |
|---|---|---|
| (See doctorRoute.js for full detail) | | |

### User Routes — `/api/user`
| Method | Endpoint | Description |
|---|---|---|
| (See userRoute.js for full detail) | | |

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

ADMIN_EMAIL=admin@getcured.com
ADMIN_PASSWORD=admin@123

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
```

### Patient Frontend (`GetCured/.env`)
```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin Frontend (`admin/.env`)
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)
- [Cloudinary](https://cloudinary.com/) account
- [Razorpay](https://razorpay.com/) account (optional, for payment features)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/getcured.git
cd getcured
```

---

### 2️⃣ Setup & Run the Backend

```bash
cd backend
npm install
```

Create a `.env` file (see [Environment Variables](#️-environment-variables) above), then run:

```bash
# Development (with auto-restart)
npm run server

# Production
npm start
```

> Backend will start on **http://localhost:4000**

---

### 3️⃣ Setup & Run the Patient Frontend

```bash
cd GetCured
npm install
npm run dev
```

> App will run on **http://localhost:5173**

---

### 4️⃣ Setup & Run the Admin Panel

```bash
cd admin
npm install
npm run dev
```

> Admin panel will run on **http://localhost:5174** (or next available port)

---

## 🗄️ Database Models

### User
| Field | Type | Description |
|---|---|---|
| name | String | Full name (required) |
| email | String | Unique email address (required) |
| password | String | Hashed password (required) |
| image | String | Profile image (base64 default avatar) |
| address | Object | `{ line1, line2 }` |
| gender | String | Default: `"Not Selected"` |
| dob | String | Date of birth, default: `"Not Selected"` |
| phone | String | Default: `"0000000000"` |

### Doctor
| Field | Type | Description |
|---|---|---|
| name | String | Full name (required) |
| email | String | Unique email address (required) |
| password | String | Hashed password (required) |
| image | String | Cloudinary image URL (required) |
| speciality | String | Medical speciality (required) |
| degree | String | Medical degree (required) |
| experience | String | Years of experience (required) |
| about | String | Doctor bio (required) |
| available | Boolean | Availability status (default: true) |
| fees | Number | Consultation fee (required) |
| address | Object | Clinic address (required) |
| slots_booked | Object | Map of booked slots per date |

### Appointment
| Field | Type | Description |
|---|---|---|
| (see `appointmentModel.js` for full schema) | | |

---

## 🧭 Routes (Patient Frontend)

| Path | Page |
|---|---|
| `/` | Home |
| `/doctors` | All Doctors |
| `/doctors/:speciality` | Doctors by Speciality |
| `/appointment/:docId` | Book Appointment |
| `/my-appointments` | My Appointments (auth required) |
| `/my-profile` | User Profile (auth required) |
| `/login` | Login / Register |
| `/about` | About Us |
| `/contact` | Contact Page |

---

## 🧭 Routes (Admin Panel)

| Path | Page |
|---|---|
| `/admin-dashboard` | Dashboard |
| `/all-appointments` | All Appointments |
| `/add-doctor` | Add Doctor |
| `/doctors-list` | Manage Doctors |

---

## 🔒 Authentication

- **Patient auth** uses JWT stored client-side; protected routes verify the token via `authUser` middleware.
- **Admin auth** uses a separate JWT; protected routes verify via `authAdmin` middleware.
- Passwords are hashed using **bcrypt** before being stored in MongoDB.

---

## 📦 Scripts Summary

| Location | Command | Action |
|---|---|---|
| `backend/` | `npm run server` | Start backend with nodemon |
| `backend/` | `npm start` | Start backend with node |
| `GetCured/` | `npm run dev` | Start patient frontend |
| `GetCured/` | `npm run build` | Build patient frontend for production |
| `admin/` | `npm run dev` | Start admin panel |
| `admin/` | `npm run build` | Build admin panel for production |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Abhiram** — Full-Stack Developer

> Built with ❤️ using the MERN Stack
