import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import { Calendar } from 'calendar-base';
import { flushSync } from 'react-dom';

const cal = new Calendar();



function App() {
  const daysArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const offset = 5;
  const arr = [];

  for(let i=0; i < daysArr.length; i++) {
    const pointer = (i + offset) % daysArr.length;
    arr.push(daysArr[pointer]);
  }
  
  const state = {
    isToday: false,
    isWeekend: false,
    isHoliday: false,
    isStartingDayOfWeek: false,
    isSelectStart: false,
    isSelected: false,
    isSelectEnd: false,
    isFromPreviousMonth: false,
    isFromNextMonth: false,
    date: {
      weekNumber: 1,
      day: 1, 
      nameOfDay: 0, // add offset
      month: 0,
      year: 2021
    }
  }


  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="select-none flex bg-white shadow-lg rounded-xl w-full sm:w-auto justify-center">
        <div className="flex flex-col w-[360px] justify-evenly px-5 pt-5 pb-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <button className="text-lg font-semibold rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              September 2021
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
            </div>
          </div>
          <div className="flex justify-around pt-2">
            <div className="grid grid-rows-6 pt-10 pr-3 gap-y-1.5 text-sm text-gray-300">
              <span
                className="flex items-center justify-center w-full h-auto rounded-md"
              >
                11
              </span>
              <span
                className="flex items-center justify-center w-full h-auto rounded-md"
              >
                12
              </span>
              <span
                className="flex items-center justify-center w-full h-auto rounded-md"
              >
                13
              </span>
              <span
                className="flex items-center justify-center w-full h-auto rounded-md"
              >
                14
              </span>
              <span
                className="flex items-center justify-center w-full h-auto rounded-md"
              >
                15
              </span>
              <span
                className="flex items-center justify-center w-full h-auto rounded-md"
              >
                16
              </span>
            </div>
            <div className="grid grid-rows-7 w-full">
              <div className="grid grid-cols-7 text-sm text-center text-gray-900">
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
                  Fr
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
              </div>
              <div className="grid grid-cols-7 gap-y-1.5 text-sm text-center text-gray-700">
                <div className="flex items-center justify-center w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    1
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    2
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    3
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    4
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    5
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    6
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    7
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    8
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    9
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    10
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer font-semibold text-blue-500 border border-blue-300 hover:border-blue-400 hover:bg-gray-50"
                  >
                    11
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    12
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    13
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    14
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    15
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    16
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    17
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    18
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    19
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    20
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    21
                  </button>
                </div>
                <div className="flex items-center justify-around w-full bg-blue-50">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-l-md cursor-pointer font-semibold text-white bg-blue-500 border border-blue-500 hover:border-blue-700 hover:bg-blue-600 hover:text-white hover:rounded-md"
                  >
                    22
                  </button>
                </div>
                <div className="flex items-center justify-around w-full bg-blue-50">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer font-semibold text-blue-500 border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    23
                  </button>
                </div>
                <div className="flex items-center justify-around w-full bg-blue-100">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer font-semibold text-blue-500 border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    24
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    25
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    26
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    27
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    28
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    29
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    30
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    31
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    8
                  </button>
                </div>
                <div className="flex items-center justify-around w-full">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50"
                  >
                    9
                  </button>
                </div>
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
          <div className="flex justify-between pt-2">
            <div className="flex">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Today
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Set date
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;