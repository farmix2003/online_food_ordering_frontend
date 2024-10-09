const fees = [
  {
    id: 1,
    itemsNumber: 2,
    fee: 230,
  },
  {
    id: 2,
    itemsNumber: 3,
    fee: 290,
  },
];
const OrderedFoodsFeesCard = () => {
  return (
    <div>
      <p>Toplam Ürün Fiyatı: {fees[0].fee + fees[1].fee} TL</p>
      <p>
        Siparişteki Ürünlerin Toplamı:{" "}
        {fees[1].itemsNumber + fees[0].itemsNumber} Adet
      </p>
      <p>Sipariş Ücreti: {fees[1].fee} TL</p>
      <p>Kullanıcı İadesi: -{fees[1].fee} TL</p>
      <p>Kullanıcı Kargo Ücreti: -{fees[1].fee} TL</p>
    </div>
  );
};

export default OrderedFoodsFeesCard;
