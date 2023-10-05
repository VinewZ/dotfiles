import { useLocation } from 'react-router-dom'

export function Curriculum() {
  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <object
      data={
        pathname === '/curriculum/br' || pathname === '/curriculum'
          ? '/assets/pdf/Curriculo.pdf'
          : '/assets/pdf/Curriculum.pdf'
      }
      type="application/pdf"
      className="min-h-full w-full"
    />
  )
}
