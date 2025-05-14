import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span>
        {/* <p className="text-center font-bold text-[25px]">Loading...</p> */}
        <p
          style={{
            fontSize: 25,
            color: "#f1f1f1",
            fontWeight: "bold",

            textAlign: "center",
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
