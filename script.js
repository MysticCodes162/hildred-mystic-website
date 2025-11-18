/* style.css - futuristic + motion heavy theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

:root{
  --bg:#020205;
  --panel: rgba(255,255,255,0.035);
  --glass-border: rgba(255,255,255,0.06);
  --accent:#ff6a00;
  --accent-2:#ffa858;
  --muted:#9aa4b2;
  --glass-blur: 10px;
  --glass-elev: 0 10px 30px rgba(0,0,0,0.6);
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;padding:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto}

body{
  background: radial-gradient(circle at 10% 10%, #071026 0%, #020205 40%, #000 100%);
  color: #e6eef8;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

/* App layout */
#app{display:grid;grid-template-columns:260px 1fr 320px;gap:22px;min-height:100vh;padding:28px}

/* Left HUD */
.hud-left{padding:14px;position:relative}
.logo{font-weight:900;letter-spacing:2px;color:var(--accent);font-size:18px}
.logo .dot{color:#fff;opacity:.3;margin-left:6px}
.hud-left nav{margin-top:18px;display:flex;flex-direction:column;gap:8px}
.nav-btn{background:transparent;border:none;color:var(--muted);text-align:left;padding:10px;border-radius:8px;cursor:pointer;transition:all .28s ease}
.nav-btn:hover{transform:translateX(6px);color:var(--accent)}
.nav-btn.active{background:linear-gradient(90deg, rgba(255,106,0,0.12), rgba(255,106,0,0.06));color:var(--accent);box-shadow:0 8px 30px rgba(255,106,0,0.06)}

.presence{margin-top:22px;background:var(--panel);padding:12px;border-radius:12px;border:1px solid var(--glass-border);backdrop-filter:blur(var(--glass-blur));box-shadow:var(--glass-elev)}
.presence .avatar img{width:88px;height:88px;border-radius:14px;object-fit:cover}
.presence .meta{margin-top:8px}
.hud-footer{margin-top:26px;color:var(--muted);font-size:12px}

/* scan line for motion */
.hud-anim{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}
.scan-line{position:absolute;left:20px;top:10%;width:220px;height:2px;background:linear-gradient(90deg,transparent,var(--accent),transparent);opacity:0.06;animation:scan 6s linear infinite}
@keyframes scan{0%{transform:translateY(-6%)}50%{transform:translateY(6%)}100%{transform:translateY(-6%)}}

/* Main area */
.main-area{position:relative}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:10px 0}
.search-wrap{position:relative;min-width:320px}
.search-wrap input{width:520px;max-width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,0.04);background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);color:inherit;outline:none;transition:box-shadow .25s ease}
.search-wrap input:focus{box-shadow:0 8px 30px rgba(0,0,0,0.6),0 0 20px rgba(255,106,0,0.06)}
.cmd-hint{position:absolute;right:8px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:13px;opacity:.9}
.cmd-type{color:var(--accent);font-weight:700;display:inline-block;min-width:100px}

/* Glass common */
.glass{background:var(--panel);padding:18px;border-radius:14px;border:1px solid var(--glass-border);backdrop-filter:blur(var(--glass-blur));box-shadow:var(--glass-elev);transition:transform .25s ease, box-shadow .25s ease}
.glass.floating{transform:translateY(0);animation:float 6s ease-in-out infinite}
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)}}

/* Section transitions */
.section{opacity:0;transform:translateY(6px);transition:opacity .45s ease, transform .45s ease}
.section.show{opacity:1;transform:translateY(0)}

/* Compose */
.compose-card{margin-bottom:18px;display:flex;flex-direction:column;gap:8px}
.compose-card textarea{width:100%;min-height:88px;border-radius:12px;border:none;padding:12px;background:rgba(255,255,255,0.03);color:inherit;resize:none;outline:none}
.compose-actions{display:flex;justify-content:space-between;align-items:center}
.post-btn{background:linear-gradient(90deg,var(--accent),var(--accent-2));border:none;padding:10px 14px;border-radius:10px;color:#031018;cursor:pointer;font-weight:800;box-shadow:0 8px 24px rgba(255,106,0,0.12)}
.post-btn.small{padding:8px 10px;font-size:14px}

/* Feed */
.feed-list{margin-top:8px;display:flex;flex-direction:column}
.post{padding:14px;border-radius:12px;margin-bottom:12px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.03);backdrop-filter:blur(6px)}
.post-title{display:flex;justify-content:space-between;align-items:center;gap:8px}
.post .body{margin-top:10px;color:var(--muted)}
.post-actions{margin-top:12px;display:flex;gap:10px}
.post-actions button{background:transparent;border:none;color:var(--accent);cursor:pointer;font-weight:700;padding:6px 8px;border-radius:8px}
.post-actions button .count{display:inline-block;transition:transform .18s cubic-bezier(.2,.8,.2,1)}
.post-actions button.clicked .count{transform:scale(1.6);color:var(--accent);text-shadow:0 4px 18px rgba(255,106,0,0.14)}

/* Mystic */
.portal-head{text-align:center;margin-bottom:18px}
.typing-title{display:inline-block;position:relative;overflow:hidden}
.typing-title::after{content:'';display:inline-block;width:2px;height:1.2em;background:var(--accent);margin-left:8px;animation:blink 1s steps(2,end) infinite}
@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}
.facts .fact{padding:12px;margin-bottom:10px;cursor:pointer;border-left:4px solid rgba(255,106,0,0.12)}

/* Right HUD */
.hud-right{padding:14px}
.panel{margin-bottom:14px}

/* Chat Panel */
.chat-panel{position:fixed;right:28px;bottom:28px;width:340px;max-height:480px;display:flex;flex-direction:column;overflow:hidden;z-index:999}
.chat-log{flex:1;padding:12px;overflow-y:auto}
.chat-input{display:flex;padding:12px;border-top:1px solid rgba(255,255,255,0.02)}
.chat-input input{flex:1;padding:10px;border-radius:10px;border:none;background:rgba(255,255,255,0.03);color:inherit}
.typing-indicator{display:flex;gap:5px;align-items:center}
.typing-indicator span{width:6px;height:6px;border-radius:50%;background:var(--muted);opacity:.5;animation:dot 1s infinite}
.typing-indicator span:nth-child(1){animation-delay:0}s
.typing-indicator span:nth-child(2){animation-delay:.15s}
.typing-indicator span:nth-child(3){animation-delay:.3s}
@keyframes dot{0%{transform:translateY(0);opacity:.4}50%{transform:translateY(-6px);opacity:1}100%{transform:translateY(0);opacity:.4}}

/* small screens */
@media (max-width:1000px){
  #app{grid-template-columns:1fr;padding:16px}
  .hud-left,.hud-right{display:none}
  .chat-panel{right:5%;width:90%}
}
