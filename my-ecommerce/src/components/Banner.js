import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://www.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg',
    'https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg',
    'https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg',
    'https://img.freepik.com/free-vector/black-friday-sale-banner-design-with-shopping-trolly_1055-9167.jpg',
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          ></img>

          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImgTwo"
            loading="priority"
          ></img>

          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImgThree"
            loading="priority"
          ></img>

          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImgFour"
            loading="priority"
          ></img>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
