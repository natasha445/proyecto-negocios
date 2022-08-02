import React, { useState } from "react";

const TheContact = () => {
    const [emaiInput, setEmailInput] = useState("");

    const inputHandler = (e) => {
        setEmailInput(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setEmailInput("");
    };

  return (
    <div className="w-full pt-24 pb-44 px-10">
      <div className="w-[85%] mx-auto">
        <h3 className="text-4xl font-bold tracking-wider mb-8">
          Join our Newsletter And Get 20% OFF
        </h3>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <p className="text-gray-500 leading-loose lg:w-1/2">
          Our selection of gear is unmatched. With very unique products in stock, if you need it, we've got it. If we don't have it in our foot warehouse, we know how to get it for you. From beginner instruments to our premium Private Reserve Guitars collection, we have it all for every level of player no matter what style of music you play.
          </p>
          <div className="">
            <form>
              <div className="flex">
                <input
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  onChange={inputHandler}
                  value={emaiInput}
                  placeholder="Enter your email"
                  className="form-input rounded-l bg-gray-100 shadow-lg"
                />
                <button
                  type="submit"
                  onClick={submitForm}
                  className="px-5 bg-primary text-white rounded-r shadow-lg capitalize"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheContact;
