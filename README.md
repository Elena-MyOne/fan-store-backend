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

### Possible values for query parameters

1. Maximum `limit`: 58

2. `category`: 'Trunks', 'Wands', 'Decorations', 'Pillows', 'Sweaters', 'Souvenirs', 'Souvenirs', 'All'.

3. `faculty`: 'Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin', 'Slytherin', 'Beauxbatons', 'Durmstrang', 'None', 'All'

4. `order`: 'desc', 'asc'

5. `order` depending on the rating: '5', '4', '3', '2', '1'

6. `order` depending on the price range: '30-20', '15-5', '25-40', '40-70', '70-100', '100' (for products from $100 and more)

7. `order` depending on the sale range: '30-20', '15-5'

8. `sale` for products on sale: 'true'

9. `sort`: 'sale', 'rate', 'price', 'new', 'bestseller'

### Getting Data about Products

To retrieve data about all products, send a GET request to the following endpoint:

```
http://localhost:4200/products?page=1&limit=58
```

### Filtering Products and Pagination

#### Filtering Products by Category

To filter products by category, you can include the category query parameter in the GET request. Set the value of the category parameter to the desired category: "wands", "decorations", "pillows", "sweaters", "souvenirs", and "robes". For example, to get products in the "wands" category, use the following URL:

```
http://localhost:4200/products?page=1&limit=58&category=Wands
```

If you want to retrieve products from all categories, use `category=All`.

#### Filtering Products by Faculty

To further refine the product results, you can include the category and faculty query parameters in the GET request. Set the values of both parameters to the desired category and faculty, respectively. For example, to get products in the "Wands" category associated with the "Gryffindor" faculty, use the following URL:

```
http://localhost:4200/products?page=1&limit=58&faculty=Gryffindor
```

#### Filtering Product by product Name

To filter products by their name, include the name query parameter in GET request:

```
http://localhost:4200/products?page=1&limit=58&name=harry
```

#### Filtering Product sale products

To get unordered products on sale, include the `sale=true` query parameter in GET request:

```
http://localhost:4200/products?page=1&limit=58&sale=true
```

To get order products range on sale needs to be added `order=30-20` or `order=15-5`

```
http://localhost:4200/products?page=1&limit=58&sort=sale&sale=true&order=30-20
```

#### Filtering Product by order `desc` and `asc` products

To get ordered products by order `desc` and `asc` on sale, or by price, or rate, include the `sort=sale&order=desc` or `sort=sale&order=asc` (or `sort=price&order=desc`, `sort=rate&order=desc`) query parameter in GET request:

```
http://localhost:4200/products?page=1&limit=58&sale=true&sort=sale&order=desc
```

#### Filtering Products by rating

To filter products by Rating from 5 to 1 stars, add `sort=rate` and amount of stars `order=5`:

```
http://localhost:4200/products?page=1&limit=58&sort=rate&order=5
```

#### Filtering Products by price range

To filter products by price range, add `sort=price` and any price range you wish to get `order=25-40`:

```
http://localhost:4200/products?page=1&limit=58&sort=price&order=25-40
```

#### Filtering only new Products

To filter only new Products, add `sort=new`:

```
http://localhost:4200/products?page=1&limit=58&sort=new
```

#### Filtering best sellers Products

To filter only new Products, add `sort=bestseller`:

```
http://localhost:4200/products?page=1&limit=58&sort=bestseller
```

#### Filtering Products by Category, Faculty and Name

To filter products by Category, Faculty, and product Name combine them through "&":

```
http://localhost:4200/products?page=1&limit=58&faculty=Gryffindor&category=All&name=harry
```

#### Filtering Products by Category, Faculty, sorted and ordered

To filter products by Category, Faculty, using sort and / or order combine them through "&":

```
http://localhost:4200/products?page=1&limit=58&faculty=Gryffindor&category=All&sort=bestseller
```

#### Pagination

To paginate the product results, you can change the page and limit query parameters in the GET request.

`page`: Specify the current page number. Default is 1. `limit`: Specify the number of products per page. Default is 10.

```
http://localhost:4200/products?page=1&limit=10&category=All&faculty=All
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
