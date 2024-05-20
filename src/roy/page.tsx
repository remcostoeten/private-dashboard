'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useState } from 'react'

const UserProfile = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <UserDetails />
          <FormCard
            title="Display Name"
            description="This is the name that will be displayed on your profile."
            placeholder="Display Name"
          />
          <FormCard
            title="Email Address"
            description="This is the email address associated with your account."
            placeholder="Email Address"
            type="email"
          />
          <FormCard
            title="Password"
            description="You can change your password here."
            fields={[
              'Current Password',
              'New Password',
              'Confirm New Password',
            ]}
            type="password"
          />
          <div className="flex items-center gap-4">
            <button className="variant-destructive">Remove Account</button>
          </div>
        </div>
      </main>
    </div>
  )
}

const UserDetails = () => {
  return (
    <div className="grid gap-6">
      <AvatarSection />
    </div>
  )
}

const AvatarSection = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Avatar and user details */}
      <div className="flex items-center gap-4">
        {/* Avatar Image */}
        <div className="h-16 w-16">{/* Placeholder for Avatar */}</div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Jared Palmer</h3>
          <p className="text-sm text-muted-foreground">jared@acme.inc</p>
        </div>
        {/* Avatar Upload Section */}
        <div className="flex items-center space-x-2">
          <input className="hidden" id="avatar" type="file" />
          <label htmlFor="avatar" className="...">
            Upload Avatar
          </label>
        </div>
      </div>
    </div>
  )
}

const FormCard = ({ title, description, placeholder, type, fields }) => {
  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePhotoURLChange = (event) => {
    setPhotoURL(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Name:', name, 'Photo URL:', photoURL)
    // Handle form submission logic here
  }

  return (
    <Card className="card">
      <CardHeader className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </CardHeader>
      <CardContent className="card-content">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-bold mb-2"
            >
              Avatar URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={photoURL}
              onChange={handlePhotoURLChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </form>
      </CardContent>
    </Card>
  )
}

export default UserProfile
