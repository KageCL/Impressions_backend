const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(cors());

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/dresses", (req, res) =>{
    const dresses = [
        {
            "dresses": [
              {
                "_id": 1,
                "name": "Butterfly Dress",
                "price": 16.00,
                "description": "Plain color dresses with butterfly prints starting at the bottom and going to the top.",
                "image": "images/butterfly-dress.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Navy Blue",
                    "Black",
                    "White"]
              },
              {
                "_id": 2,
                "name": "Plain Dress",
                "price": 16.00,
                "description": "A simple plain dress with golden beads and bands.",
                "image": "images/plain-dress.JPG",
                "sizes": [
                    "S",
                    "M",
                    "L"],
                "designs": [
                    "Navy Blue",
                    "Red",
                    "Black"]
              },
              {
                "_id": 3,
                "name": "Sunflower Dress",
                "price": 16.00,
                "description": "Different color dresses with large yellow sunflowers around it.",
                "image": "images/sunflower-dress.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Navy Blue",
                    "Red",
                    "White",
                    "Black"]
              },
              {
                "_id": 4,
                "name": "Flower Dress",
                "price": 16.00,
                "description": "Dresses with many small flowers and no plain design on the dress.",
                "image": "images/flower-dress.JPG",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue",
                    "Teal",
                    "Black"]
              },
              {
                "_id": 5,
                "name": "Wheat Dress",
                "price": 16.00,
                "description": "Plain color dresses with wheat designs on the bottom and on the sleeves.",
                "image": "images/wheat-dress.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue",
                    "Yellow",
                    "Red"]
              },
              {
                "_id": 6,
                "name": "Sea Floral Dress",
                "price": 16.00,
                "description": "Black dresses with different color floral prints on the bottom and torso areas.",
                "image": "images/sea-floral-dress.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Dark Blue",
                    "Red",
                    "Purple",
                    "Blue"]
              },
              {
                "_id": 7,
                "name": "Fancy Dress",
                "price": 16.00,
                "description": "Fancy dresses with unique design patterns throughout.",
                "image": "images/fancy-dress.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Purple",
                    "Blue",
                    "Red",
                    "Black"]
              },
              {
                "_id": 8,
                "name": "Rose Dress",
                "price": 16.00,
                "description": "Flowy dresses with two large different color roses on the front.",
                "image": "images/rose-dress.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue/Pink",
                    "Black/Purple",
                    "Purple/Red"]
              }
            ]
          }        
    ];
    res.send(dresses);
    
});
app.listen(3001, () => {
    console.log("I'm listening");
});