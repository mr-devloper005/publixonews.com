import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Search, Send, TrendingUp } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, getEditableCategory, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TextReleaseCard({ post, href, index, featured = false }: { post: SitePost; href: string; index: number; featured?: boolean }) {
  return (
    <Link href={href} className={`group block border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,.12)] ${featured ? 'md:col-span-2' : ''}`}>
      <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">
        <span>{getEditableCategory(post)}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={`${featured ? 'text-4xl sm:text-5xl' : 'text-2xl'} mt-5 font-serif font-black leading-[1.08] tracking-[-.035em] text-black group-hover:text-[var(--slot4-accent)]`}>{post.title}</h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-black/62">{getEditableExcerpt(post, featured ? 230 : 160)}</p>
      <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--slot4-accent)] pb-1 text-xs font-black uppercase tracking-[.14em] text-black/70">Read update <ArrowRight className="h-4 w-4" /></span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const side = posts.slice(1, 4)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution updates.`

  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-10 lg:py-16`}>
        <div className="grid min-h-[430px] overflow-hidden bg-[var(--slot4-dark-bg)] text-white lg:grid-cols-[1.05fr_.95fr]">
          <div className="editable-animate flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-black leading-[1.02] tracking-[-.035em] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryRoute} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white hover:bg-white hover:text-black">{pagesContent.home.hero.secondaryCta.label}</Link>
            </div>
          </div>
          <div className="editable-animate editable-animate-delay-1 flex flex-col justify-center bg-[linear-gradient(135deg,rgba(40,167,223,.96),rgba(40,167,223,.68)),url('/placeholder.svg?height=900&width=1400')] bg-cover p-8 sm:p-12">
            <div className="bg-white/95 p-7 text-black shadow-[0_24px_80px_rgba(0,0,0,.18)]">
              <p className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-accent)]">Latest desk note</p>
              <h2 className="mt-4 font-serif text-3xl font-black leading-tight">{lead?.title || 'Media updates are ready for distribution.'}</h2>
              <p className="mt-4 text-sm leading-7 text-black/62">{lead ? getEditableExcerpt(lead, 180) : pagesContent.home.hero.featureCardDescription}</p>
              {lead ? <Link href={postHref(primaryTask, lead, primaryRoute)} className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em]">Open release <ArrowRight className="h-4 w-4" /></Link> : null}
            </div>
          </div>
        </div>

        {side.length ? (
          <div className="grid border-x border-b border-black/10 bg-[#f6f7f8] md:grid-cols-3">
            {side.map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-animate border-t border-black/10 p-6 transition hover:bg-white md:border-r md:last:border-r-0">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Distribution lane 0{index + 1}</p>
                <h2 className="mt-3 font-serif text-2xl font-black leading-tight">{post.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/62">{getEditableExcerpt(post, 130)}</p>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#f6f7f8]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mb-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="editable-animate">
            <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">What we distribute</p>
            <h2 className="mt-2 font-serif text-4xl font-black tracking-[-.035em]">Latest media releases</h2>
          </div>
          <Link href={primaryRoute} className="hidden items-center gap-2 bg-[var(--slot4-green)] px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-white md:inline-flex">View archive <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {railPosts.map((post, index) => <TextReleaseCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} featured={index === 0} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const source = posts.slice(6, 12).length ? posts.slice(6, 12) : posts.slice(0, 6)
  if (!source.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="editable-animate text-center">
          <p className="text-[10px] font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Distribution outcomes</p>
          <h2 className="mt-3 font-serif text-4xl font-black tracking-[-.035em]">Helping public updates move faster</h2>
        </div>
        <div className="mt-10 grid gap-8 text-center sm:grid-cols-3">
          {[
            ['25', 'Active release lanes'],
            ['3', 'Priority review steps'],
            ['100', '% discoverable archive'],
          ].map(([number, label]) => (
            <div key={label} className="editable-animate border-b border-black/12 pb-7">
              <p className="text-7xl font-light leading-none text-black">{number}</p>
              <p className="mt-4 text-sm text-black/45">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {source.slice(0, 3).map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-animate border-t border-black/15 pt-6 transition hover:-translate-y-1">
              <FileText className="h-9 w-9 text-[var(--slot4-accent)]" />
              <h3 className="mt-5 font-serif text-2xl font-black leading-tight">{post.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/58">{getEditableExcerpt(post, 140)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const briefs = source.slice(0, 7)
  if (!briefs.length) return null
  return (
    <section className="bg-[#f6f7f8]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div className="editable-animate bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.08)]">
            <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">Why choose us?</p>
            <h2 className="mt-3 font-serif text-4xl font-black tracking-[-.035em]">Distribution pages built for clarity.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                [CheckCircle2, 'Experienced', 'Structured release pages keep the headline, source, summary, and action clear.'],
                [TrendingUp, 'Visible', 'Archive and search surfaces help real posts stay discoverable after publication.'],
                [Send, 'Professional', 'The interface feels restrained, credible, and aligned with media distribution.'],
              ].map(([Icon, title, body]) => {
                const IconComponent = Icon as typeof CheckCircle2
                return (
                  <div key={title as string}>
                    <IconComponent className="h-9 w-9 text-[var(--slot4-accent)]" />
                    <h3 className="mt-5 text-xl font-semibold">{title as string}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/58">{body as string}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <aside className="editable-animate editable-animate-delay-1 bg-white p-7">
            <div className="border-b border-black/15 pb-4">
              <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">Quick reads</p>
              <h2 className="mt-2 font-serif text-3xl font-black tracking-[-.035em]">The briefing</h2>
            </div>
            <div className="mt-2">
              {briefs.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </aside>
        </div>
        <form action="/search" className="editable-animate mt-12 grid bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,.08)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <h3 className="font-serif text-3xl font-black tracking-[-.035em]">Search the full archive</h3>
            <p className="mt-2 text-sm text-black/60">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="mt-5 flex border border-black/15 bg-white sm:mt-0 sm:min-w-[390px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-black/45" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-14`}>
        <div className="editable-animate grid gap-8 bg-[linear-gradient(135deg,rgba(40,167,223,.94),rgba(18,121,165,.9))] p-8 text-white lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.24em] text-white/70">{pagesContent.home.cta.badge}</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-black leading-tight tracking-[-.035em]">{pagesContent.home.cta.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{pagesContent.home.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/media-distribution" className="bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-black">{pagesContent.home.cta.primaryCta.label}</Link>
            <Link href="/contact" className="border border-white/60 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white hover:bg-white hover:text-black">{pagesContent.home.cta.secondaryCta.label}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
