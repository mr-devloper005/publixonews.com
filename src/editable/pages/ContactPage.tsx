'use client'

import { FileText, Mail, Megaphone, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release intake', body: 'Send press releases, campaign notes, corrections, and supporting source material.' },
  { icon: Megaphone, title: 'Distribution planning', body: 'Discuss categories, audience fit, syndication goals, and launch timing.' },
  { icon: Mail, title: 'Publisher support', body: 'Get help with account access, submissions, edits, or published media updates.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f7f8] text-[#111]">
        <section className="bg-[linear-gradient(135deg,rgba(40,167,223,.95),rgba(18,121,165,.9))] text-white">
          <div className="mx-auto max-w-[1090px] px-4 py-16 text-center sm:px-6 lg:px-0">
            <p className="editable-animate text-xs font-black uppercase tracking-[0.28em] text-white/78">{pagesContent.contact.eyebrow}</p>
            <h1 className="editable-animate editable-animate-delay-1 mx-auto mt-5 max-w-3xl font-serif text-5xl font-black leading-tight tracking-[-0.035em] sm:text-6xl">{pagesContent.contact.title}</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1090px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-0">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="editable-animate bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,.07)]">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-black/35">0{index + 1}</span></div>
                <h2 className="mt-5 font-serif text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-black/62">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="editable-animate editable-animate-delay-1 overflow-hidden bg-white shadow-[0_24px_40px_rgba(15,23,42,.09)] lg:grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-8">
              <Phone className="h-10 w-10 text-[var(--slot4-accent)]" />
              <h2 className="mt-6 font-serif text-4xl font-black">{pagesContent.contact.formTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-black/64">{pagesContent.contact.description}</p>
              <p className="mt-6 text-sm font-semibold text-black/70">Typical response topics: release placement, source edits, category selection, and distribution timing.</p>
            </div>
            <div className="min-w-1/2 overflow-hidden bg-[#f1f3f5] p-8">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
