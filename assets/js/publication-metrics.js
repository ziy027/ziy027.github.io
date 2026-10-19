// Crossref's citation counts cover citations deposited by participating publishers.
// They can differ from Google Scholar and other citation indexes.
document.querySelectorAll('.citation-badge[data-doi]').forEach(async (badge) => {
    const count = badge.querySelector('.citation-count');
    try {
        const response = await fetch(
            `https://api.crossref.org/works/${encodeURIComponent(badge.dataset.doi)}`,
            { signal: AbortSignal.timeout(10000) }
        );
        if (!response.ok) throw new Error(`Crossref returned ${response.status}`);
        const data = await response.json();
        const citations = data.message['is-referenced-by-count'];
        if (!Number.isInteger(citations) || citations < 0) {
            throw new Error('Citation count unavailable');
        }
        count.textContent = citations.toLocaleString();
        badge.title = `${citations.toLocaleString()} citations indexed by Crossref`;
    } catch {
        count.textContent = 'N/A';
        badge.title = 'Crossref citation count unavailable; click to open the paper';
    }
});
