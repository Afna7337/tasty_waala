import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  'Kerala Breakfast',
  'Kerala Meals',
  'Snacks & Burgers',
  'Shakes & Beverages',
];

const menuItems = [
  {
    id: 1,
    name: 'Puttu & Kadala Curry',
    category: 'Kerala Breakfast',
    price: 120,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Ragi%20pattu%20and%20Kadala%20curry%20%F0%9F%98%8B%F0%9F%A5%98.jpg',
    desc: 'Steamed rice cake with spicy black chickpeas curry.',
  },
  {
    id: 2,
    name: 'Idiyappam + Curry',
    category: 'Kerala Breakfast',
    price: 150,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Mathanga%20(Pumpkin)%20Pachadi%20With%20Video%20_%20Yummy%20O%20Yummy.jpg',
    desc: 'Steamed rice noodles served with delicious curry.',
  },
  {
    id: 11,
    name: 'Upma',
    category: 'Kerala Breakfast',
    price: 90,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Sooji%20Upma_%20Your%20Perfect%20Light%20and%20Comforting%20Indian%20Breakfast.jpg',
    desc: 'Savory semolina porridge cooked with vegetables and spices.',
  },
  {
    id: 10,
    name: 'Poori + Masala',
    category: 'Kerala Breakfast',
    price: 130,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/South%20Indian%20Breakfast%20Recipe%20_%20Poori%20with%20Poori%20Masala%20Recipe%20_%20Fluffy%20Poori%20Recipe%20_%20Easy%20Dinner.jpg',
    desc: 'Fluffy deep-fried bread served with spiced potato masala.',
  },
  {
    id: 4,
    name: 'Porotta + Beef',
    category: 'Kerala Breakfast',
    price: 220,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/download.jpg',
    desc: 'Layered flatbread served with slow-roasted spicy beef.',
  },
  {
    id: 6,
    name: 'Masala Dosa',
    category: 'Kerala Breakfast',
    price: 100,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/download%20(4).jpg',
    desc: 'Crispy rice crepe stuffed with spiced potato filling.',
  },
  {
    id: 3,
    name: 'FISH BIRIYANI',
    category: 'Kerala Meals',
    price: 280,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Fish%20%F0%9F%90%A0%20Biriyani%20Recipe.jpg',
    desc: 'Authentic Kerala style fish biriyani with aromatic spices and premium basmati rice.',
  },
  {
    id: 5,
    name: 'SADHYA',
    category: 'Kerala Meals',
    price: 350,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Sadhyaa.jpg',
    desc: 'Grand traditional vegetarian feast served on a banana leaf with variety of side dishes.',
  },
  {
    id: 20,
    name: 'KONJ',
    category: 'Kerala Meals',
    price: 320,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/shrimp%20recipe.jpg',
    desc: 'Spicy Kerala style shrimp (prawns) roast with coconut slices.',
  },
  {
    id: 21,
    name: 'PANEER CURRY',
    category: 'Kerala Meals',
    price: 200,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/download%20(8).jpg',
    desc: 'Creamy and rich paneer curry cooked with Indian spices.',
  },
  {
    id: 22,
    name: 'FISH FRY',
    category: 'Kerala Meals',
    price: 180,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/download%20(7).jpg',
    desc: 'Crispy and spicy Kerala style fish fry with traditional masala.',
  },
  {
    id: 23,
    name: 'KOLLI & POOTTI',
    category: 'Kerala Meals',
    price: 240,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/download%20(5).jpg',
    desc: 'Traditional Kerala combination of Tapioca (Kolli) and Beef/Mutton (Pootti).',
  },
  {
    id: 7,
    name: 'Kerala Style Burger',
    category: 'Snacks & Burgers',
    price: 180,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
    desc: 'Spicy Indian-style burger with local spices.',
  },
  {
    id: 24,
    name: 'UZHUNN VADA',
    category: 'Snacks & Burgers',
    price: 60,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Medu%20Vada%20South%20Indian%20dish.jpg',
    desc: 'Crispy and fluffy deep-fried lentil donuts.',
  },
  {
    id: 25,
    name: 'CUTLET',
    category: 'Snacks & Burgers',
    price: 80,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/chicken%20mince%20cutlet.jpg',
    desc: 'Spicy and crispy chicken mince cutlets.',
  },
  {
    id: 8,
    name: 'KITKAT SHAKE',
    category: 'Shakes & Beverages',
    price: 160,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Kit%20Kat%20Milkshake.jpg',
    desc: 'Indulgent milkshake blended with crunchy KitKat bars and chocolate syrup.',
  },
  {
    id: 12,
    name: 'Galaxy Shake',
    category: 'Shakes & Beverages',
    price: 180,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Epic%20Peanut%20Butter%20Chocolate%20Milkshakes.jpg',
    desc: 'An epic blend of peanut butter and chocolate for a stellar taste experience.',
  },
  {
    id: 13,
    name: 'Strawberry Shake',
    category: 'Shakes & Beverages',
    price: 150,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Images%20%E2%80%93%20Browse%204%2C539%20Stock%20Photos%2C%20Vectors%2C%20and%20Video.jpg',
    desc: 'Fresh strawberries blended into a thick, creamy delight.',
  },
  {
    id: 14,
    name: 'Avocado Juice',
    category: 'Shakes & Beverages',
    price: 170,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Brain%20Nourish%20Smoothie%20with%20Avocado%20%F0%9F%A5%91_%20Check%20out%20the%20Link%20In%20My%20Bio.jpg',
    desc: 'Rich and healthy avocado smoothie, perfect for a brain boost.',
  },
  {
    id: 16,
    name: 'Chocolate Shake',
    category: 'Shakes & Beverages',
    price: 150,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/chocolate%20with%20almonds%20shake%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F.jpg',
    desc: 'Double chocolate bliss with almonds for the ultimate cocoa lover.',
  },
  {
    id: 17,
    name: 'Dragon Juice',
    category: 'Shakes & Beverages',
    price: 160,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Dragon%20Fruit%20Lemonade%20_%20Limonada%20de%20Pitaya.jpg',
    desc: 'Refreshing dragon fruit lemonade, vibrant and exotic.',
  },
  {
    id: 18,
    name: 'Lime Juice',
    category: 'Shakes & Beverages',
    price: 60,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/21%20Lemon%20Juice%20Drink%20Ideas%20to%20Refresh%20on%20National%20Lemon%20Juice%20Day.jpg',
    desc: 'Classic refreshing lime juice to beat the heat.',
  },
  {
    id: 19,
    name: 'Mojito',
    category: 'Shakes & Beverages',
    price: 140,
    image: 'https://raw.githubusercontent.com/Afna7337/niche/main/Blue%20Long%20Island%20Iced%20Tea.jpg',
    desc: 'Cool and minty mojito with a refreshing blue twist.',
  },
  {
    id: 9,
    name: 'Chicken Curry',
    category: 'Kerala Meals',
    price: 240,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop',
    desc: 'Spicy Kerala style chicken curry with roasted coconut.',
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Kerala Breakfast');

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="section-padding bg-kerala-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-kerala-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kerala-green mb-6">
            Explore Our Delicacies
          </h2>
          <div className="w-24 h-1 bg-kerala-gold mx-auto mb-10" />
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat
                    ? 'bg-kerala-green text-white shadow-lg'
                    : 'bg-white text-kerala-brown hover:bg-kerala-green/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md menu-card-hover"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-kerala-gold text-kerala-brown font-bold px-4 py-1 rounded-full shadow-lg">
                    ₹{item.price}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-kerala-gold font-bold uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-kerala-green mb-2">
                    {item.name}
                  </h3>
                  <p className="text-kerala-brown/70 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <button className="w-full border border-kerala-green text-kerala-green font-bold py-2 rounded-xl hover:bg-kerala-green hover:text-white transition-all">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
