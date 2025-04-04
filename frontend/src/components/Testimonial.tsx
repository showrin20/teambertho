export default function Testimonial() {
    return (
      <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg">
        <img
          src="../assets/header/jamie-wilson.jpg"
          alt="Jamie Wilson"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-gray-700 italic text-center max-w-2xl">
          "Team Bertho unapologetically pushes back against the old perceptions of
          mental health with a boldness that demands attention..."
        </p>
        <p className="font-bold mt-2">Jamie Wilson</p>
      </div>
    );
  }
  