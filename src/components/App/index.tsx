import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';

function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="select-none flex bg-white shadow-lg rounded-xl w-full sm:w-auto justify-center">
        <div className="flex flex-col w-[360px] justify-evenly px-5 pt-5 pb-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <button className="text-xl font-semibold rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              July 2021
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
          <div className="grid grid-cols-7 gap-y-1.5 text-base text-center text-gray-900">
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md"
            >
              Mo
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md"
            >
              Tu
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md"
            >
              We
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md"
            >
              Th
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md"
            >
              Fri
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md text-red-600"
            >
              Sa
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold rounded-md"
            >
              Su
            </span>

            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              1
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              2
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              3
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              4
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              5
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              6
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              7
            </span>

            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              8
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-700 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              9
            </span>
            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              10
            </span>
            <span className="flex items-center justify-center w-full h-10 font-semibold text-blue-500 cursor-pointer border border-blue-300 hover:border-blue-400 hover:border rounded-md hover:bg-gray-50">
              11
            </span>
            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              12
            </span>
            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              13
            </span>
            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              14
            </span>

            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              15
            </span>
            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              16
            </span>
            <span className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50">
              17
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              18
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              19
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              20
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              21
            </span>

            <span
              className="flex items-center justify-center w-full h-10 font-semibold text-white bg-blue-600 cursor-pointer rounded-l-md"
            >
              22
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold text-blue-500 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50 bg-blue-50"
            >
              23
            </span>
            <span
              className="flex items-center justify-center w-full h-10 font-semibold text-blue-500 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50 bg-blue-50"
            >
              24
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              25
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              26
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              27
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              28
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              29
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              30
            </span>
            <span
              className="flex items-center justify-center w-full h-10 cursor-pointer hover:border hover:border-gray-300 hover:rounded-md hover:bg-gray-50"
            >
              31
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              1
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              2
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              3
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              4
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              5
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              6
            </span>
            <span
              className="flex items-center justify-center w-full h-10 text-gray-300 rounded-md"
            >
              7
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;