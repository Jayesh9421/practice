const recipes = [
  {
    id: 1,
    name: "Grilled Chicken",
    type: "Non-Vegetarian",
    description:
      "Juicy grilled chicken breast seasoned with aromatic spices, perfect for a quick and healthy meal.",
    imageUrl:
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    type: "Vegetarian",
    description:
      "Marinated paneer cubes grilled to perfection, bursting with flavors of spices and yogurt.",
    imageUrl:
      "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Fish Curry",
    type: "Non-Vegetarian", 
    description:
      "Spicy and tangy fish curry cooked in a rich tomato and coconut gravy, ideal with rice.",
    imageUrl:
      "https://images.pexels.com/photos/23897674/pexels-photo-23897674/free-photo-of-curry-chicken-in-bowl-on-table.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    type: "Vegetarian",
    description:
      "Mixed vegetables stir-fried with savory sauces, offering a delightful and healthy meal option.",
    imageUrl:
      "https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Beef Stew",
    type: "Non-Vegetarian",
    description:
      "Hearty beef stew with tender chunks of beef, potatoes, and carrots, simmered in a rich broth.",
    imageUrl:
      "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Chickpea Salad",
    type: "Vegetarian",
    description:
      "Healthy chickpea salad loaded with fresh vegetables, tossed in a light lemon dressing.",
    imageUrl:
      "https://images.pexels.com/photos/17597408/pexels-photo-17597408/free-photo-of-a-bowl-with-a-healthy-salad.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Lamb Kebab",
    type: "Non-Vegetarian",
    description:
      "Spiced lamb kebabs grilled to perfection, served with a refreshing yogurt dip.",
    imageUrl:
      "https://images.pexels.com/photos/17303312/pexels-photo-17303312/free-photo-of-kebab-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Spinach Pasta",
    type: "Vegetarian",
    description:
      "Creamy pasta with spinach and garlic, topped with parmesan cheese for an irresistible meal.",
    imageUrl:
      "https://images.pexels.com/photos/10350293/pexels-photo-10350293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "Shrimp Scampi",
    type: "Non-Vegetarian",
    description:
      "Shrimp cooked in a garlic butter sauce, served with pasta or crusty bread for a delightful meal.",
    imageUrl:
      "https://images.pexels.com/photos/8697539/pexels-photo-8697539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    name: "Mushroom Risotto",
    type: "Vegetarian",
    description:
      "Creamy risotto with mushrooms and parmesan, a comforting dish with rich, earthy flavors.",
    imageUrl:
      "https://images.pexels.com/photos/11190138/pexels-photo-11190138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 11,
    name: "Chicken Biryani",
    type: "Non-Vegetarian",
    description:
      "Aromatic rice cooked with chicken and spices, a fragrant and flavorful one-pot meal.",
    imageUrl:
      "https://images.pexels.com/photos/4224304/pexels-photo-4224304.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Cauliflower Tacos",
    type: "Vegetarian",
    description:
      "Spiced cauliflower served in soft tacos, topped with fresh salsa and a drizzle of lime juice.",
    imageUrl:
      "https://images.pexels.com/photos/12034501/pexels-photo-12034501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 13,
    name: "Pork Chops",
    type: "Non-Vegetarian",
    description:
      "Grilled pork chops with a blend of herbs and spices, served with a side of roasted vegetables.",
    imageUrl:
      "https://images.pexels.com/photos/19362399/pexels-photo-19362399/free-photo-of-pork-chops-and-rice-with-vegetables-decorated-with-parsley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 14,
    name: "Veggie Burger",
    type: "Vegetarian",
    description:
      "Delicious veggie patty served with fresh toppings in a whole wheat bun, perfect for a healthy meal.",
    imageUrl:
      "https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 15,
    name: "Turkey Meatballs",
    type: "Non-Vegetarian",
    description:
      "Juicy turkey meatballs in marinara sauce, perfect over spaghetti or as a party appetizer.",
    imageUrl:
      "https://images.pexels.com/photos/20323460/pexels-photo-20323460/free-photo-of-meatballs-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 16,
    name: "Stuffed Bell Peppers",
    type: "Vegetarian",
    description:
      "Bell peppers stuffed with a flavorful mixture of rice and vegetables, baked until tender.",
    imageUrl:
      "https://images.pexels.com/photos/5677703/pexels-photo-5677703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 17,
    name: "BBQ Ribs",
    type: "Non-Vegetarian",
    description:
      "Slow-cooked ribs with BBQ sauce, smoky and tender, perfect for a weekend barbecue.",
    imageUrl:
      "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 18,
    name: "Falafel Wrap",
    type: "Vegetarian",
    description:
      "Crispy falafel served in a wrap with fresh veggies and tahini sauce, a perfect on-the-go meal.",
    imageUrl:
      "https://images.pexels.com/photos/2015191/pexels-photo-2015191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 19,
    name: "Salmon Fillet",
    type: "Non-Vegetarian",
    description:
      "Grilled salmon fillet with lemon butter sauce, served with a side of steamed vegetables.",
    imageUrl:
      "https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 20,
    name: "Quinoa Salad",
    type: "Vegetarian",
    description:
      "Nutritious quinoa salad with fresh ingredients like cucumber, tomatoes, and a light vinaigrette.",
    imageUrl:
      "https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default recipes;
