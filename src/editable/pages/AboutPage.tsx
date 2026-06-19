import Link from 'next/link'
import { CheckCircle2, FileText, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f7f8] text-[#111]">
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1090px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.85fr] lg:px-0 lg:py-20">
            <div className="editable-animate">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl font-black leading-tight tracking-[-0.035em] sm:text-6xl">{pagesContent.about.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{pagesContent.about.description}</p>
            </div>
            <div className="editable-animate editable-animate-delay-1 bg-[var(--slot4-dark-bg)] p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">At a glance</p>
              <div className="mt-7 grid gap-5">
                {['Press releases', 'Campaign updates', 'Public notices', 'Brand announcements'].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-white/12 pb-4"><CheckCircle2 className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="font-semibold">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1090px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-0">
          <aside className="editable-animate bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.08)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <div className="article-content mt-7">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </aside>
          <div className="grid gap-5">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="editable-animate bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,.07)]">
                <div className="flex items-center justify-between">
                  {index === 0 ? <FileText className="h-8 w-8 text-[var(--slot4-accent)]" /> : index === 1 ? <Search className="h-8 w-8 text-[var(--slot4-accent)]" /> : <CheckCircle2 className="h-8 w-8 text-[var(--slot4-accent)]" />}
                  <span className="text-xs font-black text-black/35">0{index + 1}</span>
                </div>
                <h2 className="mt-5 font-serif text-3xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/62">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1090px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-0">
            <h2 className="font-serif text-4xl font-black leading-tight">Ready to explore the media distribution archive?</h2>
            <Link href="/media-distribution" className="inline-flex w-fit bg-[var(--slot4-green)] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white">Browse Releases</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
