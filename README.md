# 📝 Notes App

A full-stack Notes Management Application built using **Vite + React**, **FastAPI**, **Axios**, and **MySQL**.

The application provides complete CRUD functionality, allowing users to create, view, update, and delete notes through a simple and responsive interface.

## 🚀 Features

- ✨ Create new notes
- 📖 View all notes
- ✏️ Update existing notes
- 🗑️ Delete notes
- 💾 Persistent MySQL database storage
- ⚡ FastAPI REST API
- ⚛️ React frontend with Vite
- 🔗 Axios for frontend-backend communication
- 🔐 Environment variable support for database configuration
- 🌐 CORS support
- 📚 Interactive FastAPI Swagger documentation

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- JavaScript
- HTML
- CSS

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn
- PyMySQL

### Database

- MySQL

## 🏗️ Project Structure

```text
NOTES-APP-COMPLETE/
│
├── backend/
│   ├── .env.example
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── notesdb.sql
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## 🔄 Application Architecture

```text
┌──────────────────────┐
│     React + Vite     │
│      Frontend        │
└──────────┬───────────┘
           │
           │ Axios / HTTP
           ▼
┌──────────────────────┐
│       FastAPI        │
│       REST API       │
└──────────┬───────────┘
           │
           │ SQLAlchemy
           ▼
┌──────────────────────┐
│        MySQL         │
│       Database       │
└──────────────────────┘
```

## 📋 Prerequisites

Make sure the following are installed before running the project:

- Python 3.9+
- Node.js
- npm
- MySQL Server
- Git

Check your installations:

```bash
python --version
node --version
npm --version
mysql --version
```

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/kishancse024/Notes-App
```

Navigate into the project:

```bash
cd NOTES-APP-COMPLETE
```

# ⚙️ Backend Setup

### 2. Navigate to the Backend

```bash
cd backend
```

### 3. Create a Python Virtual Environment

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### macOS / Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

### 4. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

## 🗄️ MySQL Setup

Create the database using MySQL:

```sql
CREATE DATABASE IF NOT EXISTS notesdb;

USE notesdb;

CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL
);
```

You can also use the provided:

```text
backend/notesdb.sql
```

to create the database and table.

## 🔐 Environment Configuration

The application uses an environment variable for the MySQL connection.

Inside the `backend` folder, create:

```text
.env
```

Add your MySQL connection string:

```env
DATABASE_URL=mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/notesdb
```

Replace `YOUR_PASSWORD` with your local MySQL password.

**Never commit your actual `.env` file to GitHub.**

A safe example is provided as:

```text
.env.example
```

with:

```env
DATABASE_URL=mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/notesdb
```

## ▶️ Run the Backend

From the `backend` directory:

```bash
uvicorn main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

### 📚 API Documentation

FastAPI automatically provides interactive API documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

You can test all CRUD operations directly from Swagger UI.

# 💻 Frontend Setup

Open a new terminal.

### 1. Navigate to Frontend

From the project root:

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/notes` | Create a new note |
| GET | `/notes` | Get all notes |
| PUT | `/notes/{id}` | Update a note |
| DELETE | `/notes/{id}` | Delete a note |

## 📌 API Examples

### Create a Note

```http
POST /notes
```

Request body:

```json
{
    "title": "My First Note",
    "content": "This is my first note."
}
```

### Get All Notes

```http
GET /notes
```

### Update a Note

```http
PUT /notes/1
```

Request body:

```json
{
    "title": "Updated Note",
    "content": "Updated note content."
}
```

### Delete a Note

```http
DELETE /notes/1
```

## 🔌 Frontend and Backend Communication

The React frontend communicates with the FastAPI backend using Axios.

Example:

```javascript
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const response = await axios.get(`${API_URL}/notes`);
```

Create a note:

```javascript
await axios.post(`${API_URL}/notes`, {
    title,
    content
});
```

Update a note:

```javascript
await axios.put(`${API_URL}/notes/${id}`, {
    title,
    content
});
```

Delete a note:

```javascript
await axios.delete(`${API_URL}/notes/${id}`);
```

## 🔄 CRUD Workflow

```text
User
  │
  ▼
React Interface
  │
  ▼
Axios
  │
  ▼
FastAPI REST API
  │
  ▼
SQLAlchemy
  │
  ▼
MySQL
```

### Creating a Note

```text
User enters note
       ↓
React state
       ↓
Axios POST request
       ↓
FastAPI /notes
       ↓
SQLAlchemy
       ↓
MySQL
       ↓
Response
       ↓
React UI
```

## 🗃️ Database Model

The application uses a `notes` table:

| Column | Type | Description |
|--------|------|-------------|
| `id` | INT | Unique note identifier |
| `title` | VARCHAR(100) | Note title |
| `content` | TEXT | Note content |

## 🔒 Security

Sensitive configuration is kept outside the source code using environment variables.

The following files and directories should **not** be committed:

```text
.env
venv/
__pycache__/
node_modules/
dist/
```

The repository contains `.env.example` so that developers know which environment variables are required.

## 🧪 Testing the API

After starting the backend, visit:

```text
http://127.0.0.1:8000/docs
```

From Swagger UI you can test:

- Create notes
- Retrieve notes
- Update notes
- Delete notes

## 🎯 Learning Objectives

This project demonstrates practical full-stack development concepts including:

- React development
- Vite project setup
- REST API development
- FastAPI routing
- Axios HTTP requests
- SQLAlchemy ORM
- MySQL integration
- CRUD operations
- Pydantic validation
- CORS configuration
- Environment variable management
- Frontend-backend integration

## 🚀 Future Improvements

Possible future improvements include:

- 🔐 User authentication
- 👤 User-specific notes
- 🔎 Search functionality
- 🏷️ Note categories and tags
- 📌 Pin important notes
- 📝 Rich text editing
- 📄 Pagination
- 🧪 Automated backend and frontend tests
- 🐳 Docker support
- ☁️ Cloud deployment
- 📱 Improved responsive design

## 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

### 2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

### 3. Make your changes

### 4. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### 5. Push your branch

```bash
git push origin feature/new-feature
```

### 6. Create a Pull Request

Please provide a clear description of your changes when submitting a Pull Request.

## 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

## 👨‍💻 Author

**Kishan U**

A full-stack project demonstrating the integration of **React, FastAPI, Axios, SQLAlchemy, and MySQL** to build a functional Notes CRUD application.

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Contributions, suggestions, and improvements are welcome.
