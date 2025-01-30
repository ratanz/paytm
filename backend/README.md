# Paytm Backend

A robust Node.js backend for a payment application similar to Paytm, featuring user authentication, account management, and secure money transfer capabilities.

## 🚀 Features

- User authentication (signup/signin) with JWT
- Account balance management
- Secure money transfers between users
- User search functionality
- Password hashing with bcrypt
- Input validation using Zod
- MongoDB with Mongoose for data persistence
- CORS enabled for frontend integration

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Input Validation**: Zod
- **Development**: Nodemon

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ratanz/paytm.git
   cd paytm/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Update the `.env` file with your configurations:
     ```env
     MONGODB_URL=your_mongodb_url
     JWT_SECRET=your_jwt_secret
     PORT=3000
     FRONTEND_URL=http://localhost:5173
     ```

4. **Start the server**
   - Development mode:
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

## 📚 API Documentation

### Authentication Endpoints

#### 1. User Signup
- **Endpoint**: `POST /api/v1/user/signup`
- **Description**: Register a new user and create their account
- **Request Body**:
  ```json
  {
    "username": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "password": "securepassword"
  }
  ```
- **Success Response**: 
  ```json
  {
    "message": "User created successfully",
    "token": "jwt_token_here"
  }
  ```
- **Error Response**:
  - Status: 411
    ```json
    {
      "message": "Email already taken / Incorrect inputs"
    }
    ```

#### 2. User Signin
- **Endpoint**: `POST /api/v1/user/signin`
- **Description**: Authenticate existing user
- **Request Body**:
  ```json
  {
    "username": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Success Response**:
  ```json
  {
    "username": "user@example.com",
    "token": "jwt_token_here"
  }
  ```
- **Error Responses**:
  - Status: 411 (User not found)
    ```json
    {
      "message": "User not found"
    }
    ```
  - Status: 411 (Invalid password)
    ```json
    {
      "message": "Invalid password"
    }
    ```
  - Status: 500 (Server error)
    ```json
    {
      "message": "Error while logging in"
    }
    ```

### Account Endpoints

#### 1. Get Balance
- **Endpoint**: `GET /api/v1/account/balance`
- **Description**: Get user's account balance
- **Authentication**: Required (Bearer Token)
- **Response**:
  ```json
  {
    "balance": 1000
  }
  ```

#### 2. Transfer Money
- **Endpoint**: `POST /api/v1/account/transfer`
- **Description**: Transfer money to another user
- **Authentication**: Required (Bearer Token)
- **Request Body**:
  ```json
  {
    "to": "recipient_user_id",
    "amount": 100
  }
  ```
- **Response**:
  ```json
  {
    "message": "Transfer successful"
  }
  ```

### User Management Endpoints

#### 1. Update User
- **Endpoint**: `PUT /api/v1/user`
- **Description**: Update user information
- **Authentication**: Required (Bearer Token)
- **Request Body**:
  ```json
  {
    "firstName": "Updated Name",
    "lastName": "Updated Last",
    "password": "newpassword"  // optional
  }
  ```
- **Success Response**:
  ```json
  {
    "message": "Updated successfully"
  }
  ```
- **Error Response**:
  - Status: 411
    ```json
    {
      "message": "Error while updating information"
    }
    ```

#### 2. Search Users
- **Endpoint**: `GET /api/v1/user/bulk?filter=search_term`
- **Description**: Search users by name (case-insensitive search on both firstName and lastName)
- **Query Parameters**: 
  - `filter`: Search term for user's name
- **Response**:
  ```json
  {
    "user": [
      {
        "username": "user@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "_id": "user_id"
      }
    ]
  }
  ```

## 📁 Project Structure

```
backend/
├── config.js           # Configuration variables
├── index.js           # Application entry point
├── middleware.js      # Authentication middleware
├── db/
│   └── db.js         # Database connection setup
├── models/
│   ├── User.js       # User model schema
│   └── Account.js    # Account model schema
├── routes/
│   ├── index.js      # Route aggregator
│   ├── user.js       # User routes
│   └── account.js    # Account routes
└── package.json      # Project dependencies
```

## 🔐 Security Features

1. **Password Security**:
   - Passwords are hashed using bcrypt before storage
   - Custom password comparison method for verification

2. **Authentication**:
   - JWT-based authentication
   - Token verification middleware
   - Protected routes

3. **Data Validation**:
   - Input validation using Zod schemas
   - Email format verification
   - Password length requirements

4. **Transaction Security**:
   - MongoDB transactions for money transfers
   - Balance verification before transfers
   - Atomic operations

## 💾 Database Schema

### User Collection
```javascript
{
  username: String,     // Email address (unique)
  password: String,     // Hashed password
  firstName: String,
  lastName: String
}
```

### Account Collection
```javascript
{
  userId: ObjectId,     // Reference to User
  balance: Number       // Account balance
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Error Handling

The API uses standard HTTP status codes:
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `411`: Length Required (Validation Errors)
- `500`: Internal Server Error

## 📝 License

This project is licensed under the ISC License.

## 🤝 Support

For support, email [your-email@example.com] or create an issue in the repository. 