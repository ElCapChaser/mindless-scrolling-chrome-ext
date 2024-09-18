chrome.runtime.onInstalled.addListener(async () => {
  console.log('im installed')
  // Get arrays containing new and old rules
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map(rule => rule.id);
  const newRules = [ 
    {
    id: 4,
    priority: 1,
    action: { type: "redirect", redirect: { url: "https://focussedsearch.netlify.app/" } },
    condition: { urlFilter: "google.com",resourceTypes: ["main_frame"] }
  }
]

  // Use the arrays to update the dynamic rules
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules
  });
  const oldRules2 = await chrome.declarativeNetRequest.getDynamicRules();
});
