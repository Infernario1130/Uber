# API Documentation

## POST /users/register

**Description:**  
Registers a new user. The endpoint validates incoming data, hashes the password, creates a user record, and returns a JSON Web Token (JWT) for authentication.

**Required Data:**  
- **firstName** (string): Must be provided and be at least 4 characters long.  
- **lastName** (string): Optional, but if provided must be at least 5 characters long.  
- **email** (string): Must be a valid email and provided.  
- **password** (string): Must be provided and at least 6 characters long.

**Status Codes:**  
- **201 Created:** Successful registration. Returns a token and user information.  
- **400 Bad Request:** Validation errors or missing required fields.

**Example Request Body:**  
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Example Successful Response (201):**  
```json
{
  "token": "jwt_token_string",
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
    // ... additional user fields ...
  }
}
```

## POST /users/login

**Description:**  
Logs in an existing user. The endpoint validates incoming data, verifies the password against the stored hash, and returns a JSON Web Token (JWT) along with the user information for authentication.

**Required Data:**  
- **email** (string): Must be a valid email and provided.  
- **password** (string): Must be provided and at least 6 characters long.

**Status Codes:**  
- **200 OK:** Successful login. Returns a token and user information.  
- **400 Bad Request:** Validation errors or missing required fields.

**Example Request Body:**  
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Example Successful Response (200):**  
```json
{
  "token": "jwt_token_string",
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
    // ... additional user fields ...
  }
}
```

## GET /users/profile

**Description:**  
Returns the authenticated user’s profile details.  
**Authentication:** Required (JWT).  
**Status Codes:**  
- **200 OK:** Returns the user's profile.  
- **401 Unauthorized:** Invalid or missing token.

**Example Successful Response (200):**  
```json
{
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
    // ... additional user fields ...
  }
}
```

## GET /users/logout

**Description:**  
Logs out the user by invalidating the current JWT token.  
**Authentication:** Required (JWT).  
**Status Codes:**  
- **200 OK:** Successfully logged out.  
- **401 Unauthorized:** Invalid or missing token.

// ...existing documentation...