import { Fragment, useState } from 'react';
import { Listbox, Transition, Switch } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, ClockIcon } from '@heroicons/react/outline';
import Downshift from 'downshift';
import Month from './../Month/index';

function classNames(...classes: (boolean | null | undefined | string)[]) {
  return classes
    .filter(Boolean)
    .join(' ');
}

const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]

export function TimePicker() {
  const [enabled, setEnabled] = useState(false);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [timeFormat, setTimeFormat] = useState('12h');
  const [selected, setSelected] = useState(true);
  const [currentInterval, setInterval] = useState();

  const hoursHandler = (e: any) => {
    setHours(e.target.value);
  }

  const timeFormatHandler = (e: any) => {
    setSelected(e.target.value);
  }

  return (  
    <div>
      <div className="flex justify-center items-center space-x-1">
        <label htmlFor="number" className="flex text-sm font-medium text-gray-500 dark:text-slate-300 pr-1">
          <ClockIcon className="w-6 h-6 stroke-current"/>
        </label>
        <div>
          <input 
            type="text"
            className="shadow-sm focus:ring-brand-light focus:border-brand-light block w-20 sm:text-sm dark:text-slate-200 border-gray-300 dark:border-slate-200 dark:focus:border-brand-light dark:bg-slate-900 rounded-md"
          />
        </div>
        <div className="flex items-center justify-center px-1">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-md">
          <div className="relative flex items-center">

            <div className={classNames(
              timeFormat === '12h' ? 'translate-x-0' : 'translate-x-full',
              `absolute left-0 h-10 inset-y-auto w-1/2 flex rounded-md shadow-sm bg-white dark:bg-slate-800 dark:shadow-slate-900 border border-gray-300 dark:border-slate-200 transition-transform ease-in-out duration-200`
            )}
            >  
            </div>
            <div 
              className="relative flex text-sm text-gray-700 dark:text-slate-200 font-semibold items-center justify-center cursor-pointer w-11 h-10 rounded-md"
              onClick={() => setTimeFormat('12h')}
            >
              12h
            </div>
            <div
              className="relative flex text-sm text-gray-700 dark:text-slate-200 font-semibold items-center justify-center cursor-pointer w-11 h-10 rounded-md"
              onClick={() => setTimeFormat('24h')}
            >
              24h
            </div>

          </div>
        </div>
          
          {/* <div className="flex items-center justify-center rounded-md bg-slate-100">
            <button
              type="button"
              value={`12h`}
              className={classNames(
                timeFormat[1].isSelected
                  ? `flex bg-white border border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap sm:w-auto px-3 transform duration-700 ease-in-out translate-x-0`
                  : `flex border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap sm:w-auto px-3 transform duration-700 ease-in-out translate-x-0`
              )}
            >
              12h
            </button>
            <button
              type="button"
              value={`24h`}
              className={classNames(
                timeFormat[0].isSelected
                  ? `flex bg-white border border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap sm:w-auto px-3 transform duration-700 ease-in-out -translate-x-0`
                  : `flex border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap sm:w-auto px-3 transform duration-700 ease-in-out translate-x-0`
              )}
            >
              24h
            </button>
          </div> */}
        </div>
        <div className="relative flex items-start text-sm px-1">
          <p className="text-gray-700 dark:text-slate-200">
            GMT+1:00
          </p>
        </div>
      </div>
    </div>
  );
}