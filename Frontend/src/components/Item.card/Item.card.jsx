import bestSale from '../../assets/images/general/best-sale.png';

function ItemCard({ item }) {
    return (
        <div className="card w-56 cursor-pointer overflow-hidden rounded-md border p-2 px-3 shadow-md transition-all hover:-translate-y-2">
            <img src={item.image} alt={item.name} />

            {item.bestSale && <img src={bestSale} alt="" className="w-[70px]" />}
            <div className="card-body mt-2">
                <h2 className="line-clamp-3">{item.name}</h2>

                <div className="mt-4 flex items-center gap-4">
                    <p className="text-textColor2 text-sm line-through">{item.oldPrice}</p>
                    <div className="bg-redColor rounded-lg px-2 py-[2px] text-sm text-white">{item.discount}</div>
                </div>

                <div className="text-redColor mt-2 text-xl font-semibold">{item.newPrice}</div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
                <p className="font-semibold text-textColor1">Đã bán:</p>
                <span className="">{item.countSold}</span>
            </div>
        </div>
    );
}

export default ItemCard;
