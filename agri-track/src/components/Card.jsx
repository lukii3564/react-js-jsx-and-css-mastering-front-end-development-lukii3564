export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 ${className}`}>
      {children}
    </div>
  )
}