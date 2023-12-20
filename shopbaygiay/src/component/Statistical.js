import "../css/statistical.css"
import {useEffect, useState} from "react";
import * as AccountService from "../service/AccountService";
import {getStatistical} from "../service/OrderProductDetailService";
import * as OrderProductDetailService from "../service/OrderProductDetailService";
import * as FormatService from "../service/FormatService";

export function Statistical() {
    const [statistical, setStatistical] = useState([]);

    useEffect(() => {
        getStatistical()
    }, [])

    const getStatistical = async () => {
        const data = await OrderProductDetailService.getStatistical();
        console.log(data)
        setStatistical(data)
    }

    if(!statistical) return null

    return (
        <div>
            <section className="abt">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className="h-full overflow-y-auto">
                <div className="container px-6 mx-auto grid">
                    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Thống kê doanh thu
                    </h2>
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        {/* Card */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div
                                className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Lượng khách truy cập
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {statistical && statistical[0].value}
                                </p>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div
                                className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Tổng doanh thu
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    đ{statistical && FormatService.formatPrice(statistical[1].value)}
                                </p>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div
                                style={{height:57, width:57}}
                                className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                <i style={{margin:"0 0 0 15%"}} className="fa-solid fa-warehouse"></i>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Hàng tồn kho
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {statistical && statistical[2].value}
                                </p>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div
                                style={{height:57, width:57}}
                                className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                <i className="fa-brands fa-sellsy"></i>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Hàng đã bán được
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {statistical && statistical[3].value}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* New Table */}
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Hans Burger</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    10x Developer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Jolina Angelie</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Unemployed
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 369.95
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                        Pending
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Sarah Curry</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Designer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 86.00
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                        Denied
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Rulia Joberts</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Actress
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 1276.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Wenzel Dashington</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Actor
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                        Expired
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Dave Li</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Influencer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Maria Ramovic</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Runner
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Hitney Wouston</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Singer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full"
                                                     src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                     alt="" loading="lazy"/>
                                                <div className="absolute inset-0 rounded-full shadow-inner"
                                                     aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Hans Burger</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    10x Developer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved
                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                        </div>
                    </div>
                    {/* Charts */}
                </div>
            </main>
        </div>
    )
}