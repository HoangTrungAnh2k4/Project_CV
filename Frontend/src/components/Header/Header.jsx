import { IoSearch, IoCart } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.webp';
import Cart from './Cart';

function HeaderPage() {
    const avatr =
        'https://danhgiaxe.edu.vn/upload/2024/12/bo-suu-tap-hinh-anh-gai-k8-dep-quyen-ru-khien-ban-say-dam-4.webp';
    return (
        <div className="flex items-center bg-background px-20 py-4">
            <Link to={'/'}>
                <img src={logo} alt="" />
            </Link>
            <div className="mx-auto flex w-[40%] overflow-hidden rounded-md bg-white">
                <input
                    type="text"
                    placeholder="Search Something..."
                    className="w-full border-none bg-white px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-0"
                />
                <button
                    type="button"
                    className="m-1 ml-2 flex items-center justify-center rounded-md bg-[#f9bb01] px-5"
                >
                    <IoSearch className="text-2xl text-white" />
                </button>
            </div>

            <div className="flex items-center gap-6">
                <div className="group relative hover:scale-110">
                    <div className="cursor-pointer px-8 py-1 text-primary transition-all">
                        <IoCart className="my-auto mt-[18px] text-3xl" />
                        <div className="relative -right-5 -top-9 flex size-[18px] items-center justify-center rounded-full bg-redColor text-[10px] font-semibold text-white">
                            20
                        </div>
                    </div>
                    <Cart />
                </div>

                <div className="flex items-center gap-4">
                    <Link to={'/login'}>
                        <img src={avatr} alt="" className="h-10 w-10 rounded-full object-cover object-center" />
                    </Link>
                    <div className="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPage;
