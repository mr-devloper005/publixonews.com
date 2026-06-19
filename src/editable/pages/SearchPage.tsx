import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Filter, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey } from '@/lib/task-data'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { pagesContent } from '@/editable/content/pages.content'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/search',
    title: pagesContent.search.metadata.title,
    description: pagesContent.search.metadata.description,
  })
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => typeof value === 'string' ? stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase() : ''
const compactRaw = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const getContent = (post: SitePost) => post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
const summaryOf = (post: SitePost) => post.summary || compactRaw(getContent(post).description) || compactRaw(getContent(post).excerpt) || ''

const matches = (post: SitePost, query: string, category: string, task: string) => {
  const content = getContent(post)
  const typeText = compactText(content.type)
  if (typeText === 'comment') return false
  const derivedTask = getPostTaskKey(post) || typeText
  if (task && derivedTask !== task) return false
  const categoryText = compactText(content.category)
  const tagsText = compactText(Array.isArray(post.tags) ? post.tags.join(' ') : '')
  if (category && !(categoryText || tagsText).includes(category)) return false
  if (!query) return true
  return [post.title, post.summary, content.description, content.body, content.excerpt, content.category, Array.isArray(post.tags) ? post.tags.join(' ') : '']
    .some((value) => compactText(value).includes(query))
}

function SearchResultCard({ post, index }: { post: SitePost; index: number }) {
  const task = getPostTaskKey(post) as TaskKey | null
  const href = task ? buildPostUrl(task, post.slug) : `/media-distribution/${post.slug}`
  const summary = summaryOf(post)
  const taskLabel = SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Media update'
  const strong = index % 5 === 0

  return (
    <Link href={href} className={`editable-animate group block bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,.12)] ${strong ? 'md:col-span-2' : ''}`}>
      <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">
        <span>{taskLabel}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h2 className={`${strong ? 'text-4xl sm:text-5xl' : 'text-2xl'} mt-5 font-serif font-black leading-tight tracking-[-0.035em] text-black`}>{post.title}</h2>
      {summary ? <p className="mt-4 line-clamp-4 text-sm leading-7 text-black/62">{summary}</p> : null}
      <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--slot4-accent)] pb-1 text-xs font-black uppercase tracking-[0.14em] text-black/70 group-hover:text-black">Open result <ArrowRight className="h-4 w-4" /></span>
    </Link>
  )
}

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }> }) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const feed = await fetchSiteFeed(1000, { fresh: true, category: category || undefined, task: task || undefined })
  const posts = feed?.posts || []
  const results = posts.filter((post) => matches(post, normalized, category, task)).slice(0, normalized ? 80 : 36)
  const enabledTasks = SITE_CONFIG.tasks.filter((item) => item.enabled)

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#f6f7f8] text-black">
        <section className="mx-auto max-w-[1090px] px-4 py-12 sm:px-6 lg:px-0">
          <div className="grid bg-white shadow-[0_24px_70px_rgba(15,23,42,.08)] md:grid-cols-[0.82fr_1.18fr]">
            <div className="editable-animate h-full bg-[var(--slot4-dark-bg)] p-7 text-white sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.search.hero.badge}</p>
              <h1 className="mt-5 font-serif text-5xl font-black leading-tight tracking-[-0.035em] sm:text-6xl">{pagesContent.search.hero.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72">{pagesContent.search.hero.description}</p>
            </div>
            <form action="/search" className="editable-animate editable-animate-delay-1 self-center p-6 sm:p-10 lg:p-14">
              <label className="flex items-center gap-3 border border-black/15 bg-white px-4 py-3">
                <Search className="h-5 w-5 opacity-45" />
                <input name="q" defaultValue={query} placeholder={pagesContent.search.hero.placeholder} className="min-w-0 flex-1 bg-transparent text-base font-bold outline-none placeholder:text-current/35" />
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="flex items-center gap-2 border border-black/15 bg-white px-4 py-3">
                  <Filter className="h-4 w-4 opacity-45" />
                  <input name="category" defaultValue={category} placeholder="Category" className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-current/35" />
                </label>
                <select name="task" defaultValue={task} className="border border-black/15 bg-white px-4 py-3 text-sm font-black outline-none">
                  <option value="">All content types</option>
                  {enabledTasks.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                </select>
              </div>
              <button className="mt-3 inline-flex h-12 w-full items-center justify-center bg-[var(--slot4-accent)] px-6 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[var(--slot4-dark-bg)]" type="submit">Search</button>
            </form>
          </div>

          <div className="editable-animate mt-10 flex flex-wrap items-end justify-between gap-4 border-b border-black/15 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] opacity-50">{results.length} results</p>
              <h2 className="mt-2 font-serif text-4xl font-black tracking-[-0.035em]">{query ? `Results for "${query}"` : pagesContent.search.resultsTitle}</h2>
            </div>
            <Link href="/media-distribution" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase shadow-sm">Browse latest <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {results.length ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {results.map((post, index) => <SearchResultCard key={post.id || post.slug} post={post} index={index} />)}
            </div>
          ) : (
            <div className="mt-6 border border-dashed border-black/20 bg-white p-10 text-center">
              <p className="font-serif text-3xl font-black tracking-[-0.035em]">No matching real posts found.</p>
              <p className="mt-3 text-sm font-semibold opacity-60">Try a different keyword, task type, or category after publishing media distribution content.</p>
            </div>
          )}
        </section>
      </main>
    </EditableSiteShell>
  )
}
