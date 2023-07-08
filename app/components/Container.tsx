interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
              max-w-[1720px]
              mx-auto
              ps-4
              xl:pr-20
              xl:pl-36
              md:pr-10
              md:pl-36
              sm:pr-2
          "
    >
      {children}
    </div>
  );
};

export default Container;
