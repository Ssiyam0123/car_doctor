import { Calendar, Phone, Mail } from "lucide-react";
import React from "react";

const Hotline = () => {
  return (
    <section className="h-[450px] md:h-[250px] bg-black text-white rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 p-8 w-full">
      {/* Opening Hours */}
      <div className="flex items-center gap-6">
        <div className="bg-white/10 p-4 rounded-full">
          <Calendar size={40} />
        </div>
        <div>
          <p className="text-gray-300">We are open Monday-Friday</p>
          <h3 className="font-bold text-2xl">7:30 am - 9:00 pm</h3>
        </div>
      </div>

      {/* Phone Contact */}
      <div className="flex items-center gap-6">
        <div className="bg-white/10 p-4 rounded-full">
          <Phone size={40} />
        </div>
        <div>
          <p className="text-gray-300">Have a question?</p>
          <h3 className="font-bold text-2xl">+1 (234) 567-890</h3>
        </div>
      </div>

      {/* Email Contact */}
      <div className="flex items-center gap-6">
        <div className="bg-white/10 p-4 rounded-full">
          <Mail size={40} />
        </div>
        <div>
          <p className="text-gray-300">Need support?</p>
          <h3 className="font-bold text-2xl">contact@example.com</h3>
        </div>
      </div>
    </section>
  );
};

export default Hotline;