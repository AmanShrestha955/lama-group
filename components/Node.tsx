type NodeProps = {
  letter: string;
  size: number;
  textSize: number;
  preview?: boolean;
  hovered: boolean;
};
export default function NodeCard({
  letter,
  size,
  textSize,
  preview = false,
  hovered,
}: NodeProps) {
  const CORNER = [
    `-top-1.5 -left-1.5 border-t border-l ${hovered ? " border-t-bronze-dark  border-l-bronze-dark" : " border-t-rule  border-l-rule"}`,
    `-bottom-1.5 -left-1.5 border-b border-l ${hovered ? " border-b-bronze-dark  border-l-bronze-dark" : " border-b-rule  border-l-rule"}`,
    `-top-1.5 -right-1.5 border-t border-r ${hovered ? " border-t-bronze-dark  border-r-bronze-dark" : "border-t-rule border-r-rule"}`,
    `-bottom-1.5 -right-1.5 border-b border-r ${hovered ? " border-b-bronze-dark  border-r-bronze-dark" : "border-b-rule border-r-rule"}`,
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
      className={`relative  border ${hovered ? "border-bronze-dark" : "border-bronze-dark/40"} flex justify-center items-center`}
    >
      {CORNER.map((item, index) => (
        <div
          key={index}
          className={`absolute size-2 ${item} transition-colors duration-300`}
        ></div>
      ))}
      <h1
        style={{ fontSize: `${textSize}rem` }}
        className={`font-display font-light ${hovered ? "text-bronze" : "text-bronze-dark"} duration-300 transition-colors`}
      >
        {letter}
      </h1>
    </div>
  );
}
