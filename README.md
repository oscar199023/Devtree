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
│   ├── src/
│   │   ├── handlers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── layouts/
    │   ├── types/
    │   ├── utils/
    │   └── view/
    │       └── main.tsx
    ├── public/
    ├── package.json
    └── vite.config.ts




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
