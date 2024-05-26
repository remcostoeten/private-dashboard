import Toolbar from './components/toolbar/Toolbar'

export default function Layout({ children }) {
  return (
    <>
      <Toolbar />

      {children}
    </>
  )
}
