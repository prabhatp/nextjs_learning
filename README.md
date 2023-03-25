## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Routing
- in next js file based routing works
- Static Routing
    - Create the any file name with js extensino inside the pages folder and navigate to the file name in url, For example  http://localhost:3000/about 
    ```
    function About() {
        return (
            <h1>About page</h1>
        )
    }
    export default About;
    ```
- Dynamic Routing
    - Create the dynamic segement in square bracket i.e. [segement_name].js -> [productId].js For example http://localhost:3000/product/1, http://localhost:3000/product/2  
    - Folder Path will be
       - Pages/product
            - [productId].js
    ```
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
    ```
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
- Catch All Routing
    - To handle any routes we can use the ```...``` inside the square bracket
    - Folder Path will be
       - Pages/docs/
           - [...params].js
    - But the above routes will not handle the http://localhost:3000/docs, it will throw the error for page not found.
    - We can create the optional routing as [[...params]].js so it will handle the main page as well for example: http://localhost:3000/docs
    
    ```
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