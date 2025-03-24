import React from 'react';
import { TodoStatus } from '../../App';

interface Props {
  query: string;
  onInput: (query: string) => void;
  onSelect: (value: TodoStatus) => void;
}

export const TodoFilter: React.FC<Props> = ({ query, onInput, onSelect }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={event => onSelect(event.target.value as TodoStatus)}
          >
            {Object.values(TodoStatus).map((option: TodoStatus) => {
              return (
                <option key={option} value={option}>
                  {option.slice(0, 1).toUpperCase() + option.slice(1)}
                </option>
              );
            })}
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          value={query}
          placeholder="Search..."
          onChange={handleOnChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {query && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => onInput('')}
            />
          )}
        </span>
      </p>
    </form>
  );
};
