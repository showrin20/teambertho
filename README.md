
# Team Bertho Website

## Project Features

- **User Authentication**: Users can sign up, sign in, and update their profile (name) after logging in.
- **Role-based Access Control**: Admin users have the ability to manage users and team members.
  - Admins can update and delete user profiles.
  - Admins can add or remove team members and assign admin roles.
- **Blog Management**: Team members can add blogs, but only admins can edit or delete them.
- **Secure User Data**: Passwords are securely hashed, and users are authenticated using JWT tokens.

## Tech Stack

- **Frontend**: 
  - **React.js** with **TypeScript**
  - **Material UI** (or Tailwind CSS) for UI components
- **Backend**:
  - **Node.js** with **Express.js**
  - **TypeScript** for type safety
  - **MongoDB** (via Mongoose for ORM)
  - **JWT (JSON Web Tokens)** for authentication
  - **bcrypt** for password hashing


### Features

- **Signup**: Users can create an account by providing only their **email** and **password**. The role is automatically set as **general**.
- **Signin**: Users can log in using their **email** and **password**.
- **Profile Management**: After signing in, users can update their **name** or other allowed profile fields.
- **Admin Features**:
  - **Role-based access**: Admin users can manage other users, including adding/removing team members and modifying roles.
  - **User Management**: Admin users can update or delete any user’s profile.
  - **Blog Management**: Admins have full control over blog content (add/edit/delete). Team members can only add new blogs but cannot edit them after posting.

### User Roles

- **General Users**: 
  - Can sign up, sign in, and update their name.
  - Can view blogs but cannot add, edit, or delete them.
  
- **Team Members**: 
  - Can upload blogs.
  - Can view and update their profile info (name, etc.).
  - Cannot delete other users or manage team members.

- **Admin Users**: 
  - Can manage other users (update, delete profiles).
  - Can add or remove team members.
  - Can promote other users to admin roles.

### Authentication

- **Signup**: Users sign up with an **email** and **password**. The password is hashed using **bcrypt**.
- **Signin**: After signing in, users receive a **JWT token** for authentication. The token is stored in local storage and used for protected API calls.
- **Role Management**: The backend checks user roles to determine if they can perform actions such as updating profiles, adding blogs, or managing team members.

- 
![1](teambertho.png)



