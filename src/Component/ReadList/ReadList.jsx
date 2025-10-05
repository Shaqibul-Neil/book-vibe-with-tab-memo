import { FileText, MapPin, Users } from 'lucide-react';

const ReadList = ({ readList }) => {
  return (
    <div className="space-y-16">
      <h3 className="text-2xl text-center font-semibold">
        Books I Read :
        {readList.length < 9 ? `0${readList.length}` : readList.length}
      </h3>
      <div className="grid grid-cols-1 gap-6">
        {readList.map(book => (
          <div
            className="shadow-sm flex items-center gap-6 border p-5 rounded-lg border-gray-300"
            key={book.bookId}
          >
            <figure className="h-[230px] w-[240px] bg-[rgba(19,19,19,0.05)] rounded-lg flex items-center justify-center">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-36 h-44 rounded-lg"
              />
            </figure>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold">{book.bookName}</h2>
              <p className="font-medium text-gray-600">By: {book.author}</p>
              <div className="flex items-center gap-8">
                <span className="font-bold">Tag</span>
                {book.tags.map((tag, i) => (
                  <p className="text-lg text-green-600" key={i}>
                    #{tag}
                  </p>
                ))}
                <p className="flex items-center gap-3">
                  <span>
                    <MapPin />
                  </span>
                  <span>Year of Publishing: {book.yearOfPublishing}</span>
                </p>
              </div>
              <div className="flex items-center gap-8 pb-4 border-b border-gray-300">
                <p className=" text-gray-500 flex gap-2">
                  <Users />
                  Publisher : {book.publisher}
                </p>
                <div className="flex items-center gap-2">
                  <p className=" text-gray-500 flex gap-2">
                    <FileText />
                    Page : {book.totalPages}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-6 py-2 bg-blue-100 rounded-4xl text-blue-400 flex items-center justify-center font-semibold">
                  Category : {book.category}
                </div>
                <div className="px-6 py-2 bg-yellow-100 rounded-4xl text-amber-600 flex items-center justify-center font-semibold">
                  Rating : {book.rating}
                </div>
                <button className="bg-green-600 text-white py-2 px-6 rounded-4xl cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
