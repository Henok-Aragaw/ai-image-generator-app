import type { Metadata } from 'next'
import React from 'react'
import { Providers } from '~/components/providers'
import AppSidebar from '~/components/sidebar/app-sidebar'
import BreadCrumbClient from '~/components/sidebar/breadcrumb-client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '~/components/ui/breadcrumb'
import { Separator } from '~/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
import { Toaster } from '~/components/ui/sonner'

export const metadata:Metadata = {
  title: "Pixora",
  description: "AI Image Editor",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Providers>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className='flex h-screen flex-col'>
          <header>
            <div>
              <SidebarTrigger className='hover:bg-muted -ml-1 h-8 w-8 transition-colors' />
              <Separator
                orientation="vertical"
                className="mr-2 h-6 data-[orientation=vertical]:h-6"
              />
              <Breadcrumb>
               <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadCrumbClient />
                </BreadcrumbItem>
               </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <main className='from-background to-muted/20 flex-1 overflow-y-auto bg-gradient-to-br p-6'>
           {children}
          </main> 
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </Providers>
  )
}
export default DashboardLayout