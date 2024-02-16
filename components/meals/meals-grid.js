import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
  return (
    <ul className="w-auto   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto list-none mb-4">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
