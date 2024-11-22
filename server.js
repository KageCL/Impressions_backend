const express = require("express");
const cors = require("cors");
const app = express();
const Joi = require("joi");
const multer = require("multer");


app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage});

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

let dresses = [
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
    ];        

app.get("/api/dresses", (req, res) =>{
    
    res.send(dresses);
    
});

app.get("/api/outfits", (req, res) =>{
    const outfits = 
        {
            "outfits": [
              {
                "_id": 1,
                "name": "Beach Outfit",
                "price": 16.00,
                "description": "Two piece top and shorts set with an adjustable wrapping top.",
                "image": "images/beach-outfit.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "White",
                    "Navy Blue",
                    "Black",
                    "Peach"]
              },
              {
                "_id": 2,
                "name": "Hispanic Outfit",
                "price": 16.00,
                "description": "Two piece top and skirt set with a colorful design.",
                "image": "images/hispanic-outfit.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black",
                    "Teal",
                    "White", 
                    "Pink"]
              },
              {
                "_id": 3,
                "name": "Bubble Outfit",
                "price": 16.00,
                "description": "Two piece top and skirt set with different color bases and a white bubble design.",
                "image": "images/bubble-outfit.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L"],
                "designs": [
                    "Blue",
                    "Green",
                    "Orange",
                    "Black"]
              },
              {
                "_id": 4,
                "name": "Dye Outfit",
                "price": 16.00,
                "description": "Two piece top and shorts hoodie outfit with a tie dye design.",
                "image": "images/dye-outfit.jpg",
                "sizes": [
                    "L",
                    "XL",
                    "XXL"],
                "designs": [
                    "Teal",
                    "Black",
                    "Blue",
                    "Pink"]
              },
              {
                "_id": 5,
                "name": "Sportswear Outfit",
                "price": 16.00,
                "description": "Two piece top and shorts active wear set. Top features a front zipper.",
                "image": "images/sportswear-outfit.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Yellow",
                    "Pink",
                    "Peach",
                    "Purple"]
              },
              {
                "_id": 6,
                "name": "Plain Outfit",
                "price": 16.00,
                "description": "Two piece top and shorts hoodie outfit with a plain color design.",
                "image": "images/plain-outfit.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Olive",
                    "Pink",
                    "Red",
                    "Blue"]
              },
              {
                "_id": 7,
                "name": "Stripe Outfit",
                "price": 16.00,
                "description": "Full body outfit with various designs and a waist band.",
                "image": "images/stripe-outfit.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black",
                    "Blue",
                    "Colorful"]
              },
              {
                "_id": 8,
                "name": "Track Outfit",
                "price": 16.00,
                "description": "Two piece top and shorts hoodie outfit with a white stripe design.",
                "image": "images/track-outfit.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Pink",
                    "Black",
                    "Cyan",
                    "Blue"]
              }
            ]
          };
          
    res.send(outfits); 
});

app.get("/api/rompers", (req, res) =>{
    const rompers = 
        {
            "rompers": [
              {
                "_id": 1,
                "name": "Flower Romper",
                "price": 16.00,
                "description": "Romper with various different colors and flower designs.",
                "image": "images/flower-romper.jpg",
                "sizes": [
                    "S/M",
                    "L/XL"],
                "designs": [
                    "Blue",
                    "Pink",
                    "Red",
                    "Black"]
              },
              {
                "_id": 2,
                "name": "Dye Romper",
                "price": 16.00,
                "description": "Rompers with various different tie dye designs.",
                "image": "images/dye-romper.jpg",
                "sizes": [
                    "S",
                    "M"],
                "designs": [
                    "Brown/Pink",
                    "Yellow/Pink",
                    "Blue/Pink"]
              },
              {
                "_id": 3,
                "name": "Hispanic Romper",
                "price": 16.00,
                "description": "Rompers with various different hispanic flower designs.",
                "image": "images/hispanic-romper.JPG",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black",
                    "White",
                    "Pink",
                    "Navy Blue"]
              },
              {
                "_id": 4,
                "name": "Dual Color Romper",
                "price": 16.00,
                "description": "Dual color rompers with a cloudy design.",
                "image": "images/dual-color.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL",
                    "XXL"],
                "designs": [
                    "Blue",
                    "Black",
                    "Teal",
                    "Brown"]
              },
              {
                "_id": 5,
                "name": "Unique Romper",
                "price": 16.00,
                "description": "Rompers with an exposed stomach and unique designs.",
                "image": "images/unique-romper.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black",
                    "White",
                    "Orange",
                    "Pink"]
              },
              {
                "_id": 6,
                "name": "Elephant Romper",
                "price": 16.00,
                "description": "Rompers with an elephant print design.",
                "image": "images/elephant-romper.jpg",
                "sizes": [
                    "M/L",
                    "XL/XXL"],
                "designs": [
                    "Black",
                    "Red",
                    "Navy Blue"]
              },
              {
                "_id": 7,
                "name": "Star Romper",
                "price": 16.00,
                "description": "Black romper with a beautiful star print design.",
                "image": "images/star-romper.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black"]
              },
              {
                "_id": 8,
                "name": "Orange/Grey Romper",
                "price": 16.00,
                "description": "Romper with a unique orange and grey design pattern.",
                "image": "images/orange-romper.jpg",
                "sizes": [
                    "M",
                    "L"],
                "designs": [
                    "Orange"]
              }
            ]
          };
          
    res.send(rompers); 
});

app.get("/api/leggings", (req, res) =>{
    const leggings = 
        {
            "jeggings": [
              {
                "_id": 1,
                "name": "Jeggings",
                "price": 12.00,
                "description": "Leggings with a jean design on them. Features various jegging designs to choose from.",
                "image": "images/jeggings.jpg",
                "sizes": [
                    "S/M",
                    "L/XL"],
                "designs": [
                    "Stars",
                    "Zigzag",
                    "Flowers"]
              },
              {
                "_id": 2,
                "name": "Unique Leggings",
                "price": 12.00,
                "description": "Leggings with beautiful unique patterns on them that simply cannot be described.",
                "image": "images/unique-legging.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L"],
                "designs": [
                    "Blue Camo",
                    "White/Black",
                    "Blue",
                    "Yellow"]
              },
              {
                "_id": 3,
                "name": "Cool Short Leggings",
                "price": 12.00,
                "description": "Short leggings with different prints and symbols on them.",
                "image": "images/cool-short-legging.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L"],
                "designs": [
                    "USA",
                    "Navy Blue",
                    "Space"]
              },
              {
                "_id": 4,
                "name": "Lion Leggings",
                "price": 12.00,
                "description": "Fierce leggings with a large lion design throughout.",
                "image": "images/lion-legging.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Lion Black",
                    "Lion Orange"]
              },
              {
                "_id": 5,
                "name": "Short Flower Leggings",
                "price": 12.00,
                "description": "Short leggings with different colors and types of flower prints.",
                "image": "images/short-flower-legging.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black/Red",
                    "Black/Pink",
                    "Navy/Pink"]
              },
              {
                "_id": 6,
                "name": "Sportswear Leggings",
                "price": 12.00,
                "description": "Leggings with different colorful prints and pockets. Good for active wear.",
                "image": "images/sportswear-legging.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue/Pink",
                    "Colorful Line",
                    "Colorful Tree"]
              },
              {
                "_id": 7,
                "name": "Dark Bolt Jeggings",
                "price": 12.00,
                "description": "Dark jeggings with shiny gems that come together to form a bolt.",
                "image": "images/dark-bolt-legging.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black",
                    "Grey"]
              },
              {
                "_id": 8,
                "name": "Leopard Jeggings",
                "price": 12.00,
                "description": "Jeggings with a unique leopard print.",
                "image": "images/leopard-print-legging.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Light Print",
                    "Dark Print"]
              }
            ]
          };
          
    res.send(leggings); 
});

app.get("/api/shorts", (req, res) =>{
    const shorts = 
        {
            "shorts": [
              {
                "_id": 1,
                "name": "Unique Shorts",
                "price": 10.00,
                "description": "Shorts with various unique designs and colors.",
                "image": "images/unique-short.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Green",
                    "Black",
                    "Blue",
                    "Orange"]
              },
              {
                "_id": 2,
                "name": "Plain Shorts",
                "price": 10.00,
                "description": "Plain color shorts with string coming off the sides.",
                "image": "images/plain-short.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L"],
                "designs": [
                    "Red",
                    "Blue",
                    "Grey",
                    "Pink",
                    "Black"]
              },
              {
                "_id": 3,
                "name": "Jean Shorts",
                "price": 10.00,
                "description": "Plain color jean shorts with front and back pockets.",
                "image": "images/jean-short.png",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Red",
                    "Black",
                    "Blue",
                    "Orange",
                    "Pink"]
              },
              {
                "_id": 4,
                "name": "Lace Shorts",
                "price": 10.00,
                "description": "Shorts with laces on the side and various different patterns and colors.",
                "image": "images/lace-short.png",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Black"]
              },
              {
                "_id": 5,
                "name": "Pink/Blue Dye Shorts",
                "price": 10.00,
                "description": "Pink and blue tie dye shorts with strings coming off the sides.",
                "image": "images/bp-dye-short.jpg",
                "sizes": [
                    "S",
                    "M"],
                "designs": [
                    "Pink/Blue"]
              },
              {
                "_id": 6,
                "name": "Red/Black Dye Shorts",
                "price": 10.00,
                "description": "Red and black tie dye shorts with strings coming off the sides.",
                "image": "images/rblack-dye-short.jpg",
                "sizes": [
                    "S",
                    "M"],
                "designs": [
                    "Red/Black"]
              },
              {
                "_id": 7,
                "name": "Blue/Black Dye Shorts",
                "price": 10.00,
                "description": "Blue and black tie dye shorts with strings coming off the sides.",
                "image": "images/bblack-dye-short.jpg",
                "sizes": [
                    "S",
                    "M"],
                "designs": [
                    "Blue/Black"]
              },
              {
                "_id": 8,
                "name": "Rainbow Dye Shorts",
                "price": 10.00,
                "description": "Rainbow colored tie dye shorts with string coming off the sides.",
                "image": "images/rainbow-dye-short.jpg",
                "sizes": [
                    "S",
                    "M"],
                "designs": [
                    "Rainbow"]
              }
            ]
          };
          
    res.send(shorts); 
});

app.get("/api/skorts", (req, res) =>{
    const skorts = 
        {
            "skorts": [
              {
                "_id": 1,
                "name": "Flower Skort",
                "price": 12.00,
                "description": "Skorts with various different flower patterns and colors.",
                "image": "images/flower-skort.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L"],
                "designs": [
                    "Red",
                    "Orange",
                    "Blue"]
              },
              {
                "_id": 2,
                "name": "Floral Skort",
                "price": 12.00,
                "description": "Skorts with various different floral patterns and colors.",
                "image": "images/floral-skort.jpg",
                "sizes": [
                    "S",
                    "M"],
                "designs": [
                    "Navy Blue",
                    "Pink",
                    "Black"]
              },
              {
                "_id": 3,
                "name": "Plain Skort",
                "price": 12.00,
                "description": "Plain color skorts in various different colors.",
                "image": "images/plain-skort.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Green",
                    "Brown",
                    "Red",
                    "Black"]
              },
              {
                "_id": 4,
                "name": "Diamond Skort",
                "price": 12.00,
                "description": "Skorts with different color diamond design patterns.",
                "image": "images/diamond-skort.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue",
                    "Red",
                    "Orange"]
              },
              {
                "_id": 5,
                "name": "Plaid Skort",
                "price": 12.00,
                "description": "Skorts with different color plaid designs.",
                "image": "images/plaid-skort.jpg",
                "sizes": [
                    "S",
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue",
                    "Black",
                    "Yellow"]
              },
              {
                "_id": 6,
                "name": "Split Skort",
                "price": 12.00,
                "description": "Plain color skorts with various different splits all around it.",
                "image": "images/split-skort.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Brown",
                    "Navy Blue",
                    "Purple",
                    "Green"]
              },
              {
                "_id": 7,
                "name": "Camp Skort",
                "price": 12.00,
                "description": "Plain color skorts that are comfortable and good for camping.",
                "image": "images/campus-skort.jpg",
                "sizes": [
                    "M",
                    "L"],
                "designs": [
                    "Navy Blue",
                    "Tan"]
              },
              {
                "_id": 8,
                "name": "Denim Skort",
                "price": 12.00,
                "description": "Plain jean color skorts made of denim.",
                "image": "images/denim-skort.jpg",
                "sizes": [
                    "M",
                    "L",
                    "XL"],
                "designs": [
                    "Blue",
                    "Light Blue",
                    "Tan"]
              }
            ]
          };
          
    res.send(skorts); 
});

app.get("/api/dragon", (req, res) =>{
    const dragon = 
        {
            "dragon": [
              {
                "_id": 1,
                "name": "Dragon Balls Keychain",
                "price": 5.00,
                "description": "Keychain depicting the 7 Earth dragon balls from the dragon ball series",
                "image": "images/db-ball-keychain.jpg",
                "designs": [
                    "Dragon Balls"]
              },
              {
                "_id": 2,
                "name": "Goku Keychain",
                "price": 5.00,
                "description": "Goku from the Dragon Ball series",
                "image": "images/goku-keychain.jpg",
                "designs": [
                    "Base",
                    "SSJ",
                    "SSJB"]
              },
              {
                "_id": 3,
                "name": "Master Roshi Keychain",
                "price": 5.00,
                "description": "Master Roshi from the Dragon Ball series.",
                "image": "images/roshi-keychain.jpg",
                "designs": [
                    "Master Roshi"]
              },
              {
                "_id": 4,
                "name": "Gohan Keychain",
                "price": 5.00,
                "description": "Gohan from the Dragon Ball series.",
                "image": "images/gohan-keychain.jpg",
                "designs": [
                    "Gohan",
                    "Kid Gohan",
                    "Teen Gohan"]
              }
            ]
          };
          
    res.send(dragon); 
});

app.get("/api/naruto", (req, res) =>{
    const naruto = 
        {
            "naruto": [
              {
                "_id": 1,
                "name": "Naruto Keychain",
                "price": 5.00,
                "description": "Naruto Uzumaki from the Naruto series.",
                "image": "images/naruto-keychain.jpg",
                "designs": [
                    "Base",
                    "Sage Naruto",
                    "KCM Naruto"]
              },
              {
                "_id": 2,
                "name": "Kakashi Keychain",
                "price": 5.00,
                "description": "Kakashi Hatake from the Naruto series.",
                "image": "images/kakashi-keychain.jpg",
                "designs": [
                    "Kakashi"]
              },
              {
                "_id": 3,
                "name": "Rock Lee Keychain",
                "price": 5.00,
                "description": "Rock Lee from the Naruto series.",
                "image": "images/lee-keychain.jpg",
                "designs": [
                    "Base",
                    "7th Gate Lee"]
              },
              {
                "_id": 4,
                "name": "Pain Keychain",
                "price": 5.00,
                "description": "Deva Path Pain from the Naruto series.",
                "image": "images/pain-keychain.jpg",
                "designs": [
                    "Deva Pain"]
              }
            ]
          };
          
    res.send(naruto); 
});

app.get("/api/jujutsu", (req, res) =>{
    const jujutsu = 
        {
            "jujutsu": [
              {
                "_id": 1,
                "name": "Yuji Keychain",
                "price": 5.00,
                "description": "Yuji Itadori from the Jujutsu Kaisen series.",
                "image": "images/yuji-keychain.jpg",
                "designs": [
                    "Yuji",
                    "Sukuna Yuji"]
              },
              {
                "_id": 2,
                "name": "Gojo Keychain",
                "price": 5.00,
                "description": "Satoru Gojo from the Jujutsu Kaisen series.",
                "image": "images/gojo-keychain.jpg",
                "designs": [
                    "Gojo Blindfold",
                    "Six-eyes Gojo"]
              },
              {
                "_id": 3,
                "name": "Nobara Keychain",
                "price": 5.00,
                "description": "Kugisake Nobara from the Jujutsu Kaisen series.",
                "image": "images/nobara-keychain.jpg",
                "designs": [
                    "Nobara"]
              },
              {
                "_id": 4,
                "name": "Megumi Keychain",
                "price": 5.00,
                "description": "Fushiguro Megumi from the Jujutsu Kaisen series.",
                "image": "images/megumi-keychain.jpg",
                "designs": [
                    "Megumi"]
              }
            ]
          };
          
    res.send(jujutsu); 
});

app.get("/api/inside", (req, res) =>{
    const inside = 
        {
            "inside_out": [
              {
                "_id": 1,
                "name": "Joy Keychain",
                "price": 5.00,
                "description": "Joy from the Inside Out movie.",
                "image": "images/joy-keychain.jpg",
                "designs": [
                    "Joy"]
              },
              {
                "_id": 2,
                "name": "Anger Keychain",
                "price": 5.00,
                "description": "Anger from the Inside Out movie.",
                "image": "images/anger-keychain.jpg",
                "designs": [
                    "Anger"]
              },
              {
                "_id": 3,
                "name": "Fear Keychain",
                "price": 5.00,
                "description": "Fear from the Inside Out movie.",
                "image": "images/fear-keychain.jpg",
                "designs": [
                    "Fear"]
              },
              {
                "_id": 4,
                "name": "Sadness Keychain",
                "price": 5.00,
                "description": "Sadness from the Inside Out movie.",
                "image": "images/sadness-keychain.jpg",
                "designs": [
                    "Sadness"]
              }
            ]
          };
          
    res.send(inside); 
});

app.get("/api/turtle", (req, res) =>{
    const turtle = 
        {
            "turtles": [
              {
                "_id": 1,
                "name": "Leonardo Keychain",
                "price": 5.00,
                "description": "Leonardo from the Ninja Turtles series.",
                "image": "images/leo-keychain.jpg",
                "designs": [
                    "Leonardo"]
              },
              {
                "_id": 2,
                "name": "Raphael Keychain",
                "price": 5.00,
                "description": "Raphael from the Ninja Turtles series.",
                "image": "images/raph-keychain.jpg",
                "designs": [
                    "Raphael"]
              },
              {
                "_id": 3,
                "name": "Michelangelo Keychain",
                "price": 5.00,
                "description": "Michelangelo from the Ninja Turtles series.",
                "image": "images/mich-keychain.jpg",
                "designs": [
                    "Michelangelo"]
              },
              {
                "_id": 4,
                "name": "Donatello Keychain",
                "price": 5.00,
                "description": "Donatello from the Ninja Turtles series.",
                "image": "images/don-keychain.jpg",
                "designs": [
                    "Donatello"]
              }
            ]
          };
          
    res.send(turtle); 
});

app.get("/api/powerpuff", (req, res) =>{
    const powerpuff =
        {
            "powerpuff": [
              {
                "_id": 1,
                "name": "Blossom Keychain",
                "price": 5.00,
                "description": "Blossom from the Powerpuff Girls series.",
                "image": "images/blossom-keychain.jpg",
                "designs": [
                    "Blossom"]
              },
              {
                "_id": 2,
                "name": "Buttercup Keychain",
                "price": 5.00,
                "description": "Buttercup from the Powerpuff Girls series.",
                "image": "images/buttercup-keychain.jpg",
                "designs": [
                    "Buttercup"]
              },
              {
                "_id": 3,
                "name": "Bubbles Keychain",
                "price": 5.00,
                "description": "Bubbles from the Powerpuff Girls series.",
                "image": "images/bubbles-keychain.jpg",
                "designs": [
                    "Bubbles"]
              },
              {
                "_id": 4,
                "name": "Mojo Jojo Keychain",
                "price": 5.00,
                "description": "Mojo Jojo from the Powerpuff Girls series.",
                "image": "images/mojo-keychain.jpg",
                "designs": [
                    "Mojo Jojo"]
              }
            ]
          };
          
    res.send(powerpuff); 
});

app.post("/api/dresses", upload.single("img"), (req, res) =>{
    const result = validateDress(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const dress = {
        _id: dresses.length + 1,
        name: req.body.name,
        description: req.body.description,
    };

    if (req.file){
        dress.image = "images/" + req.file.filename;
    }

    dresses.push(dress);
    res.status(200).send(dress);
});

app.put("/api/items/:id", upload.single("img"), (req, res) => { const item = items.find((item) => item._id === parseInt(req.params.id)); if (!item) { res.status(404).send("The item with the provided id was not found"); return; } const result = validateItem(req.body); if (result.error) { res.status(400).send(result.error.details[0].message); return; } item.name = req.body.name; item.description = req.body.description; if (req.file) { item.image = req.file.filename; } res.status(200).send(item); });
app.delete("/api/items/:id", (req, res) => { const item = items.find((item) => item._id === parseInt(req.params.id)); if (!item) { res.status(404).send("The item with the provided id was not found"); return; } const index = items.indexOf(item); items.splice(index, 1); res.status(200).send(item); });

const validateDress = (dress) =>{
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().required(),
        description: Joi.string().required(),
    });

    return schema.validate(dress);
};

app.listen(3001, () => {
    console.log("I'm listening");
});