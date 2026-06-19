import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, LockKeyhole, Newspaper, Send } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f7f8] text-[#111]">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1090px] gap-0 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_.85fr] lg:px-0">
          <div className="editable-animate flex flex-col justify-center bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl font-black leading-tight tracking-[-0.035em] sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72">{pagesContent.auth.login.description}</p>
            <div className="mt-9 grid gap-4 text-sm text-white/72 sm:grid-cols-3">
              <span className="border-t border-white/18 pt-4"><Newspaper className="mb-3 h-5 w-5 text-[var(--slot4-accent)]" />Manage releases</span>
              <span className="border-t border-white/18 pt-4"><Send className="mb-3 h-5 w-5 text-[var(--slot4-accent)]" />Create updates</span>
              <span className="border-t border-white/18 pt-4"><LockKeyhole className="mb-3 h-5 w-5 text-[var(--slot4-accent)]" />Secure access</span>
            </div>
          </div>
          <div className="editable-animate editable-animate-delay-1 flex flex-col justify-center bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,.09)] sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 font-serif text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black/12 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
            <Link href="/media-distribution" className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-black/55 hover:text-black">Browse archive first <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
