function Input({labelFor, labelContent, inputType}) {
  return (
    <>
      <div className="md:w-1/2">
        <label className="sr-only" htmlFor={labelFor}>{labelContent}</label>
        <input className="text-white mb-8 uppercase py-3 w-full pl-6 border-b-2 outline-none" type={inputType} id={labelFor} name={labelFor} placeholder={labelContent}/>
      </div>
    </>
  );
}

export default Input;
