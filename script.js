/* ================================================================
   DEVIS™ SCRIPT OF REGRET
   Maximum annoyance, minimum usability. As requested.
   ================================================================ */

/* ---------- 1. FAKE VISITOR COUNTER THAT GOES UP TOO FAST ---------- */
(function () {
  var n = 1;
  var el = document.getElementById("visitorNum");
  setInterval(function () {
    n += Math.floor(Math.random() * 9999);
    if (el) el.textContent = String(n).padStart(9, "0");
  }, 120);
})();

/* ---------- 2. ANIMATED <title> BAR ---------- */
(function () {
  var msgs = [
    "★彡 BUY TRAFFIC NOW 彡★",
    ">>> CLICK HERE <<<",
    "!!! DON'T LEAVE !!!",
    "💰 DEVIS 💰 ARBITRAGE 💰",
    "👀 WE SEE YOU 👀",
    "come back...",
  ];
  var i = 0;
  setInterval(function () {
    document.title = msgs[i % msgs.length];
    i++;
  }, 700);
})();

/* ---------- 3. THE ACCEPT BUTTON THAT DODGES ---------- */
function moveAccept(btn) {
  // pretends to accept but mostly runs
  var roll = Math.random();
  if (roll < 0.6) {
    btn.style.position = "relative";
    btn.style.left = (Math.random() * 220 - 110) + "px";
    btn.style.top = (Math.random() * 24 - 12) + "px";
    return;
  }
  alert("Thank you for accepting all 9,999 cookies! And the 10,000th secret one. 🍪");
}

/* ---------- 4. RUN-AWAY SUBMIT BUTTON ---------- */
function runAway(btn) {
  var maxX = Math.min(window.innerWidth - 220, 600);
  var x = (Math.random() * maxX) - (maxX / 2);
  var y = (Math.random() * 120) - 60;
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";
}

function fakeSubmit(e) {
  e.preventDefault();
  alert("ERROR 0xDEVIS: form submitted to the void. Please try again 47 more times.");
  return false;
}

/* ---------- 5. ALERT SPAM ON CTA ---------- */
var spamCount = 0;
function spamAlerts() {
  spamCount++;
  var lines = [
    "🎉 CONGRATULATIONS! You are our 1,000,000th clicker!",
    "⚠ Actually you clicked. That's it. That's the prize.",
    "💸 Please enter your bank details, mother's maiden name, and favorite color.",
    "🤖 Loading more traffic... 1% ... 1% ... 1% ... 0%",
    "Are you SURE you want wealth? (this button does nothing)",
  ];
  alert(lines[spamCount % lines.length]);
}

/* ---------- 6. ANIMATED STAT COUNTERS (jittery, never settle nicely) ---------- */
(function () {
  var targets = { s1: 999, s2: 110, s3: 8675309, s4: 42 };
  Object.keys(targets).forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var cur = 0;
    var target = targets[id];
    var t = setInterval(function () {
      cur += Math.ceil(target / 30);
      if (cur >= target) {
        cur = target;
        clearInterval(t);
        // then jitter forever, because why settle
        setInterval(function () {
          el.textContent = (target + Math.floor(Math.random() * 5 - 2)).toLocaleString();
        }, 250);
      }
      el.textContent = cur.toLocaleString();
    }, 60);
  });
})();

/* ---------- 7. CURSOR TRAIL OF MAGENTA DOTS ---------- */
(function () {
  var dots = [];
  var max = 18;
  for (var i = 0; i < max; i++) {
    var d = document.createElement("div");
    d.className = "trail-dot";
    d.style.opacity = (1 - i / max).toFixed(2);
    d.style.transform = "translate(-50%,-50%) scale(" + (1 - i / max) + ")";
    document.body.appendChild(d);
    dots.push({ el: d, x: 0, y: 0 });
  }
  var mx = window.innerWidth / 2, my = window.innerHeight / 2;
  document.addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
  });
  function loop() {
    var px = mx, py = my;
    dots.forEach(function (dot) {
      dot.x += (px - dot.x) * 0.35;
      dot.y += (py - dot.y) * 0.35;
      dot.el.style.left = dot.x + "px";
      dot.el.style.top = dot.y + "px";
      // psychedelic color cycling
      dot.el.style.background = "hsl(" + ((Date.now ? 0 : 0) + dot.x + dot.y) % 360 + ",100%,50%)";
      px = dot.x; py = dot.y;
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ---------- 8. CHAT BLOB WANDERS THE SCREEN ---------- */
(function () {
  var blob = document.getElementById("chatBlob");
  if (!blob) return;
  var dirX = 1, dirY = 1;
  var x = window.innerWidth - 90, y = window.innerHeight * 0.4;
  setInterval(function () {
    x += dirX * 7; y += dirY * 5;
    if (x < 0 || x > window.innerWidth - 70) dirX *= -1;
    if (y < 60 || y > window.innerHeight - 80) dirY *= -1;
    blob.style.right = "auto";
    blob.style.left = x + "px";
    blob.style.top = y + "px";
  }, 90);
})();

/* ---------- 9. FAKE "ARE YOU LEAVING?" GUILT TRIP ---------- */
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "But we had something special... 💔 (DEVIS will miss your traffic)";
  return e.returnValue;
});

/* ---------- 10. RANDOM SCREEN-WIDE FLASH FOR NO REASON ---------- */
(function () {
  setInterval(function () {
    var flash = document.createElement("div");
    flash.style.cssText =
      "position:fixed;inset:0;z-index:100000;pointer-events:none;background:" +
      (Math.random() > 0.5 ? "#ffffff" : "#ff00ff") + ";opacity:0.5;";
    document.body.appendChild(flash);
    setTimeout(function () { flash.remove(); }, 90);
  }, 5000);
})();

/* ---------- 11. HIJACK SCROLL TO BE SLIGHTLY WRONG ---------- */
window.addEventListener("wheel", function (e) {
  // nudges the page sideways while you try to scroll down. evil.
  window.scrollBy(Math.sin(window.scrollY / 100) * 3, 0);
}, { passive: true });

console.log("%cDEVIS™", "font-size:40px;color:magenta;text-shadow:2px 2px lime;");
console.log("%cstop looking at the console and BUY TRAFFIC", "font-size:18px;color:red;");

/* ================================================================
   ===============  ROUND 2: EVEN WORSE  ==========================
   ================================================================ */

/* ---------- 12. AUTOPLAYING SOUND ENGINE (Web Audio, no files) ----------
   Browsers block audio until the first user gesture, so we arm it and
   start the "banger" on the very first click / key / move. */
var DEVIS_AUDIO = (function () {
  var ctx = null, master = null, started = false, muted = false;
  var loopTimer = null, hornTimer = null;
  // a deeply cursed 8-bit "melody" (frequencies in Hz)
  var melody = [523, 659, 392, 523, 330, 587, 494, 261];
  var step = 0;

  function ensure() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.06;
    master.connect(ctx.destination);
  }

  function beep(freq, dur, type) {
    if (!ctx || muted) return;
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type || "square";
    o.frequency.value = freq;
    g.gain.value = 0.0001;
    o.connect(g); g.connect(master);
    var t = ctx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.5, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur);
  }

  function start() {
    if (started) return;
    ensure();
    if (!ctx) return;
    started = true;
    if (ctx.state === "suspended") ctx.resume();
    // endless off-key melody
    loopTimer = setInterval(function () {
      beep(melody[step % melody.length] + (step % 3) * 7, 0.18, "square");
      step++;
    }, 200);
    // surprise AIR HORN every ~7s
    hornTimer = setInterval(function () {
      beep(180, 0.6, "sawtooth");
      setTimeout(function () { beep(240, 0.6, "sawtooth"); }, 120);
    }, 7000);
  }

  return {
    start: start,
    horn: function () { ensure(); if (ctx && ctx.state === "suspended") ctx.resume(); beep(170, 0.5, "sawtooth"); },
    toggleMute: function () { muted = !muted; if (master) master.gain.value = muted ? 0 : 0.06; return muted; },
    isMuted: function () { return muted; }
  };
})();

["click", "keydown", "mousemove", "touchstart"].forEach(function (evt) {
  window.addEventListener(evt, function armOnce() {
    DEVIS_AUDIO.start();
    ["click", "keydown", "mousemove", "touchstart"].forEach(function (e2) {
      window.removeEventListener(e2, armOnce);
    });
  }, { once: false });
});

function toggleMute() {
  var muted = DEVIS_AUDIO.toggleMute();
  var btn = document.getElementById("muteBtn");
  if (muted) {
    btn.textContent = "🔇 fine. silence. (for now)";
    // mockingly un-mute itself after a few seconds
    setTimeout(function () {
      DEVIS_AUDIO.toggleMute();
      btn.textContent = "🔊 BANGER'S BACK BABY — you're welcome";
    }, 4000);
  } else {
    btn.textContent = "🔊 BANGER PLAYING — you're welcome";
  }
}

/* ---------- 13. SELF-REPLICATING POPUP HYDRA ---------- */
var POPUP_COUNT = 0;
var POPUP_MAX = 24; // mercy cap so the tab survives
var POPUP_ADS = [
  { t: "★ CONGRATULATIONS ★", b: "You are the 1,000,000th visitor!<br>Claim your FREE iPod Shuffle!", c: "#00ff00" },
  { t: "⚠ SYSTEM WARNING ⚠", b: "Your computer may be running slow.<br>Download DEVIS CleanerPro™ now!", c: "#ffff00" },
  { t: "💖 HOT CLICKS NEARBY 💖", b: "3 lonely ad impressions in YOUR area<br>want to connect right now!", c: "#ff69b4" },
  { t: "🤑 YOU WON $1,000,000 🤑", b: "(taxes, fees, and dignity not included)<br>Enter card to receive!", c: "#00ffff" },
  { t: "🦠 DEFINITELY NOT A VIRUS", b: "Click YES to not get a virus.<br>Click NO to also not get a virus.", c: "#ffa500" }
];

function spawnPopup() {
  if (POPUP_COUNT >= POPUP_MAX) return;
  POPUP_COUNT++;
  var ad = POPUP_ADS[Math.floor(Math.random() * POPUP_ADS.length)];
  var p = document.createElement("div");
  p.className = "fake-popup";
  p.style.left = Math.max(0, Math.random() * (window.innerWidth - 280)) + "px";
  p.style.top = Math.max(40, Math.random() * (window.innerHeight - 200)) + "px";
  p.innerHTML =
    '<div class="pop-title"><span>' + ad.t + '</span><span class="pop-x">X</span></div>' +
    '<div class="pop-body" style="background:' + ad.c + '">' + ad.b +
    '<br><button>YES! GIVE ME</button></div>';

  // closing one spawns TWO more (hydra). classic.
  p.querySelector(".pop-x").addEventListener("click", function () {
    p.remove();
    POPUP_COUNT--;
    spawnPopup();
    spawnPopup();
  });
  p.querySelector("button").addEventListener("click", function () {
    DEVIS_AUDIO.horn();
    spawnPopup();
  });
  makeDraggable(p, p.querySelector(".pop-title"));
  document.body.appendChild(p);
}

function makeDraggable(el, handle) {
  var ox = 0, oy = 0, dragging = false;
  handle.addEventListener("mousedown", function (e) {
    dragging = true;
    ox = e.clientX - el.offsetLeft;
    oy = e.clientY - el.offsetTop;
    e.preventDefault();
  });
  document.addEventListener("mousemove", function (e) {
    if (!dragging) return;
    el.style.left = (e.clientX - ox) + "px";
    el.style.top = (e.clientY - oy) + "px";
  });
  document.addEventListener("mouseup", function () { dragging = false; });
}

// first wave after a short delay, then a trickle
setTimeout(function () { spawnPopup(); spawnPopup(); }, 3500);
setInterval(function () { if (POPUP_COUNT < 6) spawnPopup(); }, 12000);

/* ---------- 14. FALLING MONEY CONFETTI (endless) ---------- */
(function () {
  var emojis = ["💰", "🤑", "💵", "💸", "🪙"];
  setInterval(function () {
    var m = document.createElement("div");
    m.className = "money";
    m.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    m.style.left = Math.random() * 100 + "vw";
    var dur = (2 + Math.random() * 3);
    m.style.animationDuration = dur + "s";
    m.style.fontSize = (20 + Math.random() * 28) + "px";
    document.body.appendChild(m);
    setTimeout(function () { m.remove(); }, dur * 1000 + 200);
  }, 220);
})();

/* ---------- 15. NEGATIVE COUNTDOWN OF FALSE URGENCY ---------- */
(function () {
  var el = document.getElementById("countdown");
  var secs = 0; // already expired, counts further into the negative
  setInterval(function () {
    secs++;
    var h = Math.floor(secs / 3600);
    var m = Math.floor((secs % 3600) / 60);
    var s = secs % 60;
    var pad = function (x) { return String(x).padStart(2, "0"); };
    if (el) el.textContent = "-" + pad(h) + ":" + pad(m) + ":" + pad(s);
  }, 1000);
})();

/* ---------- 16. CLIVE THE CLICK GOBLIN (annoying mascot) ---------- */
(function () {
  var lines = [
    "It looks like you're trying to leave. Don't. 👺",
    "Did you know? Arbitrage rhymes with garbage. Coincidence?",
    "BUY TRAFFIC. BUY IT. BUY THE TRAFFIC. 🚦",
    "I see you have a mouse. Bold of you.",
    "Psst... wanna buy a click? First one's free. The rest cost your soul.",
    "Clive is watching. Clive is always watching. 👀",
    "You've been here 4 seconds. That's basically a lifetime commitment.",
    "Have you considered clicking MORE things?",
    "I'm not just a goblin. I'm a SYNERGY goblin. 💼"
  ];
  var i = 0;
  var bubble = document.getElementById("mascotBubble");
  setInterval(function () {
    i++;
    if (bubble) bubble.textContent = lines[i % lines.length];
  }, 4500);
  window.mascotTalk = function () {
    DEVIS_AUDIO.horn();
    if (bubble) bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
  };
})();

/* ---------- 17. FAKE DOWNLOAD BAR THAT RESETS AT 99% ---------- */
(function () {
  var fill = document.getElementById("dlFill");
  var pct = document.getElementById("dlPct");
  var p = 0;
  setInterval(function () {
    p += Math.random() * 7;
    if (p >= 99) p = 0; // never finishes, obviously
    if (fill) fill.style.width = p + "%";
    if (pct) pct.textContent = Math.floor(p);
  }, 300);
})();

/* ---------- 18. NEWSLETTER MODAL THAT KEEPS COMING BACK ---------- */
function showNewsletter() {
  var n = document.getElementById("newsletter");
  if (n) n.classList.add("show");
}
function closeNewsletter() {
  var n = document.getElementById("newsletter");
  if (n) n.classList.remove("show");
  // it'll be baaack
  setTimeout(showNewsletter, 9000);
}
setTimeout(showNewsletter, 6000);

/* ---------- 19. MYSTERY-MEAT NAV (every icon does the wrong thing) ---------- */
function mysteryNav(label) {
  alert("You clicked " + label + "... but it goes NOWHERE. Mystery navigation! 🎉");
  DEVIS_AUDIO.horn();
  return false;
}

/* ---------- 20. RIGHT-CLICK & COPY HIJACK ---------- */
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("NICE TRY 😈 Right-click is property of DEVIS™.");
});
document.addEventListener("copy", function (e) {
  if (e.clipboardData) {
    var sel = (window.getSelection() || "").toString();
    e.clipboardData.setData("text/plain", sel + "  — copyright DEVIS™, you thief 🏴‍☠️");
    e.preventDefault();
  }
});

/* ---------- 21. SCREEN SHAKE ON SCROLL ---------- */
(function () {
  var shaking = false;
  window.addEventListener("scroll", function () {
    if (shaking) return;
    shaking = true;
    document.body.style.transition = "transform 0.05s";
    document.body.style.transform = "translate(" + (Math.random() * 8 - 4) + "px," + (Math.random() * 8 - 4) + "px)";
    setTimeout(function () {
      document.body.style.transform = "translate(0,0)";
      shaking = false;
    }, 60);
  }, { passive: true });
})();

/* ================================================================
   EXPOSE INLINE-HANDLER FUNCTIONS TO GLOBAL SCOPE
   Vite serves this file as an ES module, so top-level functions are
   module-scoped (not global). The HTML uses inline on* attributes
   (e.g. onclick="spamAlerts()") which look functions up on window,
   so we re-export them here. (mascotTalk is already set on window.)
   ================================================================ */
Object.assign(window, {
  moveAccept: moveAccept,
  runAway: runAway,
  fakeSubmit: fakeSubmit,
  spamAlerts: spamAlerts,
  toggleMute: toggleMute,
  mysteryNav: mysteryNav,
  closeNewsletter: closeNewsletter
});
