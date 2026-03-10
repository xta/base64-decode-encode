import assert from 'assert';
import { encode, decode } from './base64.js';

const tests = [
    { input: 'Hello world', encoded: 'SGVsbG8gd29ybGQ=' },
    { input: '',            encoded: '' },
    { input: 'a',           encoded: 'YQ==' },
    { input: '123',         encoded: 'MTIz' },
];

for (const { input, encoded } of tests) {
    assert.strictEqual(encode(input), encoded, `encode(${JSON.stringify(input)})`);
    assert.strictEqual(decode(encoded), input, `decode(${JSON.stringify(encoded)})`);
}

// round-trip
const sample = 'The quick brown fox';
assert.strictEqual(decode(encode(sample)), sample, 'round-trip');

// unicode
const unicodeTests = [
    { input: 'héllo',   encoded: 'aMOpbGxv' },
    { input: '日本語',   encoded: '5pel5pys6Kqe' },
    { input: '🎉',      encoded: '8J+OiQ==' },
];

for (const { input, encoded } of unicodeTests) {
    assert.strictEqual(encode(input), encoded, `encode(${JSON.stringify(input)})`);
    assert.strictEqual(decode(encoded), input, `decode(${JSON.stringify(encoded)})`);
}

// unicode round-trip
const unicodeSample = 'こんにちは 🌍';
assert.strictEqual(decode(encode(unicodeSample)), unicodeSample, 'unicode round-trip');

console.log('All tests passed.');
