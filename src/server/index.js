// const express = require('express');
// const app = express();
// const PORT = process.env.port || 8000;

// app.listen(PORT, ()=>{
//     console.log(`running on port ${PORT}`);
// });

////////////////////////////////////////////////////////////////

// const express = require("express");
// const app = express();
// const PORT = process.env.port || 8000;

// app.get("/", (req, res) => {
//   console.log("requested.");
// });

// app.listen(PORT, () => {
//   console.log(`running on port ${PORT}`);
// });

////////////////////////////////////////////////////////////////

// const express = require("express");
// const cors = require('cors');
// const app = express();
// const mysql = require("mysql");
// const PORT = process.env.port || 8000;

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "0000",
//   database: "ex",
// });

// let corsOptions = {
//   origin: "*", // 출처 허용 옵션
//   credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
// };

// app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
//   db.query(sqlQuery, (err, result) => {
//     console.log(err);
//     res.send("success!");
//   });
// });

// app.listen(PORT, () => {
//   console.log(`running on port ${PORT}`);
// });

////////////////////////////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

const cors = require('cors')
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'nameinfo'
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Express 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
// 사용자 정보 저장 API
app.post('/', (req, res) => {
    const { name, job_title, phone_number, email, image_path } = req.body;
    const sql = `INSERT INTO users (name, job_title, phone_number, email, image_path) VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [name, job_title, phone_number, email, image_path], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('User created successfully');
        }
    });
});
*/

// 사용자 정보 저장 API
app.post('/', (req, res) => {
  const { name, job_title, phone_number, email, image_path } = req.body;
  const sql = `INSERT INTO users (name, job_title, phone_number, email, image_path) VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [name, job_title, phone_number, email, image_path], (err, result) => {
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Internal Server Error');
      } else {
          res.status(200).send('User created successfully');
      }
  });
});

/*
// 사용자 목록 조회 API
app.get('/', (req, res) => {
    const sql = `SELECT * FROM users`;

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            //res.status(200).json(result);
            res.send(result);
        }
    });
});
*/

// 사용자 목록 조회 API
app.get('/', (req, res) => {
  const sql = `SELECT * FROM users`;

  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Internal Server Error');
      } else {
          res.send(result);
      }
  });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
