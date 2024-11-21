/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import './Cart.css';
import Swal from 'sweetalert2';
import vodafone from "../../imgs/klipartz.com.png"
const Cart = () => {
  const [items, setItems] = useState([]);

  // تحميل البيانات من localStorage عند تحميل المكون
  useEffect(() => {
    const fetchLocalGames = async () => {
      const localGames = localStorage.getItem('cart');
      if (!localGames) return;
      const readyGames = JSON.parse(localGames);

      // تأكد من أن كل عنصر يحتوي على خاصية quantity وهي عدد صحيح
      const updatedGames = readyGames.map(item => ({
        ...item,
        quantity: item.quantity ? Number(item.quantity) : 1 // إذا لم تكن quantity موجودة، قم بتعيينها إلى 1
      }));

      setItems(updatedGames);
    };
    fetchLocalGames();
  }, []);

  const removeItem = (name) => {
    const updatedItems = items.filter(item => item.name !== name);
    setItems(updatedItems);  // تحديث السلة
    localStorage.setItem('cart', JSON.stringify(updatedItems));  // حفظ السلة في localStorage
  };

  const updateQuantity = (index, delta) => {
    if (delta === -1){
      if (items[index].quantity === 1) {
        return;
      }
    }
    const updatedItems = [...items];
    
    // تأكد من أن الكمية هي عدد صالح قبل تعديلها
    updatedItems[index].quantity = updatedItems[index].quantity + delta;

    setItems(updatedItems); // تحديث الحالة
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // حفظ التحديثات في localStorage
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='cart text-light'>
      <div className='pay-content'>
        <div className="radio-group">
          <input className="radio-input" name="radio-group" id="radio1" type="radio" checked />
          <label className="radio-label" htmlFor="radio1">
            <span className="radio-inner-circle"></span>
            Vodafone Cash
          </label>
        </div>
        <h1>الدفع بإستخدام فودافون كاش</h1>
        <h4>حول {totalPrice} جنيه على رقم الموبايل الظاهر بالأسفل بعدين دوس على علامة الواتس وإبعت صورة فيها تفاصيل الدفع</h4>
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
        <button className='btn btn-danger' onClick={() => {
          let payContent = document.querySelector('.pay-content');
          payContent.style.display = 'none';
        }}>Cancel</button>
      </div>

      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div className='item' key={item.id}>
            <h3>{item.name}</h3>
            <p className='price'>{item.price} EGP</p>
            <button
              className='btn btn-danger'
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                    removeItem(item.name);
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your item has been deleted.",
                      icon: "success"
                    });
                  }
                });
              }}
            >
              Remove
            </button>
            <div className='quantity'>
              <span>Quantity: <span>{item.quantity}</span></span>
              <button className='btn btn-primary' onClick={() => updateQuantity(index, -1)}>-</button>
              <button className='btn btn-primary' onClick={() => updateQuantity(index, 1)}>+</button>
            </div>
          </div>
        ))
      )}
      
      <div className='total'>
        <h4>Total Price: {totalPrice} EGP</h4>
        <img src={vodafone} className='img-fluid vodafone' alt="vodafone" />
        <button className='pay' onClick={() => {
          if(items.length === 0){
            Swal.fire({
              title: "Your cart is empty?",
              icon: "error",
            });
            return
          }
          let payContent = document.querySelector('.pay-content');
          payContent.style.display = 'flex';
        }}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
