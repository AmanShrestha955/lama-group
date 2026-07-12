type NodeProps = {
  letter: string;
  size: number;
  textSize: number;
  preview?: boolean;
};
export default function NodeCard({
  letter,
  size,
  textSize,
  preview = false,
}: NodeProps) {
  const CORNER = [
    "-top-1.5 -left-1.5 border-t border-t-rule border-l border-l-rule",
    "-bottom-1.5 -left-1.5 border-b border-b-rule border-l border-l-rule",
    "-top-1.5 -right-1.5 border-t border-t-rule border-r border-r-rule",
    "-bottom-1.5 -right-1.5 border-b border-b-rule border-r border-r-rule",
  ];
  return preview ? (
    <div
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
      className=" relative  border border-rule flex justify-center items-center"
    >
      <h1
        style={{ fontSize: `${textSize}rem` }}
        className="font-display font-light text-rule"
      >
        +
      </h1>
    </div>
  ) : (
    <div
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
      className=" relative  border border-bronze-dark/40 flex justify-center items-center"
    >
      {CORNER.map((item, index) => (
        <div key={index} className={`absolute size-2 ${item}`}></div>
      ))}
      <h1
        style={{ fontSize: `${textSize}rem` }}
        className="font-display font-light text-bronze-dark"
      >
        {letter}
      </h1>
    </div>
  );
}
