chrome.runtime.onInstalled.addListener(async () => {
  // Get arrays containing new and old rules
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map(rule => rule.id);
  const newRules = [ 
    {
    id: 1,
    priority: 1,
    action: { type: "redirect", redirect: { url: "https://focussedsearch.netlify.app/?platform=youtube" } },
      condition: {
        regexFilter: "^https://(www\\.)?youtube\\.com(/)?$",  // Matches only youtube.com or youtube.com/
        resourceTypes: ["main_frame"]
      }
    }
]
// The Linkedin search logic. 
// https://www.linkedin.com/search/results/all/?keywords=steven%20verlinden&sid=trg

  // Use the arrays to update the dynamic rules
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules
  });
});

