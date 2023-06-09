## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Routing
- in next js file based routing works
- **Static Routing**
    - Create the any file name with js extensino inside the pages folder and navigate to the file name in url, For example  http://localhost:3000/about 
    ```javascript
    function About() {
        return (
            <h1>About page</h1>
        )
    }
    export default About;
    ```
- **Dynamic Routing**
    - Create the dynamic segement in square bracket i.e. [segement_name].js -> [productId].js For example http://localhost:3000/product/1, http://localhost:3000/product/2  
    - Folder Path will be
       - Pages/product
            - [productId].js
    ```javascript
    import { useRouter } from 'next/router';
    function ProductDetails() {
        const router = useRouter();
        const { productId } = router.query;
        return(
            <h1>Product Details for {productId}</h1>
        )
    }
    export default ProductDetails;
    ```
    - Another example, http://localhost:3000/product/1/review/2, http://localhost:3000/product/2/review/3
    - Folder Path will be
       - Pages/product/
            - [productId]
                - review
                    - [reviewId].js
    ```javascript
    import { useRouter } from "next/router";
    function ReviewDetails() {
        const router = useRouter();
        const {productId, reviewId } = router.query;
        return (
            <h1>Review Id {reviewId} for product id - {productId}</h1>
        )
    }

    export default ReviewDetails;
    ```
- **Catch All Routing**
    - To handle any routes we can use the ```...``` inside the square bracket
    - Folder Path will be
       - Pages/docs/
           - [...params].js
    - But the above routes will not handle the http://localhost:3000/docs, it will throw the error for page not found.
    - We can create the optional routing as [[...params]].js so it will handle the main page as well for example: http://localhost:3000/docs
    
    ```javascript
    import { useRouter } from 'next/router';
    function Doc() {
        const router = useRouter();
        const { params = [] } = router.query;

        if (params.length === 2) {
            return (
                <h1>Viewing docs for features {params[0]} and concept {params[1]} </h1>
            )
        } else if (params.length === 1) {
            return <h1>Viewing docs for features {params[0]}</h1>
        }
        return(
            <h1>Docs Home Page</h1>
        )
    }

    export default Doc;
    ```

- **Link Component navigation**
    - Understand the Code
   ```javascript
    import Link from 'next/link';
    function Product({productId = 100}) {
        return (
            <>
                <h2>
                    <Link href="/product/1" legacyBehavior>
                        <a>Product 1</a>
                    </Link>
                </h2>
                <h2>
                    <Link href="/product/2" legacyBehavior>
                        <a>Product 2</a>
                    </Link>
                </h2>
                <h2>
                    <Link href={`/product/${productId}`} legacyBehavior>
                        <a>Product {productId}</a>
                    </Link>
                </h2>
                
            </>
        )
    }

    export default Product;
    ```
- **Navigating Programmatically**
    - Understand the Code
    ```javascript
    import Link from 'next/link';
    import { useRouter } from 'next/router';

    function Home() {
        const router = useRouter();
        const handleClick = () => {
            console.log("Placing your order");
            router.push('/product');
        }
        return (
            <div>
                <h1>Home Page</h1>
                <Link href="/blog" legacyBehavior>
                    <a>Blog</a>
                </Link>
                <Link href="/product" legacyBehavior>
                    <a>Products</a>
                </Link>
                <button onClick={handleClick}>Place order</button>
            </div>
        )
    }

    export default Home;
    ```
- **Page not found**
    - Create 404.js file in pages folder it will handle all the page not found 
    ```javascript
    function PageNotFound() {
        return <h1>404 Page with all the custom styling necessary</h1>
    }
    export default PageNotFound;

    ```
- **Routing Summary**
    1. Page based routing mechanism - Pages are associated with a route based on their file name
    2. Nested routes - Nested folder structure, files will be automatically routed in the same way in the URL
    3. Dynamic routes - Can be created by adding square brackets to a page name
    4. Catch All routes - Add three dots inside square brackets to create a catch all route. Helpful when you want different URLs for the same page layout or even when you're working with pages where some of the route parameters are optional
    5. Link componetnt to navigate on click of an element
    6. useRouter hook's _router.push_ method to navigate programmatically
    7. How to create a custom 404 page