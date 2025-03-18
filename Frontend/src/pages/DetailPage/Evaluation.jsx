import { FaStar } from 'react-icons/fa';

import QandA from './Q.and.A';

function Evaluation() {
    return (
        <div>
            <div className="mb-6 rounded-lg border px-5 py-3 shadow">
                <p className="text-lg font-semibold text-black">Bình luận và đánh giá</p>
                <div className="mt-4 flex rounded-lg border">
                    <div className="flex w-2/5 flex-col items-center justify-center space-y-2 border-r">
                        <span className="text-3xl font-semibold">0/5</span>
                        <span className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                        <p className="">0 đánh giá và nhận xét</p>
                    </div>
                    <ul className="w-3/5 space-y-2 px-4 py-3">
                        <li className="flex items-center justify-between gap-2">
                            <span>5</span>
                            <FaStar className="text-xl text-yellow-500" />
                            <div className="mx-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
                            </div>
                            <p className="flex-shrink-0 text-sm">0 đánh giá</p>
                        </li>
                        <li className="flex items-center justify-between gap-2">
                            <span>4</span>
                            <FaStar className="text-xl text-yellow-500" />
                            <div className="mx-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
                            </div>
                            <p className="flex-shrink-0 text-sm">0 đánh giá</p>
                        </li>
                        <li className="flex items-center justify-between gap-2">
                            <span>3</span>
                            <FaStar className="text-xl text-yellow-500" />
                            <div className="mx-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
                            </div>
                            <p className="flex-shrink-0 text-sm">0 đánh giá</p>
                        </li>
                        <li className="flex items-center justify-between gap-2">
                            <span>2</span>
                            <FaStar className="text-xl text-yellow-500" />
                            <div className="mx-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
                            </div>
                            <p className="flex-shrink-0 text-sm">0 đánh giá</p>
                        </li>
                        <li className="flex items-center justify-between gap-2">
                            <span>1</span>
                            <FaStar className="text-xl text-yellow-500" />
                            <div className="mx-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
                            </div>
                            <p className="flex-shrink-0 text-sm">0 đánh giá</p>
                        </li>
                    </ul>
                </div>

                <div className="my-6 justify-items-center">
                    <p className="mb-4">Bạn đánh giá sao về sản phầm này</p>
                    <button className="rounded-lg bg-primary px-4 py-2 text-white">Đánh giá ngay</button>
                </div>
            </div>

            <QandA />
        </div>
    );
}

export default Evaluation;
