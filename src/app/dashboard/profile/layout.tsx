import ProfileNav from './components/ProfileNav'

export default function layout({ children }) {
  return (
    <div className="flex">
      <ProfileNav />
      <main className="max-w-[50%]">{children}</main>
    </div>
  )
}
