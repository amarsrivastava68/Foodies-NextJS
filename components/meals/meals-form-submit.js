import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="button-primary text-white text-right p-3 mt-20 border-2 bg-orange-500 hover:bg-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
