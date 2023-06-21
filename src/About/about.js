import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about card">
      <style>
        {`
          .hero-image {
            position: relative;
            height: 0;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
          }

          .hero-image img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>

      {/* Hero image section */}
      <h2 className="text-center mb-4">Welcome to DishSwapp</h2>
      {/* About section */}
      <section className="bg-green text-black py-5">
        <div className="container">
          <p>
            We believe that food is more than just sustenance; it's an
            experience that brings people together. That's why we created
            DishSwapp - a platform where food lovers can come together, share
            their recipes, and try out new ones.
          </p>
          <p>
            Unlike other recipe websites, DishSwapp allows you to do more than
            just browse through a collection of recipes. With our platform, you
            can interact with other foodies by commenting and adding your own
            recipes to the mix. We know how frustrating it can be when you come
            across a recipe that doesn't work out, or when you want to add your
            own twist to an existing recipe, but you can't do anything about it.
            With DishSwapp, that frustration is a thing of the past.
          </p>
          <p>
            But we don't stop there. We know that food is not just about taste,
            but also about presentation. That's why we allow you to post
            pictures under recipe posts of your attempt at the recipe. Share
            your success stories, your tips and tricks, and your challenges. We
            believe that when you cook a meal, it becomes a part of you, and we
            want to celebrate that.
          </p>
          <p>
            At DishSwapp, we value collaboration and community. We believe that
            cooking should not be a solitary activity, but something that brings
            people together. That's why we encourage you to engage with others,
            to share your knowledge, and to learn from others. With DishSwapp,
            you're not just joining a website, you're joining a community of
            food lovers who are passionate about sharing their love of food.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
