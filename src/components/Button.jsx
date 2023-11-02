export default function Button({text, className, handleClick}) {
  return (
    <button className={`${className} bg-primary w-full p-2 text-white font-Poppins font-bold text-xl rounded-lg`}>{text}</button>
  )
}