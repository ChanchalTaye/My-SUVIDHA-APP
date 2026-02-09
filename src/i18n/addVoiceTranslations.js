// Script to add voice guidance translations to all languages in translations.js
// This script adds the voice prompt keys to each language section

const fs = require('fs');
const path = require('path');

const voicePromptsTemplate = `
    // Voice Guidance
    voiceWelcome: "TRANSLATE: Welcome to My SUVIDHA APP",
    voiceViewingElectricity: "TRANSLATE: You are viewing Electricity",
    voiceViewingGas: "TRANSLATE: You are viewing Gas",
    voiceViewingWater: "TRANSLATE: You are viewing Water",
    voiceViewingBill: "TRANSLATE: You are viewing bill",
    voiceRegisterComplaint: "TRANSLATE: You are registering a complaint",
    voiceNewConnection: "TRANSLATE: You are requesting a new connection",
    voiceServiceInfo: "TRANSLATE: You are viewing service information",`;

// Language-specific translations (add these manually or use translation API)
const voiceTranslations = {
    as: {
        voiceWelcome: "একীভূত স্মাৰ্ট চিটি সেৱাসমূহলৈ স্বাগতম",
        voiceViewingElectricity: "আপুনি বিদ্যুৎ চাই আছে",
        voiceViewingGas: "আপুনি গেছ চাই আছে",
        voiceViewingWater: "আপুনি পানী চাই আছে",
        voiceViewingBill: "আপুনি বিল চাই আছে",
        voiceRegisterComplaint: "আপুনি অভিযোগ পঞ্জীয়ন কৰি আছে",
        voiceNewConnection: "আপুনি নতুন সংযোগৰ অনুৰোধ কৰি আছে",
        voiceServiceInfo: "আপুনি সেৱা তথ্য চাই আছে"
    },
    bn: {
        voiceWelcome: "একীভূত স্মার্ট সিটি সেবায় স্বাগতম",
        voiceViewingElectricity: "আপনি বিদ্যুৎ দেখছেন",
        voiceViewingGas: "আপনি গ্যাস দেখছেন",
        voiceViewingWater: "আপনি জল দেখছেন",
        voiceViewingBill: "আপনি বিল দেখছেন",
        voiceRegisterComplaint: "আপনি অভিযোগ নিবন্ধন করছেন",
        voiceNewConnection: "আপনি নতুন সংযোগের অনুরোধ করছেন",
        voiceServiceInfo: "আপনি সেবা তথ্য দেখছেন"
    },
    or: {
        voiceWelcome: "ଏକୀକୃତ ସ୍ମାର୍ଟ ସିଟି ସେବାକୁ ସ୍ୱାଗତ",
        voiceViewingElectricity: "ଆପଣ ବିଦ୍ୟୁତ ଦେଖୁଛନ୍ତି",
        voiceViewingGas: "ଆପଣ ଗ୍ୟାସ ଦେଖୁଛନ୍ତି",
        voiceViewingWater: "ଆପଣ ଜଳ ଦେଖୁଛନ୍ତି",
        voiceViewingBill: "ଆପଣ ବିଲ ଦେଖୁଛନ୍ତି",
        voiceRegisterComplaint: "ଆପଣ ଅଭିଯୋଗ ପଞ୍ଜୀକରଣ କରୁଛନ୍ତି",
        voiceNewConnection: "ଆପଣ ନୂତନ ସଂଯୋଗ ଅନୁରୋଧ କରୁଛନ୍ତି",
        voiceServiceInfo: "ଆପଣ ସେବା ସୂଚନା ଦେଖୁଛନ୍ତି"
    }
    // Add more languages as needed
};

console.log('Voice translations template ready');
console.log('Manual integration required for all 23 languages');
