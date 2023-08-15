import './styles/Filter.css';

export default function Filter() {
  return (
    <section className="books-filter">
      <label className="filter_search" htmlFor="search">
        <input id="search" type="text" placeholder="Search" />
      </label>
      <label className="filter_pages" htmlFor="filter">
        <span>Pages</span>
        <input id="filter" type="range" name="Pages" />
      </label>
      <label className="filter_genre" htmlFor="genre">
        <select name="genre" id="genre">
          <option defaultChecked>Genre</option>
          <option value="horror">Horror</option>
        </select>
      </label>
    </section>
  );
}
