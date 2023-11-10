export const SaveIcon = () => {
  return (
    <svg
      className="save-icon w-[48px] h-[48px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 20"
      style={{ padding: '.6rem .8rem' }}
    >
      <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      className="home-icon w-[48px] h-[48px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ padding: '.6rem .7rem' }}
    >
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  );
};

export function BookIcon({ isFavorite }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      className={`bookmark-icon ${isFavorite ? 'favorite' : 'none'}`}
    >
      <path
        strokeWidth="1.5"
        d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
      />
    </svg>
  );
}
