import { generateClasses } from "@formkit/themes";

const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: "space-y-2 mb-3",
        message:
          "bg-red-600 text-white text-center text-sm font-bold uppercase p-2 my-5",
        label: "block mb-1 font-bold text-lg text-white",
        input:
          "w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400",
      },
      submit: {
        input:
          "$reset bg-violet-500 hover:bg-violet-600 rounded-lg text-white font-bold w-full p-3 mt-10",
      },
    }),
  },
};
export default config;
