import React from 'react'

const Table = () => {
  return (
    <div className='relative top-[55px] px-6 my-2 h-[589px]'>
<p className='text-base font-normal text-[#A4A7B7] py-8'>Films</p>

<div className="overflow-x-auto sm:overflow-x-scroll relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="py-3 px-6 text-base font-medium">
                    Film Title
                </th>
                <th scope="col" className="py-3 px-6">
                    Release date
                </th>
                <th scope="col" className="py-3 px-6">
                    Director
                </th>
                <th scope="col" className="py-3 px-6">
                    Producer
                </th>
                <th scope="col" className="py-3 px-6">
                    Episode ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Character
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">
                    White
                </td>
                <td className="py-4 px-6">
                    Laptop PC
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Watches
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac
                </th>
                <td className="py-4 px-6">
                    Silver
                </td>
                <td className="py-4 px-6">
                    PC
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple AirPods
                </th>
                <td className="py-4 px-6">
                    White
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    iPad Pro
                </th>
                <td className="py-4 px-6">
                    Gold
                </td>
                <td className="py-4 px-6">
                    Tablet
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Keyboard
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple TV 4K
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    TV
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    $179
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                </th>
                <td className="py-4 px-6">
                    Silver
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    No
                </td>
                <td className="py-4 px-6">
                    $29
                </td>
                
            </tr>
        </tbody>
    </table>
</div>



    </div>
  )
}

export default Table