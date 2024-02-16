'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="picker">
      <label className="block mb-2" htmlFor={name}>{label}</label>
      <div className="flex items-center gap-6 mb-4">
        <div className="preview w-36 h-36 border-2 border-gray-400 flex justify-center items-center text-gray-400">
          {!pickedImage && <p className='text-sm'>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              width={120}
              height={120}
              objectFit="cover"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className="button bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded-md text-white"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
