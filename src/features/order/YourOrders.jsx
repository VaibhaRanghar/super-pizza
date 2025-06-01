import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function YourOrders() {
  const userName = useSelector((state) => state.user.username);
  let ids = localStorage.getItem("orderIds");
  console.log(ids);
  return (
    <div className="text-left mx-3 my-5 border-2 border-yellow-400 rounded-xl space-y-6 p-3 ">
      <h1 className="mx-2 mb-4 text-xl font-semibold">
        Your orders{userName ? " " + userName : ""}!🍕
      </h1>
      <div className=" ">
        {ids !== null ? (
          <>
            {ids.split(",").map((id) => (
              <OrderData id={id} key={id} />
            ))}
          </>
        ) : (
          <p> Go ahead and order something.</p>
        )}
      </div>
    </div>
  );
}

function OrderData({ id }) {
  return (
    <Link
      to={`order/${id}`}
      className="flex items-center justify-between flex-wrap gap-2 bg-stone-50 p-3 rounded-lg m-2"
    >
      <h2 className="text-md ">🍽️ Order number {id} </h2>
    </Link>
  );
}

export default YourOrders;
