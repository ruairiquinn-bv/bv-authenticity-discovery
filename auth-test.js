console.log('Auth Test Loaded Successfully!');

const reviewsSectionOfThePage = document.getElementById('shopify-product-reviews'); // <-- This grabs the whole review section
const submitButton = reviewsSectionOfThePage.querySelector('button[type="submit"]');

submitButton.onClick = () => {
  const reviewAuthor = document.getElementsByName('review[author]')[0].value;
  console.log('Review submitted!: ', reviewAuthor);
};
