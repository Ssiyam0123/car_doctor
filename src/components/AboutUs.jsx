// components/AboutUs.tsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto md:p-16">
      {/* Images Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="">
          <Image
             src={"/assets/images/about_us/person.jpg"}
            alt="Engineer"
            width={350}
            height={400}
            className="object-cover rounded-xl"
          />
          <div className="absolute -bottom-8 right-20 border-4 border-white bg-white p-1 rounded-xl shadow-lg">
            <Image
               src={"/assets/images/about_us/parts.jpg"}
              alt="Car Parts"
              width={250}
              height={200}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left lg:w-1/2 lg:mx-auto">
        <h4 className="text-red-500 font-bold mb-2">About Us</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We are qualified <br />
          &amp; of experience <br />
          in this field
        </h2>
        <p className="text-gray-500 mb-3">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But
          The Majority Have Suffered Alteration In Some Form, By Injected Humour,
          Or Randomised Words Which Don’t Look Even Slightly Believable.
        </p>
        <p className="text-gray-500 mb-6">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour,
          Or Randomised Words Which Don’t Look Even Slightly Believable.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
          Get More Info
        </button>
      </div>
    </div>
  );
}
