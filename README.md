# 📝 Mini Réseau Social - Angular, Node.js, Express & MongoDB

🚀 **Un projet Full-Stack permettant de créer, éditer, supprimer et liker des posts**

## 📌 Fonctionnalités

✅ Ajouter un post avec un message et un auteur
✅ Modifier un post existant
✅ Supprimer un post
✅ Liker / Disliker un post
✅ Stockage des posts dans une base de données MongoDB
✅ API REST testée avec Postman

## 🛠️ Technologies utilisées

### Frontend (Angular)

- Angular 17+
- TypeScript
- Bootstrap
- Reactive Forms
- HTTP Client

### Backend (Node.js + Express)

- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- Dotenv

### Outils

- Postman pour tester l’API
- Git & GitHub pour la gestion du code

------

## 📂 Structure du projet

```
bashCopyEdit📦 APP-JS-FULLSTACK  
├── 📁 backend  
│   ├── 📁 config/              # Configuration de la base de données  
│   ├── 📁 controllers/         # Logique des routes  
│   ├── 📁 models/              # Modèles Mongoose  
│   ├── 📁 routes/              # Routes API  
│   ├── server.js              # Point d’entrée du backend  
│   ├── .env                   # Variables d’environnement  
│   └── package.json           # Dépendances backend  
│  
├── 📁 frontend  
│   ├── 📁 src/                 # Code source Angular  
│   ├── 📁 app/                 # Composants Angular  
│   │   ├── post-form/          # Formulaire pour ajouter/modifier un post  
│   │   ├── post-list/          # Liste des posts  
│   │   ├── services/           # Service pour gérer les requêtes API  
│   ├── angular.json            # Configuration Angular  
│   ├── package.json            # Dépendances frontend  
│   └── README.md               # Documentation du projet  
│  
└── README.md                   # Documentation principale du projet  
```

------

## 🚀 Installation et exécution

### 1️⃣ Cloner le projet

```
clone https://github.com/amadoubassceri/my-mean-training
cd my-mean-training
```

### 2️⃣ Configuration du backend

Dans le dossier **backend**, installe les dépendances :

```
npm install
npm install cors
```

Crée un fichier **.env** et ajoute les variables suivantes :

```
MONGO_URI=ton_url_mongodb
PORT=5000
```

Démarre le serveur :

```
npm start
npm run server
```

### 3️⃣ Configuration du frontend

Dans le dossier **frontend**, installe les dépendances :

```
../frontend
npm install
```

Démarre l’application Angular :

```
ng serve
```

Ouvre **http://localhost:4200** dans ton navigateur 🚀

------

## 📬 API Endpoints

| Méthode | Endpoint            | Description              |
| ------- | ------------------- | ------------------------ |
| GET     | `/post`             | Récupérer tous les posts |
| POST    | `/post`             | Créer un nouveau post    |
| PUT     | `/post/:id`         | Modifier un post         |
| DELETE  | `/post/:id`         | Supprimer un post        |
| PATCH   | `/post/:id/like`    | Liker un post            |
| PATCH   | `/post/:id/dislike` | Disliker un post         |

------

## 🛠 Améliorations futures

- 🔐 Ajouter une authentification avec JWT
- 🌍 Héberger le projet (backend sur Render/Vercel, frontend sur Netlify)
- 🎨 Améliorer l’UI avec Tailwind CSS ou Material Design

------

## 👨‍💻 Auteur

👤 **Amadou BASS**
🔗 [LinkedIn](https://www.linkedin.com/in/bass-amadou-65902419a/)
📧 bassamadou39@gmail.com

Si ce projet t’a été utile, n’hésite pas à **l’étoiler ⭐ sur GitHub** et à contribuer ! 🚀
