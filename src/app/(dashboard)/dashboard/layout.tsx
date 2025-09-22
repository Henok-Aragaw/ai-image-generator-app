import React from 'react'
import { Providers } from '~/components/providers'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Providers>
    <main>
        {children}
        </main>
    </Providers>
  )
}
export default DashboardLayout