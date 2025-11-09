interface CompanyDetailsProps {
  companyPosition: string;
  companyName: string;
  dates: string;
  details: string[];
}

export const CompanyDetails = ({
  companyPosition,
  companyName,
  dates,
  details,
}: CompanyDetailsProps) => {
  return (
    <div>
      <div>
        <div className="flex flex-col text-left sm:flex sm:flex-row gap-1">
          <div className="text-xl sm:text-3xl font-bold mb-2">{companyPosition}@</div>
          <div className="text-xl sm:text-3xl font-bold mb-2 text-[#56ddc1]">{companyName}</div>
        </div>
        <div>
          <div className="text-left text-lg sm:text-2xl">{dates}</div>
        </div>
        {details.map((detail, index) => (
          <div key={index} className="flex gap-2 text-left text-sm sm:text-xl mt-6 ">
            <div className=" text-[#56ddc1]">▹</div>
            <div className="max-w-lg text-justify text-[#8791af]">
              {detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
