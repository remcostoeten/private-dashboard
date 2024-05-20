import ProfileNav from './components/ProfileNav'

export default function layout({ children }) {
  return (
    <div className="flex mt-[70px]">
      <ProfileNav />
      <main>{children}</main>
    </div>
  )
}
