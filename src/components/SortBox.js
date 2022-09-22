import React from "react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import SortIcon from "@mui/icons-material/Sort";
import { useFilters } from "../contexts/FiltersProvider";
import { useNotes } from "../contexts/NotesProvider";
import {
  CLEAR_FILTERS,
  FILTER_PRIORITIES,
  FILTER_SORT_BY,
  FILTER_TAGS,
} from "../constants";
export const SortBox = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  const { filters, dispatchFilters } = useFilters();
  const { sortBy, priorities, tags } = filters;

  const { uniqueTags } = useNotes();
  return (
    <div>
      <SortIcon
        className="btn !text-[2rem] relative"
        onClick={() => setModalOpen(true)}
      />

      {isModalOpen ? (
        <div
          ref={ref}
          className="  flex flex-col p-1 right-4 space-y-2 bg-gray-50 border-2 border-gray-300 absolute rounded-md shadow-lg z-20"
        >
          <div className="flex space-x-3">
            <div>
              <h5 className="font-bold">Priorities</h5>
              <div className="flex space-x-1 justify-start">
                <input
                  type="checkbox"
                  id="low"
                  name="priority"
                  checked={priorities.includes("Low")}
                  onChange={() =>
                    dispatchFilters({ type: FILTER_PRIORITIES, payload: "Low" })
                  }
                ></input>
                <label className="font-medium">Low</label>
              </div>
              <div className="flex space-x-1 justify-start">
                <input
                  type="checkbox"
                  id="medium"
                  name="priority"
                  checked={priorities.includes("Medium")}
                  onChange={() =>
                    dispatchFilters({
                      type: FILTER_PRIORITIES,
                      payload: "Medium",
                    })
                  }
                ></input>
                <label className="font-medium">Medium</label>
              </div>
              <div className="flex space-x-1 justify-start ">
                <input
                  type="checkbox"
                  id="high"
                  name="priority"
                  checked={priorities.includes("High")}
                  onChange={() =>
                    dispatchFilters({
                      type: FILTER_PRIORITIES,
                      payload: "High",
                    })
                  }
                ></input>
                <label className="font-medium">High</label>
              </div>
            </div>

            <div>
              <h5 className="font-bold">Sort</h5>
              <div className="flex space-x-1 justify-start">
                <input
                  type="radio"
                  id="old"
                  name="sort"
                  checked={sortBy && sortBy === "old-to-new"}
                  onChange={() =>
                    dispatchFilters({
                      type: FILTER_SORT_BY,
                      payload: "old-to-new",
                    })
                  }
                ></input>
                <label className="font-medium">Old</label>
              </div>
              <div className="flex space-x-1 justify-start">
                <input
                  type="radio"
                  id="new"
                  name="sort"
                  checked={sortBy && sortBy === "new-to-old"}
                  onChange={() =>
                    dispatchFilters({
                      type: FILTER_SORT_BY,
                      payload: "new-to-old",
                    })
                  }
                ></input>
                <label className="font-medium">New</label>
              </div>
            </div>

            {uniqueTags.length !== 0 && (
              <div>
                <h5 className="font-bold">Tags</h5>
                {uniqueTags.map((tag) => (
                  <div className="flex space-x-1 justify-start " key={tag}>
                    <input
                      type="checkbox"
                      name="tags"
                      checked={tags.includes(tag)}
                      onChange={() =>
                        dispatchFilters({ type: FILTER_TAGS, payload: tag })
                      }
                    ></input>
                    <h2 className="font-medium">{tag}</h2>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              className="font-bold text-gray-800"
              onClick={() => dispatchFilters({ type: CLEAR_FILTERS })}
            >
              Clear Filters
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
