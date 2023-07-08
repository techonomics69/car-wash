"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div
      className="drop-shadow-md 
                    self-center
                    text-start 
                    sm:col-span-4 
                    sm:row-span-1 
                    rounded-xl 
                    "
    >
      <div
        className="font-AvenirHeavy
                    text-3xl 
                    font-primary 
                    text-white"
      >
        {title}
      </div>
      <div className="font-Valencia text-2xl mt-2 text-white">{subtitle}</div>
    </div>
  );
};

export default Heading;
