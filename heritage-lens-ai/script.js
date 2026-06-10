const monumentData = {
    'taj-mahal': { name:'Taj Mahal', location:'Agra, Uttar Pradesh', period:'17th Century (1632-1653)', builder:'Shah Jahan', history:'Iconic white marble mausoleum built by Shah Jahan for Mumtaz Mahal. UNESCO World Heritage Site.', coordinates:{lat:27.1751,lng:78.0421}, image:'https://images.unsplash.com/photo-1566033706-6e4b8f5976c7?w=800&h=600' },
    'red-fort': { name:'Red Fort', location:'Delhi', period:'17th Century (1638-1648)', builder:'Shah Jahan', history:'Historic fortified palace in Delhi. Red sandstone symbolizes Mughal power. Hosts PM Independence Day speech.', coordinates:{lat:28.6562,lng:77.2410}, image:'https://images.unsplash.com/photo-1599669458028-9514d0d7c5e1?w=800&h=600' },
    'charminar': { name:'Charminar', location:'Hyderabad, Telangana', period:'16th Century (1591)', builder:'Muhammad Quli Qutb Shah', history:'Iconic four minarets built in 1591. Symbol of Hyderabad.', coordinates:{lat:17.3850,lng:78.4867}, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fB/Charminar_Hyderabad.jpg/800px-Charminar_Hyderabad.jpg' },
    'hampi': { name:'Hampi', location:'Karnataka', period:'14th-16th Century', builder:'Vijayanagara Empire', history:'Vijayanagara Empire center with temple ruins. UNESCO World Heritage Site.', coordinates:{lat:15.3350,lng:76.4600}, image:'https://images.unsplash.com/photo-1599669458028-9514d0d7c5e1?w=800&h=600' },
    'qutub-minar': { name:'Qutub Minar', location:'Delhi', period:'12th-13th Century (1199-1220)', builder:'Qutb-ud-din Aibak', history:'Tallest brick minaret at 72.5m. UNESCO World Heritage Site.', coordinates:{lat:28.5630,lng:77.1290}, image:'https://images.unsplash.com/photo-1599669458028-9514d0d7c5e1?w=800&h=600' }
};
let conversationMemory = [], lastMessageText = '', currentMonument = null;

function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if(!msg) return;
    addChatMessage(msg, 'user');
    conversationMemory.push({type:'user',text:msg});
    input.value = '';
    showTypingAnimation();
    setTimeout(() => { const r = fakeAIResponse(msg); removeTypingAnimation(); addChatMessage(r, 'ai'); conversationMemory.push({type:'ai',text:r}); lastMessageText = r; }, 1500);
}
function handleChatKey(e) { if(e.key==='Enter') sendMessage(); }
function addChatMessage(text, type) {
    const c = document.getElementById('chatContainer');
    const d = document.createElement('div');
    d.className = `chat-message ${type}-message`;
    d.innerHTML = `<div class="message-avatar">${type==='user'?'<i class="fas fa-user"></i>':'<i class="fas fa-robot"></i>'}</div><div class="message-content">${text}</div>`;
    c.appendChild(d); c.scrollTop = c.scrollHeight;
}
function showTypingAnimation() {
    const c = document.getElementById('chatContainer');
    const t = document.createElement('div');
    t.className = 'chat-message ai-message'; t.id = 'typingAnimation';
    t.innerHTML = '<div class="message-avatar"><i class="fas fa-robot"></i></div><div class="message-content">...</div>';
    c.appendChild(t); c.scrollTop = c.scrollHeight;
}
function removeTypingAnimation() { const t = document.getElementById('typingAnimation'); if(t) t.remove(); }
function fakeAIResponse(msg) {
    const l = msg.toLowerCase();
    for(const [k,d] of Object.entries(monumentData)) {
        if(l.includes(d.name.toLowerCase())||l.includes(k)) { currentMonument=k; return `${d.name} - ${d.period}
${d.history}
Location: ${d.location}`; }
    }
    if(l.includes('hello')||l.includes('hi')) return 'Hello! Ask about Taj Mahal, Red Fort, Charminar, Hampi, or Qutub Minar!';
    if(l.includes('where')) return 'Taj Mahal:Agra, Red Fort:Delhi, Charminar:Hyderabad, Hampi:Karnataka, Qutub Minar:Delhi';
    return 'Ask about specific monuments: Taj Mahal, Red Fort, Charminar, Hampi, Qutub Minar';
}
function speakLastMessage() { if(lastMessageText) speakText(lastMessageText); }
function speakText(text) {
    if('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text); u.rate = 0.9;
        window.speechSynthesis.speak(u);
    } else alert('Voice not supported');
}
function speakModalText() { speakText(`${document.getElementById('modalTitle').textContent}. ${document.getElementById('modalDescription').textContent}`); }
function speakResult() { if(currentMonument&&monumentData[currentMonument]) speakText(`${monumentData[currentMonument].name}: ${monumentData[currentMonument].history}`); }
function openModal(k) {
    const d = monumentData[k]; if(!d) return;
    currentMonument = k;
    document.getElementById('modalImage').src = d.image;
    document.getElementById('modalTitle').textContent = d.name;
    document.getElementById('modalDescription').textContent = d.history;
    document.getElementById('imageModal').style.display = 'flex';
}
function closeModal() { document.getElementById('imageModal').style.display = 'none'; window.speechSynthesis.cancel(); }
document.getElementById('imageModal')?.addEventListener('click', e => { if(e.target===this) closeModal(); });
function scanMonument(k) { currentMonument=k; if(document.getElementById('lensInput')) document.getElementById('lensInput').value = monumentData[k].name; scanMonumentFromInput(); }
function scanMonumentFromInput() {
    const input = document.getElementById('lensInput').value.trim(); if(!input) return;
    const r = document.getElementById('lensResult'), s = document.getElementById('scanningAnimation'), a = document.getElementById('aiResultCard');
    r.style.display='block'; s.style.display='block'; a.style.display='none';
    setTimeout(() => {
        s.style.display='none';
        let d=null,k=null;
        for(const [key,data] of Object.entries(monumentData)) { if(input.toLowerCase().includes(data.name.toLowerCase())||input.toLowerCase().includes(key)) { d=data; k=key; break; } }
        if(d) { currentMonument=k; document.getElementById('resultMonumentName').textContent = `${d.name} - ${d.period}`; document.getElementById('resultDescription').textContent = `${d.history}
Location: ${d.location}`; a.style.display='block'; }
        else { document.getElementById('resultMonumentName').textContent = 'Not Found'; document.getElementById('resultDescription').textContent = 'Try: Taj Mahal, Red Fort, Charminar, Hampi, Qutub Minar'; a.style.display='block'; }
    }, 2000);
}
function showMap() {
    const k = document.getElementById('monumentSelect').value, p = document.getElementById('mapPreview');
    if(!k) { p.innerHTML='<p>Select monument</p>'; return; }
    const d = monumentData[k]; if(!d) return;
    const url = `https://www.google.com/maps?q=${d.coordinates.lat},${d.coordinates.lng}`;
    p.innerHTML = `<h3 style="color:var(--gold);margin-bottom:15px">${d.name}</h3><p style="color:var(--gray-light)">${d.location}</p><a href="${url}" target="_blank" class="btn btn-primary"><i class="fas fa-map-marker-alt"></i> Open Maps</a>`;
}
function showMapFromResult() { if(currentMonument&&monumentData[currentMonument]) window.open(`https://www.google.com/maps?q=${monumentData[currentMonument].coordinates.lat},${monumentData[currentMonument].coordinates.lng}`, '_blank'); }
console.log('🏛️ HeritageLens AI - Ask: Taj Mahal, Red Fort, Charminar, Hampi, Qutub Minar');
