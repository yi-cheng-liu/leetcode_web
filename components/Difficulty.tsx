import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Difficulty({ children }: Props) {
  function getColorClass(children: ReactNode): string {
    switch (children) {
      case 'Easy':
        return 'text-[#15BD66] dark:text-[#3FCA7D]'
      case 'Medium':
        return 'text-[#FFB800] dark:text-[#FFC926]'
      case 'Hard':
        return 'text-[#FF334B] dark:text-[#FF5967]'
      default:
        return 'text-gray-600' // default color
    }
  }

  const colorClass = getColorClass(children)

  return (
    <div className={`text-xl font-bold tracking-tight ${colorClass} sm:text-xl md:text-2xl`}>
      {children}
    </div>
  )
}
