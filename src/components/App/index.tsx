import { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/outline';
import Calendar from './calendar.json';
import { TimePicker } from '@components/TimePicker';
import isDarkMode from 'is-dark';

function classNames(...classes: (boolean | null | undefined | string)[]) {
  return classes
    .filter(Boolean)
    .join(' ');
}

/* Helper Functions */

/**
 * Days in month
 */

function isToday() {
  return;
}

const month = [
  {
    id: 0,
    monthName: "January"
  },
  {
    id: 1,
    monthName: "February"
  },
  {
    id: 2,
    monthName: "March"
  },
  {
    id: 3,
    monthName: "April"
  },
  {
    id: 4,
    monthName: "May"
  },
  {
    id: 5,
    monthName: "June"
  },
  {
    id: 6,
    monthName: "July"
  },
  {
    id: 7,
    monthName: "August"
  },
  {
    id: 8,
    monthName: "September"
  },
  {
    id: 9,
    monthName: "October"
  },
  {
    id: 10,
    monthName: "November"
  },
  {
    id: 11,
    monthName: "December"
  }
  
];

function genPrevMonth ({ month, year }:{ month: number; year: number }) {
  const days = daysInMonth(month, year);
    for (let i=0; i<=days; i++) {
      
    }
}

/**
 * Days in month
 */
 function daysInMonth(month: number, year: number) {
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return isLeapYear(year) ? 29 : 28;
    default:
      return 30;
  }
}

/**
 * Is Leap Year
 *
 * @param year
 * @returns a boolean which tells you whether the year you passed in this function is a leap year or not
 */
 function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function App() {

  const [state, setState] = useState(Calendar);

  const calendarDays = Calendar;

  const weekNumber = new Set();

  const buildMonthObj = ({ month, year }: { month: number; year: number }) => {
    const days = daysInMonth(month, year);
    for (let i=0; i<=days; i++) {
      state.push({
        isSelected: false,
        isToday: false,
        isWeekend: false,
        isHoliday: false,
        isStartingDayOfWeek: false,
        isEndingDayOfWeek: false,
        isRangeStart: false,
        isInRange: false,
        isRangeEnd: false,
        isInteractable: true,
        isFromPreviousMonth: true,
        isViewableMonth: true,
        isFromNextMonth: false,
        dayData: "",
        date: {
           weekNumber: 35,
           day: 30,
           nameOfDay: 0,
           month: 7,
           year: 2021
        }
     })
    }
  }
  
  const removedDuplicateCalendarWeekNumbers = calendarDays.filter((dayObj) => {
    const isPresentInSet = weekNumber.has(dayObj.date.weekNumber);
    weekNumber.add(dayObj.date.weekNumber);
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
  

  return (
    <div>
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="select-none flex bg-white dark:bg-gray-800 shadow-lg rounded-xl w-auto justify-center">
          <div className="flex flex-col w-[360px] justify-evenly px-5 pt-5 pb-6 border-b rounded-xl border-gray-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <button className="text-lg text-gray-700 dark:text-slate-200 font-semibold rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 px-3 py-1.5 active:bg-gray-100 dark:active:bg-slate-600">
                September 2021
              </button>
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white dark:bg-slate-800 font-medium border border-gray-300 dark:border-slate-200 shadow-sm dark:shadow-slate-900 text-sm text-gray-500 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600 focus:z-10"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md bg-white dark:bg-slate-800 font-medium border border-gray-300 dark:border-slate-200 shadow-sm dark:shadow-slate-900 text-sm text-gray-500 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600 focus:z-10"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </span>
              {/* <div className="flex justify-center space-x-2">
                <button
                  className="inline-flex items-center p-1.5 border border-gray-300 dark:border-slate-200 shadow-sm dark:shadow-slate-900 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"
                  
                >
                  <ChevronLeftIcon className="w-6 h-6 stroke-current"/>
                </button>
                <button
                  className="inline-flex items-center p-1.5 border border-gray-300 dark:border-slate-200 shadow-sm dark:shadow-slate-900 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"
                >
                  <ChevronRightIcon className="w-6 h-6 stroke-current"/>
                </button>
              </div> */}
            </div>
            <div className="flex justify-around pt-2">
              <div className="grid grid-rows-6 pt-10 pr-4 gap-y-1.5 text-sm text-gray-300 dark:text-slate-600">
                {removedDuplicateCalendarWeekNumbers.map((day) => {
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
                          ? "bg-brand-feather dark:bg-slate-900"
                          : day.isInRange && !(day.isRangeStart || day.isRangeEnd) && day.isEndingDayOfWeek
                            ? "bg-brand-feather dark:bg-slate-900"
                            : day.isInRange && !(day.isRangeStart || day.isRangeEnd)
                              ? "bg-brand-feather dark:bg-slate-900"
                              : null,
                        day.isRangeStart
                          ? "bg-gradient-to-r from-transparent via-transparent to-brand-feather dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-slate-900"
                          : null,
                        day.isRangeEnd
                          ? "bg-gradient-to-l from-transparent via-transparent to-brand-feather dark:bg-gradient-to-l dark:from-transparent dark:via-transparent dark:to-slate-900"
                          : null,
      
                        "flex items-center justify-center w-full"
                      )}>
                        <div
                          className={classNames(
                            day.isViewableMonth
                              ? `flex`
                              : `hidden`,
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
                                ? "rounded-md font-semibold border border-red-400 dark:border-red-900 hover:border-red-400 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900 shadow-sm shadow-red-50 dark:shadow-red-900"
                                : "rounded-md text-brand-dark dark:text-brand-lighter font-semibold border border-brand-light dark:border-brand-light hover:border-brand-light dark:hover:border-brand-light hover:bg-brand-air dark:hover:bg-brand-darkest shadow-sm shadow-brand-feather dark:shadow-brand-darkest"
                              : "border-transparent",
                            day.isSelected
                              ? "font-semibold text-white bg-brand dark:bg-brand hover:bg-brand-light dark:hover:bg-brand-light hover:border-brand-light dark:hover:border-brand-light shadow-sm shadow-brand-lightest dark:shadow-brand-darkest"
                              : null,
                            day.isInRange && !(day.isRangeStart || day.isRangeEnd)
                              ? "font-semibold text-brand-dark hover:text-brand-darker dark:text-brand-lighter bg-transparent hover:bg-brand-touch dark:hover:bg-slate-700 hover:border-brand-light dark:hover:border-brand-light hover:shadow-sm hover:shadow-brand-feather dark:hover:shadow-slate-900"
                              : day.isRangeStart
                                ? "rounded-r-none font-semibold text-white bg-brand dark:bg-brand hover:bg-brand-light dark:hover:bg-brand-light hover:border-brand-light dark:hover:border-brand-light shadow-sm shadow-brand-lightest dark:shadow-brand-darkest hover:rounded-md transition-all duration-75"
                                : day.isRangeEnd
                                  ? "rounded-l-none font-semibold text-white bg-brand dark:bg-brand hover:bg-brand-light dark:hover:bg-brand-light hover:border-brand-light dark:hover:border-brand-light shadow-sm shadow-brand-lightest dark:shadow-brand-darkest hover:rounded-md transition-all duration-75"
                                  : null,
      
                            "items-center justify-center w-10 h-10 rounded-md border"
      
                          )}
                        >
                          {day.date.day}
                        </div>
                      </div>
                    );
                  })}
                </div>
      
              </div>
            </div>
            
            {/* Clock Input */}
            
            <div className="pt-3 pb-2">
              <TimePicker />
            </div>

            <div className="flex justify-between pt-3">
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
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-dark dark:text-brand-lighter bg-brand-feather dark:bg-slate-900 hover:bg-brand-touch hover:text-brand-darker dark:hover:bg-slate-700 active:bg-brand-lightest active:text-brand-darkest dark:active:bg-slate-600 dark:active:text-brand-lightest"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm shadow-brand-lightest dark:shadow-brand-darkest text-white bg-brand dark:bg-brand hover:bg-brand-light dark:hover:bg-brand-light active:bg-brand-dark dark:active:bg-brand-dark"
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