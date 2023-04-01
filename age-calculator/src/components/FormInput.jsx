function FormInput(props) {
  const { label, error, onChange, id, focused, setFocused, ...rest } = props;

  return (
    <div className='flex flex-col gap-1 '>
      <input
        {...rest}
        className={`md:text-[32px] w-full border  rounded-md px-4 py-2 placeholder:text-Smokeygrey focus:border-Purple hover:border-Purple outline-none cursor-pointer
        peer 
        ${error === '' && 'border-Lightred'}
        ${focused ? 'invalid:border-Lightred' : 'border-Lightgrey'}`}
        type='number'
        onChange={onChange}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        required
      />
      <label
        className={`order-first text-Smokeygrey  
         ${error === '' && 'text-Lightred'} 
        ${focused && 'peer-invalid:text-Lightred'}`}
      >
        {label}
      </label>
      <span
        className={`text-Lightred font-normal italic text-[12px]  hidden 
        ${error === '' && 'border-Lightred'}
        ${focused && 'peer-invalid:block'}
        `}
      >
        {!props.value ? 'This field is required' : error}
      </span>
    </div>
  );
}

export default FormInput;
