import Intro from '../components/layout/home-layout/Intro';
import Library from '../components/layout/home-layout/Library';
import { FilterProvider } from '../context/FilterProvider';

export default function Home() {
  return (
    <>
      <Intro />
      <FilterProvider>
        <Library />
      </FilterProvider>
    </>
  );
}
