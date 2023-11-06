import { Suspense } from 'react';
import BookFav from '../components/layout/bookmark-layout/BookFav';
import HeadBM from '../components/layout/bookmark-layout/HeadBM';
import { FilterProvider } from '../context/FilterProvider';

export default function BookMark() {
  return (
    <Suspense>
      <FilterProvider>
        <HeadBM />
        <BookFav />
      </FilterProvider>
    </Suspense>
  );
}
