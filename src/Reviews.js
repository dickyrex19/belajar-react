import React from "react";
import "./App.css";

function ReviewItems() {
  // Mempersiapkan data dummy JSON
  const users = [
    {
      id: 1,
      name: "Jason William",
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      review:
        "Harganya murah tapi kualitasnya bukan kaleng-kaleng nih. Kereen.."
    },
    {
      id: 2,
      name: "Robert Andrew",
      photo:
        "https://images.pexels.com/photos/3139606/pexels-photo-3139606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      review: "Mantap beli disini sering dapet diskon"
    },
    {
      id: 3,
      name: "Petersburg",
      photo:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      review: "Cocok banget buat yang mau ootd kekinian"
    }
  ];

  const listReview = users.map(Itemreview => (
    <div key={Itemreview.id} className="Item">
      <img src={Itemreview.photo} />
      <div className="User">
        <h3>{Itemreview.name}</h3>
        <p>{Itemreview.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default ReviewItems;
