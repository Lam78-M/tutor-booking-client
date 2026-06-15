# 🎓 MediQueue – Tutor Booking System

MediQueue is a full-stack tutor booking web application where students can register, log in, browse tutors, and book learning sessions easily. The system helps users manage tutoring schedules efficiently with automatic slot management and booking control.

---

## 🌐 Live Website
👉 https://mediqueue-tutur-client.vercel.app

---

## 🚀 Features

- 🔐 User Authentication (Email/Password + Google Login)
- 👨‍🏫 Browse and Search Tutors
- ➕ Add Tutor (Private Route)
- 📅 Book Tutor Sessions with slot validation
- ❌ Cancel Booked Sessions
- 🧑 My Tutors Management (Edit & Delete)
- 📊 My Booked Sessions (User-specific)
- 🌙 Dark / Light Theme Support
- 🔎 Search & Filter Tutors (Name + Date range)
- ⚡ Dynamic Routing with Protected Pages
- 🔔 Toast Notifications for all actions
- 📱 Fully Responsive UI (Mobile, Tablet, Desktop)

---

## 🛠️ Tech Stack

### Frontend:
- Next.js
- React.js
- Tailwind CSS
- Framer Motion
- React Hot Toast
- HeroUI

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 🔐 Authentication System

- Email & Password Login
- Google Social Login
- JWT token stored on client side
- Protected routes implemented for private pages

---

## 📌 Main Pages

- 🏠 Home Page (Public)
- 👨‍🏫 Tutors Page
- ➕ Add Tutor (Private)
- 📚 Tutor Details Page (Private)
- 📅 Book Session Page (Private)
- 📋 My Tutors (Private)
- 📊 My Booked Sessions (Private)
- 🔑 Login / Register Pages

---

## ⚙️ Core Functionalities

### 🧑 Tutor Management
- Add new tutors with full details
- Update tutor info via modal
- Delete tutor with confirmation

### 📅 Booking System
- Book tutor sessions with validation
- Auto decrease available slots
- Prevent booking if slots = 0
- Prevent booking before session date

### 🔎 Search & Filter
- Search tutors by name (case-insensitive)
- Filter tutors by date range

---

## 💡 Project Highlights

- Clean UI with modern design
- Fully responsive layout
- Secure authentication system
- Real-time state updates
- Smooth user experience
- Error handling with toast messages

---

## 📦 Installation

### Clone the repo
```bash
client-side-repo: https://github.com/Lam78-M/tutor-booking-client

server-side-repo: https://github.com/Lam78-M/tutor-booking-server