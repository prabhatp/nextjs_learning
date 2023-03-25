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
                <Link href="/product/3" legacyBehavior>
                    <a>Product 3</a>
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
