// MANUAL GOOGLE SCHOLAR UPDATES
// Copy each paper's "Cited by" count from your Google Scholar profile:
// https://scholar.google.com/citations?user=lTnyBXEAAAAJ&hl=en
// Replace null with the actual number (use 0 only for a verified zero).
// Set updated to the date you checked that paper, e.g. '2026-10-19'.
// Example entry: { count: 12, updated: '2026-10-19' }
// Save this file, then commit and push to publish the updated counts.
const scholarCitations = {
    // Hypothalamic-brainstem activity sequence
    '10.64898/2026.05.26.728061': { count: null, updated: '' },
    // Closed-loop auditory stimulation
    '10.1126/scitranslmed.aea5469': { count: 1, updated: 'oct 19, 2026' },
    // Attentional failures after sleep deprivation
    '10.1038/s41593-025-02098-8': { count: 50, updated: 'oct 19, 2026' },
    // EEG-LLAMAS
    '10.1016/j.neuroimage.2023.120092': { count: 19, updated: 'oct 19, 2026' },
    // Imaging the temporal dynamics of brain states
    '10.1016/j.cobeha.2021.02.005': { count: 36, updated: 'oct 19, 2026' },
};

document.querySelectorAll('.citation-badge[data-doi]').forEach((badge) => {
    const entry = scholarCitations[badge.dataset.doi];
    const hasCount = Number.isInteger(entry?.count) && entry.count >= 0;
    const count = hasCount ? entry.count.toLocaleString() : '—';
    badge.querySelector('.citation-count').textContent = count;
    badge.href = 'https://scholar.google.com/citations?user=lTnyBXEAAAAJ&hl=en';
    badge.title = hasCount
        ? `${count} Google Scholar citations (manually entered${entry.updated ? `; checked ${entry.updated}` : ''})`
        : 'Google Scholar citation count not yet entered';
    badge.setAttribute('aria-label', badge.title);
});
