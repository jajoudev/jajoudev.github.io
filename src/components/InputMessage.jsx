function InputMessage() {
  return (
    <>
      <div className="md:w-1/2">
        {" "}
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          className="text-white mb-8 uppercase py-3 w-full pl-6 border-b-2 outline-none"
          id="message"
          name="message"
          rows="5"
          cols="33"
          placeholder="Message"
        ></textarea>
      </div>
    </>
  );
}

export default InputMessage;
