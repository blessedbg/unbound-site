#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Load translation files
const enTranslations = JSON.parse(fs.readFileSync('src/i18n/locales/en.json', 'utf8'));
const esTranslations = JSON.parse(fs.readFileSync('src/i18n/locales/es.json', 'utf8'));

// Scan JSX files for translation keys
function scanJSXFiles() {
  const files = glob.sync('src/**/*.{tsx,ts,jsx,js}');
  const usedKeys = new Set();
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Match t('key') patterns
    const tMatches = content.match(/t\(['"`]([^'"`]+)['"`]\)/g);
    if (tMatches) {
      tMatches.forEach(match => {
        const key = match.match(/t\(['"`]([^'"`]+)['"`]\)/)[1];
        usedKeys.add(key);
      });
    }
    
    // Match {t('key')} patterns
    const tBraceMatches = content.match(/\{t\(['"`]([^'"`]+)['"`]\)\}/g);
    if (tBraceMatches) {
      tBraceMatches.forEach(match => {
        const key = match.match(/\{t\(['"`]([^'"`]+)['"`]\)\}/)[1];
        usedKeys.add(key);
      });
    }
  });
  
  return Array.from(usedKeys);
}

// Get all translation keys from English (source of truth)
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Check if key exists in object
function hasKey(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }
  return true;
}

const enKeys = getAllKeys(enTranslations);
const usedKeys = scanJSXFiles();
const missingKeys = [];
const unusedKeys = [];

console.log('🔍 Checking translation completeness...\n');

// Check for missing Spanish translations
for (const key of enKeys) {
  if (!hasKey(esTranslations, key)) {
    missingKeys.push(key);
  }
}

// Check for unused translation keys
for (const key of enKeys) {
  if (!usedKeys.includes(key)) {
    unusedKeys.add(key);
  }
}

if (missingKeys.length > 0) {
  console.error('❌ Missing Spanish translations:');
  missingKeys.forEach(key => console.error(`  - ${key}`));
  console.error(`\n💥 Found ${missingKeys.length} missing translation(s)`);
  process.exit(1);
}

if (unusedKeys.length > 0) {
  console.warn('⚠️  Unused translation keys:');
  unusedKeys.forEach(key => console.warn(`  - ${key}`));
  console.warn(`\n📝 Found ${unusedKeys.length} unused key(s) (consider removing)`);
} else {
  console.log('✅ All translations are complete!');
}

console.log(`\n📊 Translation stats:`);
console.log(`  - Total keys: ${enKeys.length}`);
console.log(`  - Used keys: ${usedKeys.length}`);
console.log(`  - Missing ES: ${missingKeys.length}`);
console.log(`  - Unused: ${unusedKeys.length}`);

process.exit(0);