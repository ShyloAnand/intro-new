"use client"

import React from "react"
import { ProfileDetail } from "../ProfileDetail/ProfileDetail"
import { Button } from "@/components/ui/button"


type ProfileProps = {
  onLogout: () => void
}

const Profile = ({ onLogout }: ProfileProps) => {
  return (
    <div className="p-6 text-center">
      <ProfileDetail />
      <Button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white mt-4"
      >
        Logout
      </Button>
    </div>
  )
}

export default Profile
