/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebase/Firebase"; // استيراد الدوال المناسبة من Firebase
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const Efootball = () => {
  const [games, setGames] = useState([]); // تخزين الألعاب في الحالة
  const [cart, setCart] = useState([]); // تخزين السلة

  // جلب البيانات من Firebase عند تحميل الصفحة
useEffect(() => {
    const fetchGames = async () => {
      const querySnapshot = await getDocs(collection(db, "efootball")); // جلب البيانات من مجموعة "efootball"
    const gamesList = querySnapshot.docs.map((doc) => ({
        id: doc.id, // إضافة الـ ID للمستند
        ...doc.data(), // إضافة البيانات من الـ document
}));
      setGames(gamesList); // تحديث حالة الألعاب
    };

    fetchGames(); // استدعاء دالة جلب الألعاب
  }, []); // يتم التنفيذ مرة واحدة عند تحميل الصفحة
useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        setCart(JSON.parse(savedCart));
    }
}, []);
const addToCart = (game) => {
  const updatedCart = [...cart, game];
  setCart(updatedCart); // تحديث السلة
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // حفظ السلة في localStorage

  Swal.fire({
      title: "Good job!",
      text: "Game added to cart!",
      icon: "success"
  });
};

  useEffect(() => {
    const addBtns = document.querySelectorAll(".add");

    addBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const game = btn.closest(".game-card");
        const gameName = game.querySelector(".title-div h3").textContent;
        const gamePrice = game.querySelector(".price").textContent;
        const gameImage = game.querySelector("img").src;
        const gameDescription = game.querySelector(".des p").textContent;

        const gameData = {
          name: gameName,
          price: gamePrice,
          image: gameImage,
          description: gameDescription,
        };

        if (localStorage.getItem("cart")) {
          const cart = JSON.parse(localStorage.getItem("cart"));
          cart.push(gameData);
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          const cart = [gameData];
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    });
  })
  
  return (
    <div className="games text-light text-center">
      <h1>eFootball</h1>
      <div className='pay-content'>
            <h1>Pay Now</h1>
            <h4>السعر هنا</h4>
        <h3 className='phone'>01064062303</h3>
        <a class="Btn" href="https://wa.me/+201288809563" target="_blank">
<div class="sign">
    <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
    <path
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
    ></path>
    </svg>
</div>

<div class="text">Whatsapp</div>
</a>
        <button className='btn btn-danger' onClick={()=> {
        let pay_content = document.querySelector('.pay-content');
        pay_content.style.display = 'none';
        }}>Cancel</button>
            </div>
    <div className="games-content">
                {games.length === 0 ? (
                    <h2>No games found</h2>
                ) : (
                    games.map((game) => (
                        <div className="game-card" key={game.id}>
                            <img src={game.image} alt="Game" className="img-fluid" />
                            <div className="title-div"><h3>{game.name}</h3></div>
                            <h6 className="price">{game.price} EGP</h6>
                            <div className="des"><p>{game.description}</p></div>
                            <div className="btns">
                            <button type="button" className="btn btn-info text-light now" onClick={() => {
                                    let pay_content = document.querySelector('.pay-content')
                                    let pay_content_price = document.querySelector('.pay-content').querySelector("h4");
                                    pay_content_price.innerText = `حول ${game.price} جنيه على رقم الموبايل الظاهر بالأسفل بعدين دوس على علامة الواتس وإبعت صورة فيها تفاصيل الدفع`;
                                    pay_content.style.display = 'flex';
                                }}>Buy Now</button>
                                {cart.some(item => item.name === game.name) ? (
                                    <button type="button" className="btn btn-info text-light" disabled>
                                        Added to Cart
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="btn btn-info text-light add" 
                                        onClick={() => addToCart(game)}
                                    >
                                        Add to Cart <FaCartPlus />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
    </div>
);

};
export default Efootball;
