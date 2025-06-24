<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div >
  <a href="https://github.com/the-sofishticated-man/secret-message">
      <p align="center">
        <img src="https://github.com/user-attachments/assets/e5eca11c-df43-42ca-8bd9-ec91a19562cf" alt="Logo" width="100" height="100">  
      </p>
  </a>
<div/>

<h1 align="center">Secret Messaging App</h3>

  <p align="center">
    A simple and secure messaging platform that lets you generate a unique link others can use to send you anonymous messages. Sender identities remain completely hidden. Perfect for gathering honest feedback or just having fun!
 
  <p align="center">
  <a href="https://github.com/the-sofishticated-man/secret-message/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  &middot;
  <a href="https://github.com/the-sofishticated-man/secret-message/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  <p/>

## Tech Stack

**Client:** Typescript, React, Vite, React router, React query, Axios, Bootstrap 

**Server:** Typescript, Node, Express, Mongoose

**Database:** MongoDB

## Features

- **JWT Authentication from Scratch**
  - Secure login system using ** Web Tokens (JWT)**
  - Supports both **Access Tokens** and **Refresh Tokens**
  - Token rotation and expiration handling

- **Full-Stack Data Sanitisation**
  - **Backend:** Protects against injection attacks with input validation and sanitisation
  - **Frontend:** Cleans user input to prevent XSS and other client-side vulnerabilities

- **Fast Routing & Data Fetching**
  - Efficient navigation with **React Router v6+**
  - Seamless async data fetching using **React Query**
  - Built-in caching, background updates, and revalidation

- **Responsive Design**
  - Fully responsive layout optimised for **mobile, tablet, and desktop**
  - Built with flexible UI components and modern CSS practices## Prerequisites


## Getting Started
Before doing anything, make sure you have the following installed:

- [Node.js](https://nodejs.org/) v22 (or later)
- [TypeScript](https://www.typescriptlang.org/) v5.4.3 (or later)

You can install Node using:
#### For Windows:
```
winget install OpenJS.NodeJS // For windows
```
#### For Mac:
```
brew install node
```
#### for Linux (Debian/Ubuntu):
```
sudo apt update
sudo apt install nodejs npm
```

Then you can install TypeScript globally using npm:

```
npm install -g typescript
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. These are the default values if none are set.

`NODE_ENV=development`
`VITE_BACKEND_URL=localhost` 
`VITE_BACKEND_PORT=3000`
`ACCESS_SECRET=sloppyKissesFromGrandma552`
`REFRESH_SECRET=sloppyKissesFromGrandma225`
`MONGO_URI=mongodb://localhost:27017/`
`VITE_FRONTEND_LOGGING_LEVEL=debug` 
`BACKEND_LOGGING_LEVEL= debug`

Note that the default values for `MONGO_URI` and `VITE_FRONTEND_LOGGING_LEVEL` will change when `NODE_ENV` is set to production, becoming `mongodb://mongo:27017` and `silent` respectively.
## Run Locally

Clone the project

```
git clone https://github.com/The-Sofishticated-Man/secret-message
```

Go to the project directory.

```
cd my-project
```

Install client dependencies

```
cd client
npm install
```
Start the frontend server.

```
npm run dev
```
Install server dependencies

```
cd server
npm install
```
Start the backend server.

```
npm run dev
```




## Deployment

The way I initially made this, for the backend, you can just run Docker Compose and deploy your containers on any cloud provider.

However, for the frontend, you can use many different hosting options like Vercel, Cloudflare, or GitHub Pages.

I *would* have made it a docker image aswell and served it with nginx but honestly I couldn't be arsed 🗿.

### Deploy the frontend using GitHub Pages.
To deploy this project to GitHub Pages, start by forking this repository, cloning it, and then navigating to the client folder.

```
git clone https://github.com/yourusername/your-forked-repo.git
cd your-forked-repo/client
```

Then, you're gonna have to edit the package.json file and add your URLs (replace your username and repo-name)
```
"homepage": "https://yourusername.github.io/repo-name"
```

After that, it's just one simple command.
```
npm run deploy
```
### Deploy the backend using Docker.
This one is much simpler, just head to your cloud provider's CLI or whatever environment you're using, make sure you're in the project's root directory and run:
```
docker compose up --build backend
```
This will attach it to your backend container, which is useful for debugging logs.

## Roadmap

- [ ] 🌗 Light/Dark mode toggle  
- [ ] 🌍 Multi-language support  
  - [ ] French 🇫🇷  
  - [ ] Arabic 🇸🇦  
- [ ] 👤 Sign in as a guest  
- [ ] 🔐 Sign in using OAuth (Google, GitHub, etc.)
- [ ] 🧪 Add some tests  
  - [ ] Unit tests  
  - [ ] Integration tests  
  - [ ] End-to-end (E2E) tests
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

    1. Fork the Project
    2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
    3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
    4. Push to the Branch (`git push origin feature/AmazingFeature`)
    5. Open a Pull Request


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/the-sofishticated-man/secret-message.svg?style=for-the-badge
[contributors-url]: https://github.com/the-sofishticated-man/secret-message/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/the-sofishticated-man/secret-message.svg?style=for-the-badge
[forks-url]: https://github.com/the-sofishticated-man/secret-message/network/members
[stars-shield]: https://img.shields.io/github/stars/the-sofishticated-man/secret-message.svg?style=for-the-badge
[stars-url]: https://github.com/the-sofishticated-man/secret-message/stargazers
[issues-shield]: https://img.shields.io/github/issues/the-sofishticated-man/secret-message.svg?style=for-the-badge
[issues-url]: https://github.com/the-sofishticated-man/secret-message/issues
[license-shield]: https://img.shields.io/github/license/the-sofishticated-man/secret-message.svg?style=for-the-badge
[license-url]: https://github.com/the-sofishticated-man/secret-message/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/islam-lameche-8266802a1
