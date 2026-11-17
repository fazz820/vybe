import fs from 'node:fs';
const p='../backend/server.js';let s=fs.readFileSync(new URL(p,import.meta.url),'utf8');
const old="if(people.includes(String(req.userId)))return res.status(409).json({message:'You’re already on the list.'});if(people.length>=a.maxParticipants)";
if(!s.includes(old))throw new Error('Join validation fragment not found');
const next="if(people.includes(String(req.userId)))return res.status(409).json({message:'You’re already on the list.'});const blocked=await db.find('blocks',{blocker:String(a.organizer),blocked:String(req.userId)});if(blocked.length)return res.status(403).json({message:'The organizer is not accepting participation from this account.'});if(people.length>=a.maxParticipants)";
s=s.replace(old,next);fs.writeFileSync(new URL(p,import.meta.url),s);console.log('Block participation rule added.');
