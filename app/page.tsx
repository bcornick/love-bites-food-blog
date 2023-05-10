import loadingTimeout from '@/helpers/loadingTimeout';
import CenterPanel from './CenterPanel';
import ImageGrid from './ImageGrid';
import imageArray from '@/helpers/imageArray';

export default async function Home() {
  await loadingTimeout(8000);

  return (
    <main>
      <CenterPanel />
      <ImageGrid imageArray={imageArray} />
    </main>
  );
}
