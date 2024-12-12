import PageHeader from "../Components/PageHeader";

const NotFound = () => {
  return (
    <div className="">
      <PageHeader title="Oops!" backLink="/" />
      <h1 className="text-xl md:text-2xl font-bold">This page does not exist :(</h1>
    </div>
  );
};

export default NotFound;
