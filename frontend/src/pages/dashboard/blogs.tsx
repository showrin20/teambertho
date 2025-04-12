import { useState, ChangeEvent, FormEvent } from 'react';

export default function Blogs() {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [banner, setBanner] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [paragraph, setParagraph] = useState<string>('');

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setBanner(file);
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      title,
      author,
      banner,
      caption,
      paragraph,
    });

    setTitle('');
    setAuthor('');
    setBanner(null);
    setBannerPreview(null);
    setCaption('');
    setParagraph('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h5 className="text-4xl font-extrabold text-center text-blue-700">
          Upload a Blog
        </h5>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="blog-title" className="block font-medium text-gray-700 mb-1">
              Blog Title
            </label>
            <input
              id="blog-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400 shadow-sm p-3"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label htmlFor="author-name" className="block font-medium text-gray-700 mb-1">
              Author Name
            </label>
            <input
              id="author-name"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400 shadow-sm p-3"
              placeholder="Enter author name"
              required
            />
          </div>

          <div>
            <label htmlFor="banner-image" className="block font-medium text-gray-700 mb-1">
              Banner Image
            </label>
            <input
              id="banner-image"
              type="file"
              accept="image/*"
              onChange={handleBannerChange}
              className="w-full rounded-lg bg-white file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:cursor-pointer"
              required
            />
            {bannerPreview && (
              <img
                src={bannerPreview}
                alt="Banner Preview"
                className="mt-3 rounded-lg max-h-60 object-cover w-full"
              />
            )}
          </div>

          <div>
            <label htmlFor="caption" className="block font-medium text-gray-700 mb-1">
              Caption
            </label>
            <input
              id="caption"
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400 shadow-sm p-3"
              placeholder="Write a short caption"
              required
            />
          </div>

          <div>
            <label htmlFor="blog-paragraph" className="block font-medium text-gray-700 mb-1">
              Blog Paragraph
            </label>
            <textarea
              id="blog-paragraph"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              rows={6}
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400 shadow-sm p-3"
              placeholder="Write your blog content here..."
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
            >
              Upload Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
