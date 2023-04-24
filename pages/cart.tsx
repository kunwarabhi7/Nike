import CartItem from "@/components/CartItem";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";

 type Props = {};

const Cart = (props: Props) => {
  return (
    <div>


    <div
      className="py-20 text-black w-full
    
      flex flex-col md:flex-row  item-center justify-around"
    >
      <div className="text-xl ">
        <p className="text-center md:text-left md:ml-5 font-bold"> Baag</p>
        <div className="space-y-4 mx-3">

       <CartItem />
       <CartItem />
       <CartItem />
       <CartItem />
        </div>
      </div>
      <div className="text-xl  ">
        <p> Summary</p>
        <div className="flex justify-between ">
          <p>Subtotal</p>
          <p>₹ 12 995.00</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-">Estimated Delivery & Handling</p>
          <p>₹ 750.00</p>
        </div>
        <div className="border-t border-gray-300  "/>
        <div className="flex justify-between my-3">
          <p>Total</p>
          <p>₹ 13 745.000</p>
        </div>
        <div className="border-t border-gray-300 "/>
        <div className="flex flex-col space-y-2 mt-5 mx-2">
          <button className="bg-black rounded-full py-1 hover:opacity-50 text-white">Guest CheckOuta</button>
          <button className="bg-black text-white py-1 hover:opacity-50 rounded-full">Member Checkout</button>
        </div>
      </div>
    </div>
    <YouMayAlsoLike />
    </div>
  );
};

export default Cart;
