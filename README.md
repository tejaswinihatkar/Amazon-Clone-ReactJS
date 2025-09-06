# Amazon Clone - ReactJS

A fully functional Amazon clone built with React.js, featuring user authentication, product browsing, shopping cart functionality, and Firebase integration.

## 🚀 Live Demo
[View Live Project](https://your-amazon-clone.netlify.app) *(Update with your deployed link)*

## 📋 Features

- **User Authentication**: Sign in/Sign up with email and password
- **Social Authentication**: Google sign-in integration
- **Product Catalog**: Browse and view products
- **Shopping Cart**: Add/remove items from cart
- **Responsive Design**: Mobile-friendly interface
- **Firebase Integration**: Real-time database and authentication
- **React Router**: Seamless navigation between pages

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: CSS3, Material-UI Icons
- **Deployment**: Netlify/Vercel *(Update as needed)*

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Amazon-Clone-ReactJS.git
   cd Amazon-Clone-ReactJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install firebase@8.10.1 --legacy-peer-deps
   ```

3. **Firebase Configuration**
   - Go to [Firebase Console](https://console.firebase.google.com/u/0/project/clone-2d965/settings/general/web:NTUzNTFkZWQtODg2My00Y2UwLWE4NjktNWExZWFiNzMwM2Uw?nonce=1757175087827)
   - Update `src/firebase.js` with your Firebase config

4. **Start the development server**
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000`

## 🔥 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Create a web app and copy the configuration
4. Replace the config in `src/firebase.js`

**Firebase Console Link**: [Project Settings](https://console.firebase.google.com/u/0/project/clone-2d965/settings/general/web:NTUzNTFkZWQtODg2My00Y2UwLWE4NjktNWExZWFiNzMwM2Uw?nonce=1757175087827)

## 📁 Project Structure

```
Amazon-Clone-ReactJS/
├── public/
│   ├── amazon-logo-main.png
│   ├── banner2.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Product.js
│   │   ├── Checkout.js
│   │   ├── SimpleLogin.js
│   │   └── SocialSignIn.js
│   ├── firebase.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
## 🙏 Acknowledgments

- Amazon for design inspiration
- Firebase for backend services
- React community for excellent documentation

---

⭐ Star this repo if you found it helpful!
