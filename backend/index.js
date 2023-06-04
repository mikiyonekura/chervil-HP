const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

// jsonの受け取り
app.use(express.json());

// cors対策
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/TodayMenu");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTION"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  database= [
    {
      id:1,
      name:"りんご",
      price:200,
      image:"https://source.unsplash.com/gDPaDDy6_WE",
    },
    {
      id:2,
      name:"バナナ",
      price:300,
      image:"https://source.unsplash.com/zrF6ACPLhPM",
    },
    {
      id:3,
      name:"みかん",
      price:"150",
      image:"https://source.unsplash.com/bogrLtEaJ2Q",
    },
    {
      id:4,
      name:"メロン",
      price:"2000",
      image:"https://source.unsplash.com/8keUtGmy0xo",
    },
  ];


app.get("/fruits", (req , res) => {
    res.json(database[0]);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});


// postの処理
app.post("/img", function (req, res) {
    try {
      console.log("通信きたよー");
      console.log(req.body)
      res.json(req.body.nameOfSweets + "の画像を返したいよ")
      //res.json(database[0])
      
      /*res.json(req.body); */ // jsonで返却
  
    } catch (error) {
      console.error(error);
    }
  });



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})

