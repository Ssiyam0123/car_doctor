# Car Doctor - Premium Car Servicing & Appointment Platform

### 🔗 [Live Demo](https://car-doctor-siyam.vercel.app/)

Car Doctor is a premium Next.js 15 application designed for automotive repair shops to showcase their services, manage customer bookings, and handle administrator control. It uses a modern dark-mode UI/UX aesthetic, styled with TailwindCSS and DaisyUI, and integrated with NextAuth session management and MongoDB Atlas.

---

## 🚀 Key Features

- **Dynamic Service Catalog**: Displays available repair services, descriptions, and pricing from MongoDB.
- **Appointment Booking Flow**: Integrated checkout page allowing customers to request servicing times and details.
- **Admin Bookings Dashboard**: Secure dashboard at `/admin/bookings` allowing administrators to approve, decline, or delete appointments.
- **User Role Management**: Secure panel at `/admin/users` to view registered system users and elevate/demote accounts (e.g. promoting to `admin`).
- **NextAuth Integration**: Secure credential sign-in and session propagation with roles.
- **Database Seeding**: Ready-to-use seeding script to populate users and packages instantly.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Styling**: TailwindCSS + DaisyUI
- **Database**: MongoDB (Raw Driver)
- **Authentication**: NextAuth (JWT Session Strategy)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following keys:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/car-doctor?retryWrites=true&w=majority
DB_NAME=car-doctor
NEXTAUTH_SECRET=your_nextauth_jwt_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---

## 💻 Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/siyam-io/car_doctor.git
   cd car_doctor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Seed the database:**
   ```bash
   node scratch/seed.js
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🌐 Deploying on Vercel

Since this project is connected to GitHub, you can deploy it directly via the Vercel Dashboard with automatic CD:

1. Go to [vercel.com](https://vercel.com) and click **"Add New"** > **"Project"**.
2. Select your cloned GitHub repository `car_doctor` and click **"Import"**.
3. Under **"Environment Variables"**, configure the following keys:
   - `MONGO_URI` (your MongoDB Atlas connection string)
   - `DB_NAME` (`car-doctor`)
   - `NEXTAUTH_SECRET` (a secure random string)
   - `NEXTAUTH_URL` (your live deployment URL, e.g. `https://car-doctor-siyam.vercel.app`)
4. Click **"Deploy"**. Vercel will automatically compile the project and build it.
