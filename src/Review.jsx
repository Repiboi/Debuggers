import React from 'react';
import './Reviews.css'; // Ensure to create and link your CSS file

const reviewsData = [
    {
        name: "Chinyere Okeke",
        image: "https://i.pinimg.com/474x/5b/d9/94/5bd9944c562fce2e62e8e10092cb5b41.jpg",
        rating: [true, true, true, true, false],
        review: "I’ve worked with other interior designers, but HomeStyler is by far the best. They took my ideas and added a professional touch that I couldn’t have imagined. Every room in my house now looks stunning, and I couldn’t be happier."
    },
    {
        name: "Aisha Ibrahim",
        image: "https://i.pinimg.com/474x/e8/d6/35/e8d635a4221b96761a472f7613918200.jpg",
        rating: [true, true, true, true, false],
        review: "HomeStyler transformed my living room into a modern oasis! Their attention to detail and creativity exceeded my expectations. I love how they incorporated my personal style into the design while keeping it fresh and elegant. Highly recommend!"
    },
    {
        name: "John Adewale",
        image: "https://i.pinimg.com/474x/aa/29/51/aa29513a29196803f09d43ad017e77e1.jpg",
        rating: [true, true, true, true, true],
        review: "From start to finish, HomeStyler delivered excellent service. They took the time to understand what I wanted and brought it to life with flawless execution. My home feels brand new, thanks to their brilliant work. Amazing team!"
    },
    {
        name: "Sophie O'Reilly",
        image: "https://i.pinimg.com/474x/63/3e/f2/633ef26979123abd40a31068bea92252.jpg",
        rating: [true, true, true, true, false],
        review: "HomeStyler truly knows how to elevate a space. They revamped my office area and made it both functional and stylish. The attention to detail is remarkable, and they worked within my budget without compromising on quality. Excellent work!"
    },
    {
        name: "Emily Ojo",
        image: "https://i.pinimg.com/474x/d8/ae/33/d8ae334df3c0d657966ae16366e48f9a.jpg",
        rating: [true, true, true, false, false],
        review: "The HomeStyler team was a pleasure to work with. They were patient and attentive to my needs, and the final design is beyond my wildest dreams. I absolutely love my new kitchen and dining area—so chic and cozy. Thank you!"
    },
    {
        name: "David Thompson",
        image: "https://i.pinimg.com/474x/6f/29/5f/6f295fbc34f6b5bd786c433c88762177.jpg",
        rating: [true, true, true, true, true],
        review: "I couldn't believe the transformation HomeStyler made to my home. Every space now feels luxurious yet comfortable, and they made the entire process so easy. If you’re looking for top-tier interior design, HomeStyler is the way to go!"
    }
];

const HomeStylerReviews = () => {
    return (
        <section className="reviews">
            <h1>REVIEWS</h1>
            <div className="views">
                {reviewsData.map((review, index) => (
                    <div className="review" key={index}>
                        <div className="review-image">
                            <img src={review.image} alt={review.name} />
                            <span>- {review.name}</span>
                        </div>
                        <div className="like">
                            {review.rating.map((star, i) => (
                                <i key={i} className={star ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            ))}
                        </div>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeStylerReviews;