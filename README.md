
# Generate JSON API 

A **Nestjs** API that generate json data, stores it in **MongoDB**, and provides a **JSON:API-compliant** RESTful API.

## 🚀 Features
✅ Create, Read, Delete 
✅ Saves generate json data in **MongoDB**  
✅ Exposes a **JSON:API-compliant REST API**  

---

## 📌 Tech Stack
- **Node.js** (v20.18.0)
- **Nestjs** (v10.4.5)
- **Express.js** (API framework)
- **Mongoose** (MongoDB ORM)
- **NestJS Swagger** (Open API Documentation)
- **cross-env** (Environment variables)
- **class-validator** (data validatiaon)
- **class-transformer** (data transformer)


---

## 📂 Project Setup

1️⃣ Clone the Repository  
git clone https://github.com/DiansSopandi/ppapp_be.git

cd ppapp_be

2️⃣ Install Dependencies

pnpm install

3️⃣ Configure Environment Variables

Create a config env file and add:

APP_PORT=7000

MONGO_CONSTRING=mongodb://localhost:27017/ppapp

5️⃣ Start the API Server

you can start the server with these command below 

*)  pnpm start

*)  pnpm start:dev

Swagger API Endpoints

http://localhost:7000/ 

API Endpoints

POST /generate-json

GET /generate-json

DELETE /generate-json

Returns generate json data in JSON:API format.

Response Example:

[
  {
    "_id": "67c882d34dbe1701e628839a",
    "label": "string",
    "role": [
      "string"
    ],
    "description": "string",
    "path_user": "string",
    "grid": {
      "row": [
        {
          "highlight": false,
          "label": "string",
          "column": [
            {
              "lg": 0,
              "md": 0,
              "sm": 0
            }
          ]
        }
      ]
    },
    "variabel": [
      null
    ],
    "show": false,
    "icon": "string",
    "grafik": [
      {
        "dashboardId": 0,
        "level_wilayah": [
          "string"
        ],
        "show": false,
        "label": "string",
        "deskripsi": "string",
        "model_chart": "string",
        "row": 0,
        "column": 0,
        "column_size": 0,
        "variabel": [
          null
        ],
        "_id": "67c882d34dbe1701e628839b"
      }
    ],
    "createdAt": "2025-03-05T16:58:59.307Z",
    "updatedAt": "2025-03-05T16:58:59.307Z"
  }
]


Development Notes:

Ensure MongoDB is running locally (mongod) or use MongoDB Atlas.