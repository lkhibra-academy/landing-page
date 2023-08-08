export default function getTraffic() {
    const utmSource = new URLSearchParams(window.location.search).get("utm_source");
    const utmMedium = new URLSearchParams(window.location.search).get("utm_medium");
    const utmCampaign = new URLSearchParams(window.location.search).get("utm_campaign");
    const utmContent = new URLSearchParams(window.location.search).get("utm_content");
    const utmTerm = new URLSearchParams(window.location.search).get("utm_term");
    const refferer = document.referrer;
    return {
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        refferer
    }
}