"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className=" mb-2 text-start text-2xl col-span-4 row-span-1 bg-blue-950 rounded-xl p-4">
      <div className="text-3xl font-primary text-white">{title}</div>
      <div className="font-sans text-2xl mt-2 text-white">{subtitle}</div>
    </div>
  );
};

export default Heading;
