import { useForm } from "react-hook-form"; // for use react-hook-form
import { DevTool } from "@hookform/devtools"; //for use devtools
import { useState } from "react";

let renderCount = 0; //initial variable for renderCount
function BasicForm() {
  const [subData, setSubData] = useState(null);

  const form = useForm(); // create form instance
  const { register, control, handleSubmit, formState } = form; // extract form methods
  const { errors } = formState; // to show form errors

  const onSubmit = (data) => {
    console.log("form has been submitted.", data);
    setSubData(data); // set submitted data to state
  };

  renderCount++; // increment renderCount to see how many render calls

  return (
    <>
      {subData == null ? (
        <div className="bg-gray-900 h-screen flex items-center justify-center flex-col text-white font-lato">
          <h1 className="text-2xl mb-6">
            Render Count: <span className="text-blue-400">{renderCount / 2}</span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md"
            noValidate
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-500">
              Basic Form
            </h2>

            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: "Username is required",
                })}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.username ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 ${
                  errors.username ? "focus:ring-red-500" : "focus:ring-blue-600"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                })}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.name ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-blue-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-blue-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
          <DevTool control={control} /> {/* DevTool for debugging */}
        </div>
      ) : (
        <div className="h-screen bg-black text-white flex flex-col justify-center items-center font-lato">
          <div className="bg-gray-800 border border-gray-700 p-10 rounded-xl shadow-lg text-center w-full max-w-md">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Submitted Data</h3>
            <p className="mb-3">
              <span className="font-medium text-gray-300">Username:</span> {subData.username}
            </p>
            <p className="mb-3">
              <span className="font-medium text-gray-300">Name:</span> {subData.name}
            </p>
            <p>
              <span className="font-medium text-gray-300">Email:</span> {subData.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default BasicForm;
