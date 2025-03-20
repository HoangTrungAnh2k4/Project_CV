import { FaPlus, FaMinus } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';

const avatr =
    'https://danhgiaxe.edu.vn/upload/2024/12/bo-suu-tap-hinh-anh-gai-k8-dep-quyen-ru-khien-ban-say-dam-4.webp';

function CheckoutPage() {
    return (
        <div className="mx-auto w-[800px] rounded-lg border px-6 py-4 shadow-lg">
            <button className="ml-auto block border px-2 py-1 text-sm">Xóa giỏ hàng</button>
            <ul className="mt-4">
                <li className="flex justify-between border-b-2 border-gray-300 py-6">
                    <img src={avatr} alt="" className="size-[120px] object-cover object-center" />
                    <p className="-ml-6 w-[300px] font-semibold text-textColor2">
                        Nguồn Gaming ASUS TUF 1200W GOLD ATX 3.0 80 PLUS - Full Modular
                    </p>
                    <div className="flex max-w-[8rem]">
                        <button className="h-11 rounded-s-lg border border-gray-300 bg-gray-50 p-3">
                            <FaMinus />
                        </button>
                        <span className="h-11 w-20 border border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 outline-none">
                            {' '}
                            0
                        </span>
                        <button className="h-11 rounded-e-lg border border-gray-300 bg-gray-50 p-3">
                            <FaPlus />
                        </button>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                        <p className="font-semibold text-redColor">19.000.000đ</p>
                        <RiDeleteBin6Line className="cursor-pointer rounded-full bg-gray-200 p-1 text-3xl hover:scale-110" />
                    </div>
                </li>
                <li className="flex justify-between border-b-2 border-gray-300 py-6">
                    <img src={avatr} alt="" className="size-[120px] object-cover object-center" />
                    <p className="-ml-6 w-[300px] font-semibold text-textColor2">
                        Nguồn Gaming ASUS TUF 1200W GOLD ATX 3.0 80 PLUS - Full Modular
                    </p>
                    <div className="flex max-w-[8rem]">
                        <button className="h-11 rounded-s-lg border border-gray-300 bg-gray-50 p-3">
                            <FaMinus />
                        </button>
                        <span className="h-11 w-20 border border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 outline-none">
                            {' '}
                            0
                        </span>
                        <button className="h-11 rounded-e-lg border border-gray-300 bg-gray-50 p-3">
                            <FaPlus />
                        </button>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                        <p className="font-semibold text-redColor">19.000.000đ</p>
                        <RiDeleteBin6Line className="cursor-pointer rounded-full bg-gray-200 p-1 text-3xl hover:scale-110" />
                    </div>
                </li>
            </ul>

            {/* information of customer  */}
            <div className="mt-4">
                <h3 className="font-semibold"> THÔNG TIN KHÁCH HÀNG</h3>

                <form className="mt-8 px-6">
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-gray-900 outline-none"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
                        >
                            Họ và tên
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-gray-900 outline-none"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
                        >
                            Số điện thoại
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-gray-900 outline-none"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
                        >
                            Gmail
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-gray-900 outline-none"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
                        >
                            Địa chỉ
                        </label>
                    </div>
                    <div className="group relative z-0 w-full">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-gray-900 outline-none"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
                        >
                            Ghi chú
                        </label>
                    </div>
                </form>
            </div>

            <h3 className="mt-6 font-semibold">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="mt-2 space-x-2">
                <input type="radio" checked />
                <label className="text-textColor2">Thanh toán khi nhận hàng</label>
            </div>

            <h3 className="mt-4 font-semibold">TỔNG TIỀN</h3>
            <div className="mt-1 flex justify-between text-textColor2">
                <p>Tổng tiền</p>
                <p>19.000.000đ</p>
            </div>
            <div className="mt-1 flex justify-between text-textColor2">
                <p>Thành tiền</p>
                <p className="font-semibold text-redColor">19.000.000đ</p>
            </div>

            <button className="mx-auto mb-6 mt-10 block w-2/5 rounded-lg bg-primary py-2 text-white">ĐẶT HÀNG</button>
        </div>
    );
}

export default CheckoutPage;
