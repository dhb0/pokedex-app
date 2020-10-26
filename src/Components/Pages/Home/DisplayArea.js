import React from "react";
import Pagination from "./Pagination";
import SinglePokeItem from "./SinglePokeItem";
import { useSelector } from "react-redux";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const DisplayArea = () => {
  const { sortedData, searchKey } = useSelector((state) => state);
  const currentPag = useSelector((state) => state.currentPagination);
  const filteredData = sortedData.filter(
    (item) => item.name.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1
  );
  const dividedData = _.chunk(filteredData, 50);
  return (
    <div className="text-center display-area">
      <div>
        <h5>
          <span className="badge badge-warning">{filteredData.length}</span>{" "}
          items found
        </h5>
      </div>
      <ul className="list-group">
        {dividedData[currentPag] === undefined
          ? dividedData.map((item, index) => (
              <SinglePokeItem key={uuidv4()} data={item} />
            ))
          : dividedData[currentPag].map((item, index) => (
              <SinglePokeItem key={uuidv4()} data={item} />
            ))}
        {filteredData.length > 0 && <Pagination length={dividedData.length} />}
      </ul>
    </div>
  );
};

export default DisplayArea;
