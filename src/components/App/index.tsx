import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import Calendar from './calendar.json';

function classNames(...classes: (boolean | null | undefined | string)[]) {
  return classes
    .filter(Boolean)
    .join(' ');
}

function App() {

  const calendarDays = Calendar;

  const nameOfDays = [
    {
      id: 0,
      dayName: "Monday",
      isWeekend: false
    },
    {
      id: 1,
      dayName: "Tuesday",
      isWeekend: false
    },
    {
      id: 2,
      dayName: "Wednesday",
      isWeekend: false
    },
    {
      id: 3,
      dayName: "Thursday",
      isWeekend: false
    },
    {
      id: 4,
      dayName: "Friday",
      isWeekend: false
    },
    {
      id: 5,
      dayName: "Saturday",
      isWeekend: true
    },
    {
      id: 6,
      dayName: "Sunday",
      isWeekend: true
    }
  ];

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
    isRangeStart: false,
    isInRange: false,
    isRangeEnd: false,
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
            <button className="text-lg text-gray-700 font-semibold rounded-md cursor-pointer hover:bg-gray-50 px-3 py-2">
              September 2021
            </button>
            <div className="flex justify-center space-x-2">
              <button
                className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 g-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ChevronLeftIcon className="w-6 h-6 stroke-current"/>
              </button>
              <button
                className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 g-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ChevronRightIcon className="w-6 h-6 stroke-current"/>
              </button>
            </div>
          </div>
          <div className="flex justify-around pt-2">
            <div className="hidden grid grid-rows-6 pt-10 pr-3 gap-y-1.5 text-sm text-gray-300">
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

            <div className="w-full">

              {/* Calendar Week Elements */}

              <div className="grid grid-cols-7 text-sm text-center text-gray-700">
                {nameOfDays.map((nameOfDay) => {
                  return (
                    <div
                      className={classNames(nameOfDay.isWeekend 
                        ? "text-red-600"
                        : null,
                        "flex items-center justify-center w-full h-10 font-semibold rounded-md"
                      )}
                    >
                      {nameOfDay.dayName.substring(0,2)}
                    </div>
                  );
                })}

              </div>

              <div className="grid grid-cols-7 gap-y-1.5 text-sm text-gray-700">

                {/* Calendar Days Elements */}

                {calendarDays.map((day) => {
                  return (
                    <div className={classNames(
                      day.isInRange && !(day.isRangeStart || day.isRangeEnd) && day.isStartingDayOfWeek
                        ? "bg-blue-100"
                        : day.isInRange && !(day.isRangeStart || day.isRangeEnd) && day.isEndingDayOfWeek
                          ? "bg-blue-100"
                          : day.isInRange && !(day.isRangeStart || day.isRangeEnd)
                            ? "bg-blue-100"
                            : null,
                      day.isRangeStart
                        ? "bg-gradient-to-r from-transparent via-transparent to-blue-100"
                        : null,
                      day.isRangeEnd
                        ? "bg-gradient-to-l from-transparent via-transparent to-blue-100"
                        : null,
                    
                      "flex items-center justify-center w-full"
                    )}>
                      <button
                        className={classNames(
                          day.isInteractable
                            ? "cursor-pointer hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
                            : "border-transparent cursor-default text-gray-300",
                          day.isFromPreviousMonth
                            ? "text-gray-300"
                            : null,
                          day.isFromNextMonth
                            ? "text-gray-300"
                            : null,
                          (day.isWeekend || day.isHoliday) && !(day.isFromPreviousMonth || day.isFromNextMonth) && !day.isInRange
                            ? "text-red-600"
                            : null,
                          (day.isWeekend || day.isHoliday) && (day.isFromPreviousMonth || day.isFromNextMonth) && !day.isInRange
                            ? "text-red-300"
                            : null,
                          day.isToday
                            ? (day.isWeekend || day.isHoliday)
                              ? "rounded-md font-semibold border border-red-300 hover:border-red-400 hover:bg-red-50 shadow-sm shadow-red-100"
                              : "rounded-md text-blue-500 font-semibold border border-blue-300 hover:border-blue-400 hover:bg-blue-50 shadow-sm shadow-blue-100"
                            : "border-transparent",
                          day.isSelected
                            ? "font-semibold text-white bg-blue-500 hover:border-blue-700 hover:bg-blue-600 shadow-sm shadow-blue-100"
                            : null,
                          day.isInRange && !(day.isRangeStart || day.isRangeEnd)
                            ? "font-semibold text-blue-500 bg-transparent hover:border-blue-500 hover:bg-blue-200 hover:text-blue-700 hover:shadow-sm hover:shadow-blue-100"
                            : day.isRangeStart
                              ? "rounded-r-none font-semibold text-white bg-blue-500 border-blue-500 hover:border-blue-700 hover:bg-blue-600 hover:rounded-md shadow-sm shadow-blue-100 transition-all duration-75 z-10"
                              : day.isRangeEnd
                                ? "rounded-l-none font-semibold text-white bg-blue-500 border-blue-500 hover:border-blue-700 hover:bg-blue-600 hover:rounded-md shadow-sm shadow-blue-100 transition-all duration-75 z-10"
                                : null,
                    
                          "flex items-center justify-center w-10 h-10 rounded-md z-20 border"
                    
                        )}
                      >
                        {day.date.day}
                      </button>
                    </div>
                  );
                })}
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