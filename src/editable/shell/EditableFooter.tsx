'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto max-w-[1090px] px-4 py-14 sm:px-6 lg:px-0 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.75fr_.9fr_.9fr]">
          <div className="editable-animate">
            <Link href="/" className="flex items-center gap-3 text-4xl font-black tracking-[-0.06em]">
              <span className="grid h-11 w-11 place-items-center border border-white/70"><img src="/favicon.png" alt="Logo" className="h-9 w-9" /></span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/72">
              {globalContent.footer?.description || 'Media distribution support for announcements, coverage, launches, and public updates.'}
            </p>
          </div>

          <div className="editable-animate editable-animate-delay-1">
            <h3 className="pb-3 text-sm font-black">Explore</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/72">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/media-distribution" className="hover:text-white">Distribution</Link>
              <Link href="/about" className="hover:text-white">About Us</Link>
              <Link href="/search" className="hover:text-white">Archive</Link>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
              <Link href="/create" className="hover:text-white">Publish</Link>
            </div>
          </div>

          <div className="editable-animate editable-animate-delay-2">
            <h3 className="pb-3 text-sm font-black">Recent Focus</h3>
            <div className="mt-4 grid gap-4 text-sm text-white/72">
              <Link href="/search?category=press-release" className="border-b border-white/10 pb-4 hover:text-white">Press release distribution and newsroom updates</Link>
              <Link href="/search?category=brand-updates" className="border-b border-white/10 pb-4 hover:text-white">Brand launches, public notices, and campaign coverage</Link>
            </div>
          </div>

          <div className="editable-animate editable-animate-delay-3">
            <h3 className="pb-3 text-sm font-black">Our Newsletter</h3>
            <form action="/signup" className="mt-4 flex border border-white/35">
              <Mail className="ml-4 mt-4 h-4 w-4 text-white/45" />
              <input name="email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">Sign Up</button>
            </form>
            <div className="mt-5">
              {session ? (
                <>
                  <p className="text-sm text-white/72">Signed in as <span className="font-black text-white">{session.name}</span></p>
                  <button onClick={logout} className="mt-3 inline-flex items-center gap-2 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[.12em] hover:bg-white hover:text-black">Logout <ArrowRight className="h-4 w-4" /></button>
                </>
              ) : (
                <Link href="/login" className="inline-flex items-center gap-2 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[.12em] hover:bg-white hover:text-black">Publisher Login <ArrowRight className="h-4 w-4" /></Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1090px] flex-wrap items-center justify-between gap-4 border-t border-white/18 px-4 py-6 text-sm text-white/58 sm:px-6 lg:px-0">
        <span>© {year} {SITE_CONFIG.name}</span>
        <span className="flex gap-6"><Link href="/contact">Legal</Link><Link href="/search">Sitemap</Link><Link href="/about">Privacy Policy</Link></span>
      </div>
    </footer>
  )
}
