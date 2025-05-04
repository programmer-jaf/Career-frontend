import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="phone" className="text-sm text-black-primary font-semibold">
        Phone
      </label>
      <PhoneInput
        country={'bd'}
        value={phone}
        onChange={setPhone}
        inputProps={{
          name: 'phone',
          required: true,
          id: 'phone',
        }}
        containerClass="w-full mt-1"
        inputClass="!w-full !border !border-gray-300 !rounded-r-md !outline-none !py-5 !pl-14 !pr-3"
        buttonClass="!border !border-r-0 !border-gray-300 !bg-white !rounded-l-md"
        dropdownClass="!border !border-gray-300 !shadow-md"
      />
    </div>
  );
};

export default PhoneNumberInput;
