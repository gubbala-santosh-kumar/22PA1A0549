**URL Shortener — Affordmed Task**

**Built with React + Vite**

This is a simple client-side URLshortener built using React and Vite. It allows users to shorten long URLs,create custom short codes, define expiration times, track click statistics, andview analytics. All functionality is handled in the browser using localStorage,with no backend required.

**Features**

*   Shorten long URLs with ease.
*   Optionally define a custom short code (e.g., /my-link).
*   Set an expiration time in minutes for each shortened URL (default is 30 minutes).
*   Click analytics include:
*   Clean and responsive UI built using Material UI.
*   Custom middleware logger to replace direct console.log statements.
*   Client-side routing and redirection using React Router.
*   All data is stored persistently using localStorage.
    

**Tech Stack**
*   React + Vite
*   Material UI (MUI)
*   UUID for generating unique shortcodes
*   React Router for client-side routing
*   LocalStorage for client-side data persistence
    

**Setup Instructions**

2.  **Create a new Vite project**
    

npm create vite@latesturl-shortener-app -- --template react

cd url-shortener-app

2.  **Install the required dependencies**
    

npm install

npm install @mui/material@emotion/react @emotion/styled react-router-dom uuid

2.  **Replace the contents of the src folder** with the code provided for this project.
    

4.  **Start the development server**
    

6.  npm run dev
    

The app should be available at: [http://localhost:5173](http://localhost:5173) by default but later I’veupdated the previous port to new port [http://localhost:3000](http://localhost:3000)because of the task requirement

**How to Use the App**

**1\. Shorten a URL**

*   Enter a **long URL** (e.g., https://github.com)
    

*   Optionally, enter:
    

*   Click the **"Shorten URLs"** button
    

*   The app will generate a short URL like:
    

**http://localhost:5173/my-github  (Expires: 12:30 PM)**

**2\. Use a Short URL**

*   Copy and paste the shortened URL into the browser
    

*   The app will:
    

**3\. View Analytics**

*   Navigate to: [http://localhost:3000/stats](http://localhost:3000/stats)
    

*   You’ll see:
    

**Custom Middleware Logger**

The app uses a custom logger instead of console.log:

logger("Event Name", { data });

Logs are stored in localStorage\["logs"\].

**To view logs in the browser:**

JSON.parse(localStorage.getItem("logs"))

You can inspect them using Developer Tools in any modernbrowser.

**Notes and Limitations**

*   Only one URL input form is visible at a time (no additional inputs are rendered).
*   The app supports local shortening only; URLs are not globally accessible unless hosted online.
*   The click location is mocked as "IN" (India) due to the lack of backend services.
*   All logic and data are stored entirely in the browser using localStorage.
*   Works offline once loaded due to client-side data handling
    
