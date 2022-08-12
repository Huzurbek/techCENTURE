import { Chip, Typography } from "@mui/material";

export default function BigNewsCard() {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          src="https://www.protocol.com/media-library/data-center.jpg?id=30418702&width=1245&quality=85&coordinates=0%2C656%2C0%2C656&height=700"
          width="500px"
          height="300px"
          alt="bigNewsCard"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        />
      </div>
      <div style={{ margin: "20px 0" }}>
        <Chip label="NEWS" color="warning" />
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 24 }}>
          <a
            style={{
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "120%",
              color: "#1E2A39",
              marginBottom: "8px",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Rolling your own machine learning
          </a>
        </div>
        <Typography
          style={{
            fontSize: "16px",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#696984",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Over the last several years, cloud providers have been urging their
          customers to adopt machine learning services to unlock new
          capabilities for their applications. The good news for the Big Three
          is that customers are really starting to show an interest in those
          services. The bad news? They don’t always want to run them on the
          cloud.
        </Typography>
      </div>
      <div>
        <a href="#" style={{ textDecoration: "underline" }}>
          Read more
        </a>
      </div>
    </div>
  );
}
