# Learning Books

A simple **Next.js 16 + Firebase** project for managing books online. Users can browse, add, view, and delete books. Authentication is done using Firebase Authentication, and data is stored in Firebase Firestore.

---

## Features

- User authentication (Email & Google)
- Add, view, and delete books
- Protected routes for logged-in users
- Responsive layout (mobile, tablet, desktop)
- Clean UI using Tailwind CSS

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/learning-books.git
cd learning-books
Install dependencies

bash
Copy code
npm install
Setup Firebase

Go to Firebase Console and create a project

Enable Authentication (Email/Password + Google)

Create a Firestore Database

Enable Storage (optional if uploading book images)

Copy your Firebase config

Create .env.local file

Create a .env.local file in the root directory:

ini
Copy code
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
Make sure .env.local is added to .gitignore to keep your credentials safe.

Run the project

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser.

Route Summary
Route	Description	Protected?
/	Home page	No
/allBooks	List all books	No
/addBook	Add a new book	Yes
/manageBooks	Manage all books (view/delete)	Yes
/books/[id]	View single book details	Yes
/login	User login page	No
/register	User registration page	No
/dashboard	User dashboard (optional)	Yes
/profile	User profile page	Yes
/about	About page	No

Technologies Used
Next.js 16

React

Firebase (Authentication, Firestore, Storage)

Tailwind CSS

React Hot Toast / React Toastify for notifications

