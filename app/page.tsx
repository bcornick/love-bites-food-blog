import CenterPanel from './CenterPanel';
import ImageGrid from './ImageGrid';
import { getAll } from '@/helpers/getData';
import MealItemType from '@/app';

export default async function Home() {
  const fetchedArray = await getAll();

  return (
    <main>
      <CenterPanel />
      {fetchedArray && (
        <ImageGrid imageArray={fetchedArray as MealItemType[] | any[]} />
      )}
    </main>
  );
}
