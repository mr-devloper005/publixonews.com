import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, FilePlus2, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f7f8] text-[#111]">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1090px] gap-0 px-4 py-12 sm:px-6 lg:grid-cols-[.88fr_1.12fr] lg:px-0">
          <div className="editable-animate flex flex-col justify-center bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,.09)] sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 font-serif text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black/12 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="editable-animate editable-animate-delay-1 flex flex-col justify-center bg-[linear-gradient(135deg,rgba(40,167,223,.94),rgba(18,121,165,.9))] p-8 text-white sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl font-black leading-tight tracking-[-0.035em] sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/78">{pagesContent.auth.signup.description}</p>
            <div className="mt-9 grid gap-4 text-sm text-white/80">
              <span className="flex gap-3"><FilePlus2 className="h-5 w-5 shrink-0" />Draft media updates with title, category, summary, links, and body content.</span>
              <span className="flex gap-3"><Search className="h-5 w-5 shrink-0" />Keep published distribution content easy to search and discover.</span>
              <span className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0" />Use one account for publishing access across the site.</span>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
