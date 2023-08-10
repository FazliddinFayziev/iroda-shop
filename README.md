# iroda-shop
E-commerce Node Js Backend

## Base URL:

BASE_URL = https://iroda-shop.onrender.com/api/v1

## Products 📗

#### Get All Products API 🌱

##### In order to get all products you need to put just "/" after your BASE_URL. 
##### Here is an example with axios:

```javascript
async function getProductData() {
	try {
		const response = await axios.get("/");
		console.log(response);
	}
	catch (error) {
		console.log(error);
	}
}
```
#### Get Single Product API 🌱

#### For getting the single product you need to pass the is of single product as param to url.
#### url: "/single?singleId=${your-productID}"
#### Here is an example code: 

```javascript
async function getProductData() {
	try {
		const response = await axios.get(`/single?singleId=${your-productID}`);
		console.log(response);
	}
	catch (error) {
		console.log(error);
	}
}
```

#### Post New Product API 🌱
#### For posting your product you need to do little bit more things. You need to work with form-data. Here is your url after base-url "/upload"

```javascript
const PostProduct = async () => {
        try {

            const formData = new FormData();
            formData.append('name', name);
            formData.append('category', category);
            formData.append('price', price);
            formData.append('desc', desc);

            // Make sure size is an array in your code
            const sizes = ['small', 'medium', 'large'];
            sizes.forEach((size) => {
              formData.append('size[]', size);
            });

            // Make sure size is an array in your code
            const images = ['image_1', 'image_2', 'image_3'];

            formData.append('images', images);

            const res = await axios.post('/upload', formData);
            console.log(res)

        } catch (err) {
            console.log(err)
        }
    };
```

#### EDIT Product API 🌱
#### In order to edit any product, you need to put this url "edit?id=${your-product-id}"
#### I will give you code example here, because there is an sinmple example with post, just use logic in above and instead of POST method use PUT method.


#### DELETE Product API 🌱
#### Logic of deleting product is also easy. Here is url "/delete?deleteId=${your-product-id}".

#### Code Example:

```javascript
const DeleteProduct = async () => {
        try {
            const res = await axios.delete(`/delete?deleteId=${your-product-id}`);
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    };
```

## Banner 📗

#### GET Banner API 🌱

#### Your api url: "/getbanner"
#### This part aslo will be left for you. Here you also need to use GET method of axios.

#### POST Banner API 🌱
#### Your api url: "/newbanner"
#### use POST method of axios here. It is the same logic like we did with posting of products.
#### You need to post:
  ##### images,
  ##### text_one,
  ##### text_two,
  ##### text_three,

##### Now you are done with Banner APIs.



## Card Items 📗

#### POST Card Items API 🌱
#### Your api url: "/postcard"
#### Here you need to use POST method of axios. However, you do not need form-data here. just post them an usual.
```javascript
    async function postcardItems() {
    	try {
    		const response = await axios.post("/postcard", {
            "cardItems": yourCardItems,
            "totalPrice": yourTotalprice,
            "userInfo": 
            {
                "userName": "UserName",
                "sureName": "SureName",
                "phoneNumber": phoneNumber,
                "message": "userMessage"
            }
    
        });
    		console.log(response);
    	}
    	catch (error) {
    		console.log(error);
    	}
}
```

#### GET Card Items API 🌱
#### Your api url: "/getcard"
#### I think, until here by working with some get methods, you are able to get it by your self. I am going to give code example here.


## Thank you :)





