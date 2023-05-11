import loadingTimeout from '@/helpers/loadingTimeout';
import CenterPanel from './CenterPanel';
import ImageGrid from './ImageGrid';
import { getAll } from '@/helpers/getData';
import MealItemType from '@/app';

export default async function Home() {
  const fetchedArray = await getAll();
  await loadingTimeout(10000);

  return (
    <main>
      <CenterPanel />
      {fetchedArray && (
        <ImageGrid imageArray={fetchedArray as MealItemType[] | any[]} />
      )}
    </main>
  );
}
