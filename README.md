
# 🌍 Reservation App - Application de gestion de réservations

Une application **Node.js** pour gérer les réservations de voyages. Elle permet de créer des destinations, d'enregistrer des voyageurs, et d'effectuer des réservations.

## 🚀 Fonctionnalités

- **CRUD des destinations** : Ajouter, consulter, modifier et supprimer des destinations.
- **CRUD des voyageurs** : Ajouter, consulter, modifier et supprimer des voyageurs.
- **Gestion des réservations** : Créer des réservations pour des voyageurs avec calcul automatique du prix en fonction de la durée du séjour.

---

## 🛠️ Pré-requis

- **Node.js** (version 14 ou plus récente)
- **MongoDB** (instance locale ou hébergée)
- **Postman** (pour tester les API)

---

## 🗂️ Structure du Projet

```
reservation-app/
├── controllers/
├── models/
├── routes/
├── services/
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-nom-utilisateur/reservation-app.git
   cd reservation-app
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

---

## 🛠️ Configuration

Créez un fichier `.env` à la racine du projet avec le contenu suivant :

```
DB_URL=mongodb://localhost:27017/nom-de-la-bdd
PORT=3000
```

---

## 🚀 Lancer l'application

```bash
npm start
```

L'application sera accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

---

## 📡 Endpoints API

### **1. Destination**

- **Ajouter une destination** :  
  **POST** `/api/destination`  
  Exemple Body (JSON) :
  ```json
  {
    "nom": "Paris",
    "pays": "France",
    "prixParNuit": 150
  }
  ```

- **Obtenir toutes les destinations** :  
  **GET** `/api/destination`

- **Mettre à jour une destination** :  
  **PUT** `/api/destination/:id`  
  Exemple Body (JSON) :
  ```json
  {
    "nom": "Lyon",
    "pays": "France",
    "prixParNuit": 120
  }
  ```

- **Supprimer une destination** :  
  **DELETE** `/api/destination/:id`

### **2. Voyageur**

- **Ajouter un voyageur** :  
  **POST** `/api/voyageur`  
  Exemple Body (JSON) :
  ```json
  {
    "nom": "Dupont",
    "email": "dupont@example.com"
  }
  ```

- **Obtenir tous les voyageurs** :  
  **GET** `/api/voyageur`

- **Obtenir un voyageur par ID** :  
  **GET** `/api/voyageur/:id`

- **Supprimer un voyageur** :  
  **DELETE** `/api/voyageur/:id`

### **3. Réservation**

- **Créer une réservation** :  
  **POST** `/api/reservation`  
  Exemple Body (JSON) :
  ```json
  {
    "destinationId": "6465abc123def4567890",
    "voyageurId": "7890abc456def1234567",
    "dateDebut": "2024-12-01",
    "dateFin": "2024-12-10",
    "nombrePersonnes": 2
  }
  ```

- **Obtenir toutes les réservations** :  
  **GET** `/api/reservation`

- **Obtenir une réservation par ID** :  
  **GET** `/api/reservation/:id`

- **Mettre à jour une réservation** :  
  **PUT** `/api/reservation/:id`  
  Exemple Body (JSON) :
  ```json
  {
    "dateDebut": "2024-12-05",
    "dateFin": "2024-12-12",
    "nombrePersonnes": 3
  }
  ```

- **Supprimer une réservation** :  
  **DELETE** `/api/reservation/:id`

---

## 🧪 Tester l'API avec Postman

1. **Ouvrir Postman**.
2. Créer une nouvelle collection et ajouter des requêtes pour chaque endpoint.
3. Tester chaque endpoint en utilisant les exemples fournis ci-dessus.

---

## 📚 Technologies Utilisées

- **Node.js** et **Express.js** : Pour le backend.
- **MongoDB** et **Mongoose** : Pour la base de données.
- **dotenv** : Pour la gestion des variables d'environnement.
- **Postman** : Pour le test des endpoints.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez ajouter des fonctionnalités ou corriger des bugs, n'hésitez pas à créer une **pull request**.

---


## 📧 Contact

Pour toute question, contactez-moi via [hajjirioussama111@gmail.com](mailto:votre-email@example.com).

---

### 🎉 Merci d'avoir utilisé Reservation App ! Bon codage ! 🚀
