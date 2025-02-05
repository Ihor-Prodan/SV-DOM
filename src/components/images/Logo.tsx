export const Logo: React.FC = () => {
  return (
    <svg
      width="90"
      height="75"
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="70,120 200,40 330,120"
        fill="none"
        stroke="#000000"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <polyline
        points="90,130 200,60 310,130"
        fill="none"
        stroke="#000000"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <rect
        x="185"
        y="100"
        width="30"
        height="30"
        stroke="black"
        stroke-width="3"
        fill="none"
      />
      <line
        x1="200"
        y1="100"
        x2="200"
        y2="130"
        stroke="black"
        stroke-width="3"
      />
      <line
        x1="185"
        y1="115"
        x2="215"
        y2="115"
        stroke="black"
        stroke-width="3"
      />

      <text
        x="200"
        y="180"
        font-family="Arial, sans-serif"
        font-size="48"
        font-weight="bold"
        fill="#000000"
        text-anchor="middle"
      >
        SV DOM
      </text>

      <line
        x1="50"
        y1="210"
        x2="350"
        y2="210"
        stroke="#000000"
        stroke-width="6"
        stroke-linecap="round"
      />
      <line
        x1="50"
        y1="220"
        x2="350"
        y2="220"
        stroke="#000000"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>
  );
};
