import { Divider } from "@mui/material";
import OrderedFoodsDetailsCard from "./OrderedFoodsDetailsCard";
import OrderedFoodsFeesCard from "./OrderedFoodsFeesCard";

const OrderedFoodsCartItems = () => {
  return (
    <div className="flex flex-col ml-2 p-1 justify-between items-start gap-y-4">
      <section className="w-full">
        <OrderedFoodsDetailsCard />
      </section>
      <Divider className="w-full " />
      <section className="w-full">
        <OrderedFoodsFeesCard />
      </section>
    </div>
  );
};

export default OrderedFoodsCartItems;
