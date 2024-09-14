# Patient Appointment Management System

## Overview

The Patient Appointment Management System is a web-based application designed to streamline the process of scheduling and managing patient appointments with doctors. The system allows for the collection of patient information, scheduling of appointments, and management of existing appointments by an admin. The admin has the capability to both schedule and cancel appointments as needed.

![System Overview](/public/assets/Overview.png)

## Features

- **Patient Information Management:** Collect and store patient details such as name, contact information, and medical history.
- **Appointment Scheduling:** Allow patients to request appointments and enable admins to schedule these appointments with doctors.
- **Appointment Cancellation:** Provide the ability for admins to cancel appointments when necessary.
- **Admin Dashboard:** A comprehensive interface for admins to manage patient information and appointments effectively.
- **Notifications:** (Optional) Notify patients and doctors about appointment confirmations, changes, and cancellations.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (React/next js)
- **Backend:** Nextjs 14
- **Database:** Appwrite
- **Hosting:** (e.g., Heroku, AWS, Azure)

## Installation
 
### Prerequisites

- Node.js and npm (or yarn)
### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/appointment-management-system.git
    cd appointment-management-system
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASS=your_database_password
    PORT=your_preferred_port
    ```

4. **Start the Development Server:**

    ```bash
    npm run dev
    ```

6. **Access the Application:**

    Open your browser and navigate to `http://localhost:your_preferred_port`.

## Usage

1. **Accessing the Admin Dashboard:**
   - Navigate to `/admin` and log in with admin credentials.

2. **Managing Patient Information:**
   - Use the admin dashboard to add, view, and edit patient details.

3. **Scheduling Appointments:**
   - On the admin dashboard, navigate to the appointment section to schedule new appointments and assign doctors.

4. **Cancelling Appointments:**
   - View scheduled appointments and cancel them as needed from the dashboard.

5. **Patient Interaction:**
   - Patients can view their appointments, request new appointments, and receive notifications (if implemented).

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact:

- **Name:** Yahia
- **Email:** boussetta13yahia@gmail.com
- **GitHub:** [yayano](https://github.com/yayano)
