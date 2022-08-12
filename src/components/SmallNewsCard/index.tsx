import { Box, Chip, Typography } from "@mui/material";

interface ISmallNewsCard {
  title: string;
  text: string;
  image: string;
}
const SmallNewsCard: React.FC<ISmallNewsCard> = ({ title, text, image }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
      <Box>
        <img
          src={image}
          width="170px"
          height="110px"
          alt="smallNewsCard"
          style={{ borderRadius: "10px", overflow: "hidden" }}
        />
      </Box>
      <div style={{ marginLeft: "20px" }}>
        <div style={{ fontWeight: 600, fontSize: 22 }}>
          {/* <Chip label="Press release" color="warning" size="small" style={{ marginRight: 10 }}  /> */}
          <a
            style={{
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "110%",
              color: "#1E2A39",
              marginBottom: "8px",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </a>
        </div>
        <Typography
          style={{
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "140%",
            color: "#696984",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginTop: "10px",
          }}
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default SmallNewsCard;
