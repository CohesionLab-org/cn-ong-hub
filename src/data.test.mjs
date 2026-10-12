import test from 'node:test';
import assert from 'node:assert/strict';
import { ARCHIVE_DOCS, matchesDocument } from './data.mjs';

test('archive search supports Romanian accents, casing, years and empty recovery', () => {
  const doc = ARCHIVE_DOCS.find(doc => doc.category === 'Rezoluții');
  assert.equal(matchesDocument(doc, '  REZOLUTIA  '), true);
  assert.equal(matchesDocument(doc, 'rezoluții'), true);
  assert.equal(matchesDocument(doc, '2024'), true);
  assert.equal(matchesDocument(doc, 'absent'), false);
  assert.equal(matchesDocument(doc, ''), true);
});

test('available sources use HTTPS publishers; missing originals have no fabricated URL', () => {
  assert.equal(new Set(ARCHIVE_DOCS.map(doc => doc.id)).size, ARCHIVE_DOCS.length);
  const available = ARCHIVE_DOCS.filter(doc => doc.url);
  assert.equal(available.length, 2);
  for (const doc of available) {
    assert.equal(new URL(doc.url).protocol, 'https:');
    assert.ok(['eef.md', 'crdc.md'].includes(new URL(doc.url).hostname));
  }
  assert.equal(ARCHIVE_DOCS.filter(doc => !doc.url).length, 6);
});
