import BackgroundBlur from "../components/BackgroundBlur.tsx";

export default function Background() {
  return (
    <>
      <div className="absolute bottom-[110px] right-[120px]">
        <BackgroundBlur
          color="primary"
          animationLoops={{
            x: {
              values: [-30, -50, 80, 10],
              duration: 6,
            },
            y: {
              values: [-10, 100, 20, 80],
              duration: 20,
            },
            size: {
              values: [100],
              duration: 20,
            },
          }}
        />
        <BackgroundBlur
          color="secondary"
          animationLoops={{
            y: {
              values: [-3, 80, 10, -20],
              duration: 12,
            },
            x: {
              values: [-30, -50, 80, 10],
              duration: 10,
            },
            size: {
              values: [100],
              duration: 20,
            },
          }}
        />
      </div>
      <div className="absolute top-[-10px] left-[-20px]">
        <BackgroundBlur
          color="primary"
          animationLoops={{
            x: {
              values: [-10, 60, 20],
              duration: 6,
            },
            y: {
              values: [-10, 50, 0, 20],
              duration: 20,
            },
            size: {
              values: [120, 180, 100],
              duration: 20,
            },
          }}
        />
        <BackgroundBlur
          color="secondary"
          animationLoops={{
            x: {
              values: [30, -15, 50, -5],
              duration: 10,
            },
            y: {
              values: [-3, 50, 10, -20, -3],
              duration: 12,
            },
            size: {
              values: [160, 80, 100],
              duration: 20,
            },
          }}
        />
      </div>
    </>
  );
}
