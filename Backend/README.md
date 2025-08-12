# API Documentation

## POST /users/register

**Description:**  
Registers a new user. The endpoint validates incoming data, hashes the password, creates a user record, and returns a JSON Web Token (JWT) for authentication.

**Required Data:**  
- **firstName** (string): Must be provided and meet validation criteria (min. 3 characters in routes, min. 4 in model).  
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
- **email**(string): Must be a valid email and provided.  
- **password** (string): Must be provided and at least 6 characters long.

**Status Codes:**  
- **201 Created:** Successful registration. Returns a token and user information.  
- **400 Bad Request:** Validation errors or missing required fields.

**Example Request Body:**  
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}

**Example Successul Response(201):** 
```{
  "token": "jwt_token_string",
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
    // ... additional user fields ...
  }
}