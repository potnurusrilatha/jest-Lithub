import { BookType } from "@/utils/types";

const FeaturedBook= ({ title, author, genre }: BookType)  => {
  return (
    <section className="max-w-3xl mx-auto bg-yellow-800 text-white p-6 rounded-lg mt-6 shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3">Welcome to LitHub Website</h2>
      <p className="mb-4">
        Discover the world of literature through our curated collection of must-read books across genres like 
        Romance, Fantasy, Classics, and more. Whether you crave timeless love stories, gripping adventures, or 
        profound social commentaries, we have got something for every reader.
      </p>
      <article className="bg-black p-4 rounded-lg hover:bg-gray-900 transition-colors duration-300" role="region" aria-labelledby="featured-book-title">
        <h3 id="featured-book-title" className="text-lg font-semibold">Featured Book</h3>
        <p><strong>{title}</strong> by {author} — <em>{genre}</em></p>
      </article>
    </section>
  );
};


export default FeaturedBook;
