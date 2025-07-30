import { Container, Typography } from "@mui/material";
import Navbar from "./Navbar";

export default function StatisticsPage() {
  const entries = Object.entries(localStorage).filter(
    ([key]) => key !== "logs"
  );

  return (
    <Container>
      <Navbar shortUrl={"/"} />
      {entries.map(([code, value]) => {
        const { longUrl, expiry, clicks } = JSON.parse(value);
        return (
          <div key={code} style={{ marginBottom: "1rem" }}>
            <Typography>
              <strong>{code}</strong>: {longUrl}
            </Typography>
            <Typography>
              Expires: {new Date(expiry).toLocaleString()}
            </Typography>
            <Typography>Clicks: {clicks.length}</Typography>
            {clicks.map((click, idx) => (
              <Typography key={idx}>
                ↳ {click.time} from {click.referrer} (Location: {click.geo})
              </Typography>
            ))}
          </div>
        );
      })}
    </Container>
  );
}
