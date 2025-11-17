# 🌐 DevTree – Todas tus Redes Sociales en un Solo Enlace

**DevTree** es una aplicación web moderna que permite crear un perfil público con todos tus enlaces importantes (redes sociales, portafolios, Twitch, TikTok, etc.).  
Inspirado en Linktree, pero desarrollado completamente desde cero con **React, Node.js, Express, MongoDB y TypeScript**.

---

## 🚀 Demo en Producción

🔗 **Frontend (App pública):**  
👉 https://linkviews-devtree.netlify.app

🔗 **Backend (API en Render):**  
👉 https://TU_BACKEND_ON_RENDER.com *(colocar aquí cuando lo tengas)*

---

## ✨ Características Principales

### 🔒 Autenticación
- Registro de usuarios  
- Inicio de sesión con JWT  
- Protección de rutas privadas  
- Sistema de autorización por token

### 🌱 Perfil personalizable
- Foto de perfil
- Nombre
- descripción
- Handle único (ej: /oscarayala)

### 🔗 Gestión de enlaces
- Agregar nuevos links
- Editar links existentes
- Activar / desactivar links
- Orden automático
- Vista pública del perfil

### 📱 Responsive Design
- Vista adaptada para PC, móviles y tablets
- UI limpia y profesional con TailwindCSS

### 🔧 Próximas funcionalidades
- Recuperar contraseña (forgot/reset password)
- Perfil con colores personalizables
- Estadísticas de clics
- Temas visuales

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- React 18
- TypeScript
- Vite
- TailwindCSS
- Axios
- React Hook Form
- React Router DOM
- Zustand (si aplicas estado global)

### **Backend**
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT (Auth)
- Cloudinary (imagenes de perfil)
- Express Validator

---

## 📁 Estructura del Proyecto

```bash
Devtree/
├── backend/
│   ├── dist/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   │   ├── cloudinary.ts
│   │   │   ├── cors.ts
│   │   │   └── db.ts
│   │   ├── handlers/
│   │   │   └── index.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   └── validation.ts
│   │   ├── models/
│   │   │   └── User.ts
│   │   ├── routes/
│   │   │   └── router.ts
│   │   ├── utils/
│   │   │   ├── auth.ts
│   │   │   ├── jwt.ts
│   │   │   ├── index.ts
│   │   │   └── server.ts
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   │   ├── social/
│   │   │   ├── bg.svg
│   │   │   ├── logo.svg
│   │   │   └── vite.svg
│   │   └── _redirects
│   ├── src/
│   │   ├── api/
│   │   │   └── DevTreeAPI.ts
│   │   ├── components/
│   │   │   ├── Nav/
│   │   │   │   ├── AdminNavigation.tsx
│   │   │   │   ├── HomeNavigation.tsx
│   │   │   │   ├── DevTree.tsx
│   │   │   │   ├── DevTreeInput.tsx
│   │   │   │   ├── DevTreeLink.tsx
│   │   │   │   ├── ErrorMessage.tsx
│   │   │   │   ├── HandleData.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Logo.tsx
│   │   │   │   ├── NavigationTabs.tsx
│   │   │   │   └── SearchForm.tsx
│   │   ├── config/
│   │   │   └── axios.ts
│   │   ├── data/
│   │   │   └── social.ts
│   │   ├── layouts/
│   │   │   ├── AppLayout.tsx
│   │   │   └── AuthLayout.tsx
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── view/
│   │   │   ├── HandleView.tsx
│   │   │   ├── HomeView.tsx
│   │   │   ├── LinkTreeView.tsx
│   │   │   ├── LoginView.tsx
│   │   │   ├── NotFoundView.tsx
│   │   │   ├── ProfileView.tsx
│   │   │   └── RegisterView.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── router.tsx
│   │   └── vite-env.d.ts
│   ├── .env.local
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts






---

## 🧪 Instalación Local

### 🔹 Clonar el repo

```bash
git clone https://github.com/oscar199023/Devtree.git
cd Devtree




👨‍💻 Autor

Oscar Ayala
FullStack Developer (React + Node + TypeScript)
🔗 Próximamente portafolio…
