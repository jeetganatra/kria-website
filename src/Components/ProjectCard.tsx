import {
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    position: "relative",
    width: "100%",
    aspectRatio: "4/3",
    ...shorthands.borderRadius(
      tokens.borderRadiusMedium,
    ),
    ...shorthands.overflow("hidden"),
    boxShadow: tokens.shadow16,
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between", // Pushes title left and button right
    alignItems: "center",
    padding: "16px",
    // Gradient overlay makes text readable over any image
    background:
      "linear-gradient(transparent, rgba(0,0,0,0.8))",
  },
  title: {
    color: tokens.colorNeutralForegroundInverted,
    fontSize: "clamp(0.75rem, 2vw, 1.25rem)",
    fontWeight: tokens.fontWeightSemibold,
  },
});

export function ProjectCard({
  id,
  title,
  imageUrl,
}: {
  id: number;
  title: string;
  imageUrl: string;
}) {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/project/${id}`)}
    >
      <img
        src={imageUrl}
        alt={title}
        className={styles.image}
      />

      <div className={styles.footer}>
        <span className={styles.title}>
          {title}
        </span>

        <button
          className="group relative inline-flex h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] items-center justify-center overflow-hidden rounded-full bg-[#ebddd1] font-medium text-[#000000] transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/project/${id}`);
          }}
        >
          <div className="flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[clamp(0.75rem,2vw,1.25rem)] w-[clamp(0.75rem,2vw,1.25rem)]"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
