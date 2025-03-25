# KMITLCORE - Course Review Backend

KMITLCORE is a backend system designed for managing course reviews. It provides a structured API for students to share feedback on courses. Built with a focus on performance, security, and scalability, this project leverages modern technologies including Elysia with the Bun runtime, TypeScript, Prisma, Docker, and PostgreSQL.

---
## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Docker Deployment](#docker-deployment)
- [ER Diagram](#er-diagram)
- [License](#license)
- [Contributing](#contributing)

---
## Features

- **Course Reviews API:** Provides endpoints for managing course reviews.
- **Structured Feedback:** Allows students to share and access feedback on courses.
- **Performance & Security:** Built with modern frameworks to ensure a secure and scalable system.
- **Modular Architecture:** Organized codebase using TypeScript for maintainability and clarity.

---

## Technologies
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Elysia](https://img.shields.io/badge/Elysia-%23FFCC00.svg?style=for-the-badge&logo=elysia&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-%23004DFF.svg?style=for-the-badge&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)
## ER DIAGRAM
![แdrawio](https://github.com/user-attachments/assets/2b17cabc-e06e-4a7a-99f8-843c8ae109c7)

---

## Getting Started

Follow these steps to set up your environment and get the project running:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/inwchamp1337/Course_Review_back.git
   cd Course_Review_back
   ```


If you're using Bun as your runtime, install the required dependencies:
    **Install Dependencies:**
```bash
    bun install
```
    

## Database Migration

Run the following command to apply database migrations:

```bash
npx prisma migrate dev --name init
```

## Generate Prisma Client

Generate the Prisma client to interact with your database:

```bash
npx prisma generate
```

## Start the Development Server

Run the following command to start your development server:

```bash
bun run dev
```

## Access the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see your application in action.

---

## Environment Variables

Before running the application, ensure you have set up your **.env** file. This file should include your configuration variables such as database connection strings, API keys, and other environment-specific settings.

### Create a `.env` File

In the root directory of the project, create a file named **.env**.

### Add Your Environment Variables

Below is an example of what your **.env** file might look like:

```env
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

---

## Contributing

Contributions are welcome! If you have any improvements or fixes, please feel free to fork the repository and submit a pull request. For any issues or suggestions, please open an issue in the GitHub repository.


