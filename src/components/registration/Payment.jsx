

import { useAuth } from "../../context/AuthContext";

const Payment = () => {
  const {handlePayment}=useAuth()





  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
        Pay to get print
      </h2>

      <button
        onClick={handlePayment}
        className="font-bold text-xl md:text-2xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
      >
        Pay & Continue
      </button>
    </div>
  );
};

export default Payment;
