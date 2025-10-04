import { useContext } from 'react';
import { useParams } from 'react-router';
import BooksProvider from '../BooksProvider/BooksProvider';

const BookDetails = () => {
  const { bookName } = useParams();
  const { booksData } = useContext(BooksProvider);
  const book = booksData.find(book => book.bookName === bookName);
  console.log(book);
  return (
    <div className="flex justify-between items-center my-12 h-[calc(100vh-82px] gap-12">
      <figure className="w-[50%] h-[790px] bg-[rgba(19,19,19,0.05)] rounded-lg flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-[450px] h-[680px] rounded-lg"
        />
      </figure>
      <div className="space-y-6 w-[50%]">
        <div className="border-b border-gray-400  pb-4 space-y-4">
          <h2 className="text-4xl font-bold">{book.bookName}</h2>
          <p className="font-medium text-gray-600 text-xl">By: {book.author}</p>
        </div>

        <p className="font-medium text-gray-600 border-b border-gray-400 pb-4 text-xl">
          {book.category}
        </p>
        <p className="text-[rgba(19,19,19,0.7)] leading-7">
          <span className="font-bold text-black">Review : </span>
          {book.review}
        </p>
        <div className="flex items-center gap-8 border-b border-gray-400 pb-4">
          <span className="font-bold">Tag</span>
          {book.tags.map((tag, i) => (
            <p className="text-lg text-green-600 font-medium" key={i}>
              #{tag}
            </p>
          ))}
        </div>
        <div className="text-[rgba(19,19,19,0.7)] space-y-2">
          <div className="flex items-center gap-8">
            <p className="w-36">Number of Pages : </p>
            <p className="font-bold text-black">{book.totalPages}</p>
          </div>
          <div className="flex items-center gap-8">
            <p className="w-36">Publisher : </p>
            <p className="font-bold text-black">{book.publisher}</p>
          </div>
          <div className="flex items-center gap-8">
            <p className="w-36">Year of Publishing : </p>
            <p className="font-bold text-black">{book.yearOfPublishing}</p>
          </div>
          <div className="flex items-center gap-8">
            <p className="w-36">Rating : </p>
            <p className="font-bold text-black">{book.rating}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="font-bold px-12 py-3 border rounded-lg cursor-pointer text-lg">
            Read
          </button>
          <button className="text-white bg-[#50B1C9] px-12 py-3 rounded-lg cursor-pointer text-lg font-bold">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
