import { IoSearch } from 'react-icons/io5';

import logo from '../../assets/images/logo.webp';

function HeaderPage() {
    const avatr =
        'https://danhgiaxe.edu.vn/upload/2024/12/bo-suu-tap-hinh-anh-gai-k8-dep-quyen-ru-khien-ban-say-dam-4.webp';
    return (
        <div className="flex items-center bg-background px-20 py-4 text-white">
            <img src={logo} alt="" />
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

            <div className="flex items-center gap-4">
                <img src={avatr} alt="" className="h-10 w-10 rounded-full object-cover object-center" />
                <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPage;
