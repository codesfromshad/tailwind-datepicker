import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import Calendar from './calendar.json';

function classNames(...classes: (boolean | null | undefined | string)[]) {
  return classes
    .filter(Boolean)
    .join(' ');
}

function App() {

  const calendarDays = Calendar;

  const weekNumber = new Set();
  
  const filteredCalendarWeekNumbers = calendarDays.filter((obj) => {
    const isPresentInSet = weekNumber.has(obj.date.weekNumber);
    weekNumber.add(obj.date.weekNumber);
    return !isPresentInSet;
  });

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
    <div className="dark">
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="select-none flex bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full sm:w-auto justify-center">
          <div className="flex flex-col w-[360px] justify-evenly px-5 pt-5 pb-6 border-b rounded-xl border-gray-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <button className="text-lg text-gray-700 dark:text-slate-200 font-semibold rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 px-3 py-2 active:bg-gray-100 dark:active:bg-slate-600">
                September 2021
              </button>
              <div className="flex justify-center space-x-2">
                <button
                  className="inline-flex items-center p-1.5 border border-gray-300 dark:border-slate-200 shadow-sm dark:shadow-slate-900 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-slate-200 g-white hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"
                >
                  <ChevronLeftIcon className="w-6 h-6 stroke-current"/>
                </button>
                <button
                  className="inline-flex items-center p-1.5 border border-gray-300 dark:border-slate-200 shadow-sm dark:shadow-slate-900 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-slate-200 g-white hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"
                >
                  <ChevronRightIcon className="w-6 h-6 stroke-current"/>
                </button>
              </div>
            </div>
            <div className="flex justify-around pt-2">
              <div className="grid grid-rows-6 pt-10 pr-4 gap-y-1.5 text-sm text-gray-300 dark:text-slate-600">
                {filteredCalendarWeekNumbers.map((day) => {
                  return (
                    <div
                      className="flex items-center justify-center w-full h-auto"
                    >
                      {day.date.weekNumber}
                    </div>
                  ); 
                })}
              </div>
              <div className="w-full">

                {/* Calendar Week Elements */}

                <div className="grid grid-cols-7 text-sm text-center text-gray-700 dark:text-slate-200">
                  {nameOfDays.map((nameOfDay) => {
                    return (
                      <div
                        className={classNames(nameOfDay.isWeekend
                          ? "text-red-700 dark:text-red-500"
                          : null,
                          "flex items-center justify-center w-full h-10 font-semibold rounded-md"
                        )}
                      >
                        {nameOfDay.dayName.substring(0,2)}
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-7 gap-y-1.5 text-sm text-gray-700 dark:text-slate-200">

                  {/* Calendar Days Elements */}

                  {calendarDays.map((day) => {
                    return (
                      <div className={classNames(
                        day.isInRange && !(day.isRangeStart || day.isRangeEnd) && day.isStartingDayOfWeek
                          ? "bg-blue-100 dark:bg-slate-900"
                          : day.isInRange && !(day.isRangeStart || day.isRangeEnd) && day.isEndingDayOfWeek
                            ? "bg-blue-100 dark:bg-slate-900"
                            : day.isInRange && !(day.isRangeStart || day.isRangeEnd)
                              ? "bg-blue-100 dark:bg-slate-900"
                              : null,
                        day.isRangeStart
                          ? "bg-gradient-to-r from-transparent via-transparent to-blue-100 dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-slate-900"
                          : null,
                        day.isRangeEnd
                          ? "bg-gradient-to-l from-transparent via-transparent to-blue-100 dark:bg-gradient-to-l dark:from-transparent dark:via-transparent dark:to-slate-900"
                          : null,
      
                        "flex items-center justify-center w-full"
                      )}>
                        <button
                          className={classNames(
                            day.isInteractable
                              ? "cursor-pointer hover:border-gray-300 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 hover:shadow-sm"
                              : "border-transparent cursor-not-allowed text-gray-300 dark:text-slate-600",
                            day.isFromPreviousMonth
                              ? "text-gray-300 dark:text-slate-600"
                              : null,
                            day.isFromNextMonth
                              ? "text-gray-300 dark:text-slate-600"
                              : null,
                            (day.isWeekend || day.isHoliday) && !(day.isFromPreviousMonth || day.isFromNextMonth) && !day.isInRange
                              ? "text-red-700 dark:text-red-500"
                              : null,
                            (day.isWeekend || day.isHoliday) && (day.isFromPreviousMonth || day.isFromNextMonth) && !day.isInRange
                              ? "text-red-300 dark:text-red-900"
                              : null,
                            day.isToday
                              ? (day.isWeekend || day.isHoliday)
                                ? "rounded-md font-semibold border border-red-400 dark:border-red-900 hover:border-red-500 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900 shadow-sm shadow-red-100 dark:shadow-red-900"
                                : "rounded-md text-blue-700 dark:text-blue-400 font-semibold border border-blue-400 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 shadow-sm shadow-blue-100 dark:shadow-blue-700"
                              : "border-transparent",
                            day.isSelected
                              ? "font-semibold text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-800  hover:border-blue-500 dark:border-blue-700 dark:hover:border-blue-600 dark:hover:bg-blue-700 shadow-sm shadow-blue-100 dark:shadow-blue-900"
                              : null,
                            day.isInRange && !(day.isRangeStart || day.isRangeEnd)
                              ? "font-semibold text-blue-700 dark:text-blue-400 bg-transparent hover:border-blue-500 hover:bg-blue-200 dark:hover:bg-slate-700 hover:text-blue-700 hover:shadow-sm hover:shadow-blue-100 dark:hover:shadow-slate-900"
                              : day.isRangeStart
                                ? "rounded-r-none font-semibold text-white bg-blue-700 dark:bg-blue-800 border-blue-500 dark:border-blue-700 hover:border-blue-700 dark:hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 hover:rounded-md shadow-sm shadow-blue-100 dark:shadow-blue-900 transition-all duration-75"
                                : day.isRangeEnd
                                  ? "rounded-l-none font-semibold text-white bg-blue-700 dark:bg-blue-800 border-blue-500 dark:border-blue-700 hover:border-blue-700 dark:hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 hover:rounded-md shadow-sm shadow-blue-100 dark:shadow-blue-900 transition-all duration-75"
                                  : null,
      
                            "flex items-center justify-center w-10 h-10 rounded-md border"
      
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
            <div className="flex justify-between pt-5">
              <div className="flex">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-200 shadow-sm text-sm dark:shadow-slate-900 font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"
                >
                  Today
                </button>
              </div>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-slate-900 hover:bg-blue-200 dark:hover:bg-slate-700 active:bg-blue-300 active:text-blue-800 dark:active:bg-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm dark:shadow-blue-900 text-white bg-blue-700 dark:bg-blue-800 hover:bg-blue-600 dark:hover:bg-blue-700 active:bg-blue-800 dark:active:bg-blue-900"
                >
                  Set date
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;