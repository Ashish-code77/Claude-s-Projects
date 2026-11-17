/* Stylised duotone portraits used as placeholders for real customer photography. */
const P={
  maya:{skin:"#C98F6B",hair:"#2A1D17",style:"long",bg:["#3A3F5E","#1E2236"],shirt:"#6E7B95"},
  mayaNew:{skin:"#C98F6B",hair:"#2A1D17",style:"curtain",bg:["#D9DDE5","#C3C9D4"],shirt:"#1B2033"},
  dan:{skin:"#8E5B3E",hair:"#17120F",style:"flat",beard:"stubble",bg:["#D9DDE5","#C3C9D4"],shirt:"#7B8496"},
  danNew:{skin:"#8E5B3E",hair:"#17120F",style:"crop",beard:"boxed",bg:["#E4D7CF","#CDBBAF"],shirt:"#1B2033"},
};
const looksM=["bob","pixie","curtain","waves","long"], looksD=["quiff","crop","buzz","swept","curls"];
const bgs=[["#E3E6EB","#CDD2DB"],["#EBDDD3","#D6C3B5"],["#DDE6E0","#C2D2C8"],["#E8E3D5","#D3CAB3"],["#E0DDEA","#C8C3DA"]];

function hair(style,cx,cy,c){
  const L=cx-27,R=cx+27,T=cy-34;
  switch(style){
    case "long": return {back:`<path d="M${L-4} ${cy-6} C ${L-8} ${T-4}, ${R+8} ${T-4}, ${R+4} ${cy-6} L ${R+10} ${cy+70} C ${R} ${cy+78}, ${L} ${cy+78}, ${L-10} ${cy+70} Z" fill="${c}"/>`,
      front:`<path d="M${L-2} ${cy} C ${L-4} ${T-2}, ${R+4} ${T-6}, ${R+2} ${cy-2} C ${R-6} ${cy-24}, ${cx+4} ${cy-26}, ${cx-6} ${cy-22} C ${cx-16} ${cy-18}, ${L+4} ${cy-12}, ${L-2} ${cy} Z" fill="${c}"/>`};
    case "curtain": return {back:`<path d="M${L-6} ${cy-4} C ${L-10} ${T-6}, ${R+10} ${T-6}, ${R+6} ${cy-4} L ${R+12} ${cy+58} C ${R+2} ${cy+66}, ${L-2} ${cy+66}, ${L-12} ${cy+58} Z" fill="${c}"/>`,
      front:`<path d="M${L-4} ${cy+16} C ${L-6} ${T-4}, ${cx} ${T-8}, ${cx-2} ${cy-20} C ${cx-10} ${cy-10}, ${L+8} ${cy-6}, ${L-4} ${cy+16} Z M${R+4} ${cy+16} C ${R+6} ${T-4}, ${cx} ${T-8}, ${cx+2} ${cy-20} C ${cx+10} ${cy-10}, ${R-8} ${cy-6}, ${R+4} ${cy+16} Z" fill="${c}"/>`};
    case "bob": return {back:`<path d="M${L-8} ${cy} C ${L-10} ${T-6}, ${R+10} ${T-6}, ${R+8} ${cy} L ${R+8} ${cy+30} L ${L-8} ${cy+30} Z" fill="${c}"/>`,
      front:`<path d="M${L-6} ${cy+6} C ${L-6} ${T-4}, ${R+6} ${T-4}, ${R+6} ${cy+6} C ${R-2} ${cy-14}, ${L+2} ${cy-14}, ${L-6} ${cy+6} Z" fill="${c}"/>`};
    case "pixie": return {back:"",front:`<path d="M${L-3} ${cy} C ${L-6} ${T-8}, ${R+6} ${T-6}, ${R+3} ${cy-4} C ${cx+6} ${cy-20}, ${cx-10} ${cy-12}, ${L-3} ${cy} Z" fill="${c}"/>`};
    case "waves": return {back:`<path d="M${L-6} ${cy-4} C ${L-12} ${T-6}, ${R+12} ${T-6}, ${R+6} ${cy-4} C ${R+18} ${cy+20}, ${R+4} ${cy+40}, ${R+16} ${cy+56} L ${L-16} ${cy+56} C ${L-4} ${cy+40}, ${L-18} ${cy+20}, ${L-6} ${cy-4} Z" fill="${c}"/>`,
      front:`<path d="M${L-4} ${cy+4} C ${L-6} ${T-4}, ${R+6} ${T-4}, ${R+4} ${cy+4} C ${R-4} ${cy-18}, ${L+8} ${cy-22}, ${L-4} ${cy+4} Z" fill="${c}"/>`};
    case "flat": return {back:"",front:`<path d="M${L-1} ${cy-4} C ${L-2} ${T-2}, ${R+2} ${T-2}, ${R+1} ${cy-4} L ${R-2} ${cy-14} L ${L+2} ${cy-14} Z" fill="${c}"/>`};
    case "crop": return {back:"",front:`<path d="M${L-1} ${cy-2} C ${L-3} ${T-10}, ${R+3} ${T-12}, ${R+1} ${cy-2} C ${R-4} ${cy-16}, ${cx+6} ${cy-24}, ${cx-4} ${cy-18} C ${cx-12} ${cy-24}, ${L+4} ${cy-16}, ${L-1} ${cy-2} Z" fill="${c}"/>`};
    case "quiff": return {back:"",front:`<path d="M${L} ${cy-2} C ${L-2} ${T-2}, ${cx-6} ${T-20}, ${cx+10} ${T-16} C ${R+6} ${T-12}, ${R+4} ${cy-14}, ${R} ${cy-2} C ${R-6} ${cy-16}, ${L+6} ${cy-16}, ${L} ${cy-2} Z" fill="${c}"/>`};
    case "buzz": return {back:"",front:`<path d="M${L} ${cy-4} C ${L-1} ${T}, ${R+1} ${T}, ${R} ${cy-4} C ${R-6} ${cy-20}, ${L+6} ${cy-20}, ${L} ${cy-4} Z" fill="${c}" opacity=".75"/>`};
    case "swept": return {back:"",front:`<path d="M${L-1} ${cy-2} C ${L-4} ${T-8}, ${cx} ${T-14}, ${R+4} ${T+2} C ${R+4} ${cy-14}, ${R+2} ${cy-6}, ${R} ${cy-2} C ${R-10} ${cy-22}, ${L+8} ${cy-20}, ${L-1} ${cy-2} Z" fill="${c}"/>`};
    case "curls": { let s=""; for(let i=0;i<9;i++){const a=Math.PI*(0.95+i*0.14);s+=`<circle cx="${cx+Math.cos(a)*24}" cy="${cy-8+Math.sin(a)*26}" r="10" fill="${c}"/>`;} s+=`<circle cx="${cx}" cy="${cy-30}" r="13" fill="${c}"/>`; return {back:"",front:s}; }
  }
  return {back:"",front:""};
}
function portrait(o){
  const id=Math.random().toString(36).slice(2,8);
  const dx=o.dx||0, dy=o.dy||0, cx=60+dx, cy=68+dy;
  const h=hair(o.style,cx,cy,o.hair);
  const beard = o.beard==="boxed" ? `<path d="M${cx-24} ${cy+6} C ${cx-24} ${cy+40}, ${cx+24} ${cy+40}, ${cx+24} ${cy+6} C ${cx+18} ${cy+22}, ${cx-18} ${cy+22}, ${cx-24} ${cy+6} Z" fill="${o.hair}" opacity=".9"/>`
             : o.beard==="stubble" ? `<path d="M${cx-24} ${cy+8} C ${cx-24} ${cy+38}, ${cx+24} ${cy+38}, ${cx+24} ${cy+8} C ${cx+18} ${cy+22}, ${cx-18} ${cy+22}, ${cx-24} ${cy+8} Z" fill="${o.hair}" opacity=".35"/>` : "";
  const earX = dx>2 ? cx-26 : dx<-2 ? cx+26 : null;
  const ears = earX===null ? `<ellipse cx="${cx-26}" cy="${cy+4}" rx="4" ry="7" fill="${o.skin}"/><ellipse cx="${cx+26}" cy="${cy+4}" rx="4" ry="7" fill="${o.skin}"/>` : `<ellipse cx="${earX}" cy="${cy+4}" rx="4" ry="7" fill="${o.skin}"/>`;
  return `<svg viewBox="0 0 120 150" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">
  <defs><linearGradient id="g${id}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="${o.bg[0]}"/><stop offset="1" stop-color="${o.bg[1]}"/></linearGradient>
  <radialGradient id="s${id}" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></radialGradient></defs>
  <rect width="120" height="150" fill="url(#g${id})"/>
  ${h.back}
  <path d="M8 150 C 12 122, 34 110, 60 110 C 86 110, 108 122, 112 150 Z" fill="${o.shirt}"/>
  <path d="M${51+dx*.3} 92 L ${69+dx*.3} 92 L ${71+dx*.3} 114 C 66 120, 54 120, ${49+dx*.3} 114 Z" fill="${o.skin}"/>
  <path d="M${51+dx*.3} 100 L ${69+dx*.3} 100 L ${70+dx*.3} 108 C 64 110, 56 110, ${50+dx*.3} 108 Z" fill="#000" opacity=".12"/>
  ${ears}
  <ellipse cx="${cx}" cy="${cy}" rx="25" ry="${o.ry||31}" fill="${o.skin}"/>
  <ellipse cx="${cx}" cy="${cy}" rx="25" ry="${o.ry||31}" fill="url(#s${id})"/>
  ${beard}${h.front}
  </svg>`;
}
const M=P.maya, MN=P.mayaNew, D=P.dan, DN=P.danNew;
const map={
  mayaF:{...M}, mayaL:{...M,dx:-7}, mayaR:{...M,dx:7}, mayaU:{...M,dy:-6,ry:28}, mayaD:{...M,dy:6,ry:28},
  mayaBefore:{...M,bg:["#D9DDE5","#C3C9D4"]}, mayaAfter:{...MN},
  danBefore:{...D}, danAfter:{...DN},
  spec1:{skin:"#E0B08C",hair:"#5A3824",style:"waves",bg:["#3A3F5E","#262A42"],shirt:"#C9B79C"},
  spec2:{skin:"#6E4630",hair:"#120E0C",style:"crop",beard:"boxed",bg:["#3A3F5E","#262A42"],shirt:"#8C95AE"},
  spec3:{skin:"#F0C9A8",hair:"#B07A45",style:"bob",bg:["#3A3F5E","#262A42"],shirt:"#D5452A"},
};
looksM.forEach((s,i)=>map["mL"+(i+1)]={...M,style:s,bg:bgs[i],shirt:"#1B2033"});
looksD.forEach((s,i)=>map["dL"+(i+1)]={...D,style:s,beard:i===1?"boxed":i===3?"stubble":"",bg:bgs[i],shirt:"#1B2033"});
const crowd=[
  {skin:"#C98F6B",hair:"#2A1D17",style:"curtain"},{skin:"#8E5B3E",hair:"#17120F",style:"crop",beard:"boxed"},
  {skin:"#F0C9A8",hair:"#B07A45",style:"bob"},{skin:"#6E4630",hair:"#120E0C",style:"curls"},
  {skin:"#E0B08C",hair:"#3B2A20",style:"swept",beard:"stubble"},{skin:"#A8704B",hair:"#1E1A1A",style:"waves"},
  {skin:"#D9A27E",hair:"#4A3020",style:"quiff"},{skin:"#7B4C33",hair:"#120E0C",style:"pixie"}];
crowd.forEach((c,i)=>map["c"+(i+1)]={...c,bg:["#2E3350","#1C2034"],shirt:["#6E7B95","#C9B79C","#8C95AE","#D5452A"][i%4]});
document.querySelectorAll("[data-p]").forEach(el=>{const o=map[el.dataset.p]; if(o){ if(getComputedStyle(el).position==="static") el.style.position="relative"; el.insertAdjacentHTML("afterbegin",portrait(o)); }});

