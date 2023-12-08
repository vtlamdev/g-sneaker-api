# g-sneaker-api

# Link backend Deploy

[][https://g-sneaker-api.vercel.app/]

# *use POSTMAN to check these APIs*

- GET [][https://g-sneaker-api.vercel.app/api/v1/products]: Get all products

- GET [][https://g-sneaker-api.vercel.app/api/v1/products/10]: Get a product by id (here id=10)

- POST [][https://g-sneaker-api.vercel.app/api/v1/products]: Create a new product and add (you can use example body below)

```json
{
  "id": 11,
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
  "name": "Nike Air Zoom Pegasus 36",
  "description": "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
  "price": 108.97,
  "color": "#e1e7ed"
}
```

- PUT [][https://g-sneaker-api.vercel.app/api/v1/products/10]: Update a product by id (here id=10)

- DELETE [][https://g-sneaker-api.vercel.app/api/v1/products/10]: Delete a product by id (here id=10)
