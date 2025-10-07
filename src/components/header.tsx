'use client'

import Link from 'next/link'
import { Menu, Sparkles, X } from 'lucide-react'
import { Button } from '~/components/ui/button'
import React from 'react'
import { cn } from '~/lib/utils'
import { useScroll } from 'motion/react'
import ModeToggle from './ModeToggle'
import { authClient } from '~/lib/auth-client'

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [session, setSession] = React.useState<any>(null)

  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  React.useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await authClient.getSession()
        setSession(res?.data?.session ?? null)
      } catch (err) {
        console.error('Error fetching session:', err)
        setSession(null)
      }
    }
    void fetchSession()
  }, [])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={cn(
          'fixed z-20 w-full border-b transition-colors duration-150',
          scrolled && 'bg-background/50 backdrop-blur-3xl'
        )}
      >
        <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Brand */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Sparkles />
                <h1 className="font-heading">Pixora</h1>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-30 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {menuState ? (
                  <X className="size-6 transition-transform duration-200" />
                ) : (
                  <Menu className="size-6 transition-transform duration-200" />
                )}
              </button>

              {/* Desktop Menu */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --------- MOBILE MENU (dropdown) --------- */}
            <div
              className={cn(
                'absolute left-0 top-full z-20 w-full origin-top transform bg-background px-6 py-8 shadow-2xl transition-all duration-300 ease-in-out lg:hidden',
                menuState
                  ? 'scale-y-100 opacity-100 visible'
                  : 'scale-y-0 opacity-0 invisible',
                'flex flex-col space-y-6 rounded-3xl border'
              )}
            >
              <ul className="space-y-6 text-base">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ModeToggle />
                {session ? (
                  <Button asChild size="sm" onClick={() => setMenuState(false)}>
                    <Link href="/dashboard">
                      <span>Dashboard</span>
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      onClick={() => setMenuState(false)}
                    >
                      <Link href="/auth/sign-in">
                        <span>Login</span>
                      </Link>
                    </Button>
                    <Button asChild size="sm" onClick={() => setMenuState(false)}>
                      <Link href="/auth/sign-up">
                        <span>Sign Up</span>
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-2">
              <ModeToggle />
              {session ? (
                <Button asChild size="sm">
                  <Link href="/dashboard">
                    <span>Dashboard</span>
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/auth/sign-in">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/auth/sign-up">
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
