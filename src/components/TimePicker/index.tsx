import { Fragment, useState } from 'react';
import { Listbox, Transition, Switch } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, ClockIcon } from '@heroicons/react/outline';
import Downshift from 'downshift';

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

  const hoursHandler = (e: any) => {
    setHours(e.target.value);
  }

  return (  
    <div>
      <div className="flex justify-center items-center space-x-1">
        <label htmlFor="number" className="flex text-sm font-medium text-gray-700">
          <ClockIcon className="w-6 h-6 stroke-current"/>
        </label>
        <div>
          <input 
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center justify-center px-1">
          <div className="flex items-center justify-center rounded-md bg-slate-100">
            <button
              type="button"
              className="flex bg-white border border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap sm:w-auto px-3 transform duration-700 ease-in-out translate-x-0"
            >
              12h
            </button>
            <button
              type="button"
              className="flex border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap sm:w-auto px-3 transform duration-700 ease-in-out translate-x-0"
            >
              24h
            </button>
          </div>
        </div>
        <div className="relative flex items-start text-sm px-1">
          <p className="text-gray-700">
            GMT+1:00
          </p>
        </div>
      </div>
    </div>
  );
}