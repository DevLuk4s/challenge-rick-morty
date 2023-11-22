import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Filter() {
  const [speciesdropdown, setSpeciesDropdown] = useState(false);
  const [agenderdropdown, setAgenderDropdown] = useState(false);
  const [statusdropdown, setStatusDropdown] = useState(false);
  const [speciesValue, setSpeciesValue] = useState("Species");
  const [agenderValue, setAgenderValue] = useState("Agender");
  const [statusValue, setStatusValue] = useState("Status");
  const [searchQuery, setSearchQuery] = useState("");

  const ValueTag = (value: string) => {
    setSpeciesValue(value);
  };

  return (
    <div className="container mx-auto my-10 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-center border border-gray-300 w-full max-w-[300px]">
        <AiOutlineSearch />
        <input
          className="w-full p-3"
          type="text"
          placeholder="Filter by name"
        />
      </div>
      <div className="relative flex flex-col w-full max-w-[300px]">
        <button
          onClick={() => setSpeciesDropdown(!speciesdropdown)}
          className="flex items-center justify-between w-full border border-gray-300 p-3"
        >
          Species <IoMdArrowDropdown />
        </button>
        {speciesdropdown && (
          <div className="border border-gray-300 p-3 absolute top-14 left-0 z-10 bg-white w-full">
            <h1>Human</h1>
            <h1>Alien</h1>
            <h1>Humanoid</h1>
            <h1>Poopybutthole</h1>
            <h1>Mythological Creature</h1>
            <h1>Animal</h1>
            <h1>Robot</h1>
            <h1>Cronenberg</h1>
            <h1>Disease</h1>
            <h1>Unknown</h1>
          </div>
        )}
      </div>
      <div className="relative flex flex-col w-full max-w-[300px]">
        <button
          onClick={() => setAgenderDropdown(!agenderdropdown)}
          className="flex items-center justify-between w-full border border-gray-300 p-3"
        >
          Agender <IoMdArrowDropdown />
        </button>
        {agenderdropdown && (
          <div className="border border-gray-300 p-3 absolute top-14 left-0 z-10 bg-white w-full">
            <h1>Female</h1>
            <h1>Male</h1>
            <h1>Genderless</h1>
            <h1>Unknown</h1>
          </div>
        )}
      </div>
      <div className="relative flex flex-col w-full max-w-[300px]">
        <button
          onClick={() => setStatusDropdown(!statusdropdown)}
          className="flex items-center justify-between w-full border border-gray-300 p-3"
        >
          {speciesValue} <IoMdArrowDropdown />
        </button>
        {statusdropdown && (
          <div className="border border-gray-300 p-3 absolute top-14 left-0 z-10 bg-white w-full">
            <h1>Dead</h1>
            <h1 onClick={() => ValueTag("Alive")}>Alive</h1>
            <h1>Unknown</h1>
          </div>
        )}
      </div>
    </div>
  );
}
