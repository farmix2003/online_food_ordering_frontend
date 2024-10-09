import AddressCard from "./AddressCard";
import OrderedFoodsCartItems from "./OrderedFoodsCartItems";

const Cart = () => {
  return (
    <div className="w-full relative">
      <main className="md:flex justify-between">
        <section className="md:w-[30%] sapce-y-4 md:min-h-screen pt-10">
          <OrderedFoodsCartItems />
        </section>
        <section>
          <span className="absolute mx-5 w-[1px] h-full bg-gray-400"></span>
        </section>
        <section className="md:w-[70%]">
          <AddressCard />
        </section>
      </main>
    </div>
  );
};

export default Cart;
