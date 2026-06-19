'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Media Distribution', href: '/media-distribution' },
    { label: 'Archive', href: '/search' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-[0_2px_12px_rgba(15,23,42,.08)]">
      <div className="mx-auto flex min-h-[74px] max-w-[1090px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/15 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-[var(--slot4-accent)] text-[var(--slot4-accent)]">
              <img src="/favicon.png" alt="Logo" className="h-9 w-9" />
            </span>
            
            <span className="max-w-[42vw] truncate text-3xl font-black tracking-[-0.06em]">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-black/78 lg:flex">
          {links.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {session ? (
            <>
              <Link href="/create" className="hidden text-sm font-black text-[var(--slot4-accent)] sm:block">{session.name}</Link>
              <button type="button" onClick={logout} className="hidden border border-black/15 px-4 py-2 text-xs font-black uppercase tracking-[.12em] sm:block">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Log in</Link>
              <Link href="/signup" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Sign up</Link>
            </>
          )}
          <Link href={session ? '/create' : '/contact'} className="inline-flex items-center gap-2 bg-[var(--slot4-green)] px-4 py-3 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-[var(--slot4-dark-bg)] sm:px-6">
            {session ? 'Publish' : 'Get in Touch'} <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="hidden bg-[var(--slot4-dark-bg)] text-white lg:block">
        <div className="mx-auto flex min-h-[58px] max-w-[1090px] items-center justify-between px-4 sm:px-6 lg:px-0">
          <div className="flex items-center gap-8 text-xs font-black uppercase tracking-[.12em]">
            <Link href="/media-distribution" className="hover:text-[var(--slot4-accent)]">Press releases</Link>
            <Link href="/search?category=news-media" className="hover:text-[var(--slot4-accent)]">News media</Link>
            <Link href="/search?category=brand-updates" className="hover:text-[var(--slot4-accent)]">Brand updates</Link>
          </div>
          <form action="/search" className="flex min-w-0 flex-1 items-center border border-white/15 bg-white/5 lg:max-w-[270px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search..." className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/10">
            {[...links, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
