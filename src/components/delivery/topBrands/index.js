import React from "react";
import Slider from "react-slick";
import "./topBrands.css";

const topBrandsList = [
  {
    id: 1,
    title: "Burger King",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png?output-format=webp",
    time: "38 min",
  },
  {
    id: 2,
    title: "WOW! Momo",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/334fc7a8dcd2b4b921c0779c21c43655_1628839459.png?output-format=webp",
    time: "50 min",
  },
  {
    id: 3,
    title: "KFC",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png?output-format=webp",
    time: "9 min",
  },
  {
    id: 4,
    title: "Green Chillyz",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/19f79b1a64b30f8a3ba58e540f8bf218_1581917577.png?output-format=webp",
    time: "34 min",
  },
  {
    id: 5,
    title: "Priya",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e8b5a9a0bef7eb95ccba03c7f01f9c7e_1611314338.png?output-format=webp",
    time: "30 min",
  },
  {
    id: 6,
    title: "Domino's Pizza",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521807124.png?output-format=webp",
    time: "18 min",
  },
  {
    id: 7,
    title: "WOW! China",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/744b8ebe935958d6fa4feca93456b8a7_1604384129.png?output-format=webp",
    time: "12 min",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const TopBrands = () => {
  return (
    <div className="top-brands">
      <div className="max-width">
        <div className="collection-title">Top Brands</div>
        <Slider {...settings}>
          {topBrandsList.map((brands) => {
            return (
              <div key={brands.id}>
                <div className="top-brands-cover ">
                  <img
                    className="top-brands-image absolute-center"
                    src={brands.image}
                    alt={brands.time}
                  />
                  <div className="top-brands-title">{brands.title}</div>
                <div className="top-brands-time">{brands.time}</div>
                </div>
                
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TopBrands;
