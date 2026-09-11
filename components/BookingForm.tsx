"use client";
import { useRef, useState, type FormEvent } from "react";
const endpoint = "https://services.leadconnectorhq.com/hooks/epaJGUMN9f2hGxOPYUdw/webhook-trigger/5ff10505-127d-4007-9c09-e9023127b2c2";
export default function BookingForm() {
 const dialog=useRef<HTMLDialogElement>(null);
 const submissionId=useRef<string|null>(null);
 const [step,setStep]=useState(0);
 const [values,setValues]=useState({marketing_spend:"",company:"",name:"",phone:""});
 const [status,setStatus]=useState<'idle'|'sending'|'success'>('idle');
 const [error,setError]=useState('');
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();if(status==='sending'||status==='success')return;
  if(step<3){const value=step===1?values.company:values.name;if(!value.trim()){setError('Please enter a value.');return;}setError('');setStep(step+1);return;}
  const digits=values.phone.replace(/\D/g,'');if(digits.length!==10){setError('Enter exactly 10 digits for your US mobile number.');return;}
  setStatus('sending');setError('');submissionId.current??=crypto.randomUUID();
  const parts=values.name.trim().split(/\s+/);
  try {const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...values,phone:'+1'+digits,submission_id:submissionId.current,form_type:'book_call',first_name:parts.shift()||'',last_name:parts.join(' '),source:'Oakmont Landing Page'} )});if(!response.ok)throw new Error();setStatus('success');}
  catch {setError('We could not save your information. Please try again or call (888) 810-0013.');setStatus('idle');}
 }
 return <><button className="demo-launch" onClick={()=>dialog.current?.showModal()}>Book Free Demo Call →</button><dialog className="oak-dialog booking-dialog" ref={dialog} onClick={e=>{if(e.target===e.currentTarget&&status!=='sending')dialog.current?.close();}}><div className="dialog-heading"><span>THE OAKMONT DIGITAL</span><button aria-label="Close qualification form" onClick={()=>dialog.current?.close()}>×</button></div>{status==='success'?<div className="booking-success" role="status"><span>✓</span><h2>You’re in.</h2><p>Your information has been sent to Oakmont. Watch the overview while the team gets your call ready.</p><button className="demo-launch" onClick={()=>dialog.current?.close()}>Back to the video</button></div>:<><h2>Let’s get your call ready</h2><p>$297/month contractor growth system</p><progress max={4} value={step+1} aria-label={`Step ${step+1} of 4`} /><div className="booking-step-meta"><span>STEP {step+1} OF 4</span>{step>0&&<button disabled={status==='sending'} onClick={()=>setStep(step-1)}>← Back</button>}</div><form onSubmit={submit} key={step}>{step===0?<fieldset><legend>How much do you spend on marketing per month?</legend>{['Nothing','Up to $1k','$1k–$3k','$3k–$6k','$6k+'].map(v=><button type="button" key={v} className="booking-choice" onClick={()=>{setValues({...values,marketing_spend:v});setStep(1);}}>{v} <span>→</span></button>)}</fieldset>:<><label htmlFor={`booking-${step}`}>{['','What’s your company name?','What’s your name?','What’s your mobile phone?'][step]}</label><input autoFocus id={`booking-${step}`} required type={step===3?'tel':'text'} autoComplete={step===1?'organization':step===2?'name':'tel-national'} value={values[step===1?'company':step===2?'name':'phone']} onChange={e=>setValues({...values,[step===1?'company':step===2?'name':'phone']:e.target.value})} placeholder={step===1?'e.g. Smith Roofing LLC':step===2?'Your name':'(555) 123-4567'} maxLength={step===3?18:200} />{step===3&&<p className="booking-note">US mobile number, exactly 10 digits. Your details are sent to Oakmont to arrange your call. <a href="/privacy-policy">Privacy policy</a>.</p>}<button className="demo-launch" disabled={status==='sending'} type="submit">{status==='sending'?'Sending…':step===3?'Book a Call With Us':'Continue →'}</button></>}{error&&<p role="alert" className="form-error">{error}</p>}</form></>}</dialog></>;
}
