# fan-store-backend

## Installation

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the required dependencies:

```
npm install
```

## Usage

### Starting the App

To start the app, use the following command:

```
npm run start
```

This will start the server and make your app accessible at `http://localhost:4200`.

### Getting Data about Products

To retrieve data about all products, send a GET request to the following endpoint:

```
http://localhost:4200/products
```

### Filtering Products

#### Filtering Products by Category

To filter products by category, you can include the category query parameter in the GET request. Set the value of the category parameter to the desired category: "wands", "decorations", "pillows", "sweaters", "souvenirs", and "robes". For example, to get products in the "wands" category, use the following URL:

```
http://localhost:4200/products?category=wands
```

If you want to retrieve products from all categories, use `category=all`.

#### Filtering Products by Faculty

To further refine the product results, you can include the category and faculty query parameters in the GET request. Set the values of both parameters to the desired category and faculty, respectively. For example, to get products in the "Wands" category associated with the "Gryffindor" faculty, use the following URL:

```
http://localhost:4200/products?faculty=gryffindor
```

#### Filtering Products by Category and Faculty

To filter products by Category and Faculty, combine them through "&":

```
http://localhost:4200/products?category=wands&faculty=gryffindor
```

This will return information about all the products in JSON format.

### Getting Info about a Single Product

To retrieve information about a specific product, send a GET request to the following endpoint, replacing `:id` with the ID of the desired product:

```
http://localhost:4200/products/:id
```

For example, to get information about a product with ID 1, use the following URL:

```
http://localhost:4200/products/1
```

This will return the information of the specific product in JSON format.

Please note that the `:id` parameter should be replaced with a valid product ID.

## Contributing

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.
