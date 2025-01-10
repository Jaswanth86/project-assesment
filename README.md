# School Payments and Dashboard API

## Base URL
`http://localhost:3000/transactions`

## Endpoints

### 1. Fetch All Transactions
- **GET** `/`
- **Description**: Retrieve all transaction records.
- **Response**:
  - `200 OK`
  - Returns an array of transaction objects.
  
### 2. Fetch Transactions by School
- **GET** `/school/:schoolId`
- **Description**: Retrieve all transaction details for a specific school.
- **Parameters**:
  - `schoolId`: The ID of the school.
- **Response**:
  - `200 OK`
  - Returns an array of transaction objects for the specified school.

### 3. Transaction Status Check
- **GET** `/check-status/:customOrderId`
- **Description**: Retrieve the current status of a transaction using a custom order ID.
- **Parameters**:
  - `customOrderId`: The custom order ID of the transaction.
- **Response**:
  - `200 OK`
  - Returns the transaction object if found, or `404 Not Found` if not.

### 4. Webhook for Status Updates
- **POST** `/webhook`
- **Description**: Receive status updates for transactions.
- **Request Body**:
  ```json
  {
    "custom_order_id": "12345",
    "status": "completed"
  }
