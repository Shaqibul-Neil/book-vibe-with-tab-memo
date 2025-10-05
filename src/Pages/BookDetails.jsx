import { useContext } from 'react';
import { useParams } from 'react-router';
import BooksProvider from '../BooksProvider/BooksProvider';
import { addToStoredDB } from '../utility/addToDB';

const BookDetails = () => {
  const { title } = useParams();
  const { booksData } = useContext(BooksProvider);
  const book = booksData.find(book => book.bookName === title);
  // console.log(bookName, book);
  const {
    bookId,
    image,
    bookName = 'No Title',
    author = 'Unknown Author',
    category = 'N/A',
    review = 'No review available',
    tags = [],
    totalPages = 'N/A',
    publisher = 'N/A',
    yearOfPublishing = 'N/A',
    rating = 'N/A',
  } = book || {};

  //adding to local storage read list
  const handleMarkAsRead = id => {
    addToStoredDB(id);
  };

  return (
    <div className="flex justify-between items-center my-24 h-[calc(100vh-82px] gap-12">
      <figure className="w-[50%] h-[790px] bg-[rgba(19,19,19,0.05)] rounded-lg flex items-center justify-center">
        <img
          src={image || ''}
          alt={bookName}
          className="w-[450px] h-[680px] rounded-lg"
        />
      </figure>
      <div className="space-y-6 w-[50%]">
        <div className="border-b border-gray-400  pb-4 space-y-4">
          <h2 className="text-4xl font-bold">{bookName}</h2>
          <p className="font-medium text-gray-600 text-xl">
            By: {author || 'Unknown Author'}
          </p>
        </div>

        <p className="font-medium text-gray-600 border-b border-gray-400 pb-4 text-xl">
          {category || 'N/A'}
        </p>
        <p className="text-[rgba(19,19,19,0.7)] leading-7">
          <span className="font-bold text-black">Review : </span>
          {review || 'No review available'}
        </p>
        <div className="flex items-center gap-8 border-b border-gray-400 pb-4">
          <span className="font-bold">Tag</span>
          {tags.map((tag, i) => (
            <p className="text-lg text-green-600 font-medium" key={i}>
              #{tag}
            </p>
          ))}
        </div>
        <div className="text-[rgba(19,19,19,0.7)] space-y-2">
          <div className="flex items-center gap-8">
            <p className="w-36">Number of Pages : </p>
            <p className="font-bold text-black">
              {totalPages || 'Unknown Pages'}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="w-36">Publisher : </p>
            <p className="font-bold text-black">
              {publisher || 'Unknown Publisher'}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="w-36">Year of Publishing : </p>
            <p className="font-bold text-black">
              {yearOfPublishing || 'Unknown Year'}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="w-36">Rating : </p>
            <p className="font-bold text-black">{rating || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="font-bold px-12 py-3 border rounded-lg cursor-pointer text-lg"
            onClick={() => handleMarkAsRead(bookId)}
          >
            Mark As Read
          </button>
          <button className="text-white bg-[#50B1C9] px-12 py-3 rounded-lg cursor-pointer text-lg font-bold">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
