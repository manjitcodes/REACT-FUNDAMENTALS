
interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function FilterBar({ search, onSearchChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label htmlFor="post-search">Search posts</label>

      <input
        id="post-search"
        type="search"
        placeholder="Search by title, content, or author..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default FilterBar;
