import { FaPlus, FaMinus, FaHeadphones } from 'react-icons/fa6';
import { GiTakeMyMoney, GiMoneyStack } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineWifiProtectedSetup } from 'react-icons/md';

import pc from '../../assets/images/PC/pc1.jpg';

import Evaluation from './Evaluation';
import Specification from './Specification';

function DetailPage() {
    return (
        <div>
            <div className="flex">
                <div className="w-[400px] flex-1">
                    <div className="flex items-center justify-center">
                        <img src={pc} alt="" className="w-3/5" />
                    </div>
                    <div className="mx-auto flex w-[90%] overflow-x-auto pb-2">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="mx-1 flex w-[90px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#b8b8b8]"
                            >
                                <img src={pc} alt="" className="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 pl-4">
                    <h2 className="text-xl font-semibold text-black">
                        Card màn hình MSI GeForce RTX 4070 GAMING X SLIM WHITE 12G
                    </h2>
                    <div className="mt-2 text-sm">
                        <span className="text-textColor2">Tình trạng: </span>
                        <span className="text-green-500">Còn hàng </span>
                    </div>
                    <div className="mt-6 flex items-center gap-4 rounded-xl border border-[#b8b8b8] bg-[#f7f9fb] p-4">
                        <span className="text-3xl font-semibold text-redColor">20.000.000đ</span>
                        <span className="text-textColor2 line-through">18.000.000đ</span>
                        <span className="rounded-md border border-redColor px-4 py-1 text-sm text-redColor">20%</span>
                    </div>

                    <div className="z-0 mt-6 flex items-center gap-4">
                        <p className="">Số lượng</p>

                        <div className="flex max-w-[8rem] items-center">
                            <button className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3">
                                <FaMinus />
                            </button>
                            <span className="h-11 w-20 border border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 outline-none">
                                {' '}
                                0
                            </span>
                            <button className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3">
                                <FaPlus />
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="w-1/2 rounded-lg border border-redColor py-2 text-redColor">
                            THÊM VÀO GIỎ HÀNG
                        </button>
                        <button className="w-1/2 rounded-lg bg-redColor text-white">MUA NGAY</button>
                    </div>

                    <h3 className="mt-6 font-semibold text-textColor2">YÊN TÂM MUA HÀNG</h3>
                    <div className="mt-4 flex flex-wrap gap-x-16 gap-y-4">
                        <div className="flex items-center gap-2">
                            <GiTakeMyMoney className="text-2xl text-redColor" />
                            <p className="text-sm text-textColor2">Cam kết giá tốt nhất thị trường</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiTakeMyMoney className="text-2xl text-redColor" />
                            <p className="text-sm text-textColor2">Cam kết giá tốt nhất thị trường</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiTakeMyMoney className="text-2xl text-redColor" />
                            <p className="text-sm text-textColor2">Cam kết giá tốt nhất thị trường</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiTakeMyMoney className="text-2xl text-redColor" />
                            <p className="text-sm text-textColor2">Cam kết giá tốt nhất thị trường</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex gap-4">
                <div className="w-3/5">
                    <Evaluation />
                </div>
                <div className="w-2/5">
                    <Specification />
                </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-between">
                <div className="flex flex-shrink-0 items-center rounded-lg border border-[#b8b8b8] bg-[#f7f9fb] p-4">
                    <TbTruckDelivery className="mr-3 mt-1 text-[50px]" />
                    <div>
                        <p className="text-sm font-semibold">CHÍNH SÁCH GIAO HÀNG</p>
                        <p className="text-sm text-textColor2">Nhận và thanh toán tại nhà</p>
                    </div>
                </div>
                <div className="flex flex-shrink-0 items-center rounded-lg border border-[#b8b8b8] bg-[#f7f9fb] p-4">
                    <MdOutlineWifiProtectedSetup className="mr-3 mt-1 rotate-90 text-[46px]" />
                    <div>
                        <p className="text-sm font-semibold">CHÍNH SÁCH GIAO HÀNG</p>
                        <p className="text-sm text-textColor2">Nhận và thanh toán tại nhà</p>
                    </div>
                </div>
                <div className="flex flex-shrink-0 items-center rounded-lg border border-[#b8b8b8] bg-[#f7f9fb] p-4">
                    <GiMoneyStack className="mr-3 mt-1 text-[50px]" />
                    <div>
                        <p className="text-sm font-semibold">CHÍNH SÁCH GIAO HÀNG</p>
                        <p className="text-sm text-textColor2">Nhận và thanh toán tại nhà</p>
                    </div>
                </div>
                <div className="flex flex-shrink-0 items-center rounded-lg border border-[#b8b8b8] bg-[#f7f9fb] p-4">
                    <FaHeadphones className="mr-3 text-[40px]" />
                    <div>
                        <p className="text-sm font-semibold">CHÍNH SÁCH GIAO HÀNG</p>
                        <p className="text-sm text-textColor2">Nhận và thanh toán tại nhà</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
