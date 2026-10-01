import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return <><Head><title>Page not found — Tirth Soni</title><meta name="robots" content="noindex" /></Head><main className="not-found"><div><a className="brand" href="/">tirth<span className="brand-dot">.</span></a><p className="section-kicker">404 / PAGE NOT FOUND</p><h1>Looks like this page<br /><span className="serif-italic">went off script.</span></h1><p>The page you requested doesn&apos;t exist or may have moved.</p><Link href="/"><a className="button button-primary"><ArrowLeft size={18} /> Back to homepage</a></Link></div></main></>;
}
