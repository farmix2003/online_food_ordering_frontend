import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const OrderedFoodDetails = [
  {
    id: 1,
    img: "https://yastatic.net/naydex/yandex-search/F1i0BR300/875884Se3JC/CWoI_xEI0nAOW7tcCrNEbyWgkB9YDL-1sgsFXq9Oy2TSGbfzHaymeby2jp36TgxBNNL9af9MfJj4owzIgLzmhgl5W-3AjQdlnl5uXgpyBOhy8FRYTo2o8yKcBlr4jEkwx9Yt7kAlvXIlqceDsF5chDPAvGs-mS9eLXVPGgSsPchZKQq_Bc",
    title: "Hamburger",
  },
  {
    id: 2,
    img: "https://yandex-images.clstorage.net/r5Q3HR131/68b3716ENiru/h0lDTLlRutJ81_dJs88V5NqHH_JenKmn_5R_I1ucPQA9E2Ib6evhjNB2omg36oNELCe1rMIjoBcrzUcfYIZuq-NdhygI1F_GTUK3yYOfNDEOtg43_tl4A9qhuhMtb-8iH2CFzZtsg3tR1tftErti1FmCdCi2ZUaWSPkViWC2qM4FOwDujTMI0Xtm5PpA3cYS2DQu1e6ZiQQapN4WLv59kC7RJYz5nbG50IaVTeD4ZaXJ4tGq5ucVwSjoBYtjpykMN2ph716x-dM69Wd7490nQRk13dfcy4hEiGU-pR4vDQJ-YNZsKvwAqRJmZI1waWTUCyBQixRH9nF7iEe6YjbpnlRJok9P8XkwKGVWKjNeNALoJN82X6kZ1Kpk35Qvrg4DT7A2DEnt4qlBFDWdAUi2liohs0q31iXC2Uhn6EAmWa0XK2KsH3Po8jl1dlhTn2USSLeONPyJmHWYZtxG_O0MA65R1w2In-Or0SZ1nGHZ9gX7kpNa1aUWUWk7lUlDVru99ytALUwwOHDKRKfJIh81QIvljGTfeEhHiJZNNDztDVM_MeQs6O6yiLCWFV7xelVGGCPjybTEpSErCpWpEad7HfbpsD09QGmxWUY0SjK_tEJbBZx1nUtqNJt1LDefjX8BHsIXX9q98wqA9raN0Fum5XuQspsVJ9RSiHqlyJAkuy3WmbIevyGYgdiGNihAjdUzScbeNm652dS49F_lDe5tYm5wVr3anDO7AOY2PeBIx3Z5stFIl7alAnnK9krgRiguRZugXz7BWhJppWZLgB9kEzrH7ee_OxgHmLQsZM8c74D84TX-2Gyze1PnRx5SWfdFW4Aw2rcVt9BbCSVKAoSprAZIAk8_4XiyyMYmehP99HEbZz50DMg4RRp3DUb_7i2g_aIV_zi8MvtAtCSdkcjEhppQwki2FfRxabh2qGD3Co7HGyA-LILrAlh3RdujTecAyQXNNz5bedWqlkxmw",
    title: "Hatay döner",
  },
];

const OrderedFoodDetailsItem = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (id: number) => {
    const food = OrderedFoodDetails.find((food) => food.id === id);
    if (food) {
      setCount((count) => count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="flex flex-col items-start w-[100%] justify-between gap-3 ">
      {OrderedFoodDetails.map((item) => (
        <div className="flex flex-col w-full bg-gray-500/30 rounded-md p-2">
          <div className="flex gap-3 items-center justify-between ">
            <div className="flex gap-x-9">
              <img
                src={item.img}
                alt={item.title}
                className="w-[5rem] h-[5rem] object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <p className="text-xl font-semibold">{item.title}</p>
                <div className=" flex items-center">
                  <RemoveCircleOutlineOutlined
                    onClick={handleDecrement}
                    className="text-xl"
                  />
                  <span className="mx-3 font-semibold text-xl">{count}</span>
                  <AddCircleOutlineOutlined
                    onClick={() => handleIncrement(item.id)}
                    className="text-xl"
                  />
                </div>
              </div>
            </div>
            <div className="p-1">
              <span>230 TL</span>
            </div>
          </div>
          <button className="mt-2 transition-colors bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
            Siparişi tamamla
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderedFoodDetailsItem;
