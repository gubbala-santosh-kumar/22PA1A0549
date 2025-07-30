import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function RedirectHandler() {
  const { code } = useParams();

  useEffect(() => {
    const data = localStorage.getItem(code);

    if (data) {
      const parsed = JSON.parse(data);

      if (Date.now() < parsed.expiry) {
        parsed.clicks.push({
          time: new Date().toISOString(),
          referrer: document.referrer || "direct",
          geo: "IN",
        });

        localStorage.setItem(code, JSON.stringify(parsed));
        window.location.href = parsed.longUrl;
      } else {
        alert("Link expired.");
      }
    } else {
      alert("Invalid shortcode.");
    }
  }, [code]);

  return null;
}
