

"use client";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });
  return (
    <>
      <header className="gap-12 my-20 mx-auto w-90 max-w-75 text-center text-black-300 text-lg">
        <h1 className="font-montserrat">
          Share your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-2/3 mx-auto mt-12 text-white">
        <form className="max-w-50rem" action={formAction}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-bold uppercase text-gray-500"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-lg text-gray-300 focus:outline-none focus:border-orange-500"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold uppercase text-gray-500"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-lg text-gray-300 focus:outline-none focus:border-orange-500"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-bold uppercase text-gray-500"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-lg text-gray-300 focus:outline-none focus:border-orange-500"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-sm font-bold uppercase text-gray-500"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-lg text-gray-300 focus:outline-none focus:border-orange-500"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-sm font-bold uppercase text-gray-500"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-lg text-gray-300 focus:outline-none focus:border-orange-500"
            ></textarea>
          </p>
          <div className="flex justify-between">
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p >
            <MealsFormSubmit />
          </p>
          </div>
        </form>
      </main>
    </>
  );
}
