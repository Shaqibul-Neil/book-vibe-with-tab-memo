import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { Link } from 'react-router';

const Book = ({ book }) => {
  return (
    <Link to={`/book-details/${book.bookName}`}>
      <div className="border border-gray-400 shadow-sm space-y-6 p-4  rounded-lg cursor-pointer">
        <figure className="h-[230px] bg-[rgba(19,19,19,0.05)] rounded-lg flex items-center justify-center">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-32 h-[166px]"
          />
        </figure>
        <div className="space-y-4">
          <div className="space-y-4 h-[165px] border-b border-gray-400 border-dashed pb-4">
            <div className="flex items-center gap-8">
              {book.tags.map((tag, i) => (
                <p className="text-lg text-green-600" key={i}>
                  {tag}
                </p>
              ))}
            </div>
            <div className=" space-y-4">
              <h2 className="text-2xl font-bold">{book.bookName}</h2>
              <p className="font-medium text-xl text-gray-600">
                By: {book.author}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pb-4">
            <p className="font-medium text-gray-600">{book.category}</p>
            <div className="flex items-center gap-2">
              <p className="font-medium text-gray-600">{book.rating}</p>
              <p>{book.rating === 5 ? <IoIosStar /> : <IoIosStarHalf />}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
