import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';

function Month() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="select-none flex bg-white shadow-lg rounded-xl w-[368px]">
        <div className="flex flex-col px-5 pt-5 pb-6 border-b border-gray-100">
          <div className="flex items-center justify-between space-x-6">
            <button className="text-xl font-semibold rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              2021
            </button>
            <div className="flex justify-center space-x-2">
              <button
                className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 g-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-900 stroke-current"/>
              </button>
              <button
                className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 g-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-900 stroke-current"/>
              </button>
              <button
                className="inline-flex items-center p-1.5 border border-red-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 g-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <XIcon className="w-6 h-6 text-red-900 stroke-current"/>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-2 text-base text-center text-gray-900">
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 border border-white hover:border-gray-300 px-3 py-2">
              Jan
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Feb
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Mar
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Apr
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              May
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Jun
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Jul
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Aug
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Sep
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Oct
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Nov
            </button>
            <button className="text-xl rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              Dec
            </button>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Month;