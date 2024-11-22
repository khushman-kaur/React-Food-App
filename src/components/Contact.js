const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Contact Us</h1>
      <form className="flex flex-col mx-24 items-center">
        <input
          className="border border-black m-3 p-2 w-96"
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="border border-black m-3 p-2 w-96"
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="border border-black m-3 p-2 w-96"
          type="text"
          placeholder="Message"
        ></input>
        <button
          className="border border-black m-3 p-2 w-96 text-white bg-blue-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
