export default function Input({ placeholder, type }) {
  return (
    <input
      type={type}
      className="w-full px-4 py-1 text-gray-800 rounded-lg focus:outline-none"
      placeholder={placeholder}
    />
  );
}
