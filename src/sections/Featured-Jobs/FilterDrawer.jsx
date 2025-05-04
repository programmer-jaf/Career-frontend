/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-base font-semibold">{title}</h3>
        {open ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
      </div>
      {open && <div className="space-y-2">{children}</div>}
      <hr className="my-4" />
    </div>
  );
};

const CheckboxWithCount = ({ label, count, checked, onChange }) => (
  <label className="flex justify-between items-center text-sm">
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-orange-400 w-4 h-4"
      />
      <span>{label}</span>
    </div>
    <span className="bg-orange-100 text-xs rounded px-2 py-0.5">{count}</span>
  </label>
);

const FilterDrawer = ({ isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    jobTypes: ["Full-Time Jobs", "Remote Jobs"],
    jobLevels: ["Mid-Level", "Senior Level"],
    salaryRanges: ["$1500–$2000", "$2000–$2500"],
    jobLocation: "Any Where",
    customSalary: "",
    customLocation: "",
  });

  const toggleItem = (category, item) => {
    setFilters((prev) => {
      const items = prev[category];
      return {
        ...prev,
        [category]: items.includes(item)
          ? items.filter((i) => i !== item)
          : [...items, item],
      };
    });
  };

  const handleLocationChange = (loc) => {
    setFilters((prev) => ({ ...prev, jobLocation: loc }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-[16rem] md:w-[20rem] bg-white z-50 shadow-lg"
          >
            <div className="bg-orange-400 text-white flex justify-between items-center px-6 py-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={onClose}>
                <IoClose className="text-2xl" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto h-[calc(100vh-10rem)]">
              {/* Job Type */}
              <FilterSection title="Job Type">
                {[
                  ["Full-Time Jobs", 56],
                  ["Part-Time Jobs", 46],
                  ["Contract Jobs", 36],
                  ["Remote Jobs", 26],
                  ["Intership Jobs", 16],
                ].map(([label, count]) => (
                  <CheckboxWithCount
                    key={label}
                    label={label}
                    count={count}
                    checked={filters.jobTypes.includes(label)}
                    onChange={() => toggleItem("jobTypes", label)}
                  />
                ))}
              </FilterSection>

              {/* Job Level */}
              <FilterSection title="Job Level">
                {[
                  ["Student Level", 78],
                  ["Entry Level", 68],
                  ["Mid-Level", 58],
                  ["Senior Level", 48],
                  ["VIP Level", 38],
                ].map(([label, count]) => (
                  <CheckboxWithCount
                    key={label}
                    label={label}
                    count={count}
                    checked={filters.jobLevels.includes(label)}
                    onChange={() => toggleItem("jobLevels", label)}
                  />
                ))}
              </FilterSection>

              {/* Salary Range */}
              <FilterSection title="Salary Range">
                {[
                  ["$700–$1000", 34],
                  ["$1000–$1500", 64],
                  ["$1500–$2000", 94],
                  ["$2000–$2500", 84],
                  ["$2500–$5000", 20],
                ].map(([label, count]) => (
                  <CheckboxWithCount
                    key={label}
                    label={label}
                    count={count}
                    checked={filters.salaryRanges.includes(label)}
                    onChange={() => toggleItem("salaryRanges", label)}
                  />
                ))}
                <div className="mt-2">
                  <label className="flex gap-2 items-center text-sm">
                    <input
                      type="checkbox"
                      checked={filters.customSalary !== ""}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          customSalary: e.target.checked ? "" : "",
                        }))
                      }
                    />
                    <span>Custom</span>
                  </label>
                  {filters.customSalary !== "" && (
                    <input
                      type="text"
                      className="mt-2 w-full border rounded p-2 text-sm"
                      placeholder="Write salary"
                      value={filters.customSalary}
                      onChange={(e) =>
                        setFilters((prev) => ({ ...prev, customSalary: e.target.value }))
                      }
                    />
                  )}
                </div>
              </FilterSection>

              {/* Job Location */}
              <FilterSection title="Job Location">
                {["Any Where", "United States", "Custom"].map((loc) => (
                  <label key={loc} className="flex items-center gap-2 text-sm mb-2">
                    <input
                      type="checkbox"
                      checked={filters.jobLocation === loc}
                      onChange={() => handleLocationChange(loc)}
                    />
                    <span>{loc}</span>
                  </label>
                ))}
                {filters.jobLocation === "Custom" && (
                  <input
                    type="text"
                    className="w-full border rounded p-2 text-sm"
                    placeholder="Enter location"
                    value={filters.customLocation}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        customLocation: e.target.value,
                      }))
                    }
                  />
                )}
              </FilterSection>
            </div>

            {/* Apply & Clear Buttons */}
            <div className="absolute bottom-0 w-full p-6 bg-white">
              <button className="w-full bg-orange-400 text-white py-3 rounded font-semibold mb-3">
                Apply
              </button>
              <button
                className="w-full border border-gray-300 text-black py-3 rounded font-semibold"
                onClick={() =>
                  setFilters({
                    jobTypes: [],
                    jobLevels: [],
                    salaryRanges: [],
                    jobLocation: "",
                    customSalary: "",
                    customLocation: "",
                  })
                }
              >
                Clear
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterDrawer;