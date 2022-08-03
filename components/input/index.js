import React from 'react';
import NumberFormat from 'react-number-format';

export default function InputPrimary({ isPercentage, onChange, id, disabled, name, placeholder, value }) {
	return (
		<NumberFormat
			id={id}
			disabled={disabled}
			thousandsGroupStyle={!isPercentage && 'thousand'}
			className='chakra-input input-primary'
			name={name}
			placeholder={placeholder}
			defaultValue={value}
			prefix={isPercentage ? '' : 'Rp '}
			decimalSeparator=','
			displayType='input'
			maxLength={isPercentage ? '4' : ''}
			type='text'
			thousandSeparator='.'
			suffix={isPercentage ? ' %' : ''}
			onValueChange={(values, name) => onChange(values.value, name)}
		/>
	);
}
