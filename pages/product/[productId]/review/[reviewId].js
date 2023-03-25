import { useRouter } from "next/router";
function ReviewDetails() {
    const router = useRouter();
    const {productId, reviewId } = router.query;
    return (
        <h1>Review Id {reviewId} for product id - {productId}</h1>
    )
}

export default ReviewDetails;