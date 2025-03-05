
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
MONGO_DB=ppapp
MONGO_USER=
MONGO_PASSWORD=
MONGO_HOST=127.0.0.1
MONGO_PORT=27017
MONGO_AUTHMECHANISM=SCRAM-SHA-256
MONGO_ATLAS= false
MONGO_CONSTRING=mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}

5️⃣ Start the API Server
you can start the server with these command below 
*)  pnpm start
*)  pnpm start:dev

API Endpoints
POST /generate-json
GET /generate-json
DELETE /generate-json

Returns generate json data in JSON:API format.

Response Example:

[
  {
    "_id": "67c8840d4dbe1701e628839d",
    "label": "Dashboard Kependudukan",
    "role": [
      "BAPPEDA",
      "KELURAHAN",
      "DISDUKCAPIL",
      "ADMIN",
      "DKPKP",
      "DSDA",
      "DLH",
      "SEKEL",
      "KOTA"
    ],
    "description": "Deskripsi tentang dashboard kependudukan",
    "path_user": "/user/dashboard-grafik/",
    "grid": {
      "row": [
        {
          "highlight": true,
          "label": "Highlight Data",
          "column": [
            {
              "lg": 12,
              "md": 12,
              "sm": 12
            }
          ]
        },
        {
          "highlight": false,
          "label": "Data Grafik",
          "column": [
            {
              "lg": 12,
              "md": 12,
              "sm": 12
            }
          ]
        }
      ]
    },
    "variabel": [],
    "show": true,
    "icon": "icon_kependudukan",
    "grafik": [
      {
        "dashboardId": 1,
        "level_wilayah": [
          "PROVINSI",
          "KOTA",
          "KECAMATAN",
          "KELURAHAN",
          "RW",
          "RT"
        ],
        "show": true,
        "label": "Jumlah Penduduk Berdasarkan Jenis Kelamin",
        "deskripsi": "Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini",
        "model_chart": "pie",
        "row": 1,
        "column": 2,
        "column_size": 6,
        "variabel": [
          "jumlah_laki_laki",
          "jumlah_perempuan"
        ],
        "_id": "67c8840d4dbe1701e628839e"
      },
      {
        "dashboardId": 1,
        "level_wilayah": [
          "PROVINSI",
          "KOTA",
          "KECAMATAN",
          "KELURAHAN",
          "RW",
          "RT"
        ],
        "show": true,
        "label": "Jumlah Penduduk Berdasarkan Kepemilikan KTP",
        "deskripsi": "Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini",
        "model_chart": "donut",
        "row": 1,
        "column": 2,
        "column_size": 6,
        "variabel": [
          "jumlah_ktp_dki",
          "jumlah_ktp_non_dki"
        ],
        "_id": "67c8840d4dbe1701e628839f"
      }
    ],
    "createdAt": "2025-03-05T17:04:13.063Z",
    "updatedAt": "2025-03-05T17:04:13.063Z"
  }
]


Development Notes:

Ensure MongoDB is running locally (mongod) or use MongoDB Atlas.