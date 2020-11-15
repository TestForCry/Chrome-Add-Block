const defaultFilters = [
	//Add blocker
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	// This is for Grabify or IP loggers in general 
	"*://*.grabify.link//*",
	"*://*.bmwforum.co/*",
	"*://*.leancoding.co/*",
	"*://*.spottyfly.com/*",
	"*://*.stopify.co/*",
	"*://*.https://yoütu.be/*",
	"*://*.discörd.com/*",
	"*://*.minecräft.com/*",
	"*://*.freegiftcards.co/*",
	"*://*.disçordapp.com/*",
	"*://*.xda-developers.us//*",
	"*://*.quickmessage.us//*",
	"*://*.fortnight.space/*",
	"*://*.fortnitechat.site*",
	"*://*.youshouldclick.us//*",
	"*://*.joinmy.site/*",
	"*://*.crabrave.pw/*",
	"*://*.xn--yotu-1ra.be/*",
	"*://*.xn--disordapp-s3a.com/*",
	"*://*.xn--minecrft-5za.com/*",
	"*://*.xn--discrd-zxa.com/*",
	"*://*.iplogger.org/*",
	"*://*.the link/*",
	"*://*.the link/*",
	"*://*.the link/*",
	"*://*.the link/*",
	"*://*.the link/*",
	
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
