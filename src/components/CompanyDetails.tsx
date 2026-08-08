interface CompanyDetailsProps {
  companyPosition: string;
  companyName: string;
  companyUrl: string;
  dates: string;
  details: string[];
}

export const CompanyDetails = ({
  companyPosition,
  companyName,
  companyUrl,
  dates,
  details,
}: CompanyDetailsProps) => {
  return (
    <div>
      <div>
        <div className="flex flex-col text-left sm:flex sm:flex-row gap-1">
          <div className="text-xl sm:text-3xl font-bold mb-2">{companyPosition} @</div>
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-3xl font-bold mb-2 text-[#56ddc1] hover:underline cursor-pointer"
          >
            {companyName}
          </a>
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
