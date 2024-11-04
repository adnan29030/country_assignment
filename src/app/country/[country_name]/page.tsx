interface CountryParams {
  params: {
    country_name: string;
  };
}
export default function Country({params}:CountryParams) {
  const countries : {
        name : string,
        population : number,
        capital : string,
  } [] = [{
    name : "Pakistan",
    population : 251269164,
    capital : "Islamabad",
  },{
    name : "India",  
    population :1441719852,
    capital : "NewDelhi",
  },
  {
    name : "SriLanka",
    population :23103565 ,
    capital : "Colombo",
  },
  {
    name : "Bangladash",
    population :173562364,
    capital : "Dhaka",
  }

 ]
  function countryname(select_url :string){
      return countries.find(country=>country.name.toLowerCase()==select_url.toLowerCase());    
  }
  const result = countryname(params.country_name)
  return (
    <div className="bg-red-600 h-screen">
      <h1 className="flex justify-center items-center h-96 font-extrabold text-5xl">Select Your Country</h1>
      {
        result ? (
          <>
          <h1 className="flex justify-center items-center font-bold text-3xl">Country Name : {result.name}</h1>
          <h1 className="flex justify-center items-center font-bold text-3xl">Country Capital : {result.capital}</h1>
          <h1 className="flex justify-center items-center font-bold text-3xl">Country population : {result.population}</h1>
          </>
        ):(
          <h1 className="flex justify-center items-center font-bold text-3xl">Country Not Found</h1>
        )
      }
    </div>
            
    );
  }
  