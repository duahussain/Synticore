"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import sources from "@/lib-demo-sources.json";

export function MediaPlayer({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);
  return <div className="media-player"><video key={src} controls playsInline preload="metadata" aria-label={title} src={src} onError={() => setFailed(true)} />{failed && <p role="alert">This video could not load. <a href={src} target="_blank" rel="noreferrer">Open the video directly</a>.</p>}</div>;
}
export function DemoButton({ title, src, children }: { title: string; src: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  return <><button type="button" className="demo-launch" onClick={() => ref.current?.showModal()}>{children}</button><dialog ref={ref} className="oak-dialog" onClick={e => {if(e.target === e.currentTarget) ref.current?.close();}} onClose={() => ref.current?.querySelector('video')?.pause()}><div className="dialog-heading"><h2>{title}</h2><button autoFocus aria-label="Close demo" onClick={() => ref.current?.close()}>×</button></div><MediaPlayer src={src} title={title} /></dialog></>;
}
export function ServiceMedia() {
  const pathname = usePathname();
  const [choice, setChoice] = useState("missed-call-text-back");
  const slug = pathname.slice(1);
  const src = sources[(slug === "automated-follow-up" ? choice : slug) as keyof typeof sources];
  if(!src) return <div className="service-consult"><span>BUILT AROUND YOUR BUSINESS</span><h2>Let’s talk about your next stage of growth.</h2><a href="/book-a-call" className="demo-launch">Book a Call →</a></div>;
  return <div>{slug === "automated-follow-up" && <div className="demo-tabs" role="group" aria-label="Choose a follow-up demo">{[["missed-call-text-back","Missed Call Follow Up"],["one-click-campaigns","One-Click Campaigns"],["functional-website","Form Follow Up"]].map(([key,label]) => <button key={key} aria-pressed={choice===key} onClick={()=>setChoice(key)}>{label}</button>)}</div>}<MediaPlayer src={src} title={`${slug.replaceAll('-',' ')} demo`} /></div>;
}
export function ProofGallery() {
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDialogElement>(null);
  const change = (offset:number) => setSelected(s => (s+offset+9)%9);
  return <><div className="proof-gallery">{Array.from({length:9},(_,i)=><button key={i} onClick={()=>{setSelected(i);ref.current?.showModal();}} aria-label={`Open client result ${i+1}`}><Image src={`/assets/proof/t${i+1}.jpg`} alt={`Client conversation screenshot ${i+1}`} width={400} height={650} /></button>)}</div><dialog ref={ref} className="oak-dialog proof-dialog" onClick={e=>{if(e.target===e.currentTarget)ref.current?.close();}} onKeyDown={e=>{if(e.key==='ArrowRight')change(1);if(e.key==='ArrowLeft')change(-1);}}><div className="dialog-heading"><span>Client result {selected+1} / 9</span><button autoFocus aria-label="Close image" onClick={()=>ref.current?.close()}>×</button></div><Image src={`/assets/proof/t${selected+1}.jpg`} alt={`Full-size client result ${selected+1}`} width={650} height={1100} className="proof-full" /><div className="gallery-controls"><button onClick={()=>change(-1)}>← Previous</button><button onClick={()=>change(1)}>Next →</button></div></dialog></>;
}
export function SiteFrame({children}:{children:React.ReactNode}) {
  const path=usePathname();
  useEffect(()=>{document.querySelectorAll('dialog[open]').forEach(d=>(d as HTMLDialogElement).close());},[path]);
  return <div className={`oak-site route-${path.slice(1)||'home'}`}><a className="skip-link" href="#site-content">Skip to content</a><div id="site-content" tabIndex={-1}>{children}</div></div>;
}
